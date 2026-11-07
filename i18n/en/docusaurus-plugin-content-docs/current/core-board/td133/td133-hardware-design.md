---
sidebar_position: 4
title: "Hardware Design and Debugging"
description: "td133 Hardware Design and Debugging"
---

# Hardware Design and Debugging

## Power and Control Signals

| Interface | Pins | Description |
| --- | --- | --- |
| PS | 149–151 | Main supply input, 5 V / 2 A |
| ACIN | 152–153 | 5 V supply input |
| VBUS | 142 | 5 V input |
| VBAT | 154–155 | Single-cell battery input, specified at 4.2 V in the manual |
| DCDCE/VCC3V3 / ALDO3 | 5–6 | 3.3 V power outputs |
| BLDO4/DVDD-CSI / AVDD-CSI / VCC-CSI | 9–11 | Camera power outputs. See the pin definitions for voltages |
| AVCC | 145 | 1.8 V / 0.5 A output |
| PWRON | 2 | Active-low power-on |
| RESET | 3 | Active-low reset |
| FEL | 4 | Active-low flashing mode entry |

After the input supply stabilizes, the AXP707 brings up the onboard rails. Trigger PWRON as required by the carrier and release RESET once the rails are stable. Pins 7 and 8 are listed as 1.8 V GPIO in the pin and system control tables. Check the schematic for the board revision before assigning those pads in a power design.

## I/O Levels

| Domain | I/O Level |
| --- | --- |
| PC | 1.8 V |
| PD | 3.3 V |
| LVDS | 1.8 V |
| PE | 1.8 V |
| PG | 3.3 V |
| PL | 3.3 V |

Check the selected interface mode and the level of each pad when connecting a peripheral. Use the 1.8 V domain for pins assigned to LVDS.

## Carrier Layout

| Signal | Target Impedance | Type |
| --- | --- | --- |
| USB 2.0 | 90 Ω ±10% | Differential |
| MIPI DSI / CSI | 100 Ω ±10% | Differential |
| LVDS | 100 Ω | Differential |
| SDC0 | 50 Ω | CLK, CMD and DATA |

Match the two traces in each high-speed differential pair and route them over a continuous reference plane. Place ground return vias near signal vias at layer changes. Verify single-ended RGMII impedance and timing against the PHY and PCB stackup. Provide ESD protection for exposed interfaces.

## Debug UART

The default debug interface is UART0. Pin 110 is RX and pin 111 is TX, at 3.3 V logic levels. Use a 3.3 V USB-to-TTL adapter. Cross TX and RX between the adapter and module and connect their grounds. Set the terminal to **115200 baud, 8 data bits, no parity and 1 stop bit**.
