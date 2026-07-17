---
title: IR-RX 红外接收 调试与常见问题
sidebar_position: 4
description: IR-RX 红外接收 的日志、调试节点和常见故障定位。
---

# IR-RX 红外接收 调试与常见问题

- 无 input 设备：检查 IRRX pinmux、时钟、复位、中断和驱动宏。
- 有原始脉冲但无按键：检查协议类型、厂商码、地址码和 keymap。
- getevent 有值但 Android 无响应：检查 keylayout 文件和权限。
- 休眠可唤醒、假关机不可唤醒：检查 `uboot-board.dts`、U-Boot 驱动和低功耗电源域。
- 误触发：检查接收头供电、环境光、输入反相和滤波参数。

```bash
dmesg | grep -Ei 'irrx|rc-core|remote'
cat /proc/bus/input/devices
cat /proc/interrupts | grep -i ir
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
