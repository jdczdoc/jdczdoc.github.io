---
title: GPADC Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for GPADC.
---

# GPADC Development and Testing

## Keypad mode

Keypad mode maps voltage ranges to Linux input keys. Configure the pressed voltage and reported key code for each key. The resistor ladder, reference voltage, and key count must be designed together.

```dts
keyadc0 {
        key_cnt = <5>;
        key0_vol = <7>;
        key0_val = <78>;
        key1_vol = <21>;
        key1_val = <79>;
        status = "okay";
};
```

Property names and units can vary by driver version. Before applying the example, inspect the current driver's `of_property_read_*()` calls.

## ADC data mode

Confirm the channel mask, sample rate, reference voltage, compare thresholds, and the exported data interface. Inspect the actual input/IIO/sysfs interface on the target:

```bash
cat /proc/bus/input/devices | grep -A8 -i gpadc
find /sys -iname '*gpadc*' -o -iname '*adc*'
```

Read input events with:

```bash
getevent -lp
evtest /dev/input/eventX
```

For voltage acquisition, read the raw value from the interface provided by the driver and convert it using the reference voltage and ADC resolution. A keypad event interface is not a precision measurement interface.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
