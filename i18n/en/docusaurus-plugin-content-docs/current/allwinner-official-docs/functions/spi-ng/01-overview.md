---
title: SPI-NG Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for SPI-NG.
---

# SPI-NG Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux SPI-NG Development Guide
- Version: 2.2
- Release date: 2025-12-26
## Scope

T527 Linux 5.15 is listed as supported. The refactored driver is named SPI-NG, while the legacy driver may still exist; identify the active implementation first.

## Capabilities

- Master/slave, CPU/DMA, and multiple chip selects
- Single/Dual/Quad, Flash, DBI, BIT, and Camera modes
- Linux SPI core, spidev, and device drivers
- FIFO, register, sampling-calibration, and dynamic debug nodes

## Typical source paths

```text
bsp/drivers/spi-ng/ or bsp/drivers/spi/
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
