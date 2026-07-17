---
title: USB 2.0 调试与常见问题
sidebar_position: 4
description: USB 2.0 的日志、调试节点和常见故障定位。
---

# USB 2.0 调试与常见问题

- 插入无反应：先看 VBUS、电源开关、D+/D-、设备树状态和 Host 控制器 probe。
- 反复重连：检查供电压降、线缆、接插件、PHY 参数和信号完整性。
- 高速设备变全速：检查 PHY/时钟/走线，确认没有只连接 D+/D- 以外的 SuperSpeed 误解；USB2 高速仍只使用 D+/D-。
- Device 无法被 PC 识别：检查 UDC 是否绑定、descriptor、gadget function 和 `sys.usb.config`。
- 休眠唤醒后丢设备：检查 wakeup 属性、VBUS 恢复时序和控制器 runtime PM。

```bash
dmesg | grep -Ei 'usb|ehci|ohci|udc|gadget|extcon'
cat /sys/kernel/debug/usb/devices
cat /sys/class/udc/*/state 2>/dev/null
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
