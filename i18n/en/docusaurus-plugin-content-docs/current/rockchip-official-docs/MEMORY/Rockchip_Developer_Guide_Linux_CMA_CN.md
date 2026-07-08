# Rockchip Linux CMA Development Guide

ID: RK-GL-YF-117

Release Version: V1.0.0

Date: 2020-10-18

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "瑞芯微", and "瑞芯" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2020 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

This document provides a standard template for reference. Subsequent templates will be based on this document.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------ | ------------ |
| RK3399, RK3288, RK3368, RV1126 | Linux-4.4, Linux-4.19 |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:

Technical Support Engineers

Software Development Engineers

**Revision History**

| **Version** | **Author** | **Revision Date** | **Description** |
| ---------- | --------| :--------- | ------------ |
| V1.0.0    | Xu Jianqun | 2020-10-18 | Initial version |

---

**Table of Contents**

[TOC]

---

## Memory Reservation Allocation Methods

### Allocation Method 1: Reserve 16MB via menuconfig

CONFIG_DMA_CMA=y
CONFIG_CMA_SIZE_MBYTES=16
CONFIG_CMA_SIZE_SEL_MBYTES=y

### Allocation Method 2: Via dts reserved-memory Node

Refer to `Documentation/devicetree/bindings/reserved-memory/reserved-memory.txt` technical documentation

```
reserved-memory {
	#address-cells = <1>;
	#size-cells = <1>;
	ranges;

	/* global autoconfigured region for contiguous allocations */
	linux,cma {
		compatible = "shared-dma-pool";
		reusable;
		size = <0x1000000>;
		alignment = <0x2000>;
		linux,cma-default;
	};
};
```

## Memory Exclusive Allocation Methods

The above methods allocate system shared memory blocks. After multiple devices repeatedly apply for and release memory, fragmentation can occur. Some peripherals require large CMA memory blocks, and fragmentation can cause abnormal operation of these peripherals. Therefore, it is necessary to allocate dedicated memory blocks to specific devices.

### Allocation Method 1: Allocated Memory Block Exists Independently, Can Be Borrowed by the System

```
reserved-memory {
	#address-cells = <1>;
	#size-cells = <1>;
	ranges;

	cma_region: region@88000000 {
		compatible = "shared-dma-pool";
		reusable;
		reg = <0x88000000 0x1800000>;
	};
};
```

The memory block allocated using this method can be assigned to a specific device via `of_reserved_mem_device_init`.

```c
#include <linux/of_reserved_mem.h>
static inline int of_reserved_mem_device_init(struct device *dev)
{
	return of_reserved_mem_device_init_by_idx(dev, dev->of_node, 0);
}
```

### Allocation Method 2: Allocated Memory Block as memblock

```
reserved-memory {
	#address-cells = <1>;
	#size-cells = <1>;
	ranges;

	display_reserved: framebuffer@78000000 {
		reg = <0x78000000 0x800000>;
	};
};
```

The allocation result can be viewed via the `/sys/kernel/debug/memblock/reserved` node.

The memblock ranges displayed by the node are merged and organized.

Memory blocks allocated using this method do not have kernel page management. Users should create page scale lists as needed.

```
console:/sys/kernel/debug/cma # cat /sys/kernel/debug/memblock/reserved
	0: 0x60004000..0x60007fff
	1: 0x60100000..0x61404a07
	2: 0x62e00000..0x62eeffff
	3: 0x68300000..0x6830d07f
...
```

## Memory Reservation Debug Methods

### Enabling CMA_DEBUG

CONFIG_CMA_DEBUGFS=y # Enable debug file system node

CONFIG_CMA_DEBUG=y # Print CMA log information

### Viewing Debug Nodes

```
console:/sys/kernel/debug/cma # ls
cma-region@8800 cma-reserved
console:/sys/kernel/debug/cma/cma-reserved # ls
alloc    bitmap free     order_per_bit      used
base_pfn count  maxchunk
```

- alloc: Used to allocate memory from the current CMA block, unit: pages
- bitmap: Marks whether each page of the current CMA block is allocated. 1 means allocated, 0 means not allocated
- free: Used to free memory from the current CMA block, unit: pages
- order_per_bit: Indicates the order of pages represented by one BIT
- used: Number of currently allocated pages, unit: pages
- base_pfn: Page frame number of the first page in the current CMA block
- maxchunk: Maximum number of contiguous free pages in the current CMA block, unit: pages

## Boot-Time Memory Reservation Information

```
[    0.000000] Booting Linux on physical CPU 0xf00
[    0.000000] CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
[    0.000000] CPU: div instructions available: patching division code
[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache
[    0.000000] OF: fdt: Machine model: Rockchip RK3126 bnd-d708 board
[    0.000000] earlycon: uart8250 at MMIO32 0x20068000 (options '')
[    0.000000] bootconsole [uart8250] enabled
[    0.000000] Memory policy: Data cache writealloc
[    0.000000] Reserved memory: created CMA memory pool at 0x88000000, size 24 MiB
[    0.000000] OF: reserved mem: initialized node region@88000000, compatible id shared-dma-pool
[    0.000000] cma: Reserved 16 MiB at 0x9f000000
[    0.000000] On node 0 totalpages: 258560
[    0.000000] Normal zone: 1728 pages used for memmap
[    0.000000] Normal zone: 0 pages reserved
[    0.000000] Normal zone: 193024 pages, LIFO batch:63
[    0.000000] HighMem zone: 65536 pages, LIFO batch:15
[    0.000000] psci: probing for conduit method from DT.
[    0.000000] psci: PSCIv65535.65535 detected in firmware.
[    0.000000] psci: Using standard PSCI v0.2 function IDs
[    0.000000] psci: MIGRATE_INFO_TYPE not supported.
[    0.000000] psci: SMC Calling Convention v1.0
[    0.000000] percpu: Embedded 17 pages/cpu s38924 r8192 d22516 u69632
[    0.000000] pcpu-alloc: s38924 r8192 d22516 u69632 alloc=17*4096
[    0.000000] pcpu-alloc: [0] 0 [0] 1 [0] 2 [0] 3
[    0.000000] Built 1 zonelists, mobility grouping on.  Total pages: 256832
[    0.000000] Dentry cache hash table entries: 131072 (order: 7, 524288 bytes)
[    0.000000] Inode-cache hash table entries: 65536 (order: 6, 262144 bytes)
[    0.000000] mem auto-init: stack:off, heap alloc:off, heap free:off
[    0.000000] Memory: 960940K/1034240K available (11264K kernel code, 985K rwdata, 3180K rodata, 1024K init, 2104K bss, 32340K reserved, 40960K cma-reserved, 245024K highmem)
...
```

First CMA allocation success message:

```
[    0.000000] Reserved memory: created CMA memory pool at 0x88000000, size 24 MiB
[    0.000000] OF: reserved mem: initialized node region@88000000, compatible id shared-dma-pool
```

Second CMA allocation success message (system default):

```
[    0.000000] cma: Reserved 16 MiB at 0x9f000000
```
