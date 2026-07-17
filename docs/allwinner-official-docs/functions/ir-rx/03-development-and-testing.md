---
title: IR-RX 红外接收 开发与测试
sidebar_position: 3
description: IR-RX 红外接收 的接口使用、板端命令和功能验证。
---

# IR-RX 红外接收 开发与测试

## 获取遥控器码值

```bash
getevent -lp
getevent -l /dev/input/eventX
hexdump -C /dev/input/eventX
```

先区分厂商码、扫描码和 Linux keycode。驱动 keymap 负责把红外协议扫描码映射为 Linux keycode；Android 再通过 `.kl` 文件把 Linux keycode 映射为 Android 按键。

## Android 映射链路

```text
红外脉冲 -> IR-RX 驱动解码 -> rc keymap -> Linux input keycode
         -> /vendor/usr/keylayout/*.kl -> Android KeyEvent
```

发生“getevent 有数据但应用无响应”时，Kernel 通常已经正常，应检查 `.kl` 映射、系统保留键和应用焦点。

## 唤醒验证

```bash
echo mem > /sys/power/state
# 按遥控器电源键
cat /sys/power/wakeup_count
cat /sys/kernel/debug/wakeup_sources | grep -i ir
```

假关机唤醒还要验证 U-Boot 使用的引脚、厂商码和电源键码与 Kernel 配置一致。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
