---
title: GPIO 开发与测试
sidebar_position: 3
description: GPIO 的接口使用、板端命令和功能验证。
---

# GPIO 开发与测试

## GPIO 编号和引脚确认

不要直接从其他平台复制 GPIO 编号。先在最终设备树中确认控制器和 bank，再使用内核公开的 GPIO 描述符接口。旧式 sysfs 需要全局 GPIO 编号时，可通过控制器的 `base` 与 bank 偏移计算，但新项目优先使用 `libgpiod`。

```bash
cat /sys/kernel/debug/gpio
cat /sys/kernel/debug/pinctrl/*/pinmux-pins
cat /sys/kernel/debug/pinctrl/*/pinconf-pins
```

## 驱动中使用 GPIO

新驱动优先使用 descriptor API：

```c
struct gpio_desc *enable;

enable = devm_gpiod_get(dev, "enable", GPIOD_OUT_LOW);
if (IS_ERR(enable))
        return PTR_ERR(enable);

gpiod_set_value_cansleep(enable, 1);
```

设备树属性名 `enable-gpios` 与代码中的 `"enable"` 对应。中断可通过 `gpiod_to_irq()` 获取，再调用 `devm_request_threaded_irq()`。

## 用户空间验证

较新的根文件系统推荐：

```bash
gpioinfo
gpioget gpiochip0 14
gpioset gpiochip0 14=1
```

旧 BSP 仍提供 sysfs 时：

```bash
echo <GPIO_NUM> > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio<GPIO_NUM>/direction
echo 1 > /sys/class/gpio/gpio<GPIO_NUM>/value
```

修改完成后重新编译 kernel、反编译 DTB，并确认 pinctrl state 已进入最终产物。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
