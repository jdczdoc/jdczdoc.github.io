# Rockchip Developer Guide Linux GMAC

ID: RK-KF-YF-130

Release Version: V1.0.0

Date: 2021-01-16

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY. THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" shall be Rockchip's registered trademarks and owned by Rockchip. All the other trademarks or registered trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. ©2020. Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, neither any entity nor individual shall extract, copy, or distribute this document in any form in whole or in part without the written approval of Rockchip.

Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer service Tel: +86-4007-700-590

Customer service Fax: +86-591-83951833

Customer service e-Mail: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document provides usage instructions for the Rockchip platform Ethernet GMAC interface, used to resolve most Ethernet issues.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ----------- | ------------- |
| ROCKCHIP Chip | 3.10/4.4/4.19 |

**Intended Audience**

This document (guide) is mainly suitable for the following engineers:

Field Application Engineer

Software Development Engineer

**Revision History**

| **Version** | **Author** | **Date** | **Revision Description** |
| ---------- | -------- | :----------- | ------------ |
| V1.0.0     | Wu Dachao | 2021-01-16   | Initial version |

---

**Table of Contents**

[TOC]

---

## Code Location

The hardware-related driver code for the Ethernet module mainly includes GMAC and PHY. The PHY driver generally uses the generic PHY driver. If special register modifications are needed, use the corresponding PHY driver. The code is in drivers/net/phy. Additionally, RK322x/RK3328 have a built-in 100M PHY chip.

- Linux3.10 GMAC driver code `driver/net/ethernet/rockchip/gmac/*`

- Other kernel GMAC driver code, for kernel versions higher than 3.10, GMAC driver code location `drivers/net/ethernet/stmicro/stmmac/*`

- RK internal EPHY driver code `drivers/net/phy/rockchip.c`

## DTS

DTS configuration reference Documentation/devicetree/bindings/net/rockchip-dwmac.txt

```c
gmac: ethernet@ff290000 {
        compatible = "rockchip,rk3288-gmac";
        reg = <0xff290000 0x10000>;
        interrupts = <GIC_SPI 27 IRQ_TYPE_LEVEL_HIGH>;
        interrupt-names = "macirq";
        rockchip,grf = <&grf>;
        clocks = <&cru SCLK_MAC>,
                <&cru SCLK_MAC_RX>, <&cru SCLK_MAC_TX>,
                <&cru SCLK_MACREF>, <&cru SCLK_MACREF_OUT>,
                <&cru ACLK_GMAC>, <&cru PCLK_GMAC>;
        clock-names = "stmmaceth",
                "mac_clk_rx", "mac_clk_tx",
                "clk_mac_ref", "clk_mac_refout",
                "aclk_mac", "pclk_mac";
        phy-mode = "rgmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rgmii_pins /*&rmii_pins*/>;

        clock_in_out = "input";
        snps,reset-gpio = <&gpio4 7 0>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 10000 1000000>;

        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>;
        tx_delay = <0x30>;
        rx_delay = <0x10>;

        status = "ok";
};
```

The board-level configuration needs attention in the following areas:

- phy-mode: mainly divided into RMII and RGMII modes
- snps,reset-gpio: PHY hardware reset pin
- snps,reset-delays-us: PHY reset timing. The three times represent different stages of PHY reset timing. Different PHYs have different reset timings. If snps,reset-active-low is used, the three times represent: Reset pin pulled high, pulled low, then pulled high again; if snps,reset-active-high is used, the opposite
- phy-supply: If the PHY power is always-on, no configuration is needed; otherwise, configure the corresponding regulator
- Clock configuration: Refer to Chapter 3 of this document
- pinctrl: Configuration differs between RGMII and RMII modes. Additionally, for clock pins that output clocks, the drive strength is generally different. For example, in RMII mode, when the ref_clock pin outputs a clock, the drive strength should be configured higher
- tx_delay/rx_delay: Required in RGMII mode. Refer to Chapter 8 RGMII Delayline of this document

Due to the many mode configurations across different chips, please refer to another document "Rockchip_Developer_Guide_Linux_GMAC_Mode_Configuration_CN.pdf"

## PHY Register Read/Write Debugging

The driver provides register read/write interfaces. Currently, there are two sets of interfaces for different kernel versions.
Path: /sys/bus/mdio_bus/devices/stmmac-0:00, where stmmac-0:00 indicates PHY address 0.

