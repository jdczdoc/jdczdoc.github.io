---
sidebar_position: 2
title: Dimensions and Structure
description: X3128 development board hardware appearance, drawings, and mechanical parameters
---

# Dimensions and Structure

Core Board Appearance

Core Board front view

Core Board back view

Mechanical Drawing

Core Board structural dimensions and pin arrangement:

### Mechanical Parameters

| Item | Parameter |
| --- | --- |
| Package | Castellated-hole package |
| Core Board Size | 45mm*45mm*3mm |
| Pin Pitch | 1.2mm |
| Pad Size | 1.8mm*0.7mm |
| Pin Count | 144PIN |
| PCB Layers | 6th floor |


BottomPackage

Product Function Characteristics

Core: ARM Cortex-A7 quad-core;

CPU Clock：1.3GHz*4；

Memory: 1GB DDR3, compatible with 256M/512M/2GB DDR3;

Flash: supports 4GB/8GB/16GB eMMC optional, 8GB eMMC standard, compatible with nand flash;

LVDS/MIPI interface, Core Board can support 24-bit RGB interface;

2chUSB HOST interface；

USB OTG interface；

2chTTLUART；

1chTF card interface (muxed as debug UARTUART2);

reset button;

Software Key machine button;

Four channel independent buttons;

supports external speakers;

MICinput；

Headphone output interface;

supports SPDIF optical fiber audiooutput;

supports stepless adjustment of backlight;

supports HDMI Interface (choose one of HDMI and LCD, cannot be displayed at the same time);

supports 5-point capacitive touch;

Onboard RT8723 WIFI/BT module;

supports G-sensor；

supports a variety of SPI, I2C, UART, PWM and other peripheral device extensions;

supports MPEG4, H.263, H.264, MJPEG video encoding;

supports almost full format video decoding;

supports 2D, 3D high-performance graphics acceleration;

supports RTC clock real-time saving;

supports Gigabit wired Ethernet RTL8211E;

supports BT656/BT601 camera interface;

supports GPS interface；

supports GPRS interface；

supports PCIe Interface3G, 4G module;

supports USB mouse, keyboard;

supports integrated infrared receiver;

Software resources

x3128Development Board supports Android6.0 operating system, Linux system will be supported soon, the detailed driver supports list is as follows:

### x3128Development Board driver supports list

| system / driver | Linux3.10+ / Android6.0 | Linux3.10+ / QT |
| --- | --- | --- |
| 7 inch MIPI LCD(1024*600) | ● | ● |
| PMIC driver (RK816) | ● | ● |
| capacitive touch | ● | ● |
| eMMC driver | ● | ● |
| SD card driver | ● | ● |
| Independent buttons | ● | ● |
| Gsensor | ● | no need |
| buzzer driver | ● | ● |
| Infrared remote control | ● | ● |
| Key machine | ● | ● |
| wake up from sleep | ● | no need |
| 2chUSB HOST driver | ● | ● |
| 1chUSB OTG driver | ● | ● |
| audio | ● | coming soon |
| recording | ● | coming soon |
| USB WIFI/BT4.0（RT8723BU） | ● | coming soon |
| Parallel camera driver | ● | coming soon |
| USB port camera driver | ● | ● |
| UART | ● | ● |
| HDMI | ● | coming soon |
| 3G module (3G dongle) | ● | no need |
| 3G module (PCIe Interface) | ● | no need |
| GPS module | ● | ● |
| Gigabit Ethernet | ● | ● |
| USB mouse keyboard | ● | ● |


Hardware resources

Hardware interfaceDescription

### Hardware interface introduction

| label | Name | Description |
| --- | --- | --- |
| 【1】 | CPU | RK3128，ARM Cortex A7,4*1.3GHz |
| 【2】 | DDR3 | H5TQ4G63AFR，DDR3，1GBytes |
| 【3】 | eMMC | THGBMBG6D1KBAIL，8GB MLC eMMC |
| 【4】 | PCIe Interface | 3G, 4G communication module interface |
| 【5】 | RESET | reset button |
| 【6】 | GPIO | GPIO expansion port |
| 【7】 | Independent buttons | Recovery key, key K1 |
| 【8】 | Independent buttons | Button K2 |
| 【9】 | Independent buttons | Button K3 |
| 【10】 | Independent buttons | Button K4 |
| 【11】 | POWER | Power button |
| 【12】 | WIFI/BT | RT8723BU WIFI/BT two-in-one module |
| 【13】 | UART2 | UART2, TTL level, default debug UART |
| 【14】 | TF card | TF card holder |
| 【15】 | SIM card holder | 3G, 4G communication module mobile phone card interface |
| 【16】 | MIPI/LVDS interface | Screen connected to MIPI or LVDS interface |
| 【17】 | buzzer | DC buzzer |
| 【18】 | Infrared receiver | HS0038 Infrared integrated receiver |
| 【19】 | LED | Four independent LED ports |
| 【20】 | RTC battery socket | RTC battery holder, 3V |
| 【21】 | Lithium battery interface | 3.7V lithium battery interface |
| 【22】 | UART1 | UART1, TTL level |
| 【23】 | UART0 | UART0, TTL level |
| 【24】 | microphone | Microphone input |
| 【25】 | speaker interface | external speaker interface |
| 【26】 | Headphone holder | Headphone output, needs to be connected to standard 3-wire headphones |
| 【27】 | SPDIF | Optical fiber audiooutput |
| 【28】 | camera interface | Standard 24PIN camera interface |
| 【29】 | Gigabit network port | RT8211E  interface |
| 【30】 | HDMI | HDMIoutput interface |
| 【31】 | USB HOST | HUB chip extension, HOST |
| 【32】 | USB HOST | HUB chip extension, HOST |
| 【33】 | USB OTG | USB OTG Interface |
| 【34】 | DC block | 12V DCPower input |
