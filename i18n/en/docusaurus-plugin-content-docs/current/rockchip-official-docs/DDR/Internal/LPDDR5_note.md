# LPDDR5 note

ID: RK-KF-YF-126

Release Version: V1.0.0

Date: 2020-09-02

Security Level: □Top-Secret   □Secret   ■Internal   □Public

---

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("COMPANY") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED, OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

DUE TO PRODUCT VERSION UPGRADES OR OTHER REASONS, THIS DOCUMENT MAY BE UPDATED OR MODIFIED FROM TIME TO TIME WITHOUT ANY NOTICE.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" are registered trademarks of the Company and owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved. ©2020 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no entity or individual may extract, copy, or distribute part or all of the content of this document in any form without the written permission of the Company.

Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---
**Preface**
Internal company learning material

**Overview**
This document records knowledge points and questions during the LPDDR5 learning process.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| null         | All kernel versions |

**Intended Audience**
DDR team internal engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Change Description** |
| ---------- | -------- | -------- | ------------ |
| 2020.09.02 | V1.0.0   | Tang Yunping |              |

**Table of Contents**

---
[TOC]
---

## 1 Overview

1. Speed reaches 6400Mbps, CK frequency 800MHz, WCK frequency 3200MHz.
2. Maximum capacity up to 32Gb. Default x16 one channel, supports byte mode.
3. 16 internal banks, supports 8bank/16bank/4BG&4Bank configurable modes.
4. FSP registers increased from two groups in LPDDR4 to three groups.
5. In addition to normal ZQ Calib, adds background Calib function.
6. Supports Command bus training, WCKCK Leveling (similar to WRLVL), Read DQ Calib, Write DQ Calib, RDQS training, etc.
7. Supports post package repair.
8. Supports TCSR (additional compensation for temperature differences across different areas of the die).
9. WCK2DQ interval Oscillator used to correct WCK2DQI/WCK2DQO drift caused by temperature and voltage, avoiding redo training.
10. CLK/WCK/RDQS support single ended mode.
11. Self-refresh still performed in deep sleep mode.
12. Excessive Activate commands may cause data anomalies; Refresh management command introduced to avoid this issue.
13. CAS command introduced to synchronize WCK signal with CK signal, and to implement Write X optional, RD/WR Data copy.
14. Adds RD/WR link ECC function.
15. Adds DVFSC/DVFSQ function to reduce power consumption.
16. Adds Duty cycle adjuster and Duty cycle monitor function.
17. Row address and bank address are similar to other types of memory, but column address is reduced to 6, with 4-bit burst addresses B0-B3 added. This essentially splits the 10-bit column address into a 6-bit column address plus a 4-bit burst address.

## 2 IO Behavior and Power Supply

1. CKE pin removed, RDQS_t/RDQS_c and WCK_t/WCK_c added to replace the original DQS. 6 CA signals total, CS is single-edge signal, CA is dual-edge signal. At low frequency, CK/RDQS/WCK can be configured as single-ended signal mode to reduce power consumption.
2. The newly added RDQS serves as the read DQ Strobe signal.
3. The newly added WCK must be supplied during RD/WR as the DQ working clock, and can be removed when idle. WCK also serves as the write DQ strobe signal.
4. CK signal needs to be continuously supplied during normal operation. CK frequency can be configured as 1/4 or 1/2 of WCK frequency to reduce power consumption and CA signal requirements. The 2:1 WCK:CK ratio only works at operating frequencies below 3200Mbps.
5. Power supply is divided into VDD1, VDD2H, VDD2L, and VDDQ. VDD1 1.8v for core, VDD2H 1.05v, VDD2L 0.9v. VDDQ 0.5v for IO.
6. CS and Reset_n on IO are special, powered by VDD2H power domain. Other CA and DQ are powered by VDDQ power domain. CS ODT and CA ODT are separate, only RZQ/3 is selectable. CS operating modes are divided into synchronous and asynchronous. Synchronous mode is similar to CA under normal operation, sampling CS via CK, with reference level at VDD2H/3. Asynchronous mode determines CS high/low level criteria similar to reset when entering power-down/self-refresh power down/deep sleep mode; specific high/low level ratio is TBD in JESD209-5A.

## 3 Read/Write Behavior

