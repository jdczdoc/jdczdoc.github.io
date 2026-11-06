---
sidebar_position: 13
title: Linux multimedia and AI tests
description: x311y3 Linux multimedia and AI tests
---

# Linux multimedia and AI tests

## Video playback

```bash
sudo apt install clapper
```

Select a video in the file manager and open it with Clapper. If playback fails, check codec format, audio/video devices and media-component versions.

## USB camera preview

```bash
ls -l /dev/video*
v4l2-ctl --list-devices
GST_GL_API=gles2 gst-launch-1.0 -v \
  v4l2src device=/dev/video0 io-mode=dmabuf num-buffers=200 ! \
  video/x-raw,format=YUY2,width=1280,height=720 ! videoconvert ! \
  video/x-raw,format=RGBA,width=1280,height=720 ! glimagesink
```

The example uses a UVC camera at `/dev/video0`, with 1280 × 720 YUY2 input. Substitute the actual node and supported format.

## MIPI camera preview

```bash
GST_GL_API=gles2 gst-launch-1.0 v4l2src \
  device=/dev/video60 io-mode=dmabuf ! \
  video/x-raw,width=1920,height=1080,format=NV12 ! glimagesink
```

The sensor must be initialized, its node available and the graphical session running. `/dev/video60` at 1920 × 1080 NV12 is an example, not a universal image configuration.

## USB camera H.265 encoding

```bash
gst-launch-1.0 -v v4l2src device=/dev/video0 io-mode=dmabuf \
  num-buffers=100 ! video/x-raw,format=YUY2,width=640,height=480 ! \
  videoconvert ! video/x-raw,format=NV12,width=640,height=480 ! \
  amlvenc ! h265parse ! qtmux ! filesink location=/data/test_0.mp4
```

Ensure `/data` is writable with enough space and that the camera supports the requested resolution and format.

## NPU examples

Obtain Face Detect, LLM and YOLOX packages from the project contact or Amlogic FAE; they are not guaranteed in standard images. Follow the package README for Python, AArch64 wheels and `/dev/adla0` / `/data/nn` permissions.

```bash
./llm_demo Qwen1.5-0.5B-Chat-Q4AM_PB32.adla --model_type qwen
nnsample 13 /etc/nn_input/bin/tf_boy_640x384.bin
```

The YOLOX example uses `yolox_camera.py` and `yolox_s.onnx`; configure `camera-id` and `stream-port` according to the package and view results in a PC browser.

## H.265 to H.264 transcoding

```bash
export GST_DEFAULT_V4L2_BUF_MODE=DMA_BUF_IMPORT
export V4L2_SET_AMLOGIC_DW_MODE=16
gst-launch-1.0 filesrc location=/data/srcfile/test_h265.mp4 ! \
  qtdemux name=dd.video_0 ! h265parse ! amlv4l2h265dec ! amlvconv ! \
  video/x-raw,format=NV12,width=1280,height=720,framerate=30/1 ! \
  amlvenc bitrate=3000 gop=10 ! h264parse ! mpegtsmux ! \
  filesink location=/data/1280x720x30_direct_265_264.ts
```

Input/output paths and vendor GStreamer plugins must match the image.

## HDMI input

```bash
sudo sh -c "echo cntl_hpd 0 > /sys/class/hdmirx/hdmirx0/debug"
tvtest
# Select option 1 in tvtest to start HDMI input
```

Connect PC HDMI output to the board HDMI RX. If the node or picture is missing, check input timing, drivers and device tree. Configure PCIe according to its User Guide/FAE guidance. Dolby, HDCP, Widevine and similar components depend on project licensing, SDK configuration and hardware.
