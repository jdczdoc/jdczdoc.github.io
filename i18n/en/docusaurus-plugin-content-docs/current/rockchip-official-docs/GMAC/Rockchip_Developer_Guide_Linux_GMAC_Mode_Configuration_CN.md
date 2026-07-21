# Rockchip Developer Guide Linux GMAC Mode Configuration

Document ID: RK-KF-YF-144

Release Version: V1.0.0

Date: 2021-01-16

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("ROCKCHIP") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED, IMPLIED OR OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY. THIS DOCUMENT MAY BE UPDATED OR CHANGED WITHOUT ANY NOTICE AT ANY TIME DUE TO THE UPGRADES OF THE PRODUCT OR ANY OTHER REASONS.

**Trademark Statement**

"Rockchip", "Rockchip", "Rockchip" shall be Rockchip's registered trademarks and owned by Rockchip. All the other trademarks or registered trademarks mentioned in this document shall be owned by their respective owners.

**All rights reserved. ©2020. Rockchip Electronics Co., Ltd.**

Without the prior written permission of Rockchip, no unit or individual may reproduce, copy, or distribute the content of this document in any form beyond the scope of fair use.

Rockchip Electronics Co., Ltd.

Address: No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer service Tel: +86-4007-700-590

Customer service Fax: +86-591-83951833

Customer service e-Mail: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document provides configuration examples for the Rockchip platform Ethernet GMAC interface in different modes, to resolve Ethernet configuration issues.

**Product Version**

| **Chip Name**   | **Kernel Version** |
| ----------- | ------------- |
| ROCKCHIP Chip | 3.10/4.4/4.19 |

**Audience**

This document (this guide) is mainly intended for the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author**  | **Modified Date** | **Description of Changes** |
| ----------- | ----------- | :---------------- | -------------------------- |
| V1.0.0      | Wu Dachao   | 2021-01-16        | Initial version            |

---

**Table of Contents**

[TOC]

---

The configuration in different modes mainly includes phy mode, clock and pinctrl configurations. These configurations are interdependent and must be configured together, otherwise the device will not work. Below are reference configurations for different modes of various chips, using SDK board-level DTS as examples.

## PX30

### RMII Clock Output

```c
&gmac {
        phy-supply = <&vcc_phy>;
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-rates = <50000000>;
        snps,reset-gpio = <&gpio2 13 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins &mac_refclk_12ma>;
        status = "okay";
};
```

### RMII Clock Input

```c
&gmac_clkin {
        clock-frequency = <50000000>;
};

&gmac {
        phy-supply = <&vcc_phy>;
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&gmac_clkin>;
        snps,reset-gpio = <&gpio2 13 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins &mac_refclk>;
        status = "okay";
};
```

## RK1808

### RMII Clock Output

```c
&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        clocks = <&cru SCLK_GMAC>, <&cru SCLK_GMAC_RX_TX>,
                 <&cru SCLK_GMAC_RX_TX>, <&cru SCLK_GMAC_REF>,
                 <&cru SCLK_GMAC_REFOUT>, <&cru ACLK_GMAC>,
                 <&cru PCLK_GMAC>, <&cru SCLK_GMAC_RMII_SPEED>;
        clock-names = "stmmaceth", "mac_clk_rx",
                      "mac_clk_tx", "clk_mac_ref",
                      "clk_mac_refout", "aclk_mac",
                      "pclk_mac", "clk_mac_speed";
        assigned-clocks = <&cru SCLK_GMAC_RX_TX>;
        assigned-clock-parents = <&cru SCLK_GMAC_RMII_SPEED>;
        snps,reset-gpio = <&gpio0 10 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "okay";
};
```

### RMII Clock Input

```c
&gmac_clkin {
        clock-frequency = <50000000>;
};

&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        clock_in_out = "input";
        clocks = <&cru SCLK_GMAC>, <&cru SCLK_GMAC_RX_TX>,
                 <&cru SCLK_GMAC_RX_TX>, <&cru SCLK_GMAC_REF>,
                 <&cru SCLK_GMAC_REFOUT>, <&cru ACLK_GMAC>,
                 <&cru PCLK_GMAC>, <&cru SCLK_GMAC_RMII_SPEED>;
        clock-names = "stmmaceth", "mac_clk_rx",
                      "mac_clk_tx", "clk_mac_ref",
                      "clk_mac_refout", "aclk_mac",
                      "pclk_mac", "clk_mac_speed";
        assigned-clocks = <&cru SCLK_GMAC_RX_TX>, <&cru SCLK_GMAC>;
        assigned-clock-parents = <&cru SCLK_GMAC_RMII_SPEED>, <&gmac_clkin>;
        snps,reset-gpio = <&gpio0 10 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "okay";
};
```

