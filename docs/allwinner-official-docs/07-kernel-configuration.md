---
title: Kernel配置
sidebar_position: 7
description: 使用Longan menuconfig、loadconfig和saveconfig管理T527 Linux 5.15配置。
---

# Kernel配置

BSP 独立仓库方案下，内核配置应通过 Longan 构建系统管理。不要直接在 `kernel/linux-5.15` 中执行传统的 `make menuconfig`，否则可能修改到构建系统不使用的 `.config`。

## 打开配置界面

```bash
cd <ANDROID_TOP>/longan
./build.sh menuconfig
```

## 查找配置项

在 menuconfig 中按 `/`，输入关键字或 `CONFIG_` 宏。例如查找 UART：

```text
SERIAL_SUNXI
SUNXI_UART
8250
```

搜索结果会显示：

- 配置项路径。
- 当前值。
- 依赖条件。
- 被哪个选项选择。

若配置项不可选，先检查依赖项，而不是直接手改 defconfig。

## 保存配置

```bash
./build.sh saveconfig
```

部分 SDK 支持指定文件：

```bash
./build.sh saveconfig bsp_defconfig
```

保存后确认实际修改位置：

```bash
git status --short
find device/config/chips/t527 bsp/configs/linux-5.15 \
    -type f -name '*defconfig' -mmin -10 -print
```

## 加载指定配置

```bash
./build.sh loadconfig <defconfig名称或路径>
./build.sh menuconfig
./build.sh saveconfig <defconfig名称或路径>
```

不要把 `out/.../kernel/build/.config` 直接复制为 defconfig。完整 `.config` 和精简 defconfig 的语义不同，直接复制容易把临时依赖和自动选择项带入方案配置。

## 检查最终.config

```bash
find out -type f -path '*/kernel/build/.config' -print

grep -n '^CONFIG_SERIAL_SUNXI=' \
    out/t527/<BOARD>/kernel/build/.config 2>/dev/null
```

若路径不同：

```bash
CONFIG_FILE=$(find out -type f -path '*/kernel/build/.config' | head -1)
echo "$CONFIG_FILE"
grep -n 'CONFIG_<目标宏>' "$CONFIG_FILE"
```

常见状态：

```text
CONFIG_XXX=y     # 编译进内核
CONFIG_XXX=m     # 编译成模块
# CONFIG_XXX is not set
```

## 配置与DTS的关系

一个硬件功能正常工作通常需要同时满足：

```text
驱动源码存在
  +
Kconfig已启用
  +
Makefile已编译
  +
设备树节点已启用且参数正确
  +
硬件连接与供电正常
```

只打开 `menuconfig` 而没有启用 DTS，或者只修改 DTS 而驱动未编译，设备都不会正常 probe。

## 编译确认

```bash
./build.sh kernel 2>&1 | tee /tmp/t527-kernel-build.log
```

检查驱动是否参与编译：

```bash
grep -i '<驱动文件名或模块名>' /tmp/t527-kernel-build.log
find out -type f -name '<模块名>.ko' -print
```

内建驱动没有 `.ko`，应通过 `.config`、`vmlinux` 符号和启动日志确认。
