---
title: BSP独立仓库
sidebar_position: 5
description: 说明T527 Linux 5.15中bsp、device和kernel仓库的职责及配置优先级。
---

# BSP独立仓库

Linux 5.15 的 BSP 独立仓库方案将全志驱动和 SoC 级配置从原生内核中分离，降低私有驱动与内核版本之间的耦合。

## 仓库职责

```text
longan/
├── bsp/       # 全志驱动、Kconfig、Makefile、SoC dtsi、公共配置
├── device/    # 板级 DTS、板级 defconfig、BoardConfig、分区配置
└── kernel/    # Linux 原生内核代码和标准接口
```

### bsp目录

```text
bsp/
├── configs/
├── drivers/
├── include/
├── Kconfig
├── Makefile
├── modules/
├── platform/
└── ramfs/
```

| 子目录 | 用途 |
|---|---|
| `configs/` | SoC 级 dtsi、公共或最小 defconfig |
| `drivers/` | USB、DMA、显示、音频、串口等全志驱动 |
| `modules/` | NAND、GPU 等独立模块 |
| `include/` | BSP 对外头文件 |
| `platform/` | SoC 平台相关文件 |
| `ramfs/` | 内存文件系统素材 |

### device目录

T527 板级差异通常位于：

```text
longan/device/config/chips/t527/configs/<BOARD>/
```

其中可能包含：

```text
board.dts
linux-5.15/board.dts
linux-5.15/bsp_defconfig
BoardConfig.mk
sys_config.fex
sys_partition.fex
```

实际目录以当前分支为准。

### kernel目录

执行 `./build.sh config` 后，内核目录中可能生成指向 BSP 仓库的软链接，例如：

```text
longan/kernel/linux-5.15/bsp -> ../../bsp
```

不要在软链接展开后的路径中误以为这是独立源码副本。驱动修改应直接提交到 `longan/bsp/`，避免清理或重新配置后丢失修改。

## defconfig优先级

同名 defconfig 同时存在时，常见优先级为：

```text
板级配置
    >
SoC级配置
    >
BSP公共配置
```

常见位置：

```text
# 板级
longan/device/config/chips/t527/configs/<BOARD>/linux-5.15/bsp_defconfig

# SoC级或default
longan/device/config/chips/t527/configs/default/linux-5.15/bsp_defconfig

# BSP公共配置
longan/bsp/configs/linux-5.15/*_defconfig
```

部分 T527 分支将板级 defconfig 直接放在 `<BOARD>/` 下，因此必须使用 `find` 确认：

```bash
find longan/device/config/chips/t527 longan/bsp/configs/linux-5.15 \
    -type f -name '*defconfig' -print
```

## 查找驱动的正确方法

以 UART 为例：

```bash
cd <ANDROID_TOP>/longan

grep -Rni "config.*SUNXI.*UART\|SERIAL_SUNXI" bsp kernel device 2>/dev/null | head -50
find bsp kernel -type f \
    \( -iname '*uart*.c' -o -iname '*serial*.c' \) \
    -print
```

查找到驱动后继续确认：

1. 驱动目录的 `Kconfig`。
2. 驱动目录的 `Makefile`。
3. 设备树节点的 `compatible`。
4. 当前 `.config` 中对应的 `CONFIG_` 宏。

## 新增驱动的基本组成

新增 BSP 驱动通常至少需要：

```text
bsp/drivers/<module>/
├── Kconfig
├── Makefile
├── <driver>.c
└── <driver>.h
```

并在上级 `Kconfig` 和 `Makefile` 中加入入口。然后完成设备树、defconfig、编译和板端验证。
