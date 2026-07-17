---
title: LRADC Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for LRADC.
---

# LRADC Development and Testing

## Voltage-boundary design

A common LRADC reference is 1350 mV. With a 6-bit ADC, one code step is approximately `1350 / 64 ≈ 21 mV`. Do not place key voltages directly on boundaries; reserve margin for resistor tolerance, noise, and reference-voltage variation.

Recommended procedure:

1. Calculate the theoretical voltage of every key from the resistor ladder.
2. Measure minimum, typical, and maximum values on real hardware.
3. Use the midpoint between adjacent measured ranges as the decision boundary.
4. Ensure the no-key state does not fall inside any valid key range.

## Target validation

```bash
cat /proc/bus/input/devices | grep -A10 -i lradc
getevent -lp
evtest /dev/input/eventX
cat /proc/interrupts | grep -i lradc
```

When only key events are needed, userspace should consume the input device instead of polling registers. The driver handles sampling, filtering, and event reporting.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
