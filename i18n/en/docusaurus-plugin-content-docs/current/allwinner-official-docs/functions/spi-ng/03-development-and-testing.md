---
title: SPI-NG Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for SPI-NG.
---

# SPI-NG Development and Testing

## Identify the legacy or SPI-NG driver

```bash
grep -Rni 'compatible = "allwinner,.*spi' bsp/configs device/config
grep -Rni 'CONFIG_AW_SPI_NG\|CONFIG_AW_SPI=' device bsp
```

A legacy `compatible` commonly looks like `allwinner,sunXXi-spi`, while SPI-NG commonly uses `allwinner,sunxi-spi-v1.3`. The legacy symbol is `CONFIG_AW_SPI`; the new symbol is `CONFIG_AW_SPI_NG`.

## Master / spidev test

```bash
ls -l /dev/spidev*
spidev_test -D /dev/spidev0.0 -s 1000000 -p '12345678'
```

Short MOSI to MISO for a loopback test. Verify mode, word size, chip select, voltage domain, and maximum frequency against the peripheral specification.

## Special modes

- Slave: enable the slave test driver and validate both short CPU transfers and large DMA transfers.
- Flash: use a `spi-nor` or `spi-nand` child node and do not expose the same chip select as spidev.
- DBI: intended for display transfers; normal Master/Slave/Flash use cannot share the controller while DBI is active.
- BIT: intended for 3-wire or programmable frame length and commonly excludes DMA/FIFO.
- Camera: the SoC receives module data as a slave and requires VSYNC/FRAMEHEAD/IDLEWAIT frame detection.

## Driver interfaces

Register a kernel client with `spi_register_driver()` and transfer data through `spi_message_init()`, `spi_message_add_tail()`, `spi_sync()`, or `spi_async()`.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
