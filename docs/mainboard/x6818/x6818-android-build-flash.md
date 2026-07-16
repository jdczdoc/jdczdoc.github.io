---
sidebar_position: 6
title: Android 编译与烧录
description: X6818 Android 5.1 开发环境、源码编译、启动卡和 fastboot 烧录
---

# Android 编译与烧录

X6818 Android 平台用户手册基于 Android 5.1，开发环境示例为 Ubuntu 14.04 64 位。由于 Android 4.0 以后源码工程庞大，手册建议不要使用虚拟机完整编译 Android，而是直接安装 Linux 操作系统，以充分利用 PC 性能。

## 开发环境搭建

常用环境和工具：

```bash
sudo apt-get update
sudo apt-get install vim
sudo apt-get install meld
sudo apt-get install minicom
sudo apt-get install openssh-server
```

minicom 常见配置：

```bash
sudo minicom -s
```

串口通常配置为 115200 8N1，关闭硬件流控和软件流控。USB 转串口常见设备名为 `/dev/ttyUSB0`。

## Android 开发工具

手册包含以下工具说明：

- SlickEdit / Eclipse 代码编辑工具。
- adb 工具安装、设备连接状态查看和进入 adb shell。
- SecureCRT 串口工具。

adb 常用命令：

```bash
adb devices
adb shell
adb install app.apk
adb push local_file /data/local/tmp/
adb pull /data/local/tmp/file ./
```

## 安装 Android 源码包

Android 手册包含源码依赖包、交叉编译工具链和 Android 源码包安装说明。源码包安装完成后，需要确认脚本权限、交叉编译器路径和环境变量。

## 编译 Android

常见编译分为 U-Boot、内核、Android 文件系统和打包。实际命令以源码包中的编译脚本为准。

```bash
# 编译 U-Boot
./mk -u

# 编译 Android 内核
./mk -k

# 编译 Android 文件系统
./mk -s

# 查看编译帮助
./mk -h
```

## U-Boot 环境变量

手册单独列出 U-Boot 环境变量设置章节。X6818 在烧录、TF 卡启动、eMMC 启动、Ubuntu / Android / Linux 切换时，都可能需要设置启动介质、bootargs、显示参数和根文件系统参数。

## 烧写 Android 映像

Android 手册包含 Ubuntu 和 Windows 两种烧录流程。烧录方式包括 fastboot、制作启动卡、TF 卡脱机更新，以及在 eMMC 中不存在 bootloader 时更新 U-Boot。

### Ubuntu 下 fastboot

```bash
sudo apt-get install Android-tools-fastboot
```

如需配置 USB 权限，可创建或修改 `51-Android.rules`。

### Ubuntu 下制作启动卡

启动卡用于引导 X6818 / iBox6818 进入烧录或升级流程。制作完成后，插入 TF 卡，按手册要求上电启动。

### Ubuntu 下烧写映像

当 eMMC 中无固件时，需要通过启动卡或 fastboot 进入下载环境，再烧写 U-Boot、boot、system 等镜像。当 eMMC 中已有可正常启动的映像时，可直接进入 fastboot 或使用 adb 重启到下载模式。

### Windows 下烧写

Windows 侧需要安装 fastboot 或配套工具，制作启动卡后可通过 fastboot 烧录镜像。常用流程为：

```cmd
fastboot devices
fastboot flash boot boot.img
fastboot flash system system.img
fastboot reboot
```

### TF 卡脱机更新

TF 卡脱机更新适合现场升级，不依赖 PC 在线烧写。制作升级卡后，将升级镜像放入指定位置，插卡启动完成更新。

## Bootloader 不存在时更新 U-Boot

如果 eMMC 中不存在 bootloader，需要先通过启动卡或底层下载方式让板子进入可烧写状态，再更新 U-Boot。更新完成后再烧写完整系统镜像。
