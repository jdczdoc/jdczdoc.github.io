---
sidebar_position: 21
title: RTOS and multicore coordination
description: x881 RTOS and multicore coordination
---

# RTOS and multicore coordination

V881 software combines a Linux application core and RTOS MCU using MSGBOX/RPMsg for real-time, wireless and low-power cooperation. The board JL7018 is a separate external voice/low-power device with its own resources.

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

Typical output is rt_system.bin, .elf, .map, .syms and sys_config.bin; the SDK packages the selected board firmware as amp_rv0.bin or its release-specific equivalent. Keep firmware and sys_config from the same board.

## Debugging and resource ownership

```text
backtrace [taskname]
# On the matching host-side RTOS environment
callstack backtrace.txt
```

Enable backtrace and memory/double-free checks and retain the matching ELF for symbols. Define peripheral ownership, shared memory and message versions; avoid simultaneous controller access. Correlate Linux logs with MCU backtraces.
