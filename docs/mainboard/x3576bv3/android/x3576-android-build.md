---
sidebar_position: 1
title: Android 编译
description: x3576bv3 Android 编译
---

# Android 编译

## 解包与环境

从配套资料的 `source/` 获取 `x3576_android14.tar.gz`。使用 SDK 要求的 64 位 Ubuntu、JDK 和依赖包，以普通用户编译。解压后进入实际生成的源码目录。

```bash
tar -xzf x3576_android14.tar.gz
# Run from the extracted SDK root
./build.sh -h
```

## 编译与打包参数

执行前查看当前 SDK 的脚本帮助。手册的分步操作和帮助示例对选项大小写的用法不同，尤其要确认 `-U` 是编译 U-Boot 还是打包。

| 目标 | 示例参数 | 用法 |
| --- | --- | --- |
| U-Boot | `-U` / `-u` | 选择帮助中标为 U-Boot 的选项 |
| 内核 | `-K` / `-k` | 重新生成启动镜像后再烧录 |
| Android 系统 | `-A` / `-s` | 构建系统和逻辑分区镜像 |
| 整包 | `-U` | 仅在脚本帮助明确为打包时使用 |

若帮助明确 `-a` 为完整构建，可用 `./build.sh -a`。如 SDK 提供 `mkimage.sh`，按其要求将更新的内核重新打入 `boot.img`。

## 检查输出

在 `rockdev/` 的实际输出子目录检查 `update.img`、Loader、`uboot.img`、`boot.img`、`dtbo.img`、`super.img`、`recovery.img`、`vbmeta.img` 与 `parameter.txt`。手册烧录示例使用 `rockdev/Image-rk3576_u/`。使用与当前构建同一批生成的镜像与分区布局。
