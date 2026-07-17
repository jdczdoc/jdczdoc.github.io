---
title: 设备树配置
sidebar_position: 6
description: T527 SoC级与板级设备树位置、覆盖关系、修改方法和编译验证。
---

# 设备树配置

Device Tree 用于描述 CPU、总线、外设、寄存器、中断、GPIO、时钟和复位等硬件信息。Bootloader 将 DTB 传给 Linux 内核，内核再据此创建 platform、I2C、SPI 等设备。

## T527设备树组成

Linux 5.15 + BSP 独立仓库常见关系如下：

```text
SoC公共dtsi
    ↓
平台或控制器dtsi
    ↓
板级board.dts
    ↓
DTC编译为DTB
    ↓
Bootloader传给Kernel
```

T527 常见 SoC 代号为 `sun55iw3p1`，SoC 级配置常见路径为：

```text
longan/bsp/configs/linux-5.15/sun55iw3p1.dtsi
```

板级配置常见于以下两种结构之一：

```text
longan/device/config/chips/t527/configs/<BOARD>/board.dts
longan/device/config/chips/t527/configs/<BOARD>/linux-5.15/board.dts
```

先查询真实路径：

```bash
cd <ANDROID_TOP>/longan

find bsp/configs/linux-5.15 device/config/chips/t527 \
    -type f \( -name '*.dts' -o -name '*.dtsi' \) \
    -print | sort
```

## 修改原则

- SoC 所有板型都需要的通用配置修改在 `bsp/configs/linux-5.15/`。
- 只有当前硬件板需要的 GPIO、pinctrl、供电、外设启用和屏参修改在板级 `board.dts`。
- 优先在板级通过 `&label` 覆盖公共节点，避免复制整个 SoC 节点。

## 常见节点写法

```dts
&uart7 {
        pinctrl-names = "default", "sleep";
        pinctrl-0 = <&uart7_pins_a>;
        pinctrl-1 = <&uart7_pins_sleep>;
        status = "okay";
};
```

常见属性含义：

| 属性 | 作用 |
|---|---|
| `compatible` | 驱动匹配字符串 |
| `reg` | 寄存器地址和范围 |
| `interrupts` | 中断配置 |
| `clocks` | 使用的时钟 |
| `resets` | 复位控制 |
| `pinctrl-0` | 默认引脚状态 |
| `*-supply` | 电源 regulator 引用 |
| `status = "okay"` | 启用节点 |
| `status = "disabled"` | 禁用节点 |

## 查找节点和引用

```bash
# 查找节点定义和板级覆盖
grep -Rni "uart7" bsp/configs/linux-5.15 device/config/chips/t527

# 查找标签
grep -Rni "uart7:" bsp/configs/linux-5.15 device/config/chips/t527

# 查找 compatible 对应的驱动
grep -Rni 'compatible.*sunxi.*uart' bsp/drivers kernel/linux-5.15
```

## 检查DTS语法

常见问题包括：

- 花括号或分号缺失。
- label 不存在。
- GPIO 宏或 pinctrl label 拼写错误。
- 属性中混入非 ASCII 连字符。
- 同级节点重复定义。

编译前可检查不可见字符：

```bash
LC_ALL=C grep -RInP '[^\x00-\x7F]' \
    device/config/chips/t527/configs/<BOARD> \
    bsp/configs/linux-5.15
```

中文注释会被列出，重点检查属性名中是否出现全角符号或特殊连字符。

## 编译设备树

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
```

查找生成的 DTB：

```bash
find out -type f -name '*.dtb' -print
```

## 反编译验证

不要只确认源码已修改，应反编译实际打包使用的 DTB：

```bash
dtc -I dtb -O dts \
    -o /tmp/t527-final.dts \
    <实际生成的DTB路径>

grep -n -A20 -B5 "uart7" /tmp/t527-final.dts
```

## 板端验证运行时设备树

```bash
adb root
adb shell

cat /proc/device-tree/model 2>/dev/null
find /proc/device-tree -maxdepth 4 -type f 2>/dev/null | head
```

字符串属性末尾通常带 `\0`，可以使用：

```bash
tr -d '\000' < /proc/device-tree/<节点路径>/status
```

确认源码、编译 DTB 和运行时 Device Tree 三者一致后，再继续检查驱动 probe。
