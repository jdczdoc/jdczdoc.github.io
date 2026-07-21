---
title: SDK功能配置
sidebar_label: SDK功能配置
sidebar_position: 4
description: PICO2 Kconfig、Device Tree、分区表、env.cfg、sys_config.fex和文件系统配置。
---

# SDK功能配置

## Kconfig

Tina、Kernel 和 RTOS 通常分别维护配置：

```bash
m menuconfig
m kernel_menuconfig
m rtos_menuconfig
```

Kernel 配置用于驱动和内核子系统，Tina `menuconfig` 用于用户空间 Package 和根文件系统，RTOS 配置用于小核组件。

## Device Tree

板级设备树位于：

```text
device/config/chips/v821/configs/<board>/
```

SoC 公共 DTSI 和驱动节点通常位于：

```text
bsp/configs/linux-5.4-ansc/
```

查找节点：

```bash
grep -Rni "uart0" bsp device
grep -Rni "spi0" bsp device
grep -Rni "status = " device/config/chips/v821
```

修改后应重新编译 Kernel/DTB，并反编译最终 DTB 验证：

```bash
dtc -I dtb -O dts -o final.dts <board>.dtb
```

## 分区表

分区配置通常包含名称、大小、下载文件和用户属性：

```ini
[partition]
name         = boot-resource
size         = 1024
downloadfile = "boot-resource.fex"
user_type    = 0x8000
```

分区大小应满足镜像增长空间，并遵守 SDK 的对齐要求。

## `env.cfg`

常见路径：

```text
device/config/chips/v821/configs/default/env.cfg
device/config/chips/v821/configs/<board>/env.cfg
```

板级配置可覆盖默认配置。

## `sys_config.fex`

串口调试配置示例：

```ini
[uart_para]
uart_debug_port = 0
uart_debug_tx = port:PD22<3><1><default><default>
uart_debug_rx = port:PD23<3><1><default><default>

[platform]
debug_mode = 0
```

端口格式：

```text
port:端口+组内序号<功能><上下拉><驱动能力><输出电平>
```

## 根文件系统

只读根文件系统可使用 EROFS：

```text
CONFIG_TARGET_ROOTFS_EROFS=y
CONFIG_EROFS_FS=y
```

开发调试阶段需要持久写入时，应选择可读写文件系统并确认 Overlay/UBI/EXT4 的挂载策略。
