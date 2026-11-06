---
sidebar_position: 12
title: Linux 系统使用
description: x311y3 Linux 系统使用
---

# Linux 系统使用

## 首次启动与登录

| 项目 | 说明 |
| --- | --- |
| 普通用户 | system / system |
| root 切换 | su；密码：1234 |
| 系统 | Debian 12 Bookworm / Armbian |

以上默认凭据来自 A311Y3 202608 Release Notes，后续镜像可能不同；量产或交付前按项目要求修改默认密码。

```bash
cat /etc/os-release
uname -a
whoami
df -h
free -h
lsblk
ip addr
```

确认系统进入桌面或命令行，无持续重启，根文件系统及容量正常；检查网络 IP、DNS、默认路由、时间和 RTC 节点。

## 软件包管理

```bash
sudo apt update
```

镜像使用 Debian Bookworm 软件包体系。量产或验证阶段不直接执行未经验证的全量 `apt upgrade`，内核、GPU、媒体、NPU 和厂商组件需与 SDK 匹配。

## 网络与蓝牙

- 有线：连接网线，在 Settings / Network 确认已连接并获得 IP。
- Wi-Fi：Settings / Wi-Fi 选择热点并输入密码，检查 DHCP/DNS。
- 蓝牙：Settings / Bluetooth 开启并配对，蓝牙音频还需选择输出设备。

## 双显与图形验证

双显需使用对应镜像，在 Settings / Display 选择第二屏并启用扩展或镜像。HDMI Only 版本默认 HDMI 输出。若没有第二屏，检查线材、接口、启动日志、DRM 驱动和设备树。图形测试需在 Wayland 桌面会话下运行。

```bash
sudo apt install glmark2-es2-wayland
glmark2-es2-wayland
```

## ADB 文件传输

```bash
adb devices
adb push <local> <remote>
adb pull <remote> <local>
```

`push` 从 PC 复制到开发板，`pull` 从开发板复制到 PC；USB 或网络 ADB 是否可用取决于镜像配置。

## 音频播放与录音

```bash
aplay -l
arecord -l
aplay -D hw:1,1 2ch_44.1k_play.wav
speaker-test -D hw:1,1 -c 2
arecord -Dhw:0,3 -r 16000 -c 2 -f S16_LE /tmp/record_S16_LE_16k.wav
```

声卡编号可能随设备树及驱动顺序变化，先列出设备，再按实际节点和 WAV 采样率、通道及位深调整。

## RTC 定时唤醒

```bash
sudo hwclock -w
sudo sh -c "echo 0 > /sys/class/rtc/rtc0/wakealarm"
sudo sh -c "echo +60 > /sys/class/rtc/rtc0/wakealarm"
```

示例设置 60 秒唤醒，需要 root 权限、`wakealarm` 节点及对应 RTC/电源管理/唤醒路径。先确认硬件支持，再验证关机或 suspend 后恢复；失败时检查 RTC 节点、唤醒源和供电。
