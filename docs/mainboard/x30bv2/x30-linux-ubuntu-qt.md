---
sidebar_position: 12
title: Linux Ubuntu 与 Qt
description: X30/PX30 Ubuntu 文件系统构建、NFS/TF/U 盘启动和 Qt 文件系统搭建
---

# Linux Ubuntu 与 Qt

## ARM Ubuntu 构建思路

新版 Linux 内核可直接挂载文件系统启动，不需要先进入 ramdisk 的中间过程。文件系统可以基于 TF/SD 卡、U 盘或 NFS 网络文件系统构建。手册以 X30/PX30 为例，也适用于 RK3288/RK3399 等平台。

## 准备工作

1. 烧写 `update-linux.img`，确保开发板能正常进入 Linux 系统。
2. 准备 TF 卡、SD 卡、USB 读卡器或 U 盘，并格式化为 ext4。
3. 若使用 NFS，准备网线和路由器，让 PC 与开发板在同一网段。
4. 修改 bootargs 后通常只需要重新编译并烧写 `boot.img`。

## bootargs 位置

PX30 / X30 平台 bootargs 通常位于：

```bash
kernel/arch/arm64/boot/dts/rockchip/rk3326-linux.dtsi
```

其他平台示例：

```bash
# RK3288
kernel/arch/arm/boot/dts/rk3288-linux.dtsi

# RK3399
kernel/arch/arm64/boot/dts/rockchip/rk3399-linux.dtsi
```

可以从 DTS 开始搜索：

```bash
grep -R "bootargs" kernel/arch/arm64/boot/dts/rockchip/
```

PX30 原始 bootargs 示例：

```dts
chosen &#123;
    bootargs = "earlycon=uart8250,mmio32,0xff160000 swiotlb=1 console=ttyFIQ0 root=PARTUUID=614e0000-0000 rootwait";
&#125;;
```

## 从 TF / U 盘启动文件系统

根据实际设备节点修改 root 参数，例如 `/dev/mmcblk1p1` 或 `/dev/sda1`，并指定 `rootfstype=ext4 rootwait`。修改后重新编译 kernel 并烧写 boot.img。

## NFS 根文件系统

NFS 方式需要配置 PC 端 NFS 服务，并在开发板 bootargs 中指定：

```text
root=/dev/nfs nfsroot=<server_ip>:/path/to/rootfs,v3,tcp rw ip=dhcp
```

首次启动进入 NFS 文件系统后，可完成用户、网络、图形界面和软件包安装配置。

## Qt 文件系统搭建

Linux 手册的 Qt 文件系统部分基于 Buildroot。典型流程：

```bash
# 下载或进入 buildroot
cd buildroot

# 配置
make menuconfig

# 编译
make
```

Buildroot 编译完成后，可在输出目录中获取 rootfs 镜像和 host 工具链。

## 测试 Qt5 默认示例

进入 Qt 文件系统后，可以运行 Qt5 自带示例程序验证显示、触摸、输入和库依赖是否正常。

## Qt Creator

桌面端可安装 Qt Creator，用于创建和编译 Qt 示例。交叉编译时要配置对应的交叉工具链、sysroot、qmake 和运行环境。
