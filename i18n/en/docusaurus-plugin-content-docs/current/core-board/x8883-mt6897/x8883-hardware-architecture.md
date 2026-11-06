---
sidebar_position: 2
title: Hardware Architecture
description: X8883CV1 Hardware Architecture
---

# Hardware Architecture

## Power Architecture

The main board input is VSYS at 4 V; VSYS_S senses the 4 V system supply. MT6375 and the onboard PMIC/buck devices manage power. VIO18_PMU and VIO28_PMU are intended for low-current uses such as pull-ups, and VMCH_PMU serves the SD card. Do not use these outputs as high-current carrier supplies. Provide suitable carrier power for backlights, cameras, USB VBUS and codecs.

| Rail | Typical Value | Direction | Purpose | Consideration |
| --- | --- | --- | --- | --- |
| VSYS | 4 V | Carrier → core board | Main supply | Manual requests 3 A headroom for peak current |
| VIO18/VIO28_PMU | 1.8 V / 2.8 V | Core board → carrier | I/O / analog | Low current |
| VMCH_PMU | 3.3 V | Core board → carrier | SD card supply | Low noise |
| VSYS_S | 4 V | Carrier → core board | Voltage sensing | Low noise |

The overview describes VBUS 5 V / VBAT as adapter and battery supply paths. This does not establish a 5 V input rating for VSYS; verify the actual carrier power circuit.

## Power-up and Power-down

According to the hardware chapter, the PMIC manages internal sequencing after stable VSYS and VSYS_S are applied, without an additional button for normal startup. Prevent peripheral back-powering through I/O before startup; remove VSYS and VSYS_S at shutdown. PWRKEY, SYSRSTB and BOOT signals are also listed, so retain the debug/download controls required by the schematic.

## Debug and Download

UART0 uses pin 140 UTXD0 and pin 141 URXD0 in the 1.8 V I/O domain. The carrier debug-header example is a 4-pin, 1.25 mm-pitch header with GND/RX/TX/3V3. This does not make the SoC UART a 3.3 V interface. Check carrier level shifting and silkscreen before connecting, and cross TX/RX.

The hardware chapter states 921600-8-N-1, while the low-speed resource table states 115200-8-N-1; use the setting required by the firmware. The source describes USB download using the grounded switch position and BOOT key with Type-C at power-up. Follow the flashing instructions supplied with the firmware. If no logs appear, check VSYS, VSYS_S, KPCOL0 (BOOT), boot storage and UART levels in that order.
