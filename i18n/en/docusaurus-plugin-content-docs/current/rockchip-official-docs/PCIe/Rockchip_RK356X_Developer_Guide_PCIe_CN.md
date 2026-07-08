# RK356X Linux PCIe Developer Guide

ID: RK-KF-YF-141

Release Version: V2.3.0

Date: 2021-05-12

Security Level: □Top Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference as a usage guide only.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| RK356X       | 4.19         |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Description**                               |
| ---------- | -------- | -------- | ------------------------------------------ |
| 2021-01-15 | V1.0.0   | Lin Tao     | Initial version                                   |
| 2021-01-22 | V1.1.0   | Lin Tao     | Added PCIe 3.0 controller exception check info       |
| 2021-01-26 | V1.2.0   | Lin Tao     | Added PCIe 2.0 Combo phy exception troubleshooting info |
| 2021-02-04 | V1.3.0   | Lin Tao     | Added MSI and MSI-X support count issue description |
| 2021-02-05 | V1.4.0   | Lin Tao     | Added address allocation exception info |
| 2021-02-06 | V1.5.0   | Lin Tao     | Added PCIe2x1 PHY SSC support description |
| 2021-02-23 | V1.6.0   | Lin Tao     | Added MSI/MSI-X debug support and runtime device exception description |
| 2021-02-26 | V1.7.0   | Lin Tao     | Added Legacy INT description |
| 2021-02-27 | V1.8.0   | Lin Tao     | Added standard EP function development description |
| 2021-03-16 | V1.9.0   | Lin Tao     | Added FW exception device description |
| 2021-04-12 | V2.0.0   | Lin Tao     | Added userspace access exception description |
| 2021-04-21 | V2.1.0   | Lin Tao     | Added PCIe to XHCI chip exception description |
| 2021-04-23 | V2.2.0   | Lin Tao     | Added lane split reset IO description and suspend/resume exception description |
| 2021-05-12 | V2.3.0   | Lin Tao     | Added power configuration description under lane split |

---

**Table of Contents**

[TOC]

---

## Chip Resource Introduction

RK3566

| Resource               | Mode    | Supports Chip Interconnect | Supports Lane Split | Notes     |
| ------------------ | ------- | ------------ | ------------ | -------- |
| PCIe Gen2 x 1 lane | RC only | No           | No           | Internal clock |

RK3568

| Resource               | Mode    | Supports Chip Interconnect | Supports Lane Split         | Notes         |
| ------------------ | ------- | ------------ | -------------------- | ------------ |
| PCIe Gen2 x 1 lane | RC only | No           | No                   | Internal clock     |
| PCIe Gen3 x 2 lane | RC/EP   | Yes           | 1 lane RC+ 1 lane RC | External crystal clock |

## DTS Configuration

RK3566

| Resource               | Mode | Reference Configuration                  | Controller Node | PHY Node      |
| ------------------ | ---- | ------------------------- | ---------- | ------------ |
| PCIe Gen2 x 1 lane | RC   | rk3566-evb1-ddr4-v10.dtsi | pcie2x1    | combphy2_psq |

RK3568

| Resource                          | Mode | Reference Configuration                   | Controller Node      | PHY Node      |
| ----------------------------- | ---- | -------------------------- | --------------- | ------------ |
| PCIe Gen2 x 1 lane            | RC   | rk3568-evb2-lp4x-v10.dtsi  | pcie2x1         | combphy2_psq |
| PCIe Gen3 x 2 lane            | RC   | rk3568-evb1-ddr4-v10.dtsi  | pcie3x2         | pcie30phy    |
| PCIe Gen3 split 1 lane + 1 lane | RC   | rk3568-evb6-ddr3-v10.dtsi  | pcie3x2 pcie3x1 | pcie30phy    |
| PCIe Gen3 x 2 lane            | EP   | rk3568-iotest-ddr3-v10.dts | pcie3x2         | pcie30phy    |

1. compatible = "rockchip,rk3568-pcie", "snps,dw-pcie";

**Optional configuration**: This item sets whether the PCIe interface uses RC mode or EP mode. For RC function, configure as compatible = "rockchip,rk3568-pcie", "snps,dw-pcie"; to change to EP mode, modify to compatible = "rockchip,rk3568-pcie-ep", "snps,dw-pcie";

2. `reset-gpios = <&gpio3 13 GPIO_ACTIVE_HIGH>;`

**Required configuration**: This sets the PERST# reset signal for the PCIe interface. Whether it is a slot or a soldered device, please find this pin on the schematic and configure it correctly. Otherwise, it may be difficult to stably establish the link. Special note: if the pcie3x2 interface is split into two 1-lane modes, both the pcie3x2 and pcie3x1 nodes need to be configured with different PERST# signal lines.

3. `num-lanes = <4>;`

**No configuration needed**: This sets the number of lanes used by the PCIe device. It is already configured in rk3568.dtsi and does not need adjustment by default. The software can detect and turn off unused lanes to save power.

4. `max-link-speed = <2>;`

**No configuration needed**: This sets the PCIe bandwidth version. 1 means Gen1, 2 means Gen2, 3 means Gen3. Note that this configuration is chip-related and does not need to be configured per board. It is configured in the SoC's rk3568.dtsi as a test method or a downgrade method after abnormal board design.

5. `status = <okay>;`

