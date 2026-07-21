---
sidebar_position: 3
title: Pin Definition
description: X3128 development board hardware pin definition
---

# Pin Definition

Extend interface definition

Core BoardPin Definition1

### Core BoardPin Definition1

| Pin No. | Signal | Description |
| --- | --- | --- |
| 1 | VCC_SYS | Core-board main power output，4.2V |
| 2 | CIF_PDN0 | GPIO3_D7, General-purpose GPIO port |
| 3 | PWM0 | GPIO0_D2，muxed as PWM0 |
| 4 | PWM1 | GPIO0_D3，muxed as PWM1 |
| 5 | PWM2 | GPIO0_D4，muxed as PWM2 |
| 6 | UART0_RTS | GPIO0_C1，muxed as UART0 |
| 7 | UART0_RXD | GPIO2_D3，muxed as UART0 |
| 8 | UART0_CTS | GPIO2_D5，muxed as UART0 |
| 9 | UART0_TXD | GPIO2_D2，muxed as UART0 |
| 10 | IR_RX | GPIO3_D2, muxed as infrared receiving port |
| 11 | SPDIF_TX | GPIO3_D3, muxed as fiber output |
| 12 | TX_C- | HDMI differential pair |
| 13 | TX_C+ | HDMI differential pair |
| 14 | TX_0- | HDMI differential pair |
| 15 | TX_0+ | HDMI differential pair |
| 16 | TX_1- | HDMI differential pair |
| 17 | TX_1+ | HDMI differential pair |
| 18 | TX_2- | HDMI differential pair |
| 19 | TX_2+ | HDMI differential pair |
| 20 | VDAC_OUTP | Digital-to-analog conversion output |
| 21 | OTG_ID | OTG ID pin |
| 22 | OTG_DET | OTG detection pin |
| 23 | HOST_DP | HOST differential pair |
| 24 | HOST_DM | HOST differential pair |
| 25 | OTG_DP | OTG differential pair |
| 26 | OTG_DM | OTG differential pair |
| 27 | SDMMC_DET | SDMMC0 pin pair |
| 28 | SDMMC_CMD | SDMMC0 pin pair |
| 29 | SDMMC_D0 | SDMMC0 pin pair |
| 30 | SDMMC_D1 | SDMMC0 pin pair |
| 31 | SDMMC_D2 | SDMMC0 pin pair |
| 32 | SDMMC_D3 | SDMMC0 pin pair |
| 33 | SDMMC_CLK | SDMMC0 pin pair |
| 34 | I2C3_SDA | GPIO0_A7，muxed as I2C3_SDA |
| 35 | I2C3_SCL | GPIO0_A6，muxed as I2C3_SCL |
| 36 | VCC_IO | 3.3V DC-DCoutput |


Core BoardPin Definition2

### Core BoardPin Definition2

| Pin No. | Signal | Description |
| --- | --- | --- |
| 37 | VCC_IO | 3.3V DC-DCoutput |
| 38 | HDMI_HPD | GPIO0_B7，muxed as HDMI |
| 39 | HDMI_CEC | GPIO0_C4，muxed as HDMI1 |
| 40 | UART1_TX | GPIO1_B1，muxed as UART1 |
| 41 | UART1_RX | GPIO1_B2，muxed as UART1 |
| 42 | UART1_RTS | GPIO1_B3，muxed as UART1 |
| 43 | SPI_CLK | GPIO0_B1，muxed as SPI |
| 44 | SPI_CSn0 | GPIO0_B6，muxed as SPI |
| 45 | SPI_TXD | GPIO0_B3，muxed as SPI |
| 46 | SPI_RXD | GPIO0_B5，muxed as SPI |
| 47 | SPI_CSn1 | GPIO1_B4，muxed as SPI |
| 48 | SDMMC1_CLK | SDMMC1 data pair |
| 49 | SDMMC1_D3 | SDMMC1 data pair |
| 50 | SDMMC1_D2 | SDMMC1 data pair |
| 51 | SDMMC1_D1 | SDMMC1 data pair |
| 52 | SDMMC1_D0 | SDMMC1 data pair |
| 53 | SDMMC_PWR | SDMMC1 data pair |
| 54 | I2C1_SDA/SDMMC1_CMD | SDMMC1 data pair, muxed as I2C1 |
| 55 | I2C1_SCL | GPIO0_A2，muxed as I2C1 |
| 56 | I2C0_SCL | GPIO0_A0，muxed as I2C0 |
| 57 | I2C0_SDA | GPIO0_A1，muxed as I2C0 |
| 58 | GSENSOR_INT | GPIO0_B4，muxed as I2S interface |
| 59 | TP_INT | GPIO1_B0，muxed as UART1 |
| 60 | SPK_CTL | GPIO0_D6，General-purpose GPIO |
| 61 | TP_RST | GPIO0_D1, utilizing UART2 |
| 62 | HP_CTL | GPIO3_C4，General-purpose GPIO |
| 63 | LCD_RST | GPIO0_D0，muxed as UART2 |
| 64 | GPIO3_C7 | GPIO3_C7，General-purpose GPIO |
| 65 | GPIO1_C7 | GPIO1_C7，General-purpose GPIO |
| 66 | GPIO2_A2 | GPIO2_A2，General-purpose GPIO |
| 67 | GPIO1_A7 | GPIO1_A7，General-purpose GPIO |
| 68 | GPIO2_A0 | GPIO2_A0，muxed as SPI |
| 69 | GPIO2_A1 | GPIO2_A1，General-purpose GPIO |
| 70 | GPIO0_C7 | GPIO0_C7，General-purpose GPIO |
| 71 | GPIO2_A6 | GPIO2_A6，General-purpose GPIO |
| 72 | GND | GND |


