---
title: USB 3.0 配置
sidebar_position: 2
description: USB 3.0 的硬件检查、Kernel menuconfig、设备树、编译和 DTB 验证。
---

# USB 3.0 配置

## 1. 硬件确认

开始修改前必须记录：控制器编号、引脚复用、电压域、供电、复位/使能脚、中断以及外接器件型号。高速接口还要确认走线拓扑、参考时钟和 PHY 复用。

## 2. 查找当前平台配置

```bash
cd <ANDROID_TOP>/longan
find bsp device kernel -type f \( -name '*.dts' -o -name '*.dtsi' -o -name 'Kconfig' \)   | grep -Ei '<MODULE>|t527|sun55iw3'
grep -Rni '<compatible-or-config-keyword>' bsp device kernel
```

不要假设发布指南中的目录与当前分支完全一致，特别是 Linux 5.15 BSP 独立仓库和旧内核目录存在差异。

## 3. Kernel menuconfig

```bash
./build.sh menuconfig
```

重点检查：

- `CONFIG_USB_SUPPORT`
- `CONFIG_USB_XHCI_HCD`
- `CONFIG_USB_DWC3`
- `CONFIG_USB_SUNXI_DWC3`
- `CONFIG_PHY_SUNXI_PLAT`
- CONFIG_USB_SUNXI_PHY / CONFIG_USB_SUNXI_AWPHY（平台相关）
- `CONFIG_DWC3_SUNXI_PLAT`
- CONFIG_USB_SUNXI_TYPEC / CONFIG_TYPEC_HUSB311 / CONFIG_TYPEC_MUX_PS8743（外接方案需要）

保存配置：

```bash
./build.sh saveconfig
# 再检查目标 defconfig 是否发生变化
git diff -- device bsp
```

## 4. Device Tree 示例

下面是整理后的参考结构，不应覆盖 SoC dtsi 中已有的 `reg`、`interrupts`、`clocks` 和 `resets`，除非芯片勘误或官方补丁明确要求。

```dts
&usbc2 {
        status = "okay";
};

&xhci2 {
        dr_mode = "otg";                 /* host / peripheral / otg */
        maximum-speed = "super-speed-plus";
        phys = <&u2phy>, <&combophy>;
        phy-names = "usb2-phy", "usb3-phy";
        status = "okay";
};

&combophy {
        phy_use_sel = <1>;                /* 0: PCIe, 1: USB3；以当前驱动定义为准 */
        status = "okay";
};
```

## 5. 编译与产物检查

```bash
./build.sh kernel 2>&1 | tee /tmp/module-kernel-build.log
./build.sh pack
```

确认配置和节点进入最终产物：

```bash
grep -E '<CONFIG_KEY>' out/*/*/kernel/build/.config 2>/dev/null
find out -type f \( -name '*.dtb' -o -name '*.ko' \) | sort
dtc -I dtb -O dts -o /tmp/final.dts <FINAL_DTB>
grep -n -A30 -B5 '<NODE_OR_COMPATIBLE>' /tmp/final.dts
```

## 6. 变更边界

- SoC 资源和公共默认值放在 `bsp/configs/linux-5.15/*.dtsi`。
- 板级引脚、供电、复位、外设子节点和 `status` 放在板级 `board.dts`。
- 不在构建生成目录或软链接镜像中直接修改。
- 多产品共用改动应评估是否会影响其他板型。
