---
title: UART / RS485 Diagnostics and FAQ
sidebar_position: 4
description: Logs, debug nodes, and common-failure diagnosis for UART / RS485.
---

# UART / RS485 Diagnostics and FAQ

- No `/dev/ttySx`: inspect the controller node, driver symbol, aliases, and probe log.
- Transmit works but receive does not: inspect RX pinmux, voltage, flow control, baud rate, and ground reference.
- Data arrives in chunks: this is normal TTY/scheduler behavior; frame data using protocol length, delimiters, or timeouts instead of assuming one `read()` per frame.
- RS485 loses the first or last byte: tune direction-enable lead/lag, GPIO polarity, and the transmit-complete interrupt.
- High-baud errors: measure clock error, signal edges, cable quality, and transceiver bandwidth.

```bash
cat /proc/tty/driver/serial
cat /proc/interrupts | grep -i uart
dmesg | grep -Ei 'uart|ttyS|serial'
```
## General diagnostic order

1. Schematic and power.
2. Node and pinctrl in the final DTB.
3. Final `.config` and modules.
4. Probe, clock, reset, and IRQ logs.
5. Device node and sysfs/debugfs.
6. Minimal functional test.
7. Stress, suspend, and abnormal hot-plug tests.

Do not treat the removal of an error log as a fix. Find the first failure and validate its upstream and downstream dependencies.
