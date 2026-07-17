---
title: GPIO Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for GPIO.
---

# GPIO Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux GPIO Development Guide
- Version: 2.2
- Release date: 2026-03-13
## Scope

Applies to pinctrl/GPIO drivers in the independent Allwinner BSP repository. T527 Linux 5.15 can follow this workflow while confirming the actual nodes and options in the source tree.

## Capabilities

- GPIO input/output and level control
- pinctrl states, pinmux, pull and drive-strength configuration
- GPIO-to-IRQ mapping and interrupt debounce
- debugfs, sunxi_pinctrl and userspace diagnostics

## Typical source paths

```text
bsp/drivers/pinctrl/
bsp/configs/linux-5.15/*.dtsi
device/config/chips/t527/configs/<BOARD>/linux-5.15/board.dts
```
## Pre-configuration checks

1. Confirm controller index, pins, voltage domain, supplies, reset, and interrupt from the schematic.
2. Confirm the controller label, compatible, clocks/resets, and default state in the final SoC DTSI.
3. Override only board-specific differences in `board.dts`; do not copy the full SoC resource block.
4. Inspect the active driver source for property names, units, and defaults.
5. Save the before/after DTB, defconfig, and target logs for rollback.
## Documents in this category

- [Configuration](./02-configuration.md)
- [Development and testing](./03-development-and-testing.md)
- [Diagnostics and FAQ](./04-debugging-and-faq.md)
