---
title: RTC Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for RTC.
---

# RTC Development and Testing

## Basic operation

```bash
ls -l /dev/rtc*
cat /proc/driver/rtc
hwclock -r
hwclock -w    # system -> RTC
hwclock -s    # RTC -> system
date -s '2026-07-17 12:00:00'
```

On Android, also check whether init services, the time detector, network time, or policy changes the system time again.

## ioctl interface

An application can open `/dev/rtc0` and use `RTC_RD_TIME`, `RTC_SET_TIME`, `RTC_ALM_READ`, and `RTC_ALM_SET`. Confirm alarm and wakeup support before relying on an RTC alarm.

## Calibration approach

Measure accumulated error against a stable reference for at least 24 hours. Determine whether the cause is crystal tolerance, load capacitance, temperature drift, or software synchronization. Do not change calibration from a few seconds of short-term observation.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