### 3.1 Burst Behavior

Burst length is not set in MR as with previous memory types, but distinguished by CA commands: WRITE and WRITE 32, READ and READ32 commands. In 8Bank mode, only BL32 is supported. In 16Bank and Bank group modes, BL16/BL32 are supported. In 8Bank mode which only supports BL32, READ/WRITE commands are BL32 commands, while READ32/WRITE32 commands are invalid. BL32 in BG mode actually returns the first 16 UI data, then 16 empty UI, then the remaining 16 UI data. This is because with only 16n prefetch needing to reach 6400 data rate for BL32, the second 16 UI data requires additional preparation time, which is not very efficient for performance. If accesses to other banks in different BGs are continuous, the 16 UI gap can be filled to keep the bus busy.

For writes, burst does not support interleaved mode, meaning BL16 start address must be 0x10 aligned (B3 must be 0), and BL32 start address must be 0x20 aligned (B3, B4/C0 must both be 0). Read addresses support start address 0x8 alignment (B0-B2 are always 0 and not reflected on the CA bus), but READ/READ32 commands do not carry B3 bit information; B3 information must be specified additionally via CAS command.

### 3.2 Read/Write Behavior

1. WCK2CK SYNC behavior: Due to the addition of the WCK signal, WCK is only needed during read/write and can be stopped when idle to save power. WCK runs at 2x or 4x the CK frequency. Inside the die, a divider divides WCK by 2 and synchronizes with CK. After division, WCK and CK rising edges may be aligned, or falling and rising edges may be aligned. A sync action is needed to synchronize WCK and CK. All Read/Write related commands using WCK require WCK2CK SYNC action, performed by sending CAS commands, divided into WS_RD/WS_WR/WS_FS. What is not understood is why the WCK sync action needs to differentiate between read/write and fast.
2. WCK2CK SYNC validity period: After WCK2CK SYNC, validity expires after RL + BL/n + RD(t'WCKPST/tCK) (when SYNC command immediately precedes read, subsequent commands can be read or write) or WL + BL/n + RD(t'WCKPST/tCK) (when SYNC command immediately precedes write, subsequent commands can be read or write) cycles. That is, if a Read/Write command is sent again within this period, no new Sync action is needed. If a Read/Write is initiated after this period, a new CAS command must be sent for WCK2CK Sync. The new validity period starts from the last read/write command. Therefore, if consecutive read/write operations all fall within the validity period, only the first read/write needs sync, subsequent ones do not.
3. WCK always on mode: In this mode, WCK is continuously supplied. This mode can be enabled to avoid repeated WCK2CK sync actions. Whether this mode is supported is determined by MR0[2]. WCK always on has some impact on power consumption. After always on mode, the WCK buffer can be turned off via CAS command WS_OFF to save power, but WCK2CK Sync must be redone when read/write is needed again. Alternatively, CAS-WCK_SUSPEND command can be sent to reduce some WCK tree power consumption. This command automatically puts WCK into suspend mode when idle, gating some clocks on the WCK tree, and automatically exits suspend during read/write. Unlike turning off WCK buffer, CAS-WCK_SUSPEND is automatic and does not require redoing WCK2CK Sync.
4. For read command, if WCK is not in Sync state, CAS WS_RD or WS_FS command must be sent first for WCK2CK Sync. During read, RDQS serves as the DQ strobe signal. RDQS can be configured as differential or single-ended output, or even disabled. The first DQ data for read returns at RL+tWCK2CK+tWCKDQO.
5. Write command is similar to read, requiring CAS WS_WR or WS_FS command for WCK2CK Sync. For masked write, 16B/BG mode only supports BL16, 8Bank mode only supports BL32. Masked write requires longer tCCDMW time, with gap 4 times that of normal tCDD.
6. Data copy low power function: This is an optional function, divided into read data copy and write data copy. For write data copy, when enabled via CAS command, DQ1-7 of the subsequent Write command do not need to be driven; the die copies DQ0 data to DQ1-7, similarly for DQ8-15. The CAS command needs to specify which data in BL16/BL32 should have this function enabled, with minimum granularity of 8 UI. Read data copy function is enabled via MR21[5]. When enabled, if the die detects that DQ1-7 data for 8 consecutive UI is all the same as DQ0, it pulls the first UI of the DMI pin high to inform the controller that the next 8 UI data is read data copy data. The die then only drives DQ0, while DQ1-7 are high impedance, similarly for DQ8-15. Read data copy can be enabled simultaneously with read DBI function. When both DBI and rd data copy are enabled, all DQ output in the first UI of each 8 UI burst. If the number of 1s is greater than 4, DM functions as read data copy; if the number of 1s is less than or equal to 4, DM functions as DBI signal.
7. Write X operation: Optional function that allows writing all 0s or all 1s for an entire burst without driving WCK and DQS. This function is sent via CAS command. When CAS WXSA/WXSB is high, write all 1s; when low, write all 0s. WCK does not need to be supplied, saving more power.
8. Write DM and DBI can be enabled simultaneously, similar to LPDDR4.

