---
title: UART / RS485 Overview
sidebar_position: 1
description: Functions, scope, source layout, and reading order for UART / RS485.
---

# UART / RS485 Overview
This page defines module boundaries and platform differences. Configuration examples use T527 and Linux 5.15 as the primary reference, but final properties, paths, and symbols must be confirmed in the active SDK branch.
## Source basis
- Source guide: Linux UART / RS485 Development Guide
- Version: 2.4
- Release date: 2025-12-31
## Scope

Covers both AW_UART and AW_UART_NG, normal/special baud rates, DMA, RS485, and console configuration.

## Capabilities

- AW_UART versus AW_UART_NG identification
- Normal and special baud rates with APB-clock configuration
- DMA, hardware flow control, and software RS485 direction control
- termios, loopback, bit-error rate, and console diagnostics

## Typical source paths

```text
bsp/drivers/uart/
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
