---
title: Android编译与烧录
sidebar_position: 6
description: X8390/X8370 Android 13源码编译、镜像打包和SP Flash Tool烧录流程。
---

# Android编译与烧录

## 源码目录

原资料将Android 13源码放在资料包的`DVD_x8390/source/`目录。源码包名称会随发布日期变化，解压示例：

```bash
tar -xzvf x8390_android13_v5.tar.gz
cd x8390_android13
```

编译Android源码应使用普通用户权限，不要直接使用root整编。

## 编译命令

### 编译Android并生成升级文件

```bash
./build.sh -A -u
```

### 查看帮助

```bash
./build.sh -h
```

| 选项 | 功能 |
| --- | --- |
| `-A`, `--android` | 编译Android系统 |
| `-U`, `--update` | 生成升级文件 |
| `-S`, `--system` | 单独编译MSSI system，调试用途 |
| `-V`, `--vendor` | 单独编译AP vendor，调试用途 |
| `-K`, `--kernel` | 单独编译内核，调试用途 |
| `-M`, `--merge` | 合并镜像 |
| `-a`, `--all` | 编译全部内容 |
| `-h`, `--help` | 显示帮助 |

编译结果统一放在`output/`目录。

## Windows烧录工具

- 驱动包：`tools/Driver_Auto_Installer_SP_Drivers_20160804.zip`
- 烧录工具：`tools/SP_Flash_Tool_v6.2316_Win.7z`
- 配置文件：编译输出目录中的`flash.xml`

## SP Flash Tool烧录步骤

1. 安装MTK USB驱动并解压SP Flash Tool。
2. 在工具中选择`output/flash.xml`。
3. 模式选择`Firmware Upgrade`。
4. 点击`Download`。
5. 将Micro USB连接到开发板烧录口，同时连接12V电源。
6. 按下开发板下载键，使设备进入下载模式。
7. 等待进度完成，期间不要断电或拔线。

![SP Flash Tool](./android-sp-flash-tool.jpg)

### 烧录口与下载键位置

![烧录口与下载键](./android-download-key.jpg)

烧录失败时，优先检查驱动、USB线、电源电流、下载键时序和`flash.xml`是否来自同一套编译输出。
