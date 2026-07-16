---
title: Pin Definition
sidebar_position: 5
---
# Pin Definition

The I527BV3 development board uses the X527CV2 core module. The module has 200 castellated pins, with 50 pins on each side. The table below lists the complete core-module pinout.

:::warning Voltage levels
GPIO banks may operate at 1.8 V or 3.3 V. Carrier-board peripherals must use the same I/O level as the corresponding bank. High-speed, analog, power, and dedicated signals marked as unavailable for GPIO must not be treated as ordinary GPIO pins.
:::

| Pin | Signal | Type | Description |
|---:|---|---|---|
| 1 | `EDP-AUXN` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 2 | `EDP-AUXP` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 3 | `EDP-TX3N` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 4 | `EDP-TX3P` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 5 | `EDP-TX2N` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 6 | `EDP-TX2P` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 7 | `EDP-TX1N` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 8 | `EDP-TX1P` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 9 | `EDP-TX0N` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 10 | `EDP-TX0P` | eDP interface, not available as GPIO | I/O level: 1.8 V |
| 11 | `HTXCN` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 12 | `HTXCP` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 13 | `HTX0N` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 14 | `HTX0P` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 15 | `HTX1N` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 16 | `HTX1P` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 17 | `HTX2N` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 18 | `HTX2P` | HDMI output, not available as GPIO | I/O level: 1.8 V |
| 19 | `SDC0-CLK` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 20 | `SDC0-D0` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 21 | `SDC0-D1` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 22 | `SDC0-D2` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 23 | `SDC0-D3` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 24 | `SDC0-CMD` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 25 | `SDC0-DET` | SDMMC signal multiplexed with GPIO | I/O level: 3.3 V |
| 26 | `U3-PCIE21-RXN` | PCIe/USB 3.0 shared signal, not available as GPIO | I/O level: 1.8 V |
| 27 | `U3-PCIE21-RXP` | PCIe/USB 3.0 shared signal, not available as GPIO | I/O level: 1.8 V |
| 28 | `U3-PCIE21-TXN` | PCIe/USB 3.0 shared signal, not available as GPIO | I/O level: 1.8 V |
| 29 | `U3-PCIE21-TXP` | PCIe/USB 3.0 shared signal, not available as GPIO | I/O level: 1.8 V |
| 30 | `PCIE21-REFCLKN` | PCIe signal, not available as GPIO | I/O level: 1.8 V |
| 31 | `PCIE21-REFCLKP` | PCIe signal, not available as GPIO | I/O level: 1.8 V |
| 32 | `GND` | System ground |  |
| 33 | `RGMII0-CLKIN-125M` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 34 | `RGMII0-MDC` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 35 | `RGMII0-MDIO` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 36 | `RGMII0-RXCK` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 37 | `RGMII0-RXCTL` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 38 | `RGMII0-RXD0` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 39 | `RGMII0-RXD1` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 40 | `PHYRSTB` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 41 | `FEL` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 42 | `RGMII0-RXD3` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 43 | `RGMII0-RXD2` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 44 | `RGMII0-TXD3` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 45 | `RGMII0-TXCTL` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 46 | `RGMII0-TXD0` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 47 | `RGMII0-TXD1` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 48 | `RGMII0-TXCK` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 49 | `EPHY-CLK-25M` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 50 | `PCIE21-PERSTn` | PCIe signal multiplexed with GPIO | I/O level: 3.3 V |
| 51 | `PCIE21-WAKEn` | PCIe signal multiplexed with GPIO | I/O level: 3.3 V |
| 52 | `RGMII0-TXD2` | RGMII signal multiplexed with GPIO | I/O level: 3.3 V |
| 53 | `PCIE21-CLKREQn` | PCIe signal multiplexed with GPIO | I/O level: 3.3 V |
| 54 | `MCSI_PWDN` | GPIO | I/O level: 3.3 V |
| 55 | `MCSI_RESET` | GPIO | I/O level: 1.8 V or 3.3 V |
| 56 | `MCSI_SDA` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 57 | `MCSI_SCK` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 58 | `MCSI_MCLK` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 59 | `GND` | System ground |  |
| 60 | `LVDS0_D0N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 61 | `LVDS0_D0P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 62 | `LVDS0_D1N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 63 | `LVDS0_D1P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 64 | `LVDS0_D2N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 65 | `LVDS0_D2P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 66 | `LVDS0_CKN` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 67 | `LVDS0_CKP` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 68 | `LVDS0_D3N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 69 | `LVDS0_D3P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 70 | `PJ22` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 71 | `PJ23` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 72 | `PJ21` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 73 | `PJ20` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 74 | `PJ24` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 75 | `PJ25` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 76 | `MICIN1P` | Analog audio input, not available as GPIO |  |
| 77 | `MICIN1N` | Analog audio input, not available as GPIO |  |
| 78 | `MICIN2P` | Analog audio input, not available as GPIO |  |
| 79 | `LINEOUTLP` | Analog audio output, not available as GPIO |  |
| 80 | `LINEOUTLN` | Analog audio output, not available as GPIO |  |
| 81 | `LINEOUTRN` | Analog audio output, not available as GPIO |  |
| 82 | `LINEOUTRP` | Analog audio output, not available as GPIO |  |
| 83 | `HP-DET` | Headphone-detect signal, not available as GPIO |  |
| 84 | `MBIAS` | Audio bias voltage |  |
| 85 | `HS-MIC` |  |  |
| 86 | `HPOUTL` | Analog audio output, not available as GPIO |  |
| 87 | `HPOUTFB` |  |  |
| 88 | `HPOUTR` | Analog audio output, not available as GPIO |  |
| 89 | `WL-SDIO-CLK` | SDIO signal multiplexed with GPIO | I/O level: 1.8 V |
| 90 | `WL-SDIO-D1` | SDIO signal multiplexed with GPIO | I/O level: 1.8 V |
| 91 | `WL-SDIO-D0` | SDIO signal multiplexed with GPIO | I/O level: 1.8 V |
| 92 | `WL-SDIO-CMD` | SDIO signal multiplexed with GPIO | I/O level: 1.8 V |
| 93 | `WL-SDIO-D3` | SDIO signal multiplexed with GPIO | I/O level: 1.8 V |
| 94 | `WL-SDIO-D2` | SDIO signal multiplexed with GPIO | I/O level: 1.8 V |
| 95 | `BT-PCM-CLK` | GPIO | I/O level: 1.8 V |
| 96 | `BT-PCM-DOUT` | GPIO | I/O level: 1.8 V |
| 97 | `BT-PCM-DIN` | GPIO | I/O level: 1.8 V |
| 98 | `BT-PCM-SYNC` | GPIO | I/O level: 1.8 V |
| 99 | `LRADC1` | ADC signal, not available as GPIO | ADC level: 1.8 V |
| 100 | `LRADC0` | ADC signal, not available as GPIO | ADC level: 1.8 V |
| 101 | `VCC-SYS-5V` | 5 V core-board input | System 5 V supply |
| 102 | `VCC-SYS-5V` | 5 V core-board input | System 5 V supply |
| 103 | `VCC-SYS-5V` | 5 V core-board input | System 5 V supply |
| 104 | `GND` | System ground |  |
| 105 | `GND` | System ground |  |
| 106 | `GND` | System ground |  |
| 107 | `VBAT` | Battery input | Battery supply |
| 108 | `VBAT` | Battery input | Battery supply |
| 109 | `DCDC4` | DCDC4 power output | 3.3 V |
| 110 | `CLDO3` | CLDO3 power output | 3.3 V |
| 111 | `BT-UART-RTS` | GPIO | I/O level: 1.8 V |
| 112 | `BT-UART-RX` | GPIO | I/O level: 1.8 V |
| 113 | `BT-UART-TX` | GPIO | I/O level: 1.8 V |
| 114 | `BT-UART-CTS` | GPIO | I/O level: 1.8 V |
| 115 | `PG10` | GPIO | I/O level: 1.8 V |
| 116 | `USB0-VBUSDET` | GPIO |  |
| 117 | `GPADC3` | ADC signal, not available as GPIO | ADC level: 1.8 V |
| 118 | `GPADC4` | ADC signal, not available as GPIO | ADC level: 1.8 V |
| 119 | `WL-REG-ON` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 120 | `AP-WAKE-BT` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 121 | `WL-WAKE-AP` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 122 | `BT-RESETN` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 123 | `BT-WAKE-AP` | GPIO | I/O level: 1.8 V or 3.3 V; default 1.8 V |
| 124 | `AUDIO-MUTE` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 125 | `AUDIO-PWR-EN` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 126 | `AP-CK32K-OUT` | 32 kHz output, not available as GPIO |  |
| 127 | `PWRON` | PMIC enable signal, not available as GPIO |  |
| 128 | `S-TWI1-AC107-SDA` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 129 | `S-TWI1-AC107-SCK` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 130 | `ENET-PWREN` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 131 | `USB0-ID` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 132 | `S-IR-RX` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 133 | `TWI5-SDA` | GPIO | I/O level: 3.3 V |
| 134 | `TWI5-SCK` | GPIO | I/O level: 3.3 V |
| 135 | `CPUS-RX` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 136 | `CAN0-CPUS-TX` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 137 | `CPUS-TX` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 138 | `CAN0-CPUS-RX` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 139 | `WIFI-PWREN` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 140 | `PI11` | GPIO | I/O level: 3.3 V |
| 141 | `PI0` | GPIO | I/O level: 3.3 V |
| 142 | `PI1` | GPIO | I/O level: 3.3 V |
| 143 | `PI10` | GPIO | I/O level: 3.3 V |
| 144 | `UART6-GPS-TX` | GPIO | I/O level: 3.3 V |
| 145 | `AP-RESET` |  |  |
| 146 | `UART6-GPS-RX` | GPIO | I/O level: 3.3 V |
| 147 | `CTP1-RST` | GPIO | I/O level: 3.3 V |
| 148 | `CTP1-INT` | GPIO | I/O level: 3.3 V |
| 149 | `CTP0-INT` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 150 | `CTP0-RST` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 151 | `GND` | System ground |  |
| 152 | `LCD0-BL-PWREN` | GPIO | I/O level: 3.3 V |
| 153 | `LCD0-BL-PWM` | GPIO | I/O level: 3.3 V |
| 154 | `LCD1-BL-PWM` | GPIO | I/O level: 3.3 V |
| 155 | `LCD1-BL-PWREN` | GPIO | I/O level: 3.3 V |
| 156 | `CAN0-TX` | GPIO | I/O level: 3.3 V |
| 157 | `CAN0-RX` | GPIO | I/O level: 3.3 V |
| 158 | `UART-0-CPUX-TX` | GPIO | I/O level: 3.3 V |
| 159 | `UART-0-CPUX-RX` | GPIO | I/O level: 3.3 V |
| 160 | `CPUX-TMS` | GPIO | I/O level: 3.3 V |
| 161 | `CPUX-TCK` | GPIO | I/O level: 3.3 V |
| 162 | `TWI0-CTP0-SDA` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 163 | `TWI0-CTP0-SCK` | GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 164 | `I2S0-MCLK` | GPIO | I/O level: 3.3 V |
| 165 | `I2S0-BCLK` | GPIO | I/O level: 3.3 V |
| 166 | `I2S0-LRCK` | GPIO | I/O level: 3.3 V |
| 167 | `RST-AC107` | GPIO | I/O level: 3.3 V |
| 168 | `I2S0-DIN` | GPIO | I/O level: 3.3 V |
| 169 | `HCEC` | HDMI signal, not available as GPIO | I/O level: 1.8 V |
| 170 | `HHPD` | HDMI hot-plug signal, not available as GPIO | I/O level: 1.8 V |
| 171 | `EDP-HPD` | eDP hot-plug signal, not available as GPIO | I/O level: 1.8 V |
| 172 | `HSDA` | HDMI I2C signal, not available as GPIO | I/O level: 1.8 V |
| 173 | `HSCL` | HDMI I2C signal, not available as GPIO | I/O level: 1.8 V |
| 174 | `LVDS1_D3N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 175 | `LVDS1_D3P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 176 | `LVDS1_CKN` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 177 | `LVDS1_CKP` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 178 | `LVDS1_D1N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 179 | `LVDS1_D1P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 180 | `LVDS1_D0P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 181 | `LVDS1_D0N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 182 | `LVDS1_D2P` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 183 | `LVDS1_D2N` | LVDS signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 184 | `MCSI_CKP` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 185 | `MCSI_CKN` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 186 | `MCSI_D1N` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 187 | `MCSI_D1P` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 188 | `MCSI_D0P` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 189 | `MCSI_D0N` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 190 | `MCSI_D2N` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 191 | `MCSI_D2P` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 192 | `MCSI_D3N` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 193 | `MCSI_D3P` | MIPI camera signal multiplexed with GPIO | I/O level: 1.8 V or 3.3 V; default 3.3 V |
| 194 | `GND` | System ground |  |
| 195 | `USB0-DP` | USB 2.0 signal, not available as GPIO | I/O level: 3.3 V |
| 196 | `USB0-DM` | USB 2.0 signal, not available as GPIO | I/O level: 3.3 V |
| 197 | `USB1-DM` | USB 2.0 signal, not available as GPIO | I/O level: 3.3 V |
| 198 | `USB1-DP` | USB 2.0 signal, not available as GPIO | I/O level: 3.3 V |
| 199 | `USB2-DM` | USB 2.0 signal, not available as GPIO | I/O level: 3.3 V |
| 200 | `USB2-DP` | USB 2.0 signal, not available as GPIO | I/O level: 3.3 V |
