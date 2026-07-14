---
sidebar_position: 9
title: Android 测试与驱动
description: X3288 Android 测试程序、驱动入口和常用 proc 查询
---

# Android 测试与驱动

本页只保留对硬件验证和驱动调试有用的内容，删除其他产品列表。

## Android测试程序

我们在x3288，x3399主板上开发了强大的安卓测试软件，基本上可以测试主板的所有硬件功能，它在产品量产，程序开发上有很大的参考价值。在APP界面点击安卓测试，即可进入测试界面，使用触摸屏左右滑动，或者用鼠标滑动可切换测试的硬件。

### 液晶屏测试

在液晶屏测试界面，点击中间的任意纯色位置，会有不同的颜色变化，我们可以观察LCD是否有丢色，坏点等。

### 触摸屏测试

在触摸屏测试界面，点击开始测试，即可在屏幕上任意手写，在批量生产时，我们通常通过画对角线测试触摸电路是否正常。

### 发光二极管测试

点击图片上任意的灯，为红色时，对应主板上的LED灯亮，为灰色时，对应LED灯灭。

### 蜂鸣器测试

按住开始测试键，蜂鸣器会鸣叫，松开开始测试键，蜂鸣器停止鸣叫。

### 背光测试

划动中间的圆圈，背光亮度会随之发生变化。

### 按键测试

按下或抬起主板上四个独立按键的任意一个，界面上将会提示对应的按键的按下和抬起动作。

### 电池测试

该界面反应了接在主板上的电池电量信息。

### 数模转换测试

监测四路ADC的电压。我们可以通过调节主板上的精密可调电位器，观察上面对应通道的电压是否变化。

### 重力传感器测试

旋转主板时，上面的X，Y，Z轴的值会随之发生变化。

### 音频测试

点击开始测试，会听到有清脆的声音出来。

### 摄像头测试

装上摄相头，点击开始测试，会看到摄像头抓到的预览界面显示出来。

### 无线网络测试

使用WIFI连上无线网络后，无线网络测试界面会搜索到附近的网络并列出来。

### 网络连接测试

当有线或无线网络正常连接时，网络连接测试界面可以浏览网页。

### 串口测试

将需要测试的串口的TXD和RXD短路，再点击开始测试，界面上会提示对应串口会自发自收0123456789。如果不能自发自收，说明对应的串口硬件有问题。

### 外部存储器测试

将TF卡插到主板上，点击开始测试，界面上会显示TF卡的相关信息。

### 优盘测试

将U盘插到主板上，点击开始测试，界面上会显示U盘的相关信息。

## android内核驱动

### G-sensor驱动

路径：kernel/drivers/input/sensors/accel/mma8452.c

hardware/rockchip/sensor/st

文件：mma8452.c及st目录

### 电容触摸屏驱动

路径：kernel/drivers/input/touchscreen/

源码：gslX680.c

### 液晶屏驱动

路径：kernel/drivers/video/rockchip/lcdc/

源码：rk3288_lcdc.c

### 按键驱动

路径：kernel/drivers/input/keyboard

源码：rk_keys.c

### WIFI/BT模块驱动

路径：kernel/drivers/net/wireless/rockchip_wlan

源码：该目录下所有源码文件

### 摄像头驱动

路径：hardware/rockchip/camera/SiliconImage/isi/drv

源码：该目录下

### VGA驱动

路径：kernel/drivers/video/rockchip

### HDMI驱动

路径：kernel/drivers/video/rockchip/hdmi

### proc文件系统

#### 启动环境变量查询

使用如下指令查询启动环境变量配置：

```bash
cat  /proc/cmdline
```

会有如下类似打印信息：

vmalloc=496M console=ttyFIQ0 androidboot.selinux=permissive androidboot.hardware=rk30board androidboot.console=ttyFIQ0 init=/init mtdparts=rk29xxnand:0x00002000@0x00002000(uboot),0x00002000@0x00004000(misc),0x00008000@0x00006000(resource),0x00008000@0x0000e000(kernel),0x00010000@0x00016000(boot),0x00010000@0x00026000(recovery),0x0001a000@0x00036000(backup),0x00040000@0x00050000(cache),0x00002000@0x00090000(kpanic),0x00300000@0x00092000(system),0x00008000@0x00392000(metadata),0x00200000@0x0039A000(userdata),0x00020000@0x0059A000(radical_update),-@0x005BA000(user) storagemedia=emmc uboot_logo=0x02000000@0x7dc00000:0x01000000 loader.timestamp=2016-02-19_17:53:13 androidboot.mode=emmc

#### CPU信息查询

使用如下指令查询CPU信息：

