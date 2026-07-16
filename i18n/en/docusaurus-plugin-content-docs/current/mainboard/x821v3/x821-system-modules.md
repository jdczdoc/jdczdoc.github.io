---
title: Common System Modules
sidebar_position: 15
description: "V821 login, boot, UART, GPIO, networking, analog peripherals, and low power"
---

# Common System Modules

## Login and Security

- ADB permissions are controlled by Tina packages and startup scripts.
- Serial login passwords are managed through OpenWrt users and `/etc/shadow`.
- Root login may be opened during development, but production images should disable empty passwords, debug ADB, and unnecessary network services.

## BOOT0 and U-Boot

BOOT0 initializes DRAM and storage and loads heterogeneous images. U-Boot loads the kernel, device tree, and resources. Changes to the boot chain commonly span:

```text
sys_config.fex
boot_package*.fex
uboot-board.dts
env.cfg
sys_partition*.fex
```

## UART, GPIO, and Pinctrl

Both the peripheral node and its pinctrl group must be enabled. A pin can only serve one function in a given boot stage. For UART, SDC, PWM, or SPI conflicts, confirm the actual schematic connection before disabling the conflicting controller.

## Networking

### EMAC

Suggested checks:

```bash
ip link
ip addr
ethtool eth0
dmesg | grep -Ei 'emac|phy|mdio'
```

The V821 integrates the MAC. An external PHY still requires correct clocking, reset, MDIO address, RGMII/RMII mode, and power rails.

### Wi-Fi

The board uses 2.4GHz 1T1R Wi-Fi. Check firmware, NVRAM/calibration data, country code, antenna, and the network-management process. The hardware manual does not claim dual-band support.

## Analog and Peripheral Modules

- GPADC for resistor-ladder keys and analog sampling.
- PWM for backlight, LEDs, and waveform output.
- SPI/SPI NOR may share resources with the boot flash; confirm chip-select and bus ownership before changes.
- TWI/I2C for sensors, touch, and power-management peripherals.

## Low Power

PMC/standby configuration spans clocks, power domains, wake sources, and RTOS cooperation. Record pre-suspend state, wake source, interrupt counters, power consumption, rails, and resume logs. SID provides a chip-unique ID, and HWSPINLOCK supports inter-core resource synchronization.
