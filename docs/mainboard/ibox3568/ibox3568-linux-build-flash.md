---
sidebar_position: 9
title: Linux 编译与烧录
description: iboibox3568 Linux4.19 源码安装、编译、固件打包和烧录
---

# Linux 编译与烧录

:::note
本页软件流程沿用前面整理的 X3568 软件文档模板。ibox3568 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 ibox3568 SDK 和发布资料为准。
:::

本页保留 iboibox3568 Linux 平台中与源码安装、编译、打包和烧录直接相关的内容。VMware、Ubuntu 安装截图等通用教程不再搬运。

## 开发环境建议

- iboibox3568 Linux 源码编译建议使用 Ubuntu 16.04 / 18.04 64 位环境；
- Linux 源码编译内存需求相对 Android 低，普通开发机即可满足；
- 编译前先检查 SDK 根目录中的 `README` 和 `build.sh -h` 输出。

## 常用依赖

```bash
sudo apt-get update
sudo apt-get install git-core gnupg flex bison gperf libsdl1.2-dev libwxgtk3.0-dev \
build-essential zip curl zlib1g-dev gcc-multilib g++-multilib genromfs \
libc6-dev-i386 libncurses5-dev x11proto-core-dev libx11-dev ccache \
libgl1-mesa-dev libxml2-utils xsltproc unzip gperf lsb-core lib32z1-dev \
lib32ncurses5-dev texinfo mercurial subversion whois g++ git lzop \
liblz4-tool genext2fs make device-tree-compiler u-boot-tools libssl-dev \
autoconf python-pyelftools python3-pyelftools libusb-1.0 tig repo p7zip \
p7zip-full rar unrar Android-tools-fastboot Android-tools-adb
```

注意：`hgsubversion` 等个别软件包可能因系统源变化无法安装，按实际提示处理即可。Buildroot 编译时还需要安装 `expect`：

```bash
sudo apt install expect
```

## 源码安装

将 Linux 源码包复制到 Ubuntu 用户目录后解压。源码目录和文件名以实际发放的 SDK 为准。

## 查看编译帮助

```bash
./build.sh -h
```

常用目标：

| 目标 | 作用 |
| --- | --- |
| `lunch` | 列出并切换当前 SDK 板级配置 |
| `U-Boot` | 编译 U-Boot |
| `kernel` | 编译 Linux 内核 |
| `buildroot` | 编译 Buildroot rootfs |
| `all` | 编译 U-Boot、Kernel、rootfs、recovery |
| `firmware` | 打包启动所需镜像 |
| `updateimg` | 打包统一升级固件 |
| `save` | 保存调试用镜像、补丁和命令 |

## 完整编译

```bash
./build.sh lunch
```

选择：

```text
BoardConfig-rk3568-evb1-ddr4-v10.mk
```

然后执行：

```bash
./build.sh all
./build.sh firmware
./build.sh updateimg
```

也可以直接执行：

```bash
./build.sh
```

## 单独编译

编译 U-Boot：

```bash
./build.sh U-Boot
```

编译 Linux 内核：

```bash
./build.sh kernel
```

编译 Buildroot 文件系统：

```bash
./build.sh buildroot
```

编译生成的镜像统一放在 `rockdev` 目录下，常见文件包括 `boot.img`、`MiniLoaderAll.bin`、`misc.img`、`oem.img`、`parameter.txt`、`recovery.img`、`rootfs.ext4`、`rootfs.img`、`update.img`、`userdata.img` 等。

## Windows 烧写 Linux 固件

1. 解压 `DriverAssitant_v5.1.1.rar`，运行 `DriverInstall.exe`；
2. 先点击“驱动卸载”，再点击“驱动安装”；
3. 解压 `tools\windows\RKDevTool_Release_v2.86.zip`，打开 `RKDevTool.exe`；
4. 选择“升级固件”选项卡，点击“固件”选择生成的 `update.img`；
5. 按住 RECOVERY 键，插入 Micro USB（OTG）线和 12V DC 电源；
6. 工具提示发现 `LOADER` 设备后点击升级。

## 进入烧写模式

- 按住 recovery 键，再按 reset，松开 recovery 可进入 loader；
- 串口执行 `reboot bootloader` 可进入 loader；
- Rockchip 工具发现 ADB 设备时点击“切换”可进入 loader；
- 擦除 Flash 后可进入 maskrom；
- 串口开机长按快捷键：`ctrl+c` 进入 U-Boot，`ctrl+d` 进入 loader，`ctrl+b` 进入 maskrom，`ctrl+f` 进入 fastboot。