## 4 Functional Description

### 4.1 Bank Mode Configuration

1. LPDDR5 has 16 independent banks internally, which can form 3 bank modes: 16Bank, 4Bank group (each bank group contains 4 banks), and 8Bank mode.
2. 16Bank mode uses 16n prefetch, maximum speed 3200Mbps, supports BL16/BL32, page size 2048.
3. 4BG/4BK mode is similar to DDR4, also 16n prefetch, operating data rate requires above 3200Mbps, supports BL16, BL32, page size 2048.
4. 8Bank mode combines 2 banks into 1 bank, so the original 16 banks become 8 banks. Each original bank has 16n prefetch, combined each new bank has 16n+16n=32n prefetch. Supports all data rates above and below 3200Mbps, only supports BL32, page size 4096.
5. Bit width is also divided into x8 (byte mode) and x16. If x8 bit width, the page size mentioned above is halved.
6. For BG mode (4BG/4Bk) with BL32, the data behavior on DQ is two BL16s with a BL16 gap in between.

### 4.2 ZQ Calibration

ZQ Calibration is divided into Background Calibration and command-based Calibration modes. ZQ calibration is not supported in DVFSQ mode.

1. Command-based Calibration is similar to previous memory types. Send zqcalib start command to begin ZQ calibration, then zqcalib latch to update the calibration result. The die has ZQ Master die and non-ZQ Master die. Only ZQ Master die responds to zqcalib start command; non-ZQ Master die ignores it. The controller can send zqcalib start to all dies or only to ZQ master die. When zqcalib is complete, zqcalib latch command must be sent to all dies to synchronously update calibration results. At this time, ZQ master die synchronizes and updates calibration results to non-ZQ master die. Depending on the number of non-ZQ master dies, zqcalib latch command latency is tZQCAL4, tZQCAL8, or tZQCAL16. LPDDR5 may have more than one ZQ Master die.
2. Background mode: The die periodically calibrates impedance in the background (tZQINIT, MR28[3:2]). When impedance change is detected, MR4[5] (ZQUF) is set. When this bit changes, the controller needs to send ZQCal Latch command to update the latest calibrated impedance. Auto zqcalib is completed after power-on reset. After Tg time, zqcal latch command needs to be sent to update impedance. If background calib is enabled, the zqcalit start command is ignored by the die. If immediate calibration is needed in this mode, set MR28[1]=ZQ stop via MRW command, then reset the register; the die will recalibrate immediately.
3. In DVFSQ mode, set MR28 op1=ZQ stop to stop background calibration, then use ZQ reset command to reset ZQ to initial values.

### 4.3 Link ECC

Link ECC is an optional function, divided into Write Link ECC and Read ECC.

1. Write link ECC: Uses RDQS_t as the ECC bit transfer. For burst32, it is divided into 2 16-bit bursts for ecc. 16-bit DMI generates 6-bit ecc data, 16*8=128-bit DQ data generates 9-bit ECC data, total 15-bit ECC data, UI 0 of the burst is empty. ECC error results are recorded in MR43-45, where MR43 is the error counter. Actual errors need to be read from MR42; ECC results cannot be reported in real time, so this is more of a debugging method and not very helpful for system stability. Enabling write link ECC increases tWR/tWTR/tWTR_S/tWTR_L by 4 cycles.
2. Read link ECC: Similar to write, 9-bit ECC data generated from DQ is output to the controller via DMI pin. Compared to write, there is no DMI data, so 5 bits of DMI ECC data are missing. Read ECC is mutually exclusive with read DBI and read data copy functions; they cannot be enabled simultaneously. Enabling read link ECC adds additional RL, e.g., at 4800Mbps, 2 tck needs to be added (equivalent to 8 twck in 1:4 mode).

