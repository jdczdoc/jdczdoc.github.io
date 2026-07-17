---
title: SPI-NG 开发与测试
sidebar_position: 3
description: SPI-NG 的接口使用、板端命令和功能验证。
---

# SPI-NG 开发与测试

## 识别新旧驱动

```bash
grep -Rni 'compatible = "allwinner,.*spi' bsp/configs device/config
grep -Rni 'CONFIG_AW_SPI_NG\|CONFIG_AW_SPI=' device bsp
```

常见判断：旧驱动 `compatible` 类似 `allwinner,sunXXi-spi`，新驱动类似 `allwinner,sunxi-spi-v1.3`；旧宏为 `CONFIG_AW_SPI`，新宏为 `CONFIG_AW_SPI_NG`。

## Master / spidev 测试

```bash
ls -l /dev/spidev*
spidev_test -D /dev/spidev0.0 -s 1000000 -p '12345678'
```

测试前短接 MOSI 与 MISO 可做回环。必须确认模式、位宽、片选、电压域和最大频率与外设一致。

## 特殊模式

- Slave：需要 slave 测试驱动，重点验证短包 CPU 传输和大包 DMA 传输。
- Flash：使用 `spi-nor` 或 `spi-nand` 子节点，不应同时挂普通 spidev。
- DBI：用于显示传输，启用后同一控制器的普通 Master/Slave/Flash 功能不可并用。
- BIT：用于 3-wire/可编程帧长，通常不支持 DMA/FIFO。
- Camera：SoC 作为从机接收模组数据，需要 VSYNC/FRAMEHEAD/IDLEWAIT 等帧检测配置。

## 驱动接口

内核设备驱动通过 `spi_register_driver()` 注册，数据传输使用 `spi_message_init()`、`spi_message_add_tail()`、`spi_sync()` 或 `spi_async()`。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
