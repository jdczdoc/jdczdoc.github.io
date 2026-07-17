---
title: TWI / I2C Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for TWI / I2C.
---

# TWI / I2C Diagnostics and FAQ

- `i2cdetect` shows only `--`: inspect SDA/SCL pinmux, external pull-ups, power, bus number, and node status.
- An address shows `UU`: a kernel driver already owns it; this is not an error.
- `timeout`: often caused by a device holding SDA/SCL low, weak pull-ups, excessive bus frequency, or clock/reset problems.
- START/STOP cannot be generated: inspect the bus with an oscilloscope before checking controller state and reset.
- Incomplete data: inspect length, DMA/engine mode, repeated-start requirements, and EEPROM page limits.

```bash
dmesg | grep -Ei 'twi|i2c'
cat /sys/class/i2c-adapter/i2c-*/name
find /sys/kernel/debug -iname '*twi*' -o -iname '*i2c*'
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
