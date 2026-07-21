---
title: Common System Modules
sidebar_label: Common System Modules
sidebar_position: 9
description: Login, boot, UART, GPIO, network, ADC, PWM, and power management.
---

# Common System Modules

This section covers:

- Login and debug permissions
- Boot0 and U-Boot
- UART, GPIO, and pinctrl
- Wi-Fi and network configuration
- GPADC and PWM
- PMC, standby, SID, and wakeup sources

Useful commands:

```bash
cat /sys/kernel/debug/pinctrl/*/pinmux-pins
cat /sys/kernel/debug/gpio
dmesg | grep -iE "pm|standby|suspend|resume|wakeup"
cat /sys/kernel/debug/wakeup_sources
```
