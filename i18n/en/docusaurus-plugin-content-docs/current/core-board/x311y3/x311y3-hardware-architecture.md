---
sidebar_position: 2
title: Hardware architecture and power sequencing
description: X311Y3CV1 Hardware architecture and power sequencing
---

# Hardware architecture and power sequencing

## 2.1 Power architecture

The board uses 12 V input and onboard discrete DC/DC converters, without a PMIC. The carrier board supplies 12V_STANDBY, 12V_CORE, VDD3V3_AO, VDD1V8_AO, AVDD1V8, AVDD3V1 and the required `VDDIO_*` I/O/analog supplies. Onboard converters power internal SoC, LPDDR5X and eMMC loads only; they do not power the carrier board.

:::caution

Treat the power pins in Table 2-3 as inputs, references or decoupling connections. Do not use VDD3V3_AO, VDD1V8_AO, `AVDD*` or `VDDIO*` to power carrier board peripherals. Generate separate supplies on the carrier board for display backlights, cameras, USB VBUS, PCIe, SD cards and codecs.

:::

**Table 2-3 Main supply domains**

| Supply domain | Nominal value | Source / direction | Main loads | Design notes |
| --- | --- | --- | --- | --- |
| 12V_STANDBY | 12V | Carrier board → core board | Always-on domain and onboard standby DC/DC | Establish first; allow 3 A headroom over peak current |
| 12V_CORE | 12V | Carrier board → core board | CPU/GPU/NPU/DDR core DC/DC supplies | Establish afterward; both CORE and STANDBY must meet requirements |
| VDD3V3_AO | 3.3V | Carrier board → core board | AO/I/O references and interface levels | Low ripple; must not power carrier board peripherals |
| VDD1V8_AO | 1.8V | Carrier board → core board | AO/I/O references and interface levels | Low ripple; must not power carrier board peripherals |
| AVDD1V8/AVDD18_* | 1.8V | Carrier board → core board | CSI/DSI/USB/PCIe/HDMI eARC analog I/O | Low noise; decouple near each interface |
| AVDD3V1/AVDD3V_* | 3.1V | Carrier board → core board | HDMI TX/RX and USB CC analog circuits | Low noise; ESD protection at HDMI connector |
| VDDIO_3V3 | 3.3V | Carrier board → core board | GPIO/I2C/UART and other 3.3 V I/O | Match carrier board peripheral levels |
| VDDIO_A/B/C/D/H/M/X/Y/Z | A/H/Y/D3.1V；B/M/X/Z1.8V；C3.3V | Core board LDO/PMOS | Interface I/O supply domains | Configure per domain; do not mix domains; A/Y optionally support 1.8 V |

## 2.2 Power sequencing

Power-up follows this order: establish 12 V, establish I/O and analog supplies, then release reset. This section covers external core board signals rather than internal DC/DC soft-start details. Use Power Sequence on schematic Sheet 2 for the electrical timing requirements.

Power-up: (1) establish and stabilize 12V_STANDBY; (2) establish 12V_CORE; (3) establish VDD3V3_AO, VDD1V8_AO, AVDD1V8, AVDD3V1 and the required `VDDIO_*` supplies on the carrier board.

:::caution

Power-down reverses the sequence: assert RESET_N low, disable PWR_CTL1/2 and carrier board DC/DC supplies, then switch off 12V_CORE and 12V_STANDBY. Provide discharge paths or reverse-current protection for bulk capacitors and external 3.3 V/1.8 V supplies to prevent I/O back-powering. PWR_CTL1/2 are logic control signals, not power outputs, and must not supply carrier board loads.

:::

**Table 2-4 Power and sequencing pins**

| Pin identifier | Signal | Direction | Sequencing / design notes |
| --- | --- | --- | --- |
| A92 | VCC_VIN_STANDBY | Input | 12 V always-on input; establish first |
| A93/A94/A95/A96 | VCC_VIN | Input | 12 V core input; establish afterward |
| A33/A34 | VDD3V3_AO | Input | 3.3 V AO/I/O from carrier board |
| A97/A6 | VDD1V8_AO | Input | 1.8 V AO/I/O from carrier board |
| A98 | AVDD1V8 | Input | Analog 1.8 V from carrier board |
| B25 | AVDD3V1 | Input | HDMI/USB 3.1 V from carrier board |
| A37 | VDDIO_3V3 | Input | 3.3 V I/O from carrier board |
| A208 | RESET_N | Input | Active low; release after all supplies stabilize, ≥40 ms |
| A11 | PWR_KEY | Input | Power-on/wake, active low |
| A8 | PWR_CTL2 | Output | Carrier DC/DC enable; logic signal only |
| A100~A104 | PMIC_GPIO* | NC | No PMIC; unconnected |

## 2.3 Debug interface

One 3.3 V debug UART (UART0) provides U-Boot, kernel and filesystem logs. A 4-pin 2.54 mm header or 1.25 mm connector is recommended, ordered 3V3, TX, RX, GND. Use a USB-to-TTL adapter on the PC and cross TX and RX.

The usual debug setting is 115200-8-N-1; use the firmware configuration as the authority. If there is no output, check 12 V, 3.3 V/1.8 V, RESET_N, clocks, boot media and UART voltage levels in that order. Use Type-C OTG and the BOOT button to enter download mode.