### 4.4 Duty Cycle Adjuster and Duty Cycle Monitor

1. Duty cycle adjuster (DCA): This module is located before the WCK divider inside the die. WCK duty cycle can be changed via MR30 to compensate for duty cycle anomalies. Adjustable from -7 to 7, the adjustment values are not linear. Adjusting WCK duty cycle also affects the duty cycle of read output RDQS and DQ. Therefore, the effect of DCA can be observed by measuring the RDQS duty cycle after adjusting WCK duty cycle. Note that after modifying WCK duty cycle, it is recommended to redo WCKCK leveling to realign WCK and CK phase.
2. Duty cycle monitor (DCM): Used to monitor WCK duty cycle. Results are output via MR26. A result of 1 indicates duty cycle greater than 50%, 0 indicates less than 50%. To improve the accuracy of duty cycle statistics, a flip function is added at MR26[1]. When enabled, WCK is inverted before DCM. That is, when enabled, the positive pulse width counted is the actual WCK negative pulse width. Comparing results with Flip enabled and disabled provides a more accurate duty cycle value. When Flip is enabled and DCA is used to adjust duty cycle, a positive DCA value increases the positive pulse width of WCK after Flip. DCM and DCA can be combined to keep WCK duty cycle as close to 50% as possible.

### 4.5 DVFS

DVFS function is divided into DVFSC and DVFSQ.

1. DVFSC dynamically adjusts core voltage. When DVFSC is enabled, the die core voltage automatically switches between VDD2H and VDD2L. DVFSC function is enabled or disabled through FSP frequency changes. DVFSC can only be enabled when DQ data rate is below 1600Mbps. When this function is enabled, tRCD/tRBTP increases by 1ns, and tWR/tWTR increases by 7ns.
2. When DVFSQ is enabled, VDDQ voltage can be reduced from the normal 0.5v to 0.3v. DVFSQ changes are recommended to follow FSP changes. ZQ calibration cannot take effect when DVFSQ is enabled, so zq reset command must be used to reset impedance to default values. It is recommended to redo training after VDDQ switching.

### 4.6 RDQS Toggle Mode

In this mode, RDQS outputs continuously, and WCK also needs to be continuously supplied. During this process, read, write, power down, deep sleep, mrr and other commands are not allowed. The specific purpose of this mode is unclear.

### 4.7 Refresh Management Command

Frequent active commands can cause data anomalies in the die. The number of ACT(active) commands needs to be managed. When ACT commands reach a certain level, RFM or refresh (REF) commands need to be sent to avoid this issue. Read MR27[0] to determine whether an RFM command is needed.

When RFMTH is greater than tREFIe, no additional RFM/REF commands need to be sent. When RFMTH is less than tREFIe, the controller needs to count RAA. When RAA reaches RAAMMT, it indicates the die cannot accept more ACT commands, and REF/RFM commands need to be sent to reduce the RAA value.

RAA: ACT command counter, the controller needs to count the number of ACT commands.

RAAIMT: MR27[5:1] RAA counter threshold for needing RFM command. When RAA reaches this value, it indicates REF/RFM commands are needed, but ACT commands can still be sent.

RAADEC: MR57[1:0], indicates the number of RAA counter decrements per RFM command. The number of RAA counter decrements per RFM command is RAADEC*RAAIMT. For REF commands, each REF command decrements RAA counter by RAAIMT. Self-refresh entry and exit do not affect the RAA counter value.

RAAMMT: Maximum allowed RAA count RAAMMT. When RAA counter reaches this value, no further ACT commands are allowed. RAAMMT = RAAIMT*RAAMULT (MR27[7:6]).

RFMTH = RAAIMT*tRC absolute min.

RFMSB: Number of sub-banks supported. If 1, sub-banks mode is not supported.

The die supports two types of RFM modes: per-bank mode and sub-bank mode:

