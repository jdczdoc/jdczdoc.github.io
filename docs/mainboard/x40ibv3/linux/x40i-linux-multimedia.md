---
sidebar_position: 5
title: Linux 摄像头与多媒体
description: x40i Linux 摄像头与多媒体
---

# Linux 摄像头与多媒体

## ADB 与程序更新

在板端串口启动 ADB 服务，再用 USB OTG 连接主机。主机配置好 ADB 后检查设备：

```bash
cd /
./adb.sh
```

以下命令在主机 SDK 根目录执行：

```bash
adb devices
adb push buildroot/target/user_rootfs_misc/sdk/libsdk.so /usr/lib/
adb push buildroot/target/user_rootfs_misc/sdk/sdktest /
```

## 摄像头预览与录像

先完成 SDK 编译和固件烧录。在板端 `/autorun.sh` 中注释 `/DvrUI &`，重启后运行 sdktest，避免两个应用争用显示或摄像头。

```bash
cd /
source ./qt5.sh
./sdktest
```

CSI 摄像头使用不带参数的命令。四路 CVBS 方案使用 `./sdktest 360`；按实际摄像头方案选择。录像前插入可写 TF 卡，测试程序检测到卡后生成 MP4 文件。

## 动态日志等级

在 `sdk/camera/cameratester.cpp` 启用 `DB_LEVEL_TEST`，重新编译并将 `debuglevelset` 更新到板端。先启动 sdktest，再运行日志客户端；两者应使用能访问同一 `Loglevel_server` socket 的工作目录。

```bash
cd /
chmod 755 /sdktest /debuglevelset
source /qt5.sh
./sdktest &
./debuglevelset 2
```

## YUV 与播放器示例

YUV 显示示例在 cameratester.cpp 中启用 `AUTEVENT_TEST`，重新编译，将 `100.yuv` 放入 U 盘。文件格式为 `1280_720_YUV420_SP_VUVU`。

播放器目标 `xplayerdemo` 在 `sdk/Makefile_sub` 中加入构建列表，编译后复制到板端：

```bash
chmod 755 /xplayerdemo
/xplayerdemo
```

进入播放器交互终端后执行：

```text
set url: /mnt/UDISK/a.mp4
show mediainfo
play
pause
```

摄像头纹理 GPU 测试可在 `sdk/Makefile_sub` 启用 `DEFINES+=-DDMAFD_TEST` 后重编译。老化测试前检查 camerateser/cameratester 测试代码中的退出计时，避免将测试程序约 800 秒后退出误判为系统异常。
