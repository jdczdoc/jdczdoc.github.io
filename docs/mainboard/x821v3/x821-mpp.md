---
title: 多媒体MPP
sidebar_position: 14
description: "V821 MPP组件、Sample编译、智能IPC和音视频测试"
---

# 多媒体MPP

## 架构

MPP位于应用与底层VIN/ISP、编码器、显示、音频驱动之间，提供Camera、VENC、VDEC、VO、AI、AO、MUX、DEMUX、G2D等组件。

![摄像头Media Controller拓扑示意](./linux-mpp-architecture.png)

常用源码：

```text
platform/allwinner/eyesee-mpp/
platform/allwinner/multimedia/
platform/allwinner/tina_multimedia/libcedarc_mpp/
```

## 配置与编译

```bash
source build/envsetup.sh
lunch
make menuconfig
# enable required MPP libraries and samples
m -j4
```

`quick_config`可切换MPP静态库或动态库。切换前执行`make distclean`，避免旧产物混用。

## Sample通用流程

1. 在menuconfig启用目标Sample。
2. 编译软件包或完整SDK。
3. 将可执行文件、配置和测试素材放入固件或TF卡。
4. 板端挂载TF卡并运行。
5. 使用串口日志、输出码流、显示画面和PC分析工具验证。

## 智能IPC Sample

`sample_smartIPC_demo`通常包含：

```text
Camera/VIN -> ISP -> VENC -> file/network
                    -> VO/display
Audio input -> AENC -> file/network
```

配置时重点检查Sensor、分辨率、帧率、码率、RC模式、码流保存路径和内存池。

## 常用测试工具

```bash
ffprobe output.h264
ffplay -f h264 output.h264
ffmpeg -i input.mp4 -f null -
```

音频可使用`aplay`、`arecord`或FFmpeg检查采样率、通道和位宽。

## 定位原则

- 无帧：先查Sensor/VIN/ISP。
- 有原始帧无编码：查VENC输入格式、buffer和内存池。
- 编码正常无显示：查VO、图层、像素格式和分辨率。
- 长时间崩溃：监控内存泄漏、buffer未归还和文件系统写满。
