---
title: SPI-NG 调试与常见问题
sidebar_position: 4
description: SPI-NG 的日志、调试节点和常见故障定位。
---

# SPI-NG 调试与常见问题

- probe 成功但无波形：检查片选号、pinctrl、控制器模式以及是否被 Flash/DBI/Camera 模式占用。
- DMA 异常：临时关闭 DMA 宏、删除 `dma-names` 或强制 `use_dma=false`，先确认 CPU 传输是否正常。
- 高频数据错误：降低频率，检查采样模式/延迟、走线、负载和电压域。
- MISO 全为 `0xff`：常见于从设备未上电、CS 未拉低、模式错误或 MISO 悬空。
- 新旧驱动判断错误：结合 compatible、defconfig 和启动日志三项确认。

```bash
dmesg | grep -Ei 'spi|spidev'
find /sys/kernel/debug -iname '*spi*'
cat /sys/kernel/debug/spi*/info 2>/dev/null
cat /sys/kernel/debug/spi*/fifo 2>/dev/null
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
