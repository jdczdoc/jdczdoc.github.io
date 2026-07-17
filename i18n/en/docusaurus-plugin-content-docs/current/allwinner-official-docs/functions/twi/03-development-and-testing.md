---
title: TWI / I2C Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for TWI / I2C.
---

# TWI / I2C Development and Testing

## Confirm the actual T527 bus numbering first

```bash
find bsp device kernel -type f \( -name '*.dts' -o -name '*.dtsi' \) -print0   | xargs -0 grep -n 'twi0:\|i2c@'
grep -Rni 'CONFIG_.*TWI\|CONFIG_.*I2C' bsp device kernel
```

Target checks:

```bash
i2cdetect -l
i2cdetect -y 0
i2cget -y 0 0x50 0x00
i2cset -y 0 0x50 0x00 0x12
i2cdump -y 0 0x50
i2ctransfer -y 0 w1@0x50 0x00 r1
```

An `i2cdetect` scan can change device state. Confirm that PMIC, camera, touch, and other sensitive devices can be scanned safely.

## Userspace interface

With the I2C device interface enabled, access `/dev/i2c-X` through `open()`, `ioctl(I2C_SLAVE_FORCE)`, `read()`, and `write()`. Use `I2C_RDWR` or `i2ctransfer` for repeated-start transactions; separate write/read calls can break the required bus sequence.

## Slave mode

Slave mode requires both the controller support and a slave client driver with the matching DTS child node. Validate it with another controller or an external master while observing interrupts, receive buffers, and ACK behavior.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
