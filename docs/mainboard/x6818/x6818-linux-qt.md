---
sidebar_position: 10
title: Qt 文件系统
description: X6818 Qt 文件系统搭建、Buildroot、Qt5.4 示例和 Qt Creator
---

# Qt 文件系统

X6818 Linux 手册包含 Qt 文件系统搭建、Buildroot 配置、Qt5.4 默认示例测试、Qt Creator 安装和默认示例编译。

## 下载 Buildroot

进入源码目录，下载或解压 Buildroot。不同 SDK 版本目录结构可能不同，实际路径以源码包为准。

## 配置 Buildroot

```bash
make menuconfig
```

配置重点包括：

- 目标架构和交叉编译工具链。
- 根文件系统类型。
- Qt5 / Qt5.4 相关组件。
- 触摸、字体、输入法、网络、音频等库依赖。
- 是否启用示例程序和调试工具。

## 编译 Buildroot

```bash
make
```

编译完成后，在输出目录中获取 rootfs 镜像、交叉编译工具链和目标库。

## 测试 Qt5.4 默认示例

烧录 Qt 文件系统后，进入系统运行默认示例，验证显示、触摸、按键、音频、串口、网络和存储挂载是否正常。

## 安装 Qt Creator

PC 端安装 Qt Creator 后，需要配置：

- C/C++ 编译器。
- qmake。
- sysroot。
- 目标设备或远程调试参数。
- Qt 版本和 Kit。

## 编译 Qt Creator 默认示例

创建 Qt 示例工程后，选择交叉编译 Kit，编译生成目标程序，拷贝到 X6818 文件系统运行。
