---
sidebar_position: 7
title: Android 编译与烧录
description: X8385 Android13 源码编译和 SP Flash Tool 烧录流程
---

# Android 编译与烧录

## 源码包获取与解压

Android 源码从网盘 `DVD_x8385/source/` 目录获取。手册示例源码包名为：

```text
x8385_Android13.tar.gz
```

解压：

```bash
tar -xzvf x8385_Android13.tar.gz
cd x8385_Android13
```

:::note
源码包名称可能会因发布日期不同而变化，实际以网盘中的文件名为准。
:::

## 编译源码

编译镜像必须使用普通用户权限。MTK 平台一般整编，建议集中修改后再编译，避免反复整编耗时。

```bash
./build.sh -A -u
```

编译生成的镜像统一放在 `output` 目录下。

## 查看编译帮助

```bash
./build.sh -h
```

| 参数 | 作用 |
| --- | --- |
| `-A`, `--Android` | 编译 Android system |
| `-U`, `--update` | 打包 update 文件 |
| `-S`, `--system` | 编译 MSSI system，仅调试 |
| `-V`, `--vendor` | 编译 AP vendor，仅调试 |
| `-K`, `--kernel` | 编译 kernel，仅调试 |
| `-M`, `--merge` | 编译 merge，仅调试 |
| `-a`, `--all` | 编译全部 |
| `-h`, `--help` | 显示帮助 |

## Windows 烧录工具

驱动路径：

```text
tools\Driver_Auto_Installer_SP_Drivers_20160804.zip
```

烧录工具：

```text
tools\SP_Flash_Tool_v5.2020_Win.rar
```

## SP Flash Tool 烧录步骤

1. 解压并打开 `SP_Flash_Tool_v5.2020_Win`。
2. 选择编译生成 `output` 目录下的 scatter 文件：

```text
output/MT6771_Android_scatter.txt
```

3. 模式选择 `Format All + Download`。
4. 工具配置好后，连接开发板。
5. 插上 Micro USB 线和 12V DC 电源线。
6. 先点击烧录软件的 `Download`。
7. 再按下 SW6 键。
8. 最后按 Power 键开机。
9. 烧录工具界面下方出现进度条后，等待升级完成。

:::warning
`Format All + Download` 会清除目标设备分区数据。量产或售后场景使用前，应确认是否需要保留校准、SN、MAC、IMEI 等个性化数据。
:::
