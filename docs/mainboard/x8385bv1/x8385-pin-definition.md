---
sidebar_position: 4
title: 引脚定义
description: X8385CV1 168PIN 核心板引脚定义
---

# 引脚定义

X8385CV1 核心板采用 168PIN 邮票孔方式。以下表格按硬件手册拆分为 4 组，覆盖 1~168 号引脚。

## 核心板引脚定义 1

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | RDN0_B | 差分管脚 | 外接CSI2摄像头输入 |
| 2 | RDP0_B | 差分管脚 | 外接CSI2摄像头输入 |
| 3 | D_GND | 参考地 |  |
| 4 | PWM_A | GPIO90 | 多功能GPIO管脚 |
| 5 | PAD_PERIPHERAL_EN14 | GPIO177 |  |
| 6 | PAD_PERIPHERAL_EN13 | GPIO176 |  |
| 7 | AUXIN3 | ADC管脚 |  |
| 8 | PAD_PERIPHERAL_EN9 | GPIO166 |  |
| 9 | PAD_PERIPHERAL_EN12 | GPIO175 |  |
| 10 | IDDIG | GPIO41 | 该管脚用于OTG切换，高电平时OTG为Device模式，低电平时OTG为HOST模式 |
| 11 | PAD_SIM2_SCLK | GPIO37 |  |
| 12 | PAD_SIM2_SIO | GPIO35 |  |
| 13 | PAD_SIM2_SRST | GPIO36 |  |
| 14 | DISP_PWM | GPIO43 |  |
| 15 | DSI_TE | GPIO44 |  |
| 16 | LCM_RST | GPIO45 |  |
| 17 | DRVBUS | USB HOST总线控制 |  |
| 18 | PAD_PERIPHERAL_EN5 | GPIO169 |  |
| 19 | SPI1_MI | GPIO161 |  |
| 20 | SPI1_CLK | GPIO164 |  |
| 21 | SPI1_MO | GPIO163 |  |
| 22 | SPI1_CSB | GPIO162 |  |
| 23 | MSDC1_CLK | GPIO29 |  |
| 24 | MSDC1_CMD | GPIO31 |  |
| 25 | MSDC1_DAT0 | GPIO32 |  |
| 26 | MSDC1_DAT1 | GPIO34 |  |
| 27 | MSDC1_DAT2 | GPIO33 |  |
| 28 | MSDC1_DAT3 | GPIO30 |  |
| 29 | SD_CARD_DET_N | SD侦测管脚 | 非普通GPIO口 |
| 30 | PWRKEY_SW | 开关机管脚 | 非普通GPIO口 |
| 31 | ACCDET | 用于耳机检测 | 非普通GPIO口 |
| 32 | AU_HPR | 右耳机输出 | 非普通GPIO口 |
| 33 | AU_REFN | 耳机管脚 | 非普通GPIO口 |
| 34 | AU_HPL | 左耳机输出 | 非普通GPIO口 |
| 35 | SPK+ | 扬声器输出 | 非普通GPIO口 |
| 36 | SPK- | 扬声器输出 | 非普通GPIO口 |
| 37 | PAD_CONN_TOP_CLK | GPIO113 |  |
| 38 | AU_VIN2_N | 音频输入差分脚 | 非普通GPIO口 |
| 39 | AU_VIN2_P | 音频输入差分脚 | 非普通GPIO口 |
| 40 | AU_VIN1_N | 音频输入差分脚 | 非普通GPIO口 |
| 41 | AU_VIN1_P | 音频输入差分脚 | 非普通GPIO口 |
| 42 | AU_MICBIAS0 | 麦克风偏置管脚 | 非普通GPIO口 |
| 43 | AU_MICBIAS1 | 麦克风偏置管脚 | 非普通GPIO口 |
| 44 | AU_VIN0_P | 音频输入差分脚 | 非普通GPIO口 |
| 45 | AU_VIN0_N | 音频输入差分脚 | 非普通GPIO口 |
| 46 | VCC_RTC | RTC供电管脚 | 2.7V直流输入 |
| 47 | VCAMIO_PMU | LDO输出 | 程序控制LDO输出 |


