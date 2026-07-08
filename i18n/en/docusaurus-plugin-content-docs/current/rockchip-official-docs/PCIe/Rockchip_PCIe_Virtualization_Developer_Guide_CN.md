# Rockchip Platform PCIe Device Virtualization Developer Guide

ID: RK-KF-YF-170

Release Version: V1.0.0

Date: 2021-03-30

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

THIS DOCUMENT IS PROVIDED "AS IS". ROCKCHIP ELECTRONICS CO., LTD. ("COMPANY") DOES NOT PROVIDE ANY WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED, OTHERWISE, WITH RESPECT TO THE ACCURACY, RELIABILITY, COMPLETENESS, MERCHANTABILITY, FITNESS FOR ANY PARTICULAR PURPOSE OR NON-INFRINGEMENT OF ANY REPRESENTATION, INFORMATION AND CONTENT IN THIS DOCUMENT. THIS DOCUMENT IS FOR REFERENCE ONLY.

DUE TO PRODUCT VERSION UPGRADES OR OTHER REASONS, THIS DOCUMENT MAY BE UPDATED OR MODIFIED FROM TIME TO TIME WITHOUT ANY NOTICE.

**Trademark Statement**

"Rockchip", "瑞芯微", "瑞芯" are registered trademarks of the Company and owned by the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**All rights reserved. ©2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, no entity or individual may extract, copy, or distribute part or all of the content of this document in any form without the written permission of the Company.

Rockchip Electronics Co., Ltd.

No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Tel: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This solution is based on QEMU + ARM KVM + PCIE + SMMU + VFIO to implement peripheral virtualization. The main purpose is to directly access PCIe peripherals in virtual machines. Following this guide, you can mount PCIe NVMe SSDs and implement PCIe network card connections in virtual machines.

**Product Versions**

| **Chip Name**         | **Kernel Version** |
| -------------------- | ------------ |
| Rockchip chips with SMMU | 4.19         |

**Intended Audience**

This document (this guide) is mainly intended for the following engineers:

Technical support engineers

Software development engineers

**Revision History**

| **Date**   | **Version** | **Author** | **Change Description** |
| ---------- | -------- | -------- | ------------ |
| 2021-03-30 | V1.0.0   | Xue Xiaoming | Initial version |

---

**Table of Contents**

[TOC]

---

## Environment Setup

### Guest OS Kernel Configuration

Enable the following configurations.

```
CONFIG_ARM64_VA_BITS_39=y
CONFIG_ARM64_VA_BITS=39
```

Disable the following configurations.

```
CONFIG_HUGETLBFS
CONFIG_HUGETLB_PAGE
```

Use the following command to generate the guest OS kernel firmware.

```shell
make ARCH=arm64
```

Firmware location.

```
arch/arm64/boot/Image
```

### Guest OS Ramdisk Preparation

Includes busybox tools, lspci, ifconfig tools.

### HOST OS Kernel Configuration

Based on rockchip_defconfig, additionally enable the following configurations.

```
CONFIG_KVM
CONFIG_VFIO
CONFIG_VFIO_PCI
CONFIG_IOMMU_SUPPORT
CONFIG_ARM_SMMU_V3
CONFIG_VFIO_IOMMU_TYPE1
CONFIG_BLK_DEV_NVME
CONFIG_R8169
CONFIG_PCIE_DW
CONFIG_PCIE_DW_HOST
CONFIG_PCIE_DW_ROCKCHIP
```

### QEMU Preparation

Use Rockchip's buildroot project to compile qemu. The executable is named qemu-system-aarch64.

### Host OS Ramdisk Preparation

Use Rockchip's buildroot project to generate ramdisk, including qemu-system-aarch64, guest OS kernel firmware, and guest OS ramdisk firmware.

Rockchip's buildroot project configuration and compilation methods refer to the buildroot user manual. This guide provides a precompiled ramdisk directory containing all required firmware.

In the Ubuntu environment, use abootimg-pack-initrd to generate initrd.img firmware in the same directory as ramdisk, and use abootimg-unpack-initrd to extract initrd.img.

## DTS Configuration

### SMMU Configuration

   ```
compatible = "arm,smmu-v3";
   ```

Must be configured to match the ARM SMMU-v3 driver.

The following register and interrupt configurations take RK3588 as an example.

   ```
reg = <0x0 0xfc900000 0x0 0x100000>;
   ```

ARM SMMU-v3 base address and size.

```
interrupts = <GIC_SPI 369 IRQ_TYPE_EDGE_RISING>,
			 <GIC_SPI 371 IRQ_TYPE_EDGE_RISING>,
			 <GIC_SPI 374 IRQ_TYPE_EDGE_RISING>,
			 <GIC_SPI 367 IRQ_TYPE_EDGE_RISING>;
interrupt-names = "eventq", "gerror", "priq", "cmdq-sync";
```

See Documentation/devicetree/bindings/iommu/arm,smmu-v3.txt.

```
#iommu-cells = <1>;
```

Must be 1, used to describe the device's stream ID. See Documentation/devicetree/bindings/iommu/arm,smmu-v3.txt.

### PCIe Supplementary Configuration

```
iommu-map = <0x0 &smmu 0x0 0x10000>;
```

Create SMMU page tables for PCIe peripherals.

## Running

1. Unbind the host PCIe device driver

   Use lspci to get the device address. Assuming the device address is 0002:21:00.0, execute the following command to unbind.

   ```shell
   echo 0002:21:00.0 > /sys/bus/pci/devices/0002\:21\:00.0/driver/unbind
   ```

2. Remount the PCIe device to the VFIO-PCI driver

   Use lspci to get the device vendor id and device id. Taking the Realtek 8169 PCIe network card as an example, the vendor id and device id are 10ec and 0000 respectively. Use the following command to mount.

   ```shell
   echo 10ec 0000 > /sys/bus/pci/drivers/vfio-pci/new_id
   ```

3. Run qemu

   ```shell
   qemu-system-aarch64 -nographic -monitor none -m 128 -machine virt,highmem=off -serial stdio -cpu host -enable-kvm  -device vfio-pci,host=0002:21:00.0 -kernel /Image -initrd /ramdisk_ok.img
   ```

   The following qemu parameter descriptions.

   ```
   qemu-system-aarch64
   ```

   QEMU binary compiled from Rockchip buildroot, placed in the bin/ directory of the host OS root filesystem.

   ```
   -m 128
   ```

   Create 128M memory space for the virtual machine.

   ```
   highmem=off
   ```

   Use the lower 32-bit address space.

   ```
   -device vfio-pci,host=0002:21:00.0
   ```

   Use the PCIe device address as a parameter to create a vfio device for virtual machine access.

   ```
   -kernel /Image -initrd /ramdisk_ok.img
   ```

   These are the guest OS kernel firmware and guest OS root filesystem firmware, placed in the root directory of the host OS root filesystem.

4. After the virtual machine starts, use the following commands to configure the PCIe network card

   ```shell
   ifconfig eth0 up

   ifconfig eth0 192.168.31.120 netmask 255.255.255.0

   route add default gw 192.168.31.1
   ```

   Configure the address and gateway according to the actual situation.

5. Use the following command to test network connectivity

   ```shell
   ping 8.8.8.8
   ```

   Under normal circumstances, ping responses should be visible.

## Remaining Issues

Inside the virtual machine, the PCIe device is set to the coherent attribute by default, so the allocated dma buffer is set to cacheable, causing data consistency issues. This needs to be manually set to non-coherent during the PCIe device probe in the virtual machine, as shown below, to avoid data consistency issues.

```c
dev->archdata.dma_coherent = false;
```
