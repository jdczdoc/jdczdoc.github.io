---
sidebar_position: 22
title: Linux 驱动与项目实战
description: x881 Linux 驱动与项目实战
---

# Linux 驱动与项目实战

## 驱动集成

```text
bsp/drivers/vendor/mydevice/
  Kconfig
  Makefile
  mydevice.c
```

在上级 Kconfig/Makefile 引入新目录，选择内建或模块。使用设备树 compatible 与 of_match_table 匹配，在 probe 中获取寄存器、中断、时钟、复位、GPIO 和 regulator。资源地址、引脚和中断号来自实际硬件资料。

```make
obj-$(CONFIG_MYDEVICE) += mydevice.o
```

## 调试与应用接口

正式应用使用 `/dev` 的 read/write/ioctl/poll 或驱动约定的 sysfs 接口；debugfs 用于开发调试。先验证驱动绑定、资源申请和中断，再进行应用联调。

```bash
dmesg | tail -n 100
ls -l /dev
cat /proc/interrupts
ls /sys/kernel/debug
```

## 守护进程与部署

业务进程通过 `/proc/stat`、`/proc/meminfo`、`/proc/uptime` 和 thermal 节点监控系统。实现日志轮转、信号退出、配置校验和异常恢复，再以 Tina package 安装程序和 init 脚本。

对 AI 眼镜项目，分阶段验证摄像头拍照、MIC 录音、JL7018 唤醒、网络传输、屏幕显示及电池休眠电流，保存固件版本和测试配置，避免同时修改多个链路导致问题难以定位。
