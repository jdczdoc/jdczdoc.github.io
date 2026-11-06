---
sidebar_position: 14
title: 常见问题与排查
description: x311y3 常见问题与排查
---

# 常见问题与排查

## Android 与烧录

- V3 不识别：检查 `adnl`、`connect_done`、Type-C 数据线、设备管理器和 `android_winusb`。
- Enter 无法进 U-Boot：检查串口 Port、921600、8N1、TX/RX/GND 和按键时机。
- DLL 加载失败：检查文件和 VC2015 运行库；黄色感叹号按驱动章节处理。
- `crc32` 缺失：安装 `libarchive-zip-perl` 后重编译。
- 烧录成功但不启动：获取完整 UART 日志，确认镜像与板卡版本匹配。
- 编译过慢：检查 CPU、RAM、SSD、磁盘空间及源码是否在 Linux 文件系统。

## Linux 构建与功能

- `docker info` 异常：检查安装、服务和用户权限。
- `Please install ninja!`：安装 `ninja-build` 并检查版本。
- 自动补丁失败：检查 SDK 根目录、脚本、`aml-patches` 和可选功能配置，修复后再构建。
- 缺少 `aarch64-none-elf-gcc`：运行 `host_env_check.sh`，核对工具链版本与 `/opt` 路径。
- 脚本称完成但无镜像：查首条有效错误及 `tee` 管道退出码处理，确认目标文件非空。
- 双显只有一屏：确认不是 HDMI Only，检查 Display 设置、线材、设备树和驱动。
- 摄像头 pipeline 失败：检查节点、格式、分辨率、会话及权限。

```bash
sudo apt update && sudo apt install -y ninja-build
df -h
free -h
docker info
ninja --version
./amlbian/host_env_check.sh
ls -lh build/output/images/
```

烧录排查顺序：串口 → U-Boot → USB → 工具。构建问题先看第一条有效报错，再检查主机依赖、Docker、工具链、可选功能、补丁和磁盘空间。
