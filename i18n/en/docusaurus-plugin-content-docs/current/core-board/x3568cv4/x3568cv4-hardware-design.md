---
sidebar_position: 3
title: Hardware Design
description: Hardware design notes for the X3568CV4 core board
---

# Hardware Design

RK3568 芯片整体管脚较多, 片内外设一应俱全, 在电路设计时没有将所有Pin引出,需要合理分配. RK3568 有RK3568, RK3568B2, RK3568J 三个版本, 详细差异如下:型号差异RK3568芯片表面由铝片封装, 散热效果好RK3568B2芯片表面由塑胶封装, 成本有优势RK3568J芯片表面由塑胶封装, 宽温芯片or higher三款芯片, 管脚完全兼容, 使用最新的SDK 包可做到源码完全兼容, 性能完全一致. 具体核心板选型由核心板尾缀区分.

## DDR 的选择

RK3568 supportsDDR3/LPDDR3/DDR4/LPDDR4/4X, 考虑到成本问题, X3568CV4 有多种版本, 根据尾缀命名区别, 使用commercial grade或industrial gradeLPDDR4/LPDDR4X/DDR4 设计.

## flash 的选择

RK3568即能supportsnand flash, 也能supportsEMMC. 从产品稳定性以及工作效能上看, EMMC要比nand flash 优秀很多, 唯一的缺点就是相比nand flash 要稍微贵一些. X3568CV4 摒弃了nand flash, default外挂EMMC.

## Camera Interface

RK3568 即能supportsMIPI camera, 也能supports并口camera. 值得注意的是, camera的并口占用了大量的IO 口, 为了降低管脚数量, 芯片厂家将大量的并口IO 和以太网管脚multiplexed了.用户如果不需要以太网, 可以根据产品的实际需求自行设计.

## Display Interface

RK3568 可supportsMIPI, LVDS, HDMI 三种接口的屏. MIPI 和LVDS multiplexed一组管脚, 也就是说, MIPI 和LVDS 不能同时使用.

## Audio Interface

RK3568 具有标准的I2S Audio Interface, 配套的PMU RK809 自带有音频codec, 无需再外加音频解码芯片了.

## SDIO 接口

RK3568 一起有三路SDIO 接口, 其中一路分配给了EMMC, 没有对外引出; 给WIFI/BT模块分配了一路, used for接AP6212 等SDIO 接口的模块; 给TF 卡分配了一路, used for扩展容量.注意, SDMMC0 通道除了分配给TF 卡外, 它的D0 和D1 两条数据线和UART2 是复用的, 在调试时我们通过UART2 监控信息. 注意, RK3568 有两个UART2, 一个和SDMMC0的D0, D1 multiplexed, 另一个用其他GPIO multiplexed. 任何时候只允许一路UART2 使用, 通过程序选择.

## Power Supply Design

我们只需要给X3568CV4 核心板的第54, 55 管脚提供3.3V/2A(5V/2A)的电源, 核心板就能正常运行了.

## USB Design

X3568CV4 有三路HOST 口(两路2.0 和一路3.0)和一路OTG 口, defaultUSB2.0 接口能达到480Mbps 的速°C. OTG 和HOST 都是高速Signal线, 在PCB 走线时, 务必走等长差分线, 阻抗匹配为90 欧, 而且需要有完整的参考平面. or lower是对应的differential pairSignal:差分管脚编号差分管脚名称33, 34OTG_DP, OTG_DM146, 147USB2_HOST2_DM, USB2_HOST2_DP148, 149USB2_HOST3_DM, USB2_HOST3_DM27, 28USB3_HOST1_DM, USB3_HOST1_DP

## MIPI Design

MIPI 是2003 年由ARM, Nokia, ST, TI 等公司成立的一个联盟, 目的是把手机内部的接口如camera, display, 射频基带接口等标准化, 从而减少手机的设计复杂°C, 增加设计的灵活性. MIPI 是一个比较新的标准, 目前比较成熟的应用有DSI(Display Interface)和CSI(摄相头接口).supportsDSI 和CSI, DSI 对应核心板的第35 到44 脚, used for接MIPI 接口的display; CSI对应核心板的第160 到171 脚, used for接MIPI 接口的摄相头. MIPI 接口的数据传输率要远大于LVDS 接口, 在走线时一定要走等长差分线, 且阻抗匹配为100 欧.
