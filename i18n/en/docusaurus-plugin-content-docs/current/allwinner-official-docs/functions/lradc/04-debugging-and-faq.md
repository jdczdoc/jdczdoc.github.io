---
title: LRADC Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for LRADC.
---

# LRADC Diagnostics and FAQ

- A key reports its neighbor: remeasure the voltage and increase spacing between ranges.
- Long-press repeat is abnormal: inspect input repeat settings and driver debounce timing.
- Intermittent missing events: inspect the resistor ladder, switch contact, ADC input capacitance, and sampling filter.
- No key responds: verify that the `compatible` matches the reference-voltage variant and that the node is enabled.
- Interrupts increase but no event appears: check whether the filter classifies the voltage as an invalid range.
## General diagnostic order

1. Schematic and power.
2. Node and pinctrl in the final DTB.
3. Final `.config` and modules.
4. Probe, clock, reset, and IRQ logs.
5. Device node and sysfs/debugfs.
6. Minimal functional test.
7. Stress, suspend, and abnormal hot-plug tests.

Do not treat the removal of an error log as a fix. Find the first failure and validate its upstream and downstream dependencies.
