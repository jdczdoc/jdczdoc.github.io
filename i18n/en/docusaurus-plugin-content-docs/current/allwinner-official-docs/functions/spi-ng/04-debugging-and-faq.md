---
title: SPI-NG Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for SPI-NG.
---

# SPI-NG Diagnostics and FAQ

- Probe succeeds but no waveform appears: verify chip-select index, pinctrl, controller mode, and whether Flash/DBI/Camera mode owns the bus.
- DMA fails: temporarily disable DMA symbols, remove `dma-names`, or force `use_dma=false` to validate CPU transfers first.
- High-frequency errors: lower the clock and inspect sampling mode/delay, routing, load, and voltage domain.
- MISO is always `0xff`: the peripheral may be unpowered, CS may not assert, the mode may be wrong, or MISO may be floating.
- Wrong legacy/new-driver identification: confirm it with compatible, defconfig, and boot logs together.

```bash
dmesg | grep -Ei 'spi|spidev'
find /sys/kernel/debug -iname '*spi*'
cat /sys/kernel/debug/spi*/info 2>/dev/null
cat /sys/kernel/debug/spi*/fifo 2>/dev/null
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
