---
sidebar_position: 13
title: Linux 多媒体与 AI 测试
description: x311y3 Linux 多媒体与 AI 测试
---

# Linux 多媒体与 AI 测试

## 视频播放

```bash
sudo apt install clapper
```

在文件管理器中选择视频，使用“打开方式”选择 Clapper。无法播放时检查编码格式、音视频设备和媒体组件版本。

## USB 摄像头预览

```bash
ls -l /dev/video*
v4l2-ctl --list-devices
GST_GL_API=gles2 gst-launch-1.0 -v \
  v4l2src device=/dev/video0 io-mode=dmabuf num-buffers=200 ! \
  video/x-raw,format=YUY2,width=1280,height=720 ! videoconvert ! \
  video/x-raw,format=RGBA,width=1280,height=720 ! glimagesink
```

示例为 UVC 摄像头 `/dev/video0`、1280×720 YUY2 输入，按实际节点和支持格式替换。

## MIPI 摄像头预览

```bash
GST_GL_API=gles2 gst-launch-1.0 v4l2src \
  device=/dev/video60 io-mode=dmabuf ! \
  video/x-raw,width=1920,height=1080,format=NV12 ! glimagesink
```

需要已完成传感器初始化、生成对应节点并具备图形会话；示例 `/dev/video60`、1920×1080 NV12 不是所有镜像的固定配置。

## USB 摄像头 H.265 编码

```bash
gst-launch-1.0 -v v4l2src device=/dev/video0 io-mode=dmabuf \
  num-buffers=100 ! video/x-raw,format=YUY2,width=640,height=480 ! \
  videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! \
  amlvenc ! h265parse ! qtmux ! filesink location=/data/test_0.mp4
```

确认 `/data` 可写且空间充足，摄像头支持对应分辨率和像素格式。

## NPU 示例

Face Detect、LLM 和 YOLOX 测试包向项目负责人或 Amlogic FAE 获取，不是所有标准镜像默认自带。Face Detect 按包内 readme 配置 Python、AArch64 wheel 及 `/dev/adla0`、`/data/nn` 权限。

```bash
./llm_demo Qwen1.5-0.5B-Chat-Q4AM_PB32.adla --model_type qwen
nnsample 13 /etc/nn_input/bin/tf_boy_640x384.bin
```

YOLOX 示例使用 `yolox_camera.py` 和 `yolox_s.onnx`，按测试包说明配置 `camera-id`、`stream-port`，在 PC 浏览器查看结果。

## H.265 转 H.264

```bash
export GST_DEFAULT_V4L2_BUF_MODE=DMA_BUF_IMPORT
export V4L2_SET_AMLOGIC_DW_MODE=16
gst-launch-1.0 filesrc location=/data/srcfile/test_h265.mp4 ! \
  qtdemux name=dd.video_0 ! h265parse ! amlv4l2h265dec ! amlvconv ! \
  video/x-raw,format=NV12,width=1280,height=720,framerate=30/1 ! \
  amlvenc bitrate=3000 gop=10 ! h264parse ! mpegtsmux ! \
  filesink location=/data/1280x720x30_direct_265_264.ts
```

文件路径与厂商 GStreamer 插件需与当前镜像匹配。

## HDMI 输入

```bash
sudo sh -c "echo cntl_hpd 0 > /sys/class/hdmirx/hdmirx0/debug"
tvtest
# Select option 1 in tvtest to start HDMI input
```

将 PC HDMI 输出连接到开发板 HDMI RX。无节点或无画面时检查输入时序、驱动和设备树。PCIe 功能按对应 PCIe User Guide 与 FAE 指导配置；Dolby、HDCP、Widevine 等组件是否可用取决于项目授权、SDK 配置和硬件。
