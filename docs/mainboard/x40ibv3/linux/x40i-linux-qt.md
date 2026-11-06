---
sidebar_position: 2
title: Qt 与显示配置
description: x40i Qt 与显示配置
---

# Qt 与显示配置

## Qt 5.4.1 库

先完成一次系统编译，再打开新的 Shell 会话编译 Qt。该 Qt 配置不提供 GPU/OpenGL 加速；Qt 库需独立构建。

```bash
cd x40i_linux
./qtLibAutoBuild.sh
./build.sh
./build.sh pack
```

Qt 库安装于目标根文件系统的 `/usr/local/Qt-5.4.1`。保留已安装目录时，无需每次重新编译 Qt。若编译占用过高，可在 Qt 的 `setenvs.sh` 中降低 `makeall` 并行度或去掉 `-j`。

## Qt 应用

按摄像头方案选择 `ui_qt_2csi` 或 `ui_qt_360`，复制为 `ui_qt`。以下为双 CSI 方案示例，已有 `ui_qt` 修改应先备份：

```bash
cd x40i_linux/buildroot/target/user_rootfs_misc
cp -r ui_qt_2csi ui_qt
cd ui_qt
make clean
./makedvr
cd ../../../..
./build.sh
./build.sh pack
```

## 屏参选择

屏幕配置位于 `tools/pack/chips/sun8iw11p1/configs/<板型>/sys_config.fex`。在匹配板型目录选择 RGB 或 LVDS 屏参后重新编译打包。下列文件名是 1024×600 示例：

```text
sys_config.fex_sdk_rgb_1024600
sys_config_new_evb_lvds1024600.fex
```

调试 framebuffer 时可在板端串口执行下列命令观察屏幕是否出现变化；该操作会覆盖当前画面，测试后重启显示应用。

```bash
cat /bin/bash > /dev/fb0
```
