---
title: 系统资源与快速配置
sidebar_label: 系统资源与快速配置
sidebar_position: 5
description: PICO2内存布局、ramparser、quick_config、存储介质、工具链、CPU频率和串口波特率。
---

# 系统资源与快速配置

## 内存布局

V821 的内存可能同时分配给 Linux、RTOS、媒体内存池、CMA、共享内存和固件保留区。修改内存前应同步检查：

- Linux `memory`/`reserved-memory`
- RTOS 固件和共享内存
- MPP/VIN/ISP 的连续内存
- U-Boot、OpenSBI 或启动参数
- 根文件系统和应用内存峰值

常用检查：

```bash
cat /proc/meminfo
cat /proc/iomem
cat /proc/slabinfo
cat /proc/buddyinfo
cat /proc/zoneinfo
dmesg | grep -iE "memory|cma|reserved"
```

`ramparser` 可用于分析 Slab、Buddy、DMA-BUF、用户空间和水位信息。

![内存分配示意](../images/linux/image80.png)

## Quick Config

`quick_config` 通过 JSON 组合多个配置项，适合切换摄像头、存储介质、调试模式和产品方案。

示例：

```json
{
  "use_common_conifg": true,
  "quick_config_include": [
    "sensor.json",
    "storage_change.json"
  ]
}
```

同名配置项存在覆盖关系，使用前应确认公共配置、板级配置和命令行参数的优先级。

## 更换存储介质

更换 SPI NOR、TF 卡或其他介质时需要同时修改：

```text
Boot0/SPL存储驱动
U-Boot存储驱动
Kernel存储驱动
分区表
rootfs类型
pack配置
```

## 工具链

Linux 大核示例编译参数：

```bash
-mabi=ilp32d -march=rv32imafdcxandes -mcmodel=medlow
```

RTOS 小核常见参数：

```bash
-mtune=e907 -march=rv32imafcxthead -mabi=ilp32f -mcmodel=medlow
```

必须使用 SDK 自带工具链，避免 ABI、扩展指令或 C 库不一致。

## CPU 主频

VF/OPP 表常见位置：

```text
bsp/configs/linux-5.4-ansc/sun300iw1p1-vf.dtsi
```

示例：

```dts
opp@1000000000 {
    opp-hz = /bits/ 64 <1000000000>;
    opp-microvolt-vf0000 = <920000>;
    clock-latency-ns = <244144>;
    status = "okay";
};
```

修改频率时应同时核对电压、晶振频率、Boot 阶段 PLL 和 RTOS 待机代码，完成高低温和压力测试。

## 调试串口波特率

串口波特率可能同时受 Boot0、U-Boot、Kernel 命令行和应用配置影响。修改后应保证各阶段一致，否则启动日志会乱码。
