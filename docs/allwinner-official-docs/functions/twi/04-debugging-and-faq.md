---
title: TWI / I2C 调试与常见问题
sidebar_position: 4
description: TWI / I2C 的日志、调试节点和常见故障定位。
---

# TWI / I2C 调试与常见问题

- `i2cdetect` 全部显示 `--`：检查 SDA/SCL pinmux、外部上拉、供电、总线编号和节点状态。
- 显示 `UU`：地址已被内核驱动占用，不是故障。
- `timeout`：常见于从设备拉低 SDA/SCL、上拉过弱、频率过高或时钟门控异常。
- 无法发 START/STOP：先用示波器检查总线是否被占用，再看控制器状态和 reset。
- 数据不完整：检查长度、DMA/engine 模式、重复起始和从设备页写限制。

```bash
dmesg | grep -Ei 'twi|i2c'
cat /sys/class/i2c-adapter/i2c-*/name
find /sys/kernel/debug -iname '*twi*' -o -iname '*i2c*'
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
