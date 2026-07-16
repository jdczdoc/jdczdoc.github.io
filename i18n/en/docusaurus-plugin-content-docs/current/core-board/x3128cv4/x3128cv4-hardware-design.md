---
sidebar_position: 4
title: Hardware Design
description: X3128CV4核心板 hardware design notes
---

# Hardware Design

Hardware Design

电源设计

X3128CV4Core Board采用5Vpower supply的方式，用户只需给第115、116、117pin供5V的直流电，Core Board即可以正常工作。另外，Core Board还有一些其他的电源pin，具体定义如下：

1、115、116、117脚：Core Board电源power supply端，默认input4.8到5.5V/1A；

2、119脚：RTCPower input，3V/50mA；

3、120、121脚：电池 interface，for 电池power supply；

4、72、73、109、110脚：Core Board公共Ground；

5、1、144脚：通过电源适配器或电池给Core Boardpower supply后，PMU的公共Power output端，通常电压在3.5V到5V之间，具体受Input Voltage决定，它可以给整机power supply；

6、123、124、125、126脚：PMU的LDO1、LDO2、LDO6、LDO5电压output，具体Adjustable voltage；

7、36、37脚：3.3Voutput，可for 底板power supply。

USB设计

RK3128有一chHOST口和一chOTG口，其中OTG口即可作HOST口也可作DEVICE用，即标准的OTG口。

在PCB走线时，Core Board的第23、24pin，即HOST_DP、HOST_DMpin为一对差分线，第25、26pin，即OTG_DP、OTG_DMpin为一对养分线，他们必须走等长差分线，且阻抗匹配为90欧，否则会出现USB传输不稳定的现象。

HDMI设计

RK3128芯片自带HDMI控制器，supports HDMI2.0协议。Core Board上第12到19共8个pin，4对差分线，必须走等长差分线，且阻抗匹配为100欧，否则会出现HDMI画面丢色，断断续续等问题。

LCD Interface设计

阻抗匹配为100欧。

底板设计

在底板设计时，如果需要千兆以太网，底板上需要做掏空设计。推荐在设计时，统一都做掏空处理，这时x3128cv4和x3128cv4p两者都完全兼容。
