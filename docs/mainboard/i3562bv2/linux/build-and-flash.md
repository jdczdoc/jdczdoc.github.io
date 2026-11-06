---
title: Linux 编译与烧录
description: 当前 Linux 用户手册给出的源码包名称为 x3562linux20240628.tar.gz，资料目录为 DVDx3562/source/linux。源码包名称可能随发布批…
---

# Linux 编译与烧录

## 1. SDK 信息

当前 Linux 用户手册给出的源码包名称为 `x3562_linux_20240628.tar.gz`，资料目录为 `DVD_x3562/source/linux`。源码包名称可能随发布批次变化，应以项目实际交付包为准。

## 2. 编译环境

手册示例使用 Ubuntu 16.04 / 18.04，并列出 Git、GCC、多架构库、设备树编译器、U-Boot 工具、OpenSSL、Python pyelftools、ADB / Fastboot 等依赖。

> 旧版手册中的 Ubuntu 和依赖包版本较老。新主机环境请优先使用 SDK 自带说明和实际编译报错确定依赖，不要照搬已过时的软件源或强制降级系统 GCC。

## 3. 选择配置

进入源码根目录：

```bash
./build.sh -h
./build.sh lunch
```

手册示例在 `lunch` 菜单中选择配置项 `2`。该序号可能随 SDK 版本变化，执行时应根据菜单中显示的 I3562 / RK3562 配置名称选择，不要盲目固定输入数字。

## 4. 编译步骤

```bash
# 编译 U-Boot
./build.sh uboot

# 编译 Linux 5.10 内核
./build.sh kernel-5.10

# 编译 Buildroot 或 Debian 根文件系统
./build.sh buildroot
# 或
./build.sh debian

# 打包升级固件
./build.sh updateimg
```

文件系统目标名称以当前 SDK 的 `./build.sh -h` 输出为准；手册示例写法为 `./build.sh buildroot/debian`，需按实际 SDK 脚本支持的目标执行。

## 5. 主要输出文件

编译输出统一放在 `rockdev` 目录。手册列出的主要文件包括：

| 文件 | 说明 |
|---|---|
| `MiniLoaderAll.bin` | 烧录工具引导文件 |
| `uboot.img` | U-Boot 镜像 |
| `boot.img` | 包含 `kernel.img`、`resource.img` |
| `rootfs.img` / `rootfs.ext4` | 根文件系统镜像 |
| `parameter.txt` | 分区布局与加载地址配置 |
| `misc.img` | 杂项资源 |
| `recovery.img` | Recovery 镜像 |
| `oem.img` | OEM 数据 |
| `userdata.img` | 用户数据分区 |
| `update.img` | 整包升级固件 |

## 6. Windows 烧录

1. 安装 SDK 中 `RKTools/windows/Release_DriverAssitant` 下的 USB 驱动。
2. 打开 SDK 自带 AndroidTool。Linux 手册指出该平台需要使用对应版本的 AndroidTool，且驱动版本需匹配。
3. 选择“升级固件”，加载 `rockdev/update.img`。
4. 按住板上的 RECOVERY / 对应烧录按键，再连接 USB OTG 和 12 V 电源，使设备进入 Loader 或 Maskrom。
5. 工具识别设备后执行升级，完成后等待设备重启。

不同板卡批次的按键丝印、USB 端口和进入 Loader / Maskrom 的操作可能不同，实际操作以板上标识及 SDK 配套烧录说明为准。

## 7. 串口

硬件手册定义 UART0 为 3.3 V TTL 调试串口。Linux 用户手册给出 SecureCRT 1,500,000 baud 示例，picocom 示例为 115200 baud；两者存在差异。请以当前 U-Boot、Kernel 配置及实际串口日志验证波特率。
