---
sidebar_position: 3
title: Interface Resources
description: X8883CV1 Interface Resources
---

# Interface Resources

The tables retain the source function, pin number, signal, power domain and voltage. Signal identifiers are unchanged. The domain column does not replace the electrical specification of a high-speed PHY. See [Pin Definitions](./x8883-pin-definition.md) for all 200 pins.

## Display Interfaces

DSI0/DSI1 provide two display interfaces with clock, data, TE, reset and backlight PWM. Route DSI at 100 Ω differential and provide a separate backlight boost/constant-current supply. DP uses Type-C Alt Mode; the source specifies 100 Ω for AUX and 90 Ω for main lanes. Adapt panel timing and supplies in the device tree.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| DSI1 | 2 | DSI1_D2P_T0C | VDDIO | 1.8 |
| DSI1 | 3 | DSI1_D2N_T0B | VDDIO | 1.8 |
| DSI1 | 4 | DSI1_D0P_T0C | VDDIO | 1.8 |
| DSI1 | 5 | DSI1_D0N_T1A | VDDIO | 1.8 |
| DSI1 | 6 | DSI1_CK0P_T1B | VDDIO | 1.8 |
| DSI1 | 7 | DSI1_CK0N_T1C | VDDIO | 1.8 |
| DSI1 | 8 | DSI1_D1P_T2A | VDDIO | 1.8 |
| DSI1 | 9 | DSI1_D1N_T2B | VDDIO | 1.8 |
| DSI1 | 10 | DSI1_D3P_T2C | VDDIO | 1.8 |
| DSI1 | 11 | DSI1_D3N | VDDIO | 1.8 |
| DSI0 | 13 | DSI0_D2P_T0A | VDDIO | 1.8 |
| DSI0 | 14 | DSI0_D2N_T0B | VDDIO | 1.8 |
| DSI0 | 15 | DSI0_D0P_T0C | VDDIO | 1.8 |
| DSI0 | 16 | DSI0_D0N_T1A | VDDIO | 1.8 |
| DSI0 | 17 | DSI0_CK0P_T1B | VDDIO | 1.8 |
| DSI0 | 18 | DSI0_CK0N_T1C | VDDIO | 1.8 |
| DSI0 | 19 | DSI0_D1P_T2A | VDDIO | 1.8 |
| DSI0 | 20 | DSI0_D1N_T2B | VDDIO | 1.8 |
| DSI0 | 21 | DSI0_D3P_T2C | VDDIO | 1.8 |
| DSI0 | 22 | DSI0_D3N | VDDIO | 1.8 |
| Panel/Touch | 53 | DSI_TE | VDDIO | 1.8 |
| Panel/Touch | 54 | LCM_RST | VDDIO | 1.8 |
| Panel/Touch | 55 | GPIO_CTP0_RST | VDDIO | 1.8 |
| Panel/Touch | 56 | EINT_CTP0 | VDDIO | 1.8 |
| Panel/Touch | 142 | DISP_PWM1 | VDDIO | 1.8 |
| Panel/Touch | 143 | DISP_PWM | VDDIO | 1.8 |

## Camera Interfaces