### Linux 3.10

```c
/sys/bus/mdio_bus/devices/stmmac-0:00/phy_reg
/sys/bus/mdio_bus/devices/stmmac-0:00/phy_regValue
```

- Write

For example, write 0xabcd to Reg0

```c
echo 0x00 > /sys/bus/mdio_bus/devices/stmmac-0:00/phy_reg
echo 0xabcd > /sys/bus/mdio_bus/devices/stmmac-0:00/phy_regValue
```

- Read

For example, read Reg0 value

```c
echo 0x00 > /sys/bus/mdio_bus/devices/stmmac-0:00/phy_reg
cat /sys/bus/mdio_bus/devices/stmmac-0:00/phy_regValue
```

### Other Versions

```c
/sys/bus/mdio_bus/devices/stmmac-0:00/phy_registers
```

- Write

For example, write 0xabcd to Reg0

```c
echo 0x00 0xabcd > /sys/bus/mdio_bus/devices/stmmac-0:00/phy_registers
```

- Read

```c
cat /sys/bus/mdio_bus/devices/stmmac-0:00/phy_registers
```

This command reads all registers 0~31, so you can check the corresponding register values.

## MAC Address

The current MAC address reading strategy is: first use the MAC address from DTB (also written by uboot), then the MAC address burned in IDB. If the address meets the specification, use it; if it does not meet the specification or is not burned, use a randomly generated address (the MAC address will change upon reboot). In RK3399, RK3328/RK3228H and later versions, the strategy has been improved: first use the MAC address burned in IDB or vendor Storage. If the address meets the specification, use it; if not, generate a random MAC address and save it to the Vendor partition. It will not be lost upon reboot or factory reset.

For the MAC address burning tool, refer to the document "Rockchip_User_Guide_RKDevInfoWriteTool_CN.pdf".

## Loopback Test

Loopback tests mainly include MAC and PHY loopback. For details, refer to the description of phy_lb and mac_lb nodes in the document "Rockchip_Developer_Guide_Linux_GMAC_RGMII_Delayline_CN.pdf".

## RGMII Delayline

The RGMII interface provides tx and rx delaylines for adjusting RGMII timing. For information on how to obtain the appropriate RGMII Delayline, please refer to the document "Rockchip_Developer_Guide_Linux_GMAC_RGMII_Delayline_CN.pdf".

## LED

PHYs have their own LED control. Below are the macphy in RK3228 and RK3328. For other external PHYs, please refer to their datasheets. Below are the RK3228 and RK3328 LED configurations:

- RK3228: Apply patch `kernel_4.4_rk322x_phy_led_control.patch`.
- RK3328: Configure iomux in dts. For example, to control the LED via rx and link, configure the corresponding pinctrl.

```c
phy: phy@0 {
        compatible = "ethernet-phy-id1234.d400", "ethernet-phy-ieee802.3-c22";
        reg = <0>;
        clocks = <&cru SCLK_MAC2PHY_OUT>;
        resets = <&cru SRST_MACPHY>;
        pinctrl-names = "default";
        pinctrl-0 = <&fephyled_rxm1 &fephyled_linkm1>;
        phy-is-integrated;
};
```

## WOL

Wake On Lan function. The register configuration differs for each PHY. Currently included patches cover RTL8211E/F, RTL8201F.

## MAC To MAC Direct Connection

Refer to the document "Rockchip_Developer_Guide_Linux_MAC_TO_MAC_CN.pdf".

## Jumbo Frame

Starting from RV1126/1109, Jumbo Frame 9K is supported. Configure the test network MTU to 9000. Below are the test results:

```c
<pre>[root@Puma:/]# ping -s 9000 192.168.1.100
PING 192.168.1.100 (192.168.1.100) 9000(9028) bytes of data.
9008 bytes from 192.168.1.100: icmp_seq=1 ttl=64 time=0.784 ms
9008 bytes from 192.168.1.100: icmp_seq=2 ttl=64 time=0.675 ms
9008 bytes from 192.168.1.100: icmp_seq=3 ttl=64 time=0.666 ms
9008 bytes from 192.168.1.100: icmp_seq=4 ttl=64 time=0.656 ms
9008 bytes from 192.168.1.100: icmp_seq=5 ttl=64 time=0.677 ms
9008 bytes from 192.168.1.100: icmp_seq=6 ttl=64 time=0.637 ms
9008 bytes from 192.168.1.100: icmp_seq=7 ttl=64 time=0.641 ms
9008 bytes from 192.168.1.100: icmp_seq=8 ttl=64 time=0.692 ms
9008 bytes from 192.168.1.100: icmp_seq=9 ttl=64 time=0.656 ms
```

