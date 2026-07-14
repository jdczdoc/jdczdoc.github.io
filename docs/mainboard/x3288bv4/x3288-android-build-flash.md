---
sidebar_position: 7
title: Android 编译与烧录
description: X3288 Android 5.1 源码安装、编译和固件烧录
---

# Android 编译与烧录

本页保留 X3288 Android 5.1 平台与编译、烧写直接相关的内容。通用的 Ubuntu 安装、XP 启动项等内容不再搬运。

## 开发环境建议

- 建议直接使用 Linux 主机编译完整 Android 源码，不建议使用虚拟机。
- 原手册以 Ubuntu 14.04 64 位系统为例。旧版 Android 5.1 源码对 JDK、GCC 和 32 位兼容库有版本要求，实际以源码包和编译报错为准。
- 常用工具包括 `adb`、串口终端、RKTool、upgrade_tool 和 Rkflashkit。

## Android开发工具

### SDK

谷歌公司开发的Android Studio提供用于为各类 Android 设备开发应用的最快速的工具。利用世界一流的代码编辑、调试、性能工具、一套灵活的构建系统以及一套即时构建/部署系统，您可以专注于构建独特的高品质应用。

网上下载最新的SDK，下载地址为：http://developer.android.com/sdk/index.html。用户可根据自身的PC机系统选择对应的安装包，如下图所示：

### adb工具

#### 安装adb工具

在光盘中找到fastboot_adb.rar文件，解压出来，将fastboot文件夹下面的adb.exe、AdbWinApi.dll、AdbWinUsbApi.dll以及fastboot.exe四个文件拷贝到C:\Windows\System32目录，如果是64位系统，需要同时拷贝到C:\Windows\SysWOW64目录，adb和fastboot即安装成功。

#### 查看设备的连接状态

主板上电，进入 setting，选择“ developer options”，勾选“ USB debugging”进入WINDOWS下的CMD命令行，输入如下命令验证主板是否连接：

```bash
adb  devices
```

显示下面内容表示成功连接：

#### 进入adb shell

使用如下命令进入主板终端：

```bash
adb  shell
```

如下图所示：

输入exit退回DOS操作界面。注意，有时候，执行adb devices命令时，会提示error: more than one device and emulator，很有可能是播放了USB设备造成的。这时已经无法再通过adb传输数据，解决的办法很简单，如果是使用windows，直接在进程中干掉adb.exe，再启动adb即可。

### 串口工具secureCRT

安装secureCRT工具，在计算机设备管理器中找到COM口号，点击“快速连接”，如下图：

协议选择serial（我的设备是COM2），其他选项按照下图所示选择，右侧三个流控制选项不能勾选！

接下来用USB转串口线接到主板的调试串口与PC即可看到调试串口打印的log信息。

## 安装android源码包

### 安装android源码依赖包

说明：本文档所有开发全部基于ubuntu14.04 64位系统，后续不再声明。

使用如下命令安装所需的软件包（安装前使用sudo apt-get update 获得一下最近的软件包的列表）：

```bash
sudo apt-get install git-core gnupg sun-java6-jdk flex bison gperf libsdl-dev libwxgtk2.8-dev build-essential zip curl libncurses5-dev zlib1g-dev genromfs u-boot-tools libxml2-utils texinfo mercurial subversion whois
```

很可能个别软件包会安装失败，比如sun-java6-jdk，这时需要我们手动来安装。下面是在ubuntu下手动安装jdk1.6的详细步骤：

第一步：在官网下载最新的jdk1.6的安装源文件jdk-6u27-linux-i586.bin，下载地址为：

http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase6-419409.html#jdk-6u27-oth-JPR。

第二步：将下载的文件复制到/usr/lib/jvm目录，执行如下命令安装：

```bash
chmod +x jdk-6u27-linux-i586.bin
sudo ./jdk-6u27-linux-i586.bin
```

第三步：修改环境变量：

```bash
sudo gedit /etc/profile
```

在最末尾加入如下语句：

#set java environment

JAVA_HOME=/usr/lib/jvm/jdk1.6.0_27

```bash
export JRE_HOME=/usr/lib/jvm/jdk1.6.0_27/jre
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```

第四步：重启系统

第五步：查看当前java安装版本：

root@lqm:/usr/lib/jvm# java -version

java version "1.6.0_27"

Java(TM) SE Runtime Environment (build 1.6.0_27-b07)

Java HotSpot(TM) Server VM (build 20.2-b06, mixed mode)

root@lqm:/usr/lib/jvm#

到此，jdk1.6成功安装。

