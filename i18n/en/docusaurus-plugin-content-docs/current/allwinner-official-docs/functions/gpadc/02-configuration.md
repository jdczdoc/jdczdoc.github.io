---
title: GPADC Configuration
sidebar_position: 2
description: Hardware checks, kernel configuration, Device Tree, build, and DTB validation for GPADC.
---

# GPADC Configuration

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

- Enable the corresponding controller in Allwinner BSP > Device Drivers > GPADC Drivers
- INPUT_EVDEV (required for keypad mode)
- DEBUG_FS (recommended to enable when using debug nodes)

Save the configuration:

```bash
./build.sh saveconfig
# Verify which target defconfig changed
git diff -- device bsp
```

## 4. Device Tree example

The following is a reference structure. Do not duplicate or override SoC-level `reg`, `interrupts`, `clocks`, or `resets` unless an erratum or an official patch requires it.

```dts
gpadc0: gpadc0@2009000 {
        compatible = "allwinner,sunxi-gpadc";
        reg = <0x0 0x02009000 0x0 0x400>;
        interrupts = <GIC_SPI 61 IRQ_TYPE_LEVEL_HIGH>;
        clocks = <&ccu CLK_BUS_GPADC0>;
        clock-names = "bus";
        resets = <&ccu RST_BUS_GPADC0>;
        status = "disabled";
};

&gpadc0 {
        channel_num = <10>;          /* in reality SoC Subject to supported quantity */
        channel_select = <0x3>;      /* choose channel0 and channel1 */
        channel_data_select = <0x3>;
        channel_compare_select = <0x3>;
        channel_cld_select = <0x3>;
        channel_chd_select = <0x3>;
        status = "okay";
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
