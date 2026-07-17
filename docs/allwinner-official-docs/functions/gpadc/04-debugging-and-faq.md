---
title: GPADC 调试与常见问题
sidebar_position: 4
description: GPADC 的日志、调试节点和常见故障定位。
---

# GPADC 调试与常见问题

- 按键误报：检查输入悬空、分压电阻误差、参考电压波动、滤波阈值和邻近按键电压间隔。
- 无 event 节点：确认 keypad 通道已启用、input 依赖已打开、probe 日志无错误。
- 码值固定为 0 或满量程：检查引脚复用、电压是否超量程、通道是否选错。
- 采样抖动：降低源阻抗、增加硬件 RC 滤波，并结合软件平均/去抖。
- 识别功能失败：确认 U-Boot/OpenSBI 与 Kernel 使用同一通道和阈值定义。

```bash
dmesg | grep -i gpadc
cat /proc/bus/input/devices
cat /proc/interrupts | grep -i gpadc
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
