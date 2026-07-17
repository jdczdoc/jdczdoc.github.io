---
title: TWI / I2C 开发与测试
sidebar_position: 3
description: TWI / I2C 的接口使用、板端命令和功能验证。
---

# TWI / I2C 开发与测试

## 先确认 T527 实际总线编号

```bash
find bsp device kernel -type f \( -name '*.dts' -o -name '*.dtsi' \) -print0   | xargs -0 grep -n 'twi0:\|i2c@'
grep -Rni 'CONFIG_.*TWI\|CONFIG_.*I2C' bsp device kernel
```

板端检查：

```bash
i2cdetect -l
i2cdetect -y 0
i2cget -y 0 0x50 0x00
i2cset -y 0 0x50 0x00 0x12
i2cdump -y 0 0x50
i2ctransfer -y 0 w1@0x50 0x00 r1
```

`i2cdetect` 扫描可能改变某些器件状态，电源管理芯片、摄像头、触摸等设备应先确认是否允许扫描。

## 用户态接口

启用 I2C device interface 后，可通过 `open()`、`ioctl(I2C_SLAVE_FORCE)`、`read()`、`write()` 访问 `/dev/i2c-X`。复杂的重复起始传输优先使用 `I2C_RDWR` 或 `i2ctransfer`，避免用分离的 write/read 破坏时序。

## slave 模式

slave 模式除了控制器驱动，还需要 slave client 驱动和相应 DTS 子节点。验证时使用另一控制器或外部主机发送数据，并同时观察从机中断、接收缓冲和 ACK。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
