---
sidebar_position: 6
title: 扩展接口定义
description: I3566 主板 PH 座、GPIO、串口、显示、背光和 USB 扩展接口定义
---

# 扩展接口定义

本页整理 I3566 主板上除核心板 172PIN 以外的板端扩展接口，包括 IO/IIC、DEBUG、SPI/ADC、RTC、GPIO、RS485、RS232、TTL 串口、音频、红外、触摸、EDP、风扇、VIN、LVDS/DSI、背光和 USB 2.0 等接口。

## J45：IO / IIC 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | GPIO4_A3 | GPIO输出 | 3.3V GPIO |
| 3 | GPIO4_A2 | GPIO输出 | 3.3V GPIO |
| 4 | GPIO4_A1 | GPIO输出 | 3.3V GPIO |
| 5 | GPIO4_A0 | GPIO输出 | 3.3V GPIO |
| 6 | GPIO3_D7 | GPIO输出 | 3.3V GPIO |
| 7 | GPIO3_D6 | GPIO输出 | 3.3V GPIO |
| 8 | I2C2_SCL_M1 | GPIO输出 | 3.3V GPIO，可复用作I2C接口 |
| 9 | I2C2_SDA_M1 | GPIO输出 | 3.3V GPIO，可复用作I2C接口 |
| 10 | GND | 参考地 |  |

## J22：DEBUG 调试串口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | UART2_TX_M0 | 调试串口输出 | 1.8V GPIO，默认用作调试串口 |
| 3 | UART2_RX_M0 | 调试串口输出 | 1.8V GPIO，默认用作调试串口 |
| 4 | GND | 参考地 |  |

## J43：SPI / ADC 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | GND | 参考地 |  |
| 3 | SPI2_MOSI | GPIO输出 | 3.3V GPIO，可复用作SPI接口 |
| 4 | SPI2_CS0 | GPIO输出 | 3.3V GPIO，可复用作SPI接口 |
| 5 | SPI2_CS1 | GPIO输出 | 3.3V GPIO，可复用作SPI接口 |
| 6 | SPI2_MISO | GPIO输出 | 3.3V GPIO，可复用作SPI接口 |
| 7 | SPI2_CLK | GPIO输出 | 3.3V GPIO，可复用作SPI接口 |
| 8 | GND | 参考地 |  |
| 9 | ADC2 | AD输入 | 模数转换输入，基准电压1.8V |
| 10 | ADC1 | AD输入 | 模数转换输入，基准电压1.8V |

## J37：RTC 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | GND | 参考地 |  |
| 2 | RTC_VBAT | RTC供电 | 3V/0.6uA电池供电 |

## J29：GPIO 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | GPIO4_C0 | GPIO输出 | 3.3V GPIO |
| 3 | GPIO4_C1 | GPIO输出 | 3.3V GPIO |
| 4 | GPIO4_B6 | GPIO输出 | 3.3V GPIO |
| 5 | GPIO4_B7 | GPIO输出 | 3.3V GPIO |
| 6 | GND | 参考地 |  |

## J31：RS485 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | RS485_4B | RS485输出 |  |
| 3 | RS485_4A | RS485输出 |  |
| 4 | GND | 参考地 |  |

## J7：RS232 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | NC |  |  |
| 2 | RS232_TXD1 | 串口发送信号 | RS232标准电平 |
| 3 | RS232_RXD1 | 串口接收信号 | RS232标准电平 |
| 4 | GND | 参考地 |  |

## J26：TTL 3.3V 串口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | UART6_TX | 串口发送信号 | 3.3V TTL标准电平 |
| 3 | UART6_RX | 串口接收信号 | 3.3V TTL标准电平 |
| 4 | GND | 参考地 |  |

## J21：TTL 1.8V 串口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | UART0_TX | 串口发送信号 | 1.8V TTL标准电平 |
| 3 | UART0_RX | 串口接收信号 | 1.8V TTL标准电平 |
| 4 | GND | 参考地 |  |

## J23：喇叭接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | SPKN_OUT | 喇叭输出接口 |  |
| 2 | SPKP_OUT | 喇叭输出接口 |  |

## J28：MIC 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | MIC1_N | 耳麦接口 | 麦克风输入接口 |
| 2 | MIC1_P | 耳麦接口 | 麦克风输入接口 |

## J24：IR 红外接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | PWM3_IR | 红外接口 | 红外遥控信号接收端口 |
| 2 | GND | 参考地 |  |
| 3 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |

## J36：TP 触摸接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | TP_RST_L | GPIO | 3.3V GPIO，用于触摸屏复位 |
| 3 | TP_INT_L | GPIO | 3.3V GPIO，用于触摸屏中断 |
| 4 | I2C4_SDA_M0_TP | GPIO | 3.3V GPIO，用于触摸屏I2C控制 |
| 5 | I2C4_SCL_M0_TP | GPIO | 3.3V GPIO，用于触摸屏I2C控制 |
| 6 | GND | 参考地 |  |

## J34：EDP 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 2 | VCC_3V3 | 电源输出 | 对外3.3V电压输出 |
| 3 | GND | 参考地 | GND |
| 4 | GND | 参考地 | GND |
| 5 | EDP_TX_D0N | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 6 | EDP_TX_D0P | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 7 | EDP_TX_D1N | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 8 | EDP_TX_D1P | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 9 | EDP_TX_D2N | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 10 | EDP_TX_D2P | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 11 | EDP_TX_D3N | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 12 | EDP_TX_D3P | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 13 | GND | 参考地 |  |
| 14 | GND | 参考地 |  |
| 15 | EDP_AUXN | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 16 | EDP_AUXP | EDP差分信号 | EDP接口，用于驱动EDP屏幕 |
| 17 | GND | 参考地 |  |
| 18 | GND | 参考地 |  |
| 19 | GPIO1_B0 | GPIO | 3.3V GPIO |
| 20 | LCD_BL_PWM | GPIO | GPIO，复用作PWM，用于背光控制 |

## J9：FAN 风扇接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | GND | 参考地 |  |
| 2 | VCC12V | 12V电源输出 | 程序控制12V电源输出，接散热风扇 |

## J44：VIN 电源输入接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | GND | 参考地 |  |
| 2 | GND | 参考地 |  |
| 3 | VIN | 12V电源输入 | 外部12V直流输入，和J1复用，二者选其一供电即可 |
| 4 | VIN | 12V电源输入 | 外部12V直流输入，和J1复用，二者选其一供电即可 |

## J32：LVDS / DSI 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC_OUT | 电源输出 | 对外屏供电输出，12V/5V/3.3V可选，电压通过J33跳线帽决定 |
| 2 | VCC_OUT | 电源输出 | 对外屏供电输出，12V/5V/3.3V可选，电压通过J33跳线帽决定 |
| 3 | VCC_OUT | 电源输出 | 对外屏供电输出，12V/5V/3.3V可选，电压通过J33跳线帽决定 |
| 4 | GND | 参考地 |  |
| 5 | GND | 参考地 |  |
| 6 | GND | 参考地 |  |
| 7 | MIPI_DSI_TX0_D0N/LVDS_TX0_D0N | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 8 | MIPI_DSI_TX0_D0P/LVDS_TX0_D0P | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 9 | MIPI_DSI_TX0_D1N/LVDS_TX0_D1N | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 10 | MIPI_DSI_TX0_D1P/LVDS_TX0_D1P | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 11 | MIPI_DSI_TX0_D2N/LVDS_TX0_D2N | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 12 | MIPI_DSI_TX0_D2P/LVDS_TX0_D2P | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 13 | GND | 参考地 |  |
| 14 | GND | 参考地 |  |
| 15 | MIPI_DSI_TX0_CLKN/LVDS_TX0_CLKN | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 16 | MIPI_DSI_TX0_CLKP/LVDS_TX0_CLKP | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 17 | MIPI_DSI_TX0_D3N/LVDS_TX0_D3N | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 18 | MIPI_DSI_TX0_D3P/LVDS_TX0_D3P | DSI/LVDS差分对 | DSI、LVDS差分信号输出，通过程序选择DSI或LVDS |
| 19 | GND | 参考地 |  |
| 20 | GND | 参考地 |  |

## J42：背光接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | VCC12V_DCIN | 电源输出 | 对外12V电压输出 |
| 2 | VCC12V_DCIN | 电源输出 | 对外12V电压输出 |
| 3 | LCD_PWREN_H | GPIO | 3.3V GPIO |
| 4 | LCD_BL_PWM | GPIO | 3.3V或5V PWM控制，电平可通过电阻配置，默认3.3V |
| 5 | GND | 参考地 |  |
| 6 | GND | 参考地 |  |

## J38 / J39 / J40：USB 2.0 接口

| 引脚编号 | 信号 | 类型 | 描述 |
| --- | --- | --- | --- |
| 1 | USB_5V | 电源输出 | 对外5V电压输出 |
| 2 | HOST_DM | USB差分对 | USB HOST信号，外扩USB设备 |
| 3 | HOST_DP | USB差分对 | USB HOST信号，外扩USB设备 |
| 4 | GND | 参考地 |  |


