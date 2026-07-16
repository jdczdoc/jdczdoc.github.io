---
title: 引脚定义
sidebar_position: 5
---
# 引脚定义

I527BV3 开发板搭载 X527CV2 核心板。核心板采用 200 PIN 邮票孔封装，四边各 50 个引脚；下表为核心板完整引脚定义。

:::warning 电平注意
不同 GPIO Bank 可能工作在 1.8 V 或 3.3 V。底板外设电平必须与对应 Bank 一致。标记为“不可用作 GPIO”的高速、模拟、电源和专用信号不得按普通 GPIO 使用。
:::

| 引脚 | 信号 | 类型 | 说明 |
|---:|---|---|---|
| 1 | `EDP-AUXN` | EDP接口，不可用作GPIO | IO电平1.8V |
| 2 | `EDP-AUXP` | EDP接口，不可用作GPIO | IO电平1.8V |
| 3 | `EDP-TX3N` | EDP接口，不可用作GPIO | IO电平1.8V |
| 4 | `EDP-TX3P` | EDP接口，不可用作GPIO | IO电平1.8V |
| 5 | `EDP-TX2N` | EDP接口，不可用作GPIO | IO电平1.8V |
| 6 | `EDP-TX2P` | EDP接口，不可用作GPIO | IO电平1.8V |
| 7 | `EDP-TX1N` | EDP接口，不可用作GPIO | IO电平1.8V |
| 8 | `EDP-TX1P` | EDP接口，不可用作GPIO | IO电平1.8V |
| 9 | `EDP-TX0N` | EDP接口，不可用作GPIO | IO电平1.8V |
| 10 | `EDP-TX0P` | EDP接口，不可用作GPIO | IO电平1.8V |
| 11 | `HTXCN` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 12 | `HTXCP` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 13 | `HTX0N` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 14 | `HTX0P` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 15 | `HTX1N` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 16 | `HTX1P` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 17 | `HTX2N` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 18 | `HTX2P` | HDMI输出接口，不可用作GPIO | IO电平1.8V |
| 19 | `SDC0-CLK` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 20 | `SDC0-D0` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 21 | `SDC0-D1` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 22 | `SDC0-D2` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 23 | `SDC0-D3` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 24 | `SDC0-CMD` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 25 | `SDC0-DET` | SDMMC/GPIO 复用接口信号 | IO电平3.3V |
| 26 | `U3-PCIE21-RXN` | PCIE/USB3.0复用接口信号,不可用作GPIO | IO电平1.8V |
| 27 | `U3-PCIE21-RXP` | PCIE/USB3.0复用接口信号,不可用作GPIO | IO电平1.8V |
| 28 | `U3-PCIE21-TXN` | PCIE/USB3.0复用接口信号,不可用作GPIO | IO电平1.8V |
| 29 | `U3-PCIE21-TXP` | PCIE/USB3.0复用接口信号,不可用作GPIO | IO电平1.8V |
| 30 | `PCIE21-REFCLKN` | PCIE 接口信号,不可用作GPIO | IO电平1.8V |
| 31 | `PCIE21-REFCLKP` | PCIE 接口信号,不可用作GPIO | IO电平1.8V |
| 32 | `GND` | 系统地 |  |
| 33 | `RGMII0-CLKIN-125M` | RGMII与GPIO复用 | IO电平3.3V |
| 34 | `RGMII0-MDC` | RGMII与GPIO复用 | IO电平3.3V |
| 35 | `RGMII0-MDIO` | RGMII与GPIO复用 | IO电平3.3V |
| 36 | `RGMII0-RXCK` | RGMII与GPIO复用 | IO电平3.3V |
| 37 | `RGMII0-RXCTL` | RGMII与GPIO复用 | IO电平3.3V |
| 38 | `RGMII0-RXD0` | RGMII与GPIO复用 | IO电平3.3V |
| 39 | `RGMII0-RXD1` | RGMII与GPIO复用 | IO电平3.3V |
| 40 | `PHYRSTB` | RGMII与GPIO复用 | IO电平3.3V |
| 41 | `FEL` | RGMII与GPIO复用 | IO电平3.3V |
| 42 | `RGMII0-RXD3` | RGMII与GPIO复用 | IO电平3.3V |
| 43 | `RGMII0-RXD2` | RGMII与GPIO复用 | IO电平3.3V |
| 44 | `RGMII0-TXD3` | RGMII与GPIO复用 | IO电平3.3V |
| 45 | `RGMII0-TXCTL` | RGMII与GPIO复用 | IO电平3.3V |
| 46 | `RGMII0-TXD0` | RGMII与GPIO复用 | IO电平3.3V |
| 47 | `RGMII0-TXD1` | RGMII与GPIO复用 | IO电平3.3V |
| 48 | `RGMII0-TXCK` | RGMII与GPIO复用 | IO电平3.3V |
| 49 | `EPHY-CLK-25M` | RGMII与GPIO复用 | IO电平3.3V |
| 50 | `PCIE21-PERSTn` | PCIE接口信号与GPIO复用 | IO电平3.3V |
| 51 | `PCIE21-WAKEn` | PCIE接口信号与GPIO复用 | IO电平3.3V |
| 52 | `RGMII0-TXD2` | RGMII与GPIO复用 | IO电平3.3V |
| 53 | `PCIE21-CLKREQn` | PCIE接口信号与GPIO复用 | IO电平3.3V |
| 54 | `MCSI_PWDN` | GPIO | IO电平3.3V |
| 55 | `MCSI_RESET` | GPIO | IO电平1.8V/3.3V |
| 56 | `MCSI_SDA` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 57 | `MCSI_SCK` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 58 | `MCSI_MCLK` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 59 | `GND` | 系统地 |  |
| 60 | `LVDS0_D0N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 61 | `LVDS0_D0P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 62 | `LVDS0_D1N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 63 | `LVDS0_D1P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 64 | `LVDS0_D2N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 65 | `LVDS0_D2P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 66 | `LVDS0_CKN` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 67 | `LVDS0_CKP` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 68 | `LVDS0_D3N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 69 | `LVDS0_D3P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 70 | `PJ22` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 71 | `PJ23` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 72 | `PJ21` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 73 | `PJ20` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 74 | `PJ24` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 75 | `PJ25` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 76 | `MICIN1P` | 音频输入，不可用作GPIO |  |
| 77 | `MICIN1N` | 音频输入，不可用作GPIO |  |
| 78 | `MICIN2P` | 音频输入，不可用作GPIO |  |
| 79 | `LINEOUTLP` | 音频输出，不可用作GPIO |  |
| 80 | `LINEOUTLN` | 音频输出，不可用作GPIO |  |
| 81 | `LINEOUTRN` | 音频输出，不可用作GPIO |  |
| 82 | `LINEOUTRP` | 音频输出，不可用作GPIO |  |
| 83 | `HP-DET` | 耳机检测信号，不可用作GPIO |  |
| 84 | `MBIAS` | 音频偏置电压 |  |
| 85 | `HS-MIC` |  |  |
| 86 | `HPOUTL` | 音频输出，不可用作GPIO |  |
| 87 | `HPOUTFB` |  |  |
| 88 | `HPOUTR` | 音频输出，不可用作GPIO |  |
| 89 | `WL-SDIO-CLK` | SDIO信号与GPIO复用 | IO电平1.8V |
| 90 | `WL-SDIO-D1` | SDIO信号与GPIO复用 | IO电平1.8V |
| 91 | `WL-SDIO-D0` | SDIO信号与GPIO复用 | IO电平1.8V |
| 92 | `WL-SDIO-CMD` | SDIO信号与GPIO复用 | IO电平1.8V |
| 93 | `WL-SDIO-D3` | SDIO信号与GPIO复用 | IO电平1.8V |
| 94 | `WL-SDIO-D2` | SDIO信号与GPIO复用 | IO电平1.8V |
| 95 | `BT-PCM-CLK` | GPIO | IO电平1.8V |
| 96 | `BT-PCM-DOUT` | GPIO | IO电平1.8V |
| 97 | `BT-PCM-DIN` | GPIO | IO电平1.8V |
| 98 | `BT-PCM-SYNC` | GPIO | IO电平1.8V |
| 99 | `LRADC1` | ADC信号，不可用作GPIO | ADC电平1.8V |
| 100 | `LRADC0` | ADC信号，不可用作GPIO | ADC电平1.8V |
| 101 | `VCC-SYS-5V` | 核心板 5V 输入 | 系统5V供电 |
| 102 | `VCC-SYS-5V` | 核心板 5V 输入 | 系统5V供电 |
| 103 | `VCC-SYS-5V` | 核心板 5V 输入 | 系统5V供电 |
| 104 | `GND` | 系统地 |  |
| 105 | `GND` | 系统地 |  |
| 106 | `GND` | 系统地 |  |
| 107 | `VBAT` | 核心板 电池 输入 | 电池供电 |
| 108 | `VBAT` | 核心板 电池 输入 | 电池供电 |
| 109 | `DCDC4` | DCDC4 | 3.3V |
| 110 | `CLDO3` | CLDO3 | 3.3V |
| 111 | `BT-UART-RTS` | GPIO | IO电平1.8V |
| 112 | `BT-UART-RX` | GPIO | IO电平1.8V |
| 113 | `BT-UART-TX` | GPIO | IO电平1.8V |
| 114 | `BT-UART-CTS` | GPIO | IO电平1.8V |
| 115 | `PG10` | GPIO | IO电平1.8V |
| 116 | `USB0-VBUSDET` | GPIO |  |
| 117 | `GPADC3` | ADC信号，不可用作GPIO | ADC电平1.8V |
| 118 | `GPADC4` | ADC信号，不可用作GPIO | ADC电平1.8V |
| 119 | `WL-REG-ON` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 120 | `AP-WAKE-BT` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 121 | `WL-WAKE-AP` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 122 | `BT-RESETN` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 123 | `BT-WAKE-AP` | GPIO | IO电平1.8V/3.3V，默认1.8V |
| 124 | `AUDIO-MUTE` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 125 | `AUDIO-PWR-EN` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 126 | `AP-CK32K-OUT` | 32KHz信号输出，不可用作GPIO |  |
| 127 | `PWRON` | PMIC使能信号，不可用作GPIO |  |
| 128 | `S-TWI1-AC107-SDA` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 129 | `S-TWI1-AC107-SCK` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 130 | `ENET-PWREN` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 131 | `USB0-ID` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 132 | `S-IR-RX` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 133 | `TWI5-SDA` | GPIO | IO电平3.3V |
| 134 | `TWI5-SCK` | GPIO | IO电平3.3V |
| 135 | `CPUS-RX` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 136 | `CAN0-CPUS-TX` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 137 | `CPUS-TX` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 138 | `CAN0-CPUS-RX` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 139 | `WIFI-PWREN` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 140 | `PI11` | GPIO | IO电平3.3V |
| 141 | `PI0` | GPIO | IO电平3.3V |
| 142 | `PI1` | GPIO | IO电平3.3V |
| 143 | `PI10` | GPIO | IO电平3.3V |
| 144 | `UART6-GPS-TX` | GPIO | IO电平3.3V |
| 145 | `AP-RESET` |  |  |
| 146 | `UART6-GPS-RX` | GPIO | IO电平3.3V |
| 147 | `CTP1-RST` | GPIO | IO电平3.3V |
| 148 | `CTP1-INT` | GPIO | IO电平3.3V |
| 149 | `CTP0-INT` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 150 | `CTP0-RST` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 151 | `GND` | 系统地 |  |
| 152 | `LCD0-BL-PWREN` | GPIO | IO电平3.3V |
| 153 | `LCD0-BL-PWM` | GPIO | IO电平3.3V |
| 154 | `LCD1-BL-PWM` | GPIO | IO电平3.3V |
| 155 | `LCD1-BL-PWREN` | GPIO | IO电平3.3V |
| 156 | `CAN0-TX` | GPIO | IO电平3.3V |
| 157 | `CAN0-RX` | GPIO | IO电平3.3V |
| 158 | `UART-0-CPUX-TX` | GPIO | IO电平3.3V |
| 159 | `UART-0-CPUX-RX` | GPIO | IO电平3.3V |
| 160 | `CPUX-TMS` | GPIO | IO电平3.3V |
| 161 | `CPUX-TCK` | GPIO | IO电平3.3V |
| 162 | `TWI0-CTP0-SDA` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 163 | `TWI0-CTP0-SCK` | GPIO | IO电平1.8V/3.3V，默认3.3V |
| 164 | `I2S0-MCLK` | GPIO | IO电平3.3V |
| 165 | `I2S0-BCLK` | GPIO | IO电平3.3V |
| 166 | `I2S0-LRCK` | GPIO | IO电平3.3V |
| 167 | `RST-AC107` | GPIO | IO电平3.3V |
| 168 | `I2S0-DIN` | GPIO | IO电平3.3V |
| 169 | `HCEC` | HDMI信号，不可用作GPIO | IO电平1.8V |
| 170 | `HHPD` | HDMI热插拔信号，不可用作GPIO | IO电平1.8V |
| 171 | `EDP-HPD` | EDP热插拔信号，不可用作GPIO | IO电平1.8V |
| 172 | `HSDA` | HDMI I2C信号，不可用作GPIO | IO电平1.8V |
| 173 | `HSCL` | HDMI I2C信号，不可用作GPIO | IO电平1.8V |
| 174 | `LVDS1_D3N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 175 | `LVDS1_D3P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 176 | `LVDS1_CKN` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 177 | `LVDS1_CKP` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 178 | `LVDS1_D1N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 179 | `LVDS1_D1P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 180 | `LVDS1_D0P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 181 | `LVDS1_D0N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 182 | `LVDS1_D2P` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 183 | `LVDS1_D2N` | LVDS信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 184 | `MCSI_CKP` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 185 | `MCSI_CKN` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 186 | `MCSI_D1N` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 187 | `MCSI_D1P` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 188 | `MCSI_D0P` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 189 | `MCSI_D0N` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 190 | `MCSI_D2N` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 191 | `MCSI_D2P` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 192 | `MCSI_D3N` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 193 | `MCSI_D3P` | MIPI 摄像头接口信号与GPIO复用 | IO电平1.8V/3.3V，默认3.3V |
| 194 | `GND` | 系统地 |  |
| 195 | `USB0-DP` | USB2.0接口，不可用作GPIO | IO电平3.3V |
| 196 | `USB0-DM` | USB2.0接口，不可用作GPIO | IO电平3.3V |
| 197 | `USB1-DM` | USB2.0接口，不可用作GPIO | IO电平3.3V |
| 198 | `USB1-DP` | USB2.0接口，不可用作GPIO | IO电平3.3V |
| 199 | `USB2-DM` | USB2.0接口，不可用作GPIO | IO电平3.3V |
| 200 | `USB2-DP` | USB2.0接口，不可用作GPIO | IO电平3.3V |
