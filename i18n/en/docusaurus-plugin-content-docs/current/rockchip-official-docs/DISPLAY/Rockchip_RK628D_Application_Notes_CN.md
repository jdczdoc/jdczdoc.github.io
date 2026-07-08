# RK628D Application Notes

ID: RK-SM-YF-286

Release Version: V1.1.0

Date: 2021-05-26

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" shall be Rockchip's registered trademarks and owned by Rockchip.

All other registered trademarks or trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2021. Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no unit or individual may excerpt or copy any part or all of the content of this document without written permission from Rockchip, and may not distribute it in any form.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document mainly introduces the usage notes and interface characteristics of RK628D.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| RK628D   |        |

**Intended Audience**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author**   | **Date**    | **Description** |
| ---------- | ------------ | ------------ | --------------- |
| V1.0.0    | Wen Dingxian | 2021-04-06 | Initial version |
| V1.1.0 | Wen Dingxian | 2021-05-26 | 1. Added note that image rotation is not supported; 2. Removed MCLK usage restriction for Audio section; 3. Modified GVI/HDMI TX same-clock-source description; 3. Added description for interfacing with third-party MCU; 4. Added input/output interface characteristics description; 5. Added typical application scenario performance description; |

---

**Table of Contents**

[TOC]

---

## RK628D Usage Notes

| **Function Module** | **Notes** |
| ------------------- | --------- |
| All input/output interfaces | 1. Only progressive resolution is supported, interlaced resolution is not supported. 2. Image rotation is not supported, e.g. landscape input to portrait output. (Note: For HDMI To MIPI CSI application scenarios, the image can be rotated inside the AP after reception) |
| HDMI RX          | 1. HDMI RX supports 480P/576P/720P/1080P/4K and other CEA standard timings. If specific timing requirements exist, please contact RK technical support for evaluation. 4K60 only supports YUV420 format; other resolutions have no such limitation. 2. For HDMI To MIPI CSI application scenarios with cable connection, if YUV420 format support is needed, code modification is required. The current SDK code supports YUV422/YUV444/RGB formats and cannot auto-adapt between them. 3. If HDCP function support is needed, HDCP Key cannot be burned into RK628 and must be stored in external memory. When interfacing with third-party platforms other than RKAP, attention should be paid to adding HDCP Key read/write function support. |
| MIPI CSI TX      | 1. MIPI CSI TX image format only supports YUV422 8bit, maximum resolution 4K30, MIPI bitrate 1.2Gbps/lane, 4 lanes. |
| GVI/HDMI TX      | 1. In GVI/HDMI TX application scenarios, the clocks of RK628 and the input signal (HDMI/RGB/BT1120 IN) must share the same source, i.e., the AP must provide the clock source for RK628, and the clock frequency must be 24MHz. |
| MIPI DSI         | 1. If using a single MIPI display, it must be connected to DSI0. |
| Interfacing with third-party MCU | 1. When interfacing with third-party MCU using HDMI cable connection mode, only the following application scenarios are supported: HDMI To RGB/LVDS/MIPI DSI/MIPI CSI. |

## Input Interface Characteristics

| **Input interface** | **Typical Resolution** | **Typical Format** | **Max bit rate per lane** |
| :------------------ | :--------------------- | :----------------- | :------------------------ |
| HDMI                | 4K 60Hz                | YUV420/YUV422/YUV444/RGB888 (4K60 only supports YUV420; other resolutions have no limitation) | 3Gbps |
| BT1120              | 1080P 60Hz             | YUV422 8bit        | NA                        |
| RGB                 | 1080P 60Hz             | RGB888             | NA                        |

## Output Interface Characteristics

| **Input interface** | **Typical Resolution** | **Typical Format** | **Max bit rate per lane** |
| ------------------- | ---------------------- | ------------------ | ------------------------- |
| GVI                 | 4K 60Hz                | RGB888             | 3.75Gbps                  |
| Dual MIPI DSI       | 2.5K 60Hz              | RGB888             | 1.2Gbps                   |
| MIPI DSI            | 1080P 60Hz             | RGB888             | 1.2Gbps                   |
| Dual LVDS           | 1080P 60Hz             | RGB888             | 1 Gbps                    |
| LVDS                | 720P 60Hz              | RGB888             | 1 Gbps                    |
| MIPI CSI            | 4K 30Hz                | YUV422 8bit        | 1.2Gbps                   |
| BT1120              | 1080P 60Hz             | RGB888             | NA                        |
| RGB                 | 1080P 60Hz             | RGB888             | NA                        |

## Typical Application Scenario Performance

| **Application Scenario** | **Maximum Performance** |
| ------------------------ | ----------------------- |
| HDMI To GVI              | 4K 60Hz                 |
| HDMI To MIPI CSI         | 4K 30Hz                 |
| HDMI To MIPI DSI         | Dual MIPI DSI: 2.5K 60Hz Single MIPI DSI: 1080P 60Hz |