**Required configuration**: This must be enabled on both the PCIe controller node and the corresponding PHY node.

6. `vpcie3v3-supply = <&vdd_pcie3v3>;`

**Optional configuration**: Used to configure the 3V3 power supply for PCIe peripherals (in principle, our hardware reference schematics combine the 12V and 3V3 power controls for the PCIe slot, so configuring 3V3 power controls the 12V power as well). If the board needs to control the 3V3 for PCIe peripherals, define a corresponding regulator as shown in the example. For regulator configuration, refer to Documentation/devicetree/bindings/regulator/. Also note that for PCIe 3.0 controllers, an external 100M crystal is generally required, and the power supply for that crystal is typically shared with the PCIe peripheral's 3V3. Therefore, after configuring this item, in addition to confirming the peripheral 3V3 power, also confirm whether the external crystal clock output is normal.

7. `rockchip,bifurcation;`

**Optional configuration**: Can split the 2 lanes of pcie3x2 into two 1-lane controllers. The specific configuration method is to enable both the pcie3x1 and pcie3x2 controller nodes and pcie30phy in the DTS, and add the rockchip,bifurcation attribute to both the pcie3x2 and pcie3x1 nodes. Refer to rk3568-evb6-ddr3-v10.dtsi. Otherwise, by default, the pcie3x1 controller cannot be used.

In this case, lane0 is used by the pcie3x2 controller, and lane1 by the pcie3x1 controller. Hardware layout strictly follows our schematic. Also note that in this mode, both 1-lane controllers must work in RC mode.

Additionally, note that when PCIe 3.0 is split into 2 single lanes connecting to two different peripherals, the crystal and its power supply are controlled by the same path. In this case, do not assign vpcie3v3-supply to either controller, as the controller with 3V3 voltage operation permission would interfere with the normal initialization of the peripheral connected to the other controller. Instead, configure the regulator corresponding to vpcie3v3-supply as regulator-boot-on and regulator-always-on.

8. `rockchip,ext-refclk`

**Special debug configuration**: Note that this configuration only applies to combphy2_psq corresponding to the PCIe2x1 controller. By default, combphy2_psq uses the SoC internal clock scheme. Refer to the rk3568.dtsi node; it uses a 24MHz clock source by default. Besides 24MHz, it also supports 25M and 100M, just adjust the `assigned-clock-rates = <24000000>` value to the desired frequency. The internal clock source scheme is the most cost-effective, so it is the SDK default. However, combphy2_psq still retains an external crystal clock source input option. If PCIe2x1 needs to use an external clock crystal, add rockchip,ext-refclk in the board-level combphy2_psq DTS, and add `assigned-clock-rates = <clock frequency>` to specify the input frequency of the external clock chip. Only 24M, 25M, and 100M are supported.

9. `rockchip,enable-ssc`

**Special debug configuration**: Note that this configuration only applies to combphy2_psq corresponding to the PCIe2x1 controller. By default, the PCIe2x1 PHY output clock does not enable spread spectrum. If users need to avoid EMI issues, they can try adding this configuration item to the combphy2_psq node to enable SSC.

10. `rockchip,lpbk-master`

**Special debug configuration**: This configuration is for loopback signal testing. It uses the PCIe controller to construct a simulated loopback master environment, allowing the device under test to enter slave mode. Do not configure this for non-lab RX loopback testing. Note that the Gen3 controller may need to configure compliance mode to enter loopback slave mode. If the reader does not understand what loopback testing is, this is not the configuration you are looking for. Do not ask questions about this configuration.

11. `rockchip,compliance-mode`

**Special debug configuration**: This configuration is for compliance signal testing. It forces the PCIe controller into compliance test mode. By default, TX testing should use SMA fixtures to enter compliance, not force entry. This configuration is reserved for testing Gen3 mode loopback slave, because lab testing may require entering compliance mode for Gen3 loopback testing. If the reader does not understand what compliance testing is, this is not the configuration you are looking for. Do not ask questions about this configuration.

## Menuconfig Configuration

1. Ensure the following configurations are enabled to use PCIe functions correctly

```
CONFIG_PCI=y
CONFIG_PCI_DOMAINS=y
CONFIG_PCI_DOMAINS_GENERIC=y
CONFIG_PCI_SYSCALL=y
CONFIG_PCI_BUS_ADDR_T_64BIT=y
CONFIG_PCI_MSI=y
CONFIG_PCI_MSI_IRQ_DOMAIN=y
CONFIG_PHY_ROCKCHIP_SNPS_PCIE3=y
CONFIG_PHY_ROCKCHIP_NANENG_COMBO_PHY=y
CONFIG_PCIE_DW=y
CONFIG_PCIE_DW_HOST=y
CONFIG_PCIE_DW_ROCKCHIP=y
CONFIG_PCIEPORTBUS=y
CONFIG_PCIE_PME=y
CONFIG_GENERIC_MSI_IRQ=y
CONFIG_GENERIC_MSI_IRQ_DOMAIN=y
CONFIG_IRQ_DOMAIN=y
CONFIG_IRQ_DOMAIN_HIERARCHY=y
```

2. Enabling NVMe devices (SSD on PCIe interface), PCIe-to-AHCI devices (SATA), PCIe-to-USB devices (XHCI) are already enabled in the default config. Please confirm. For other bridge devices such as Ethernet cards, WiFi, etc., please confirm the relevant config configuration yourself.

