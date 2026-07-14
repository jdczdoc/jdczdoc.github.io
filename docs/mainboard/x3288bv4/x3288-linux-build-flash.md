---
sidebar_position: 10
title: Linux 编译与烧录
description: X3288 Linux QT 编译、boot.img/system.img 生成和固件烧录
---

# Linux 编译与烧录

本页保留 Linux QT 编译、boot.img/system.img 生成和烧录流程。

## 编译Linux+QT

### 安装依赖包

使用如下命令安装所需的软件包：

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev lib32ncurses5-dev lzop
```

### 编译uboot、kernel

说明：QT系统使用的uboot与内核是与安卓一套代码，所以需要使用到安卓的代码包，为防止混淆，特此说明。与安卓的区别是，boot.img使用busybox生成，system.img使用buildroot生成。

为适配QT环境的LCD与触摸屏需要配置两个宏：

修改kernel/drivers/input/touchscreen/gslX680.c文件

如果是qt, 需要#define TS_QT

如果是android , 需要 //#define TS_QT

修改kernel/drivers/video/rockchip/lcdc/rk3288_lcdc.c文件

如果是qt, 需要#define LCD_QT

如果是android , 需要 //#define LCD_QT

配置完上述两个宏后，接下来根据《x3288安卓用户手册》将安卓代码编译一遍，下面讲如何生成QT的文件系统。

### 安装busybox生成boot.img

从网盘下载busybox-1.19.4.tar.gz拷贝到用户目录，执行下面指令解压缩：

```bash
tar  -xvf  busybox-1.19.4.tar.gz
cd  busybox-1.19.4
```

打开makefile，配置交叉编译工具链路径，笔者路径如下：

CROSS_COMPILE ?= /usr/local/opt/ARM/toolschain/4.4.3/bin/arm-linux-

用户可根据自己的交叉编译链路径进行配置，配置完后执行

```bash
make
make install
dd if=/dev/zero of=initrd.img bs=1k count=8192
sudo mkfs.ext2 -F initrd.img
sudo mkdir /mnt/initrd
sudo mount -t ext2 -o loop initrd.img /mnt/initrd
sudo cp _install/* /mnt/initrd -a
sudo umount /mnt/initrd
gzip --best -c initrd.img > ramdisk.img
sudo chmod 777 ramdisk.img
```

Androidpath：rkst/mkkrnlimg ramdisk.img boot.img &gt;/dev/null

根目录即生成boot.img

注：androidpath是指安卓代码的路径，mkkrnlimg工具在安卓代码中，用户可以将上述代码编写成一个脚本方便编译。

### 安装、编译buildroot源码包

从光盘中拷贝buildroot源码包buildroot-x3288.tar.gz，拷贝到ubuntu的home目录，使用命令终端解压buildroot-x3288.tar.gz到当前目录，即完成了buildroot安装，如下图所示：

```bash
tar  -xvf  buildroot-x3288.tar.gz
cd  buildroot-x3288
make
cp  output/images/rootfs.ext2 ./system.img
```

QT环境下的system.img制作完成。

### 编译文件系统

在buildroot目录下执行make指令即可编译文件系统。默认编译会少一些插件或库，会弹出一些错误信息。

该提示信息表明编译需要git包，执行如下指令安装：

```bash
sudo  apt-get  install  git
```

该提示表明标准的C++库没有安装，执行如下指令安装：

```bash
sudo apt-get install lib32stdc++-4.9-dev
```

该提示表明缺少libz库，执行如下指令安装：

```bash
sudo apt-get install lib32z1
```

再执行make指令即可正常编译了。编译完成后，最终打包好的文件系统rootfs.ext2存放在buildroot\output\images目录下。rootfs.ext2文件系统默认并不是ext2格式，而是ext4格式。同时，它里面包含了QT5.5的标准库，以及一些常用的QT示例，在后续章节我们将会详细描述。

## 烧写linux QT映像

### ubuntu下fastboot的安装

#### 安装fastboot

执行如下指令安装fastboot:

```bash
sudo apt-get install android-tools-fastboot
```

#### 新建51-android.rules

新建51-android.rules文件，内容如下：

```bash
# adb protocol on passion (Nexus One)
```

SUBSYSTEM=="usb", ATTR&#123;idVendor&#125;=="18d1", ATTR&#123;idProduct&#125;=="4e12", MODE="0666", OWNER="lqm"

```bash
# adb protocol on crespo/crespo4g (Nexus S)
```

SUBSYSTEM=="usb", ATTR&#123;idVendor&#125;=="18d1", ATTR&#123;idProduct&#125;=="4e22", MODE="0666", OWNER="lqm"

```bash
# fastboot protocol on crespo/crespo4g (Nexus S)
```

SUBSYSTEM=="usb", ATTR&#123;idVendor&#125;=="18d1", ATTR&#123;idProduct&#125;=="4e20", MODE="0666", OWNER="lqm"

```bash
# fastboot protocol on stingray/wingray (Xoom)
```

SUBSYSTEM=="usb", ATTR&#123;idVendor&#125;=="18d1", ATTR&#123;idProduct&#125;=="708c", MODE="0666", OWNER="lqm"

```bash
# fastboot protocol on maguro/toro (Galaxy Nexus)
```

SUBSYSTEM=="usb", ATTR&#123;idVendor&#125;=="18d1", ATTR&#123;idProduct&#125;=="4e30", MODE="0666", OWNER="lqm"

```bash
# fastboot protocol on x210/x4412/x4418
```

SUBSYSTEM=="usb", ATTR&#123;idVendor&#125;=="18d1", ATTR&#123;idProduct&#125;=="0002", MODE="0666", OWNER="lqm"

注意，OWNER里面填的”lqm”务必换成自己ubuntu系统的用户名。之后将51-android.rules文件复制到/etc/udev/rules.d/ 目录下。

到此，就可以使用fastboot更新映像了。如果不建51-android.rules这个文件，使用fastboot更新时需要使用root权限。

### Windows下烧写映像文件

#### 驱动安装

解压x3288_A\tools\RKTools.rar，进入RKTools\windows\Release_DriverAssitant目录,打开“DriverInstall.exe”，点击“驱动安装”，提示安装驱动成功即可。

注意事项：
 1.目前支持的操作系统包括： XP,Win7_32,Win7_64,Win8_32,Win8_64。
 2.Xp 系统在驱动安装完后，若还提示“发现新设备”， 安装驱动时选择“自动安装”。
 3.若之前已经安装过老版本驱动，请先点击“驱动卸载”后再进行“驱动安装”。

#### 生成统一固件update.img

将编译生成的映像文件RK3288UbootLoader_V2.30.10.bin、kernel.img、resource.img、misc.img、boot.img、recovery.img、system.img拷贝到“RKTools\windows\AndroidTool_Release_v2.3\rockdev\Image”目录下；

将“RK3288UbootLoader_V2.30.10.bin”重命名为”RK3288UbootLoader.bin”；

将参数配置文件“x3288-5.1parameter.txt”重命名为“parameter”；

双击执行批处理“mkupdate.bat”开始生成update.img，成功生成提示界面如下：

注意：这里之所以要重命名uboot与parameter文件，是因为已经将RKtool中package-file配置文件与脚本中的文件名修改为不带版本号的名字（即：RK3288UbootLoader.bin，parameter），避免每次都要修改配置文件。

#### 烧录固件update.img

打开RKTools\windows\AndroidTool_Release_v2.3\AndroidTool_Release_v2.3\AndroidToo

l.exe,选择“升级固件”选项卡，点击“固件”，在弹出窗口中选择已经生成的update.img 文件，如下图所示。

工具配置好后，连接主板，按下RECOVERY键，然后插上microUSB线与5V DC电源线（如下图）：

烧录工具界面会提示发现一个LOADER设备，然后点击升级，即可开始升级过程（注：如果提示发现一个ADB设备，点击切换按钮切换成LOADER设备即可）。

上图为升级完成截图。

#### 多设备升级固件update.img

该工具适合用户批量刷机，可以同时给多台设备烧录固件。

打开路径：RKTools\windows\FactoryTool_v1.33下的“FactoryTool.exe”，点击“固件”选择update.img，勾选“升级”，点击“启动”，如下图所示：

步骤1 点击固件，选择需要使用的update.img;

步骤2 点击启动(选择升级按钮)；

步骤3 连接主板USB、DC电源，按下recovery键，对应USB口发现设备，并实现自动升级；然后重复步骤3即可同时升级第二台、第三台设备，升级成功或者失败的设备会在两边的列表中列出，移除成功或者失败的设备后可以继续连接需要升级的设备。

### ubuntu下烧写映像文件

#### 生成固件update.img

注：linux系统下无需安装驱动，需要sudo。

1.解压RKTools工具包，将RKTools\linux\Linux_Upgrade_Tool_v1.2\rockdev工具拷贝到用户目录；

2.将编译生成的映像文件RK3288UbootLoader_V2.30.10.bin、kernel.img、resource.img、misc.img、boot.img、recovery.img、system.img拷贝到RKTools\linux\Linux_Upgrade_Tool_v1.2\rockdev\Image目录下；

3.将“RK3288UbootLoader_V2.30.10.bin”重命名为”RK3288UbootLoader.bin”；

4.将参数配置文件“x3288-5.1parameter.txt”重命名为“parameter”；

5.执行mkupdate.sh脚本生成update.img：

work@ubuntu:~/3288/Linux_Upgrade_Tool_v1.2/rockdev$ ./mkupdate.sh

注意：这里之所以要重命名uboot与parameter文件，是因为已经将RKtool中package-file配置文件与脚本中的文件名修改为不带版本号的名字（即：RK3288UbootLoader.bin，parameter），避免每次都要修改配置文件。

如上图所示为成功界面，在rockdev目录下生成update.img

#### 烧录固件update.img

工具路径：RKTools\linux\Linux_Upgrade_Tool_v1.2

在升级之前将update.img拷贝到upgrade_tool相同目录下，运行upgrade_tool(需要sudo)

work@ubuntu:~/3288/Linux_Upgrade_Tool_v1.2/cp rockdev/update.img .

work@ubuntu:~/3288/Linux_Upgrade_Tool_v1.2$ sudo ./upgrade_tool

执行结果如下图，发现设备列表，输入要升级的DevNo（设备号）选择设备：

选择设备后弹出工具使用菜单如下图，左侧是功能描述，右侧是命令语法，升级相关操作都在upgrade command列表下,忘记命令语法可以输入H进行查看，清屏输入CS,退出按Q。

CD命令： 选择设备， 当执行的命令有包含设备重启操作时， 需重新选择设备，当改变操作设备时需重新选择

SD命令:msc切换到rockusb升级模式。 当切换执行成功后， 需要重新选择设备

UF命令:升级完整update.img固件,当执行成功后需要重新选择设备

UL命令:升级loader功能，当执行成功后需要重新选择设备

DI命令：下载单独image镜像到指定扇区,例如升级kernel.img或者system.img都可以直接使用此功能.例如下载kernel.img： DI -k kernel.img parameter //如果之前通过DI下载过parameter，则再下载kernel.img时就可以不用指定最后的parameter参数

DB命令：下载boot,在maskrom状态下，可以通过此功能， 让maskrom设备进行Rockusb协议通讯

EF命令：擦除整个nandflash

LF命令：低格保留块后面区域，只有在loader模式下使用

执行uf update.img开始更新固件，下图为更新过程截图：

Rockusb&gt;uf update.img

备注：也可通过配置config.ini文件配置升级映像文件，只需输入UF即可升级，请用户自行尝试。

#### Rkflashkit

rkflashkit 有图形界面，后加了命令行支持，更是好用。

work@ubuntu:~/rktool$ sudo apt-get install build-essential fakeroot

work@ubuntu:~/rktool$ git clone https://github.com/linuxerwang/rkflashkit

work@ubuntu:~/rktool$ cd rkflashkit

work@ubuntu:~/rktool$ ./waf debian

work@ubuntu:~/rktool$ sudo apt-get install python-gtk2

work@ubuntu:~/rktool$ sudo dpkg -i rkflashkit_0.1.4_all.deb

注意：rkflashkit_0.1.4_all.deb会因版本更新，版本数字可能会有所变化，如果执行失败，执行ls命令查看下即可。

work@ubuntu:~/rktool/$ sudo rkflashkit

如下是图形界面，在Devices下选择设备，选择要烧写的分区和对应的映像文件，点击Flash image即可。

该工具也支持命令行，使用help命令查看使用方法

work@ubuntu:~/rktool/rkflashkit$ rkflashkit --help

Usage: &lt;cmd&gt; [args] [&lt;cmd&gt; [args]...]

part List partition

flash @&lt;PARTITION&gt; &lt;IMAGE FILE&gt; Flash partition with image file

cmp @&lt;PARTITION&gt; &lt;IMAGE FILE&gt; Compare partition with image file

backup @&lt;PARTITION&gt; &lt;IMAGE FILE&gt; Backup partition to image file

erase @&lt;PARTITION&gt; Erase partition

reboot Reboot device

For example, flash device with boot.img and kernel.img, then reboot:

```bash
sudo rkflashkit flash @boot boot.img @kernel.img kernel.img reboot
```

work@ubuntu:~/rktool/rkflashkit$

### 使用TF卡升级固件

#### 功能说明

SD Card Boot 功能是主控在上电时，优先从 SD 卡上查找启动代码，然后加载引导，从而实现特定功能。目前 SD Card Boot 已经实现两个功能：SD 卡升级和 SD 卡运行。

SD 卡升级功能，将 SD 卡启动代码写到 SD 卡的保留区，然后将固件拷贝到 SD 卡可见分区上，主控从 SD 卡启动时，SD 卡启动代码和升级代码将固件升级到本地主存储中，并支持PCBA 测试和 Demo 文件的拷贝。可以完全做到脱离 PC 机进行固件升级，提高生产效率。

SD 卡运行功能，将固件升级到 SD 卡保留区中，把 SD 卡当作主存储使用。主控从 SD 卡启动时，固件已经存放在 SD 卡上，有没有本地主存储都可以正常工作。目前主要应用是板卡厂做 PCBA 测试，而不会破坏 flash 数据。

对于 2928 芯片需要 flash 是空的情况 maskrom 才从 sd 卡启动，所以如果机器已经烧了固件，需要短接 flash 在 maskrom 状态下使用烧写工具擦除 idb 才能正常从 sd 引导启动。后续的芯片将默认识别到量产 sd 卡就立即从 sd 卡启动，避免上述麻烦的操作。

对于 3288 和 312x 芯片,如果机器已经烧写了未支持 SD 卡升级和启动功能的固件(固件里面的 loader版本过低，请通过支持列表确认)，此时可以通过烧写工具升级支持 SD 卡引导功能的 loader 来解决或者通过烧写工具执行擦除 Flash 来解决。

此时，插入 sd 卡开机，将从 sd 卡引导启动 recovery，根据卡创建时功能配置情况进行 pcba 测试、固件升级、demo 文件拷贝。

#### 软件说明

工具目录有如下文件：

SD_Firmware_Tool.exe：制卡工具

Config.ini：配置文件

SDBoot.bin：SDRK2926、RK2928、RK3166 和 RK3188使用 SDBoot.bin 支持 SD 卡升级和启动功能；RK3288使用RK3288Loader_uboot_V2.16.bin 及以后版本。

#### 制作前软件配置

编辑config.ini配置文件以下项目设置为TRUE

#当值为TRUE时，新卡格式适用3288项目

USE_FW_LOADER=TRUE

工具界面如下：

#### 制作升级卡

注意：制作启动卡会格式化SD卡，用户需要注意备份重要数据，防止误删。

第一步，选择对应的可移动磁盘设备；

第二步，选择功能模式：固件升级、PCBA测试、SD启动；

默认会勾选“固件升级”，即只升级固件。

如果在升级固件前需要做 “PCBA 测试”，则同时勾选“固件升级”、“PCBA测试”。

如果不升级固件，只需要测试PCBA，则单选“PCBA测试”，不选择“固件升级”。

“SD启动”会把固件烧写到 SD 中，所有分区都分配在 SD 卡上，运行时不会修改内部存储的数据（相当于 SD 卡做主存储设备）。

注意：SD卡运行模式，对kernel的编译有要求，需要把kernel的SD卡驱动配置去掉，不参与编译。

修改为：

第三步，选择对应平台的update.img固件；

第四步（可选），如果需要拷贝 demo 文件到用户盘根目录，点击选择Demo按钮，选择需要拷贝的文件目录。选择的目录下所有文件会拷贝到 SD 根目录下的 Demo 目录中，在 SD 引导固件升级后，Demo 目录下的文件会拷贝到样机用户盘的根目录下。

第五步，点击开始创建。

第六步，将制作好的SD卡插入主板开机，将从 sd 卡引导启动 recovery，根据卡创建时功能配置情况进行 pcba 测试、固件升级、demo 文件拷贝。

第七步，当升级完成后，主板屏幕会提示“Doing Actions succeeded. Please remove the sdcard......”，这时拔出SD卡主板即可自动重启。

#### 恢复卡

将制作成启动卡的SD卡恢复为普通SD卡。

第一步：运行软件SD_Firmware_Tool.exe；
 第二步：将带有 SD 卡的读卡器通过 USB 接到电脑；
 第三步：在下拉框 中选择读卡器设备，并确认容量是否正确；

第四步：点击恢复磁盘按钮，会弹出对话框：

第六步，点击确定恢复SD卡。

更多内容请参考SD升级工具目录下《SD Card Boot User Guide V1.2 201410221》PDF文档。
