---
title: LRADC 开发与测试
sidebar_position: 3
description: LRADC 的接口使用、板端命令和功能验证。
---

# LRADC 开发与测试

## 电压边界设计

LRADC 常见参考电压为 1350 mV，6 位 ADC 时单个码步约为 `1350 / 64 ≈ 21 mV`。按键电压不要紧挨边界，必须为电阻误差、噪声和参考电压波动预留余量。

推荐流程：

1. 根据电阻网络计算每个按键的理论电压。
2. 在实板上测量每个按键的最小值、典型值、最大值。
3. 使用相邻按键实测区间中点作为判定边界。
4. 确认无按键状态不会落入任何有效区间。

## 板端确认

```bash
cat /proc/bus/input/devices | grep -A10 -i lradc
getevent -lp
evtest /dev/input/eventX
cat /proc/interrupts | grep -i lradc
```

用户层只需要按键时，应读取 input 事件，而不是轮询寄存器。驱动层会完成采样、滤波和键值上报。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
