---
title: PCIe Configuration
sidebar_position: 2
description: Hardware checks, kernel configuration, Device Tree, build, and DTB validation for PCIe.
---

# PCIe Configuration

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

- CONFIG_AW_INNO_COMBOPHY（T527）
- `CONFIG_AW_PCIE_RC`
- `CONFIG_PCIEAER`
- `CONFIG_PCIE_ECRC`
- CONFIG_BLK_DEV_NVME / CONFIG_NVME_MULTIPATH（NVMe）
- CONFIG_R8169（常见 PCIe 网卡示例）

Save the configuration:

```bash
./build.sh saveconfig
# Verify which target defconfig changed
git diff -- device bsp
```

## 4. Device Tree example

The following is a reference structure. Do not duplicate or override SoC-level `reg`, `interrupts`, `clocks`, or `resets` unless an erratum or an official patch requires it.

```dts
&pcie {
        reset-gpios = <&pio PI 10 GPIO_ACTIVE_HIGH>;
        wake-gpios = <&pio PI 11 GPIO_ACTIVE_HIGH>;
        pcie1v8-supply = <&reg_cldo1>;
        pcie3v3-supply = <&reg_cldo3>;
        max-link-speed = <2>;       /* Gen2 */
        status = "okay";
};

&combophy {
        resets = <&ccu RST_BUS_PCIE_USB3>;
        phy_use_sel = <0>;          /* 0: PCIe, 1: USB3 */
        status = "okay";
};

/* 共用 PHY 时关闭 USB3 */
&usbc2 { status = "disabled"; };
&xhci2 { status = "disabled"; };
&u2phy { status = "disabled"; };
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
