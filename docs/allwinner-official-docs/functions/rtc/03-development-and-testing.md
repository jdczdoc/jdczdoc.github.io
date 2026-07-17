---
title: RTC 开发与测试
sidebar_position: 3
description: RTC 的接口使用、板端命令和功能验证。
---

# RTC 开发与测试

## 基本使用

```bash
ls -l /dev/rtc*
cat /proc/driver/rtc
hwclock -r
hwclock -w    # system -> RTC
hwclock -s    # RTC -> system
date -s '2026-07-17 12:00:00'
```

Android 上还要确认 `init`、time detector、网络授时和权限策略是否会再次修改系统时间。

## ioctl 接口

应用可打开 `/dev/rtc0` 并使用 `RTC_RD_TIME`、`RTC_SET_TIME`、`RTC_ALM_READ`、`RTC_ALM_SET` 等 ioctl。设置闹钟前确认驱动是否支持 alarm 和 wakeup。

## 校准思路

先用稳定参考源测量 24 小时或更长时间的累计误差，再判断是晶振频偏、负载电容、温漂还是软件同步造成。不要根据短时间几秒的差异直接修改校准参数。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
