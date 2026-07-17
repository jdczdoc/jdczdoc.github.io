---
title: IR-RX Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for IR-RX.
---

# IR-RX Development and Testing

## Capture remote-control codes

```bash
getevent -lp
getevent -l /dev/input/eventX
hexdump -C /dev/input/eventX
```

Distinguish the vendor/address code, protocol scan code, and Linux keycode. The kernel rc keymap converts the protocol scan code to a Linux keycode, and Android then maps the Linux keycode through a `.kl` file.

## Android mapping path

```text
IR pulses -> IR-RX decode -> rc keymap -> Linux input keycode
          -> /vendor/usr/keylayout/*.kl -> Android KeyEvent
```

When `getevent` reports the key but the application does not react, the kernel path is usually working; inspect the `.kl` mapping, reserved system keys, and application focus.

## Wakeup validation

```bash
echo mem > /sys/power/state
# Press the remote power key
cat /sys/power/wakeup_count
cat /sys/kernel/debug/wakeup_sources | grep -i ir
```

Fake-poweroff wakeup also requires U-Boot and the kernel to use the same pin, vendor code, and power-key code.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
