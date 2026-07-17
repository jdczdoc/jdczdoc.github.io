---
title: GPIO Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for GPIO.
---

# GPIO Diagnostics and FAQ

- `gpio_request` or `gpiod_get` fails: check whether another device owns the pin.
- The level does not change: verify that the pin is not still muxed to UART, PWM, SPI, or another function.
- An interrupt fires continuously: verify polarity, external pulls, signal duration, and debounce settings.
- The level is wrong after suspend: inspect the `default` and `sleep` states and the power domain.
- Insufficient drive capability: use a valid `drive-strength` from the SoC manual instead of blindly selecting the maximum.

```bash
dmesg | grep -Ei 'gpio|pinctrl|irq'
cat /proc/interrupts
mount -t debugfs none /sys/kernel/debug 2>/dev/null || true
cat /sys/kernel/debug/gpio
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
