---
title: SDK Configuration
sidebar_label: SDK Configuration
sidebar_position: 4
description: Kconfig, Device Tree, partition, env.cfg, sys_config.fex, and root filesystem.
---

# SDK Configuration

Typical configuration commands:

```bash
m menuconfig
m kernel_menuconfig
m rtos_menuconfig
```

Board configuration is normally under:

```text
device/config/chips/v821/configs/<board>/
```

SoC-level DTSI and BSP settings are under:

```text
bsp/configs/linux-5.4-ansc/
```

Validate the final DTB:

```bash
dtc -I dtb -O dts -o final.dts <board>.dtb
```

Partition example:

```ini
[partition]
name         = boot-resource
size         = 1024
downloadfile = "boot-resource.fex"
user_type    = 0x8000
```

UART settings may be stored in `sys_config.fex`:

```ini
[uart_para]
uart_debug_port = 0
uart_debug_tx = port:PD22<3><1><default><default>
uart_debug_rx = port:PD23<3><1><default><default>
```
