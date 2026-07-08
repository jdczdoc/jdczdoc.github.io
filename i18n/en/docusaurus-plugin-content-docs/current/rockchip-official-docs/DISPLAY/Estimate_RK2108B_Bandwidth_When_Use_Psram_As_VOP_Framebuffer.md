# RK2108B PSRAM as Display Buffer Bandwidth Evaluation

ID: RK-KF-YF-087

Release Version: V1.0.0

Date: 2020.05.20

Security Level: □Top-Secret   □Secret   ■Internal   □Public

------

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". FUZHOU ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" shall be Rockchip's registered trademarks and owned by Rockchip.

All other registered trademarks or trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2020. Fuzhou Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no unit or individual may excerpt or copy any part or all of the content of this document without written permission from Rockchip, and may not distribute it in any form.

Fuzhou Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

------

**Preface**

**Overview**

**Product Versions**

| **Date**   | **Version** | **Author**    | **Description** |
| ---------- | ---------- | ------------- | --------------- |
| 2020-03.20 | V1.0       | Huang Jiachai | Initial release |
|            |            |               |                 |

------
[TOC]
---

## Overview

In the Pisces project, the M1 SRAM size is 1M. The system software needs to occupy part of the storage space, making it impossible to achieve some display effects with larger resolutions or bit widths. Therefore, it is necessary to evaluate the solution of using external PSRAM as a display buffer on M1. The main risk point is the impact of PSRAM bandwidth on display effects.

Since M1 cannot connect external PSRAM, the RK2108B platform with external PSRAM is used for testing.

## Hardware Environment

- Main board: RK2108B EVB board
- Display: 720x1280 video mode MIPI panel
- PSRAM chip: AP memory APS6404L-xSQ 64 Mb, operating frequency range: 109~133MHz (non-page boundary crossing)
- RK2108B SCLK_SFC1_SRC maximum supported frequency: 150MHz
- SCLK_SFC1_SRC actual operating frequency: 132MHz
- 4-wire QPI interface, theoretical maximum bandwidth: 132 * 4 / 8 = 66 MBps

## CPU-only PSRAM Access Bandwidth

Execute the test command: qpi_psram. The CPU continuously reads and writes 4M of random data to the 0x1c000000 address space. Test results:

| Test Item | Speed  |
| --------- | ------ |
| Read      | 23 MB/s |
| Write     | 24 MB/s |
| Copy      | 12 MB/s |

## VOP-only PSRAM Access Bandwidth

Execute the test command: display_test color_bar. The VOP accesses data in PSRAM according to the specified width, height, format, and frame rate:

| Image Size | Bit Width    | Frame Rate | VOP Bandwidth Required | Display Effect |
| ---------- | ------------ | ---------- | ---------------------- | -------------- |
| 720x1280   | 16bit/pixel  | 30 fps     | 52.73 MBps             | error          |
| 720x1280   | 8bit/pixel   | 45 fps     | 39.55 MBps             | ok             |
| 720x1280   | 8bit/pixel   | 30 fps     | 26.37 MBps             | ok             |
| 720x1280   | 4bit/pixel   | 45 fps     | 19.78 MBps             | ok             |
| 720x1280   | 4bit/pixel   | 30 fps     | 13.18 MBps             | ok             |

## VOP and CPU Simultaneous PSRAM Access Bandwidth

Steps:

1. Execute the test command: display_test color_bar. The VOP continuously accesses data in PSRAM according to the specified width, height, format, and frame rate;
2. Execute the test command: qpi_psram. qpi_psram performs read, write, and read+write tests separately to obtain the CPU's PSRAM access bandwidth capability;

Since the display operates in video mode, the VOP continuously fetches data from PSRAM. This case constructs the worst-case bandwidth scenario in actual application, where the VOP and CPU access PSRAM in a time-shared interleaved manner. The test results are shown in the table below:

| Image Size | Bit Width   | Frame Rate | CPU Read PSRAM Bandwidth | CPU Write PSRAM Bandwidth | Display Effect |
| ---------- | ----------- | ---------- | ------------------------ | ------------------------- | -------------- |
| 720x1280   | 8bit/pixel  | 45 fps     | 7 MB/s                   | 6 MB/s                    | ok             |
| 720x1280   | 8bit/pixel  | 30 fps     | 12 MB/s                  | 11 MB/s                   | ok             |
| 720x1280   | 4bit/pixel  | 45 fps     | 15 MB/s                  | 14 MB/s                   | ok             |
| 720x1280   | 4bit/pixel  | 30 fps     | 18 MB/s                  | 17 MB/s                   | ok             |

## Conclusion

1. The CPU-only PSRAM access bandwidth is approximately: 23~24MBps;
2. The VOP (DMA) only PSRAM access bandwidth at 720x1280@45fps with 8bit width is approximately: 39.55 MBps;
3. When the VOP operates at 720x1280@30fps with 4bpp, the CPU's PSRAM access bandwidth is approximately 17~18 MBps. Compared to the CPU's PSRAM bandwidth requirement (13.18 Mbps) at 720x1280@30fps with 4bpp, there is ample margin.
