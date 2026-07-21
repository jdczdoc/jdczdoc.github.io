---
title: RTOS and AMP
sidebar_label: RTOS and AMP
sidebar_position: 10
description: Auxiliary-core RTOS, firmware loading, remoteproc, rpmsg, and shared memory.
---

# RTOS and AMP

V821 can run Linux and an RTOS concurrently.

```text
Linux core
├── remoteproc
├── rpmsg/rpbuf
└── shared memory and mailbox
        ⇅
RTOS core
├── peripheral tasks
└── low-power tasks
```

RTOS source is under `rtos/lichee`. Build it with the SDK environment and confirm which generated `.bin` file is packaged.

Remoteproc control:

```bash
cat /sys/class/remoteproc/remoteproc0/state
echo start | sudo tee /sys/class/remoteproc/remoteproc0/state
echo stop  | sudo tee /sys/class/remoteproc/remoteproc0/state
```

Check shared-memory addresses, cache synchronization, mailbox interrupts, resource tables, and protocol compatibility.
