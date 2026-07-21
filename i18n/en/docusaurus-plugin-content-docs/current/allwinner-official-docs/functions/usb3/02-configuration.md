---
title: USB 3.0 Configuration
sidebar_position: 2
description: Hardware checks, kernel configuration, Device Tree, build, and DTB validation for USB 3.0.
---

# USB 3.0 Configuration

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

- `CONFIG_USB_SUPPORT`
- `CONFIG_USB_XHCI_HCD`
- `CONFIG_USB_DWC3`
- `CONFIG_USB_SUNXI_DWC3`
- `CONFIG_PHY_SUNXI_PLAT`
- CONFIG_USB_SUNXI_PHY / CONFIG_USB_SUNXI_AWPHY (platform dependent)
- `CONFIG_DWC3_SUNXI_PLAT`
- CONFIG_USB_SUNXI_TYPEC / CONFIG_TYPEC_HUSB311 / CONFIG_TYPEC_MUX_PS8743 (required for external solutions)

Save the configuration:

```bash
./build.sh saveconfig
# Verify which target defconfig changed
git diff -- device bsp
```

## 4. Device Tree example

The following is a reference structure. Do not duplicate or override SoC-level `reg`, `interrupts`, `clocks`, or `resets` unless an erratum or an official patch requires it.

```dts
&usbc2 {
        status = "okay";
};

&xhci2 {
        dr_mode = "otg";                 /* host / peripheral / otg */
        maximum-speed = "super-speed-plus";
        phys = <&u2phy>, <&combophy>;
        phy-names = "usb2-phy", "usb3-phy";
        status = "okay";
};

&combophy {
        phy_use_sel = <1>;                /* 0: PCIe, 1: USB3；Based on the current driver definition */
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