### RGMII Clock Output

```c
&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-rates = <125000000>;
        snps,reset-gpio = <&gpio0 10 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;
        tx_delay = <0x50>;
        rx_delay = <0x3a>;
        status = "okay";
};
```

### RGMII Clock Input

```c
&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_GMAC>;
        assigned-clock-parents = <&gmac_clkin>;
        snps,reset-gpio = <&gpio0 10 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;
        tx_delay = <0x50>;
        rx_delay = <0x3a>;
        status = "okay";
};
```

## RK3128

### RMII Clock Output

```c
&gmac {
        assigned-clocks = <&cru SCLK_MAC_SRC>;
        assigned-clock-rates = <50000000>;
        clock_in_out = "output";
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        snps,reset-active-low;
        snps,reset-delays-us = <0 10000 50000>;
        snps,reset-gpio = <&gpio2 24 GPIO_ACTIVE_LOW>;
        status = "okay";
};
```

### RMII Clock Input

```c
&clkin_gmac {
        clock-frequency = <50000000>;
};

&gmac {
       assigned-clocks = <&cru SCLK_MAC>;
       assigned-clock-parents = <&clkin_gmac>;
        clock_in_out = "input";
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        snps,reset-active-low;
        snps,reset-delays-us = <0 10000 50000>;
        snps,reset-gpio = <&gpio2 24 GPIO_ACTIVE_LOW>;
        status = "okay";
};
```

### RGMII Clock Input

```c
&gmac {
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&clkin_gmac>;
        clock_in_out = "input";
        pinctrl-names = "default";
        pinctrl-0 = <&rgmii_pins>;
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        snps,reset-gpio = <&gpio2 24 GPIO_ACTIVE_LOW>;
        tx_delay = <0x30>;
        rx_delay = <0x16>;
        status = "okay";
};
```

## RK3228

### RMII Clock Output

```c
&gmac {
        assigned-clocks = <&cru SCLK_MAC_EXTCLK>, <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>, <&cru SCLK_MAC_EXTCLK>;
        assigned-clock-rates = <0>, <50000000>;
        clock_in_out = "output";
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        snps,reset-gpio = <&gpio2 RK_PD0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        status = "okay";
};
```

### RMII Clock Input

```c
&ext_gmac: external-gmac-clock {
        clock-frequency = <50000000>;
}

&gmac {
        assigned-clocks = <&cru SCLK_MAC_EXTCLK>, <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>, <&cru SCLK_MAC_EXTCLK>;
        clock_in_out = "input";
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        snps,reset-gpio = <&gpio2 RK_PD0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        status = "okay";
};
```

### RGMII Clock Output

```c
&gmac {
        assigned-clocks = <&cru SCLK_MAC_EXTCLK>, <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>, <&cru SCLK_MAC_EXTCLK>;
        assigned-clock-rates = <0>, <125000000>;
        clock_in_out = "output";
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rgmii_pins>;
        snps,reset-gpio = <&gpio2 RK_PD0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        tx_delay = <0x30>;
        rx_delay = <0x10>;
        status = "okay";
};
```

### RGMII Clock Input

```c
&gmac {
        assigned-clocks = <&cru SCLK_MAC_EXTCLK>, <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>, <&cru SCLK_MAC_EXTCLK>;
        clock_in_out = "input";
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rgmii_pins>;
        snps,reset-gpio = <&gpio2 RK_PD0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        tx_delay = <0x30>;
        rx_delay = <0x10>;
        status = "okay";
};
```

### Internal EPHY

