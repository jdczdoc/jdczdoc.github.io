---
title: SDK框架
sidebar_label: SDK框架
sidebar_position: 2
description: PICO2 Tina Linux SDK主要目录、职责和常用环境命令。
---

# SDK框架

PICO2 使用 Tina Linux SDK，主要包含 Boot、BSP、Linux Kernel、OpenWrt 根文件系统和 RTOS 小核工程。

```text
SDK/
├── brandy/
│   └── brandy-2.0/
│       ├── spl/
│       ├── tools/
│       └── u-boot-2018/
├── bsp/
│   ├── configs/
│   ├── drivers/
│   └── include/
├── build/
├── device/
│   └── config/chips/v821/
├── kernel/
│   └── linux-5.4-ansc/
├── openwrt/
├── rtos/
└── out/
```

## 目录职责

| 目录 | 作用 |
| --- | --- |
| `brandy/brandy-2.0` | BOOT0、SPL、U-Boot 和打包相关代码 |
| `bsp/configs` | SoC 公共 DTSI、内核配置片段 |
| `bsp/drivers` | 全志平台驱动 |
| `device/config/chips/v821` | V821 板级 DTS、分区、`env.cfg`、`sys_config.fex` |
| `kernel/linux-5.4-ansc` | Linux 原生内核 |
| `openwrt` | Tina Linux 用户空间、Package 和根文件系统 |
| `rtos` | RISC-V 小核 RTOS 工程 |
| `out` | 编译产物和固件 |

## 初始化环境

```bash
source build/envsetup.sh
```

常用快捷命令通常包括：

```bash
lunch
m
m kernel
m menuconfig
m kernel_menuconfig
pack
```

实际命令名称以当前 SDK 的 `build/envsetup.sh` 和帮助输出为准。
