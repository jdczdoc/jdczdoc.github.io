---
title: USB 3.0 Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for USB 3.0.
---

# USB 3.0 Diagnostics and FAQ

- U2 works but U3 does not: inspect SuperSpeed TX/RX pairs, orientation mux, ComboPHY selection, reference clock, and equalization.
- `dwc3_sunxi_plat` fails to load: inspect DWC3, PHY, reset, clock, power domain, and parent/child node status.
- xHCI registration fails: inspect resource conflicts, PHY readiness, and `dr_mode`.
- ADB or Mass Storage is not SuperSpeed: inspect Gadget descriptors, `maximum-speed`, and whether the selected function supports SuperSpeed.
- MTP stalls or throughput is low: inspect link speed, filesystem, PC driver, and CPU/memory bottlenecks.

```bash
dmesg | grep -Ei 'dwc3|xhci|typec|combophy|superspeed'
find /sys/kernel/debug -iname '*dwc3*' -o -iname '*xhci*'
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
