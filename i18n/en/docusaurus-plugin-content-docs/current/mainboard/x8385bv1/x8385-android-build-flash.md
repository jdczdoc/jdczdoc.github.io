---
sidebar_position: 7
title: Android Build and Flash
description: X8385 Android 13 source build and SP Flash Tool flashing flow
---

# Android Build and Flash

## Source Package

Get the Android source package from the network-disk path `DVD_x8385/source/`. The example package name in the manual is:

```text
x8385_Android13.tar.gz
```

Extract it:

```bash
tar -xzvf x8385_Android13.tar.gz
cd x8385_Android13
```

:::note
The package name may vary by release date. Use the actual file name in the network-disk package.
:::

## Build Source

Build images with a normal user account. MTK projects are usually full builds, so it is better to batch changes before rebuilding.

```bash
./build.sh -A -u
```

Generated images are placed in the `output` directory.

## Build Help

```bash
./build.sh -h
```

| Option | Meaning |
| --- | --- |
| `-A`, `--Android` | Build Android system |
| `-U`, `--update` | Build update file |
| `-S`, `--system` | Build MSSI system, debug only |
| `-V`, `--vendor` | Build AP vendor, debug only |
| `-K`, `--kernel` | Build kernel, debug only |
| `-M`, `--merge` | Build merge, debug only |
| `-a`, `--all` | Build all |
| `-h`, `--help` | Show help |

## Windows Flashing Tools

Driver path:

```text
tools\Driver_Auto_Installer_SP_Drivers_20160804.zip
```

Flash tool:

```text
tools\SP_Flash_Tool_v5.2020_Win.rar
```

## SP Flash Tool Flow

1. Extract and open `SP_Flash_Tool_v5.2020_Win`.
2. Select the generated scatter file under `output`:

```text
output/MT6771_Android_scatter.txt
```

3. Select `Format All + Download`.
4. Configure the tool and connect the board.
5. Connect the Micro USB cable and 12V DC power cable.
6. Click `Download` in the tool first.
7. Press SW6.
8. Press the Power key to boot.
9. Wait for the progress bar and let the upgrade finish.

:::warning
`Format All + Download` erases target partitions. Before using it in production or after-sales workflows, confirm whether calibration data, serial numbers, MAC addresses, IMEI, or other personalized data must be preserved.
:::
