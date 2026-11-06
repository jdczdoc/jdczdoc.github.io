---
sidebar_position: 21
title: RTOS 与多核协同
description: x881 RTOS 与多核协同
---

# RTOS 与多核协同

V881 软件架构包含 Linux 主核与 RTOS 小核，通过 MSGBOX/RPMsg 交换消息，协助实时任务、无线和低功耗管理。主板上的 JL7018 是另一颗外部语音/低功耗器件，应单独区分其控制资源。

```text
rtos/board/v861_e907/
rtos/lichee/rtos/
rtos/lichee/rtos-components/
rtos/lichee/rtos-hal/
rtos/tools/
```

```bash
source build/envsetup.sh
lunch
mrtos menuconfig
mrtos
pack
# Clean when necessary
mrtos clean
```

常见产物是 `rt_system.bin`、`.elf`、`.map`、`.syms` 与 `sys_config.bin`，SDK 将所选板级镜像打包为 `amp_rv0.bin` 等文件。不要混用其他方案的镜像和 sys_config。

## 调试与资源分工

```text
backtrace [taskname]
# On the matching host-side RTOS environment
callstack backtrace.txt
```

启用 backtrace、Memleak/Double Free Check，保留同版本 ELF 解析地址。明确外设所有者、共享内存、消息格式及版本，避免 Linux 与 RTOS 同时操作同一控制器。联合分析 Linux 日志与小核回溯。