注意，如果安装了jdk1.5和1.6,很有可能查询版本时，仍然是1.5的，执行如下指令：

```bash
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk1.6.0_27/bin/java 255
sudo update-alternatives --install /usr/bin/javac javac /usr/lib/jvm/jdk1.6.0_27/bin/javac 255
```

这两条指令用于创建符号链接。其中，/usr/bin/java 是不用改动的，为你的原有的jdk路径，/usr/lib/jvm/jdk1.6.0_27/bin/java这个是jdk1.6的java路径255是优先级。

再执行如下命令：

```bash
sudo update-alternatives --config java
sudo update-alternatives --config javac
```

弹出如下对话框：

root@lqm:/usr/local# update-alternatives --config java

There are 2 choices for the alternative java (providing /usr/bin/java).

选择 路径 优先级 状态

------------------------------------------------------------

* 0 /usr/lib/jvm/jdk1.6.0_27/bin/java 255 自动模式

1 /usr/lib/jvm/java-1.5.0-sun/jre/bin/java 53 手动模式

2 /usr/lib/jvm/jdk1.6.0_27/bin/java 255 手动模式

要维持当前值[*]请按回车键，或者键入选择的编号。这里选择我们需要使用的jdk 版本，回车即可。

说明：jdk1.6也可以使用如下方法安装：

手动修改下载源，指令如下：

```bash
cd /etc/apt
cp sources.list sources.list.bak
```

vim sources.list

在最末行添加如下语句：

deb http://archive.canonical.com/ubuntu maverick partner

然后更新源：

apt-get update

再安装java6:

apt-get install sun-java6-jdk

### 安装交叉编译工具链

我们已经将交叉编译工具链集成到源码包中，无需再手动安装。交叉编译工具链路径：

Sourcetree/prebuilts/gcc/linux-x86/arm/arm-eabi-4.8

### 安装64位系统必要的一些补丁包

apt-get install lsb-core libc6-dev-i386 g++-multilib lib32z1-dev lib32ncurses5-dev

### 指定GCC交叉编译器

在ubuntu系统上安装最新的GCC交叉编译器时，版本已经超过4.4了，使用如下指令可查询GCC的版本：

gcc –version

可能出现的界面如下：

terry@ubuntu-server:~$ gcc --version

gcc (Ubuntu/Linaro 4.6.3-1ubuntu5) 4.6.3

Copyright © 2011 Free Software Foundation, Inc.

terry@ubuntu-server:~$

上面显示4.6.3版本，默认我们给出的包，在4.6.3上编译会提示一些错误，都是新的GCC引出的错误，网上都有解决办法，如果不想修改这些错误，可将GCC版本降至4.4即可。解决办法 ：

```bash
sudo apt-get install gcc-4.4 g++-4.4 g++-4.4-multilib
```

装完后，开始降级gcc ,这不会影响系统，仅仅是改个链接而已，不喜欢的话改回来即可。

```bash
cd /usr/bin
sudo mv gcc gcc.bk
sudo ln -s gcc-4.4 gcc
sudo mv g++ g++.bk
sudo ln -s g++-4.4 g++
```

### 安装android源码包

从网盘中拷贝android源码包，放在自己的用户名目录，光盘中存放着android4.4和android5.1的源码包，android4.4的名称为x3288_kitkat_v1.0_151125.tar.bz2，android5.1的名称为x3288_lollipop_v10.tar.bz2。注意最好不要放在文件系统的根目录，这样会出现管理权限问题。

示例方法：在用户权限下执行如下命令：

```bash
cp  yourcdromdir/source/ x3288_lollipop_v10.tar.bz2  ~/
cd
tar  xvf  x3288_lollipop_v10.tar.bz2
```

这时，整个android文件系统全部都放在了当前解压的目录中。至此，android源码包安装完成。

说明：源码包名称可能会因发布日期等有所不同，具体以网盘中实际名称为准。

## 编译android源码包

说明：编译映像时一定要使用普通权限编译。编译完成后，生成的映像文件RK3288UbootLoader_V2.19.09.bin，boot.img， system.img, kernel.img, misc.img, recovery.img, resource.img，update.img。

### 编译uboot

在android源码目录下执行如下命令编译uboot，编译完成后映像文件RK3288UbootLoader_V2.30.10.bin（因版本不同，名称不一定相同）会释放到out/release目录。

```bash
./mk 	-u
```

### 编译android内核

在android源码目录下执行如下命令编译android内核，编译完成后映像文件kernel.img、resource.img会释放到out/release目录。