## PTP1588

Starting from RV1126/1109, PTP1588 is supported. Below are the test results:

### PC master and RK slave

```c
ubuntu@thinkpad: sudo ptp4l -i enp0s31f6 -m -H
ptp4l[1790161.443]: selected /dev/ptp0 as PTP clock
ptp4l[1790161.443]: port 1: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[1790161.443]: port 0: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[1790168.489]: port 1: LISTENING to MASTER on ANNOUNCE_RECEIPT_TIMEOUT_EXPIRES
ptp4l[1790168.489]: selected local clock 54e1ad.fffe.dfa454 as best master
ptp4l[1790168.490]: assuming the grand master role
```

```c
[root@Puma:/]# ptp4l -i eth0 -m -H -s
ptp4l[39.868]: selected /dev/ptp0 as PTP clock
[   39.871092] rk_gmac-dwmac ffc40000.ethernet eth0: stmmac_hwtstamp_set config flags:0x0, tx_type:0x1, rx_filter:0xc
[   39.872029] stmmac_hwtstamp_set, value: 0x17e03
ptp4l[39.870]: port 1: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[39.871]: port 0: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[41.251]: port 1: new foreign master 54e1ad.fffe.dfa454-1
[   43.817340] rk_gmac-dwmac ffc40000.ethernet eth0: stmmac_hwtstamp_set config flags:0x0, tx_type:0x1, rx_filter:0xc
[   43.818262] stmmac_hwtstamp_set, value: 0x17e03
ptp4l[45.251]: selected best master clock 54e1ad.fffe.dfa454
ptp4l[45.251]: port 1: LISTENING to UNCALIBRATED on RS_SLAVE
ptp4l[49.251]: master offset      -1608 s0 freq      +0 path delay      5691
ptp4l[50.251]: master offset      -5579 s0 freq      +0 path delay      9435
ptp4l[51.251]: master offset      -4831 s2 freq    +748 path delay      9435
ptp4l[51.251]: port 1: UNCALIBRATED to SLAVE on MASTER_CLOCK_SELECTED
ptp4l[52.251]: master offset      12189 s2 freq  +12937 path delay      7563
ptp4l[53.251]: master offset      14413 s2 freq  +18818 path delay      8287
ptp4l[54.251]: master offset      10712 s2 freq  +19441 path delay      8861
ptp4l[55.251]: master offset       7185 s2 freq  +19127 path delay      8861
ptp4l[56.251]: master offset       3234 s2 freq  +17332 path delay      9435
ptp4l[57.251]: master offset       1787 s2 freq  +16855 path delay      9454
ptp4l[58.251]: master offset        785 s2 freq  +16389 path delay      9454
ptp4l[59.251]: master offset         89 s2 freq  +15928 path delay      9473
ptp4l[60.251]: master offset         31 s2 freq  +15897 path delay      9454
ptp4l[61.251]: master offset        -71 s2 freq  +15804 path delay      9454
ptp4l[62.251]: master offset       -100 s2 freq  +15754 path delay      9406
ptp4l[63.251]: master offset        -27 s2 freq  +15797 path delay      9406
ptp4l[64.251]: master offset        -69 s2 freq  +15747 path delay      9395
ptp4l[65.251]: master offset         29 s2 freq  +15824 path delay      9395
ptp4l[66.251]: master offset        -73 s2 freq  +15731 path delay      9395
ptp4l[67.251]: master offset         32 s2 freq  +15814 path delay      9388
ptp4l[68.251]: master offset        -20 s2 freq  +15772 path delay      9388
ptp4l[69.251]: master offset       -104 s2 freq  +15682 path delay      9395
ptp4l[70.251]: master offset        -56 s2 freq  +15699 path delay      9395
ptp4l[71.251]: master offset         24 s2 freq  +15762 path delay      9388
ptp4l[72.251]: master offset         11 s2 freq  +15756 path delay      9395
```

