---
sidebar_position: 11
title: Linux 开发示例
description: iboibox3568 Linux 常用命令、proc 查询和调试入口
---

# Linux 开发示例

:::note
本页软件流程沿用前面整理的 X3568 软件文档模板。ibox3568 实际源码包名、镜像名、分区文件、工具版本和板级配置，以当前 ibox3568 SDK 和发布资料为准。
:::

本页保留常用 Linux 调试命令和开发入口，删除其他产品介绍。

## 串口终端工具

picocom：

```bash
sudo apt-get install picocom
sudo picocom -b 115200 /dev/ttyUSB0
```

退出：先按 `Ctrl+a`，再按 `Ctrl+q`。

minicom：

```bash
sudo apt-get install minicom
sudo minicom -s
```

常用设置为 `115200 8N1`，关闭硬件流控和软件流控。

## 查看串口设备

```bash
dmesg | grep ttyUSB
```

## proc 文件系统查询

### 启动环境变量

```bash
cat /proc/cmdline
```

### CPU 信息

```bash
cat /proc/cpuinfo
```

### 内存信息

```bash
cat /proc/meminfo
```

### 磁盘分区

```bash
cat /proc/partitions
```

### 内核版本

```bash
cat /proc/version
```

### 网络设备

```bash
cat /proc/net/dev
```

### 内核启动信息

```bash
dmesg
cat /proc/kmsg
```

## 磁盘分区大小查询

```bash
df -h
lsblk
```

## 调试建议

- 驱动问题优先查看 `dmesg`、设备树和对应内核驱动路径；
- 外设不工作时先确认供电、复位、时钟、I2C/SPI/UART 节点和 pinctrl；
- 烧录失败时优先确认驱动版本、工具版本、loader/maskrom 状态和 USB 线材。