CSI0 through CSI3 and CAM control signals support multiple cameras. Route CSI at 100 Ω; keep MCLK away from switching supplies, pull control buses up to the camera I/O rail and add connector ESD protection. Confirm lane/PHY mode and ISP support for each sensor.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| CAM | 65 | CAM_CLK1 | VDDIO_CAM | 1.8 |
| CAM | 66 | CAM_CLK4 | VDDIO_CAM | 1.8 |
| CAM | 67 | CAM_I3C_SCL2 | VDDIO_CAM | 1.8 |
| CAM | 68 | CAM_I3C_SDA2 | VDDIO_CAM | 1.8 |
| CAM | 69 | CAM_RST1 | VDDIO_CAM | 1.8 |
| CAM | 70 | CAM_I3C_SCL4 | VDDIO_CAM | 1.8 |
| CAM | 71 | CAM_I3C_SDA4 | VDDIO_CAM | 1.8 |
| CAM | 72 | R_CAM3_RST0 | VDDIO_CAM | 1.8 |
| CSI3 | 81 | CSI3A_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI3 | 82 | CSI3A_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI3 | 83 | CSI3A_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI3 | 84 | CSI3A_L1N_T1A | VDDIO_CAM | 1.8 |
| CSI3 | 85 | CSI3A_L2P_T1B | VDDIO_CAM | 1.8 |
| CSI3 | 86 | CSI3A_L2N_T1C | VDDIO_CAM | 1.8 |
| CSI3 | 87 | CSI3B_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI3 | 88 | CSI3B_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI3 | 89 | CSI3B_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI3 | 90 | CSI3B_L1N | VDDIO_CAM | 1.8 |
| CSI2 | 92 | CSI2A_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI2 | 93 | CSI2A_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI2 | 94 | CSI2A_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI2 | 95 | CSI2A_L1N_T1A | VDDIO_CAM | 1.8 |
| CSI2 | 96 | CSI2A_L2P_T1B | VDDIO_CAM | 1.8 |
| CSI2 | 97 | CSI2A_L2N_T1C | VDDIO_CAM | 1.8 |
| CSI2 | 98 | CSI2B_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI2 | 99 | CSI2B_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI2 | 100 | CSI2B_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI2 | 101 | CSI2B_L1N | VDDIO_CAM | 1.8 |
| CSI1 | 103 | CSI1A_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI1 | 104 | CSI1A_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI1 | 105 | CSI1A_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI1 | 106 | CSI1A_L1N_T0A | VDDIO_CAM | 1.8 |
| CSI1 | 107 | CSI1A_L2P_T0B | VDDIO_CAM | 1.8 |
| CSI1 | 108 | CSI1A_L2N_T0C | VDDIO_CAM | 1.8 |
| CSI1 | 109 | CSI1B_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI1 | 110 | CSI1B_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI1 | 111 | CSI1B_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI1 | 112 | CSI1B_L1N | VDDIO_CAM | 1.8 |
| CSI0 | 114 | CSI0A_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI0 | 115 | CSI0A_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI0 | 116 | CSI0A_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI0 | 117 | CSI0A_L1N_T0A | VDDIO_CAM | 1.8 |
| CSI0 | 118 | CSI0A_L2P_T0B | VDDIO_CAM | 1.8 |
| CSI0 | 119 | CSI0A_L2N_T0C | VDDIO_CAM | 1.8 |
| CSI0 | 120 | CSI0B_L0P_T0A | VDDIO_CAM | 1.8 |
| CSI0 | 121 | CSI0B_L0N_T0B | VDDIO_CAM | 1.8 |
| CSI0 | 122 | CSI0B_L1P_T0C | VDDIO_CAM | 1.8 |
| CSI0 | 123 | CSI0B_L1N | VDDIO_CAM | 1.8 |
| CAM | 125 | CAM_CLK3 | VDDIO_CAM | 1.8 |
| CAM | 126 | CAM_RST2 | VDDIO_CAM | 1.8 |
| CAM | 127 | CAM_CLK2 | VDDIO_CAM | 1.8 |
| CAM | 128 | CAM_I3C_SCL8 | VDDIO_CAM | 1.8 |
| CAM | 129 | CAM_RST3 | VDDIO_CAM | 1.8 |
| CAM | 130 | CAM_I3C_SDA8 | VDDIO_CAM | 1.8 |
| CAM | 131 | EINT_CAM_PMIC1_IRQB | VDDIO_CAM | 1.8 |
| CAM | 132 | CAM_I3C_SCL9 | VDDIO_CAM | 1.8 |
| CAM | 133 | CAM_I3C_SDA9 | VDDIO_CAM | 1.8 |

## USB and DP

One USB 3.2 Gen1 DRD interface supports USB 2.0, Host/Device operation, ADB, download and DP Alt Mode. Route USB differential pairs at 90 Ω, configure CC for the intended role and protect VBUS with current limiting and ESD protection.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| USB2 | 159 | USB_DP | VDDIO | 1.8 |
| USB2 | 160 | USB_DM | VDDIO | 1.8 |
| USB3/DP | 161 | SSUSB_TXP_P2 | VDDIO | 1.8 |
| USB3/DP | 162 | SSUSB_TXN_P2 | VDDIO | 1.8 |
| USB3/DP | 163 | SSUSB_RXP_P2 | VDDIO | 1.8 |
| USB3/DP | 164 | SSUSB_RXN_P2 | VDDIO | 1.8 |
| USB3/DP | 165 | DP_AUXN | VDDIO | 1.8 |
| USB3/DP | 166 | DP_AUXP | VDDIO | 1.8 |
| USB3/DP | 167 | SSUSB_TXP_P1 | VDDIO | 1.8 |
| USB3/DP | 168 | SSUSB_TXN_P1 | VDDIO | 1.8 |
| USB3/DP | 169 | SSUSB_RXP_P1 | VDDIO | 1.8 |
| USB3/DP | 170 | SSUSB_RXN_P1 | VDDIO | 1.8 |

## PCIe

