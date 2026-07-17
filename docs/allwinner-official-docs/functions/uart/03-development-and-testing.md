---
title: UART / RS485 开发与测试
sidebar_position: 3
description: UART / RS485 的接口使用、板端命令和功能验证。
---

# UART / RS485 开发与测试

## 确认驱动版本

```bash
grep -Rni 'CONFIG_AW_UART_NG\|CONFIG_AW_UART=' device bsp
grep -Rni 'compatible = "allwinner,.*uart' bsp/configs device/config
dmesg | grep -i uart
```

两套驱动的 DTS 属性和调试节点并不完全一致，不能混用。

## 串口参数与回环

```bash
stty -F /dev/ttyS7 115200 cs8 -cstopb -parenb -ixon -ixoff raw -echo
cat /dev/ttyS7 &
echo 'uart-test' > /dev/ttyS7
```

硬件回环时短接 TX/RX。RS485 需要外接收发器，并验证 DE/RE 方向切换时序。

## 特殊波特率

普通波特率优先由 serial core 计算分频。目标波特率误差超出容许范围时，才调整 UART APB 时钟源和频点。修改前应计算：

```text
实际波特率 = UART输入时钟 / (过采样倍数 × 分频值)
误差 = |实际值 - 目标值| / 目标值
```

控制台波特率还要同步修改 U-Boot `baudrate`、Kernel `console=ttySx,baud` 以及用户空间串口设置，否则会出现某一阶段乱码。
## 统一编译与烧录流程

```bash
cd <ANDROID_TOP>/longan
./build.sh kernel
./build.sh pack
```

烧录后先核对本次 kernel/DTB 的构建时间和版本，避免在旧固件上判断新配置。
