---
title: Android 编译与烧录
sidebar_position: 8
---
# Android 编译与烧录

## 板型名称

I527BV3 在源码中使用：

```text
i527bv3
```

源码包或仓库可能仍以 `x527_android13`、`t527` 等名称发布，进入源码后应在 `readme.txt`、产品配置或构建菜单中选择 `i527bv3`，不要选择其他 X527/T527 底板配置。

## 获取源码

```bash
tar -xzvf x527_android13.tar.gz
cd x527_android13
tar -xzvf ../prebuilts.tar.gz
tar -xzvf ../external.tar.gz
```

源码名称以实际发布包为准。

## 编译

使用普通用户编译：

```bash
cd x527_android13
cat readme.txt
```

按当前 SDK 说明加载环境并选择 `i527bv3` 产品后执行完整编译。固件通常输出到：

```text
longan/out/
```

若提示缺少 ELF 开发库：

```bash
sudo apt update
sudo apt install libelf-dev
```

## USB 烧录

1. Windows 安装 PhoenixSuit。
2. 加载完整 `.img` 固件。
3. Type-C 连接 I527BV3 的 OTG/烧录口。
4. 断电，按住 FEL 后上电或按 RESET。
5. 工具识别后开始烧录。
6. 完成后断开数据线并重新上电。

## TF 卡升级

使用 PhoenixCard 制作升级卡，断电插卡后上电。等待屏幕进度和串口日志完成，拔卡后重新启动。制作升级卡会清除 TF 卡原有数据。
