---
sidebar_position: 11
title: Linux Driver and MIPI
description: Pico PC RK3588S Linux driver queries and MIPI panel configuration
---

# Linux Driver and MIPI

## Linux Kernel Drivers

The Linux manual lists:

- G-sensor driver.
- Capacitive touchscreen driver.
- LCD driver.
- Key driver.
- Wi-Fi/BT module driver.
- Camera driver.
- proc filesystem.

## proc Queries

```bash
cat /proc/cmdline
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
dmesg
```

## Partition Size Query

```bash
cat /proc/partitions
df -h
lsblk
```

## MIPI Panel Configuration

Prepared panel configuration files are located under:

```text
kernel/arch/arm64/boot/dts/rockchip
```

Reference `dsi0` configuration in:

```text
kernel/arch/arm64/boot/dts/rockchip/rk3588s-9tripod-x3588s-evb.dtsi
```

Check:

- Whether `dsi0` is enabled.
- Panel compatible string, initialization sequence, and timing.
- Reset GPIO, enable GPIO, and regulators.
- Backlight node and PWM.
- Touch I2C, INT, RST, and coordinate direction.
- Consistency between U-Boot and kernel panel/logo configuration.
