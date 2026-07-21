# Rockchip DDR DQ Eye Tool Developer Guide

ID: RK-KF-YF-168

Release Version: V1.0.0

Date: 2021-03-05

Security Level: □Top-Secret   □Secret   ■Internal   □Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

The Rockchip DDR DQ Eye Tool provides the functionality to view the read/write eye diagram of each DQ by entering commands in U-Boot, allowing customers to check whether the DQ eye width of their own board design is sufficient.

**Product Versions**

| **Chip Name** | **Software Version** |
| ------------ | ------------ |
| RV1126  | U-Boot 2017.09 |
| RK356x | U-Boot 2017.09 |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Software Development Engineers

Technical Support Engineers

Hardware Engineers

**Revision History**

| **Version** | **Author** | **Revision Date** | **Description** |
| ---------- | --------| :--------- | ------------ |
| V1.0.0    | Yao Xuwei | 2021-03-05 | Initial version |

---

**Table of Contents**

[TOC]

---

## Rockchip DDR DQ Eye Tool Working Principle

This tool saves the results of DDR read eye training and write eye training during the Loader phase, and displays them graphically in the form of an eye diagram through the ddr_dq_eye command in U-Boot.

### Loader Saves DDR Read & Write Eye Training Results

(u-boot project drivers/ram/rockchip/sdram_rxxxxx.c, e.g., drivers/ram/rockchip/sdram_rv1126.c)

1. After each read & write eye training is completed, the save_rw_trn_min_max() function saves the maximum and minimum deskew values of each DQ to rw_trn_result.rd_fsp[x].cs[x] or rw_trn_result.wr_fsp[x].cs[x]. Note that deskew min & max must be saved after each cs completes, otherwise the results will be overwritten by the next training.

2. After the training of all cs in each fsp is completed, the save_rw_trn_deskew() function saves the deskew of each DQ to rw_trn_result.rd_fsp[x] or rw_trn_result.wr_fsp[x]; on the RV1126 platform, it also saves the min_value used by modify_dq_deskew() to restore the sampling position determined by training.

3. After DDR initialization is complete, save_rw_trn_result_to_ddr() stores the training result rw_trn_result to DDR (address RW_TRN_RESULT_ADDR).

### Viewing DDR DQ Read/Write Eye Diagram in U-Boot

(u-boot project cmd/ddr_tool/ddr_dq_eye.c)

1. Check whether the flag at address RW_TRN_RESULT_ADDR equals FSP_FLAG; if not, it means the Loader did not save the training result, returning CMD_RET_FAILURE.
2. Get the input parameters of ddr_dq_eye and select the training result of the corresponding fsp. If the parameter is empty, select the highest frequency. Rockchip-User-Guide-DDR-DQ-Eye-Tool specifies that the input parameter of ddr_dq_eye is the DDR clock frequency (in MHz); in fact, the input parameter can also be fsp or DDR clock frequency (in Hz).
3. Since the RK356x platform has 128 rd deskew and 256 wr deskew, printing the complete eye diagram may exceed the screen range. The macro PRINT_RANGE_MAX defines the maximum print length of the eye diagram, and the eye diagram length is proportionally scaled down to PRINT_RANGE_MAX.
4. Print DDR read & write eye training results in graphical eye diagram form.

## Determining the DDR DQ Minimum Eye Width Limit

After testing multiple EVBs to obtain the minimum eye width of the EVB, take the average of the EVB test minimum eye width and the JEDEC-specified minimum eye width (rounded up and converted to deskew) as the minimum eye width limit.

### RV1126 DDR DQ Minimum Eye Width Limit

#### LPDDR4

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1056MHz      | Read       | 18               | 6                    | 12                 |
| 1056MHz      | Write       | 19               | 6                    | 13                 |
| 924MHz       | Read       | 23               | 7                    | 15                 |
| 924MHz       | Write       | 22               | 7                    | 15                 |
| 784MHz       | Read       | 27               | 8                    | 18                 |
| 784MHz       | Write       | 26               | 8                    | 17                 |

> LPDDR4 tested on 15 EVBs total.

#### DDR4

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1056MHz      | Read       | 19               | 6                    | 13                 |
| 1056MHz      | Write       | 11               | 6                    | 9                  |
| 924MHz       | Read       | 22               | 7                    | 15                 |
| 924MHz       | Write       | 14               | 7                    | 11                 |
| 784MHz       | Read       | 27               | 8                    | 18                 |
| 784MHz       | Write       | 19               | 8                    | 14                 |

> DDR4 tested on 14 EVBs total.

#### LPDDR3

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1056MHz      | Read       | 22               | 7                    | 15                 |
| 1056MHz      | Write       | 18               | 7                    | 13                 |
| 924MHz       | Read       | 24               | 8                    | 16                 |
| 924MHz       | Write       | 22               | 8                    | 15                 |
| 784MHz       | Read       | 29               | 10                   | 20                 |
| 784MHz       | Write       | 27               | 10                   | 19                 |

