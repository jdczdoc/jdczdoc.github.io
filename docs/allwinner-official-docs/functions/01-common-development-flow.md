---
title: 基础功能开发流程
sidebar_position: 1
description: UART、I2C、SPI、GPIO、显示、音频和摄像头文档统一使用的开发与验证流程。
---

# 基础功能开发流程

后续每个基础功能都按照本页流程整理，从设备树、内核配置一直到板端命令，避免只给出零散的 DTS 片段或测试命令。文档以 T527 为主要示例，但流程同样适用于其他采用 Longan 和 BSP 独立仓库的全志平台。

## 标准流程

```text
确认硬件原理图和引脚
    ↓
确认控制器编号与复用功能
    ↓
查找BSP驱动和compatible
    ↓
修改SoC或板级设备树
    ↓
打开menuconfig并保存defconfig
    ↓
单独编译kernel
    ↓
反编译DTB确认配置进入产物
    ↓
重新打包并烧录
    ↓
板端检查probe、设备节点和功能
```

## 1. 硬件信息

每篇文档先列出：

- 接口名称和控制器编号。
- 使用的 GPIO bank 与 pin。
- 电压域和供电。
- 中断、复位、使能脚。
- 外接芯片型号和总线地址。

没有硬件信息时，不直接给出最终 DTS 参数。

## 2. 驱动源码

查找：

```bash
cd <ANDROID_TOP>/longan

grep -Rni '<compatible或CONFIG宏>' bsp kernel device
find bsp kernel -type f -iname '*<功能关键字>*'
```

记录：

```text
驱动目录：
驱动文件：
Kconfig：
Makefile：
compatible：
```

## 3. 设备树

记录：

```text
SoC dtsi：
板级 board.dts：
pinctrl 节点：
设备节点：
关键属性：
```

优先在板级通过 label 覆盖：

```dts
&controller {
        pinctrl-names = "default";
        pinctrl-0 = <&controller_pins>;
        status = "okay";
};
```

## 4. Kernel配置

```bash
cd <ANDROID_TOP>/longan
./build.sh menuconfig
./build.sh saveconfig
```

文档中必须给出：

```text
menuconfig路径：
CONFIG宏：
建议值：y或m
依赖项：
```

## 5. 编译

```bash
./build.sh kernel 2>&1 | tee /tmp/<功能>-kernel-build.log
```

确认编译产物：

```bash
grep -i '<驱动或模块>' /tmp/<功能>-kernel-build.log
find out -type f -name '<模块>.ko' -print
```

## 6. DTB验证

```bash
dtc -I dtb -O dts -o /tmp/final.dts <DTB路径>
grep -n -A20 -B5 '<节点名>' /tmp/final.dts
```

## 7. 打包与烧录

Android 13 常见流程：

```bash
cd <ANDROID_TOP>
source build/envsetup.sh
lunch <PRODUCT>-userdebug
pack
```

项目若提供 `build -p` 或 Longan pack hook，以当前脚本为准。

## 8. 板端验证

每篇文档至少给出三类命令：

```bash
# 驱动日志
adb shell dmesg | grep -i '<关键字>'

# 设备节点或sysfs
adb shell ls -l <设备节点或sysfs路径>

# 实际功能测试
adb shell '<具体操作命令>'
```

## 9. 常见问题

固定检查：

- 节点是否 `status = "okay"`。
- pinctrl 是否使用了正确复用功能。
- 电源和复位时序是否正确。
- `CONFIG_` 宏是否进入最终 `.config`。
- 驱动是否内建或生成 `.ko`。
- DTB 是否为本次编译并已进入固件。
- 设备是否被其他驱动占用。
- Android HAL、权限或 SELinux 是否阻止上层使用。

## 后续文档命名

建议文件名：

```text
functions/uart.md
functions/rs485.md
functions/i2c.md
functions/spi.md
functions/gpio.md
functions/pwm.md
functions/usb.md
functions/ethernet.md
functions/lvds.md
functions/mipi-dsi.md
functions/hdmi.md
functions/audio.md
functions/camera.md
functions/watchdog.md
```

每新增一篇，设置不同的 `sidebar_position`，无需修改 `sidebars.ts`。

## 已整理模块

- [GPIO](./gpio/01-overview.md)
- [GPADC](./gpadc/01-overview.md)
- [LRADC](./lradc/01-overview.md)
- [TWI / I2C](./twi/01-overview.md)
- [SPI-NG](./spi-ng/01-overview.md)
- [UART / RS485](./uart/01-overview.md)
- [IR-RX 红外接收](./ir-rx/01-overview.md)
- [RTC](./rtc/01-overview.md)
- [USB 2.0](./usb2/01-overview.md)
- [USB 3.0](./usb3/01-overview.md)
- [PCIe](./pcie/01-overview.md)
