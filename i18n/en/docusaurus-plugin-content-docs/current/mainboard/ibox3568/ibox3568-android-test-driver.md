---
sidebar_position: 8
title: Android Test and Driver
description: iboibox3568 Android test applications, driver entry points, and common proc queries
---

# Android Test and Driver

:::note
This page reuses the previously prepared X3568 software documentation template. For ibox3568, actual source package names, image names, partition files, tool versions, and board-level configuration should follow the current ibox3568 SDK and release package.
:::

This page keeps the content useful for hardware verification and driver debugging, and removes unrelated product lists and RKDocs catalog content.

## Android Test Applications

The original manual notes that the iboibox3568 Android test application had not been fully ported at that time, and many test-item descriptions were inherited from platforms such as X3288, X3399, X30, and X3399Pro. The actually available tests depend on the test APK integrated in the current firmware.

### LCD Test

Tap the solid-color area to switch colors. This is used to check whether the LCD has missing colors, dead pixels, or other display issues.

### Touchscreen Test

After starting the test, draw on the screen. In production, diagonal-line drawing is commonly used to verify the touch circuit.

### LED / Buzzer / Backlight Test

- LED test: tap the lamp icon; red means on and gray means off;
- Buzzer test: press and hold to start buzzing, and release to stop;
- Backlight test: drag the slider and check whether the backlight brightness changes accordingly.

### Key Test

Press or release the independent keys on the board. The UI should show the corresponding key press and release actions.

### ADC / G-sensor Test

The ADC test monitors voltage-channel changes. The G-sensor test observes X, Y, and Z axis data as the board orientation changes.

### Audio / Camera Test

The audio test verifies speaker or headset output. The Camera test verifies Camera preview and capture.

### Wi-Fi / Wired Network / UART / Storage Test

- Wi-Fi test scans nearby networks;
- Network connection test verifies wired or wireless connectivity;
- For UART loopback testing, short TXD and RXD and verify self-send/self-receive;
- TF card and USB disk tests verify external storage detection.

## Android Kernel Drivers

Common driver-debug directions include G-sensor, capacitive touchscreen, LCD, keys, Wi-Fi/BT module, and proc filesystem. Driver paths and configuration should follow the current SDK.

## Common proc Queries

```bash
cat /proc/cpuinfo
cat /proc/meminfo
cat /proc/partitions
cat /proc/version
cat /proc/net/dev
cat /proc/kmsg
```

## Android Project Practice

### Modify init.rc

Modify `init.rc` under `system/core/rootdir`, then run:

```bash
./mk.sh -s
```

Regenerate and flash `system.img`. If the change does not take effect, delete the old `init.rc` in the `out` directory and build again.

### Modify Boot Animation

Android boot animation can be customized. The specific file path and packaging method depend on the current Android11 SDK.

### Modify U-Boot / Kernel LOGO

U-Boot reads `logo.bmp` and `logo_kernel.bmp` from the kernel directory. `logo.bmp` is used for the U-Boot logo, while `logo_kernel.bmp` is used for the kernel logo. The image format and size must meet the U-Boot display requirements.

### Configure a MIPI Display

Display configuration files are located at:

```text
kernel/arch/arm64/boot/dts/rockchip
```

Example configuration file for a 7-inch MIPI display:

```text
lcd-dsi0-mipi1024x600-WY070ML.dtsi
```

Select the required LCD module in `rk3568-evb1-ddr4-v10.dtsi`.

### Power-off Charging and Low-voltage Pre-charge

The U-Boot charging node can be configured as follows:

```dts
charge-animation {
    compatible = "rockchip,U-Boot-charge";
    rockchip,U-Boot-charge-on = <1>;
    rockchip,Android-charge-on = <0>;
    rockchip,U-Boot-low-power-voltage = <3400>;
    rockchip,screen-on-voltage = <3500>;
    status = "okay";
};
```

The low-voltage pre-charge and screen-on voltage values can be adjusted according to product requirements.

### Android Surface Rotation

Surface Flinger rotation can be set to 0 / 90 / 180 / 270:

```makefile
SF_PRIMARY_DISPLAY_ORIENTATION ?= 0
```
