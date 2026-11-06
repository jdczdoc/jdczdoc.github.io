---
sidebar_position: 18
title: 多媒体 MPP
description: x881 多媒体 MPP
---

# 多媒体 MPP

MPP middleware 提供 VI/VIN、ISP、VENC/VDEC、VO、AI/AO、MUX/DEMUX、时钟和 G2D 等组件；framework 对具体场景进行封装。

## 配置与构建

```bash
source build/envsetup.sh
lunch
make menuconfig
# Allwinner -> eyesee-mpp -> middleware -> select mpp sample
mp -j4
mkmpp
# Clean only when needed
cleanmpp
```

常用包有 external、framework、middleware、private、system 和 dragonboard。只启用需要的 Sample。库和头文件通过 `cmpp_s`、`cmpplibs`、`cmppheaders`、`clibcedarcheaders` 定位，旧文档中的 sun300iw1 目录仅作参考。

## 智能 IPC Sample

```bash
mkdir -p /mnt/extsd
# Mount the actual available device, if present
mount /dev/mmcblk0p1 /mnt/extsd
cd /mnt/extsd
./sample_smartIPC_demo -path sample_smartIPC_demo.conf &
```

确认当前板卡存在对应外部介质及节点后再挂载；没有该接口时，将程序与配置放入实际可写路径。配置包括主/子码流、帧率、码率、抓拍、音频、RTSP 和移动侦测。

```ini
rtsp_net_type = 3
stream_buf_size = -1
main_src_frame_rate = 30
main_encode_frame_rate = 30
main_width = 1280
main_height = 720
main_2nd_enable = 1
audio_test_enable = 1
capture_en = 1
playback_en = 1
motionAlarm_on = 1
motionAlarm_sensitivity = 60
```

在 VLC 打开日志给出的 RTSP 地址，例如 `rtsp://<board_ip>:8554/ch0`。用 VLC、MediaInfo、ffprobe、YUView 验证视频，用 Audacity 分析录音及 AEC。

## 其他 Sample

视频：`sample_vdec`、`sample_demux2vdec2vo`、`sample_vo`、`sample_UILayer`。音频：`sample_ai`、`sample_ao`、`sample_aoSync`、`sample_ao_resample_mixer`、`sample_WebRtcAec`。扩展：`sample_g2d`、`sample_vi_g2d`、UVC 与 CE 类测试。选择与当前 SDK 实际列表一致的条目。