```c
&gmac {
        assigned-clocks = <&cru SCLK_MAC_SRC>;
        assigned-clock-rates = <50000000>;
        clock_in_out = "output";
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        phy-handle = <&phy>;
        status = "okay";

        mdio {
                compatible = "snps,dwmac-mdio";
                #address-cells = <1>;
                #size-cells = <0>;

                phy: ethernet-phy@0 {
                        compatible = "ethernet-phy-id1234.d400", "ethernet-phy-ieee802.3-c22";
                        reg = <0>;
                        clocks = <&cru SCLK_MAC_PHY>;
                        resets = <&cru SRST_MACPHY>;
                        phy-is-integrated;
                };
        };
};
```

## RK3288

### RMII Clock Output

```c
&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-rates = <50000000>;
        snps,reset-gpio = <&gpio4 RK_PA7 GPIO_ACTIVE_HIGH>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 1000000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "okay";
};
```

### RMII Clock Input

```c
&ext_gmac: external-gmac-clock {
        clock-frequency = <50000000>;
}

&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>;
        snps,reset-gpio = <&gpio4 RK_PA7 GPIO_ACTIVE_HIGH>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 1000000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "okay";
};
```

### RGMII Clock Input

```c
&gmac {
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        clock_in_out = "input";
        snps,reset-gpio = <&gpio4 RK_PA7 GPIO_ACTIVE_HIGH>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 1000000>;
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>;
        pinctrl-names = "default";
        pinctrl-0 = <&rgmii_pins>;
        tx_delay = <0x30>;
        rx_delay = <0x10>;
        status = "okay";
};
```

## RK3328

### RMII Clock Output

```c
&gmac2io {
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC2IO>;
        assigned-clock-rates = <50000000>;
        snps,reset-gpio = <&gpio1 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmiim1_pins>;
        status = "okay";
};
```

### RMII Clock Input

```c
&clkin_gmac {
        clock-frequency = <50000000>;
};

&gmac2io {
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC2IO>, <&cru SCLK_MAC2IO_EXT>;
        assigned-clock-parents = <&gmac_clkin>, <&gmac_clkin>;
        snps,reset-gpio = <&gpio1 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmiim1_pins>;
        status = "okay";
};
```

### RGMII Clock Input

```c
&gmac2io {
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC2IO>, <&cru SCLK_MAC2IO_EXT>;
        assigned-clock-parents = <&gmac_clkin>, <&gmac_clkin>;
        snps,reset-gpio = <&gpio1 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim1_pins>;
        tx_delay = <0x26>;
        rx_delay = <0x11>;
        status = "okay";
};
```

### Internal EPHY

```c
&gmac2phy {
        phy-supply = <&vcc_phy>;
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC2PHY_SRC>;
        assigned-clock-rate = <50000000>;
        assigned-clocks = <&cru SCLK_MAC2PHY>;
        assigned-clock-parents = <&cru SCLK_MAC2PHY_SRC>;
        status = "okay";
};
```

## RK3368

### RMII Clock Output

```c
&gmac {
        phy-supply = <&vcc_lan>;
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-rates = <50000000>;
        snps,reset-gpio = <&gpio3 12 0>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "ok";
};
```

### RMII Clock Input

```c
&ext_gmac {
        clock-frequency = <50000000>;
}

&gmac {
        phy-supply = <&vcc_lan>;
        phy-mode = "rmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>;
        snps,reset-gpio = <&gpio3 12 0>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "ok";
};
```

### RGMII Clock Input

```c
&gmac {
        phy-supply = <&vcc_lan>;
        phy-mode = "rmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&ext_gmac>;
        snps,reset-gpio = <&gpio3 12 0>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "okay";
};
```

## RK3399

### RMII Clock Output

```c
&gmac {
       assigned-clocks = <&cru SCLK_MAC>;
       assigned-clock-rates = <50000000>;
        clock_in_out = "output";
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        snps,reset-gpio = <&gpio3 RK_PB7 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        status = "okay";
};
```

### RMII Clock Input

```c
&clkin_gmac {
        clock-frequency = <50000000>;
};

&gmac {
        assigned-clocks = <&cru SCLK_RMII_SRC>;
        assigned-clock-parents = <&clkin_gmac>;
        clock_in_out = "input";
        phy-supply = <&vcc_phy>;
        phy-mode = "rmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        snps,reset-gpio = <&gpio3 RK_PB7 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        status = "okay";
};
```

### RGMII Clock Input

