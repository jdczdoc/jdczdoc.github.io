---
sidebar_position: 1
title: Linux 编译
description: x3576bv3 Linux 编译
---

# Linux 编译

## 准备源码

从配套资料的 `source/` 目录获取 `x3576_linux_20240723.tar.gz` 的全部分卷，按照同目录 `readme.txt` 列出的顺序合并，核对 MD5 后解压。分卷编号以实际发布包为准。

```bash
cat ./x3576_linux_20240723.tar.gz.[0-9][0-9] > x3576_linux_20240723.tar.gz
md5sum x3576_linux_20240723.tar.gz
tar -xzf x3576_linux_20240723.tar.gz
cd x3576_linux_20240723
./build.sh -h
```

以上合并示例适用于当前目录仅有本版本完整的两位数字分卷。Ubuntu 依赖按 SDK 的 `docs/cn/RK3576/Quick-start/` 中《Rockchip_RK3576_Quick_Start_Linux_CN.pdf》配置，以普通用户编译。

## SDK 目录

| 路径 | 用途 |
| --- | --- |
| device/rockchip | 板级配置与打包脚本 |
| kernel / u-boot | 内核和引导程序 |
| buildroot / debian / yocto | 根文件系统方案 |
| app / external | 应用示例与第三方组件 |
| prebuilts / rkbin | 工具链、Rockchip 二进制和工具 |
| rockdev / output | 输出镜像与编译记录 |

## 完整构建与组件编译

先按 SDK 帮助核对 X3576 板级配置和所选根文件系统，再在源码根目录执行完整构建。

```bash
./build.sh
```

只更新单个组件时选择对应命令。替换 Debian 根文件系统时，使用所选方案对应的 `linaro-rootfs.img`。

```bash
./build.sh uboot
./build.sh kernel
./build.sh rootfs
./build.sh updateimg
```

整包在 `rockdev/` 中检查 `update.img`。分区镜像通常包括 `MiniLoaderAll.bin`、`uboot.img`、`boot.img`、`rootfs.img`、`recovery.img` 和 `parameter.txt`，以实际输出为准。
