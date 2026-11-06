---
sidebar_position: 11
title: Linux 编译与升级
description: x311y3 Linux 编译与升级
---

# Linux 编译与升级

## 手工编译

以下使用 BY401 参考配置，实际 X311Y3 SDK 若使用不同 Board，替换为对应 Release Notes 已验证的配置。

```bash
cd "$SDK_ROOT/build"
ln -sf ../amlbian userpatches
./compile.sh rootfs BOARD=a9-by401-6.12-bookworm-gnome
```

## HDMI Only 版本

```bash
./compile.sh rootfs \
  BOARD=a9-by401-6.12-bookworm-gnome \
  HDMIONLY=yes
```

默认命令用于双显，HDMI Only 加入 `HDMIONLY=yes`。双显系统进入 Display 设置，选择第二屏（示例 `hdmitx`），启用镜像或扩展桌面。

## 输出镜像与成功判定

```bash
test -s "$SDK_ROOT/build/output/images/a311y3-by401-gnome-emmc.img" \
  && echo "Image exists and is non-empty"
```

输出示例 `build/output/images/a311y3-by401-gnome-emmc.img`。日志应有 `Pack image[...] OK` 或 `IMAGE: ... is ready!`，目标文件存在且非空；实际路径采用日志最终给出的值。

## 一键脚本

```bash
cp 'build_amlogic(1).sh' "$SDK_ROOT/build_armbian.sh"
cd "$SDK_ROOT"
chmod +x build_armbian.sh
./build_armbian.sh h
```

| 参数 | 说明 | 日志文件 |
| --- | --- | --- |
| n | 默认双显 | build_armbian.log |
| dd | 双显；当前构建命令与 n 相同 | build_armbian_dd.log |
| ho | HDMI Only (HDMIONLY=yes) | build_armbian_ho.log |
| h | 显示帮助 | — |

```bash
./build_armbian.sh n
./build_armbian.sh dd
./build_armbian.sh ho
grep -E "Pack image|IMAGE:|successful|ERROR|Error" build_armbian.log | tail -n 30
test -s build/output/images/a311y3-by401-gnome-emmc.img && echo OK
```

当前脚本使用 `compile.sh ... | tee logfile`，没有启用 `set -o pipefail` 或检查编译退出码，失败后仍可能打印“构建完成”。必须检查首条有效错误和目标镜像。

## 镜像升级

Windows 使用配套 V3 工具，步骤见 [USB 烧录与工具安装](./x311y3-usb-flashing.md)。Linux 主机可使用匹配版本的 `adnl_burn_pkg`。确认镜像兼容性、备份数据、检查 UART 和数据线，完成后停止工具并重新上电检查日志。
