---
title: RTC Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for RTC.
---

# RTC Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux RTC Development Guide
- Version: 1.11
- Release date: 2025-11-07
## Scope

Applies to independent-BSP kernels from Linux 5.4/5.4-ansc onward, covering internal RTC types, time interfaces, and common failures.

## Capabilities

- Type A / Type B RTC hardware differences
- RTC class, character device, and ioctl
- System-time and hardware-clock synchronization
- Clock drift, stopped clock, and backup-power issues

## Typical source paths

```text
bsp/drivers/rtc/
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
