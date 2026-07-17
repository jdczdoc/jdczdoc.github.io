---
title: USB 2.0 Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for USB 2.0.
---

# USB 2.0 Diagnostics and FAQ

- No reaction after insertion: inspect VBUS, the power switch, D+/D-, node status, and Host-controller probe.
- Repeated reconnects: inspect supply droop, cable, connector, PHY parameters, and signal integrity.
- A high-speed device falls back to full-speed: inspect PHY, clocks, and routing. USB 2.0 high-speed still uses only D+/D-; SuperSpeed pairs belong to USB 3.x.
- The PC cannot detect Device mode: inspect UDC binding, descriptors, gadget functions, and `sys.usb.config`.
- A device disappears after suspend/resume: inspect wakeup properties, VBUS restore timing, and runtime PM.

```bash
dmesg | grep -Ei 'usb|ehci|ohci|udc|gadget|extcon'
cat /sys/kernel/debug/usb/devices
cat /sys/class/udc/*/state 2>/dev/null
```
## General diagnostic order

1. Schematic and power.
2. Node and pinctrl in the final DTB.
3. Final `.config` and modules.
4. Probe, clock, reset, and IRQ logs.
5. Device node and sysfs/debugfs.
6. Minimal functional test.
7. Stress, suspend, and abnormal hot-plug tests.

Do not treat the removal of an error log as a fix. Find the first failure and validate its upstream and downstream dependencies.
