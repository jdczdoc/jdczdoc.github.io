# RK818/816 Fuel Gauge Print Information Description

Release Version: 1.0

Author Email: chenjh@rock-chips.com

Date: 2018.05.28

Security Level: Public

---

**Preface**

**Overview**

RK818/RK816 provide built-in fuel gauge and charge functionality, i.e., battery capacity detection and battery charging management. The two chips implement these functions very similarly. This document uses RK818 as an example to introduce important information printed by the driver at various stages. The print information for RK816 is similar and can be referenced directly, without a separate document.

**Product Versions**

| **Chip Name** | **Kernel Version** |
| ------------- | :----------------- |
| RK818, RK816  | Linux 4.4          |

**Intended Audience**

This document (guide) is mainly applicable to the following engineers:
Technical support engineers
Software development engineers

**Revision History**

| **Date**     | **Version** | **Author**     | **Description**  |
| ------------ | ----------- | -------------- | ---------------- |
| 2018.05.28   | V1.0        | Chen Jianhong  | Initial version  |

---

[TOC]

---

## Charger/OTG Detection

### Driver Files

```c
drivers/power/rk818_charger.c
```

This driver mainly implements charger/OTG plug-in/out event detection and charging current configuration. Print information uses "rk818-charger: " as a prefix for easy identification. "ac", "usb", "dc", "otg" in the prints represent different devices; 1 indicates connected, 0 indicates disconnected. Note: The PMIC itself cannot detect charger/OTG plug-in/out events; charger type detection relies on USB notification chain messages.

### Probe Phase

DC charger registration status:

```c
rk818-charger: support dc
rk818-charger: not support dc
```

Register type-c port charger notification chain:

```c
rk818-charger: register typec extcon evt notifier
```

Register traditional usb port charger notification chain:

```c
rk818-charger: register bc evt notifier
```

Device connection status at the end of probe:

```c
rk818-charger: ac=1, usb=0, dc=0, otg=0
```

Driver version number:

```c
rk818-charger: driver version: 2.0
```

### Running Phase

Charger/OTG device plug-in/out events from USB notification chain:

```c
rk818-charger: receive bc notifier event: DISCNT	// Charger unplugged
rk818-charger: receive bc notifier event: USB		// Computer charger plugged in
rk818-charger: receive bc notifier event: AC		// Standard charger plugged in
rk818-charger: receive bc notifier event: CDP1.5A	// CDP type charger plugged in
rk818-charger: receive bc notifier event: UNKNOWN	// Unrecognized charger plugged in
rk818-charger: receive bc notifier event: OTG ON	// OTG plugged in
rk818-charger: receive bc notifier event: OTG OFF	// OTG unplugged
rk818-charger: detect dc charger in					// DC plugged in
rk818-charger: detect dc charger out				// DC unplugged
```

The PMIC itself cannot determine the charger type but can detect whether a charging device is plugged in:

```c
rk818-charger: pmic: plug out
rk818-charger: pmic: plug in
```

5V power supply changes when plugging/unplugging OTG:

```c
rk818-charger: disable otg5v
rk818-charger: enable otg5v
```

After each charger/OTG plug-in/out, device and current information is updated:

```c
rk818-charger: ac=1 usb=0 dc=0 otg=0 v=4200 chrg=1000 input=1800 virt=0
```

### Suspend Phase

5V power supply changes for OTG during suspend:

```c
rk818-charger: suspend: otg 5v on
rk818-charger: suspend: otg 5v off
```

### Shutdown Phase

Connection status of each device at shutdown:

```c
rk818-charger: shutdown: ac=1 usb=0 dc=0 otg=0
```

## Battery Capacity Detection

### Driver Files

```c
drivers/power/rk818_battery.c
drivers/power/rk818_battery.h
```

This driver mainly implements fuel gauge functionality, providing a set of drivers for battery capacity information statistics. Print information uses "rk818-bat: " as a prefix for easy identification.

### Probe Phase

When powering on for the first time with a battery connected, there is a "first on" prompt:

```c
rk818-bat: first on: dsoc=24, rsoc=24 cap=960, fcc=4000, ov=3840
```

When abnormal shutdown (e.g., continuous power drain after crash) causes coulomb counter anomalies, a forced coulomb counter calibration is performed at next boot:

```c
rk818-bat: system halt last time... cap: pre=2400, now=120
```

When U-Boot has already initialized the fuel gauge, the kernel fuel gauge driver can skip part of the initialization to prevent duplicate initialization:

```c
rk818-bat: initialized yet..
```

Coulomb counter initial state during probe:

```c
rk818-bat: dsoc=32 cap=1000 v=3780 ov=3900 rv=3890 min=25 psoc=32 pcap=1000
```

Fuel gauge version number:

```c
rk818-bat: driver version 7.1
```

### Running Phase

When the battery level changes, the driver reports to the framework with the following prints. The first line shows real-time parameter status; the second line shows parameter states at boot initialization, mainly for debugging:

```c
rk818-bat: changed: dsoc=22, rsoc=24, v=3820, ov=3770 c=1018, cap=960, f=4000, st=cc cv, hotdie=0
rk818-bat: dl=10, rl=12, v=3670, halt=0, halt_n=0, max=0, init=0, sw=0, calib=0, below0=0, force=0
```

### Suspend Phase

After entering deep sleep, if prolonged standby causes the battery voltage to drop below the shutdown threshold, a PMIC wake-up interrupt is generated, followed by shutdown:

```c
rk818-bat: lower power yet, power off system! v=3350, c=-125, dsoc=0
```

### Shutdown Phase

Relevant important information is displayed during shutdown:

```c
rk818-bat: shutdown: dl=0 rl=2 c=-1220 v=3460 cap=88 f=4000 ch=1 n=0 mode=1 rest=128
Print meaning: <display soc> <real soc> <current> <voltage> <remaining capacity> <full charge capacity> <has charger> <others ignored...>
```

## About RK816 Fuel Gauge

The fuel gauge implementation of RK816 is essentially similar to RK818. Both the charger detection and fuel gauge changes are unified in:

```c
drivers/power/rk816_battery.c
```

The print information content is very similar to RK818, with print information prefixed by "rk816-bat:" for easy identification. Therefore, for the RK816 part, please refer to the RK818 description above.
