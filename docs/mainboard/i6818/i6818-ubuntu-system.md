---
sidebar_position: 8
title: Ubuntu 系统
description: i6818 Ubuntu 12.04 安装、烧写和功能体验
---

# Ubuntu 系统

> 说明：本页软件流程按前面整理的 x6818 软件文档沿用。i6818 与 x6818 启动/烧录流程相近，实际命令、源码包名和镜像名以当前 i6818 SDK 为准。

i6818 Linux 手册包含 Ubuntu 12.04 系统安装和体验章节。

## Ubuntu 烧写方法一

方法一将 U-Boot 和 `boot.img` 烧写到 eMMC，再将 Ubuntu 文件系统烧写到 TF 卡，并通过 U-Boot 环境变量指定从 TF 卡文件系统启动。

典型步骤：

1. 烧写 U-Boot 和 `boot.img` 到 eMMC。
2. 将 Ubuntu 文件系统写入 TF 卡。
3. 设置 U-Boot 环境变量。
4. 插卡启动并验证根文件系统。

## Ubuntu 烧写方法二

方法二使用 Ubuntu 升级卡一键升级系统：

1. 制作 Ubuntu 升级卡。
2. 使用升级卡一键升级 Ubuntu 系统。
3. 设置 U-Boot 环境变量。
4. 重启验证。

## Ubuntu 功能体验

手册列出的体验项目包括：

- Ubuntu 系统界面。
- USB 鼠标键盘。
- 超级终端。
- scrot 工具截图。
- 有线上网。
- Wi-Fi 上网。
- 3G 上网。
- 蓝牙数据传输。
- U 盘。
- 播放音乐。
- 播放视频。
- USB 摄像头。
