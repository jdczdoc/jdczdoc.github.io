---
title: SDK Framework
sidebar_label: SDK Framework
sidebar_position: 2
description: Main Tina Linux SDK directories and responsibilities.
---

# SDK Framework

```text
SDK/
├── brandy/brandy-2.0/
├── bsp/
├── build/
├── device/config/chips/v821/
├── kernel/linux-5.4-ansc/
├── openwrt/
├── rtos/
└── out/
```

| Directory | Purpose |
| --- | --- |
| `brandy` | Boot0, SPL, U-Boot, and boot tools |
| `bsp` | Allwinner drivers, DTSI files, and headers |
| `device` | Board DTS, partition, environment, and sys_config files |
| `kernel` | Linux kernel source |
| `openwrt` | Tina user space, packages, and root filesystem |
| `rtos` | Auxiliary-core RTOS |
| `out` | Build outputs and firmware |

Initialize the SDK with:

```bash
source build/envsetup.sh
lunch
```