### RK master and PC slave

```c
[root@Puma:/]# ptp4l -i eth0 -m -H
ptp4l[15.668]: selected /dev/ptp0 as PTP clock
ptp4l[15.670]: port 1: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[15.670]: port 0: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[22.120]: port 1: LISTENING to MASTER on ANNOUNCE_RECEIPT_TIMEOUT_EXPIRES
ptp4l[22.120]: selected local clock aadc46.fffe.5da6d9 as best master
ptp4l[22.121]: assuming the grand master role
```

```c
ubuntu@thinkpad: sudo ptp4l -i enp0s31f6 -m -H -s
ptp4l[1879661.603]: selected /dev/ptp0 as PTP clock
ptp4l[1879661.603]: port 1: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[1879661.603]: port 0: INITIALIZING to LISTENING on INIT_COMPLETE
ptp4l[1879662.249]: port 1: new foreign master aadc46.fffe.5da6d9-1
ptp4l[1879665.849]: selected best master clock aadc46.fffe.5da6d9
ptp4l[1879665.849]: port 1: LISTENING to UNCALIBRATED on RS_SLAVE
ptp4l[1879667.649]: master offset         49 s0 freq   -9515 path delay      9364
ptp4l[1879668.549]: master offset        128 s2 freq   -9436 path delay      9338
ptp4l[1879668.549]: port 1: UNCALIBRATED to SLAVE on MASTER_CLOCK_SELECTED
ptp4l[1879669.449]: master offset        256 s2 freq   -9180 path delay      9338
ptp4l[1879670.349]: master offset       -230 s2 freq   -9589 path delay      9338
ptp4l[1879671.249]: master offset       -399 s2 freq   -9827 path delay      9360
ptp4l[1879672.149]: master offset        142 s2 freq   -9406 path delay      9360
ptp4l[1879673.049]: master offset        232 s2 freq   -9273 path delay      9347
ptp4l[1879673.949]: master offset       -303 s2 freq   -9739 path delay      9347
ptp4l[1879674.849]: master offset       -267 s2 freq   -9794 path delay      9338
ptp4l[1879675.749]: master offset        327 s2 freq   -9280 path delay      9335
ptp4l[1879676.649]: master offset        405 s2 freq   -9104 path delay      9335
ptp4l[1879677.549]: master offset       -156 s2 freq   -9543 path delay      9335
ptp4l[1879678.449]: master offset       -178 s2 freq   -9612 path delay      9335
ptp4l[1879679.349]: master offset       -100 s2 freq   -9587 path delay      9335
ptp4l[1879680.249]: master offset        -73 s2 freq   -9590 path delay      9335
ptp4l[1879681.149]: master offset        -79 s2 freq   -9618 path delay      9344
ptp4l[1879682.049]: master offset        -76 s2 freq   -9639 path delay      9344
ptp4l[1879682.949]: master offset        -59 s2 freq   -9645 path delay      9329
ptp4l[1879683.849]: master offset        -31 s2 freq   -9634 path delay      9329
ptp4l[1879684.750]: master offset         22 s2 freq   -9591 path delay      9329
ptp4l[1879685.650]: master offset         -9 s2 freq   -9615 path delay      9337
ptp4l[1879686.550]: master offset        -31 s2 freq   -9640 path delay      9337
ptp4l[1879687.450]: master offset         -3 s2 freq   -9621 path delay      9337
ptp4l[1879688.350]: master offset        -15 s2 freq   -9634 path delay      9351
```

## Hardware Signal Testing

Refer to the signal test documents released by Rockchip hardware, including RMII or RGMII, PHY eye diagram testing.
"Rockchip Hardware 100base-t Test Guide - V1.1.doc", "Rockchip Hardware 1000base-t Test Guide_V1.0.doc".

## Problem Analysis

### DMA Initialization Failed

If the GMAC driver boot log shows: `DMA engine initialization failed`, it can be considered that the GMAC working clock is faulty. First, measure the clock pin to check if the clock is present, the clock frequency, amplitude, etc. Mainly confirm the following:

- IOMUX error, check whether the clock pin register value is correct
- Clock direction and configuration do not match the hardware, refer to Chapter 4 of this document for clock settings
- Check the clock tree and CRU registers to confirm the clock frequency and whether the clock is enabled

