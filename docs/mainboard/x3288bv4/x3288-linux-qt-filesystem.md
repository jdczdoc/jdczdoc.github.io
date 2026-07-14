---
sidebar_position: 11
title: Linux QT 文件系统
description: X3288 buildroot、QT5 示例、QT Creator 和 QT_demo 测试
---

# Linux QT 文件系统

本页整理 buildroot/QT 文件系统相关内容，以及 QT_demo 的硬件测试入口。

## QT文件系统的搭建

前面章节的介绍，都是九鼎创展工程师已经移植的文件系统包，如果换一个平台，一切从零开始，我们如何构建linux QT文件系统呢？本章节将会带您一步步搭建linux文件系统。

### 下载buildroot

在buildroot官网下载最新的buildroot包，下载地址如下：

http://buildroot.uclibc.org/download.html

本文使用的是buildroot 2016.02，用户下载最新版本与本文介绍版本配置可能略有不同，根据下文配置适当修改即可。

### 配置buildroot

将下载的buildroot包拷贝到ubuntu系统用户目录并解压，得到buildroot目录，通过命令终端进入buildroot目录，执行make menuconfig，进入配置界面：

进入Target options菜单，

在Target Architecture中选择ARM(little endian)，

在Target Binary Format中选择ELF，

Target Architecture Variant中选择cortex-A9，

Target ABI选择EABIhf，

Floating point strategy选择Soft float，

ARM instruction set选择ARM。

退回上一级，进入Toolchain目录，按下图配置：

退回上一级，进入System configuration目录，作如下配置：

退回上一级，进入Target packages目录，再进入Graphic libraries and applications (graphic/text)目录，选择Qt5，如下图所示：

注意不要选Qt，它对应QT4.8版本。进入Qt5菜单，按下图配置：

退回menuconfig的开始界面，进入Filesystem images菜单，作如下配置：

到此，buildroot配置完成。默认配置保存在buildroot根目录的.config中，我们可以备份该配置文件，以防后续配置出错。执行如下指令备份配置文件：

```bash
cp  .config  x3288_config
```

### 编译buildroot

配置完成后，执行make指令即可编译buildroot了。编译buildroot会会依赖一些第三方插件和库，在第一章的编译文件系统小节中，已经给出了需要安装的包，在编译之前需要提前安装，否则会报错。 编译完成后，文件系统映像rootfs.ext2会生成到output/images目录。

### 测试QT5默认示例

将uboot，内核，文件系统烧写进主板，进入linux文件系统后，可以进入/usr/lib/qt/examples目录测试QT示例。

进入gui/analogclock目录，执行analogclock文件，指令如下：

```bash
./analogclock &
```

这时，在主板上可以看到有一个时钟图案被绘制出来(会覆盖默认的QTTEST程序)，如下图所示：

进入gui/rasterwindow目录，执行rasterwindow文件，指令如下：

```bash
./ rasterwindow &
```

这时，在主板上可以看到一个标注有QWindow的图案被绘制出来，如下图所示：

进入qpa/windows目录，执行windows文件，指令如下：

```bash
./windows &
```

这时，在主板上可以看到有三幅图案被绘制出来，如下图所示：

进入sql/drilldown目录，执行如下指令：

```bash
./drilldown &
```

这时，在主板上可以看到有四个QT画面被绘制出来，如下图所示：

进入sql/books目录，执行如下指令：

```bash
./books &
```

这时，在主板上可以看到有一个对话框被绘制出来，如下图所示：

进入sql/masterdetail目录，执行如下指令：

```bash
./masterdetail &
```

这时，在主板上可以看到有一个对话框绘制出来，如下图所示：

默认buildroot编译出了很多示例，这里不带一一列举，有兴趣的读者可以自行尝试。

### 安装QT Creator

通常我们使用QT Creator创建基于QT的工程。在QT官网下载最新的QT安装包，下载地址如下：

http://download.qt.io/official_releases/qt/

打开链接页面如下：

点击5.5，下载安装包，得到名为qt-opensource-linux-x64-5.5.0-2.run的文件，将它拷贝到ubuntu的用户目录，使用如下指令安装：

```bash
./ qt-opensource-linux-x64-5.5.0-2.run
```

安装完成后，QT Creator也就安装完成了。

### 编译QT Creator默认示例

点击ubuntu图标，输入qt，将会查找含有qt的文件，同时，安装好的QT Creator也会被列出来，如下图所示：

点击QT图标，QT Creator将会运行，如下图所示：

默认QT的配置是针对X86架构的，这时编译出来的示例只能在PC机上运行。我们打开Image Composition Example示例，它是一个图片叠加显示的示例，找到该示例，单击即可。打开后的界面如下：

点击左下脚绿色的三脚箭头，开始编译工程。在Compile Output栏会显示编译的整个过程。编译完成后，提示如下：

编译完成后，编译出来的映像会自动运行，一个叠加的蝴蝶图像界面显示出来了，界面如下：

下面我们将该示例编译到主板上运行。使用QT Creator打开上面的示例工程，如下图所示：

