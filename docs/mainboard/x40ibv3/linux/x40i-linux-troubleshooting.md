---
sidebar_position: 7
title: Linux 故障排查
description: x40i Linux 故障排查
---

# Linux 故障排查

| 现象 | 检查方法 |
| --- | --- |
| 无法开机 | 检查 12 V 输入、电源容量、POWER、复位及 UART0 日志 |
| 串口乱码或无日志 | 核对 UART0、115200-8-N-1、TX/RX、共地和电平配置 |
| USB 烧录不识别 | 核对 OTG 数据线、配套驱动，按住 FEL 后上电/复位 |
| Qt 编译失败 | 先完整编译系统，开启新 Shell；降低 setenvs.sh 中 makeall 并行度 |
| Linux 镜像缺少 Qt | 执行 qtLibAutoBuild.sh，确认 Qt 安装目录后重编译打包 |
| Linux 启动黑屏 | 核对 sys_config.fex 屏参、背光与 framebuffer，再检查 DvrUI |
| 摄像头画面被覆盖 | 停止 DvrUI 后再运行 sdktest，执行 source /qt5.sh |
| sdktest 约 800 秒退出 | 检查测试程序退出计时，调整老化测试用例 |
| 日志客户端找不到 server | 先启动 sdktest，确认两者工作目录和 Loglevel_server 路径 |
| 数据分区容量偏小 | 同时检查分区扇区数与文件系统镜像 INI 容量 |
| Wi-Fi/蓝牙异常 | 核对实际模组、驱动、固件和天线 |
| 串口回环失败 | 检查 TTL/RS232/RS485 配置与连接方式 |

排查时记录板卡版本、内存/存储配置、系统版本、修改内容、复现步骤与完整串口日志。