```c
&gmac {
        assigned-clocks = <&cru SCLK_RMII_SRC>;
        assigned-clock-parents = <&clkin_gmac>;
        clock_in_out = "input";
        phy-supply = <&vcc_phy>;
        phy-mode = "rgmii";
        pinctrl-names = "default";
        pinctrl-0 = <&rgmii_pins>;
        snps,reset-gpio = <&gpio3 RK_PB7 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        tx_delay = <0x28>;
        rx_delay = <0x11>;
        status = "okay";
};
```

## RK3568

### RMII Clock Output

- gmac0

```c
&gmac0 {
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>;
        aassigned-clock-parents = <&cru SCLK_GMAC0_RMII_SPEED>;
        assigned-clock-rates = <0>, <50000000>;

        snps,reset-gpio = <&gpio3 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim &gmac0_clkinout &gmac0_rx_bus2 &gmac0_tx_bus2 &gmac0_rx_er>;

        phy-handle = <&rmii_phy0>;
        status = "okay";
};

&mdio0 {
        rgmii_phy0: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m0:

```c
&gmac1 {
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RMII_SPEED>;
        assigned-clock-rates = <0>, <50000000>;

        snps,reset-gpio = <&gpio3 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m0_miim &gmac1m0_clkinout &gmac1m0_rx_bus2 &gmac1m0_tx_bus2 &gmac1m0_rx_er>;

        phy-handle = <&rmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m1:

```c
&gmac1 {
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RMII_SPEED>;
        assigned-clock-rates = <0>, <50000000>;

        snps,reset-gpio = <&gpio3 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim &gmac1m1_clkinout &gmac1m1_rx_bus2 &gmac1m1_tx_bus2 &gmac1m1_rx_er>;

        phy-handle = <&rmii_phy1>;
        status = "okay";
};

&mdio1 {
        rmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### RMII Clock Input

- gmac0

```c
&gmac0_clkin{
        clock-frequency = <50000000>;
};

&gmac0 {
        phy-mode = "rmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>;
        aassigned-clock-parents = <&cru SCLK_GMAC0_RMII_SPEED>;
        assigned-clock-rates = <0>, <50000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim &gmac0_clkinout &gmac0_rx_bus2 &gmac0_tx_bus2 &gmac0_rx_er>;

        phy-handle = <&rmii_phy0>;
        status = "okay";
};

&mdio0 {
        rgmii_phy0: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m0:

```c
&gmac1_clkin{
        clock-frequency = <50000000>;
};

&gmac1 {
        phy-mode = "rmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RMII_SPEED>, <&gmac1_clkni>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m0_miim &gmac1m0_clkinout &gmac1m0_rx_bus2 &gmac1m0_tx_bus2 &gmac1m0_rx_er>;

        phy-handle = <&rmii_phy1>;
        status = "okay";
};
&mdio1 {
        rmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m1:

```c
&gmac1_clkin{
        clock-frequency = <50000000>;
};

&gmac1 {
        phy-mode = "rmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RMII_SPEED>, <&gmac1_clkin>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim &gmac1m1_clkinout &gmac1m1_rx_bus2 &gmac1m1_tx_bus2 &gmac1m1_rx_er>;

        phy-handle = <&rmii_phy1>;
        status = "okay";
};

&mdio1 {
        rmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### RGMII PLL output 25M for PHY, PLL output 125M for TX_CLK

- gmac0

```c
&gmac0 {
        phy-mode = "rgmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>, <&cru CLK_MAC0_OUT>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RGMII_SPEED>;
        assigned-clock-rates = <0>, <125000000>, <25000000>;

        snps,reset-gpio = <&gpio2 RK_PD3 GPIO_ACTIVE_LOW>;
        snps,reset-active-high;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim
                     &gmac0_tx_bus2
                     &gmac0_rx_bus2
                     &gmac0_rgmii_clk
                     &gmac0_rgmii_bus
                     &eth0_pins>;

        tx_delay = <0x3c>;
        rx_delay = <0x2f>;
        phy-handle = <&rgmii_phy0>;
        status = "okay";
};

&mdio0 {
        rgmii_phy0: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_MAC0_OUT>;
        };
};
```

- gmac1m0

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>, <&cru CLK_MAC1_OUT>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>;
        assigned-clock-rates = <0>, <125000000>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m0_miim
                     &gmac1m0_tx_bus2
                     &gmac1m0_rx_bus2
                     &gmac1m0_rgmii_clk
                     &gmac1m0_rgmii_bus
                     &eth1m0_pins>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_MAC1_OUT>;
        };
};
```

- gmac1m1

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>, <&cru CLK_MAC1_OUT>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>;
        assigned-clock-rates = <0>, <125000000>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim
                     &gmac1m1_tx_bus2
                     &gmac1m1_rx_bus2
                     &gmac1m1_rgmii_clk
                     &gmac1m1_rgmii_bus
                     &eth1m1_pins>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_MAC1_OUT>;
        };
};
```

### RGMII PLL output 25M for PHY, RGMII_CLK input 125M for TX_CLK

- gmac0

```c
&gmac0 {
        phy-mode = "rgmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>, <&cru CLK_MAC0_OUT>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RGMII_SPEED>, <&gmac0_clkin>;
        assigned-clock-rates = <0>, <125000000>, <25000000>;

        snps,reset-gpio = <&gpio2 RK_PD3 GPIO_ACTIVE_LOW>;
        snps,reset-active-high;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim
                     &gmac0_tx_bus2
                     &gmac0_rx_bus2
                     &gmac0_rgmii_clk
                     &gmac0_rgmii_bus
                     &eth0_pins
                     &gmac0_clkinout>;

        tx_delay = <0x3c>;
        rx_delay = <0x2f>;
        phy-handle = <&rgmii_phy0>;
        status = "okay";
};

&mdio0 {
        rgmii_phy0: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_MAC0_OUT>;
        };
};
```

- gmac1m0

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>, <&cru CLK_MAC1_OUT>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>, <&gmac1_clkin>;
        assigned-clock-rates = <0>, <125000000>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m0_miim
                     &gmac1m0_tx_bus2
                     &gmac1m0_rx_bus2
                     &gmac1m0_rgmii_clk
                     &gmac1m0_rgmii_bus
                     &eth1m0_pins
                     &gmac1m0_clkinout>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio0 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_MAC0_OUT>;
        };
};
```

- gmac1m1

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>, <&cru CLK_MAC1_OUT>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>, <&gmac1_clkin>;
        assigned-clock-rates = <0>, <125000000>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim
                     &gmac1m1_tx_bus2
                     &gmac1m1_rx_bus2
                     &gmac1m1_rgmii_clk
                     &gmac1m1_rgmii_bus
                     &eth1m1_pins
                     &gmac1m1_clkinout>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_MAC1_OUT>;
        };
};
```

