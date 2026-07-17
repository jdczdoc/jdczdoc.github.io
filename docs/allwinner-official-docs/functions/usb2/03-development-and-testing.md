---
title: USB 2.0 开发与测试
sidebar_position: 3
description: USB 2.0 的接口使用、板端命令和功能验证。
---

# USB 2.0 开发与测试

## Host 验证

```bash
dmesg -w
lsusb -t
cat /sys/kernel/debug/usb/devices
mount | grep -E 'sd[a-z]|usb'
```

`lsusb -t` 可确认设备运行在 1.5M、12M、480M 等速率。高速设备只枚举到 full-speed 时，应优先检查 D+/D- 走线、PHY、供电和线缆。

## Device / Gadget

启用 UDC 和 ConfigFS 后，可组合 ADB、MTP、Mass Storage、RNDIS、ACM、HID、UAC、UVC 等功能。Android 通常由 init/vendor 脚本管理，不应在系统服务运行时手工重复创建同名 gadget。

```bash
ls /sys/class/udc
ls /config/usb_gadget 2>/dev/null
getprop sys.usb.config
setprop sys.usb.config adb
```

## OTG

OTG 同时依赖控制器模式、ID/VBUS 或 Type-C 检测、VBUS 供电和角色切换状态机。只改 `dr_mode` 或 `usb_port_type` 通常不足以完成硬件角色切换。

## 性能测试

Mass Storage 测试应区分缓存与真实介质性能，使用 `sync`、足够大的文件和双向测试。RNDIS/NCM 使用 `iperf3` 测试吞吐，并同时观察 CPU 占用。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
