---
title: PCIe Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for PCIe.
---

# PCIe Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux PCIe Development Guide
- Version: 1.8
- Release date: 2025-11-05
## Scope

T527 Linux 5.15 uses the v210 driver, PCIe 2.1 RC x1, and an INNO PHY. Other platforms may provide DM/EP modes and different PHY vendors.

## Capabilities

- RC/EP/DM modes and PHY-vendor differences
- PCIe node, ComboPHY, reset/wake, and supplies
- NVMe SSD and PCIe Ethernet applications
- lspci, link training, logs, and hardware diagnostics

## Typical source paths

```text
bsp/drivers/pcie/
bsp/drivers/phy/
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
