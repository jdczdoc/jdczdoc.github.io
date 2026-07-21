---
title: Development Environment
sidebar_label: Development Environment
sidebar_position: 1
description: PICO2 build host, Ubuntu VM, source download, SSH, and file transfer.
---

# Development Environment

PICO2 uses the Tina Linux SDK. Ubuntu 20.04 64-bit is recommended for reproducible builds.

## Downloads

- Virtual machine tools: [Baidu Netdisk](https://pan.baidu.com/s/1fBd--CaDgS18s0UzGsW7xw?pwd=m5g6), code `m5g6`
- PICO2 Linux source: [Baidu Netdisk](https://pan.baidu.com/s/12bxLPTdhfPLIRAbgoBP41w?pwd=frqa), code `frqa`

Recommended VM resources:

| Resource | Recommendation |
| --- | --- |
| CPU | 8 cores or more |
| RAM | 16 GB minimum, 32 GB preferred |
| SDK disk | 300 GB minimum |
| Storage | SSD |
| Network | NAT or bridged |

![VM creation](../images/linux/image20.png)

```bash
sudo apt-get update
sudo apt-get install -y     git git-lfs make gcc g++ python3     net-tools openssh-server vim unzip zip rsync bc
sudo systemctl enable --now ssh
```

Use a normal user for builds and `sudo` for administration.