### RGMII Crystal 25M for PHY, PLL output 125M for TX_CLK

- gmac0

```c
&gmac0 {
        phy-mode = "rgmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RGMII_SPEED>;
        assigned-clock-rates = <0>, <125000000>;

        snps,reset-gpio = <&gpio2 RK_PD3 GPIO_ACTIVE_LOW>;
        snps,reset-active-high;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim
                     &gmac0_tx_bus2
                     &gmac0_rx_bus2
                     &gmac0_rgmii_clk
                     &gmac0_rgmii_bus>;

        tx_delay = <0x3c>;
        rx_delay = <0x2f>;
        phy-handle = <&rgmii_phy0>;
        status = "okay";
};

&mdio0 {
        rgmii_phy0: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m0

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>;
        assigned-clock-rates = <0>, <125000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m0_miim
                     &gmac1m0_tx_bus2
                     &gmac1m0_rx_bus2
                     &gmac1m0_rgmii_clk
                     &gmac1m0_rgmii_bus>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m1

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>;
        assigned-clock-rates = <0>, <125000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim
                     &gmac1m1_tx_bus2
                     &gmac1m1_rx_bus2
                     &gmac1m1_rgmii_clk
                     &gmac1m1_rgmii_bus>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### RGMII Crystal 25M for PHY, RGMII_CLK input 125M for TX_CLK

- gmac0

```c
&gmac0 {
        phy-mode = "rgmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>, <&cru SCLK_GMAC0>;
        assigned-clock-parents = <&cru SCLK_GMAC0_RGMII_SPEED>, <&gmac0_clkin>;
        assigned-clock-rates = <0>, <125000000>;

        snps,reset-gpio = <&gpio2 RK_PD3 GPIO_ACTIVE_LOW>;
        snps,reset-active-high;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim
                     &gmac0_tx_bus2
                     &gmac0_rx_bus2
                     &gmac0_rgmii_clk
                     &gmac0_rgmii_bus
                     &gmac0_clkinout>;

        tx_delay = <0x3c>;
        rx_delay = <0x2f>;
        phy-handle = <&rgmii_phy0>;
        status = "okay";
};

