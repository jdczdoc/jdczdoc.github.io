---
sidebar_position: 11
title: Linux builds and upgrades
description: x311y3 Linux builds and upgrades
---

# Linux builds and upgrades

## Manual build

The commands use the BY401 reference; substitute the verified configuration if the X311Y3 SDK uses another Board.

```bash
cd "$SDK_ROOT/build"
ln -sf ../amlbian userpatches
./compile.sh rootfs BOARD=a9-by401-6.12-bookworm-gnome
```

## HDMI Only build

```bash
./compile.sh rootfs \
  BOARD=a9-by401-6.12-bookworm-gnome \
  HDMIONLY=yes
```

The default command builds dual display; add `HDMIONLY=yes` for HDMI Only. Select the second screen, such as `hdmitx`, in Display settings and enable mirroring or extension.

## Output and success criteria

```bash
test -s "$SDK_ROOT/build/output/images/a311y3-by401-gnome-emmc.img" \
  && echo "Image exists and is non-empty"
```

Example output: `build/output/images/a311y3-by401-gnome-emmc.img`. Check for `Pack image[...] OK` or `IMAGE: ... is ready!` and a non-empty image. Use the final path printed by the build.

## Build wrapper

```bash
cp 'build_amlogic(1).sh' "$SDK_ROOT/build_armbian.sh"
cd "$SDK_ROOT"
chmod +x build_armbian.sh
./build_armbian.sh h
```

| Argument | Description | Log |
| --- | --- | --- |
| n | Default dual display | build_armbian.log |
| dd | Dual display; same build command as n | build_armbian_dd.log |
| ho | HDMI Only (HDMIONLY=yes) | build_armbian_ho.log |
| h | Help | — |

```bash
./build_armbian.sh n
./build_armbian.sh dd
./build_armbian.sh ho
grep -E "Pack image|IMAGE:|successful|ERROR|Error" build_armbian.log | tail -n 30
test -s build/output/images/a311y3-by401-gnome-emmc.img && echo OK
```

The supplied script uses `compile.sh ... | tee logfile` without `set -o pipefail` or compiler-exit checks, so it may announce completion after failure. Check meaningful errors and the output image.

## Image upgrade

Use the matching V3 tool on Windows; see [USB flashing and tool installation](./x311y3-usb-flashing.md). Linux hosts may use matching `adnl_burn_pkg`. Confirm image compatibility, back up data, check UART/cabling, stop the tool after completion and power-cycle to inspect logs.
