---
title: UART / RS485 调试与常见问题
sidebar_position: 4
description: UART / RS485 的日志、调试节点和常见故障定位。
---

# UART / RS485 调试与常见问题

- 无 `/dev/ttySx`：检查控制器节点、驱动宏、alias 和 probe 日志。
- 能发不能收：检查 RX pinmux、电平、流控、波特率和地线。
- 数据分段：这是 TTY/调度行为，不应假设一次 `read()` 对应一帧；使用协议长度、分隔符或超时组帧。
- RS485 首尾丢字节：调整方向使能提前/延后时间，检查 GPIO 极性和发送完成中断。
- 高波特率误码：测量时钟误差、边沿、线缆和收发器带宽。

```bash
cat /proc/tty/driver/serial
cat /proc/interrupts | grep -i uart
dmesg | grep -Ei 'uart|ttyS|serial'
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