PCIe Gen3 ×1 supports NVMe and other high-speed devices. Use 85 Ω differential for data and 100 Ω for the reference clock. Provide the required TX AC coupling and verify PERST/WAKE/CLKREQ pulls and sequencing.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| PCIe | 60 | PCIE_CLKREQN | VDDIO | 1.8 |
| PCIe | 61 | PCIE_WAKEN | VDDIO | 1.8 |
| PCIe | 62 | PCIE_PERSTN | VDDIO | 1.8 |
| PCIe | 74 | PCIE_LN0_TXP | VDDIO | 1.8 |
| PCIe | 75 | PCIE_LN0_TXN | VDDIO | 1.8 |
| PCIe | 76 | PCIE_LN0_RXP | VDDIO | 1.8 |
| PCIe | 77 | PCIE_LN0_RXN | VDDIO | 1.8 |
| PCIe | 78 | PCIE_CKP | VDDIO | 1.8 |
| PCIe | 79 | PCIE_CKN | VDDIO | 1.8 |

## System Control, Sensors and Keys

Signals include reset, watchdog, RTC clock, SCP interrupts, I3C, SPI2, UART0, a 2×2 keypad and GPIO. GPIO is in the 1.8 V domain; use level translation for 3.3 V peripherals.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| I3C0 | 31 | I3C_SDA0 | VDDIO | 1.8 |
| I3C0 | 32 | I3C_SCL0 | VDDIO | 1.8 |
| PERI_EN | 33 | PERI_EN0 | VDDIO | 1.8 |
| PERI_EN | 34 | PERI_EN1 | VDDIO | 1.8 |
| System | 35 | SRCLKENA0 | VDDIO | 1.8 |
| System | 36 | SYSRSTB | VDDIO | 1.8 |
| System | 37 | WATCHDOG | VDDIO | 1.8 |
| System | 38 | RTC32K_1V8_F | VDDIO | 1.8 |
| SCP | 39 | SCP_EINT0 | VDDIO | 1.8 |
| SCP | 40 | SCP_I3C_SCL3 | VDDIO | 1.8 |
| SCP | 41 | SCP_I3C_SDA3 | VDDIO | 1.8 |
| SCP | 42 | SCP_EINT1 | VDDIO | 1.8 |
| SCP | 43 | SCP_I3C_SCL0 | VDDIO | 1.8 |
| SCP | 44 | SCP_I3C_SDA0 | VDDIO | 1.8 |
| SCP | 45 | SCP_EINT_A_GYRO1 | VDDIO | 1.8 |
| SCP | 46 | SCP_EINT_ALSPS | VDDIO | 1.8 |
| SPI2 | 47 | SPI2_MO | VDDIO | 1.8 |
| SPI2 | 48 | SPI2_MI | VDDIO | 1.8 |
| SPI2 | 49 | SPI2_CK | VDDIO | 1.8 |
| SPI2 | 50 | SPI2_CSB | VDDIO | 1.8 |
| GPIO | 51 | BPI_D_BUS18 | VDDIO | 1.8 |
| GPIO | 52 | BPI_D_BUS19 | VDDIO | 1.8 |
| GPIO | 57 | BPI_D_BUS17 | VDDIO | 1.8 |
| GPIO | 58 | BPI_D_BUS16 | VDDIO | 1.8 |
| GPIO | 63 | BPI_D_BUS5 | VDDIO | 1.8 |
| GPIO | 64 | BPI_D_BUS4 | VDDIO | 1.8 |
| AP_GOOD | 134 | AP_GOOD | VDDIO | 1.8 |
| Keypad | 135 | KPCOL1 | VDDIO | 1.8 |
| Keypad | 136 | KPCOL0 | VDDIO | 1.8 |
| Keypad | 137 | KPROW1 | VDDIO | 1.8 |
| Keypad | 138 | KPROW0 | VDDIO | 1.8 |
| GPIO | 139 | BPI_D_BUS6 | VDDIO | 1.8 |
| UART0 | 140 | UTXD0 | VDDIO | 1.8 |
| UART0 | 141 | URXD0 | VDDIO | 1.8 |
| I3C7 | 144 | I3C_SCL7/MIPI3_D_SCLK | VDDIO | 1.8 |
| I3C7 | 145 | I3C_SDA7/MIPI3_D_SDATA | VDDIO | 1.8 |
| I2C6 | 146 | I2C_SCL6/MIPI2_D_SCLK | VDDIO | 1.8 |
| I2C6 | 147 | I2C_SDA6/MIPI2_D_SDATA | VDDIO | 1.8 |
| GPIO | 148 | BPI_D_BUS12 | VDDIO | 1.8 |
| PWRKEY | 149 | PWRKEY | VDDIO | 1.8 |

