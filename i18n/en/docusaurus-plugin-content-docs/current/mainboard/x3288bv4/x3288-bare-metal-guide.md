---
sidebar_position: 13
title: Bare-metal Development
description: X3288 bare-metal development environment, boot method, and experiment list
---

# Bare-metal Development

This page organizes the bare-metal tutorial into a development entry page. Copyright, technical support, directory, and unrelated product-list content are removed.

## Overview

The X3288 bare-metal examples are designed for learning low-level embedded development on a quad-core platform. The examples start from simple LED control and gradually move to LCD display, drawing, animation, and more complex projects.

## Development Environment

The tutorial uses a prepared Eclipse-based development environment. Two packages are provided:

```text
eclipse-mars-for-arm-windows-x86_64.7z
eclipse-mars-for-arm-gtk-linux-x86_64.7z
```

Select the package according to the PC operating system. The package is a portable environment and can be used after extraction.

## Start Eclipse

Use `eclipse.bat` on Windows so that the required environment variables are initialized automatically before Eclipse starts. Select the source-code directory as the workspace.

## Build a Project

Open a project such as `adc`, then run **Build Project**. After compilation, an `output` directory is generated under the project directory.

## Flash and Boot

The X3288 board normally boots from eMMC first. If you need to boot from the prepared TF card, the eMMC boot content may need to be cleared first from the running system:

```bash
su
busybox dd if=/dev/zero of=/dev/block/mmcblk0 bs=512 count=8192 seek=1 conv=sync
```

After that, insert the TF card and reboot the board.

## Experiment Scope

The experiments include GPIO, ADC, UART, LCD, drawing, animation, and other bare-metal demonstrations. Use the project list in the delivered source tree as the final reference.