Core BoardPin Definition3

### Core BoardPin Definition3

| Pin No. | Signal | Description |
| --- | --- | --- |
| 73 | GND | Ground |
| 74 | GPIO2_A4 | GPIO2_A4，General-purpose GPIO |
| 75 | GPIO3_C6 | GPIO3_C6，General-purpose GPIO |
| 76 | GPIO2_A3 | GPIO2_A3，General-purpose GPIO |
| 77 | GPIO1_A3 | GPIO1_A3，muxed as I2S |
| 78 | GPIO3_C5 | GPIO3_C5，General-purpose GPIO |
| 79 | CODEC_AOL | audiooutput |
| 80 | CODEC_AOR | audiooutput |
| 81 | MICBIAS | MIC bias |
| 82 | MICIN-P | audioinput |
| 83 | MICIN-N | audioinput |
| 84 | HP_DET | Headphone detection pin |
| 85 | LCD_D23 | GPIO2_D1，muxed as LCD，MAC |
| 86 | LCD_D22 | GPIO2_D0，muxed as LCD，MAC |
| 87 | LCD_D21 | GPIO2_C7，muxed as LCD，MAC |
| 88 | LCD_D20 | GPIO2_C6，muxed as LCD，MAC |
| 89 | I2C2_SCL_LCD_19 | GPIO2_C5，muxed as LCD，MAC，I2C2 |
| 90 | I2C2_SDA_LCD_18 | GPIO2_C4，muxed as LCD，MAC，I2C2 |
| 91 | LCD_D17 | GPIO2_C3，muxed as LCD，MAC |
| 92 | LCD_D16 | GPIO2_C2，muxed as LCD，MAC |
| 93 | LCD_D15 | GPIO2_C1，muxed as LCD，MAC |
| 94 | LCD_D14 | GPIO2_C0，muxed as LCD，MAC |
| 95 | LCD_D13 | GPIO2_B7，muxed as LCD，MAC |
| 96 | LCD_D12 | GPIO2_B6，muxed as LCD，MAC |
| 97 | LCD_D11 | GPIO2_B5，muxed as LCD，MAC |
| 98 | LCD_D10 | GPIO2_B4，muxed as LCD，MAC |
| 99 | LCD_D9 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 100 | LCD_D8 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 101 | LCD_D7 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 102 | LCD_D6 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 103 | LCD_D5 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 104 | LCD_D4 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 105 | LCD_D3 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 106 | LCD_D2 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 107 | LCD_D1 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |
| 108 | LCD_D0 | muxed as RGB, LVDS, MIPI port, cannot be used as independent GPIO |


Core BoardPin Definition4

### Core BoardPin Definition4

