---
sidebar_position: 2
title: 硬件架构与电源时序
description: X311Y3CV1 硬件架构与电源时序
---

# 硬件架构与电源时序

## 2.1 电源架构

核心板采用“12V 输入 + 板内离散 DCDC”的供电架构，不使用 PMIC。底板向核心板提供12V_STANDBY 与 12V_CORE 两路 12V，以及 VDD3V3_AO、VDD1V8_AO、AVDD1V8、AVDD3V1、`VDDIO_*`等IO/模拟电源；核心板板内DCDC只给SoC、LPDDR5X、eMMC等内部负载供电，不向底板输出任何电源。

:::caution

表2-3列出主要电源域及其来源。底板设计时，应把核心板电源引脚全部按“输入/参考/去耦”处理，不能把VDD3V3_AO、VDD1V8_AO、`AVDD*`、`VDDIO*`当作底板外设的供电来源；防止电源影响核心板正常工作，屏背光、摄像头、USBVBUS、PCIe、SD、Codec等电源须在底板上独立产生。

:::

**表2-3 核心板主要电源域**

| 电源域 | 典型值 | 来源/方向 | 主要负载 | 设计注意 |
| --- | --- | --- | --- | --- |
| 12V_STANDBY | 12V | 底板→核心板 | 常开域、板内待机DCDC | 先建立；电流按峰值留3A余量 |
| 12V_CORE | 12V | 底板→核心板 | CPU/GPU/NPU/DDR等核心DCDC | 后建立；与STANDBY同时满足 |
| VDD3V3_AO | 3.3V | 底板→核心板 | AO/IO参考、接口电平 | 低纹波；不得作为底板外设电源 |
| VDD1V8_AO | 1.8V | 底板→核心板 | AO/IO参考、接口电平 | 低纹波；不得作为底板外设电源 |
| AVDD1V8/AVDD18_* | 1.8V | 底板→核心板 | CSI/DSI/USB/PCIe/HDMIeARC模拟IO | 低噪声；按接口就近去耦 |
| AVDD3V1/AVDD3V_* | 3.1V | 底板→核心板 | HDMITX/RX、USBCC模拟 | 低噪声；HDMI连接器侧加ESD |
| VDDIO_3V3 | 3.3V | 底板→核心板 | GPIO/I2C/UART等3.3VIO | 与底板外设电平匹配 |
| VDDIO_A/B/C/D/H/M/X/Y/Z | A/H/Y/D3.1V；B/M/X/Z1.8V；C3.3V | 核心板LDO/PMOS | 各接口IO电源域 | 按接口域配置，不可混接；A/Y可选1.8V |

## 2.2 上电时序

核心板上电按“12V先建立、IO/模拟电源后建立、复位最后释放”的顺序。这里只给出与核心板引出引脚有关的时序，不展开板内 DCDC 的软启动细节；具体电气参数以原理图 Sheet 2 的PowerSequence为准。

上电顺序：① 底板建立 12V_STANDBY 并保持稳定；② 建立 12V_CORE；③ 底板建立VDD3V3_AO、VDD1V8_AO、AVDD1V8、AVDD3V1与各`VDDIO_*`。

:::caution

掉电顺序相反：先把 RESET_N 拉低，再关闭 PWR_CTL1/2 与底板 DCDC，随后关闭12V_CORE、12V_STANDBY。底板上的大容量电容和外部3.3V/1.8V电源应设计放电回路或防倒灌二极管，避免 IO 倒灌。PWR_CTL1/2 只是控制信号，不是电源输出，不能用来给底板负载供电。

:::

**表2-4 核心板电源与时序相关引脚**

| 引脚编号 | 信号 | 方向 | 时序/设计要点 |
| --- | --- | --- | --- |
| A92 | VCC_VIN_STANDBY | 输入 | 12V常开输入，先建立 |
| A93/A94/A95/A96 | VCC_VIN | 输入 | 12V核心输入，后建立 |
| A33/A34 | VDD3V3_AO | 输入 | 3.3VAO/IO，底板提供 |
| A97/A6 | VDD1V8_AO | 输入 | 1.8VAO/IO，底板提供 |
| A98 | AVDD1V8 | 输入 | 模拟1.8V，底板提供 |
| B25 | AVDD3V1 | 输入 | HDMI/USB3.1V，底板提供 |
| A37 | VDDIO_3V3 | 输入 | 3.3VIO，底板提供 |
| A208 | RESET_N | 输入 | 低有效；所有电源稳定后释放，≥40ms |
| A11 | PWR_KEY | 输入 | 开机/唤醒，低有效 |
| A8 | PWR_CTL2 | 输出 | 底板DCDC使能控制，仅逻辑信号 |
| A100~A104 | PMIC_GPIO* | NC | 无PMIC，未连接 |

## 2.3 调试接口

核心板引出 1路 3.3V调试 UART（UART0），用于 U-Boot、内核与文件系统日志。调试座建议采用 4-pin2.54mm 排针或 1.25mm座，引脚顺序为3V3、TX、RX、GND；PC侧使用 USB转TTL工具，注意TX/RX交叉连接。

调试串口默认参数通常为 115200-8-N-1，具体以固件配置为准。若上电无输出，应按“12V→3.3V/1.8V→RESET_N→时钟→启动介质→串口电平”的顺序排查。烧录时通过 Type-COTG配合BOOT键进入下载模式；
