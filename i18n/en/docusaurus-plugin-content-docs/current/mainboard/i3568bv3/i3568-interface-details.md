---
sidebar_position: 3
title: Hardware Interfaces
description: i3568bv3 Hardware Interfaces
---

# Hardware Interfaces

## Power and Keys

Connect 12 V DC power. Hold POWER if the board does not start automatically. RST performs a hardware reset and VOL+ doubles as the RECOVERY download key. Verify the pin order for your revision before wiring external keys.

![12 V input](./i3568-dc-input.png)

![Onboard buttons](./i3568-buttons.png)

![External key header](./i3568-key-header.png)

## USB Host and OTG

Set the switch left to Device for Micro USB flashing and ADB. This disables USB 2.0 on the adjacent USB 3.0 port. Set it right to Host to restore USB 2.0 compatibility on that port. Two Type-A USB 2.0 ports and one PH-header USB 2.0 port are also available.

![OTG and role switch](./i3568-otg-switch.png)

![USB 2.0 Host](./i3568-usb2-host.png)

![USB 3.0 Host](./i3568-usb3-host.png)

## Display and Backlight

HDMI carries video and audio. Configure the DSI/LVDS FPC mode in firmware. The separate LVDS connector uses a GM8775C bridge, and eDP uses its own panel connector. The backlight jumpers select supplies for eDP and the backlight header. Check the panel voltage and jumper positions before connection.

![HDMI output](./i3568-hdmi.png)

![Display connectors](./i3568-display-connectors.png)

![Backlight jumper locations](./i3568-backlight-jumpers.png)

## Camera, Audio and IR

The camera uses a 30-pin MIPI CSI connector. Verify wiring, supply voltage and driver support when changing modules. The board provides headphone output, an external speaker connector and onboard recording input. Connect a compatible IR receiver to the IR header.

![MIPI CSI connector](./i3568-camera.png)

![Headphone jack](./i3568-headphone.png)

![Speaker connector](./i3568-speaker.png)

![IR header](./i3568-ir.png)

## Network, Storage and RTC

The RJ45 connector provides Gigabit Ethernet. Wi-Fi and Bluetooth use the onboard dual-band SDIO module. Use the TF card for storage. The black SATA connector carries data and the red connector supplies power. The RTC battery maintains time when main power is off.

![Gigabit Ethernet port](./i3568-ethernet.png)

![Wi-Fi/Bluetooth module](./i3568-wifi-bt.png)

![TF card socket](./i3568-tf-card.png)

![SATA data and power](./i3568-sata.png)

![RTC battery](./i3568-rtc.png)

## Debug and Expansion

UART2 is the default debug port. UART3/4/9 are additional TTL ports. Cross TX/RX, share ground and verify signal levels before wiring. The board also exposes CAN and a 1.8 V / 3.3 V / 5 V / ADC / I/O / I2C header. Check each pin against the matching schematic.

![UART2 debug connector](./i3568-debug-uart.png)

![Expansion UART connector](./i3568-uart-expansion.png)

![Expansion header](./i3568-expansion-header.png)
