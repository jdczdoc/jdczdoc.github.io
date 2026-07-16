---
title: RTOS小核与AMP
sidebar_position: 16
description: "V821 RISC-V MCU RTOS编译、固件、remoteproc、rpmsg和AMP调试"
---

# RTOS小核与AMP

## 软件架构

V821采用Linux大核与RISC-V MCU小核协同。常电或快起方案可由BOOT0/U-Boot加载RTOS，也可由Linux remoteproc管理小核。

![V821 AMP架构](./linux-amp-architecture.png)

## RTOS目录

```text
rtos/board/v821_e907/          板级配置
rtos/lichee/rtos/              RTOS内核和工程
rtos/lichee/rtos-components/   组件
rtos/lichee/rtos-hal/          HAL驱动
```

## 编译

```bash
source build/envsetup.sh
lunch
mrtos
```

输出通常位于：

```text
rtos/lichee/rtos/build/img/
├── rt_system.bin
├── rt_system.elf
├── rt_system.map
└── rt_system.syms
```

SDK会将镜像复制为：

```text
device/config/chips/v821/configs/<board>/bin/amp_rv0.bin
```

清理和配置：

```bash
mrtos clean
mrtos menuconfig
```

## 内存布局

- Linux内核起始地址需满足4MB对齐。
- OpenSBI地址应固定并满足128KB对齐，同时配置PMP保护。
- RTOS、vring、rpbuf和no-map保留区不能重叠。
- U-Boot会重定位到DRAM末端，末端不能被大块保留内存占满。

## remoteproc

板端检查：

```bash
ls /sys/class/remoteproc/
cat /sys/class/remoteproc/remoteproc0/state
echo start > /sys/class/remoteproc/remoteproc0/state
echo stop  > /sys/class/remoteproc/remoteproc0/state
```

具体节点和启动方式取决于方案是否已经在BOOT阶段启动小核，不能重复启动同一个核。

## 通信

- vring：维护available和used队列。
- rpmsg：消息通道，适合控制和小数据。
- rpbuf：共享大块buffer，适合音视频数据。
- 中断/mailbox：通知对端队列或状态变化。

## 日志与调试

- `amp_shell`用于AMP控制台。
- trace log用于获取小核日志。
- 保留`rt_system.elf`和`.map`用于地址符号化。
- 关注栈溢出、double free、共享buffer越界、缓存一致性和启动顺序。
