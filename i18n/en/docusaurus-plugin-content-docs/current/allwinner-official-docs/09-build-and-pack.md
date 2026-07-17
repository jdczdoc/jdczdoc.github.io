---
title: Build and Packaging Workflow
sidebar_position: 9
description: Standard T527 Android 13 workflow from Longan configuration to Android build and firmware packaging.
---

# Build and Packaging Workflow

## First Full Build

### 1. Configure and Build Longan

```bash
cd <ANDROID_TOP>/longan
./build.sh config
./build.sh
```

Choose the Android platform during Longan configuration. Linux and Android targets may use different toolchains and packaging configuration.

### 2. Select the Android Product

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
```

### 3. Build Android

```bash
make -j16
```

### 4. Package

A common Allwinner Android 13 command is:

```bash
pack
```

A debug image is often produced with:

```bash
pack -d
```

Inspect the current branch before using secure or combined options:

```bash
pack --help 2>/dev/null || true
build --help 2>/dev/null || true
```

Some branches support commands such as `build -lap -j16` or `build -lapd -j16`; use only options shown by the local help output.

## Kernel or Device Tree Only

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
```

Then package from the Android root:

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
pack
```

Some projects support a Longan pack hook with prebuilt Android images. Confirm it before relying on `./build.sh pack`:

```bash
grep '^LICHEE_PACK_HOOK=' .buildconfig
ls -l build/hook/pack 2>/dev/null
```

## U-Boot Only

```bash
cd <ANDROID_TOP>/longan
./build.sh bootloader
```

Run the project packaging step afterward.

## Android Module Only

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
m <module-name> -j16
```

Deploy the file directly for quick validation or rebuild the final firmware.

## Verify Output

Longan output:

```bash
cd <ANDROID_TOP>/longan
find out -type f \
    \( -name '*.dtb' -o -name '*.ko' -o -name 'vmlinux' -o -name '*.img' \) \
    -print | sort
```

Android output:

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug

echo "$OUT"
find "$OUT" -maxdepth 2 -type f \
    \( -name '*.img' -o -name '*.apk' \) \
    -print | head -100
```

Find recently generated final images:

```bash
find <ANDROID_TOP> -type f -name '*.img' -mmin -30 -print
```

Confirm the timestamp, size, and packaging log before flashing.
