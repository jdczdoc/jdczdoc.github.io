# Internal SRAM Usage

Release Version: 1.0

Author Email: chenjh@rock-chips.com

Date: 2018.03

Security Level: Internal

---

**Preface**

**Overview**

This document provides a brief description of the Internal SRAM (excluding PMU SRAM) usage on various Rockchip platforms.

**Intended Audience**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Product Versions**

| **Chip Name**                                 |
| ---------------------------------------- |
| RK3036/RK312X/RK322X/RK3288/RK3328/RK3368/RK3399/RK3326/PX30 |

**Revision History**

| **Date**    | **Version** | **Author**   | **Description** |
| ---------- | ---------- | ------------ | --------------- |
| 2018-03-22 | V1.0       | Chen Jianhong | Initial version |

## Internal SRAM Usage on Each Platform

| Chip    | Total Size (bytes) | Start Address  | End Address (occupied) | Used Size (bytes)  |
| ------- | ------------------ | -------------- | ---------------------- | ------------------ |
| RK3036  | 8 * 1024           | 0x10080000     | 0x100805ac             | 1452               |
| RK312X  | 8 * 1024           | 0x10080000     | 0x10081584             | 5508               |
| RK322X  | 32 * 1024          | 0x10080000     | 0x10081d70             | 7536               |
| RK3288  | 96 * 1024          | 0xff700000     | 0xff7017c8             | 6088               |
| RK322XH | 32 * 1024          | 0xff090000     | 0xff095000             | 20480              |
| RK3328  | 32 * 1024          | 0xff090000     | 0xff093000             | 12288              |
| RK3368  | 64 * 1024          | 0xff8c0000     | 0xff8c2000             | 8192               |
| RK3399  | 192 * 1024         | 0xff8c0000     | 0xff8c6000             | 24576              |
| RK3326  | 16 * 1024          | 0xff0e0000     | 0xff0e4000             | 16 * 1024 (full)   |
| PX30    | 16 * 1024          | 0xff0e0000     | 0xff0e4000             | 16 * 1024 (full)   |

- The main uses of Internal SRAM on each platform: suspend/resume code, DDR frequency scaling code.

- The above data for 32-bit platforms is based on the OPTEE repository commit:

Branch: remotes/origin/develop-rk3228
Commit: 25074da plat-rockchip: add configure uart port function

- The above data for 64-bit platforms (excluding RK3326/PX30) is based on the ATF repository commit:

Branch: remotes/origin/develop-rk3399
Commit: 6aa5f84 plat: px30: suspend: support SLP_PLLS_DEEP option
