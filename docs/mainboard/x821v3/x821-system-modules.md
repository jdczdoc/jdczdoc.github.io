---
title: 常用系统模块
sidebar_position: 15
description: "V821登录、启动、串口、GPIO、网络、模拟接口和低功耗配置"
---

# 常用系统模块

## 登录与安全

- ADB权限由Tina软件包和启动脚本共同决定。
- 串口登录密码通过OpenWrt用户和`/etc/shadow`管理。
- 开发阶段可开放root登录，量产版本应关闭空密码、调试ADB和不需要的网络服务。

## BOOT0与U-Boot

BOOT0负责DRAM、存储和异构镜像加载；U-Boot负责后续内核、设备树和资源加载。修改启动链时要分别核对：

```text
sys_config.fex
boot_package*.fex
uboot-board.dts
env.cfg
sys_partition*.fex
```

## UART、GPIO和Pinctrl

设备树中的外设节点和pinctrl组必须同时启用。一个引脚只能在同一阶段分配给一个功能。遇到UART、SDC、PWM或SPI冲突时，先从原理图确认实际连接，再关闭冲突控制器。

## 网络

### EMAC

检查顺序：

```bash
ip link
ip addr
ethtool eth0
dmesg | grep -Ei 'emac|phy|mdio'
```

V821集成MAC，外部PHY配置需要时钟、复位、MDIO地址、RGMII/RMII模式和供电匹配。

### Wi-Fi

板载Wi-Fi为2.4GHz 1T1R。检查固件、NVRAM/校准数据、国家码、天线和网络管理进程。硬件手册不宣称双频能力。

## 模拟与外设

- GPADC：可用于按键分压和模拟采样。
- PWM：用于背光、LED和波形输出。
- SPI/SPI NOR：控制器与启动Flash可能共享资源，修改前确认片选和总线占用。
- TWI/I2C：用于Sensor、触摸和PMIC外设。

## 低功耗

PMC/Standby配置涉及时钟、电源域、唤醒源和RTOS协同。低功耗调试应记录：进入前状态、唤醒源、中断计数、功耗、电源轨和恢复日志。SID可提供芯片唯一ID，HWSPINLOCK用于核间资源同步。