### PHY Initialization Failed

If the GMAC driver boot log shows: No PHY found or Cannot attach to PHY, it means the PHY is not found. The driver will first read the PHY ID via MDIO. You can measure the MDC and MDIO waveforms to check if they are normal. This bus is similar to I2C, and the MDC frequency must be less than 2.5M. Generally, the reasons for not finding the PHY include:

- Check if the MDC/MDIO IOMUX register values are correct
- Check if the PHY power supply is normal
- Reset IO configuration is incorrect
- Reset IO timing does not meet the PHY datasheet requirements. Different PHYs have different timing requirements. For specific configuration, refer to the DTS chapter of this document
- Test whether the MDIO/MDC waveform is abnormal. The MDC clock frequency must be less than 2.5M

### Link Issues

If a Link issue occurs, one troubleshooting method is to disconnect MDC/MDIO from the main controller and connect directly to a PC to see if the PC has the same problem. This eliminates software interference, and the focus should be on hardware. First, test whether TXN/P and RXN/P have Link waveforms.

If Link up/Link down occurs repeatedly, the possible reason is that the PHY receives erroneous data:

- In EEE mode, incorrectly configured delayline for the transmitted waveform may cause continuous link up/down
- An incorrect clock supplied to the PHY can also cause this issue

### Data Not Passing

First, check whether it is a TX issue, an RX issue, or both.

#### TX

Check whether the TX packets of the eth0 node are increasing via `ifconfig -a`. If it is 0, the network cable may not be linked. Check whether the carrier is 1 (link up) or 0 (link down). For example, RK3328:

```shell
console:/ # cat /sys/devices/platform/ff550000.ethernet/net/eth0/carrier
1
```

```shell
eth0      Link encap:Ethernet  HWaddr 16:21:8d:d9:67:0b  Driver rk_gmac-dwmac
          inet6 addr: fe80::c43d:3e5d:533:b7ea/64 Scope: Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:19 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:0 TX bytes:2848
          Interrupt:45
```

If TX packets are increasing, it means the GMAC is sending data.

Connect the board and PC to the same LAN, ping the PC from the board, and use a packet capture tool (e.g., Wireshark) on the PC to check. If packets from the board are captured, TX is working. If not, determine where the TX anomaly occurred. Test the GMAC TX Clock and TX Data waveforms to determine whether the MAC or PHY is faulty. For the MAC, check the following:

- Check TX Clock/TX Data iomux
- Check if the TXC clock is correct
- In RGMII mode, check if the Tx Delayline configuration is correct

For the PHY, test the PHY's TXN/P signal to confirm whether the PHY is sending data. Different PHYs may have different configurations. Refer to the specific Datasheet.

#### RX

After confirming it is not a TX issue, focus on RX. After connecting the network cable, use `ifconfig -a` to check if the RX packets of the eth0 node are increasing. If it is 0, it means GMAC RX is not receiving data.

```shell
eth0      Link encap:Ethernet  HWaddr 16:21:8d:d9:67:0b  Driver rk_gmac-dwmac
          inet6 addr: fe80::c43d:3e5d:533:b7ea/64 Scope: Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:341 errors:0 dropped:0 overruns:0 frame:0
          TX packets:26 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:48928 TX bytes:3741
          Interrupt:355
```

Similarly, test the PHY's RXN/P and the GMAC's RX Clock/RX Data to determine whether the MAC or PHY is faulty. For the MAC, check the following:

- Check RX Clock/RX Data iomux
- Check if the RXC clock is correct
- Check if the RGMII Tx Delayline configuration is correct
- In RGMII mode, check if the Rx Delayline configuration is correct

If TX packets are increasing but Ethernet communication is still abnormal, possible causes include:

- In RMII mode, the MAC and PHY reference clocks are not the same
- The PHY mode configuration is incorrect, e.g., the hardware is configured in MII mode

### TX queue0 timeout

Consider that TX cannot be sent. Usually, the controller is abnormal. Possible causes of controller abnormality include:

- Clock issue, check if the clock configuration is correct, refer to Chapter 3 of this document
- PHY timing issue, incorrect PHY reset timing causes incorrect PHY clock output
- PHY hardware issue, causing collision detection and inability to send data
- Logic voltage too low
