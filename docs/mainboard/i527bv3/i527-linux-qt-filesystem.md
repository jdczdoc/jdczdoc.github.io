---
title: Linux/Qt 文件系统
sidebar_position: 13
---
# Linux/Qt 文件系统

I527BV3 Linux SDK 使用 Buildroot 生成根文件系统。Qt 是否已集成、使用 Qt 5 还是其他版本，取决于当前 SDK 的 Buildroot 配置。

## 进入 Buildroot 配置

```bash
cd i527bv3_linux
source build/envsetup.sh
./build.sh buildroot_menuconfig
```

在菜单中检查：

```text
Target packages
  └─ Graphic libraries and applications
       └─ Qt5
```

具体菜单名称可能随 Buildroot 版本变化。

## 编译文件系统

优先使用脚本帮助中列出的命令：

```bash
./build.sh buildroot_rootfs
```

部分版本使用：

```bash
./build.sh buildroot
```

完成后再打包：

```bash
./build.sh pack
```

## 部署 Qt 程序

确认目标机 Qt 库和平台插件：

```bash
find /usr -name 'libQt5Core.so*'
find /usr -path '*plugins/platforms*'
```

运行 framebuffer 或 EGLFS 程序时，可按实际镜像设置：

```bash
export QT_QPA_PLATFORM=eglfs
./my_qt_app
```

若镜像使用 Linux framebuffer：

```bash
export QT_QPA_PLATFORM=linuxfb
./my_qt_app
```

平台插件、GPU 驱动和显示后端必须匹配。出现黑屏时，先检查 DRM/fb 设备、Qt 插件、动态库依赖和权限：

```bash
ls -l /dev/dri /dev/fb*
ldd ./my_qt_app
```
