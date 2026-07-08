[TOC]

# TPL

TPL is a Loader stage earlier than U-Boot. TPL runs in SRAM, and its role is to replace the ddr bin to complete DRAM initialization. TPL is the open-source version, while ddr bin is the closed-source version.

## Build and Packaging

### Configuration

- UART Configuration

CONFIG_DEBUG_UART_BASE: UART base address.

CONFIG_ROCKCHIP_UART_MUX_SEL_M: UART IOMUX GROUP.

Example:

Configure RV1126 UART2 M2 for DEBUG LOG output.

Method 1) Modify the rv1126_defconfig file:

```
CONFIG_DEBUG_UART_BASE=0xff570000
CONFIG_ROCKCHIP_UART_MUX_SEL_M=2
```

Method 2) Through make menuconfig:

```
Device Drivers ---> Serial drivers ---> (0xff570000) Base address of UART
ARM architecture ---> (2) UART mux select
```

- DRAM TYPE Configuration

Configure the DRAM TYPE supported by TPL via CONFIG_ROCKCHIP_TPL_INIT_DRAM_TYPE.

| **DDR TYPE** | **Config Value** |
| ------------ | ---------- |
| DDR2         | 2          |
| DDR3         | 3          |
| DDR4         | 0          |
| LPDDR2       | 5          |
| LPDDR3       | 6          |
| LPDDR4       | 7          |

Example:

Configure RV1126 TPL DRAM TYPE to support DDR3.

Method 1) Modify the rv1126_defconfig file:

```
CONFIG_ROCKCHIP_TPL_INIT_DRAM_TYPE=3
```

Method 2) Through make menuconfig. Note that if the chip model is specified after make.sh during build, make will execute a make xxxdefconfig action that will overwrite menuconfig changes. You can run make.sh without parameters to prevent menuconfig changes from being overwritten.

```
Device Drivers ---> (3) TPL select DRAM type
```

Example:

make rv1126_defconfig or ./make.sh rv1126 -> make menuconfig to modify related config -> ./make.sh.

- Fast Boot Configuration

If you need to build a tpl.bin that supports fast boot, you can enable CONFIG_SPL_KERNEL_BOOT.

Currently only RV1126/RV1109 platforms are supported.

- Extended Temperature Support

If you need to build a tpl.bin that supports extended temperature, you can enable CONFIG_ROCKCHIP_DRAM_EXTENDED_TEMP_SUPPORT.

Currently only RV1126/RV1109 platforms are supported.

- Other Parameter Modifications

The DDR initialization source code is located in the drivers/ram/rockchip directory. Other DDR-related parameters such as frequency, drive strength, ODT strength, etc. need to be modified in the source code. For RV1126/RV1109, DDR-related parameters are centralized in the file "sdram_inc/rv1126/sdram-rv1126-loader_params.inc" under that directory, and corresponding parameters can be modified directly in that file. Other platforms require modifications in the corresponding sdram_xxx.c file.

### Build

U-Boot compiles the TPL firmware from the same U-Boot source code via different build paths. When building TPL, the `CONFIG_TPL_BUILD` macro is automatically generated. U-Boot continues to build TPL after compiling u-boot.bin, and creates a separate output directory `./tpl/`.

```c
  // Build u-boot
  ......
  DTC     arch/arm/dts/rv1108-evb.dtb
  DTC     arch/arm/dts/rk3399-puma-ddr1866.dtb
  DTC     arch/arm/dts/rv1126-evb.dtb
  FDTGREP dts/dt.dtb
  FDTGREP dts/dt-spl.dtb
  FDTGREP dts/dt-tpl.dtb
  CAT     u-boot-dtb.bin
  MKIMAGE u-boot.img
  COPY    u-boot.dtb
  MKIMAGE u-boot-dtb.img
  COPY    u-boot.bin
  ALIGN   u-boot.bin

  // Build tpl, has separate tpl/ directory
  ......
  CC      tpl/common/init/board_init.o
  CC      tpl/disk/part.o
  LD      tpl/common/init/built-in.o
  ......
  LD      tpl/u-boot-tpl
  ......
  OBJCOPY tpl/u-boot-tpl-nodtb.bin
  COPY    tpl/u-boot-tpl.bin
```

After building, you get:

```
./tpl/u-boot-tpl.bin
```

Example:
Build RV1126 uboot.

```
./make.sh rv1126
```

### Packaging

1. The compiled u-boot-tpl.bin needs to have its first 4 bytes replaced with the corresponding platform tag to become a valid ddr bin. For RV1126/RV1109 platforms, the tag is "110B". If you only need the ddr bin, you need to manually complete this tag replacement step. This action can be referenced from the scripts/spl.sh script.

Example: Replace the tag of RV1126 u-boot-tpl.bin.

```
dd bs=4 skip=1 if=tpl/u-boot-tpl.bin of=tpl/u-boot-tpl-tag.bin && sed -i '1s/^/110B&/' tpl/u-boot-tpl-tag.bin
```

2. If you need to generate a complete Loader file that can be flashed onto the board, the following command can automatically complete the tag replacement for u-boot-tpl.bin and package it with spl.bin into a complete Loader file.

```
./make.sh tpl
```