1. Per-bank mode counts ACT commands per bank. Each bank has one RAA counter to count ACT commands. When RAA exceeds the limit RAAMMT, ACT commands cannot be sent. REF/RFM is needed to reduce RAA before further ACT commands can be sent.
2. Sub-bank mode divides each bank into 2 equal parts (assuming RFMSB=2). For example, if there are 16384 rows, it is divided into low 8192 rows and high 8192 rows, counting ACT commands separately. Each bank requires 2 RAA counters. If ACT of one half of the rows reaches RAAMMT, it does not affect normal ACT of the other half. RFM commands also correspondingly reduce the relevant RAA, without affecting the other RAA. Calculation method is the same as per-bank mode.

### 4.8 PASR and PARC

PASR: Controlled via MR23, 8 bits corresponding to the highest 8 rows of capacity. If the corresponding bit is 1, the corresponding row in all banks will not be refreshed during self-refresh.

PARC: Controlled via MR25[6]. Under normal state, if a refresh command encounters a row masked in PASR, the refresh operation is skipped directly.

### 4.9 ODT Behavior

1. CA/CLK ODT to ground. No odt pin. Configured directly via registers. Once enabled, it remains in enable state.
2. DQ odt: Automatically enabled during write command, disabled after completion. ODT value configured in MR11. Turn-on time: ODTLon + tODTon,min. Turn-off time: ODTLoff + tODToff.
3. WCK odt: Configured in MR18. Similar to CA odt, once enabled it remains always on. The difference is that odt is turned off during pd/sr-pd/deep sleep.
4. CS odt: Only RZQ/3 and disable are selectable (MR17[4]). Remains in the original state during CA/CLK odt pd, sr, sr-pd, and deep sleep.
5. NT-ODT: An ODT enabled when the bus is idle. During read/write, the ODT for the corresponding signal lines is disabled. Sync odt disable while nt-odt enable is not allowed. If NT-ODT is enabled, the soc odt setting value in MR17 needs to be set to the equivalent value of NT-ODT and the actual SOC side ODT in parallel.

### 4.10 TCSR

Since LP5 and the main controller are mounted together, the high temperature of the SoC may transfer to LP5. If the high temperature point is far from the LP5 temperature sensor and cannot be sensed, this may cause insufficient refresh rate and data unreliability. TCSR (MR13[0:1]) can be used to add a fixed temperature difference to compensate the value sampled by the die temperature sensor.

### 4.11 Single-Ended Mode

At 1600Mbps, CLK, WCK, RDQS can work in single-ended mode to reduce power consumption. ODT/NT-ODT needs to be disabled in this mode. RDQS can even be disabled, which requires the PHY to ensure it can correctly sample DQ.

WCK/RDQS single-ended/differential switching can be done directly via MRW or fsp modification, while CLK can only be modified during FSP frequency changes.

## 5 Training Functions

### 5.1 Command Bus Training

CBT is similar to LPDDR4. However, due to byte mode support, only DQ0-7 are valid during CBT. DQ8-DQ15 are not used. Since the CKE pin is removed, CBT is entered by driving DQ7 high after sending MRW. There are two modes: mode1 and mode2. Mode1 only trains CA and cannot set Vrefca. Mode2 adds Vrefca setting function. DMI selects whether DQ is used as output or input. On the rising edge of DMI, the DQ value is updated into VrefCA.

### 5.2 Read DQ Calibration

Similar to LPDDR4. Read values from MR34/MR33 via read dq calib command. The values of MR31/32 MR20[7] determine whether the corresponding DQ is inverted or 0.

### 5.3 WCK-DQ Training

