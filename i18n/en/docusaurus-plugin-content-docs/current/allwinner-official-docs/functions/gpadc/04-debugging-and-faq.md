---
title: GPADC Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for GPADC.
---

# GPADC Diagnostics and FAQ

- False key events: inspect floating inputs, resistor tolerance, reference-voltage variation, filter thresholds, and voltage spacing between keys.
- No event node: ensure the keypad channel and input dependencies are enabled and check probe errors.
- The value is always zero or full scale: verify pinmux, input range, and channel selection.
- Noisy samples: reduce source impedance, add hardware RC filtering, and use software averaging or debounce.
- Identification fails: ensure U-Boot/OpenSBI and the kernel use the same channel and threshold definitions.

```bash
dmesg | grep -i gpadc
cat /proc/bus/input/devices
cat /proc/interrupts | grep -i gpadc
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
