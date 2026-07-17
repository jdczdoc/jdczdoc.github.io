---
title: GPIO Development and Testing
sidebar_position: 3
description: Interfaces, target commands, and functional validation for GPIO.
---

# GPIO Development and Testing

## Pin identification and GPIO numbering

Do not copy a global GPIO number from another SoC. Confirm the controller and bank in the final Device Tree first, then use the descriptor-based GPIO API. When an old sysfs workflow requires a global number, derive it from the controller base and bank offset. Prefer `libgpiod` for new designs.

```bash
cat /sys/kernel/debug/gpio
cat /sys/kernel/debug/pinctrl/*/pinmux-pins
cat /sys/kernel/debug/pinctrl/*/pinconf-pins
```

## Using GPIO in a driver

Prefer the descriptor API:

```c
struct gpio_desc *enable;

enable = devm_gpiod_get(dev, "enable", GPIOD_OUT_LOW);
if (IS_ERR(enable))
        return PTR_ERR(enable);

gpiod_set_value_cansleep(enable, 1);
```

The Device Tree property `enable-gpios` maps to the consumer name `"enable"`. Convert a GPIO to an IRQ with `gpiod_to_irq()` and request it with `devm_request_threaded_irq()`.

## Userspace validation

Use `libgpiod` on recent root filesystems:

```bash
gpioinfo
gpioget gpiochip0 14
gpioset gpiochip0 14=1
```

For an older BSP that still exposes sysfs:

```bash
echo <GPIO_NUM> > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio<GPIO_NUM>/direction
echo 1 > /sys/class/gpio/gpio<GPIO_NUM>/value
```

Rebuild the kernel, decompile the DTB, and confirm that the intended pinctrl state is present in the final image.
## Common build and flash workflow

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

After flashing, confirm the kernel/DTB build timestamp and version so that new changes are not evaluated on an old image.