&mdio0 {
        rgmii_phy0: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m0

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>, <&gmac1_clkin>;
        assigned-clock-rates = <0>, <125000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m0_miim
                     &gmac1m0_tx_bus2
                     &gmac1m0_rx_bus2
                     &gmac1m0_rgmii_clk
                     &gmac1m0_rgmii_bus
                     &gmac1m0_clkinout>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac1m1

```c
&gmac1 {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio2 RK_PD1 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>, <&cru SCLK_GMAC1>;
        assigned-clock-parents = <&cru SCLK_GMAC1_RGMII_SPEED>, <&gmac1_clkin>;
        assigned-clock-rates = <0>, <125000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1m1_miim
                     &gmac1m1_tx_bus2
                     &gmac1m1_rx_bus2
                     &gmac1m1_rgmii_clk
                     &gmac1m1_rgmii_bus
                     &gmac1m1_clkinout>;

        tx_delay = <0x4f>;
        rx_delay = <0x26>;

        phy-handle = <&rgmii_phy1>;
        status = "okay";
};

&mdio1 {
        rgmii_phy1: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### SGMII

In addition to configuring the gmac and mac phy nodes, the DTS also needs to configure the xpcs and combophy nodes.

- combophy

The property `rockchip,sgmii-mac-sel` indicates which gmac is used:

```c
&combphy1_usq {
        rockchip,sgmii-mac-sel = <0>; /* Use gmac0 as sgmii */
        status = "okay";
};
```

- xpcs

```c
&xpcs {
        status = "okay";
};
```

- gmac0

```c
&gmac0 {
        phy-mode = "sgmii";

        rockchip,pipegrf = <&pipegrf>;
        rockchip,xpcs = <&xpcs>;

        snps,reset-gpio = <&gpio2 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC0_RX_TX>;
        assigned-clock-parents = <&gmac0_xpcsclk>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac0_miim>;

        power-domains = <&power RK3568_PD_PIPE>;
        phys = <&combphy1_usq PHY_TYPE_SGMII>;
        phy-handle = <&sgmii_phy>;
        status = "okay";
};

&mdio0 {
        sgmii_phy: phy@1 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x1>;
        };
};
```

- gmac1

```c
&gmac1 {
        phy-mode = "sgmii";

        rockchip,pipegrf = <&pipegrf>;
        rockchip,xpcs = <&xpcs>;

        snps,reset-gpio = <&gpio2 RK_PC2 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru SCLK_GMAC1_RX_TX>;
        assigned-clock-parents = <&gmac1_xpcsclk>;

        pinctrl-names = "default";
        pinctrl-0 = <&gmac1_miim>;

        power-domains = <&power RK3568_PD_PIPE>;
        phys = <&combphy1_usq PHY_TYPE_SGMII>;
        phy-handle = <&sgmii_phy>;
        status = "okay";
};

&mdio1 {
        sgmii_phy: phy@1 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x1>;
        };
};
```

### QSGMII

Similar to SGMII, in addition to configuring the gmac and mac phy nodes, the DTS also needs to configure the xpcs and combophy nodes.

- combophy

```c
&combphy2_psq {
	status = "okay";
};
```

- xpcs

```c
&xpcs {
	status = "okay";
};
```

```c
&gmac0 {
	phy-supply = <&pcie20_3v3>;
	phy-mode = "qsgmii";
	rockchip,xpcs = <&xpcs>;

	snps,reset-gpio = <&gpio2 RK_PC2 GPIO_ACTIVE_LOW>;
	snps,reset-active-low;
	snps,reset-delays-us = <0 20000 100000>;

	assigned-clocks = <&cru SCLK_GMAC0_RX_TX>;
	assigned-clock-parents = <&gmac0_xpcsclk>;

	pinctrl-names = "default";
	pinctrl-0 = <&gmac0_miim>;

	power-domains = <&power RK3568_PD_PIPE>;
	phys = <&combphy2_psq PHY_TYPE_QSGMII>;
	phy-handle = <&qsgmii_phy0>;

	status = "okay";
};

