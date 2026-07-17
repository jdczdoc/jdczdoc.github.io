---
title: 编译与打包流程
sidebar_position: 9
description: 汇总T527 Android 13从Longan配置到Android整编和固件打包的标准流程。
---

# 编译与打包流程

## 首次完整编译

### 1. 配置并编译Longan

```bash
cd <ANDROID_TOP>/longan
./build.sh config
./build.sh
```

Android 固件必须在 Longan config 阶段选择 `android` 平台。Linux 与 Android 可能使用不同工具链和打包配置，不要使用 Linux 配置生成 Android 固件。

### 2. 选择Android产品

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
```

### 3. 编译Android

```bash
make -j16
```

### 4. 打包

全志 Android 13 常见方式：

```bash
pack
```

生成调试固件：

```bash
pack -d
```

安全固件参数和脚本随项目配置变化，先检查：

```bash
pack --help 2>/dev/null || true
build --help 2>/dev/null || true
```

部分分支也可使用：

```bash
build -lap -j16
build -lapd -j16
```

参数含义必须以当前 `build --help` 为准。

## 只修改内核或设备树

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
```

之后根据分支选择：

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
pack
```

部分项目支持 Longan 无源码打包：

```bash
cd <ANDROID_TOP>/longan
./build.sh
./build.sh pack
```

这依赖 pack hook 和预置 Android 镜像，不能假设所有分支都支持。通过下面命令确认：

```bash
grep '^LICHEE_PACK_HOOK=' .buildconfig
ls -l build/hook/pack 2>/dev/null
```

## 只修改U-Boot

```bash
cd <ANDROID_TOP>/longan
./build.sh bootloader
```

然后重新执行对应打包流程。

## 只修改Android模块

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
m <模块名> -j16
```

可通过 `adb install -r` 或 `adb push` 快速验证，也可以重新打包完整固件。

## 输出确认

### Longan输出

```bash
cd <ANDROID_TOP>/longan
find out -type f \
    \( -name '*.dtb' -o -name '*.ko' -o -name 'vmlinux' -o -name '*.img' \) \
    -print | sort
```

### Android输出

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug

echo "$OUT"
find "$OUT" -maxdepth 2 -type f \
    \( -name '*.img' -o -name '*.apk' \) \
    -print | head -100
```

### 最终全志固件

```bash
find <ANDROID_TOP> -type f -name '*.img' -mmin -30 -print
```

通过修改时间、文件大小和打包日志确认使用的是本次生成的固件。

## 常见清理方式

Longan：

```bash
cd <ANDROID_TOP>/longan
./build.sh clean
```

Android 单模块：

```bash
m clean-<模块名>
```

Android 全量输出很大，删除 `out/` 前必须确认没有需要保留的编译产物。不要把清理作为所有编译问题的第一处理方式，应先保留完整报错并定位失败模块。
