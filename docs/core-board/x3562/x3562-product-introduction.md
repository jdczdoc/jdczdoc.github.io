---
sidebar_position: 1
title: 产品介绍
description: X3562核心板 产品简介、核心板特性和特性参数
---

# 产品介绍

X3562核心板简介

产品简介

X3562CV2是基于瑞芯微RK3562 CPU的一款邮票孔核心板，它由深圳市九鼎创展科技有限公司自主研发，生产并销售。

RK3562是Rockchip新一代 64 位处理器 RK3562（Quad-core ARM Cortex-A53，主频最高 2.0GHz），最大支持 8GB 内存；内置独立的NPU，可用于轻量级人工智能应用，RK3562 拥有 PCIE2.1/USB3.0 OTG/以太网等各类型接口，支持多种视频输入输出接口，拥有丰富的外部接口。

核心板特性

X3562核心板具有以下特性：

最佳尺寸，保证引出全部GPIO口的同时，尺寸仅45mm*45mm；

系统供电使用 PMU，在保证工作稳定可靠的同时，成本足够低廉；

支持多种品牌，多种容量的emmc；

使用LPDDR4x设计，最高支持16GB；

支持电源休眠唤醒；

支持千兆以太网、MIPI-CSI、MIPI-DSI、PCIE、USB3.0等高速总线；

采用208PIN邮票孔封装；

特性参数

### 系统配置

| 项目 | 参数 |
| --- | --- |
| CPU | RK3576 (Quad A72 + Quad A53) |
| 主频 | 1.8GHz |
| RAM | 2GB 或 4GB 或 8GB |
| ROM | 4GB 或 8GB 或 16GB 或 32GB 或 64GB |
| 电源IC | 使用RK809-5A，支持动态调频 |


### 接口参数

| 项目 | 参数 |
| --- | --- |
| LCD接口 | 1路MIPI DSI/LVDS复用接口 |
| 音频接口 | 1路音频输入接口，2路音频输出接口，6路I2S接口，3路SPDIF，2路PDM |
| SDIO接口 | 2路SDIO接口 |
| emmc接口 | 板载EMMC |
| 以太网接口 | 1路RGMII接口 |
| USB HOST2.0接口 | 2路USB2.0接口 |
| USB HOST3.0接口 | 1路USB3.0接口 |
| UART接口 | 16路UART串口 |
| PWM | 31路PWM |
| IIC接口 | 11路I2C接口 |
| Camera接口 | 2路MIPI_CSI接口 |
| PCIE接口 | 1路PCIE2.0接口 |


### 电气特性

| 项目 | 参数 |
| --- | --- |
| 输入电压/电流 | VCC5V0_SYS/3A，VCC3V3_SYS/3A |
| 输出电压/电流 | VCC_RSV1/400mA(3V)，VCC_1V8/2.5A |
| 工作温度 | 0~70度 |
| 储存温度 | -10~50度 |


## 文档导航

- [尺寸与结构](./x3562-product-size-spec)
- [引脚定义](./x3562-pin-definition)
- [硬件设计](./x3562-hardware-design)
