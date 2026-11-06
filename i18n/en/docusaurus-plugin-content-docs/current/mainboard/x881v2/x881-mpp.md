---
sidebar_position: 18
title: Multimedia MPP
description: x881 Multimedia MPP
---

# Multimedia MPP

MPP middleware provides VI/VIN, ISP, VENC/VDEC, VO, AI/AO, MUX/DEMUX, clock and G2D components; framework adds scenario-specific applications.

## Configure and build

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

Common packages are external, framework, middleware, private, system and dragonboard. Enable only needed samples. Use `cmpp_s`, `cmpplibs`, `cmppheaders` and `clibcedarcheaders` to locate source/libraries/headers; older sun300iw1 paths are reference examples.

## Smart IPC sample

```bash
mkdir -p /mnt/extsd
# Mount the actual available device, if present
mount /dev/mmcblk0p1 /mnt/extsd
cd /mnt/extsd
./sample_smartIPC_demo -path sample_smartIPC_demo.conf &
```

Mount only if the board has the external medium and node. Otherwise install the program/configuration in an actual writable path. Configure main/sub streams, frame rate, bitrate, snapshots, audio, RTSP and motion detection.

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

Open the logged RTSP URL in VLC, for example `rtsp://<board_ip>:8554/ch0`. Validate video with VLC, MediaInfo, ffprobe or YUView, and analyze recording/AEC with Audacity.

## Other samples

Video: `sample_vdec`, `sample_demux2vdec2vo`, `sample_vo`, `sample_UILayer`. Audio: `sample_ai`, `sample_ao`, `sample_aoSync`, `sample_ao_resample_mixer`, `sample_WebRtcAec`. Extensions include `sample_g2d`, `sample_vi_g2d`, UVC and CE tests. Select entries actually present in the SDK.