```
CONFIG_BLK_DEV_NVME=y
CONFIG_SATA_PMP=y
CONFIG_SATA_AHCI=y
CONFIG_SATA_AHCI_PLATFORM=y
CONFIG_ATA_SFF=y
CONFIG_ATA=y
CONFIG_USB_XHCI_PCI=y
CONFIG_USB_XHCI_HCD=y
```

Special note: the default 4.19 open-source kernel only supports PCIe-to-SATA devices listed in drivers/ata/ahci.c. For others, please contact the vendor or distributor for support.

## Common Application Questions

**Q1**: When routing is difficult, can the lanes be interleaved?

A1: In theory, lanes can be interleaved. The RC's lane[1-4] can correspond to the EP/switch's lane[1-4] arbitrarily. This is a hardware protocol behavior and does not require software changes. However, our EVB has not been verified. Please use with caution and manage the risk.

**Q2**: Can the differential signals on the same lane be interleaved? For example, RC's lane1 RX+ connects to the EP/Switch's RX-, TX+ connects to the EP/Switch's TX-. Or RX positive/negative swapped, TX positive/negative swapped, etc. How to handle this?

A2: In theory, any connection is possible. The software does not need additional handling. The PCIe detection state machine already considers all these cases. However, our EVB has not been verified. Please use with caution and manage the risk.

**Q3**: The RK356X's 3.0 RC only has 2 lanes. Can these 2 lanes be split into 1+1 mode?

A3: Yes. See point 6 of DTS configuration for details.

**Q4**: How large is the BAR address space domain supported by the RK356X chip?

A4: The PCIe 2.0 controller supports 1GB of 64-bit memory space (non-prefetchable) and 1MB of IO space. If both lanes of the PCIe 3.0 controller are used simultaneously, PCIe3x2 supports 1GB of 64-bit memory space (non-prefetchable) and 1MB of IO space.
If the PCIe 3.0 controller is split into two 1-lane controllers, both PCIe3x1 and PCIe3x2 each support 1GB of 64-bit memory space (non-prefetchable) and 1MB of IO space.

**Q5**: Does it support PCIe switches? Does your company have any recommendations?

A5: In theory, it is supported without any patches, and there is no recommended list. To manage risk, please contact the supplier to borrow an evaluation board, verify it on our EVB before purchasing.

**Q6**: How to determine the relationship between controller and device in the system?

A6: The PCIe2x1 controller assigns Bus addresses in the range 0x0~0xf to peripherals, PCIe3x1 assigns bus addresses in the range 0x10~0x1f, and PCIe3x2 assigns bus addresses in the range 0x20~0x2f. From the lspci output, you can see the bus address (high bits) assigned to each device, and thus determine the correspondence. The second column Class is the device type, the third column is VID:PID.
For Class types, refer to https://pci-ids.ucw.cz/read/PD/. For vendor VID and product PID, refer to http://pci-ids.ucw.cz/v2.2/pci.ids

```
console:/ # lspci
21:00.0 Class 0108: 144d:a808
20:00.0 Class 0604: 1d87:3566
11:00.0 Class 0c03: 1912:0014
10:00.0 Class 0604: 1d87:3566
01:00.0 Class 0c03: 1912:0014
00:00.0 Class 0604: 1d87:3566
```

Each controller reserves 16 levels of bus downstream to connect devices, meaning each controller can connect up to 16 devices (including switches), which is generally sufficient. Readers can skip the following explanation. If adjustment is truly needed, modify the bus-range allocation of the three controllers in rk3568.dtsi, ensuring they do not overlap. Also, adjusting bus-range will change the MSI(-X) RID range of devices, so update msi-map accordingly.

```
bus-range = <start address   end address>

msi-map = < bus-range start address << 16
			&its
			bus-range start address << 16
			total bus count in bus-range << 16>
```

For example, if bus-range is adjusted to 0x30 ~ 0x60, meaning the bus addresses assigned to downstream devices of this controller range from 0x30 to 0x60, total 0x30 buses.

Then configure `msi-map = <0x3000  &its  0x3000  0x3000>`

And so on. Ensure that the bus-range and msi-map of the three controllers do not overlap with each other, and that bus-range and msi-map match each other.

**Q7**: How to determine the link status of a PCIe device?

A7: Use the lspci tool provided with the server. Run lspci -vvv, find the corresponding device's linkStat to view; Speed is the speed, Width is the number of lanes. For parsing other information, search online.

**Q8**: How to determine the number of MSI or MSI-X that the SoC can allocate to PCIe devices?

A8: The number of MSI or MSI-X that the SoC can allocate to each PCIe device is determined by the interrupt controller's resources. For the 3566 and 3568, the total number of MSI or MSI-X that can be allocated to downstream devices of PCIe 2.0 and PCIe 3.0 controllers is 65535 each.

**Q9**: Does it support the Legacy INT method? How to force the use of Legacy INTA ~ INTD interrupts?

A9: Legacy INT is supported. However, the Linux PCIe protocol stack's default priority is MSI-X, MSI, Legacy INT, so common off-the-shelf devices will not request Legacy INT. For debugging and testing, refer to the kernel documentation Documentation/admin-guide/kernel-parameters.txt, where the "pci=option[,option...]  [PCI] various PCI subsystem options." describes that MSI can be disabled in the cmdline, forcing the system to use the Legacy INT allocation mechanism. Taking the RK356X Android platform as an example, add an extra item pci=nomsi to the cmdline parameters in arch/arm64/boot/dts/rockchip/rk3568-android.dtsi, separated by spaces:

