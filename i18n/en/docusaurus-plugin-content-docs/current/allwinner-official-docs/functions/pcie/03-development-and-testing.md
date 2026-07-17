---
title: PCIe Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for PCIe.
---

# PCIe Development and Testing

## T527 quick validation

```bash
dmesg | grep -Ei 'pcie|combophy|link'
lspci
lspci -vv
```

T527 is expected to expose PCIe 2.1 RC x1. `lspci` should show the root bridge and then the downstream endpoint. If only the bridge appears, inspect PERST#, REFCLK, supplies, and link training.

## NVMe SSD

```bash
ls /dev/nvme*
nvme list
fdisk -l /dev/nvme0n1
```

Enable the NVMe block driver. The supply must handle SSD startup current; an undersized rail causes repeated enumeration or I/O errors.

## PCIe Ethernet

Identify the endpoint VID/PID and enable its driver; Realtek devices commonly use `r8169`. If enumeration succeeds but no network interface appears, inspect the endpoint driver and firmware requirements.

## IDs and modes

The RC/EP compatible and driver version must match. The T527 scope is RC; do not copy DM-mode configuration from MR536, T536, or A733 without checking the hardware and driver.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