```bash
./mk 	-k
```

### 编译android文件系统

在android源码目录下执行如下命令编译android映像文件，编译完成后映像文件会释放到out/release目录。

```bash
./mk 	-s
```

编译完文件系统，在out/release目录下会生成如下文件：

RK3288UbootLoader_V2.19.09.bin： uboot映像文件

Kernel.img：内核映像

Resource.img：资源映像，内含开机图片和内核的设备树信息。

Boot.img： Android的初始文件映像，负责初始化并加载system分区。

System.img：android的system分区映像，ext4文件格式系统。

Recovery.img：急救模式映像。

Misc.img：分区映像，负责启动模式切换和急救模式的参数传递。

update.img：整个升级文件的单一映像，包括了uboot，内核，文件系统等。

### 查看编译帮助

执行如下指令可查询mk脚本使用方法：

```bash
./mk  -h
```

## 烧写android映像文件

### Windows系统映像烧写

#### RKTool驱动安装

解压RKTools.rar，工具路径：SDK\RKTools\windows\Release_DriverAssitant,打开“DriverInstall.exe”，点击“驱动安装”，提示安装驱动成功即可。

注意事项：
1.目前支持的操作系统包括：XP,Win7_32,Win7_64,Win8_32,Win8_64。
2.XP系统在驱动安装完后，若还提示“发现新设备”， 安装驱动时选择“自动安装”。
3.若之前已经安装过老版本驱动，请先点击“驱动卸载”后再进行“驱动安装”。

#### 烧录方法一:单个升级固件update.img

##### 生成统一固件update.img

我们已经在mk脚本中集成了生成统一固件的方法，在编译android文件系统时(./mk -s)，会自动生成update.img，并释放到out/release目录。

##### 烧录固件update.img

打开RKTools\windows\AndroidTool_Release_v2.3\AndroidTool_Release_v2.3\AndroidToo

l.exe,选择“升级固件”选项卡，点击“固件”，在弹出窗口中选择已经生成的update.img 文件，如下图所示。

工具配置好后，连接主板（如下图）：

按下RECOVERY键，然后插上microUSB线与5V DC电源线

烧录工具界面会提示发现一个LOADER设备，然后点击升级，即可开始升级过程（注：如果提示发现一个ADB设备，点击切换按钮切换成LOADER设备即可）。

上图为升级完成截图。

#### 烧录方法二:多设备升级固件update.img

该工具适合用户批量刷机，可以同时给多台主板刷机。

打开路径：SDK\RKTools\windows\FactoryTool_v1.33下的“FactoryTool.exe”，点击“固件”选择update.img，勾选“升级”，点击“启动”，如下图所示：

步骤1：点击固件，选择update.img;

步骤2：点击启动(选择升级按钮)；

步骤3：连接主板USB、DC电源，按下recovery键，对应USB口发现设备，并实现自动升级；然后重复步骤3即可同时升级第二台、第三台设备，升级成功或者失败的设备会在两边的列表中列出，移除成功或者失败的设备后可以继续连接需要升级的设备。

### Linux系统烧写映像

#### 生成固件update.img

我们已经在mk脚本中集成了生成统一固件的方法，在编译android文件系统时(./mk -s)，会自动生成update.img，并释放到out/release目录。

#### 烧录固件update.img

工具路径：RKTools\linux\Linux_Upgrade_Tool_v1.2

在升级之前将update.img拷贝到upgrade_tool相同目录下，运行upgrade_tool(需要sudo)

work@ubuntu:~/3288/Linux_Upgrade_Tool_v1.2/cp rockdev/update.img .

work@ubuntu:~/3288/Linux_Upgrade_Tool_v1.2$ sudo ./upgrade_tool

执行结果如下图，发现设备列表，输入要升级的DevNo（设备号）选择设备

选择设备后弹出工具使用菜单如下图，左侧是功能描述，右侧是命令语法，升级相关操作都在upgrade command列表下,忘记命令语法可以输入H进行查看，清屏输入CS,退出按Q。

CD命令：选择设备，当执行的命令有包含设备重启操作时，需重新选择设备，当改变操作设备时需重新选择

SD命令:msc切换到rockusb升级模式。 当切换执行成功后， 需要重新选择设备

UF命令:升级完整update.img固件,当执行成功后需要重新选择设备

UL命令:升级loader功能，当执行成功后需要重新选择设备

DI命令：下载单独image镜像到指定扇区,例如升级kernel.img或者system.img都可以直接使用此功能.例如下载kernel.img： DI -k kernel.img parameter //如果之前通过DI下载过parameter，则再下载kernel.img时就可以不用指定最后的parameter参数