## Audio Interfaces

Signals include I2S0/I2S1/I2S2 and analog headphone, microphone, detection and bias connections. Route single-ended I2S at 50 Ω, isolate analog audio from high-speed and power noise, and provide a filtered amplifier supply. Confirm pin multiplexing and carrier implementation before using SPDIF/PDM.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| I2S1 | 59 | I2S1_LRCK | AVDD_AUD | 1.8 |
| I2S2 | 150 | I2S2_DO | AVDD_AUD | 1.8 |
| I2S2 | 151 | I2S2_DI | AVDD_AUD | 1.8 |
| I2S2 | 152 | I2S2_LRCK | AVDD_AUD | 1.8 |
| I2S2 | 153 | I2S2_BCK | AVDD_AUD | 1.8 |
| I2S0 | 154 | I2S0_DO | AVDD_AUD | 1.8 |
| I2S0 | 155 | I2S0_DI | AVDD_AUD | 1.8 |
| I2S0 | 156 | I2S0_LRCK | AVDD_AUD | 1.8 |
| I2S0 | 157 | I2S0_BCK | AVDD_AUD | 1.8 |
| Audio | 177 | HP_EINT | AVDD_AUD | 1.8 |
| Audio | 178 | AU_HSN/AU_LOLP | AVDD_AUD | 1.8 |
| Audio | 179 | AU_HSP/AU_LOLN | AVDD_AUD | 1.8 |
| Audio | 180 | AU_HP_R | AVDD_AUD | 1.8 |
| Audio | 181 | AU_REFN | AVDD_AUD | 1.8 |
| Audio | 182 | AU_HP_L | AVDD_AUD | 1.8 |
| Audio | 183 | ACCDET | AVDD_AUD | 1.8 |
| Audio | 184 | AU_MICBIAS0 | AVDD_AUD | 1.8 |
| Audio | 185 | AU_MICBIAS1 | AVDD_AUD | 1.8 |
| Audio | 186 | AU_MICBIAS2 | AVDD_AUD | 1.8 |
| Audio | 187 | AU_VIN2_P | AVDD_AUD | 1.8 |
| Audio | 188 | AU_VIN2_N | AVDD_AUD | 1.8 |
| Audio | 189 | AU_VIN1_N | AVDD_AUD | 1.8 |
| Audio | 190 | AU_VIN1_P | AVDD_AUD | 1.8 |
| Audio | 191 | AU_VIN0_N | AVDD_AUD | 1.8 |
| Audio | 192 | AU_VIN0_P | AVDD_AUD | 1.8 |

## SD Card and Storage

UFS is onboard and is not exposed through the 200 pins. MSDC1 supports a 4-bit SD/TF card. Route CLK/DATA/CMD at 50 Ω with matched lengths, place ESD protection near the socket and verify 1.8/3.3 V switching and VMCH_PMU supply.

| Function | Pin | Signal / Multiplexing | Power Domain | Voltage / V |
| --- | --- | --- | --- | --- |
| SDIO | 24 | MSDC1_DAT0 | VDDIO_SD | 1.8/3.3 |
| SDIO | 25 | MSDC1_DAT1 | VDDIO_SD | 1.8/3.3 |
| SDIO | 26 | MSDC1_DAT2 | VDDIO_SD | 1.8/3.3 |
| SDIO | 27 | MSDC1_DAT3 | VDDIO_SD | 1.8/3.3 |
| SDIO | 28 | MSDC1_CMD | VDDIO_SD | 1.8/3.3 |
| SDIO | 29 | MSDC1_CLK | VDDIO_SD | 1.8/3.3 |
| SDIO | 193 | SD_DET | VDDIO_SD | 1.8/3.3 |

## Exposed Resources and Multiplexing

The pin tables expose UART0, I2C6, I3C0/I3C7, SCP I3C0/3, camera I3C2/4/8/9, SPI2, eight BPI GPIOs, two DISP PWMs and a 2×2 keypad. The overview totals of 4×UART/7×I2C/8×SPI/4×PWM do not establish that all controllers have independent external pins.

| Multiplexed Group | Functions | Consideration |
| --- | --- | --- |
| USB3.2/DP Alt | USB data or DP display | Shared Type-C channel; role-dependent |
| PCM/BT UART | Bluetooth audio or debug | Shared BT PCM pins |
| I2C/I3C/GPIO | Sensors or control | Allocate by function |
| SPI/GPIO | Peripheral or expansion | Check boot configuration |
| MSDC/SD | SD card or SDIO device | Cannot occupy the same pins simultaneously |
| DSI/CPHY | D-PHY or C-PHY | Device-tree configuration |
