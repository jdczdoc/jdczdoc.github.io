---
title: GPADC 开发与测试
sidebar_position: 3
description: GPADC 的接口使用、板端命令和功能验证。
---

# GPADC 开发与测试

## keypad 模式

keypad 模式会把不同电压区间映射为 Linux input key。每个按键必须配置按下电压与上报键值，按键数量、参考电压、硬件分压电阻应一起设计。

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

属性名称和单位在不同驱动版本中可能变化，合入前应对照当前驱动的 `of_property_read_*()` 调用确认。

## ADC 数据模式

ADC 模式重点确认：启用通道掩码、采样率、参考电压、比较阈值和数据读取接口。板端先查看 input/IIO/sysfs 实际暴露方式：

```bash
cat /proc/bus/input/devices | grep -A8 -i gpadc
find /sys -iname '*gpadc*' -o -iname '*adc*'
```

读取 input event：

```bash
getevent -lp
evtest /dev/input/eventX
```

若作为普通电压采集，应根据驱动实际接口读取原始码值，并用参考电压和 ADC 分辨率换算。不要把 keypad 的离散键值接口当成高精度测量接口。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