1. Similar to Write DQ training. To achieve higher speed and save power, the path of DQ inside the die is shorter than DQS. Training is done via write/read FIFO. During Write FIFO, the DBI function is the same as DQ. That is, DMI value is written to the FIFO. Read FIFO can read out the written DMI value. FIFO depth is BL16*8 per pin (including DMI). Read/write FIFO is fixed in BL16 mode. Read FIFO cyclically reads FIFO[0]-[7] data. If fewer than 8 FIFOs are written by the write FIFO command, the read only returns written values for the first few entries, while subsequent entries are undefined. For example, if write FIFO only writes 3 entries, read still cycles 0..7->0...7, but only 0-2 return written values, 3-7 return undefined. During WR/RD FIFO, DM, WR/RD/DBI/ECC/DATA copy are all invalid. FIFO pointers are reset during power-on, reset, pd, deep sleep, and sr-pd.
2. DMI output mode supports two control modes during read FIFO and read dq calib (optional). Mode 1 is determined by rd dbi/ecc/copy MR configuration. Mode 2: as long as write DM or DBI is enabled, even if read DBI/ECC and read data copy are configured as disabled, read DMI output is still enabled. The advantage is that the RX DMI configuration does not need to be modified during write training.
3. WCK-RDQS_t/parity training mode: If write link ECC is enabled, RDQS_t is used as an ECC signal, so rdqs_t also needs to be trained. RDQS_t training can be enabled via MR46[2]=1. When enabled, RDQS_t data is written to the original DMI FIFO position. When reading FIFO, data is returned via DMI. That is, when this mode is enabled, DMI cannot be trained. This mode can only be enabled at WCK frequencies above 1.6G.

### 5.4 Read/Write Base WCK-RDQS_t Training

In addition to using rd/wr FIFO for wck-rdqs_t/parity training described in 5.3, training via Read/Write commands is also supported (optional, needs MR26[6] to confirm support). Enable via MR26[7]. This function essentially uses the rdqs_t pin to replace the DMI pin function during normal read/write commands for training. The data during training is actually written to DDR. Regardless of whether Write DBI is enabled, the DMI pin is ignored by the die.

## 6 Timing Comparison

1. RL affected by: byte mode, RD DBI and/or RD data copy, DVFSC, read link ECC.

   The same MR setting value corresponds to different RL depending on which functions are enabled. See JESD209-5A Page244, 7.4.8.

2. WL is not affected by Byte Mode, Write DBI/Data copy, ECC. Divided into Set A and Set B, selected via MR3[5].

3. When DVFSC is enabled, besides RL being affected, tRCD/tRBTP increases by 1ns, tWR/tWTR increases by 7ns.

4. In 8 bank mode compared to 16B, BG mode, tFAW increases from 20ns to 40ns, tRRD increases from max(5ns,2tck) to max(10ns, 2tck).

5. In byte mode compared to x16 mode, tWR and tWTR increase by 2ns.

6. Write link ECC: increases tWR/tWTR by 4ns.

7. At the same 3200 data rate, RL is equivalent to 36 cycles, WL equivalent to 20 cycles. Compared to LPDDR4's 28/14, the difference is quite noticeable.

## 7 Remaining Questions

1. WCK-DQ training: if wck-rdqs_t/parity training is enabled, DMI input is ignored. Does this mean that for RDQS training, two training runs are needed, once for DMI and once for RDQS?
2. Since WCK2CK fast sync is fast, can be used for both RD/WR, and works well for multi-rank, why do WCK2CK sync WR/RD still need to exist?
3. If WCK2CK sync fast works in multi-rank, rank0/rank1 WCK both need to be supplied. If Rank0 and Rank0 have different tWCK2CK, how can they be supplied simultaneously?
4. What is the internal implementation difference between WCK2CK sync WR and RD? Why are two separate commands needed?
5. Regarding the description of tRRD_L: Page263 has tRRD_L, Page219 does not, Page416 has L, Page455 does not. For BG mode, is there tRRD_L timing or not?
6. Regarding note2 in MR25 definition: when op5 of MR25 disables all CA odt, Vref CA uses a fixed value. What is this value? Is it not VrefCA?
7. How is CS RTT calculated?
8. How to view WCK2DQ Oscillator results? How to convert to time values?
9. What is DFE used for? The timing diagram shows DQ sending 2 more UI of 0 level during write. What is the read behavior?
10. Regarding rdqs used as single-ended signal: Note7 on Page404 describes that rdqs_c can be used as the single-ended signal for rdqs. Page236 describes that only rdqs_t can be used as the single-ended signal for rdqs.
11. The MR27 description on Page392 differs from the MR27 description on Page173.
12. Regarding RFM: if FMTH > trefie, even if RAA exceeds RAAMMT, no additional RFM command needs to be sent, correct?
13. What is the purpose of WL Set A and Set B? Why is Set B needed?
14. What is RDQS toggle mode generally used for?
15. The above are all questions from JESD209-5A. Is JESD209-5A the latest version? There are still many errors and TBDs.
