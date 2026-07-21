---
title: TWI / I2C Configuration
sidebar_position: 2
description: Hardware checks, kernel configuration, Device Tree, build, and DTB validation for TWI / I2C.
---

# TWI / I2C Configuration

## 1. Hardware confirmation

Before editing, record the controller index, pinmux, voltage domain, supplies, reset/enable signals, interrupt, and external device model. For high-speed interfaces, also confirm topology, reference clock, and PHY sharing.

## 2. Locate the active platform configuration

```bash
cd <ANDROID_TOP>/longan
find bsp device kernel -type f \( -name '*.dts' -o -name '*.dtsi' -o -name 'Kconfig' \)   | grep -Ei '<MODULE>|t527|sun55iw3'
grep -Rni '<compatible-or-config-keyword>' bsp device kernel
```

Do not assume that paths in a release guide exactly match the active branch, especially when moving from an older kernel to the Linux 5.15 independent BSP repository.

## 3. Kernel menuconfig

```bash
./build.sh menuconfig
```

Check the following items:

- `I2C support`
- I2C device interface（`/dev/i2c-*`）
- `Allwinner TWI controller`
- TWI slave and slave EEPROM (when slave mode is required)

Save the configuration:

```bash
./build.sh saveconfig
# Verify which target defconfig changed
git diff -- device bsp
```

## 4. Device Tree example

The following is a reference structure. Do not duplicate or override SoC-level `reg`, `interrupts`, `clocks`, or `resets` unless an erratum or an official patch requires it.

```dts
&twi0 {
        clock-frequency = <400000>;
        pinctrl-names = "default", "sleep";
        pinctrl-0 = <&twi0_pins_a>;
        pinctrl-1 = <&twi0_pins_b>;
        /* Older drivers may use twi_drv_used control DMA；5.15 Need to check the current driver */
        status = "okay";

        eeprom@50 {
                compatible = "atmel,24c16";
                reg = <0x50>;
        };
};
```

## 5. Build and artifact validation

```bash
./build.sh kernel 2>&1 | tee /tmp/module-kernel-build.log
./build.sh pack
```

Confirm that the configuration and node reached the final output:

```bash
grep -E '<CONFIG_KEY>' out/*/*/kernel/build/.config 2>/dev/null
find out -type f \( -name '*.dtb' -o -name '*.ko' \) | sort
dtc -I dtb -O dts -o /tmp/final.dts <FINAL_DTB>
grep -n -A30 -B5 '<NODE_OR_COMPATIBLE>' /tmp/final.dts
```

## 6. Change boundaries

- Keep SoC resources and common defaults in `bsp/configs/linux-5.15/*.dtsi`.
- Keep board pins, supplies, reset, child devices, and `status` in the board `board.dts`.
- Never edit generated build output or a mirrored symlink tree directly.
- Evaluate shared changes against every product that includes the common DTSI.
