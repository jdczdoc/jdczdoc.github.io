---
sidebar_position: 3
title: 接口资源
description: X8883CV1 接口资源
---

# 接口资源

以下表格保留原稿功能、引脚编号、信号、电源域及电压。信号标识不翻译；电源域列不能替代高速 PHY 的电气规范。完整 1 至 200 脚见[引脚定义](./x8883-pin-definition.md)。

## 显示接口

DSI0/DSI1 为双路显示接口，包含时钟、数据、TE、复位与背光 PWM。DSI 按 100 Ω 差分设计，背光独立升压/恒流；DP 可经 Type-C Alt Mode 输出，AUX 按 100 Ω、主通道按原稿 90 Ω。面板时序与供电在设备树中适配。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
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

## 摄像头接口

CSI0 至 CSI3 及 CAM 控制信号用于多摄。CSI 按 100 Ω 控制；MCLK 远离开关电源，控制总线上拉接摄像头 IO 域，连接器加 ESD；具体 lane/PHY 模式及 ISP 支持按传感器方案确认。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
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

## USB 与 DP

1 路 USB 3.2 Gen1 DRD，兼容 USB 2.0，支持 Host/Device、ADB、下载及 DP Alt Mode。USB 差分按 90 Ω；CC 按角色配置，VBUS 配置限流与 ESD。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
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

PCIe Gen3 ×1 可连接 NVMe 或其他高速外设。数据差分 85 Ω，参考时钟 100 Ω；TX 按设计放置 AC 耦合，核对 PERST/WAKE/CLKREQ 的上下拉与时序。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
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

## 系统控制、传感器与按键

包含系统复位、看门狗、RTC 时钟、SCP 中断、I3C、SPI2、UART0、2×2 按键矩阵及 GPIO。GPIO 属于 1.8 V 域，连接 3.3 V 外设须电平转换。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
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

## 音频接口

包含 I2S0/I2S1/I2S2 信号和模拟耳机、麦克风、检测及偏置。I2S 单端按 50 Ω，模拟音频远离高速与电源噪声；功放独立供电并滤波。SPDIF/PDM 需确认对应引脚复用与底板实现。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
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

## SD 卡与存储

UFS 板载，不经 200 PIN 引出；MSDC1 可扩展 4-bit SD/TF 卡。CLK/DATA/CMD 按 50 Ω 并匹配长度，卡座附近布置 ESD，核对 1.8/3.3 V 切换与 VMCH_PMU 供电。

| 功能 | 引脚 | 信号名称（含复用） | 电源域 | 电压/V |
| --- | --- | --- | --- | --- |
| SDIO | 24 | MSDC1_DAT0 | VDDIO_SD | 1.8/3.3 |
| SDIO | 25 | MSDC1_DAT1 | VDDIO_SD | 1.8/3.3 |
| SDIO | 26 | MSDC1_DAT2 | VDDIO_SD | 1.8/3.3 |
| SDIO | 27 | MSDC1_DAT3 | VDDIO_SD | 1.8/3.3 |
| SDIO | 28 | MSDC1_CMD | VDDIO_SD | 1.8/3.3 |
| SDIO | 29 | MSDC1_CLK | VDDIO_SD | 1.8/3.3 |
| SDIO | 193 | SD_DET | VDDIO_SD | 1.8/3.3 |

## 实际引出与复用

逐脚表实际列有 UART0、I2C6、I3C0/I3C7、SCP I3C0/3、摄像头 I3C2/4/8/9、SPI2、8 路 BPI GPIO、2 路 DISP PWM、2×2 Keypad。不能把概览中的 4×UART/7×I2C/8×SPI/4×PWM 直接等同于全部独立引出。

| 复用组 | 可选功能 | 注意 |
| --- | --- | --- |
| USB3.2/DPAlt | USB数据或DP显示 | 同一Type-C通道，按角色切换 |
| PCM/BTUART | 蓝牙音频或调试 | 复用BTPCM引脚 |
| I2C/I3C/GPIO | 传感器或控制 | 按功能分配 |
| SPI/GPIO | 外设或扩展 | 注意启动配置 |
| MSDC/SD卡 | SD卡或SDIO外设 | 不能同时占用同一组引脚 |
| DSI/CPHY | D-PHY或C-PHY | 由设备树配置 |
