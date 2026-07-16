---
sidebar_position: 4
title: 规格参数
description: Pico PC RK3588S SoC、CPU、GPU、NPU、接口和环境参数
---

# 规格参数

## 规格参数表

| 基本参数 |  |
| --- | --- |
| SOC | RockChip RK3588S |
| CPU | 八核64位（4×Cortex-A76+4×Cortex-A55）, 8nm先进工艺，主频高达2.4GHz |
| GPU | ARM Mali-G610 MP4四核GPU支持 OpenGL ES3.2 / OpenCL 2.2 / Vulkan1.1, 450 GFLOPS |
| NPU | NPU算力高达6TOPS，支持 INT4/INT8/INT16 混合运算， / 可实现基于TensorFlow/MXNet/PyTorch/ Caffe等系列框架的网络模型转换 |
| ISP | 集成48MP ISP with HDR&3DNR |
| 编解码 | 视频解码： / 8K@60fps H.265/VP9/AVS2 / 8K@30fps H.264 AVC/MVC / 4K@60fps AV1 / 1080P@60fps MPEG-2/-1/VC-1/VP8 / 视频编码： / 8K@30fps编码，支持H.265 / H.264 / *最高可实现32路1080P@30fps解码和16 路1080P@30fps编码 |
| 内存 | 4GB/8GB/16GB 64bit LPDDR4/LPDDR4x（最高可配 32GB） |
| 存储 | 16GB/32GB eMMC |
| 硬件参数 |  |
| 以太网 | 千兆以太网 |
| 无线网络 | 2.4G/5G双频Wi-Fi，支持扩展4G无线模块 |
| 视频 | 1 × HDMI2.1（8K@60fps 或 4K@120fps） / 1 × MIPI-DSI（4K@60fps） |
| 音频 | 1 × Phone 输出（带MIC） / 1 × Micro HDMI 音频输出 |
| USB | 2 × USB3.0 / 1 × Type-C / 2 × USB2.0 |
| 电源 | DC5V输入(Type-C接口) |
| 其他接口 | 1×CSI、1×DSI、1×UART、1×Debug、28×GPIO |
| 系统软件 |  |
| 系统 | Android：Android 12.0 / Linux：Ubuntu、Debian11、Buildroot |
| 其他参数 |  |
| 尺寸 | 85mm×56mm（标准树莓派尺寸） |
| 重量 | 约50克 |
| 散热 | 散热器安装孔距：参考树莓派 |
| 功耗 | 待机功耗：约0.375W (5V/75mA) / 典型功耗：约1W (5V/200mA) / 最大功耗：约9W (5V/1800mA) |
| 环境 | 工作温度：-10℃- 70℃ / 存储温度：-20℃- 70℃ / 存储湿度：10%～80 % |


:::note
硬件手册中系统支持列为 Android 12.0、Ubuntu、Debian 11、Buildroot；软件资源支持列表中同时列出 Linux + Android 12、Linux + Debian 10、Linux + Ubuntu、Linux + Qt。实际发布镜像版本以对应 SDK 和网盘资料为准。
:::