```c
bootargs = "...... pci=nomsi ......";
```

If successfully added, lspci -vvv will show that both MSI and MSI-X of this device are disabled (Enable-), and INT A interrupt is assigned with IRQ 80. cat /proc/interrupts can display the status of IRQ 80.

```
01:00.0 Class 0108: Device 14a4:22f1 (rev 01) (prog-if 02)
        Subsystem: Device 1b4b:1093
...
        Interrupt: pin A routed to IRQ 80
...
        Capabilities: [50] MSI: Enable- Count=1/1 Maskable+ 64bit+
                Address: 0000000000000000  Data: 0000
                Masking: 00000000  Pending: 00000000
...
        Capabilities: [b0] MSI-X: Enable- Count=19 Masked-
                Vector table: BAR=0 offset=00002000
                PBA: BAR=0 offset=00003000
```

## Chip Interconnect Function

The PCIe Gen3 x 2 lane interface of the RK3568 chip supports EP or function for inter-chip interconnect. The PCIe Gen2 x 1 lane interface of the RK3566 chip and RK3568 chip cannot be used for inter-chip interconnect.

1. Ensure the following kernel configuration items are enabled. For the EP board, change the compatible field of the controller to be used in rk3568.dtsi to compatible = "rockchip,rk3568-pcie-ep"; for the RC board, the controller configuration remains unchanged.

```
CONFIG_ROCKCHIP_PCIE_DMA_OBJ=y
CONFIG_DEBUG_FS=y
```

2. Then, in the rk3568.dtsi of **both boards**, reserve a section of memory as communication data space and add it to the controller node, for example:

```
  EP board rk3568 chip configuration, using pcie3x2 as the interface
  reserved-memory {
      #address-cells = <2>;
      #size-cells = <2>;
      ranges;
      dma_trans: dma_trans@3c000000 {
        reg = <0x0 0x3c000000 0x0 0x04000000>; // Reserves memory from 0x3c000000 to 0x40000000
      };
  };

  &pcie3x2 {
      compatible = "rockchip,rk3568-pcie-ep"; // pcie3x2 as EP
      memory-region = <&dma_trans>;   // This memory is used by the pcie3x2 controller for inter-chip communication
      busno = <1>; // As EP, allocate bus 1
  };

  RC board rk3568 chip configuration, using pcie3x2 as the interface
  reserved-memory {
      #address-cells = <2>;
      #size-cells = <2>;
      ranges;
      dma_trans: dma_trans@3c000000 {
        reg = <0x0 0x3c000000 0x0 0x04000000>; // Reserves memory from 0x3c000000 to 0x40000000
      };
  };

  &pcie3x2 {
      compatible = "rockchip,rk3568-pcie"; // pcie3x2 as RC
      memory-region = <&dma_trans>;   // This memory is used by the pcie3x2 controller for inter-chip communication
      busno = <0>; // As RC, allocate bus 0
  };

```

3. Internal development engineers who need to run the interconnect mode program and reference code can directly access https://redmine.rock-chips.com/issues/281070. Customers need to obtain the corresponding project permissions in redmine and contact the FAE center to obtain it. Among them, test-pcie-ep-new is a daemon program for maintaining the interconnect transport protocol. test-pcie is a real-time data sending program for actual data transmission.

4. Copy test-pcie-ep-new and test-pcie to the RC and EP boards.

    First, run the following command on both the RC and EP boards for acknowledgment: ./test-pcie-ep-new 500 &
    Then, RC sends command: send 10000 packets, 1M each: ./test-pcie 1 10000
    EP sends command: send 10000 packets, 1M each: ./test-pcie 2 10000
    Finally, if it ends normally, both the RC and EP sides will see logs similar to: DMA: To bus: 1541MB/s

5. For debugging issues with the interconnect model, provide the following two pieces of information:

```
cat /sys/kernel/debug/pcie/pcie_trx
cat /proc/interrups | grep pcie
```

## Standard EP Function Development

For using the RK3568 PCIe interface as an EP device to interconnect with any RK chip, our company's interconnect model is recommended, with guaranteed performance and stability. See the "Chip Interconnect Function" chapter for details. For technical personnel familiar with PCIe EP device driver development who need to use the RK3568 to interface with closed-chip systems (such as x86), or wish to develop standard EP business processes on their own, refer to this section for secondary development.

Standard EP function development requires three functional components:

- Function driver running on the RC side for the RK3568 EP device, responsible for applying for virtual memory corresponding to the BAR space in the RC system, managing data services, registering and handling various interrupts, and providing business interfaces for upper-layer applications.
- Firmware driver running on the EP side (RK3568 chip in this example), responsible for configuring inbound and outbound BAR memory, providing DMA for memory data transfer between EP and RC.
- Fast link establishment loader: responsible for configuring class code, ID, modifying BAR size requirements, and quickly establishing the link connection. Because x86 BIOS scans the bus quickly, the link needs to be prepared in advance.

Since the development technical difficulty is high, we provide a complete runnable demo to reduce the difficulty of secondary development. This demo can simulate the RK3568 chip as a memory controller, connecting to any chip platform's Linux system. Taking x86 as an example, run sudo lspci to see our device:

