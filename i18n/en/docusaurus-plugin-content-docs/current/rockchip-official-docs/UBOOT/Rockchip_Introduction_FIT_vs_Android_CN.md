# Linux Platform: FIT vs Android Comparison

ID: RK-SM-YF-135

Release Version: V1.0.0

Date: 2020-12-05

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" shall be Rockchip's registered trademarks and owned by Rockchip.

All other registered trademarks or trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. © 2020. Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no unit or individual may excerpt or copy any part or all of the content of this document without written permission from Rockchip, and may not distribute it in any form.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

This document mainly introduces the advantages of FIT compared to the Android firmware format, and recommends using FIT on Linux platforms.

**Overview**

This document (this guide) is primarily intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author**    | **Date**    | **Description** |
| ---------- | ------------- | :----------- | --------------- |
| V1.00      | Chen Jianhong | 2020-12-05   | Initial version |

---

**Table of Contents**

[TOC]

## Firmware Schemes

1. RK+Android

```
Miniloader => trust.img => uboot.img => boot.img/recovery.img (Android)
```

2. FIT

```
SPL => uboot.img(FIT: trust+uboot+mcu) => boot.img/recovery.img (Android or FIT)
```

Rockchip Linux SDK has been using scheme 1. Starting from RV1126, it switched to scheme 2 (subject to the actual SDK). Scheme 2 supports dynamically detecting and booting boot.img/recovery.img in either Android or FIT format.

## FIT Advantages

FIT has many advantages over the Android (v0 header) firmware format:

- FIT is a highly flexible firmware scheme supported and promoted by the U-Boot mainline, and it has been continuously optimized and maintained.
- FIT supports packaging any number of firmware images; Android currently only supports packaging three firmware images.
- FIT headers support adding any new attributes; Android headers are fixed.
- FIT uses DTS/DTB syntax to organize and generate firmware, and firmware parsing can directly reuse FDT library functions and toolkits.
- FIT is not limited to uboot.img/boot.img/recovery.img. Any data, files, or firmware collections can be packaged in FIT format (especially advantageous for scenarios requiring signature verification). For example: remote firmware and scripts during network upgrades can be packaged into a single FIT firmware collection, including: signatures, hashes, sub-firmware, etc.
- Secure boot of FIT:
  - The FIT secure boot process is more streamlined and clearer than Android. It can use a single key throughout, while Android requires multiple keys;
  - FIT can use a single key throughout the secure boot process, but can also support multiple keys when needed;
  - FIT supports RK format key acceleration factors (c or np), and can use the Crypto hardware module for encryption/decryption; the Android format does not support this;
  - FIT only needs to perform signature verification on the security header (a few KB in size), while Android can only perform signature verification on the entire firmware;
  - FIT supports integrity verification of individual sub-firmware, while Android can only perform integrity verification on the entire firmware.
  - FIT supports adding any new attributes, making the formulation of secure boot schemes very flexible.
- For fast boot requirements, the Android format has absolutely no advantages: it is nearly impossible to enable integrity verification and signature verification, but FIT makes this possible.

What are the advantages of Android over FIT? Current assessment: None.
