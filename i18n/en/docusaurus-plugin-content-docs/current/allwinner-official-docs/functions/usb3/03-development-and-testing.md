---
title: USB 3.0 Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for USB 3.0.
---

# USB 3.0 Development and Testing

## Host and Device validation

```bash
lsusb -t
dmesg | grep -Ei 'xhci|dwc3|superspeed|gen2'
cat /sys/kernel/debug/usb/devices
```

A SuperSpeed device should show `5000M` in `lsusb -t`; Gen2/SSP platforms may report a higher rate. If it shows only `480M`, the U2 path works but the U3 link did not train.

## Type-C / DRD

Complete DRD operation requires a CC/PD controller, orientation mux, USB role switch, VBUS control, and synchronized DWC3 mode. HUSB311 plus PS8743 is only one reference design; other CC logic or mux devices require their matching drivers.

## ComboPHY conflict

On some T527 designs, PCIe and USB3 share a ComboPHY. When `phy_use_sel` selects USB3, PCIe cannot use the PHY simultaneously; when PCIe is selected, disable the USB3 nodes. Confirm the actual sharing in the schematic and SoC specification.

## Performance

Record enumeration speed, filesystem, block size, cache behavior, CPU load, and transfer direction when testing a USB drive or SSD. Gadget performance also depends on the selected function and the host PC driver.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
