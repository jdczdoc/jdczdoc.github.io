---
title: Android 编译与烧录
description: 当前 Android 用户手册给出的源码包为 Android 14：
---

# Android 编译与烧录

## 1. SDK 信息

当前 Android 用户手册给出的源码包为 Android 14：

```text
x3562_android14.tar.gz
```

资料目录为 `DVD_x3562/source/`。源码包名称可能随发布日期变化，以实际交付版本为准。

## 2. 设备树与分区文件

Android 手册列出的设备树文件路径：

```text
Kernel-6.1/arch/arm64/boot/dts/rockchip/rk3562-9tripod-evb.dtsi
```

分区文件路径示例：

```text
rockdev/Image-rk3562/parameter.txt
```

请确认实际 SDK 目录大小写、目标配置和文件名；不同版本可能调整目录名。

## 3. 编译命令

手册给出的编译步骤：

```bash
# 编译 U-Boot
./build.sh -U

# 编译内核
./build.sh -K

# 编译 Android 文件系统
./build.sh -A

# 查看帮助
./build.sh -h
```

编译时使用普通用户权限，不建议使用 root 执行完整 Android 编译。

## 4. 输出镜像

手册列出的主要镜像包括：

| 文件 | 说明 |
|---|---|
| `MiniLoaderAll.bin` | Loader |
| `uboot.img` | U-Boot |
| `boot.img` | Kernel / resource 等启动内容 |
| `recovery.img` | Recovery |
| `misc.img` | Recovery / wipe 启动标识 |
| `dtbo.img` | 设备树覆盖镜像 |
| `super.img` | 动态分区内容，如 system、vendor、product 等 |
| `vbmeta.img` | AVB 校验信息 |
| `update.img` | 整包升级镜像 |

手册对部分输出目录的描述存在命名不一致（例如 `Image-rk3562_u`、`Image-rk3562_u_r`、`Image-rkrk3562_r`）。以实际编译产物和 `build.sh` 输出为准，不要仅凭文档中的目录拼写定位镜像。

## 5. Windows 烧录

1. 安装 SDK 配套的 Rockchip DriverAssitant 驱动。
2. 启动 SDK 自带 AndroidTool。
3. 选择“升级固件”，加载生成的 `update.img`。
4. 按照板卡对应的按键和 USB OTG 接口进入 Loader / Maskrom。
5. 工具识别设备后开始升级，完成后等待设备重启。

如需单独烧写分区镜像，应确认 `parameter.txt` 与目标板配置完全匹配，避免误刷分区表或不兼容固件。