&gmac1 {
	phy-supply = <&pcie20_3v3>;
	phy-mode = "qsgmii";

	assigned-clocks = <&cru SCLK_GMAC1_RX_TX>;
	assigned-clock-parents = <&gmac1_xpcsclk>;

	power-domains = <&power RK3568_PD_PIPE>;
	phy-handle = <&qsgmii_phy1>;

	status = "okay";
};

&mdio0 {
	qsgmii_phy0: phy@0 {
		compatible = "ethernet-phy-id001c.c942", "ethernet-phy-ieee802.3-c22";
		reg = <0x0>;
	};
	qsgmii_phy1: phy@1 {
		compatible = "ethernet-phy-id001c.c942", "ethernet-phy-ieee802.3-c22";
		reg = <0x1>;
	};
	qsgmii_phy2: phy@2 {
		compatible = "ethernet-phy-id001c.c942", "ethernet-phy-ieee802.3-c22";
		reg = <0x2>;
	};
	qsgmii_phy3: phy@3 {
		compatible = "ethernet-phy-id001c.c942", "ethernet-phy-ieee802.3-c22";
		reg = <0x3>;
	};
};
```

## RV1108

### RMII Clock Input

```c
gmac_clkin: gmac_clkin {
        compatible = "fixed-clock";
        clock-output-names = "gmac_clkin";
        clock-frequency = <50000000>;
        #clock-cells = <0>;
};

&gmac {
        phy-mode = "rmii";
        clock_in_out = "input";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-parents = <&gmac_clkin>;
        snps,reset-gpio = <&gpio3 12 0>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "ok";
};
```

### RMII Clock Output

```c
&gmac {
        phy-mode = "rmii";
        clock_in_out = "output";
        assigned-clocks = <&cru SCLK_MAC>;
        assigned-clock-rates = <50000000>;
        snps,reset-gpio = <&gpio3 12 0>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 20000 100000>;
        pinctrl-names = "default";
        pinctrl-0 = <&rmii_pins>;
        status = "ok";
};
```

## RV1126

### RGMII PLL output 25M for PHY, PLL output 125M for TX_CLK

- gmac m0

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>, <&cru CLK_GMAC_ETHERNET_OUT>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M0>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim0_miim &rgmiim0_bus2 &rgmiim0_bus4 &clkm0_out_ethernet>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_GMAC_ETHERNET_OUT>;
        };
};
```

- gmac m1

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>, <&cru CLK_GMAC_ETHERNET_OUT>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M1>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim1_miim &rgmiim1_bus2 &rgmiim1_bus4 &clkm1_out_ethernet>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_GMAC_ETHERNET_OUT>;
        };
};
```

### RGMII PLL output 25M for PHY, RGMII Clock input 125M for TX_CLK

- gmac m0

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>, <&cru CLK_GMAC_ETHERNET_OUT>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M0>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim0_miim &rgmiim0_bus2 &rgmiim0_bus4 &clkm0_out_ethernet>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_GMAC_ETHERNET_OUT>;
        };
};
```

