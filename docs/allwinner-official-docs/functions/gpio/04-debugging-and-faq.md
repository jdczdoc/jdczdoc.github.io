---
title: GPIO 调试与常见问题
sidebar_position: 4
description: GPIO 的日志、调试节点和常见故障定位。
---

# GPIO 调试与常见问题

- `gpio_request` 或 `gpiod_get` 失败：检查该引脚是否已被其他设备占用。
- 电平写入无变化：检查 pinmux 是否仍配置为 UART、PWM、SPI 等复用功能。
- 中断持续触发：核对触发极性、外部上下拉、电平保持时间及消抖配置。
- 休眠后电平异常：检查 `default`、`sleep` state 以及电源域是否掉电。
- 驱动能力不足：核对 `drive-strength` 与芯片手册允许范围，不要盲目设最大值。

```bash
dmesg | grep -Ei 'gpio|pinctrl|irq'
cat /proc/interrupts
mount -t debugfs none /sys/kernel/debug 2>/dev/null || true
cat /sys/kernel/debug/gpio
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
