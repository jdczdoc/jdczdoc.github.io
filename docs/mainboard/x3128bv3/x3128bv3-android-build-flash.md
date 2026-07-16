---
sidebar_position: 9
title: Android 编译与烧录
description: X3128 Android 源码安装、编译和固件烧录流程
---

# Android 编译与烧录

## 安装源码依赖包

原手册环境基于 Ubuntu 14.04 64 位系统。安装依赖前建议先更新软件包列表：

```bash
sudo apt-get update
sudo apt-get install git-core gnupg openjdk-7-jdk flex bison gperf libsdl-dev libwxgtk2.8-dev build-essential zip curl libncurses5-dev zlib1g-dev genromfs u-boot-tools libxml2-utils texinfo mercurial subversion whois
sudo apt-get install lsb-core libc6-dev-i386 g++-multilib lib32z1-dev lib32ncurses5-dev
```

交叉编译工具链已集成到源码包中，路径为：

```text
Sourcetree/prebuilts/gcc/Linux-x86/arm/arm-eabi-4.8
```

如果系统 GCC 版本过高，可切换到 GCC 4.8：

```bash
sudo apt-get install gcc-4.8 g++-4.8 g++-4.8-multilib

cd /usr/bin
sudo mv gcc gcc.bk
sudo ln -s gcc-4.8 gcc
sudo mv g++ g++.bk
sudo ln -s g++-4.8 g++
```

## 安装 Android 源码包

源码包名称以实际资料为准，原手册示例为 `x3128_marshmallow.tar.bz2`：

```bash
cp yourcdromdir/source/x3128_marshmallow.tar.bz2 ~/
cd
tar xvf x3128_marshmallow.tar.bz2
cd x3128_marshmallow
git checkout .
```

## 编译命令

编译时使用普通用户权限，不要使用 root。

```bash
./mk.sh -u    # 编译 U-Boot
./mk.sh -k    # 编译 Android 内核
./mk.sh -s    # 编译 Android 文件系统
./mk.sh -U    # 生成统一升级固件
./mk.sh -h    # 查看编译帮助
```

编译输出通常位于 `out/release` 目录，常见文件包括：

- `RK3128MiniLoaderAll_V2.31.bin`：Loader / U-Boot 相关映像，实际名称可能随版本变化。
- `kernel.img`：内核映像。
- `resource.img`：资源映像，包含开机图片和设备树信息。
- `boot.img`：Android 初始文件映像。
- `system.img`：Android system 分区映像。
- `recovery.img`：Recovery 映像。
- `misc.img`：启动模式切换和 Recovery 参数传递分区。
- `update-Android.img`：统一升级固件。

## Windows 烧录 update.img

安装 Rockchip 驱动后，打开 AndroidTool，选择“升级固件”，加载 `update-Android.img`。按住 Recovery 键，连接 USB OTG 和 12V DC 电源，工具识别到 LOADER 设备后点击升级。

![AndroidTool 固件选择](./x3128-android-image15.png)

批量刷机可使用 FactoryTool，选择固件，勾选升级，点击启动，然后依次连接设备自动升级。

![FactoryTool 批量烧录](./x3128-android-image18.png)

## Linux 使用 upgrade_tool 烧录

工具路径示例：

```text
RKTools/Linux/Linux_Upgrade_Tool_v1.2
```

将 `update-Android.img` 拷贝到 `upgrade_tool` 同目录，然后执行：

```bash
sudo ./upgrade_tool
```

常用命令：

```text
CD                    选择设备
SD                    切换到 rockusb 升级模式
UF update-Android.img 升级完整固件
UL loader.bin         升级 loader
DI -k kernel.img      烧写 kernel.img
DI -s system.img      烧写 system.img
DI resource resource.img
DI -r recovery.img
EF                    擦除整个 flash
```

也可以在 `out/release` 目录直接执行：

```bash
sudo upgrade_tool di -k kernel.img
sudo upgrade_tool di -s system.img
sudo upgrade_tool di resource resource.img
sudo upgrade_tool di -r recovery.img
sudo upgrade_tool ul RK3128MiniLoaderAll_V2.31.bin
sudo upgrade_tool uf update-Android.img
```

## 使用 Rkflashkit

Rkflashkit 提供图形界面和命令行方式，可用于分区烧写、备份、擦除和重启：

```bash
sudo apt-get install build-essential fakeroot
git clone https://github.com/Linuxerwang/rkflashkit
cd rkflashkit
./waf debian
sudo apt-get install python-gtk2
sudo dpkg -i rkflashkit_0.1.4_all.deb
sudo rkflashkit
```

命令行示例：

```bash
sudo rkflashkit flash @boot boot.img @kernel.img kernel.img reboot
```