```
lt-HP-ProDesk-400-G5 -NT-ID5-APD:~$ sudo lspci
[sudo] password for lt:
00:00.0 Hest bridge: Intel Corporaton 8th Gen Core Processor Host Brldge/RAN Regtsters
00:02.0 VGA compatible controller: Intel Corporation UHD Graphics 630 (Desktop)

...

02:00.0 Memory controller: Fuzhou Rockchip Electronics co. Ltd Device 356a Crev 01)
```

After loading the function driver module on the RC side, the /dev/rk-rmd device node will appear, accessible using echo/cat. Accessing this node will actually access the memory on the EP side (RK3568 in this example). The EP-side memory address being accessed can be configured in the EP-side firmware driver. This demo enables the most basic data interaction, providing support for encapsulating higher-layer business services. Internal development engineers who need to run the standard EP function program and reference code can directly access https://redmine.rock-chips.com/issues/281070. Customers need to obtain the corresponding project permissions in redmine and contact the FAE center to obtain it.

Notes:

- When interfacing with x86 devices, note that many off-the-shelf x86 motherboard x16 slots do not support devices with less than 4 lanes by default. Please design the gold finger as x1 and connect to the x1 slot.
- The EP system power is supplied through the gold finger from the RC PCIe slot. Connect the #PERST on the gold finger to the PMU reset signal of the EP main controller, so the RC can control the #PERST signal on its slot to perform chip-level reset control of the EP.
- The #PRSENT signal on the EP gold finger should be correctly configured for x1 mode.

## Troubleshooting

### Training Failure

```
PCIe Link Fail log repeats as follows; LTSSM state machine may differ.

rk-pcie 3c0000000.pcie: PCIe Linking... LTSSM is 0x0
rk-pcie 3c0000000.pcie: PCIe Linking... LTSSM is 0x0
rk-pcie 3c0000000.pcie: PCIe Linking... LTSSM is 0x0

If link succeeds, you should see logs similar to, LTSSM state machine may differ, focus on link up
[    2.410536] rk-pcie 3c0000000.pcie: PCIe Link up, LTSSM is 0x130011
```

Cause: training failed, the peripheral is not operational or the signal is abnormal. First, check if reset-gpios is configured correctly. Second, check if the peripheral's 3V3 power supply is present and sufficient; some peripherals require 12V power. Finally, test if the timing between the reset signal and power supply conflicts with the device's spec. If none of these can resolve, locate signal integrity. An eye diagram test and PCB should be provided to our hardware team, and we recommend that your company have a lab provide a TX compatibility signal test report.

Also, it is recommended that customers enable RK_PCIE_DBG in pcie-dw-rockchip.c to capture a log for analysis. Please note, if multiple controllers are used simultaneously, disable the controllers corresponding to unused or problem-free devices before capturing logs for easier analysis.

### PCIe 3.0 Controller Device Initialization System Exception

```
[   21.523506] rcu: INFO: rcu_preempt detected stalls on CPUs/tasks:
[   21.523557] rcu:     1-...0: (0 ticks this GP) idle=652/1/0x4000000000000000 softirq=30/30 fqs=2097
[   21.523579] rcu:     3-...0: (5 ticks this GP) idle=4fa/1/0x4000000000000000 softirq=35/36 fqs=2097
[   21.523590] rcu:     (detected by 2, t=6302 jiffies, g=-1151, q=98)
[   21.523610] Task dump for CPU 1:
[   21.523622] rk-pcie         R  running task        0    55      2 0x0000002a
[   21.523640] Call trace:
[   21.523666]  __switch_to+0xe0/0x128
[   21.523682]  0x43752cfcfe820900
[   21.523694] Task dump for CPU 3:
[   21.523704] kworker/u8:0    R  running task        0     7      2 0x0000002a
[   21.523737] Workqueue: events_unbound enable_ptr_key_workfn
[   21.523751] Call trace:
[   21.523767]  __switch_to+0xe0/0x128
[   21.523786]  event_xdp_redirect+0x8/0x90
[   21.523816] rcu: INFO: rcu_sched detected stalls on CPUs/tasks:
[   21.523840] rcu:     1-...0: (50 ticks this GP) idle=652/1/0x4000000000000000 softirq=7/30 fqs=2099
[   21.523859] rcu:     3-...0: (55 ticks this GP) idle=4fa/1/0x4000000000000000 softirq=5/36 fqs=2099
[   21.523870] rcu:     (detected by 2, t=6302 jiffies, g=-1183, q=1)
[   21.523887] Task dump for CPU 1:
[   21.523898] rk-pcie         R  running task        0    55      2 0x0000002a
[   21.523915] Call trace:
[   21.523931]  __switch_to+0xe0/0x128
[   21.523944]  0x43752cfcfe820900
[   21.523955] Task dump for CPU 3:
[   21.523965] kworker/u8:0    R  running task        0     7      2 0x0000002a
[   21.523990] Workqueue: events_unbound enable_ptr_key_workfn
[   21.524004] Call trace:
```

Cause: If the system hangs near this log, it indicates that the PCIe 3.0 PHY is working abnormally. Check the following in order:

- Check if the external crystal clock input is abnormal. If there is no clock or the amplitude is abnormal, the PHY cannot lock.
- Check if the PCIE30_AVDD_0V9 and PCIE30_AVDD_1V8 voltages meet the requirements.

