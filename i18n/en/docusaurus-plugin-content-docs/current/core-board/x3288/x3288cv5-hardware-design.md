---
sidebar_position: 4
title: Hardware Design
description: X3288CV5核心板 hardware design notes
---

# Hardware Design

Hardware Design

电源设计

X3288CV5Core Board采用5Vpower supply的方式，用户只需给第159、160pin供5V的直流电，Core Board即可以正常工作。另外，Core Board还有一些其他的电源pin，具体定义如下：

1、159、160脚：Core Board电源power supply端，默认input4.5到5.5V/2A；

2、161脚：使用OTG烧写映像，或连接device设备时，由PC机通过USB延长线input5V/500mA电压，通常该pin连接到OTG的电源端；

3、162、163脚：悬空；

4、164、165脚：Core Board公共Ground；

5、166、167脚：悬空或连接到159、160pin；

6、168脚：RTCpower supplypin，通常该pin通过后备电池power supply，以保持实时时钟；

7、169脚：3.3Voutput，可for 底板power supply。

USB设计

RK3288有两chHOST口和一chOTG口，其中OTG口即可作HOST口也可作DEVICE用，即标准的OTG口。

注意，HOST1口和HOST2口有区别，默认HOST1口无法直接接低速的USB设备，如鼠标键盘等，需要通过HUB芯片才能接一些低速设备，而HOST2则可以直接使用各种高低速设备。在后续贴RK3288W芯片的Core Board上，该问题将不再存在。

HDMI设计

RK3288芯片自带HDMI控制器，supports HDMI2.0协议。Core Board上第47到54共8个pin，4对差分线，必须走等长差分线，且阻抗匹配为100欧，否则会出现HDMI画面丢色，断断续续等问题。

LVDS设计

RK3288芯片自带RGB和LVDS interface的LCD控制器，LVDS为差分Signal线，适合驱动分辨率较高的液晶屏。它包括12组传输线，其中10组为数据线，另外两组为时钟线，对应Core Board的5和28pin。

LVDS interface能够提供很高的数据传输率的同时，保证很低的功耗，其数据速率可以达到几百Mbps到2Gbps。在走线时，12组传输线必须走等长差分线，且阻抗匹配为100欧。

MIPI设计
