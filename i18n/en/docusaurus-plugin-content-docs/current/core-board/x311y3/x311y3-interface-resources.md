---
sidebar_position: 3
title: Interface resources
description: X311Y3CV1 Interface resources
---

# Interface resources

This chapter covers exposed interfaces, key signals and carrier board design requirements. Simultaneous operation depends on multiplexing and software; section 3.10 summarizes conflicts. Verify differential impedance, route length and protection during schematic and PCB reviews. Supply-domain columns identify the board net and nominal voltage in volts. AVDD0V75/18_xxx denotes a 0.75 V analog-core domain and a 1.8 V analog-I/O domain, listed in that order.

## 3.1 Display interfaces

A311Y3 provides HDMI TX, HDMI RX and multiplexed MIPI DSI/eDP/LVDS outputs for small MIPI panels through 4K HDMI displays. Prioritize continuous reference planes, impedance continuity and ESD protection for high-speed clock and data pairs.

### 3.1.1 HDMI TX

HDMI TX sends audio/video to displays, televisions, projectors or capture equipment. It includes four TMDS pairs (one clock and three data), DDC SCL/SDA, CEC, HPD and +5 V. A311Y3 supports HDMI 2.1a and eARC audio return.

Place the HDMI connector near the core board. The manual specifies 90 Ω TMDS impedance, matched lengths within each pair and no reference-plane splits. Protect DDC/CEC/HPD with ESD devices and provide current limiting and a fuse for +5 V. Route eARC at 100 Ω away from high-speed clocks.

### 3.1.2 HDMI RX

HDMI RX captures external HDMI video for conferencing, recording, monitoring and image processing. Signals include TMDS input, DDC, CEC, HPD, +5 V detection and eARC. Use a divider for 5 V detection and ESD protection against hot-plug surges.

The manual specifies 90 Ω for HDMI RX TMDS pairs. Divide the connector +5 V detection signal to a voltage allowed by the SoC; do not connect 5 V directly. Evaluate equalization or redriving for long input cables.

### 3.1.3 MIPI DSI / eDP / LVDS

This section specifies one multiplexed 4-lane DIF output, configurable as MIPI DSI, eDP or LVDS. DSI serves phone/tablet panels, eDP serves high-resolution laptop panels, and LVDS serves industrial/automotive panels. Hardware configuration and the device tree jointly select the interface; it cannot be switched arbitrarily at runtime.

Route DSI/eDP/LVDS pairs at 100 Ω with matched intra-pair lengths; eDP AUX also uses 100 Ω. Provide separate DSI TE, reset, backlight PWM/enable and panel power-enable signals. Generate the backlight boost/constant-current supply on the carrier board rather than sharing the core board 3.3 V rail, to avoid flicker.

