---
title: PCIe 调试与常见问题
sidebar_position: 4
description: PCIe 的日志、调试节点和常见故障定位。
---

# PCIe 调试与常见问题

- 链路训练失败：依次检查供电、PERST# 时序、REFCLK、TX/RX 对、极性/通道、ComboPHY 选择和速率。
- Gen2 不稳定：临时设 `max-link-speed = <1>` 验证 Gen1；Gen1 稳定通常指向信号完整性或均衡问题。
- NVMe 枚举后掉盘：检查 3.3V 峰值电流、温度、ASPM 和 I/O 错误。
- PCIe 抢占带宽导致显示异常：通过限速、IOMMU/带宽/QoS 和业务负载逐项隔离，不能只看 PCIe probe 成功。
- U-Boot 临时参数只用于定位，确认有效后应固化到 DTS/驱动配置。

```bash
lspci -vv
lspci -nn
cat /proc/interrupts | grep -i pcie
dmesg | grep -Ei 'pcie|aer|nvme|link down'
```
## 通用定位顺序

1. 原理图与供电。
2. 最终 DTB 中的节点和 pinctrl。
3. 最终 `.config` 与 `.ko`。
4. probe、clock、reset、IRQ 日志。
5. 设备节点与 sysfs/debugfs。
6. 最小功能测试。
7. 压力、休眠和异常插拔测试。

不要通过关闭错误日志来判断问题已经解决。应找到第一个异常并验证其上下游依赖。
