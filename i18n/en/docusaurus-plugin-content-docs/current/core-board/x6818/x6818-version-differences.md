---
sidebar_position: 6
title: Version Differences
description: X6818 Core Board Version Differences
---

# Version Differences

Core BoardVersion Differences

| VersionDescription | ModifyDescription | Modification purpose |
| --- | --- | --- |
| x4418cv2 | Pin 32: GND / Pin 147: GPIOE13 | First public release |
| x4418cv3.0 \| x6818cv3.0 | 32 pins: GPIOE13 / 147 pins: GPIOC28 / Optimized wiring, and supports S5P6818 | Add a custom GPIO port. Using version 3.0 can be fully compatible with 2.0. Please pay attention to the GPIO corresponding on the software. |
| x4418cv3.2 \| x6818cv3.2 | The default RTC power supply on the Core Board is removed and changed to the baseboard power supply / the parallel port camera module power supply of the CPU is adjusted from the default 3.3V to the PMU power supply / the startup configuration resistance of the CPU is increased / 8 filter capacitors are added to the back of the Core Board for stable compatibility with 2GBMemory configuration | It can support RTC power supply through button batteries; it supports more parallel port camera modules, otherwise it will cause some cameras to overheat and turn green. In terms of hardware, be sure to supply 1.8V DC power to the RTC on the base board, otherwise the Core Board cannot start. If the GPIO port corresponding to the parallel camera is used, be sure to turn on the power supply of DLDO3 of the PMU, otherwise the GPIO port level will not be controlled. Core Board versions 2.0 and 3.0 require up to 14 startup configuration resistors on the base board. Since version 3.2, they can be omitted. |
| x4418cv3.3 \| x6818cv3.3 | 32 pins: ALIVEGPIO5 / Optimize wiring to reduce costs | Modify pin 32 from GPIOE13 to ALIVEGPIO5. ALIVEGPIO5 has the function of maintaining voltage after sleep. Customers can use this pin if they need this. Customers who have used 32-pin before can adjust it to this GPIO port through software. |
| x4418cv3.4 \| x6818cv3.4 | supports eMMC high version | Compatible with higher versions of eMMC models, the pin definition is fully compatible with x4418cv3.3\| x6818cv3.3 |
| x4418cv3.5 \| x6818cv3.5 | Gigabit Ethernet supported | Optimize Gigabit network cabling, improve Gigabit network stability, and pin definitions are fully compatible with x4418cv3.4\| x6818cv3.4 |
| x4418cv4 \| x6818cv4 | Gigabit Ethernet supported | The original Ethernet PHY chip RTL8211E is replaced by YT8511, and the pin definition is fully compatible with x4418cv3.4\| x6818cv3.4 |