## 核心板引脚定义 2

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 48 | VCN18_PMU_IT66121 | LDO输出 | 程序控制LDO输出 |
| 49 | VMCH_SD | LDO输出 | 程序控制LDO输出 |
| 50 | VCN33_PMU_IT66121 | LDO输出 | 程序控制LDO输出 |
| 51 | VIO18_PMU | LDO输出 | 程序控制LDO输出 |
| 52 | VSYS | 核心板电源输入 | 3.1到5.25V电源输入 |
| 53 | VSYS | 核心板电源输入 | 3.1到5.25V电源输入 |
| 54 | D_GND | 参考地 |  |
| 55 | D_GND | 参考地 |  |
| 56 | VIO28_PMU | LDO输出 | 程序控制LDO输出 |
| 57 | VLDO28_PMU | LDO输出 | 程序控制LDO输出 |
| 58 | VRF12_PMU_IT66121 | LDO输出 | 程序控制LDO输出 |
| 59 | VCAMD_PMU | LDO输出 | 程序控制LDO输出 |
| 60 | BATADC | 电池电量检测管脚 | 非普通GPIO口 |
| 61 | VBUS | OTG供电管脚 |  |
| 62 | DPI_CK | GPIO28 | DPI显示接口 |
| 63 | DPI_VSYNC | GPIO26 |  |
| 64 | DPI_HSYNC | GPIO25 |  |
| 65 | DPI_DE | GPIO27 |  |
| 66 | DPI_D0 | GPIO13 |  |
| 67 | DPI_D1 | GPIO14 |  |
| 68 | DPI_D2 | GPIO15 |  |
| 69 | DPI_D3 | GPIO16 |  |
| 70 | DPI_D4 | GPIO17 |  |
| 71 | DPI_D5 | GPIO18 |  |
| 72 | DPI_D6 | GPIO19 |  |
| 73 | DPI_D7 | GPIO20 |  |
| 74 | DPI_D8 | GPIO21 |  |
| 75 | DPI_D9 | GPIO22 |  |
| 76 | DPI_D10 | GPIO23 |  |
| 77 | DPI_D11 | GPIO24 |  |
| 78 | PAD_PERIPHERAL_EN4 | GPIO165 |  |
| 79 | PAD_PERIPHERAL_EN0 | GPIO150 |  |
| 80 | PAD_PERIPHERAL_EN1 | GPIO151 |  |
| 81 | PAD_PERIPHERAL_EN2 | GPIO152 |  |
| 82 | PAD_SRCLKENA1 | GPIO149 |  |
| 83 | PAD_PERIPHERAL_EN3 | GPIO153 |  |
| 84 | PAD_PERIPHERAL_EN7 | GPIO159 |  |


## 核心板引脚定义 3

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 85 | PAD_PERIPHERAL_EN6 | GPIO158 |  |
| 86 | SYSRSTB | 硬件复位管脚 | 非普通GPIO口 |
| 87 | SDA6 | GPIO12 |  |
| 88 | SCL6 | GPIO11 |  |
| 89 | DSI0_CKN | MIPI显示差分线 | 非普通GPIO口 |
| 90 | DSI0_CKP | MIPI显示差分线 | 非普通GPIO口 |
| 91 | DSI0_D3N | MIPI显示差分线 | 非普通GPIO口 |
| 92 | DSI0_D3P | MIPI显示差分线 | 非普通GPIO口 |
| 93 | DSI0_D2N | MIPI显示差分线 | 非普通GPIO口 |
| 94 | DSI0_D2P | MIPI显示差分线 | 非普通GPIO口 |
| 95 | DSI0_D1N | MIPI显示差分线 | 非普通GPIO口 |
| 96 | DSI0_D1P | MIPI显示差分线 | 非普通GPIO口 |
| 97 | DSI0_D0N | MIPI显示差分线 | 非普通GPIO口 |
| 98 | DSI0_D0P | MIPI显示差分线 | 非普通GPIO口 |
| 99 | D_GND | 参考地 |  |
| 100 | SSUSB_TXP | USB3.0差分对 | 非普通GPIO口 |
| 101 | SSUSB_TXN | USB3.0差分对 | 非普通GPIO口 |
| 102 | SSUSB_RXP | USB3.0差分对 | 非普通GPIO口 |
| 103 | SSUSB_RXN | USB3.0差分对 | 非普通GPIO口 |
| 104 | USB_DP | USB 2.0差分对 | 非普通GPIO口 |
| 105 | USB_DM | USB 2.0差分对 | 非普通GPIO口 |
| 106 | D_GND | 参考地 |  |
| 107 | PAD_PERIPHERAL_EN8 | GPIO160 |  |
| 108 | EINT4 | GPIO4 |  |
| 109 | EINT1 | GPIO1 |  |
| 110 | EINT0 | GPIO0 |  |
| 111 | EINT2 | GPIO2 |  |
| 112 | PAD_KPCOL1 | GPIO94 |  |
| 113 | EINT7 | GPIO7 |  |
| 114 | PAD_INT_SIM2 | GPIO46 |  |
| 115 | PAD_INT_SIM1 | GPIO47 |  |
| 116 | I2S1_BCK | GPIO170 |  |
| 117 | I2S1_DO | GPIO172 |  |
| 118 | I2S1_MCK | GPIO173 |  |
| 119 | I2S1_LRCK | GPIO171 |  |
| 120 | PAD_CAM_RST3 | GPIO112 | UTXD1/SDA7 |
| 121 | PAD_CAM_PDN3 | GPIO110 | URXD1/SCL7 |
| 122 | CAM_CLK3 | GPIO111 |  |
| 123 | CAM_CLK0 | GPIO99 |  |
| 124 | EINT10 | GPIO10 |  |
| 125 | KPROW0 | GPIO92 |  |
| 126 | KPROW1 | GPIO91 |  |
| 127 | KPCOL0 | GPIO93 |  |
| 128 | PAD_ANT_SEL1 | GPIO156 |  |
| 129 | SDA3 | GPIO51 |  |
| 130 | SCL3 | GPIO50 |  |
| 131 | SCL5 | GPIO48 |  |