选择Projects一栏，可以看到最顶端的框图1，显示Desktop Qt 5.5.0 GCC 64bit，表明它通过64位的GCC编译，框图2表明在debug模式下编译，相对release模式，debug模式下含有大量调试信息，编译出来的映像会比较大。通常发布映像时，我们选择release模式。框图3指定了编译的路径。框图4指定了qmake和交叉编译工具。框图5为调试按键，第一个用于选择编译模式为debug或release，第二个为运行按钮，第三个为单步调试按钮，第四个为编译按钮。框图6为一些输出信息，如Compile Output，会给出整个编译的信息。

在框图1中，点击Tools-&gt;Options，如下图：

在左测对话框中选择Build &amp; Run，在后边选择Qt Versions，默认Manual为空，Auto-detected选择默认的qmake，它将运行在X86平台的linux系统上，因此我们要手动添加在ARM平台上运行的qmake。

在buildroot编译文件系统时，我们选中QT5后，将会在buildroot的output/host/usr/bin目录生成支持ARM平台的qmake，点击Add，指向该路径的qmake：

点击Open，即在Manual中添加了支持ARM平台的qmake。再选择Compilers一栏，如下图所示：

默认Manual为空，Auto-detected为支持X86 32位和64位的GCC，这将直接导致编译出来只能在PC机上运行。点击Add，选择GCC，如下图所示：

在Name中重命名，以区别ARM和PC平台，如我们命名为GCC-ARM-LINUX，它将会直接显示在前面QT工程界面的框图1中，到时我们编译QT工程时，能够一目了然，编译出来的到底是PC平台还是ARM平台。在Compiler path中指定交叉编译工具，在buildroot中默认已经自动下载并安装了交叉编译工具，我们指定到如下路径即可：

buildroot/output/host/opt/ext-toolchain/bin/arm-linux-gnueabihf-g++

设置完成后，点击OK，完成设置。

再回到QT的工程界面，我们发现框图1中的配置仍然针对PC机，点击框图1中的Manage Kits，如下图所示：

注意，这时默认Manual仍然为空，点击Add，会弹出一个有很多选项的对话框，我们按如下方式配置：

Compile：选择之前添加的GCC，

Qt Version：选择之前添加的Qt5.5.1；

这里的Name，我们可以点击Qt Versions，选择Manual中的qmake，下面就会有名称出来，将它拷贝过来即可，如下图所示：

在框图一中，点击设置编译环境的下拉箭头，如下图所示：

选择Change Kit-&gt;Qt5.5.1(System)，更改后的界面如下：

在框图2中选择release，更改后的界面如下：

到此，配置完毕，点击框图5中的编译按钮，在Compile Output中可以看到编译信息如下：

这时，在框图2中指定的目录中已经生成了能够在ARM平台运行的映像了，如下图所示：

将该文件拷贝到x3288主板上运行，可以看到美丽的蝴蝶图案显示出来了。

## qttest测试程序

### 使用QT_demo测试蜂鸣器

进入QT5.5系统后，默认会运行我们自主编写的测试demo，

测试界面如下：

按住Beep键时，蜂鸣器鸣叫，松开时，蜂鸣器停止鸣叫。

### 使用QT_demo调节背光

测试界面如下：

滑动圆形滑轮，可对主板背光进行亮暗调节。

### 使用QT_demo测试按键

无可测试按键。

测试界面如下：

按下主板任一独立按键，图中界面即会显示相应键值，同时，按下时提示[keydown]，抬起时提示[keyup]。目前该功能异常，待调。

### 使用QT_demo测试ADC电压

暂异常。

测试界面如下：

使用一字螺丝刀旋转精密电位器上面的旋转按钮，可以看到界面上的Battery Vol的值会相应变化，说明这里对电位器上ADC电压采样有效。目前该功能异常，待调。

### 使用QT_demo测试音频

将喇叭或耳机接到主板的对应接口，点击下图中的Play Sound按钮，会播放测试歌曲：

### 使用QT_demo测试触摸屏

进入如下界面：

单击绿色矩形框，界面会进入全屏模式，这时我们可以任意书写来测试触摸屏了，测试示例图片如下：

### 使用QT_demo测试串口

将需要测试的串口的TXD和RXD短路，再点击开始测试，界面上会提示对应串口会自发自收0123456789。如果不能自发自收，说明对应的串口硬件有问题。

### 使用QT_demo测试网络

将网线连接主板的有线以太网接口，点击界面中的Network Test按钮，如果网络已经连通，则会添加DNS，如果没有连通，则会提示相应错误，如下图所示：

连接网线后测试时，会有如下提示：

### 使用QT_demo测试TF卡

将SD卡插入主板的SD卡槽，点击Tfcard Test，界面上会列出SD卡中的内容。

### 使用QT_demo测试U盘

将U盘接到主板的任何一个USB HOST接口，点击Udisk Test，数据框中会列出U盘中的数据，如果找不到，则会提示无法mount U盘，如图：

### 使用QT_demo测试休眠唤醒

点击Deep Sleep，主板会进入深度睡眠状态，这时屏幕会全黑，串口终端也将没有任何信息提示，只有按下POWER键，方可唤醒主板。

### 使用QT_demo测试重启

点击Reboot按钮，主板将重启。

### 使用QT_demo测试关机

点击Poweroff按钮，主板将会关机。