```bash
cat  /proc/cpuinfo
```

会有如下类似打印信息：

shell@rk3288:/ # cat /proc/cpuinfo

Processor : ARMv7 Processor rev 1 (v7l)

processor : 0

model name : ARMv7 Processor rev 1 (v7l)

BogoMIPS : 48.00

Features : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm

CPU implementer : 0x41

CPU architecture: 7

CPU variant : 0x0

CPU part : 0xc0d

CPU revision : 1

processor : 1

model name : ARMv7 Processor rev 1 (v7l)

BogoMIPS : 48.00

Features : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm

CPU implementer : 0x41

CPU architecture: 7

CPU variant : 0x0

CPU part : 0xc0d

CPU revision : 1

processor : 2

model name : ARMv7 Processor rev 1 (v7l)

BogoMIPS : 48.00

Features : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm

CPU implementer : 0x41

CPU architecture: 7

CPU variant : 0x0

CPU part : 0xc0d

CPU revision : 1

processor : 3

model name : ARMv7 Processor rev 1 (v7l)

BogoMIPS : 48.00

Features : swp half thumb fastmult vfp edsp neon vfpv3 tls vfpv4 idiva idivt vfpd32 evtstrm

CPU implementer : 0x41

CPU architecture: 7

CPU variant : 0x0

CPU part : 0xc0d

CPU revision : 1

Hardware : Rockchip RK3288 (Flattened Device Tree)

Revision : 0000

Serial : e3d650362e219fe2

#### 内存信息查询

使用如下指令查询内存使用信息：

```bash
cat  /proc/meminfo
```

会有如下类似打印信息：

shell@rk3288:/ # cat /proc/meminfo

MemTotal: 2062080 kB

MemFree: 1573408 kB

Buffers: 11140 kB

Cached: 206416 kB

SwapCached: 0 kB

Active: 165880 kB

Inactive: 156828 kB

Active(anon): 105176 kB

Inactive(anon): 268 kB

Active(file): 60704 kB

Inactive(file): 156560 kB

Unevictable: 0 kB

Mlocked: 0 kB

HighTotal: 1540096 kB

HighFree: 1141180 kB

LowTotal: 521984 kB

LowFree: 432228 kB

SwapTotal: 0 kB

SwapFree: 0 kB

Dirty: 0 kB

Writeback: 0 kB

AnonPages: 105152 kB

Mapped: 58948 kB

Shmem: 308 kB

Slab: 24800 kB

SReclaimable: 12056 kB

SUnreclaim: 12744 kB

KernelStack: 4160 kB

PageTables: 5844 kB

NFS_Unstable: 0 kB

Bounce: 0 kB

WritebackTmp: 0 kB

CommitLimit: 1031040 kB

Committed_AS: 19085052 kB

VmallocTotal: 499712 kB

VmallocUsed: 45004 kB

VmallocChunk: 361448 kB

#### 磁盘分区信息查询

使用如下命令查询磁盘分区信息：

```bash
cat  /proc/partitions
```

会有如下类似打印信息：

shell@rk3288:/ # cat /proc/partitions

major minor #blocks name

254 0 520912 zram0

179 0 15267840 mmcblk0

179 1 4096 mmcblk0p1

179 2 4096 mmcblk0p2

179 3 16384 mmcblk0p3

179 4 16384 mmcblk0p4

179 5 32768 mmcblk0p5

179 6 32768 mmcblk0p6

179 7 53248 mmcblk0p7

179 8 131072 mmcblk0p8

179 9 4096 mmcblk0p9

179 10 1572864 mmcblk0p10

179 11 16384 mmcblk0p11

179 12 1048576 mmcblk0p12

179 13 65536 mmcblk0p13

179 14 12261376 mmcblk0p14

#### 内核版本查询

使用如下命令查询内核版本：

```bash
cat  /proc/version
```

会有如下类似打印信息：

shell@rk3288:/ # cat /proc/version

Linux version 3.10.0 (lqm@lqm) (gcc version 4.6.x-google 20120106 (prerelease) (GCC) ) #42 SMP PREEMPT Fri May 27 11:50:10 CST 2016

#### 网络设备查询

使用如下命令查询网络设备信息：

```bash
cat  /proc/net/dev
```

会有如下类似打印信息：

shell@rk3288:/ # cat /proc/net/dev

Inter-\| Receive \| Transmit

face \|bytes packets errs drop fifo frame compressed multicast\|bytes packets errs drop fifo colls carrier compressed

sit0: 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0

lo: 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0

eth0: 0 0 0 0 0 0 0 0 992 6 0 0 0 0 0 0

#### 查看内核启动信息

使用如下命令查询内核启动信息：