DB命令：下载boot,在maskrom状态下，可以通过此功能， 让maskrom设备进行Rockusb协议通讯

EF命令：擦除整个nandflash

LF命令：低格保留块后面区域，只有在loader模式下使用

执行uf update.img开始更新固件，下图为更新完成截图。

Rockusb&gt;uf update.img

备注：也可通过配置config.ini文件配置升级映像文件，只需输入UF即可升级，请用户自行尝试。

#### 使用upgrade_tool指令烧写映像

上一节我们介绍了通过upgrade_tool烧写统一固件update.img的方法，熟悉三星平台的开发者会发现，这种方法并不是很高效，真正操作起来，它远没有fastboot工具来的迅速。其实，upgrade_tool工具同样支持类似于fastboot的烧写方式。

为了烧写方便，在mk脚本中，默认在编译系统时，已经将烧写工具upgrade_tool拷贝到out/release目录了。

第一步：打开串口终端，并打开minicom，用于适时监控串口调试信息；

第二步：按住RECOVERY键，连接USB OTG线和电源线，这时uboot打印信息将会提示已经进入USB下载模式。如果接通电源后没来得及按住RECOVERY键，在按住RECOVERY键的同时，再按下复位键即可。注意，使用

第二步：打开第二个串口终端，进入out/release目录；

第三步：在out/release目录下敲击如下指令，烧写相应的映像。

```bash
sudo upgrade_tool  di  –k  kernel.img(烧写内核)
sudo upgrade_tool  di  –s  system.img(烧写文件系统)
sudo upgrade_tool  di  resource  resource.img(烧写资源文件)
sudo upgrade_tool  di  –r recovery.img(烧写急救文件)
sudo upgrade_tool  ul  RK3288UbootLoader_V2.30.10.bin(烧写bootloader)
sudo upgrade_tool  uf  update.img(烧写统一固件)
```

#### 使用Rkflashkit烧写映像

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

SD Card Boot功能是主控在上电时，优先从SD卡上查找启动代码，然后加载引导，从而实现特定功能。目前SD Card Boot已经实现两个功能：SD卡升级和SD卡运行。

SD卡升级功能，将SD卡启动代码写到SD卡的保留区，然后将固件拷贝到SD卡可见分区上，主控从SD卡启动时，SD卡启动代码和升级代码将固件升级到本地主存储中，并支持PCBA测试和Demo文件的拷贝。可以完全做到脱离PC机进行固件升级，提高生产效率。

SD卡运行功能，将固件升级到SD卡保留区中，把SD卡当作主存储使用。主控从SD 卡启动时，固件已经存放在SD卡上，有没有本地主存储都可以正常工作。目前主要应用是板卡厂做PCBA测试，而不会破坏flash数据。

#### 软件说明

工具目录有如下文件：

SD_Firmware_Tool.exe：制卡工具

Config.ini：配置文件

SDBoot.bin：SDRK2926、RK2928、RK3166和RK3188使用SDBoot.bin支持SD卡升级和启动功能；RK3288使用RK3288Loader_uboot_V2.16.bin及以后版本。

#### 制作前软件配置

编辑config.ini配置文件以下项目设置为TRUE

#当值为TRUE时，新卡格式适用3288项目

USE_FW_LOADER=TRUE

工具界面如下：

#### 制作

注意：制作启动卡会格式化SD卡，用户需要注意备份重要数据，防止误删。

第一步，选择对应的可移动磁盘设备；

第二步，选择功能模式：固件升级、PCBA测试、SD启动；

默认会勾选“固件升级”，即只升级固件。

如果在升级固件前需要做 “PCBA 测试”，则同时勾选“固件升级”、“PCBA测试”。

如果不升级固件，只需要测试PCBA，则单选“PCBA测试”，不选择“固件升级”。

“SD启动”会把固件烧写到SD中，所有分区都分配在SD卡上，运行时不会修改内部存储的数据（相当于SD卡做主存储设备）。

注意：SD卡运行模式，对kernel的编译有要求，需要把kernel的SD卡驱动配置去掉，不参与编译。

修改为：

第三步，选择对应平台的update.img固件；

第四步（可选），如果需要拷贝demo文件到用户盘根目录，点击选择Demo按钮，选择需要拷贝的文件目录。选择的目录下所有文件会拷贝到SD根目录下的Demo目录中，在SD引导固件升级后，Demo目录下的文件会拷贝到样机用户盘的根目录下。

第五步，点击开始创建即可。
