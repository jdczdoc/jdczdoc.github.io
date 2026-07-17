---
title: USB 2.0 Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for USB 2.0.
---

# USB 2.0 Development and Testing

## Host validation

```bash
dmesg -w
lsusb -t
cat /sys/kernel/debug/usb/devices
mount | grep -E 'sd[a-z]|usb'
```

`lsusb -t` shows whether a device runs at 1.5M, 12M, or 480M. When a high-speed device falls back to full-speed, inspect D+/D- routing, PHY configuration, power, and cable quality first.

## Device / Gadget

With UDC and ConfigFS enabled, functions such as ADB, MTP, Mass Storage, RNDIS, ACM, HID, UAC, and UVC can be combined. Android usually manages the gadget through init/vendor scripts; do not manually create a duplicate gadget while those services are active.

```bash
ls /sys/class/udc
ls /config/usb_gadget 2>/dev/null
getprop sys.usb.config
setprop sys.usb.config adb
```

## OTG

OTG depends on controller mode, ID/VBUS or Type-C detection, VBUS power, and the role-switch state machine. Changing only `dr_mode` or `usb_port_type` is normally insufficient for a complete hardware role switch.

## Performance tests

For Mass Storage, distinguish cache effects from real media performance by using `sync`, sufficiently large files, and both read and write tests. Test RNDIS/NCM throughput with `iperf3` while monitoring CPU load.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
