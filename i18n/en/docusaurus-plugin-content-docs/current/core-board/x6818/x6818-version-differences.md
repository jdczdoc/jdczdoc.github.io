---
sidebar_position: 6
title: Version Differences
description: X6818核心板 Version Differences
---

# Version Differences

Core BoardVersion Differences

| 版本Description | 修改Description | 修改目的 |
| --- | --- | --- |
| x4418cv2 | 32脚：GND / 147脚：GPIOE13 | 第一次对外发布 |
| x4418cv3.0 \| x6818cv3.0 | 32脚：GPIOE13 / 147脚：GPIOC28 / 优化走线，同时supports S5P6818 | 增加一ch自定义GPIO口。使用3.0版本可以完全兼容2.0，注意软件上GPIO对应起来。 |
| x4418cv3.2 \| x6818cv3.2 | Core Board上默认RTCpower supply电源去掉，修改为由底板power supply / CPU的并口camera模块电源由默认3.3V调整为通过PMUpower supply / 增加CPU的启动配置电阻 / 在Core Board背部增加8个滤波电容，for 稳定兼容2GBMemory配置 | 能够supports RTC通过纽扣电池power supply；supports 更多并口camera模组，否则会引起部分camera过热，发绿现象。硬件上务必在底板上给RTC供1.8V直流电，否则Core Board无法启动。如果用到了并口camera对应的GPIO口，务必将PMU的DLDO3打开power supply，否则GPIO口电平不受控。2.0和3.0版本的Core Board，需在底板上加多达14个启动配置电阻，自3.2版本后，可以省略 |
| x4418cv3.3 \| x6818cv3.3 | 32脚：ALIVEGPIO5 / 优化走线以降低成本 | 将第32脚由GPIOE13修改为ALIVEGPIO5，ALIVEGPIO5具有休眠后电压保持的Function，客户有这方面需要时可使用该pin。之前有使用过32脚的客户，通过软件上调整成该GPIO口即可。 |
| x4418cv3.4 \| x6818cv3.4 | supports eMMC高版本 | 兼容更高版本的eMMC型号，pin定义完全兼容x4418cv3.3 \| x6818cv3.3 |
| x4418cv3.5 \| x6818cv3.5 | Gigabit Ethernet supported | 优化千兆网走线，提高千兆网稳定性，pin定义完全兼容x4418cv3.4 \| x6818cv3.4 |
| x4418cv4 \| x6818cv4 | Gigabit Ethernet supported | 原以太网PHY芯片RTL8211E换成YT8511，pin定义完全兼容x4418cv3.4 \| x6818cv3.4 |