**Table 3-1 Display interface pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| HDMITX | A123 | HDMITX_D0N | AVDD3V_HDMI | 3.1 |
| HDMITX | A124 | HDMITX_D0P | AVDD3V_HDMI | 3.1 |
| HDMITX | A125 | HDMITX_D1N | AVDD3V_HDMI | 3.1 |
| HDMITX | A126 | HDMITX_D1P | AVDD3V_HDMI | 3.1 |
| HDMITX | A127 | HDMITX_D2N | AVDD3V_HDMI | 3.1 |
| HDMITX | A128 | HDMITX_D2P | AVDD3V_HDMI | 3.1 |
| HDMITX | A121 | HDMITX_CLKN | AVDD3V_HDMI | 3.1 |
| HDMITX | A122 | HDMITX_CLKP | AVDD3V_HDMI | 3.1 |
| HDMITX | A119 | HDMITX_EARC_RXN | AVDD0V75/18_HDMI_EARC | 0.75/1.8 |
| HDMITX | A120 | HDMITX_EARC_RXP | AVDD0V75/18_HDMI_EARC | 0.75/1.8 |
| HDMIRX | A109 | HDMIRX_EARC_TXN | AVDD0V75/18_HDMI_EARC | 0.75/1.8 |
| HDMIRX | A110 | HDMIRX_EARC_TXP | AVDD0V75/18_HDMI_EARC | 0.75/1.8 |
| HDMIRX | A111 | HDMIRX_CLKN | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A112 | HDMIRX_CLKP | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A113 | HDMIRX_D0N | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A114 | HDMIRX_D0P | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A115 | HDMIRX_D1N | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A116 | HDMIRX_D1P | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A117 | HDMIRX_D2N | AVDD3V_HDMIRX | 3.1 |
| HDMIRX | A118 | HDMIRX_D2P | AVDD3V_HDMIRX | 3.1 |
| HDMI control | B61 | GPIOH_0(OD5V_HIZ)(HDMIRX_SDA//UART_C_TX//CAN_B_TX) | VDDIO_H | 3.1 |
| HDMI control | B60 | GPIOH_1(OD5V_HIZ)(HDMIRX_SCL//UART_C_RX//CAN_B_RX) | VDDIO_H | 3.1 |
| HDMI control | B62 | GPIOH_2(OD5V_HIZ)(HDMIRX_HPD) | VDDIO_H | 3.1 |
| HDMI control | B63 | GPIOH_3(OD5V_HIZ)(HDMIRX_5VDET) | VDDIO_H | 3.1 |
| HDMI control | A108 | GPIOH_4(OD5V_HIZ)(HDMITX_SDA//I2C_F_SDA//PWM_M//PCIECK_A_REQN) | VDDIO_H | 3.1 |
| HDMI control | A107 | GPIOH_5(OD5V_HIZ)(HDMITX_SCL//I2C_F_SCL//PWM_VS//DP_HPD//PCIECK_B_REQN) | VDDIO_H | 3.1 |
| HDMI control | A106 | GPIOH_6(OD5V_HIZ)(HDMITX_HPD_IN//VX1_HTPDN//EDP_HPD) | VDDIO_H | 3.1 |
| HDMI control | B59 | GPIOH_7(OD5V_HIZ)(VX1_LOCKN) | VDDIO_H | 3.1 |
| HDMI control | A105 | GPIOB_14(OD33)(I2C_C_SDA//IWD_RSTO//WD_RSTO//RT_GPIO_7) | VDDIO_B | 1.8 |
| DSI/eDP/LVDS | A88 | DIF_CH0N(EDP_A_AUXN//DSI_A_D0N//LVDS_A_0N//VX1_A_0N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A87 | DIF_CH0P(EDP_A_AUXP//DSI_A_D0P//LVDS_A_0P//VX1_A_0P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A86 | DIF_CH1N(EDP_A_0N//DSI_A_D1N//LVDS_A_1N//VX1_A_1N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A85 | DIF_CH1P(EDP_A_0P//DSI_A_D1P//LVDS_A_1P//VX1_A_1P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A84 | DIF_CH2N(EDP_A_1N//DSI_A_CKN//LVDS_A_2N//VX1_A_2N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A83 | DIF_CH2P(EDP_A_1P//DSI_A_CKP//LVDS_A_2P//VX1_A_2P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A82 | DIF_CH3N(EDP_A_2N//DSI_A_D2N//LVDS_A_CLKN//VX1_A_3N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A81 | DIF_CH3P(EDP_A_2P//DSI_A_D2P//LVDS_A_CLKP//VX1_A_3P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A80 | DIF_CH4N(EDP_A_3N//DSI_A_D3N//LVDS_A_3N//VX1_A_4N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A79 | DIF_CH4P(EDP_A_3P//DSI_A_D3P//LVDS_A_3P//VX1_A_4P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A78 | DIF_CH5N(DSI_B_D0N//LVDS_B_0N//VX1_A_5N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A77 | DIF_CH5P(DSI_B_D0P//LVDS_B_0P//VX1_A_5P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A76 | DIF_CH6N(DSI_B_D1N//LVDS_B_1N//VX1_A_6N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A75 | DIF_CH6P(DSI_B_D1P//LVDS_B_1P//VX1_A_6P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A74 | DIF_CH7N(DSI_B_CKN//LVDS_B_2N//VX1_A_7N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A73 | DIF_CH7P(DSI_B_CKP//LVDS_B_2P//VX1_A_7P) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A72 | DIF_CH8N(DSI_B_D2N//LVDS_B_CLKN) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A71 | DIF_CH8P(DSI_B_D2P//LVDS_B_CLKP) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A70 | DIF_CH9N(DSI_B_D3N//LVDS_B_3N) | AVDD0V75/18_DIF | 0.75/1.8 |
| DSI/eDP/LVDS | A69 | DIF_CH9P(DSI_B_D3P//LVDS_B_3P) | AVDD0V75/18_DIF | 0.75/1.8 |
| Panel/eDP | B71 | GPIOY_0(DOWN)(PWM_N//PCIECK_A_REQN//PDM_DIN0//TDM_D2//RT_GPIO_30) | VDDIO_Y | 3.1 |
| Panel/eDP | B70 | GPIOY_1(UP)(PWM_I//PCIECK_B_REQN//PDM_DCLK//TDM_D3//RT_GPIO_31) | VDDIO_Y | 3.1 |
| Panel/eDP | B69 | GPIOY_2(DOWN)(PWM_K//PCIE_A_PRESET//PDM_DIN1//TDM_FS1//RT_GPIO_32) | VDDIO_Y | 3.1 |
| Panel/eDP | B68 | GPIOY_3(DOWN)(PWM_L//PCIE_B_PRESET//PDM_DIN2//TDM_SCLK1//SPDIF_IN) | VDDIO_Y | 3.1 |
| Panel/eDP | B65 | GPIOY_4(DOWN)(PWM_M//PDM_DIN3//MCLK_1//SPDIF_OUT) | VDDIO_Y | 3.1 |
| Panel/eDP | B66 | GPIOY_5(UP)(PWM_J//I2C_E_SDA//TDM_D4//RT_GPIO_33) | VDDIO_Y | 3.1 |
| Panel/eDP | B67 | GPIOY_6(DOWN)(PWM_VS//I2C_E_SCL//TDM_D5//RT_GPIO_34) | VDDIO_Y | 3.1 |
| Panel/eDP | B50 | GPIOY_7(DOWN)(VX1_LOCKN//TDM_D6//RT_GPIO_35) | VDDIO_Y | 3.1 |
| Panel/eDP | A90 | GPIOY_9(UP)(VX1_HTPDN//EDP_HPD//I2C_I_SCL//TDM_D8//RT_GPIO_37) | VDDIO_Y | 3.1 |

## 3.2 Camera interfaces

The interface chapter specifies two 4-lane MIPI CSI links, CSI_A/B and CSI_C/D. Each includes a clock pair, four data pairs, MCLK, I2C control, reset and PWDN. Applications include 13/16-megapixel cameras and stereo/multiple-camera vision. See Appendix D for board-level NC signals.

Route CSI at 100 Ω and match clock/data and lane lengths. Keep MCLK away from DC/DC inductors and switching nodes. Connect I2C pull-ups to the camera I/O supply compatible with the SoC domain, and add ESD protection at the camera connector.

**Table 3-2 MIPI CSI pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| CSI_A/B | A150 | CSI_A_CLKN | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A149 | CSI_A_CLKP | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A146 | CSI_A_D0N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A145 | CSI_A_D0P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A148 | CSI_A_D1N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A147 | CSI_A_D1P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A152 | CSI_A_D2N//CSI_B_D0N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A151 | CSI_A_D2P//CSI_B_D0P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A154 | CSI_A_D3N//CSI_B_D1N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A153 | CSI_A_D3P//CSI_B_D1P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A156 | CSI_B_CLKN | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_A/B | A155 | CSI_B_CLKP | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A136 | CSI_C_CLKN | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A135 | CSI_C_CLKP | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A132 | CSI_C_D0N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A131 | CSI_C_D0P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A134 | CSI_C_D1N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A133 | CSI_C_D1P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A138 | CSI_C_D2N//CSI_D_D0N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A137 | CSI_C_D2P//CSI_D_D0P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A140 | CSI_C_D3N//CSI_D_D1N | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A139 | CSI_C_D3P//CSI_D_D1P | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A142 | CSI_D_CLKN | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| CSI_C/D | A141 | CSI_D_CLKP | AVDD0V75/18_CSI_MCLK | 0.75/1.8 |
| Cameracontrol | B53 | GPIOM_0(DOWN)(I2C_G_SDA//UART_D_CTS//PDM_DIN0//TDM_D9//SPI_C_MOSI) | VDDIO_M | 1.8 |
| Cameracontrol | B54 | GPIOM_1(DOWN)(I2C_G_SCL//UART_D_RTS//PDM_DCLK//TDM_D10//SPI_C_MISO) | VDDIO_M | 1.8 |
| Cameracontrol | B52 | GPIOM_2(DOWN)(I2C_E_SDA//UART_D_TX//PDM_DIN1//TDM_D11//SPI_C_SCLK) | VDDIO_M | 1.8 |
| Cameracontrol | B51 | GPIOM_3(DOWN)(I2C_E_SCL//UART_D_RX//PDM_DIN2//MCLK_2//SPI_C_SS0) | VDDIO_M | 1.8 |
| Cameracontrol | B55 | GPIOM_4(DOWN)(I2C_F_SDA//UART_F_TX//PDM_DIN3//TDM_SCLK2//PWM_J) | VDDIO_M | 1.8 |
| Cameracontrol | B58 | GPIOM_5(DOWN)(I2C_F_SCL//UART_F_RX//PCIECK_B_REQN//TDM_FS2//PWM_VS) | VDDIO_M | 1.8 |
| Cameracontrol | B56 | GPIOM_6(DOWN)(I2C_H_SDA//UART_F_CTS//DP_HPD//TDM_D14//VX1_LOCKN) | VDDIO_M | 1.8 |
| Cameracontrol | B57 | GPIOM_7(DOWN)(I2C_H_SCL//UART_F_RTS//EDP_HPD//TDM_D15//VX1_HTPDN) | VDDIO_M | 1.8 |

## 3.3 USB interfaces

USB resources are one USB 3.0 OTG Type-C, one USB 3.0 Host, one USB 2.0 Host and one USB 2.0 OTG port. Type-C supports Host/Device roles and DP Alt Mode for flashing, ADB, external displays and peripherals.

The manual specifies 95 Ω for the USB 3.0/PCIe 2.0/HSGMII shared group, 90 Ω for USB 2.0 and Type-C/DP pairs, and 100 Ω for DP AUX. Configure CC1/CC2 with 5.1 kΩ pull-downs or 56 kΩ pull-ups according to the role. Add VBUS ESD protection and current limiting.

**Table 3-3 USB pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| USB2.0/3.0 | A174 | USB_B_HOST_DM | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A173 | USB_B_HOST_DP | AVDD0V75/18_USB_DP | 0.75/1.8 |
| Type-CCC | B19 | USB_CC1(I2C_F_SCL) | AVDD3V_USB_CC | 3.1 |
| Type-CCC | B20 | USB_CC2(I2C_F_SDA) | AVDD3V_USB_CC | 3.1 |
| DPAlt | A181 | DP_TX_D3N//USBSS_A_RX1N | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A182 | DP_TX_D3P//USBSS_A_RX1P | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A183 | DP_TX_D2N//USBSS_A_TX1N | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A184 | DP_TX_D2P//USBSS_A_TX1P | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A187 | DP_TX_D1N//USBSS_A_RX2N | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A188 | DP_TX_D1P//USBSS_A_RX2P | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A185 | DP_TX_D0N//USBSS_A_TX2N | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A186 | DP_TX_D0P//USBSS_A_TX2P | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A189 | DP_TX_AUXN | AVDD0V75/18_USB_DP | 0.75/1.8 |
| DPAlt | A190 | DP_TX_AUXP | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A179 | USB_A_OTG_DM | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A180 | USB_A_OTG_DP | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | B21 | USB_A_OTG_ID | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | B22 | USB_A_OTG_VBUS | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A177 | USB_D_OTG_DM | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A178 | USB_D_OTG_DP | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | B23 | USB_D_OTG_ID | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | B24 | USB_D_OTG_VBUS | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A175 | USB_C_HOST_DM | AVDD0V75/18_USB_DP | 0.75/1.8 |
| USB2.0/3.0 | A176 | USB_C_HOST_DP | AVDD0V75/18_USB_DP | 0.75/1.8 |

## 3.4 PCIe interfaces

The board provides PCIe 3.0 x2 and PCIe 2.0 x1. PCIe 3.0 x2 supports NVMe SSDs, network cards and capture cards. PCIe 2.0 x1 shares pins with USB 3.0 Host; the carrier board must select one function.

Route PCIe 3.0 data pairs at 85 Ω and reference clocks at 100 Ω. Add TX AC-coupling capacitors (typically 100 nF); handle receiver termination according to the protocol. Provide appropriate pulls and ESD protection for PERST#, WAKE# and CLKREQ#. Minimize distance, vias and connector discontinuities.

**Table 3-4 PCIe pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| PCIe3.0 | A163 | PCIE30_LANE0_RXN | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A164 | PCIE30_LANE0_RXP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A165 | PCIE30_LANE0_TXN | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A166 | PCIE30_LANE0_TXP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A167 | PCIE30_LANE0_REFCLK_N | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A168 | PCIE30_LANE0_REFCLKP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A160 | PCIE30_LANE1_RXN | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A159 | PCIE30_LANE1_RXP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A158 | PCIE30_LANE1_TXN | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A157 | PCIE30_LANE1_TXP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A162 | PCIE30_LANE1_PCIE20_REFCLK_N | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| PCIe3.0 | A161 | PCIE30_LANE1_PCIE20_REFCLK_P | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |

## 3.5 Ethernet interface

The RGMII Gigabit Ethernet interface requires a carrier board PHY such as RTL8211F, magnetics and RJ45. RGMII includes TXD0–3, TXCLK, TXCTL, RXD0–3, RXCLK, RXCTL, MDC, MDIO, reset and interrupt signals.

Use 50 Ω single-ended RGMII routing with data/clock length and skew control. Place the PHY near RJ45 and magnetics; avoid reference-plane splits. Add MDC/MDIO pull-ups and follow the PHY reference design for Bob Smith termination, center taps and shield grounding.

**Table 3-5 Ethernet pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| HSGMII | A172 | HSGMII_RXN//USBSS_B_RXN//PCIE20_RXN | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| HSGMII | A171 | HSGMII_RXP//USBSS_B_RXP//PCIE20_RXP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| HSGMII | A170 | HSGMII_TXN//USBSS_B_TXN//PCIE20_TXN | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| HSGMII | A169 | HSGMII_TXP//USBSS_B_TXP//PCIE20_TXP | AVDD0V75/18_HSGMII_PCIE | 0.75/1.8 |
| RGMII | B29 | GPIOZ_0(UP)(ETH_A_MDIO//ISO7816_CLK//SDCARD_D0//SPI_E_MOSI//TDM_SCLK1//I2C_E_SDA//UART_D_CTS) | VDDIO_Z | 1.8 |
| RGMII | B28 | GPIOZ_1(UP)(ETH_A_MDC//ISO7816_DATA//SDCARD_D1//SPI_E_MISO//TDM_FS1//I2C_E_SCL//UART_D_RTS) | VDDIO_Z | 1.8 |
| RGMII | B43 | GPIOZ_2(UP)(ETH_A_RGMII_RX_CLK//TSIN_B_VALID//SDCARD_D2//SPI_E_SCLK//TDM_D2//I2C_F_SDA//UART_D_TX) | VDDIO_Z | 1.8 |
| RGMII | B44 | GPIOZ_3(UP)(ETH_A_RX_DV//TSIN_B_SOP//SDCARD_D3//SPI_E_SS0//TDM_D3//I2C_F_SCL//UART_D_RX) | VDDIO_Z | 1.8 |
| RGMII | B42 | GPIOZ_4(UP)(ETH_A_RXD0//TSIN_B_DIN0//SDCARD_CLK//SPI_F_MOSI//TDM_D4//I2C_G_SDA) | VDDIO_Z | 1.8 |
| RGMII | B41 | GPIOZ_5(UP)(ETH_A_RXD1//TSIN_B_CLK//SDCARD_CMD//SPI_F_MISO//TDM_D5//I2C_G_SCL) | VDDIO_Z | 1.8 |
| RGMII | B40 | GPIOZ_6(UP)(ETH_A_RXD2_RGMII//TSIN_B_FAIL//TSIN_A_VALID//SPI_F_SCLK//TDM_D6//I2C_H_SDA//UART_E_TX) | VDDIO_Z | 1.8 |
| RGMII | B39 | GPIOZ_7(UP)(ETH_A_RXD3_RGMII//TSIN_B_DIN1//TSIN_A_SOP//SPI_F_SS0//TDM_D7//I2C_H_SCL//UART_E_RX) | VDDIO_Z | 1.8 |
| RGMII | B37 | GPIOZ_8(UP)(ETH_A_RGMII_TX_CLK//TSIN_B_DIN2//TSIN_A_DIN0//SPI_B_SS2//TDM_D8//UART_E_CTS) | VDDIO_Z | 1.8 |
| RGMII | B31 | GPIOZ_9(UP)(ETH_A_TXEN//TSIN_B_DIN3//TSIN_A_CLK//SPI_B_SS1//TDM_D9//UART_E_RTS) | VDDIO_Z | 1.8 |
| RGMII | B32 | GPIOZ_10(DOWN)(ETH_A_TXD0//TSIN_B_DIN4//SPI_B_MOSI//TDM_D10) | VDDIO_Z | 1.8 |
| RGMII | B33 | GPIOZ_11(DOWN)(ETH_A_TXD1//TSIN_B_DIN5//ISO7816_DATA//SPI_B_MISO//MCLK_2) | VDDIO_Z | 1.8 |
| RGMII | B34 | GPIOZ_12(DOWN)(ETH_A_TXD2_RGMII//TSIN_B_DIN6//SPI_B_SCLK//TDM_SCLK2) | VDDIO_Z | 1.8 |
| RGMII | B35 | GPIOZ_13(DOWN)(ETH_A_TXD3_RGMII//TSIN_B_DIN7//SPI_B_SS0//TDM_FS2) | VDDIO_Z | 1.8 |
| RGMII | B45 | GPIOZ_14(OD18_33_HIZ)(I2C_C_SDA) | VDDIO_Z | 1.8 |
| RGMII | B30 | GPIOZ_15(OD18_33_HIZ)(I2C_C_SCL) | VDDIO_Z | 1.8 |

## 3.6 Wi-Fi / Bluetooth

Wi-Fi/Bluetooth modules connect through 4-bit SDIO, UART/PCM, a 32.768 kHz clock and WL_EN, BT_EN, WL_WAKE and BT_WAKE controls. Wi-Fi 6 and Bluetooth versions depend on the selected carrier board module; confirm its model and certification status when ordering.

Route SDIO CLK, CMD and DATA0–3 at 50 Ω single-ended and match clock/data lengths. Provide a separate decoupled LDO/DC/DC supply for the module. Follow module antenna keep-outs, use a 50 Ω feed and keep it away from batteries, metal structures and high-speed clocks.

**Table 3-6 Wi-Fi/Bluetooth pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| Control / enable | A57 | GPIOAO_11(DOWN)(I2C_D_SCL//PWM_A//RT_GPIO_14) | VDD3V3_AO | 3.3 |
| Control / enable | A56 | GPIOAO_12(DOWN)(I2C_D_SDA//RT_GPIO_15) | VDD3V3_AO | 3.3 |
| WiFiSDIO | A65 | GPIOX_0(UP)(SDIO_D0//PDM_DIN0//TSIN_B_DIN0//I2C_I_SDA//TDM_D6//ISO7816_CLK//I3C_B_SDA_D1) | VDDIO_X | 1.8 |
| WiFiSDIO | A64 | GPIOX_1(UP)(SDIO_D1//PDM_DIN1//TSIN_B_SOP//I2C_I_SCL//TDM_D7//ISO7816_DATA//I3C_B_SDA_D0) | VDDIO_X | 1.8 |
| WiFiSDIO | A66 | GPIOX_2(UP)(SDIO_D2//PDM_DIN2//TSIN_B_VALID//I2C_H_SDA//TDM_FS1//TDM_D8//I3C_B_SCL) | VDDIO_X | 1.8 |
| WiFiSDIO | A67 | GPIOX_3(UP)(SDIO_D3//PDM_DIN3//TSIN_B_CLK//I2C_H_SCL//TDM_SCLK1//TDM_D9//I3C_B_SDA_D2) | VDDIO_X | 1.8 |
| WiFiSDIO | A68 | GPIOX_4(UP)(SDIO_CLK//PDM_DCLK//MCLK_1//I3C_B_SDA_D3) | VDDIO_X | 1.8 |
| WiFiSDIO | B73 | GPIOX_5(UP)(SDIO_CMD//PWM_C//TDM_D4) | VDDIO_X | 1.8 |
| Control / wake | B72 | GPIOX_6(UP)(PWM_F//TDM_D5) | VDDIO_X | 1.8 |
| BTPCM/UART | B1 | GPIOX_7(UP)(TDM_D1) | VDDIO_X | 1.8 |
| BTPCM/UART | A63 | GPIOX_8(UP)(TDM_D0) | VDDIO_X | 1.8 |
| BTPCM/UART | B74 | GPIOX_9(UP)(TDM_FS0) | VDDIO_X | 1.8 |
| BTPCM/UART | B2 | GPIOX_10(UP)(TDM_SCLK0) | VDDIO_X | 1.8 |
| BTPCM/UART | A60 | GPIOX_11(UP)(UART_A_TX) | VDDIO_X | 1.8 |
| BTPCM/UART | A61 | GPIOX_12(UP)(UART_A_RX) | VDDIO_X | 1.8 |
| BTPCM/UART | A59 | GPIOX_13(UP)(UART_A_CTS) | VDDIO_X | 1.8 |
| BTPCM/UART | A58 | GPIOX_14(UP)(UART_A_RTS) | VDDIO_X | 1.8 |
| Control / wake | A62 | GPIOX_15(UP)(PWM_K) | VDDIO_X | 1.8 |
| BTPCM/UART | B3 | GPIOX_16(UP) | VDDIO_X | 1.8 |
| Control / wake | A55 | GPIOX_17(HIZ)(PWM_H) | VDDIO_X | 1.8 |

## 3.7 Audio interfaces

Digital audio resources include I2S/PCM, PDM, SPDIF and HDMI eARC. The carrier board provides the audio codec, amplifier, headphone connector and microphones. Analog performance depends on codec, power, grounding and layout; the core board provides digital signals only.

Route I2S MCLK/SCLK/LRCK/SDO/SDI at 50 Ω single-ended, away from parallel high-speed pairs. The manual recommends 75 Ω for SPDIF output. Keep PDM clocks/data away from analog inputs. Add debounce and ESD protection for headphone/microphone detection, and use a separate LC-filtered amplifier supply to reduce switching noise.

**Table 3-7 Audio pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| I2S/TDM | A52 | GPIOA_0(DOWN)(MCLK_1//RT_GPIO_19//ISO7816_CLK//TSIN_A_DIN0//ETH_B_MDIO) | VDDIO_A | 3.1 |
| I2S/TDM | A45 | GPIOA_1(DOWN)(TDM_SCLK1//RT_GPIO_20//ISO7816_DATA//TSIN_A_SOP//ETH_B_MDC) | VDDIO_A | 3.1 |
| I2S/TDM | A46 | GPIOA_2(DOWN)(TDM_FS1//RT_GPIO_21//TSIN_A_VALID//ETH_B_RGMII_RX_CLK) | VDDIO_A | 3.1 |
| I2S/TDM | B4 | GPIOA_6(DOWN)(TDM_D5//RT_GPIO_25//I2C_E_SCL//TSIN_B_DIN0//TSIN_B_DIN0//ETH_B_RXD2_RGMII) | VDDIO_A | 3.1 |
| I2S/TDM | B7 | GPIOA_7(DOWN)(TDM_D6//ISO7816_CLK//TSIN_B_CLK//TSIN_B_CLK//ETH_B_RXD3_RGMII) | VDDIO_A | 3.1 |
| I2S/TDM | A43 | GPIOA_8(DOWN)(TDM_D7//ISO7816_DATA//SPI_C_MOSI//TSIN_B_FAIL//PCIE_A_PRESET//ETH_B_RGMII_TX_CLK) | VDDIO_A | 3.1 |
| I2S/TDM | B6 | GPIOA_10(UP)(TDM_D9//PCIECK_A_REQN//SPI_C_SCLK//TSIN_B_DIN2//ETH_A_MDIO//ETH_B_TXD0) | VDDIO_A | 3.1 |
| I2S/TDM | A50 | GPIOA_12(DOWN)(TDM_D11//RT_GPIO_26//I2C_I_SDA//TSIN_B_DIN4//ETH_B_TXD2_RGMII) | VDDIO_A | 3.1 |
| I2S/TDM | A48 | GPIOA_13(DOWN)(TDM_D12//RT_GPIO_27//I2C_I_SCL//TSIN_B_DIN5//I3C_B_SDA_D1//ETH_B_TXD3_RGMII) | VDDIO_A | 3.1 |
| I2S/TDM | A38 | GPIOA_16(DOWN)(MCLK_2//ISO7816_CLK//SPDIF_OUT//TSIN_B_DIN6//I3C_B_SDA_D2) | VDDIO_A | 3.1 |
| I2S/TDM | A39 | GPIOA_17(DOWN)(TDM_SCLK2//ISO7816_DATA//TSIN_B_DIN7//I3C_B_SDA_D3) | VDDIO_A | 3.1 |
| I2S/TDM | B8 | GPIOA_18(DOWN)(TDM_FS2//SPDIF_IN//CAN_A_TX//I3C_A_SDA) | VDDIO_A | 3.1 |
| I2S/TDM | A40 | GPIOA_19(DOWN)(TDM_D15//CAN_A_RX//I3C_A_SCL) | VDDIO_A | 3.1 |

PDM, SPDIF and I2S share GPIOA/GPIOAO multiplexing. This board does not expose dedicated PDM/SPDIF nets. Select suitable multiplexed pins from Appendix D and provide the carrier board codec, clock and enable circuitry as required.

## 3.8 Storage and SD card interfaces

Onboard storage is eMMC 5.1; TF/SD cards can be added through SDIO. SDIO 3.0 supports 4-bit high-speed mode. Place the socket near the core board, route CLK/DATA/CMD at 50 Ω with matched lengths, decouple and protect the socket supply, and add card-detect pull-up/debounce.

If no TF card is required, SDIO can serve peripherals such as Wi-Fi modules, subject to eMMC boot-pin conflicts. Protect DAT/CMD/CLK against hot-plug ESD and ground the socket shell properly.

**Table 3-8 Storage and SD card pins and supply domains**

| Function | Pin identifier | Pin name (including multiplexing) | Interface supply domain | Voltage / V |
| --- | --- | --- | --- | --- |
| SDIO | A195 | GPIOC_0(UP)(SDCARD_D0//JTAG_B_TDO//SPI_D_MOSI//I2C_C_SCL//PDM_DIN0//UART_D_CTS//I3C_A_SCL) | VDDIO_C | 3.3 |
| SDIO | A193 | GPIOC_1(UP)(SDCARD_D1//JTAG_B_TDI//SPI_D_MISO//I2C_C_SDA//PDM_DIN1//UART_D_RTS//I3C_A_SDA) | VDDIO_C | 3.3 |
| SDIO | A197 | GPIOC_2(UP)(SDCARD_D2//SPI_D_SCLK//I2C_B_SCL//PDM_DIN2//RT_GPIO_16) | VDDIO_C | 3.3 |
| SDIO | A196 | GPIOC_3(UP)(SDCARD_D3//SPI_D_SS0//I2C_B_SDA//PDM_DIN3//RT_GPIO_17) | VDDIO_C | 3.3 |
| SDIO | A191 | GPIOC_4(UP)(SDCARD_CLK//JTAG_B_CLK//SPI_D_SS1//I2C_A_SCL//PDM_DCLK//RT_GPIO_18) | VDDIO_C | 3.3 |
| SDIO | A194 | GPIOC_5(UP)(SDCARD_CMD//JTAG_B_TMS//SPI_D_SS2//I2C_A_SDA//UART_D_RX) | VDDIO_C | 3.3 |
| SDIO | A192 | GPIOC_6(UP)(GEN_CLK_OUT//PCIECK_A_REQN//UART_D_TX) | VDDIO_C | 3.3 |

## 3.9 Low-speed interfaces and GPIO

UART, I2C, SPI, PWM, ADC and GPIO resources support sensors, keys, indicators, relays, motor drivers, sampling and industrial peripherals. Table 3-9 lists controller counts; usable resources depend on multiplexing and carrier board connections.

**Table 3-9 Low-speed resources**

| Resource | Count | Notes |
| --- | --- | --- |
| UART | 6 channels | Includes debug UART0 and UART_F |
| I2C | 9 channels | Some pins shared with GPIO/other functions |
| SPI | 6 channels | Includes SPI NOR/SPI NAND boot multiplexing |
| PWM | 14 channels | Backlight, fans, motors and indicators |
| ADC | 5 channels10-bit | Keys and voltage/temperature sampling |
| GPIO | GPIOA/B/C/D/H/M/X/Y/Z | 1.8 V/3.3 V domains; follow multiplexing table |

:::caution

Check GPIO power-on states: some pins are high impedance or internally pulled down during reset and must not directly control critical power devices. Add external pulls where enable levels must be defined, RC filtering and ESD for long connections, and level translation between I/O domains. Never connect a 3.3 V signal directly to 1.8 V I/O.

:::

## 3.10 Multiplexing and conflicts

Complete an interface/controller/pin/voltage/multiplexing allocation before carrier board design. A311Y3 pins can serve multiple functions; Table 3-10 lists conflicts requiring particular attention.

**Table 3-10 Key multiplexing relationships**

| Shared group | Selectable functions | Design notes |
| --- | --- | --- |
| USB3.0Host/PCIe2.0x1 | USB 3.0 Host or PCIe 2.0 x1 | Select one with 0 Ω links, switches or separate carrier circuitry |
| MIPIDSI/eDP/LVDS | DSI、eDP、LVDS | Shared DIF lanes selected by hardware and device tree |
| HDMITX/HDMIRX | HDMI output or input | Independent controllers; simultaneous use subject to pin and power checks |
| SDIO / TF card / Wi-Fi | SD card or SDIO Wi-Fi | Shared SDIO controller; cannot use the same pins simultaneously |
| UART/I2C/GPIO | Debug, sensors and control | Allocate by function; retain debug UART |
| PWM/GPIO | Backlight, fans and indicators | Check default power-on level and drive capability |

The multiplexing table is not exhaustive. Use the SoC specification, core board schematic and X311Y3CV1 pin-definition table as authorities. Review every net for voltage level, direction, power-on state and selected function.
