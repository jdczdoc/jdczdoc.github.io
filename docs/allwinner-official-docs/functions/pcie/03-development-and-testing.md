---
title: PCIe 开发与测试
sidebar_position: 3
description: PCIe 的接口使用、板端命令和功能验证。
---

# PCIe 开发与测试

## T527 快速验证

```bash
dmesg | grep -Ei 'pcie|combophy|link'
lspci
lspci -vv
```

T527 预期为 PCIe 2.1 RC x1。`lspci` 应先看到根桥，再看到下游 EP。只有根桥没有 EP 时，重点检查 PERST#、REFCLK、供电和链路训练。

## NVMe SSD

```bash
ls /dev/nvme*
nvme list
fdisk -l /dev/nvme0n1
```

内核需启用 NVMe block driver。供电必须满足 SSD 启动峰值电流，过弱会导致枚举反复或 I/O 错误。

## PCIe 网卡

确认网卡 VID/PID 和驱动，例如 Realtek 常用 `r8169`。枚举成功但没有网卡接口时，检查 endpoint driver 是否启用及固件是否缺失。

## ID 与模式

RC/EP compatible 和驱动版本必须匹配。T527 文档范围为 RC；不要直接套用支持 DM 的 MR536/T536/A733 配置。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
