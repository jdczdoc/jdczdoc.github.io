# RV1109 DDR note

ID: RK-KF-YF-092

Release Version: V1.1.0

Date: 2020-05-28

Security Level: □Top-Secret   □Secret   ■Internal   □Public

---

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company", hereinafter the same) makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, and content in this document. This document is provided only as a reference for usage guidance.

Due to product version upgrades or other reasons, this document may be updated or modified periodically without any prior notice.

**Trademark Statement**

"Rockchip", "瑞芯微", and "瑞芯" are all registered trademarks of the Company, owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved © 2020 Rockchip Electronics Co., Ltd.**

Beyond the scope of reasonable use, no unit or individual may excerpt or copy any part or all of the content of this document without the written permission of the Company, and may not distribute it in any form.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website: [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---
**Preface**
DDR team internal memo

**Overview**
This document serves as a record of questions related to the rv1109 DDR PHY.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| RV1109       | All kernel versions |

**Intended Audience**
DDR team internal engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Description** |
| ---------- | -------- | -------- | ------------ |
| 2020.02.12 | V1.0.0   | Tang Yunping   |              |
| 2020.05.28 | V1.1.0   | Tang Yunping   | Added descriptions     |

**Table of Contents**

---
[TOC]
---

## NOC

	msch: If there are 2 CS, the selected ddrconf must have a "D" suffix. This means that when 2 CS are used and the capacity is smaller than the ddrconf capacity, there will be holes in the ddr space. If the D position is in the high bits, the rank size in msch also needs to be configured according to ddrconf. If the D position is between Bank and col, the rank size should be configured according to the actual size.

## About IO Swapping

1. PHY supports CMD line swapping for all types except LPDDR4.
2. PHY supports DQ whole-group swapping, but does not support intra-group DQ swapping.
3. For LPDDR4, since the DQ used for CA training is fixed, swapping the entire DQ group will cause CA training abnormalities.
4. DDR4 read training uses MPR in staggered mode. If DQ is swapped, the corresponding check pattern also needs to be modified accordingly. See 《INNO_DDR_COMBO_PHY_DS_V1p8_TO_RK.pdf》 page86. The check pattern does not distinguish between cs0 and cs1. Therefore, if the DQ order of the two CS is inconsistent, you can first set the check pattern to the cs0 mapping, complete the training, then change to the cs1 mapping and perform cs1 training.
5. LPDDR4 DQ8-15 can actually be swapped, but hardware swapping is not recommended. During CA training and read training, the DQ8-15 swap order can be fixed. DQ0-7 cannot be swapped.
6. Regarding DQ whole-group swapping, it is actually a swap performed when the phy byte is sent to DFI. In 16bit mode, DFI must select the lower 16bit as valid, and then select the corresponding phy byte to enable based on the DFI byte. For example, if phy reg0x4f is set to 0xE4, bit[0:1]=3 means byte0 on the DDR PHY interface is mapped to byte3 on the DFI interface. bit[2:3]=2 means byte1 on the DDR PHY interface is mapped to byte2 on the DFI interface. And so on, byte2 on the DDR PHY interface is mapped to byte1 on DFI, and byte3 on the DDR PHY interface is mapped to byte0 on DFI. In 16bit mode, to enable DFI byte0 and byte1, the corresponding DDR PHY bytes 2 and 3 need to be enabled, so reg0xf[3:0] needs to be configured as 0xc. In 8bit mode, DDR PHY byte3 needs to be enabled, so reg0xf[3:0] should be configured as 0x8.

## Other DDR PHY Issues

1. Previously on gf22, reg0x8 needed to be fixed to 0xf to solve the insufficient hold time issue on the 1x interface. -- This issue has been fixed on rv1109.
2. The PHY internal RX DQS has a default delay of 80-120ps (about 5 de-skew units) relative to DQ. For comparison, 1808 has 7 de-skew units.
4. Confirm that RZQ is connected to GND.
6. Read gate also has 4 sets of fsp: To update the read gate value in the corresponding fsp, you can bypass the read gate, and then update the bypassed value to the fsp through reg0xc[5]. You can read out the read values in the fsp through reg0xc0-0xc5, 0xf0-0xf5.
8. Default value of write training DQS: wrlvl has its own fsp (not shown in the datasheet block diagram), and wr training also has its own fsp (perbit skew update will update to the wr training fsp). After wrlvl is completed, the result will be stored in the wrlvl fsp. When wr training is triggered, it will automatically use the wrlvl result as the dqs default value for training. If wrlvl is not done, the dqs default value during wr training is 7. If you want to change the default dqs value of wr training, you can enable reg_wr_train_dqs_default_bypass and then set the dqs default value through the two registers reg_l_train_dqs_default and reg_r_train_dqs_default.
9. The default values in all fsp are the same as the default values in the perbit skew register.
10. For LPDDR4 CA_ODT, in normal mode it is normally controlled by dfi_odt, but dfi_odt cannot keep dfi_odt asserted all the time. So it needs to be configured for PHY control. Set reg_lpddr4_ca_odt_sel=1 (reg0x20[6]) to enable, then control the ca odt during normal operation via reg_lpddr4_ca_odt[1:0] (reg0x20[5:4]). If reg_lpddr4_ca_odt_sel=0, it is controlled by dfi_odt.
11. The phy rx vref is configured through reg0x118/128/138/148[0:7] and reg0x71[5]. Refer to page79 table41 for details. Due to design issues, reg0x118 and reg0x138 will read back as 0, but the actually written values do take effect.
18. Read training, write training, wrlvl, and read gate training must all be done one CS at a time, just like read gate training. You cannot train both CS at once. That is, reg_rdtrain_cs_sel and reg_wrtrain_cs_sel must be configured as 1 or 2, not 0. Only CA training can have both CS configured to trigger and complete training simultaneously.
11. The controller requires that in LPDDR4 mode, dfi_t_rddata_en and dfi_tphy_wrlat timings calculated using the formula provided by phy need to be further reduced by 3. This means that the CWL of LPDDR4 must be greater than or equal to 8.
12. The vref out output internal resistance of the PHY is about 25Kohm. If the external capacitor is too large, the vref settling time will be very long.

## About CA Training

1. Default value of CA training clk: based on the default value in the corresponding fsp. Before training, the clk default value needs to be updated to the fsp first. Keeping clk at the middle value will make CA training more accurate.
2. The CA training 2cs flow has an error in the Figure8 flow. There are actually 4 frequency changes that need to wait for 4 dfi_cat_freq_change_req, which means the 8 steps of "Frequency change from x to y" and "Frequency change from y to x" need to be repeated once more.
3. During CA training, the FSP-WR written by the PHY to LP4 is determined by the MR13 register in the PHY. The PHY will send MR13 first before sending other MRs during training.
4. The Vref (CA) range used during CA training is determined by reg0x1e[6] and reg0x1f[6] to select which range. The actual result in reg0x3ae/0x3af/0x3be/0x3bf/0x3ce/0x3cf/0x3de/0x3df only has bit[0:5] valid and does not contain range information.
5. The reg0x55/reg0x56 registers compensate for the CS 75% Modulation cs training mode in real time. Even when the Modulation cs training mode is disabled, it still takes effect. So if this function is disabled, reg0x55/reg0x56 need to be set to 0. During CA training, CS is not compensated, so there is no need to clear this register before training.
7. reg_train_reg_update_en controls part of the logic in CA training. After training is complete, the training logic can be gated to save power.
7. During vref training in CA training and write dq training, inno actually finds the min and max values of vref and takes the average. In lp4mode, the maximum vref value is only 42%, and our write signal vref optimal value is likely around 40%, which means the vref training result is likely to deviate significantly from the optimal position.

## About Read Training

1. Read training only supports vref training in predefine mode.

2. About the read training pattern

   LPDDR3: MR32 and MR40 are sent alternately, which is actually 0xcc55.

   DDR4: page0 MPR0-3 staggered mode.

3. Default value of dqs during training: set through reg_l_rd_train_dqs_default and reg_r_rd_train_dqs_default.

4. During read training, DQS stays fixed based on the register reg_*_rd_train_dqs_default setting value while DQ scans. When DQ reaches the boundary, DQS will move one unit in the opposite direction by default. If DQS reaches the boundary, an error will be reported. After training is complete, reg0x242, reg0x243, reg0x2c2, reg0x2c3 represent the DQS training result.

## About de-skew:

1. About cmd perbit de-skew: Only LPDDR4 has 4 sets; other types of memory chips only have one set, output directly from registers. For LPDDR4 read fsp cmd de-skew, the value is selected through reg_cmd_invdelaysel_sel (reg0x386[5:0]) and output from reg0x3e0. To update the cmd de-skew configuration in fsp, use reg22[6] to directly update all cmd de-skew register values to the corresponding FSP. reg0x10[7:6] selects which cs to update to: bit7 corresponds to cs1, bit6 corresponds to cs0, 0 is active.
2. The perbit de-skew register values for tx/rx DQ cannot be used directly; they must be updated to the corresponding FSP to take effect.
3. All update behaviors, including cmd/rx/tx de-skew/read gate and rx vref updates, require the DFI clk to work properly. That is, the phy system reset and auto low power must also be exited before they can be properly updated to the phy.
4. The rx de-skew switching bug encountered on 1808 -- inno replied that it has been fixed in the backend implementation.
5. The perbit de-skew test function can obtain the delay information per unit de-skew through the internal counter. Configure reg0xa5[7]=0, wait for a period of time, then clear it, and calculate the delay value through reg0xbe and reg0xbf. `per de-skew delay=32/(63 * freq1x * （reg0xbf[2:0] << 8 | reg0xbe[7:0]）)`. Where freq1x is the 1x clock frequency, i.e., 1/2 DDR freq. Note that when enabling the statistics again, it cannot be updated; a restart is required to see the new statistics result.
6. The de-skew delay is greatly affected by voltage. Measured results show that increasing vdd_logic by 100mv speeds up the de-skew delay per unit by about 20%. For comparison, on RK1808, increasing voltage by 100mv only speeds it up by 10%.
7. The more de-skew inserted on the signal line, the greater the power consumption. Whether for power consumption or because de-skew is affected by voltage and temperature, the de-skew should be set as small as possible in practice.

## About wrlvl

	wrlvl is actually the memory chip using the rising edge of DQS to sample CLK. If the rising or falling edge of DQS and CLK happen to align, the sampled result over the entire interval may be indeterminate. In the wrlvl design, inno does not repeatedly confirm the point where the 0-to-1 transition is found. If the initial position happens to be where the DQS and CLK falling edges are aligned, there is a probability that due to the indeterminate sampled level, it will be misjudged as a successful wrlvl point. For this issue, it is recommended to keep the phase difference between CLK and DQS within half a cycle for safety. Since the phase difference between CLK and DQS is not affected by frequency, wrlvl can be completed at a low frequency (such as 333MHz). At high frequencies, wrlvl is not performed, and the wrlvl result obtained at 333MHz is used directly.

## Drive Strength Related Configuration

1. The lowest bit of the cmd and clk drive strength is always on. Only the upper 4 bits are adjustable.

2. The actual drive strength and odt strength should refer to "DDR_PHY IO_simulation_guide_RockChip.pdf". The drive strength and odt strength provided in "INNO_DDR_COMBO_PHY_DS_V1p9_TO_RK.pdf" are not accurate.

3. The zqcalib result is read through reg_odtpu_zqcalib_sel[1:0] and (reg6d[3:2]) / reg_drvpu_zqcalib_sel[1:0] (reg6d[1:0]) to read the four levels of training values. 00  --->40ohm，01  --->60ohm，10  --->80ohm，11  --->120ohm。

4. slew rate：`byte0:reg0x117[4:0],byte1:reg0x127[4:0],byte2:reg0x137[4:0],byte3:reg0x147[4:0]。clk/ca:reg0x106[4:0]`。The slew rate adjustment trend is: 0 gives the maximum slew rate, and 0x1f gives the minimum slew rate. In practice, it was found that when configured as 0x0, 0x1, 0x8, 0x9, 0xc, 0xd, it is basically ineffective. When configured as 0x2, 0x3, 0x6, 0x7, 0xa, 0xb, 0xe, 0xf, the slew rate function works normally.

5. LPDDR4 DQ drive pull-down always-on is configured through reg0x114[3]/reg0x124[3]/reg0x134[3]/reg0x144[3], 0: enable, 1: disable. Default is disabled.

6. About weak pull-up/pull-down:

   The 300ohm weak pull-up/pull-down on DQS actually has a design bug and cannot be enabled under normal conditions. For ECO'd chips, to solve the problem of DQS positive pulse width being too wide, this 300ohm weak pull-up/pull-down was moved to the tx end, and this set of weak pull-up/pull-down no longer exists on the rx end. Inno's read gate training in DDR4 mode requires the DQS weak pull-up/pull-down to be enabled in advance before the read signal returns, keeping DQS in a high state. Since this set of weak pull-up/pull-down was moved away, DDR4 can no longer enable this set of weak pull-up/pull-down during read gate training. The read preamble training mode or 2tck read preamble is needed to complete read gate training normally.

   reg0x103[7]  :  cmd weak pull-up, enabled when 0. reg0x103[6]  :  cmd weak pull-down, enabled when 1.

   byte0：reg0x115[1]  : dq weak pull-up, enabled when 0. reg0x115[0]  : dq weak pull-down, enabled when 1.

   reg0x114[5]  dqsb weak pull-up, enabled when 0 (2K ohm). reg0x114[4]  dqs weak pull-down, enabled when 1 (2K ohm).

   reg0x114[1]  dqs weak pull-up, simultaneously dqsb weak pull-down, enabled when 0 (300 ohm). reg0x114[0]  dqs weak pull-down, simultaneously dqsb weak pull-up, enabled when 1 (300 ohm).

   byte1：reg0x125[1]  : dq weak pull-up, enabled when 0. reg0x125[0]  : dq weak pull-down, enabled when 1.

   reg0x124[5]  dqsb weak pull-up, enabled when 0 (2K ohm). reg0x124[4]  dqs weak pull-down, enabled when 1 (2K ohm).

   reg0x124[1]  dqs weak pull-up, simultaneously dqsb weak pull-down, enabled when 0 (300 ohm). reg0x124[0]  dqs weak pull-down, simultaneously dqsb weak pull-up, enabled when 1 (300 ohm).

   byte2：reg0x135[1]  : dq weak pull-up, enabled when 0. reg0x135[0]  : dq weak pull-down, enabled when 1.

   reg0x134[5]  dqsb weak pull-up, enabled when 0 (2K ohm). reg0x134[4]  dqs weak pull-down, enabled when 1 (2K ohm).

   reg0x134[1]  dqs weak pull-up, simultaneously dqsb weak pull-down, enabled when 0 (300 ohm). reg0x134[0]  dqs weak pull-down, simultaneously dqsb weak pull-up, enabled when 1 (300 ohm).

   byte3：reg0x145[1]  : dq weak pull-up, enabled when 0. reg0x145[0]  : dq weak pull-down, enabled when 1.

   reg0x144[5]  dqsb weak pull-up, enabled when 0 (2K ohm). reg0x144[4]  dqs weak pull-down, enabled when 1 (2K ohm).

   reg0x144[1]  dqs weak pull-up, simultaneously dqsb weak pull-down, enabled when 0 (300 ohm). reg0x144[0]  dqs weak pull-down, simultaneously dqsb weak pull-up, enabled when 1 (300 ohm).

## About WRITE TRAINING

1. Due to PHY design issues, Write training must ensure WL is greater than 3.
2. DM is not trained, and the DM actual value uses the same de-skew value as DQ0 within each group. Therefore, DM and DQ0 need to be of equal length.
