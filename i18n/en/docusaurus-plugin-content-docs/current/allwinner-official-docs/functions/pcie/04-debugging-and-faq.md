---
title: PCIe Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for PCIe.
---

# PCIe Diagnostics and FAQ

- Link training fails: check supplies, PERST# timing, REFCLK, TX/RX pairs, polarity/lane mapping, ComboPHY selection, and link speed in that order.
- Gen2 is unstable: temporarily set `max-link-speed = <1>` to test Gen1. Stable Gen1 often points to signal-integrity or equalization issues.
- An NVMe drive disappears after enumeration: inspect 3.3 V peak current, temperature, ASPM, and I/O errors.
- PCIe traffic causes display corruption: isolate speed, IOMMU/bandwidth/QoS, and workload effects; successful probe alone does not prove system-level stability.
- U-Boot parameters are useful for temporary diagnosis; once verified, make the final setting in DTS or the driver configuration.

```bash
lspci -vv
lspci -nn
cat /proc/interrupts | grep -i pcie
dmesg | grep -Ei 'pcie|aer|nvme|link down'
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
