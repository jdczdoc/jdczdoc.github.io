---
title: Android 编译与烧录
sidebar_position: 8
---
# Android 编译与烧录

## 板型名称

X733BV2 在源码中统一使用：

```text
x733bv2
```

发布包可能命名为 `a733_android13.tar.gz` 或 `x733_android13.tar.gz`。进入源码后应查看根目录 `readme.txt` 或构建菜单，选择 `x733bv2` 产品配置。

## 获取源码

```bash
tar -xzvf a733_android13.tar.gz
cd a733_android13
```

部分发布包会将大型目录单独打包，需要继续解压：

```bash
tar -xzvf ../prebuilts.tar.gz
tar -xzvf ../external.tar.gz
```

文件名以实际网盘发布内容为准。

## 编译

使用普通用户编译，不要在源码目录中混用 `sudo`：

```bash
cd a733_android13
cat readme.txt
```

按照当前 SDK 的 `readme.txt` 加载编译环境、选择 `x733bv2` 并执行完整编译。镜像通常输出到：

```text
longan/out/
```

若缺少 ELF 开发库：

```bash
sudo apt update
sudo apt install libelf-dev
```

## PhoenixSuit USB 烧录

1. Windows 安装并运行 PhoenixSuit。
2. 在“一键刷机”中加载完整 `.img` 固件。
3. 使用 Type-C 数据线连接 X733BV2 的 OTG 口。
4. 关闭开发板电源，等待指示灯熄灭。
5. 按住 `BOOT/FEL` 键后重新上电，或按住该键再按 `RST`。
6. PhoenixSuit 识别设备后，按提示选择是否格式化并开始烧录。
7. 等待烧录成功，断开数据线后重新上电。

烧录期间不要拔线或断电。格式化烧录会清除用户数据。

## PhoenixCard TF 卡升级

1. 使用 PhoenixCard 选择完整固件。
2. 选择“量产卡/升级卡”模式并制作 TF 卡。
3. 断电后将 TF 卡插入开发板。
4. 上电等待屏幕进度条和串口日志完成。
5. 升级完成后断电、拔卡并重新上电。

制作升级卡会清除 TF 卡原有内容。
