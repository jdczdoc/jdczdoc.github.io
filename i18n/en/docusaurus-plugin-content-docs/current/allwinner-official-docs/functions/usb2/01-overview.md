---
title: USB 2.0 Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for USB 2.0.
---

# USB 2.0 Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux USB 2.0 Development Guide
- Version: 2.7
- Release date: 2026-01-30
## Scope

Includes T527 Linux 5.15/6.6 and covers Host, Device, OTG, Gadget, Type-C, PHY, eye-diagram testing, and common failures.

## Capabilities

- EHCI/OHCI Host, UDC Device, and OTG manager
- VBUS, ID, Type-C/CC detection, and role switching
- ConfigFS Gadget and composite functions
- debugfs, usbmon, registers, eye diagrams, and drive-strength tuning

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
