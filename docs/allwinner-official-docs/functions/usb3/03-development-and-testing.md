---
title: USB 3.0 开发与测试
sidebar_position: 3
description: USB 3.0 的接口使用、板端命令和功能验证。
---

# USB 3.0 开发与测试

## Host 与 Device 验证

```bash
lsusb -t
dmesg | grep -Ei 'xhci|dwc3|superspeed|gen2'
cat /sys/kernel/debug/usb/devices
```

SuperSpeed 设备应在 `lsusb -t` 中显示 `5000M`，Gen2/SSP 平台可能显示更高速度。若只显示 `480M`，说明 U2 通道正常但 U3 链路未建立。

## Type-C / DRD

完整 DRD 需要 CC/PD 控制器、方向切换 mux、USB role switch、VBUS 控制和 DWC3 mode 同步。HUSB311 + PS8743 只是一种参考方案，实际硬件使用其他 CC logic/mux 时必须匹配对应驱动。

## ComboPHY 冲突

部分 T527 方案中 PCIe 与 USB3 共用 ComboPHY。`phy_use_sel` 选择 USB3 时 PCIe 不可同时使用；选择 PCIe 时应关闭 USB3 相关节点。必须结合原理图和 SoC 规格确认复用关系。

## 性能

使用 U 盘/SSD 测试时同时记录：枚举速率、文件系统、块大小、缓存、CPU 占用和读写方向。Gadget 性能还受 function 实现与 PC 驱动影响。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
