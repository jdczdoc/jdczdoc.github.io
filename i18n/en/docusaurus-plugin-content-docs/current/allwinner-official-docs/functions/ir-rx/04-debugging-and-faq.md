---
title: IR-RX Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for IR-RX.
---

# IR-RX Diagnostics and FAQ

- No input device: inspect IRRX pinmux, clock, reset, interrupt, and driver symbols.
- Raw pulses exist but no key is reported: inspect protocol type, vendor/address code, and keymap.
- `getevent` reports the key but Android does not react: inspect the keylayout file and permissions.
- Suspend wakeup works but fake-poweroff wakeup does not: inspect `uboot-board.dts`, the U-Boot driver, and the low-power domain.
- False triggers: inspect receiver power, ambient light, input inversion, and filter parameters.

```bash
dmesg | grep -Ei 'irrx|rc-core|remote'
cat /proc/bus/input/devices
cat /proc/interrupts | grep -i ir
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
