---
title: Ubuntu 虚拟机安装
sidebar_label: Ubuntu 虚拟机安装
sidebar_position: 2
description: 获取 Ubuntu ISO，并创建适合 Rockchip 和 Allwinner SDK 编译的虚拟机。
---

# Ubuntu 虚拟机安装

服务器中已验证的编译环境为 **Ubuntu 20.04.5 LTS amd64**。为了减少软件包和工具版本差异，建议优先使用 Ubuntu 20.04.x 64 位桌面版。

## 获取 Ubuntu ISO

内部网盘可提供不同 Ubuntu 版本的 ISO 镜像。

![网盘中的 Ubuntu ISO](./images/11-ubuntu-images.png)

也可以从 Ubuntu 官方或可信镜像站下载。选择对应版本目录后，下载文件名包含：

```text
desktop-amd64.iso
```

![Ubuntu 镜像站版本目录](./images/12-ubuntu-mirror-index.png)

![选择 Ubuntu Desktop ISO](./images/13-ubuntu-iso-download.png)

## 创建虚拟机

在 VMware 主界面点击“创建新的虚拟机”，选择“典型”配置。

![选择典型虚拟机配置](./images/14-new-vm-typical.png)

选择刚下载的 Ubuntu ISO。原文中的“ios 镜像”应为 **ISO 镜像**。

![选择 Ubuntu ISO](./images/15-select-iso.png)

填写用户名和密码。建议使用普通用户，不要将日常编译环境直接配置为 root 用户。

![填写 Ubuntu 用户信息](./images/16-easy-install.png)

设置虚拟机名称和保存位置。SDK 文件较大，建议将虚拟机放在空间充足的 SSD 上。

![设置虚拟机名称和位置](./images/17-vm-name-location.png)

## 资源配置建议

原始示例中的 4 GB 内存和 40 GB 磁盘只能用于演示 Ubuntu 安装，**不适合完整编译 Android、Rockchip 或 Allwinner SDK**。

| 项目 | 最低建议 | 推荐配置 |
| --- | ---: | ---: |
| CPU | 4 核 / 8 线程 | 8 核 / 16 线程以上 |
| 内存 | 16 GB | 32 GB 或以上 |
| 系统与工具磁盘 | 100 GB | 150 GB 或以上 |
| SDK 工作磁盘 | 300 GB | 500 GB～1 TB |
| 存储介质 | SATA SSD | NVMe SSD |

为虚拟磁盘预留足够空间。

![设置虚拟磁盘容量](./images/18-virtual-disk-size.png)

点击“自定义硬件”进一步配置。

![自定义虚拟机硬件](./images/19-customize-hardware.png)

内存不要超过宿主机可用内存。宿主机还需要为 Windows 和其他程序保留足够空间。

![设置虚拟机内存](./images/20-memory-settings.png)

可以在 Windows 任务管理器中查看宿主机 CPU 和内存配置。

![查看宿主机硬件配置](./images/21-host-task-manager.png)

处理器数量与每个处理器的内核数量相乘，不能超过宿主机可用逻辑处理器数量。

![设置虚拟机 CPU](./images/22-cpu-settings.png)

## 网络模式

需要让局域网内其他设备直接访问虚拟机时，可选择桥接模式。仅需要虚拟机访问互联网时，NAT 模式通常更省事。

![配置桥接网络](./images/23-bridged-network.png)

确认虚拟机配置后开始安装。

![虚拟机配置摘要](./images/24-vm-summary.png)

![Ubuntu 安装界面](./images/25-ubuntu-installation.png)

安装完成后，使用创建虚拟机时设置的普通用户登录。

![Ubuntu 登录界面](./images/26-ubuntu-login.png)
