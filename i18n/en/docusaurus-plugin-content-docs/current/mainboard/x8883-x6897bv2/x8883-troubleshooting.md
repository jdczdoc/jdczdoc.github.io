---
sidebar_position: 10
title: Troubleshooting
description: x8883bv3 Troubleshooting
---

# Troubleshooting

Check 12V/4.0V/5V/3.3V/1.8V → core-board VSYS → reset → UART logs → boot storage → peripherals, using the checklist below.

| Symptom | Checks |
| --- | --- |
| No startup / UART | Input source, rails, reset, J21 wiring and 115200 settings; capture logs |
| Flashing tool cannot detect board | Matched driver, data cable, J10, download switch; hold button before applying power |
| Build / packaging fails | Sibling ALPS/MSSI directories, dependencies, interpreters, disk space and first error |
| Black display | J17/U39/CN2 supplies, backlight, reset, LK2/kernel drivers and timing |
| No camera preview | C-PHY/D-PHY match, supplies, MCLK, I2C, reset/PWDN and driver |
| No Ethernet address | RJ45 link/LEDs, RTL8111H, PCIe/pinctrl and network settings |
| USB / TF not detected | VBUS/card supply, USB switch, current limiting, contacts and filesystem |
| Unstable under load | Adapter capacity, voltage drop, temperature, cooling and peripheral load |

Record board model/batch, the X8883BV3_20260725 schematic revision, firmware version, changed files, reproduction steps, complete UART logs and test conditions.

---

**Reference Documents**

shared-drive folder `x8883-docs` → X8883 Development Board Hardware Manual, Chapters 4–5, and X8883 Android Platform User Manual V1.0, Chapters 3–4.