| Pin No. | Signal | Description |
| --- | --- | --- |
| 109 | GND | Ground |
| 110 | GND | Ground |
| 111 | LCD_HSYNC | GPIO2_B1，muxed as LCD |
| 112 | LCD_VSYNC | GPIO2_B2，muxed as LCD |
| 113 | LCD_CLK | GPIO2_B0，muxed as LCD |
| 114 | LCD_DEN | GPIO2_B3，muxed as LCD |
| 115 | VCC_RK816IN | Core BoardPower input, 4.8 to 5.5V |
| 116 | VCC_RK816IN | Core BoardPower input, 4.8 to 5.5V |
| 117 | VCC_RK816IN | Core BoardPower input, 4.8 to 5.5V |
| 118 | PWRON | PMU power-on pin, Active low |
| 119 | VCC_RTC | RTCpower supplypin，3Vinput |
| 120 | BAT_P | Battery input pin |
| 121 | BAT_N | Battery input pin |
| 122 | RTC_CLKOUT | 32768Hz clock output |
| 123 | VCC28_CIF | PMU LDO1output，Adjustable voltage |
| 124 | VCC18_CIF | PMU LDO2output，Adjustable voltage |
| 125 | VCC_TP | PMU LDO6output，Adjustable voltage |
| 126 | VCCA_CODEC | PMU LDO5output，Adjustable voltage |
| 127 | RESET | CPU reset pin, Active low |
| 128 | ADCIN2 | ADCinputpin, 3.3V reference source |
| 129 | ADCIN1 | ADCinputpin, 3.3V reference source |
| 130 | ADCIN0 | ADCinputpin, 3.3V reference source |
| 131 | CIF_CLKOUT | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 132 | CIF_CLKIN | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 133 | CIF_HREF | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 134 | CIF_VSYNC | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 135 | CIF_D7 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 136 | CIF_D6 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 137 | CIF_D5 / | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 138 | CIF_D4 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 139 | CIF_D3 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 140 | CIF_D2 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 141 | CIF_D1 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 142 | CIF_D0 | BT656/BT601camera data pair cannot be used as general-purpose GPIO |
| 143 | CIF_PDN1 | GPIO3_D7，General-purpose GPIO |
| 144 | VCC_SYS | Core-board main power output |


hardware interface

Power key and socket

x3128bv2 uses 12V DC power supply. The black socket in the picture is the 12V DC Power input socket.

Debug UART

x3128 reserves one UARTUART2 for debugging, and 2 generalUARTs, UART0 and UART1 respectively. Note that UART2 is used as the debugging UART by default, and it needs to be used with the UART small board to convert the level to RS232 level.

HDMI Interface

The x3128 Development Board uses miniHDMI Interface, and with the miniHDMI extension cable, it can perfectly present audio and video signals on monitoring terminals that support the HDMI2.0 protocol, such as TVs, monitors, etc. Note that since RK3128 is a low-cost solution chip, HDMI cannot be used with the LCD screen at the same time.

camera interface

This interface is a universal 24PIN camera interface, supports the full range of OV cameras, and eliminates the need for a camera adapter board. For different models of cameras, just adjust the Output Voltage according to the specifications of the camera.

Ethernet Interface

x3128 supports Gigabit wired Ethernet Interface, with onboard RTL8211E, users can access the Internet through wired Ethernet and experience extremely fast network.

headphone interface

Connect the headset to this interface to achieve headset output. Of course, it can also be directly sent to the power amplifier input through this interface, such as the audio input port of a home theater, so that the Development Board's sound source Signal can be displayed through the home theater. Note that this interface needs to be connected to 3-wire headphones. If the headphones have a MIC, the output audio will be severely distorted.

speaker interface

The Development Board directly supports speaker output. Connect the speaker to the interface in the picture above to realize speaker output.

recording interface

Development Boardsupports recording input. The headset has been loaded directly to the Development Board, so there is no need to input through an external headset.

TF card slot

x3128 leads to an external TF card, which can store some data files through this channel.

Independent buttons

In addition to the reset and power keys, X3128 also has four independent keys. In the schematic diagram, the corresponding relationships are as follows:

| Key | Function |
| --- | --- |
| Recovery/K1 | Independent button/recovery button |
| K2 | Independent buttons |
| K3 | Independent buttons |
| K4 | Independent buttons |


USB OTG Interface

The interfacefor programs programming, synchronization, etc. It can also realize the function of HOST through OTG line.

USB HOST Interface

In order to save costs, RK3128 only comes with 1ch USB HOST interface. The x3128 Development Board has expanded four chHOST interfaces through the HUB chip, two of which are for connecting USB WIFI/Bluetooth and PCIe Interface, and the other two are led out through the standard USB interface.

power button

After connecting the external power adapter, the Development Board will automatically power on. After entering the Android system, touch the POWER button to sleep, and press the POWER button again to wake up. Press and hold the POWER button to display the shutdown interface, and follow the on-screen prompts to shut down.

reset button

When the system is running, lightly press the RESET key to restart the Development Board to implement a hard reset function.

Recovery button

You need to press this button to enter recovery mode when flashing.

LCD Interface

Backup battery

The backup battery ensures that the RTC can still work after a power outage and ensures that the system time is not lost.

buzzer

The buzzer is an active buzzer, which will buzz when there is DC power, and controls the on and off of the power supply through a transistor.

Infrared integrated receiver

The HS0038B integrated receiving head is used here, which has the advantages of high sensitivity and easy use. We can use it to achieve wireless remote control and use the x3128 Development Board as a high-performance quad-core set-top box.

PCIe Interface

The x3128 Development Board already has PCIe Interface onboard, and mobile Internet access can be achieved after installing a 3G/4G card.
