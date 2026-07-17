---
title: 板端调试与验证
sidebar_position: 10
description: T527驱动和Android功能修改后的日志、设备树、配置和设备节点验证方法。
---

# 板端调试与验证

修改源码并成功编译，不代表新配置已经进入固件，也不代表板端驱动已经正常工作。验证应按照“源码、编译产物、固件、运行时”四个层次进行。

## 1. 确认源码修改

```bash
cd <ANDROID_TOP>
git status --short
git diff -- longan/bsp longan/device longan/kernel device vendor hardware
```

## 2. 确认编译配置

```bash
cd <ANDROID_TOP>/longan
cat .buildconfig

CONFIG_FILE=$(find out -type f -path '*/kernel/build/.config' | head -1)
echo "$CONFIG_FILE"
grep -n 'CONFIG_<目标宏>' "$CONFIG_FILE"
```

## 3. 确认DTB和模块

```bash
find out -type f -name '*.dtb' -print
find out -type f -name '*.ko' -print | grep -i '<模块关键字>'
```

反编译 DTB：

```bash
dtc -I dtb -O dts -o /tmp/final.dts <DTB路径>
grep -n -A20 -B5 '<节点或compatible>' /tmp/final.dts
```

## 4. 确认烧录固件

记录固件信息：

```bash
ls -lh --time-style=long-iso <固件路径>
sha256sum <固件路径>
```

烧录后确认版本：

```bash
adb shell getprop ro.build.fingerprint
adb shell getprop ro.build.date.utc
adb shell uname -a
adb shell cat /proc/version
```

## 5. 查看内核日志

```bash
adb root
adb shell dmesg | grep -i '<驱动名或设备名>'
adb shell dmesg -w
```

重点关注：

```text
probe failed
deferred probe
clock/reset error
pinctrl error
regulator error
IRQ request failed
timeout
I/O error
```

## 6. 查看Android日志

```bash
adb logcat -b all
adb shell dumpsys
adb shell lshal
```

按模块过滤：

```bash
adb logcat -b all | grep -i 'camera\|audio\|display\|wifi\|bluetooth'
```

## 7. 查看设备节点和驱动绑定

```bash
adb shell ls -l /dev
adb shell ls -l /sys/class
adb shell ls -l /sys/bus/platform/drivers
```

查找设备绑定：

```bash
adb shell 'find /sys/bus/platform/drivers -maxdepth 2 -type l 2>/dev/null | head -100'
```

## 8. 检查运行时设备树

```bash
adb shell 'find /proc/device-tree -maxdepth 5 -type f 2>/dev/null | head -100'
```

读取字符串属性：

```bash
adb shell 'tr -d "\000" < /proc/device-tree/<节点路径>/status'
```

读取二进制 u32 属性可先导出：

```bash
adb pull /proc/device-tree/<节点路径>/<属性> /tmp/dt-property.bin
hexdump -C /tmp/dt-property.bin
```

## 9. 检查模块和内核符号

```bash
adb shell cat /proc/modules
adb shell lsmod
adb shell zcat /proc/config.gz 2>/dev/null | grep 'CONFIG_<目标宏>'
```

若 `/proc/config.gz` 不存在，以 Longan 输出目录中的 `.config` 为准。

## 10. 建议的问题定位顺序

```text
硬件供电与引脚
    ↓
设备树节点和pinctrl
    ↓
menuconfig与CONFIG宏
    ↓
驱动是否参与编译
    ↓
DTB/KO是否进入固件
    ↓
内核probe日志
    ↓
HAL与Android服务
    ↓
应用层表现
```

每次只修改一类变量，保留编译日志、启动日志和对应补丁，避免多个改动混在一起后无法判断真正原因。
