---
title: Android Build and Flash
sidebar_position: 8
---
# Android Build and Flash

## Board name

Use the following product name in the X733BV2 source tree:

```text
x733bv2
```

A release archive may be called `a733_android13.tar.gz` or `x733_android13.tar.gz`. Read the root `readme.txt` or build menu and select the `x733bv2` product.

## Extract the source

```bash
tar -xzvf a733_android13.tar.gz
cd a733_android13
```

Some releases provide large directories separately:

```bash
tar -xzvf ../prebuilts.tar.gz
tar -xzvf ../external.tar.gz
```

Use the actual filenames included in the release.

## Build

Build as a normal user and do not mix `sudo`-owned files into the source tree:

```bash
cd a733_android13
cat readme.txt
```

Follow the SDK-specific instructions, select `x733bv2`, and run the full build. Packaged images are normally placed under:

```text
longan/out/
```

Install the ELF development package when required:

```bash
sudo apt update
sudo apt install libelf-dev
```

## Flash with PhoenixSuit

1. Install and start PhoenixSuit on Windows.
2. Load the complete `.img` firmware in the one-click flash page.
3. Connect the X733BV2 Type-C OTG port.
4. Power the board off and wait until all indicators turn off.
5. Hold `BOOT/FEL` while powering on, or hold it and press `RST`.
6. Start flashing after PhoenixSuit detects the board.
7. Wait for success, disconnect the cable and reboot.

Do not disconnect power or USB while flashing. A format flash erases user data.

## Upgrade with PhoenixCard

1. Select the complete firmware in PhoenixCard.
2. Create a production/upgrade TF card.
3. Insert the card while the board is powered off.
4. Power on and wait for the progress display and serial log to complete.
5. Power off, remove the card and boot again.

Creating an upgrade card erases the existing contents of the TF card.
