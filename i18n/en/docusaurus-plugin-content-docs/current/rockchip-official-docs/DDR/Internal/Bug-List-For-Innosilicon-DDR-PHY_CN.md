# **Bug list for Innosilicon DDR PHY**

Release Version: 1.0

Date: 2019.04.03

Author Email: typ@rock-chips.com

Security Level: Internal

---
**Preface**
Internal memo for the DDR team

**Overview**
This document serves as a memo recording bugs encountered with the Inno DDR PHY. It is intended for internal use by the DDR team only.

**Product Versions**
| **Chip Name**                            | **Kernel Version** |
| ----------------------------------- | -------- |
| RK322x,RK322xH,RK3368,rk3326,RK1808 | All kernel versions   |

**Intended Audience**
Internal engineers of the DDR team

**Revision History**
| **Date**    | **Version** | **Author**  | **Description** |
| ---------- | ---------- | ----------- | --------------- |
| 2019.04.03 | V1.0       | Tang Yunping |          |

---

[TOC]

---

## RK322x

​	1. Logic voltage 1.0v cannot run at 800M. Testing found that at 1.0v, the 800MHz clock is intermittent. Increasing the PLL VCO improves the clock discontinuity and also helps reduce the logic voltage, but it still cannot achieve the target of 800MHz at 1.0v.

​	2. There is a problem with the read gate switching between CS. When the read gate training results of the two CS differ on the 1x clock, for example when one CS result is 0x2f and the other CS result is 0x30, the 1x clock also needs to switch when the two CS switch. Since the 1x switching time is very long, this causes read anomalies. Increasing the diff\_cs\_rd\_gap can resolve this.

## RK3368

​	1. Same issue as RK322x.

​	2. The signal slew rate is low, and the margin for LPDDR3 signals is very small.

## RK3228H/RK3328

​	1. The RK de-skew switching has glitches, and the switching time between different DQs varies, with a maximum difference of nearly 800ps. The symptom is that if all RX de-skew values are set to 0, the valid window is relatively large, but when all RX de-skew values are set to 7, the valid window becomes smaller.
Solution: Link the de-skew switching timing with the read gate training result. Use the read gate training result to control the de-skew switching timing. For details, see the document "\\10.10.10.111\ddr_group\DDR_Documents\09_RK_DDR_Design_Documents\RK3228H\RANK Switching Issue Description and Solution.pdf"

​	2. The read gate switching still has issues. If using independent gates, the dfi\_cs\_rd\_gap needs to be increased. The current solution is still to fix the read gate result of CS0 for all CS.
​	3. In DDR4 mode, due to a remap error between ACT0 and CS0 inside the PHY, it affects the internal read gate and de-skew CS switching, but has no effect on the external CS0 and ACT signals. In practice, after DDR PHY power-up, the default de-skew and read gate used are from CS0. When there is access to CS1 (i.e., when dfi\_act\_n[1]/dfi\_cs\_n[1] is active), the de-skew and read gate switch to CS1 and can never switch back. Therefore, with 2 CS, the de-skew and read gate of CS0 are actually not effective. With a single CS, the CS0 read gate and de-skew do take effect.

## RK3326/PX30

​	1. Fixed the issue of excessively long read gate switching time. Each CS can only use its own read gate result, and it is no longer possible to use one CS's training result for all CS as before.
​	2. The actual read gate value changes with voltage, so it is necessary to ensure that the logic voltage does not vary too much.
​	3. Fixed the RD de-skew issue by performing glitch removal, aligning switching times, and setting the default switching time to the training result minus 1. To adjust the switching time, bit4 of 0x6e needs to be set to 1 to bypass and enable manual adjustment.
In practice, the default switching time is not optimal. It is actually configured as the read gate result plus 1, and the optimal switching time point differs between high and low frequencies. Therefore, the dfi\_cs\_rd\_gap is still increased to 2.
​	4. In DDR4 mode, due to a remap error between ACT0 and CS0 inside the PHY, it affects the internal read gate and de-skew CS switching, but has no effect on the external CS0 and ACT signals. In practice, after DDR PHY power-up, the default de-skew and read gate used are from CS0. When there is access to CS1 (i.e., when dfi\_act\_n[1]/dfi\_cs\_n[1] is active), the de-skew and read gate switch to CS1 and can never switch back. Therefore, with 2 CS, the de-skew and read gate of CS0 are actually not effective. With a single CS, the CS0 read gate and de-skew do take effect.

## RK1808

​	1. LPDDR3 ODT pin map error: the actual output is always 0. Fixed after ECO.
​	2. PD\_IDLE and SR\_IDLE entering dfi\_low\_power in DDR3/4 mode does not improve power consumption because the relevant circuit was missing gating in the PHY design. Fixed after ECO.
​	3. In LPDDR3 mode, when PD\_IDLE enters dfi\_low\_power at 800MHz, dfi\_lp\_wakeup needs to be increased to 4 to work properly. As the DDR frequency decreases, dfi\_lp\_wakeup can be reduced. The reason is that the VREF wakeup inside the PHY is later, causing read data errors.

​	4. The hold time between the analog and digital interfaces inside the PHY is insufficient. The symptom is that it cannot run normally at low frequency and high voltage. This is resolved by setting phyreg0x8[3:0] to 0xf.
​	5. The LPDDR2/LPDDR3 CKE signal phase is incorrect, being in-phase with CLK, causing the Self-refresh command to become a Power down command. Fixed after ECO. Before ECO, this was resolved by configuring phyreg0x16[3:0] to 9 to change the CKE phase to -180 degrees.
​	6. Chips after ECO have an RX de-skew switching issue, which requires adjusting the RX de-skew switching timing using the read gate value, similar to the previous PHY.