- gmac m1

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>, <&cru CLK_GMAC_ETHERNET_OUT>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M1>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim1_miim &rgmiim1_bus2 &rgmiim1_bus4 &clkm1_out_ethernet>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
                clocks = <&cru CLK_GMAC_ETHERNET_OUT>;
        };
};
```

### RGMII Crystal 25M for PHY, PLL output 125M for TX_CLK

- gmac m0

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M0>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim0_miim &rgmiim0_bus2 &rgmiim0_bus4 &clkm0_out_ethernet>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac m1

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M1>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim1_miim &rgmiim1_bus2 &rgmiim1_bus4 &clkm1_out_ethernet>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### RGMII Crystal 25M for PHY, RGMII_CLK input 125M for TX_CLK

- gmac m0

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_RGMII_M0>, <&cru CLK_GMAC_SRC_M0>, <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-parents = <&gmac_clkin_m0>, <&cru CLK_GMAC_RGMII_M0>, <&cru CLK_GMAC_SRC_M0>, <&cru RGMII_MODE_CLK>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim0_miim &rgmiim0_bus2 &rgmiim0_bus4>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac m1

```c
&gmac {
        phy-mode = "rgmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PA0 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        /* Reset time is 20ms, 100ms for rtl8211f */
        snps,reset-delays-us = <0 20000 100000>;

        assigned-clocks = <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>, <&cru CLK_GMAC_ETHERNET_OUT>;
        assigned-clock-parents = <&cru CLK_GMAC_SRC_M1>, <&cru RGMII_MODE_CLK>;
        assigned-clock-rates = <125000000>, <0>, <25000000>;

        pinctrl-names = "default";
        pinctrl-0 = <&rgmiim1_miim &rgmiim1_bus2 &rgmiim1_bus4>;

        tx_delay = <0x2a>;
        rx_delay = <0x1a>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### RMII Clock Output

- gmac m0

```c
&gmac {
        phy-mode = "rmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio3 RK_PC5 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;

        assigned-clocks = <&cru CLK_GMAC_SRC_M0>, <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-rates = <0>, <50000000>;
        assigned-clock-parents = <&cru CLK_GMAC_RGMII_M0>, <&cru CLK_GMAC_SRC_M0>, <&cru RMII_MODE_CLK>;

        pinctrl-names = "default";
        pinctrl-0 = <&rmiim0_miim &rgmiim0_rxer &rmiim0_bus2 &rgmiim0_mclkinout>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac m1

```c
&gmac {
        phy-mode = "rmii";
        clock_in_out = "output";

        snps,reset-gpio = <&gpio3 RK_PC5 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;

        assigned-clocks = <&cru CLK_GMAC_SRC_M1>, <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-rates = <0>, <50000000>;
        assigned-clock-parents = <&cru CLK_GMAC_RGMII_M1>, <&cru CLK_GMAC_SRC_M1>, <&cru RMII_MODE_CLK>;

        pinctrl-names = "default";
        pinctrl-0 = <&rmiim1_miim &rgmiim1_rxer &rmiim10_bus2 &rgmiim1_mclkinout>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

### RMII Clock Input

- gmac m0

```c
&gmac_clkin_m0 {
        clock-frequency = <50000000>;
};

&gmac {
        phy-mode = "rmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PC5 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;

        assigned-clocks = <&cru CLK_GMAC_RGMII_M0>, <&cru CLK_GMAC_SRC_M0>, <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-rates = <0>, <0>, <50000000>;
        assigned-clock-parents = <&gmac_clkin_m0>,<&cru CLK_GMAC_RGMII_M0>, <&cru CLK_GMAC_SRC_M0>, <&cru RMII_MODE_CLK>;

        pinctrl-names = "default";
        pinctrl-0 = <&rmiim0_miim &rgmiim0_rxer &rmiim0_bus2 &rgmiim0_mclkinout_level0>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```

- gmac m1

```c
&gmac_clkin_m1 {
        clock-frequency = <50000000>;
};

&gmac {
        phy-mode = "rmii";
        clock_in_out = "input";

        snps,reset-gpio = <&gpio3 RK_PC5 GPIO_ACTIVE_LOW>;
        snps,reset-active-low;
        snps,reset-delays-us = <0 50000 50000>;

        assigned-clocks = <&cru CLK_GMAC_RGMII_M1>, <&cru CLK_GMAC_SRC_M1>, <&cru CLK_GMAC_SRC>, <&cru CLK_GMAC_TX_RX>;
        assigned-clock-rates = <0>, <0>, <50000000>;
        assigned-clock-parents = <&gmac_clkin_m1>,<&cru CLK_GMAC_RGMII_M1>, <&cru CLK_GMAC_SRC_M1>, <&cru RMII_MODE_CLK>;

        pinctrl-names = "default";
        pinctrl-0 = <&rmiim1_miim &rgmiim1_rxer &rmiim1_bus2 &rgmiim1_mclkinout_level0>;

        phy-handle = <&phy>;
        status = "okay";
};

&mdio {
        phy: phy@0 {
                compatible = "ethernet-phy-ieee802.3-c22";
                reg = <0x0>;
        };
};
```
