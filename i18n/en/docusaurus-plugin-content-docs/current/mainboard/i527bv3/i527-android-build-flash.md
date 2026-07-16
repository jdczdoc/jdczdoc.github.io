---
title: Android Build and Flashing
sidebar_position: 8
---
# Android Build and Flashing

## Product name

Use the following product/board name inside the source tree:

```text
i527bv3
```

The archive or repository may still be named `x527_android13` or contain `t527`; select `i527bv3` in the released SDK build instructions.

## Source package

```bash
tar -xzvf x527_android13.tar.gz
cd x527_android13
tar -xzvf ../prebuilts.tar.gz
tar -xzvf ../external.tar.gz
```

Read the SDK `readme.txt`, load the build environment, choose `i527bv3`, and build as a normal user. Images are normally placed under `longan/out/`.

If required:

```bash
sudo apt update
sudo apt install libelf-dev
```

## PhoenixSuit flashing

Connect the Type-C OTG port, load the full image in PhoenixSuit, power the board off, hold FEL and power on or press RESET. Wait for flashing to complete before reconnecting power.

## TF-card update

Use PhoenixCard to create an update card. This operation overwrites the TF card. Insert it while power is off, boot the board, wait for completion, remove the card and reboot.
