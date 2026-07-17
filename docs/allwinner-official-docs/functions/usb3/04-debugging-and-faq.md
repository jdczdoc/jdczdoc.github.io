---
title: USB 3.0 调试与常见问题
sidebar_position: 4
description: USB 3.0 的日志、调试节点和常见故障定位。
---

# USB 3.0 调试与常见问题

- U2 正常、U3 不通：重点检查 SuperSpeed TX/RX 对、方向 mux、ComboPHY 选择、参考时钟和均衡参数。
- `dwc3_sunxi_plat` 加载失败：检查 DWC3、PHY、reset、clock、power-domain 及父子节点状态。
- xHCI 注册失败：检查资源冲突、PHY 未就绪和 `dr_mode`。
- ADB/Mass Storage 未识别为 SuperSpeed：检查 Gadget 描述符、`maximum-speed` 和 function 是否支持 SuperSpeed。
- MTP 卡住或吞吐低：检查 USB 速率、文件系统、PC 驱动和 CPU/内存瓶颈。

```bash
dmesg | grep -Ei 'dwc3|xhci|typec|combophy|superspeed'
find /sys/kernel/debug -iname '*dwc3*' -o -iname '*xhci*'
cat /sys/class/udc/*/state 2>/dev/null
```
## 通用定位顺序

1. 原理图与供电。
2. 最终 DTB 中的节点和 pinctrl。
3. 最终 `.config` 与 `.ko`。
4. probe、clock、reset、IRQ 日志。
5. 设备节点与 sysfs/debugfs。
6. 最小功能测试。
7. 压力、休眠和异常插拔测试。

不要通过关闭错误日志来判断问题已经解决。应找到第一个异常并验证其上下游依赖。
