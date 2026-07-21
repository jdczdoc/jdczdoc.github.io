---
title: TWI / I2C Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for TWI / I2C.
---

# TWI / I2C Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux TWI / I2C Development Guide
- Version: 1.3
- Release date: 2023-11-17
## Scope

The source guide mainly covers Linux 4.9/5.4. For T527 Linux 5.15, confirm node names, Kconfig symbols, and DMA properties in the current BSP. This guide provides a migration and validation workflow.

## Capabilities

- I2C/TWI master and slave modes
- engine/drv transfer modes, DMA, and bus frequency
- Kernel I2C core and `/dev/i2c-*` interfaces
- i2c-tools and controller debug nodes

## Typical source paths

```text
bsp/drivers/i2c/ or kernel/linux-5.15/drivers/i2c/busses/
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