### PCIe 2.0 Controller Device Initialization System Exception

```
[   21.523870] rcu:     (detected by 2, t=6302 jiffies, g=-1183, q=1)
[   21.523887] Task dump for CPU 1:
[   21.523898] rk-pcie         R  running task        0    55      2 0x0000002a
[   21.523915] Call trace:
[   21.523931]  __switch_to+0xe0/0x128
[   21.523944]  0x43752cfcfe820900
[   21.523955] Task dump for CPU 3:
[   21.523965] kworker/u8:0    R  running task        0     7      2 0x0000002a
[   21.523990] Workqueue: events_unbound enable_ptr_key_workfn
[   21.524004] Call trace:
```

Cause: If the system hangs near this log, it indicates that the PCIe 2.0 PHY is working abnormally. Check the following in order:

- Check if the PCIE30_AVDD_0V9 and PCIE30_AVDD_1V8 voltages meet the requirements.
- Modify the combphy2_psq driver phy-rockchip-naneng-combphy.c. Add the following code at the end of the rockchip_combphy_init function to check the PHY internal configuration:

```c
val = readl(priv->mmio + (0x27 << 2));
dev_err(priv->dev, "TXPLL_LOCK is 0x%x PWON_PLL is 0x%x\n",
val & BIT(0), val & BIT(1));
val = readl(priv->mmio + (0x28 << 2));
dev_err(priv->dev, "PWON_IREF is 0x%x\n", val & BIT(7));
```

First, check if TXPLL_LOCK is 1. If not, the PHY has not locked. Next, check if PWON_IREF is 1. If not, the PHY clock is abnormal. In this case, try switching the combophy clock frequency by modifying the assigned-clock-rates of combphy2_psq in rk3568.dtsi, trying 25M or 100M sequentially.

- If the above steps are all invalid, bypass the PHY internal clock to the refclk differential signal pins for measurement. Add the bypass at the end of the rockchip_combphy_pcie_init function, with the following code:

```c
u32 val;
val = readl(priv->mmio + (0xd << 2));
val |= BIT(5);
writel(val,priv->mmio + (0xd << 2));
```

After setting, sequentially configure the combphy2_psq clock frequency to 24M, 25M, and 100M. Use an oscilloscope to measure the clock from the PCIe refclk differential signal pins, checking if the frequency, amplitude, and jitter meet the requirements.

### PCIe Peripheral Resource Allocation Exception

```
[    3.286864] pci 0002:20:00.0: bridge configuration invalid ([bus 01-ff]), reconfiguring
[    3.286886] scanning [bus 00-00] behind bridge, pass 1
[    3.288165] pci 0002:21 :00.0: supports D1 D2
[    3.288170] pci 0002:21 :00.0: PME# supported from DO D1 D3hot
[    3.298238] pci bus 0002:21: busn res: [bus 21-2f] end is updated to 21
[    3.298441] pci 0002:21:00.0: BAR 1: no space for [mem size 0xe0000000 ]
[    3.298456] pci 0002:21:00.0: BAR 1: failed to assign [mem size 0xe0000000 ]
[    3.298473] pci 0002:21:00.0: BAR 2: assigned [mem 0x380900000- 0x38090ffff pref ]
[    3.298488] pci 0002:21:00.0: PCI bridge to [bus 21]
```

As mentioned in common application question Q4, the PCIe address space on the RK356X is limited. This log indicates that the peripheral on bus 21 requested 3GB of 64-bit memory space from the RK356X, exceeding the limit and preventing resource allocation. If this is an off-the-shelf device, it is not supported by the RK356X chip. If it is a custom device, contact the device vendor to confirm if the BAR space size encoding can be modified.

### MSI/MSI-X Not Usable

During the development process of porting a peripheral driver (mainly WiFi), if the function driver on the host side cannot use MSI or MSI-X interrupts causing abnormal flow, follow these steps for troubleshooting:

- Confirm that the configurations mentioned in the menuconfig section, especially the MSI-related configurations, are correctly enabled.
- Confirm that the its node in rk3568.dtsi is not set to disabled.
- Run lspci -vvv to check if the corresponding device supports MSI or MSI-X and if they are enabled. Taking this device as an example, its capabilities report that it supports 32 64-bit MSI, currently uses only 1, but Enable- indicates not enabled. If properly enabled, you should see Enable+ and the Address should show something like 0x00000000fd4400XX. This is usually because the device driver has not been loaded or failed to allocate MSI or MSI-X during loading. Refer to other drivers, use functions like pci_alloc_irq_vectors for allocation. For details, refer to practices in other mature PCIe peripheral drivers and the kernel documentation Documentation/PCI/MSI-HOWTO.txt.

```
Capabilities: [58] MSI: Enable- Count=1/32 Maskable- 64bit+
                Address: 0000000000000000  Data: 0000
```

- If MSI or MSI-X is properly allocated, use the following command to check interrupt counts: cat /proc/interrupts. Find the corresponding ITS-MSI interrupt (determined by the driver name in the last column, e.g., xhci_hcd driver allocated these MSI interrupts). In theory, each communication transfer increases ITS. If the device has no communication or abnormal communication, you will see an interrupt count of 0, or a value that does not increase after initiating communication.

```
229: 0 0 0 0 0 0 ITS-MSI 524288 Edge xhci_hcd
```

