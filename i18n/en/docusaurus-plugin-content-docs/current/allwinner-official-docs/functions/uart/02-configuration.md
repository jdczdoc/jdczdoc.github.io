---
title: UART / RS485 Configuration
sidebar_position: 2
description: Hardware checks, kernel configuration, Device Tree, build, and DTB validation for UART / RS485.
---

# UART / RS485 Configuration

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

- CONFIG_AW_UART 或 CONFIG_AW_UART_NG（二选一，以平台为准）
- CONFIG_AW_SERIAL_DMA（DMA）
- CONFIG_DYNAMIC_DEBUG（动态调试）
- `SERIAL_CORE / TTY`

Save the configuration:

```bash
./build.sh saveconfig
# Verify which target defconfig changed
git diff -- device bsp
```

## 4. Device Tree example

The following is a reference structure. Do not duplicate or override SoC-level `reg`, `interrupts`, `clocks`, or `resets` unless an erratum or an official patch requires it.

```dts
&uart7 {
        pinctrl-names = "default", "sleep";
        pinctrl-0 = <&uart7_pins_a>;
        pinctrl-1 = <&uart7_pins_b>;
        uart7_port = <7>;
        uart7_type = <4>;       /* 具体含义查当前驱动 */
        status = "okay";
};

/* 软件控制 RS485 方向的属性名称因驱动版本而异 */
&uart7 {
        sunxi,uart-rs485 = <1>;
        sunxi,uart-485fl = <1>;
        sunxi,uart-485oe-gpios = <&pio PI 14 GPIO_ACTIVE_HIGH>;
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
