---
title: RTC Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for RTC.
---

# RTC Diagnostics and FAQ

- Time returns to a fixed value after reboot: inspect backup power, the 32 kHz crystal, and RTC-domain retention.
- Time does not advance: inspect oscillator, clock source, reset, and probe log.
- System time is correct but RTC is wrong: run `hwclock -w` and check write permissions.
- RTC is correct but system time is wrong: inspect `CONFIG_RTC_HCTOSYS`, the selected hctosys device, and Android time services.
- Time gradually drifts: measure daily error and inspect crystal loading and temperature.

```bash
dmesg | grep -i rtc
cat /sys/class/rtc/rtc0/name
cat /sys/class/rtc/rtc0/since_epoch
```
## General diagnostic order

1. Schematic and power.
2. Node and pinctrl in the final DTB.
3. Final `.config` and modules.
4. Probe, clock, reset, and IRQ logs.
5. Device node and sysfs/debugfs.
6. Minimal functional test.
7. Stress, suspend, and abnormal hot-plug tests.

Do not treat the removal of an error log as a fix. Find the first failure and validate its upstream and downstream dependencies.
