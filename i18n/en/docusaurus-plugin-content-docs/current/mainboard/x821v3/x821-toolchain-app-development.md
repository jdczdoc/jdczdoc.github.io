---
title: Toolchains and Application Development
sidebar_position: 10
description: "V821 RISC-V toolchains, Gitea workflow, Tina packages, and auto-start services"
---

# Toolchains and Application Development

## RISC-V Linux Toolchain

The Linux user-space toolchain is normally under `prebuilt/rootfsbuilt`. Its prefix depends on the selected board and musl/glibc configuration. Locate it first:

```bash
which gcc
find prebuilt -type f -name '*gcc' | head
```

Build a simple program:

```bash
${CROSS_COMPILE}gcc -O2 -Wall hello.c -o hello
file hello
```

Shared library:

```bash
${CROSS_COMPILE}gcc -fPIC -c demo.c -o demo.o
${CROSS_COMPILE}gcc -shared demo.o -o libdemo.so
```

Static library:

```bash
${CROSS_COMPILE}gcc -c demo.c -o demo.o
${CROSS_COMPILE}ar rcs libdemo.a demo.o
```

## RISC-V MCU Toolchain

The MCU toolchain is for RTOS projects and must not be mixed with the Linux user-space toolchain. Use the SDK `mrtos` build system so that the correct ABI and architecture flags are applied automatically.

## Git/Gitea Workflow

Create a clean vendor baseline:

```bash
git init
git switch -c main
git add .
git commit -m 'baseline: vendor V821 SDK'
git remote add origin <gitea-url>
git push -u origin main
```

`quick_config`, storage switching, and camera switching modify multiple files. Use a separate branch for each feature and inspect `git status` and `git diff` before and after the operation.

## Adding a Tina Package

Typical layout:

```text
openwrt/package/utils/hello/
├── Makefile
└── src/
    ├── Makefile
    └── hello.c
```

The OpenWrt package Makefile defines metadata, dependencies, build steps, and rootfs installation. Then enable and build it:

```bash
make menuconfig
# select Utilities -> hello
m -j4
```

## Auto-start Service

Prefer an OpenWrt init script:

```text
/etc/init.d/hello
```

Implement at least `start()` and `stop()`, and install the enable link from the package. For temporary board-side testing:

```bash
/etc/init.d/hello enable
/etc/init.d/hello start
```

The application should handle missing configuration, unavailable storage, delayed networking, and abnormal exits. A background command in `rc.local` is not a robust service design.
