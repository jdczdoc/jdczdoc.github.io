# U-Boot rkdevelop Memory Layout Guide

Release Version: 1.0

Author Email: chenjh@rock-chips.com

Date: 2018.02

Security Level: Internal

---

**Preface**

**Overview**

​	This document provides a brief description of the memory layout for Rockchip platforms, specifically for platforms using the U-Boot rkdevelop branch.

**Intended Audience**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Product Versions**

| **Chip Name**                                 | **U-Boot Branch** |
| ---------------------------------------- | :----------- |
| RK3036/RK3126C/RK3288/RK322X/RK3368/RK3328/RK3399 | rkdevelop    |

**Revision History**

| **Date**    | **Version** | **Author**    | **Description** |
| ---------- | ---------- | ------------ | --------------- |
| 2018-02-26 | V1.0       | Chen Jianhong | Initial version |

---

[TOC]

---

## Before Loading Kernel<u></u>

### ARM 64-bit Platform

| Start                     | Usage                                    | Description                              |
| ------------------------- | ---------------------------------------- | ---------------------------------------- |
| (DDR_END - 48M) ~ DDR_END | U-Boot logo(16M) + kernel logo(32M)      | reserved memory                         |
| ……                     | None                                        | /                                        |
| 132M ~ 148M(max)          | OP-TEE runtime space                               | 16M is the estimated Max value; completely invisible to the kernel (carved out by U-Boot)            |
| ……                    | None                                        | /                                        |
| 128M (occupies 8KB)              | HDMI parameter address                                 | reserved memory; used to pass HDMI configuration information            |
| 56M ~ 128M                | LMB memory pool + U-Boot code (after relocate) + flash buffer + idb buffer + malloc | /                                        |
| 48M (occupies 8MB)              | Miniloader runtime space                           | 8MB is the estimated Max value                               |
| ……                    | None                                        | /                                        |
| 34M (occupies 120bytes)           | OP-TEE memory info parameter start address                        | 120bytes is a fixed value; used to pass OP-TEE memory info;           |
| ……                    | None                                        | /                                        |
| 32M (occupies 120bytes)           | DDR capacity info parameter start address                           | 120bytes is the estimated Max value (can pass 7 bank blocks); used to pass total DDR capacity info; |
| ……                   | None                                        | /                                        |
| 2M (occupies 800KB)              | U-Boot code                              | 800KB is the estimated Max value                             |
| 1M ~ 2M                   | ATF and kernel shared memory, Last log                 | completely invisible to the kernel (carved out by U-Boot)                   |
| 0M ~ 1M                   | ATF runtime space                                  | completely invisible to the kernel (carved out by U-Boot)                   |

### ARM 32-bit Platform

| Start                     | Usage                                    | Description                              |
| ------------------------- | ---------------------------------------- | ---------------------------------------- |
| (DDR_END - 48M) ~ DDR_END | U-Boot logo(16M) + kernel logo(32M)      | reserved memory                         |
| ……                     | None                                        | /                                        |
| 132M ~ 148M(max)          | OP-TEE runtime space                               | 16M is the estimated Max value; completely invisible to the kernel (carved out by U-Boot)            |
| ……                    | None                                        | /                                        |
| 128M (occupies 8KB)              | HDMI parameter address                                 | reserved memory; used to pass HDMI configuration information            |
| 56M ~ 128M                | LMB memory pool + U-Boot code (after relocate) + flash buffer + idb buffer + malloc | /                                        |
| 48M (occupies 8MB)              | Miniloader runtime space                           | 8MB is the estimated Max value                               |
| 46M-48M                   | Last log space                               | /                                        |
| ……                    | None                                        | /                                        |
| 34M (occupies 120bytes)           | OP-TEE memory info parameter address                         | 120bytes is a fixed value; used to pass OP-TEE memory info;           |
| ……                    | None                                        | /                                        |
| 32M (occupies 120bytes)           | DDR capacity info parameter address                             | 120bytes is the estimated Max value (can pass 7 bank blocks); used to pass total DDR capacity info; |
| ……                    | None                                        | /                                        |
| 0M(occupies 800KB)               | U-Boot code                              | 800KB is the estimated Max value                             |

Summary: The main differences between sections 1.1 and 1.2 above:

