---
sidebar_position: 6
title: Android 编译与烧录
description: iboibox3568 Android11 源码安装、编译和固件烧录
---

# Android 编译与烧录

:::note
本页软件流程沿用前面整理的 X3568 软件文档模板。ibox3568 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 ibox3568 SDK 和发布资料为准。
:::

本页保留 iboibox3568 Android11 平台与源码安装、编译、烧写直接相关的内容。通用的 Ubuntu 安装、XP 启动项等内容不再搬运。

## 开发环境建议

- Android 源码编译对 PC 性能要求较高，建议直接安装 Linux 系统，不建议使用虚拟机进行完整编译；
- 原手册以 Ubuntu 14.04 / 16.04 64 位环境为参考，iboibox3568 Android11 以实际 SDK 要求为准；
- Android11 编译脚本中使用 OpenJDK 8，可在 `mk.sh` 中看到类似路径：

```bash
export PATH=/usr/lib/jvm/java-8-openjdk-amd64/bin:$PATH
```

## ADB 和串口工具

检查 ADB 连接：

```bash
adb devices
```

进入 shell：

```bash
adb shell
```

调试串口使用 UART2，常用参数为 `115200 8N1`，不使用硬件/软件流控。

## 安装 Android 源码包

从网盘 `DVD_iboibox3568/source/` 目录获取 Android11 源码包，例如：

```text
ibox3568_Android11.tar.bz2
```

复制到 Ubuntu 用户目录后解压：

```bash
tar -xvf ibox3568_Android11.tar.bz2
```

源码包名称可能因发布时间不同而变化，以网盘中实际文件名为准。

## 编译 Android 源码包

编译映像时建议使用普通用户权限。编译生成的镜像统一放在：

```text
rockdev/Image-rk3568_r
```

常见镜像包括：`MiniLoaderAll.bin`、`U-Boot.img`、`trust.img`、`resource.img`、`boot.img`、`misc.img`、`recovery.img`、`dtbo.img`、`super.img`、`vbmeta.img` 等。

### 编译 U-Boot

```bash
./mk.sh -u
```

编译完成后会生成 `rk356x_spl_loader_v1.03.107.bin`、`U-Boot.img`、`resource.img` 等文件。

### 编译 Android 内核

```bash
./mk.sh -k
```

Android11 的 `kernel.img` 和 `resource.img` 包含在 `boot.img` 中，更新 kernel 后需要在 Android 根目录执行：

```bash
./mkimage.sh
```

重新打包后烧写 `rockdev` 目录下的 `boot.img`。

### 编译 Android 文件系统

```bash
./mk.sh -s
```

### 打包 update.img

```bash
./mk.sh -U
```

也可以完整编译：

```bash
./mk.sh -a
```

其中 `-a` 等同于 `./mk.sh -u -k -s -U`。

## Windows 烧写 update.img

1. 解压并安装 `Release_DriverAssitant` 中的 Rockchip 驱动；
2. 使用 `AndroidTool_Release_v2.79` 或 SDK 中指定版本；
3. 选择“升级固件”选项卡，点击“固件”选择生成的 `update.img`；
4. 按下 RECOVERY 键，然后插入 Micro USB 线与 12V DC 电源线；
5. 工具提示发现 `LOADER` 设备后点击升级；
6. 若提示发现 `ADB` 设备，可点击切换进入 `LOADER`。

## 批量烧写

批量刷机可使用 `FactoryTool_v1.66`：选择 `update.img`，勾选“升级”，点击“启动”，然后依次连接主板进行自动升级。

## TF 卡升级说明

原手册中 TF 卡升级功能标注为“等待后续验证，暂未实现”，相关内容仅作为其他平台参考。实际是否支持以当前 SDK 和出货固件为准。