- If it is a probabilistic event causing the function driver to not receive MSI or MSI-X interrupts, try the following. First, execute cat /proc/interrupts to see the corresponding interrupt number. Using the above 229 as an example, migrate the interrupt to another CPU for testing. For example, switch to CPU2 using the command echo 2 > /proc/irq/229/smp_affinity_list.

- Use a protocol analyzer to capture protocol signals to check if the peripheral probabilistically does not send MSI or MSI-X interrupts to the host, causing the exception. Note that protocol analyzers generally cannot capture signals from soldered devices. You need to purchase a gold finger board from the device vendor and test on our EVB. Also note that our EVB only supports standard interface gold finger boards. If the device under test is an M.2 interface device (common types: key A, key B, key M), purchase the corresponding adapter board.

### Error During Communication After Peripheral Enumeration

Below is a log of an NVMe device on RK3566-EVB2 that was successfully enumerated but then suddenly reported an error during communication. Regardless of the device, if enumeration and enabling are successful, you should see a log similar to nvme 0000:01:00.0: enabling device (0000 -> 0002). If the device then reports errors during communication, consider the following three aspects:

- Use an oscilloscope to measure the peripheral's power supply, ruling out voltage drops.
- Use an oscilloscope to measure the peripheral's #PERST signal, ruling out accidental reset.
- Use an oscilloscope to measure the PCIe PHY's 0v9 and 1v8 power supplies, ruling out PHY power anomalies.

Special reminder: RK EVBs have many signal multiplexing. The PCIe #PERST control signal is multiplexed with other peripheral IOs through DIP switches. Please confirm this with the hardware team. It is known that some RK3566-EVB2 DIP switches have anomalies that need correction.

```
[    2.426038] pci 0000:00:00.0:   bridge window [mem 0x300900000-0x3009fffff]
[    2.426183] pcieport 0000:00:00.0: of_irq_parse_pci: failed with rc=-22
[    2.427493] pcieport 0000:00:00.0: Signaling PME with IRQ 106
[    2.427712] pcieport 0000:00:00.0: AER enabled with IRQ 115
[    2.427899] pcieport 0000:00:00.0: of_irq_parse_pci: failed with rc=-22
[    2.428202] nvme nvme0: pci function 0000:01:00.0
[    2.428259] nvme 0000:01:00.0: enabling device (0000 -> 0002)
[    2.535404] nvme nvme0: missing or invalid SUBNQN field.
[    2.535522] nvme nvme0: Shutdown timeout set to 8 seconds
...
[   48.129408] print_req_error: I/O error, dev nvme0n1, sector 0
[   48.137197] nvme 0000:01:00.0: enabling device (0000 -> 0002)
[   48.137299] nvme nvme0: Removing after probe failure status: -19
[   48.147182] Buffer I/O error on dev nvme0n1, logical block 0, async page read
[   48.162900] nvme nvme0: failed to set APST feature (-19)
```

### Peripheral Enumeration Process Reports FW Exception

If the device reports the following error during BAR space allocation in the enumeration process, the general problem is that the device's BAR space is incompatible with the protocol and requires special handling. Add the corresponding quirk in drivers/pci/quirks.c. Specific information should be obtained from the device vendor.

```
[    2.379768] rk-pcie 3c0000000.pcie: PCIe Link up, LTSSM is 0x30011
[    2.380155] rk-pcie 3c0000000.pcie: PCI host bridge to bus 0000:00
[    2.380187] pci_bus 0000:00: root bus resource [bus 00-0f]
[    2.380204] pci_bus 0000:00: root bus resource [??? 0x300000000-0x3007fffff flags 0x0] (bus address [0x00000000-0x007fffff])
[    2.380217] pci_bus 0000:00: root bus resource [io  0x0000-0xfffff] (bus address [0x800000-0x8fffff])
[    2.380230] pci_bus 0000:00: root bus resource [mem 0x300900000-0x33fffffff] (bus address [0x00900000-0x3fffffff])
[    2.394983] pci 0000:01:00.0: [Firmware Bug] reg 0x10: invalid BAR (can't size)
```

### Accessing PCIe Device BAR Address Space After Remapping

If the BAR address assigned to a PCIe peripheral is mapped using ioremap in the kernel, and then read/written using memset or memcpy, an alignment fault error will occur. Similarly, if the BAR address is mapped to userspace using mmap and then accessed with memset or memcpy, a sigbus error will occur. The reason is that memcpy or memset on ARM64 may use instructions like DC ZVA, which do not support Device memory type (nGnRE).

```
[    69.195811] Unhandled fault: alignment fault (0x96000061) at 0xffffff8009800000
[    69.195829] Internal error: : 96000061 [#1] PREEMPT SMP
[    69.363352] Modules linked in:
[    69.363655] CPU: 0 PID: 1 Comm: swapper/0 Not tainted 4.19.172 #691
[    69.364205] Hardware name: Rockchip rk3568 evb board (DT)
[    69.364688] task: ffffffc00a300000 task.stack: ffffffc00a2dc000
[    69.365227] PC is at __memset+0x16c/0x190
[    69.365593] LR is at snda_alloc_res+0xac/0xfc
[    69.366054] pc : [<ffffff800839a2ac>] lr : [<ffffff80085055b8>] pstate: 404000c5
[    69.366713] sp : ffffffc00a2df810
```

