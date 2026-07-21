---
title: Linux Driver Development
sidebar_label: Linux Driver Development
sidebar_position: 11
description: Driver integration, Kconfig, Makefile, Device Tree, modules, and user-space interfaces.
---

# Linux Driver Development

Drivers may be built into the kernel (`=y`) or as modules (`=m`).

A new driver normally requires:

```text
Kconfig
Makefile
driver source
Device Tree binding
board node
```

Common Device Tree properties include `compatible`, `reg`, `interrupts`, clocks, resets, pinctrl, GPIOs, and `status`.

```bash
m kernel
find out -name '*.ko'
insmod demo.ko
dmesg | tail
rmmod demo
```

Prefer standard kernel subsystems such as V4L2, ALSA, Input, IIO, GPIO, PWM, and networking over private character-device interfaces.