(1) 0~2M space: On 64-bit platforms, used by ATF; on 32-bit platforms, used by U-Boot;

(2) 46~48M space: On 64-bit platforms, unused; on 32-bit platforms, used as last log (on 64-bit platforms, last log is in the 1~2M space);

Note:

When the system powers on, the maskrom loads miniloader to the 0x0 offset address in DDR, then miniloader relocates itself to the 48M offset address (reason: legacy practice). Therefore, on platforms with strict memory space requirements, special attention should be paid to the use of low addresses (e.g., last log cannot be placed at too low an address, otherwise it will be overwritten by miniloader).

## After Loading Kernel<u></u>

### ARM 64-bit Platform

| Start                     | Usage                                    | Description                              |
| ------------------------- | ---------------------------------------- | ---------------------------------------- |
| (DDR_END - 48M) ~ DDR_END | U-Boot logo(16M) + kernel logo(32M)  ( Kernel uses! ) | reserved memory; after logo display is complete, released by the display driver, then used by kernel |
| ……                   | kernel uses                                | /                                        |
| 132M ~ 148M(max)          | OP-TEE runtime space                               | completely invisible to the kernel (carved out by U-Boot)                  |
| ……                    | kernel uses                                | /                                        |
| 128M (occupies 8KB)              | HDMI parameter address ( Kernel uses! )                   | reserved memory; released by HDMI driver, then used by kernel   |
| ……                    | kernel uses                                | /                                        |
| 2M+512K(occupies 32M)            | Kernel is loaded by U-Boot to 2M+512K position, no self-decompression, starts running directly | Currently estimated max kernel size is 32M (adjustable)                     |
| 2M ~ 2M+512K              | 64-bit kernel boot address requirement (512K reserved before kernel code)       | Must be reserved                                     |
| 1M ~ 2M                   | ATF and kernel shared memory, Last log                 | completely invisible to the kernel (carved out by U-Boot)                   |
| 0M ~ 1M                   | ATF runtime space                                  | completely invisible to the kernel (carved out by U-Boot)                  |

### ARM 32-bit Platform

| Start                     | Usage                                    | Description                              |
| ------------------------- | ---------------------------------------- | ---------------------------------------- |
| (DDR_END - 48M) ~ DDR_END | U-Boot logo(16M) + kernel logo(32M)  ( Kernel uses! ) | reserved memory; after logo display is complete, released by the display driver, then used by kernel |
| ……                   | kernel uses                                | /                                        |
| 132M ~ 148M(max)          | OP-TEE runtime space                               | completely invisible to the kernel (carved out by U-Boot)                  |
| ……                    | kernel uses                                 | /                                        |
| 128M (occupies 8KB)              | HDMI parameter address ( Kernel uses! )                   | reserved memory; released by HDMI driver, then used by kernel   |
| ……                    | kernel uses                                | /                                        |
| 46M ~ 48M                 | Last log                                 | /                                        |
| 32M ~ 46M                 | Compressed kernel is loaded by U-Boot at 32M position              | Max 14M after kernel compression                            |
| 0M ~ 32M                  | Kernel self-decompresses at 0M position, then starts running                    | Max 32M after kernel self-decompression                          |

Summary: The main differences between sections 2.1 and 2.2 above:

(1) 0~2M space: On 64-bit platforms, used by ATF; on 32-bit platforms, used by U-Boot;

(2) Kernel load address: On 32-bit platforms, kernel is loaded at 32M, then self-decompresses to 0M and starts running; on 64-bit platforms, kernel is loaded at 2M+512K, no self-decompression, starts running directly;

(3) Regarding point (2), note that on 32-bit platforms, the 32M and 34M addresses have a reuse process. During the entire boot process: U-Boot first reads DDR and OP-TEE parameter info from 32M and 34M, then loads the kernel to the 32M location;

(4) 46~48M space: On 64-bit platforms, unused; on 32-bit platforms, used as last log (on 64-bit platforms, last log is in the 1~2M space);

(5) Regarding point (4), note that on 32-bit platforms, since 46~48M is always occupied by last log, the kernel size before decompression must be guaranteed to be at most 14M, i.e., between 32~46M. Otherwise, the last log will be corrupted!!