Solution: either of the following two methods:

- Use memremap(phys_addr, size, MEMREMAP_WC) to replace mmap
- Use memset_io or memset_fromio/memset_toio APIs

### PCIe-to-USB Device Driver (xhci) Loading Exception

Some off-the-shelf PCIe-to-USB chips, such as the VL805, have abnormal device driver loading after link establishment. The main issue is that the xHCI chip reset does not complete, likely requiring a firmware upgrade for the bridge chip. Test on a PC platform first. If a firmware upgrade is needed, contact the vendor.

```
[ 6.289987] pci 0000:01:00.0: xHCI HW not ready after 5 sec (HC bug?) status = 0x811
[ 6.531098] xhci_hcd 0000:01:00.0: xHCI Host Controller
[ 6.531803] xhci_hcd 0000:01:00.0: new USB bus registered, assigned bus number 3
[ 16.532539] xhci_hcd 0000:01:00.0: can't setup: -110
[ 16.533033] xhci_hcd 0000:01:00.0: USB bus 3 deregistered
[ 16.533712] xhci_hcd 0000:01:00.0: init 0000:01:00.0 fail, -110
[ 16.534281] xhci_hcd: probe of 0000:01:00.0 failed with error -110
```

If still not resolved, try the following patch in drivers/usb/host/pci-quirks.c:

```diff
diff --git a/drivers/usb/host/pci-quirks.c b/drivers/usb/host/pci-quirks.c
index 3ea435c..cca536d 100644
--- a/drivers/usb/host/pci-quirks.c
+++ b/drivers/usb/host/pci-quirks.c
@@ -1085,8 +1085,11 @@ static void quirk_usb_early_handoff(struct pci_dev *pdev)
 	/* Skip Netlogic mips SoC's internal PCI USB controller.
 	 * This device does not need/support EHCI/OHCI handoff
 	 */
-	if (pdev->vendor == 0x184e)	/* vendor Netlogic */
+	if ((pdev->vendor == 0x184e) ||
+	    (pdev->vendor == PCI_VENDOR_ID_VIA && pdev->device == 0x3483)) {
+		/* Taking VL805 as an example, fill in the correct vendor ID and device ID for other chips */
+		dev_warn(&pdev->dev, "bypass xhci quirk for VL805\n");
 		return;
+	}
 	if (pdev->class != PCI_CLASS_SERIAL_USB_UHCI &&
 			pdev->class != PCI_CLASS_SERIAL_USB_OHCI &&
 			pdev->class != PCI_CLASS_SERIAL_USB_EHCI &&
```

### PCIe 3.0 Device Suspend/Resume Exception

If the following log is seen during suspend/resume testing, the cause is that the 3.3v power was turned off during suspend, affecting the clock crystal power. Check from three aspects:

- The power configuration of vpcie3v3-supply in the DTS. Check if the max and min power settings are unreasonable, causing power operation issues.
- Measure the clock crystal to see if it was turned off prematurely before suspend, or was not turned back on after suspend failed.
- Change to external power supply for the 3.3v power and crystal to rule out the exception.

```
[   17.406781] PM: suspend entry (deep)
[   17.406839] PM: Syncing filesystems ... done.
[   17.471710] Freezing user space processes ... (elapsed 0.002 seconds) done.
[   17.474337] OOM killer disabled.
[   17.474343] Freezing remaining freezable tasks ... (elapsed 0.001 seconds) done.
[   17.476200] Suspending console(s) (use no_console_suspend to debug)
[   17.479152] android_work: sent uevent USB_STATE=DISCONNECTED
[   17.480290] [WLAN_RFKILL]: Enter rfkill_wlan_suspend
[   17.501382] rk-pcie 3c0000000.pcie: fail to set vpcie3v3 regulator
[   17.501406] dpm_run_callback(): genpd_suspend_noirq+0x0/0x18 returns -22
[   17.501418] PM: Device 3c0000000.pcie failed to suspend noirq: error -22
[   38.506580] rcu: INFO: rcu_preempt detected stalls on CPUs/tasks:
[   38.506601] rcu:  1-...0: (1 GPs behind) idle=25a/1/0x4000000000000000 softirq=4657/4657 fqs=2100
[   38.506604] rcu:  (detected by 0, t=6302 jiffies, g=4609, q=17)
[   38.506613] Task dump for CPU 1:
[   38.506617] kworker/u8:4    R  running task        0  1380      2 0x0000002a
[   38.506642] Workqueue: events_unbound async_run_entry_fn
[   38.506647] Call trace:
[   38.506657]  __switch_to+0xe4/0x138
[   38.506667]  pci_pm_resume_noirq+0x0/0x120
[  101.523233] rcu: INFO: rcu_preempt detected stalls on CPUs/tasks:
[  101.523250] rcu:  1-...0: (1 GPs behind) idle=25a/1/0x4000000000000000 softirq=4657/4657 fqs=8402
[  101.523253] rcu:  (detected by 0, t=25207 jiffies, g=4609, q=17)
[  101.523260] Task dump for CPU 1:
[  101.523264] kworker/u8:4    R  running task        0  1380      2 0x0000002a
[  101.523284] Workqueue: events_unbound async_run_entry_fn
[  101.523288] Call trace:
[  101.523297]  __switch_to+0xe4/0x138
[  101.523307]  pci_pm_resume_noirq+0x0/0x120
```
