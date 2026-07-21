---
title: RTOS小核与AMP
sidebar_label: RTOS小核与AMP
sidebar_position: 10
description: V821 RTOS工程、固件编译、remoteproc、共享内存、rpmsg和AMP调试。
---

# RTOS小核与AMP

V821 包含 Linux 大核和 RTOS 小核，可通过 AMP 方式并行运行。

## RTOS 工程

主要目录：

```text
rtos/
└── lichee/
    ├── freertos/
    ├── projects/
    ├── rtos-components/
    └── tools/
```

编译流程：

```bash
source build/envsetup.sh
m rtos
```

RTOS 固件会被复制到打包目录，由 Boot0/U-Boot 或 Linux remoteproc 加载。

## AMP 架构

```text
Linux大核
├── remoteproc
├── rpmsg/rpbuf
├── shared memory
└── mailbox/interrupt
        ⇅
RTOS小核
├── AMP service
├── device task
└── low-power task
```

## 小核固件查找

常见覆盖路径：

```text
bin/*.bin
configs/*/bin/*.bin
configs/*/*/bin/*.bin
configs/*/*/*/bin/*.bin
```

应确认最终 pack 使用的是哪个固件，避免修改后没有进入镜像。

## remoteproc

```bash
ls /sys/class/remoteproc/
cat /sys/class/remoteproc/remoteproc0/state
echo start | sudo tee /sys/class/remoteproc/remoteproc0/state
echo stop  | sudo tee /sys/class/remoteproc/remoteproc0/state
```

## 通信与日志

- Vring 的 AVAIL/USED 队列用于消息缓冲。
- `rpmsg` 适合控制消息。
- `rpbuf` 适合共享大块数据。
- `amp_shell` 和 trace log 用于获取小核控制台信息。

调试重点：

```text
共享内存地址是否一致
Cache同步是否正确
中断/邮箱是否触发
资源表是否匹配
小核固件是否为最新
Linux与RTOS协议版本是否一致
```
