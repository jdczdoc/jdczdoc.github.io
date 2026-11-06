---
sidebar_position: 1
title: Android 编译与烧录
description: z3588bv3 Android 12 SDK 编译、镜像输出与固件烧录
---

# Android 编译与烧录

## 开发主机与源码包

Android 用户手册建议使用 Ubuntu 20.04 64 位主机进行全量源码编译，并指出 Android 全量编译对 PC 资源要求较高，建议使用 Linux 实机而非虚拟机。

源码包从手册所述资料目录 `DVD_Z3588/source/Android` 获取。手册示例包名为 `x3588_android12_r10.tar.gz.part.*`，将分卷合并并解压：

```bash
cat x3588_android12_r10.tar.gz.part.* > x3588_android12_r10.tar.gz
tar -xzf x3588_android12_r10.tar.gz
```

包名和版本可能随发布批次变化，以实际下载文件和包内 `readme.txt` 为准。

## 编译

编译必须使用普通用户权限。进入源码根目录，初始化 Android 编译环境并选择配置：

```bash
source build/envsetup.sh
lunch i3588-userdebug
```

手册示例的一键编译命令：

```bash
./build.sh -UCKAu
```

手册给出的参数含义：

| 参数 | 含义 |
| --- | --- |
| `-U` | 编译 U-Boot |
| `-C` | 使用 Clang 编译内核 |
| `-K` | 编译内核 |
| `-A` | 编译 Android |
| `-p` | 在 IMAGE 目录执行打包 |
| `-o` | 生成 OTA 包 |
| `-u` | 生成 update.img |
| `-v` | 选择 `user` 或 `userdebug` |
| `-d` | 指定 kernel DTS 名称 |
| `-V` | 指定版本 |
| `-J` | 指定并行编译任务数 |

上述 `lunch i3588-userdebug` 与参数组合是手册中的示例，执行前必须核对 SDK 中实际存在的 lunch target 和 `./build.sh -h` 输出，不要假定其他分支完全相同。

## 输出镜像

手册给出的镜像输出目录为 `rockdev/Image-i3588/`，可能包含：`MiniLoaderAll.bin`、`uboot.img`、`trust.img`、`resource.img`、`boot.img`、`misc.img`、`recovery.img`、`boot-debug.img`、`dtbo.img`、`pcba_small_misc.img`、`pcba_whole_misc.img`、`super.img`、`vbmeta.img` 及 `update.img`。实际文件由 SDK 配置和编译目标决定。

## Windows 下烧录 update.img

1. 使用 SDK 中的 `SDK\RKTools\windows\DriverAssitant_v5.1.1\DriverInstall.exe` 安装 USB 驱动；若存在旧驱动，先卸载再安装。
2. 解压 SDK 中的 `RKTools\windows\AndroidTool\RKDevTool_Release_v2.84.zip`。
3. 启动 `RKDevTool.exe`，进入“升级固件”页，选择 `rockdev/Image-i3588/update.img`。
4. 按住开发板 BOOT/RECOVERY 键，连接 Type-C OTG 数据线与 12 V 电源。
5. 工具识别设备后确认固件无误，再开始升级。

不同 SDK 版本可能附带不同工具版本。手册明确提示 i3588 与 PX30、RK3288、RK3399 系列工具不同；应使用当前 SDK 配套的 RKDevTool 与 DriverAssistant。
