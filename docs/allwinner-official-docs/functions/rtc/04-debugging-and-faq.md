---
title: RTC 调试与常见问题
sidebar_position: 4
description: RTC 的日志、调试节点和常见故障定位。
---

# RTC 调试与常见问题

- 重启后回到固定时间：检查备份电源、32 kHz 晶振和 RTC 域是否掉电。
- 时间不走：检查 oscillator、clock source、reset 和驱动 probe。
- 系统时间正确但 RTC 错：执行 `hwclock -w` 并检查写入权限。
- RTC 正确但系统时间错：检查 `CONFIG_RTC_HCTOSYS`、rtc-hctosys 设备号和 Android 时间服务。
- 时间逐渐漂移：测量日误差并检查晶振负载及温度。

```bash
dmesg | grep -i rtc
cat /sys/class/rtc/rtc0/name
cat /sys/class/rtc/rtc0/since_epoch
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
