---
sidebar_position: 19
title: System modules
description: x881 System modules
---

# System modules

## Accounts and debug permissions

Configure ADB public-key authentication and serial login passwords for production. Enable ADB authentication in Tina and BusyBox login/passwd, set the root password and rebuild to verify access.

## BOOT0, U-Boot and UART

```text
mboot0
printenv
# Inspect UART settings in the active bootloader configuration
CONFIG_SPECIFY_CONSOLE_INDEX
CONFIG_CONS_INDEX
CONFIG_BAUDRATE
```

BOOT0 selects UART, storage and logging through board sys_config.fex; baud macros can be UART_BAUD or CFG_UART_BAUD_1500000. Use the actual U-Boot version under brandy/, and coordinate Linux console/earlyprintk with the RTOS debug UART.

## GPIO, I2C, SPI, PWM and ADC

Configure active/sleep muxing, pulls and drive strength through pinctrl. Derive Linux GPIO numbering from the device tree; package coordinates in connector tables are not GPIO numbers. TWI serves sensors/touch, PWM backlight/drivers and GPADC keys/analog sampling.

## Networking and low power

X881 connects through onboard wireless; wifimanager, softap manager and hostapd manage supported modes. EMAC is a generic SDK module and does not imply an RJ45 port on this board.

```bash
ip addr
ifconfig
route
udhcpc -i wlan0
```

PMC/Standby involves the Linux APP domain, RTOS MCU domain, pwrctrl and shared resources. Save/disable peripherals before suspend, verify wake sources and measure battery current. SID identifies the chip and HWSPINLOCK coordinates cross-core resources.
