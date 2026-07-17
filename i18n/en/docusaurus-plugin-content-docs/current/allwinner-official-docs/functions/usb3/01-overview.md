---
title: USB 3.0 Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for USB 3.0.
---

# USB 3.0 Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux USB 3.0 Development Guide
- Version: 1.8
- Release date: 2025-10-20
## Scope

T527 Linux 5.10/5.15 is listed as supported. Covers xHCI, DWC3, DRD, Type-C, Gadget, U2/U3 signal tests, and performance.

## Capabilities

- xHCI Host and DWC3 Device/DRD
- USB2 PHY, SuperSpeed PHY/ComboPHY, and Type-C mux
- SuperSpeed Gadget and composite functions
- DWC3/xHCI diagnostics, U2/U3 signal tests, and performance analysis

## Typical source paths

```text
kernel/linux-5.15/drivers/usb/
bsp/drivers/usb/
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