## 核心板引脚定义 4

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 132 | SDA5 | GPIO49 |  |
| 133 | SDA4 | GPIO106 |  |
| 134 | SCL4 | GPIO105 |  |
| 135 | SDA2 | GPIO104 |  |
| 136 | SCL2 | GPIO103 |  |
| 137 | URXD0 | GPIO95 |  |
| 138 | UTXD0 | GPIO96 |  |
| 139 | PAD_PERIPHERAL_EN11 | GPIO179 |  |
| 140 | SDA0 | GPIO82 |  |
| 141 | SCL0 | GPIO83 |  |
| 142 | SDA1 | GPIO81 |  |
| 143 | SCL1 | GPIO84 |  |
| 144 | CAM_CLK1 | GPIO100 |  |
| 145 | PAD_CAM_RST1 | GPIO102 |  |
| 146 | PAD_CAM_PDN1 | GPIO98 |  |
| 147 | RCN_A | 差分管脚 | 外接CSI1摄像头输入 |
| 148 | RCP_A | 差分管脚 | 外接CSI1摄像头输入 |
| 149 | RDN0_A | 差分管脚 | 外接CSI1摄像头输入 |
| 150 | RDP0_A | 差分管脚 | 外接CSI1摄像头输入 |
| 151 | RDP1_A | 差分管脚 | 外接CSI1摄像头输入 |
| 152 | RDN1_A | 差分管脚 | 外接CSI1摄像头输入 |
| 153 | RDN2_A | 差分管脚 | 外接CSI1摄像头输入 |
| 154 | RDP2_A | 差分管脚 | 外接CSI1摄像头输入 |
| 155 | RDP3_A | 差分管脚 | 外接CSI1摄像头输入 |
| 156 | RDN3_A | 差分管脚 | 外接CSI1摄像头输入 |
| 157 | D_GND | 参考地 |  |
| 158 | CAM_CLK2 | GPIO108 |  |
| 159 | CAM_PDN2 | GPIO107 |  |
| 160 | CAM_RST2 | GPIO109 |  |
| 161 | RCN_B | 差分管脚 | 外接CSI2摄像头输入 |
| 162 | RCP_B | 差分管脚 | 外接CSI2摄像头输入 |
| 163 | RDN3_B | 差分管脚 | 外接CSI2摄像头输入 |
| 164 | RDP3_B | 差分管脚 | 外接CSI2摄像头输入 |
| 165 | RDN2_B | 差分管脚 | 外接CSI2摄像头输入 |
| 166 | RDP2_B | 差分管脚 | 外接CSI2摄像头输入 |
| 167 | RDN1_B | 差分管脚 | 外接CSI2摄像头输入 |
| 168 | RDP1_B | 差分管脚 | 外接CSI2摄像头输入 |

