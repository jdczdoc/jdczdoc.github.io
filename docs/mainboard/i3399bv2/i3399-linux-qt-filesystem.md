---
sidebar_position: 11
title: Linux QT 文件系统
description: I3399 buildroot、QT5 示例和 QT Creator 配置
---

# Linux QT 文件系统

本页整理 Buildroot/QT 文件系统相关内容，以及 QT5 默认示例和 QT Creator 配置入口。

## Buildroot 文件系统

新版 RK Linux SDK 可基于 Buildroot 构建 Qt 文件系统。进入 SDK 目录后，可按板卡配置编译：

```bash
./build.sh buildroot
# 或
./mk.sh -b
```

编译完成后，文件系统镜像通常生成在 Buildroot 输出目录或 SDK 镜像输出目录中，最终参与打包生成 `rootfs.img` 或 `update.img`。

## 配置 Buildroot

Buildroot 配置入口：

```bash
cd buildroot
make menuconfig
```

常见配置项包括：

- Target Architecture：选择 ARM/AArch64，具体与 RK3399 平台配置一致。
- Toolchain：使用 Buildroot 自身生成工具链或外部工具链。
- System configuration：配置 root 用户、登录方式和启动脚本。
- Target packages：选择 Qt5、mplayer、网络工具、调试工具等。
- Filesystem images：选择 ext2/ext4 等文件系统镜像格式。

配置完成后可备份 `.config`：

```bash
cp .config i3399_buildroot_config
```

## 编译 Buildroot

```bash
make
```

编译过程会下载并编译第三方库，若报缺少依赖，需要根据错误信息安装对应软件包。

## 测试 QT5 默认示例

进入 Linux QT 系统后，可在 Qt 示例目录运行测试程序：

```bash
cd /usr/lib/qt/examples
```

例如运行时钟示例：

```bash
cd gui/analogclock
./analogclock &
```

运行 rasterwindow 示例：

```bash
cd gui/rasterwindow
./rasterwindow &
```

## QT Creator

QT Creator 需要配置交叉编译器、qmake、sysroot 和 Kit。不同 SDK 输出目录可能不同，建议以源码中的 `prebuilts`、`buildroot/output/.../host` 和实际编译日志为准。

配置思路：

1. 添加交叉编译器。
2. 添加 qmake 路径。
3. 配置 sysroot。
4. 新建 Kit 并绑定编译器、qmake 和 sysroot。
5. 编译示例工程并拷贝到主板运行。

## QT_demo 测试程序

QT_demo 可用于测试 LED、蜂鸣器、背光、按键、音频、触摸屏、网络、TF 卡、U 盘、重启和关机等功能。实际支持项取决于当前固件和硬件配置。
