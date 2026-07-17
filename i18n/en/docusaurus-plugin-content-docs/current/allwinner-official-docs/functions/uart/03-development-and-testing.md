---
title: UART / RS485 Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for UART / RS485.
---

# UART / RS485 Development and Testing

## Confirm the active driver

```bash
grep -Rni 'CONFIG_AW_UART_NG\|CONFIG_AW_UART=' device bsp
grep -Rni 'compatible = "allwinner,.*uart' bsp/configs device/config
dmesg | grep -i uart
```

The two implementations do not use exactly the same DTS properties or debug nodes; do not mix their configuration.

## Port setup and loopback

```bash
stty -F /dev/ttyS7 115200 cs8 -cstopb -parenb -ixon -ixoff raw -echo
cat /dev/ttyS7 &
echo 'uart-test' > /dev/ttyS7
```

Short TX to RX for a hardware loopback. RS485 requires an external transceiver and validation of DE/RE direction timing.

## Special baud rates

Let the serial core calculate the divisor for normal baud rates. Change the UART APB source/frequency only when the resulting error is outside the permitted range.

```text
Actual baud = UART input clock / (oversampling factor × divisor)
Error = |actual - target| / target
```

For a console, keep U-Boot `baudrate`, the kernel `console=ttySx,baud` argument, and userspace terminal settings consistent, otherwise one boot stage will be garbled.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
