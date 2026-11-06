---
sidebar_position: 1
title: Android 编译
description: i3568bv3 Android 编译
---

# Android 编译

## 准备源码

从配套资料 `DVD_i3568/source/x3568_android11_new` 获取 Android 11 SDK 的全部分卷。使用匹配 SDK 的 64 位 Ubuntu 环境，以普通用户编译。JDK 版本按该 SDK 脚本设置，手册中的脚本示例使用 Java 8。

```bash
cat ./x3568_android11_new.tar.gz.* > x3568_android11_new.tar.gz
tar -xzf x3568_android11_new.tar.gz
cd x3568_android11_new
./build.sh -h
```

## 按 SDK 选择编译参数

先检查当前 SDK 的脚本帮助和脚本入口。不同脚本对大小写选项的定义有差异，尤其是 `-U`，应确认其在当前脚本中对应 U-Boot 还是打包。

| 构建目标 | 参数示例 | 操作 |
| --- | --- | --- |
| U-Boot | `-U` 或 `-u` | 选用帮助中明确标为 U-Boot 的选项 |
| 内核 | `-K` 或 `-k` | 编译后重新打包 boot.img |
| Android 系统 | `-A` 或 `-s` | 构建系统文件及分区镜像 |
| 整包 | `-U`（打包脚本） | 以脚本帮助中生成 update.img 的选项为准 |

若当前 SDK 使用 `mk.sh`，按其帮助选择选项。内核单独更新时，可用配套 `./mkimage.sh` 重新生成 `boot.img`。使用 `rockdev/Image-rk3568_r/` 下打包后的镜像烧录。

## 输出文件

| 文件 | 用途 |
| --- | --- |
| `update.img` | 整包烧录 |
| `MiniLoaderAll.bin`、`uboot.img` | 下载引导与 U-Boot |
| `boot.img`、`dtbo.img` | 启动镜像与设备树覆盖 |
| `super.img` | 包含 system、vendor、product、odm、system_ext 等逻辑分区 |
| `parameter.txt`、`config.cfg` | 分区布局与烧录工具配置 |
| `recovery.img`、`vbmeta.img` | 恢复系统与 AVB 校验信息 |