> Only 5 of the RV1126 EVBs running normally from the Quality Department have LPDDR3, so the test sample is small.

#### DDR3

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1056MHz      | Read       | 21               | 6                    | 14                 |
| 1056MHz      | Write       | 22               | 6                    | 14                 |
| 924MHz       | Read       | 26               | 8                    | 17                 |
| 924MHz       | Write       | 25               | 8                    | 17                 |
| 784MHz       | Read       | 31               | 5                    | 18                 |
| 784MHz       | Write       | 31               | 5                    | 18                 |

> DDR3 tested on 20 EVBs total.

### RK356x DDR DQ Minimum Eye Width Limit

#### LPDDR4

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1560MHz      | Read       | 33               | 16                   | 25                 |
| 1560MHz      | Write       | 32               | 16                   | 24                 |
| 1332MHz      | Read       | 41               | 15                   | 28                 |
| 1332MHz      | Write       | 37               | 15                   | 26                 |
| 1184MHz      | Read       | 44               | 15                   | 30                 |
| 1184MHz      | Write       | 42               | 15                   | 29                 |
| 1056MHz      | Read       | 46               | 15                   | 31                 |
| 1056MHz      | Write       | 44               | 15                   | 30                 |

> LPDDR4 tested on 14 EVBs total.

#### DDR4

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1560MHz      | Read       | 44               | 15                   | 30                 |
| 1560MHz      | Write       | 29               | 15                   | 22                 |
| 1332MHz      | Read       | 46               | 15                   | 31                 |
| 1332MHz      | Write       | 34               | 15                   | 25                 |
| 1184MHz      | Read       | 50               | 13                   | 32                 |
| 1184MHz      | Write       | 38               | 13                   | 26                 |
| 1056MHz      | Read       | 52               | 13                   | 33                 |
| 1056MHz      | Write       | 41               | 13                   | 27                 |

> DDR4 tested on 13 EVBs total.

#### LPDDR3

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1184MHz      | Read       | 49               | 18                   | 34                 |
| 1184MHz      | Write       | 32               | 18                   | 25                 |
| 1056MHz      | Read       | 52               | 16                   | 34                 |
| 1056MHz      | Write       | 34               | 16                   | 25                 |
| 920MHz       | Read       | 60               | 17                   | 39                 |
| 920MHz       | Write       | 39               | 17                   | 28                 |
| 780MHz       | Read       | 72               | 18                   | 45                 |
| 780MHz       | Write       | 38               | 18                   | 28                 |

> LPDDR3 tested on 7 EVBs total.

#### DDR3

| DDR Clock Frequency | Read/Write | EVB Test Min Eye Width | JEDEC Specified Min Eye Width | Determined Min Eye Width Limit |
| ------------ | -------- | ---------------- | -------------------- | ------------------ |
| 1184MHz      | Read       | 47               | 17                   | 32                 |
| 1184MHz      | Write       | 44               | 17                   | 31                 |
| 1056MHz      | Read       | 52               | 15                   | 34                 |
| 1056MHz      | Write       | 46               | 15                   | 31                 |
| 920MHz       | Read       | 60               | 17                   | 39                 |
| 920MHz       | Write       | 51               | 17                   | 24                 |
| 780MHz       | Read       | 73               | 9                    | 41                 |
| 780MHz       | Write       | 53               | 9                    | 31                 |

> DDR3 tested on 9 EVBs total.

## Notes

1. The Rockchip DDR DQ Eye Tool is integrated into the DDR Test Tool. Before compiling U-Boot, enable it in menuconfig: Command line interface -> Enable ddr test tool.
2. The DDR initialization code for RV1126 (drivers/ram/rockchip/sdram_rv1126.c) is open source. The code for saving Read/Write Eye Training results during DDR initialization in the Loader is enabled via the CONFIG_CMD_DDR_TEST_TOOL macro. You can directly flash the Loader packaged after enabling this tool via menuconfig. The DDR initialization code for RK356x is not open source; the Loader compiled under dram_init in the updated u-boot-ddr project already supports this tool.
3. The Loader saves the training result at RW_TRN_RESULT_ADDR. RW_TRN_RESULT_ADDR is currently defined as (0x2000000 | 0x8000). 0x2000000 (32M) is the Kernel location, which is relatively safe during the Loader to U-Boot phase. The first 0x8000 (32K) space is reserved for FSP_PARAM_STORE_ADDR, used for DDR suspend/resume functionality in Trust.
4. The unit delay time of deskew varies across platforms. Each deskew on RV1126 is approximately 18.5ps. For details, refer to points 5 and 6 under "About de-skew" in the internal-docs\DDR\Internal\RV1126_DDR_note document. The unit deskew on RK356x is UI / 64.
5. In the eye diagram printed by this tool, the Sample position of RV1126 is not actually the final DQ perbit deskew used. To save power, the modify_dq_deskew() function in the Loader phase shifts all deskews together to the smallest possible position.
