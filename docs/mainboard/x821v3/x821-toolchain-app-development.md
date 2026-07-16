---
title: 工具链与应用开发
sidebar_position: 10
description: "V821 RISC-V工具链、Gitea管理、Tina软件包和开机自启"
---

# 工具链与应用开发

## RISC-V CPU工具链

SDK的Linux用户态工具链通常位于`prebuilt/rootfsbuilt`，实际前缀由lunch方案和musl/glibc配置决定。先查询：

```bash
which gcc
find prebuilt -type f -name '*gcc' | head
```

编译简单程序：

```bash
${CROSS_COMPILE}gcc -O2 -Wall hello.c -o hello
file hello
```

动态库：

```bash
${CROSS_COMPILE}gcc -fPIC -c demo.c -o demo.o
${CROSS_COMPILE}gcc -shared demo.o -o libdemo.so
```

静态库：

```bash
${CROSS_COMPILE}gcc -c demo.c -o demo.o
${CROSS_COMPILE}ar rcs libdemo.a demo.o
```

## RISC-V MCU工具链

MCU工具链用于RTOS工程，不可与Linux用户态工具链混用。通过`mrtos`构建系统调用SDK内置工具链，避免手工设置错误的ABI和架构参数。

## Git/Gitea管理

为原厂SDK创建本地基线：

```bash
git init
git switch -c main
git add .
git commit -m 'baseline: vendor V821 SDK'
git remote add origin <gitea-url>
git push -u origin main
```

`quick_config`、存储切换和摄像头配置会修改多处文件，建议每个功能单独分支并在执行前后使用`git status`和`git diff`确认。

## Tina增加软件包

典型目录：

```text
openwrt/package/utils/hello/
├── Makefile
└── src/
    ├── Makefile
    └── hello.c
```

OpenWrt包Makefile需要定义包名、依赖、编译和安装步骤。加入后：

```bash
make menuconfig
# select Utilities -> hello
m -j4
```

## 开机自启

优先将应用做成OpenWrt init脚本：

```text
/etc/init.d/hello
```

脚本至少实现`start()`和`stop()`，并在rootfs安装阶段创建启用链接。板端临时验证可执行：

```bash
/etc/init.d/hello enable
/etc/init.d/hello start
```

应用应处理配置文件缺失、存储未挂载、网络未就绪和异常退出，不能只靠`rc.local`中后台启动。
