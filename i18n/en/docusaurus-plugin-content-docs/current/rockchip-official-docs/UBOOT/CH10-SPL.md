[TOC]

# SPL

## Firmware Boot

The role of SPL is to replace miniloader in loading and booting trust.img and uboot.img. SPL currently supports booting two types of firmware:

- FIT firmware: Enabled by default;
- RKFW firmware: Disabled by default, requires user configuration and enabling;

### FIT Firmware

FIT (flattened image tree) format is a relatively new firmware format supported by SPL. It supports packaging and verification of multiple images. FIT uses DTS syntax to describe the packaged images. The description file is u-boot.its, and the final generated FIT firmware is u-boot.itb.

Advantages of FIT: Reuses DTS syntax and compilation rules, is flexible, and firmware parsing can directly use the libfdt library.

**u-boot.its file:**

- `/images`: Statically defines all available resource configurations (can be used or unused), similar to the role of dtsi;
- `/configurations`: Each config node describes a set of bootable configurations, similar to a board-level dts.
- Uses `default =` to specify the currently selected default configuration;

Example:

```c
/dts-v1/;

/ {
	description = "Configuration to load ATF before U-Boot";
	#address-cells = <1>;

	images {
		uboot@1 {
			description = "U-Boot (64-bit)";
			data = /incbin/("u-boot-nodtb.bin");
			type = "standalone";
			os = "U-Boot";
			arch = "arm64";
			compression = "none";
			load = <0x00200000>;
		};

		atf@1 {
			description = "ARM Trusted Firmware";
			data = /incbin/("bl31_0x00010000.bin");
			type = "firmware";
			arch = "arm64";
			os = "arm-trusted-firmware";
			compression = "none";
			load = <0x00010000>;
			entry = <0x00010000>;
		};

		atf@2 {
			description = "ARM Trusted Firmware";
			data = /incbin/("bl31_0xff091000.bin");
			type = "firmware";
			arch = "arm64";
			os = "arm-trusted-firmware";
			compression = "none";
			load = <0xff091000>;
		};

		optee@1 {
			description = "OP-TEE";
			data = /incbin/("bl32.bin");
			type = "firmware";
			arch = "arm64";
			os = "op-tee";
			compression = "none";
			load = <0x08400000>;
		};

		fdt@1 {
			description = "rk3328-evb.dtb";
			data = /incbin/("arch/arm/dts/rk3328-evb.dtb");
			type = "flat_dt";
			compression = "none";
		};
    };

	configurations {
		default = "config@1";
		config@1 {
			description = "rk3328-evb.dtb";
			firmware = "atf@1";
			loadables = "uboot@1", "atf@2", "optee@1" ;
			fdt = "fdt@1";
		};
	};
};
```

**u-boot.itb file:**

```
                          mkimage + dtc
[u-boot.its] + [images]        ==>         [u-boot.itb]
```

The above is the process of generating the itb file. FIT firmware can be understood as a special DTB file, except its content is images. Users can use the fdtdump command to view the itb file:

```c
cjh@ubuntu:~/uboot-nextdev/u-boot$ fdtdump u-boot.itb | less

/dts-v1/;
// magic:               0xd00dfeed
// totalsize:           0x497 (1175)
// off_dt_struct:       0x38
// off_dt_strings:      0x414
// off_mem_rsvmap:      0x28
// version:             17
// last_comp_version:   16
// boot_cpuid_phys:     0x0
// size_dt_strings:     0x83
// size_dt_struct:      0x3dc

/ {
    timestamp = <0x5d099c85>;
    description = "Configuration to load ATF before U-Boot";
    #address-cells = <0x00000001>;
    images {
        uboot@1 {
            data-size = <0x0009f8a8>;
            data-offset = <0x00000000>;
            description = "U-Boot (64-bit)";
            type = "standalone";
            os = "U-Boot";
            arch = "arm64";
            compression = "none";
            load = <0x00600000>;
        };
        atf@1 {
            data-size = <0x0000c048>;   // Compilation automatically adds this field, describing atf@1 firmware size
            data-offset = <0x0009f8a8>; // Compilation automatically adds this field, describing atf@1 firmware offset
            description = "ARM Trusted Firmware";
            type = "firmware";
            arch = "arm64";
            os = "arm-trusted-firmware";
            compression = "none";
            load = <0x00010000>;
            entry = <0x00010000>;
        };
        atf@2 {
            data-size = <0x00002000>;
            data-offset = <0x000ab8f0>;
            description = "ARM Trusted Firmware";
            type = "firmware";
            arch = "arm64";
            os = "arm-trusted-firmware";
            compression = "none";
            load = <0xfff82000>;
        };
        fdt@1 {
            data-size = <0x00005793>;
            data-offset = <0x000ad8f0>;
            description = "rk3308-evb.dtb";
            type = "flat_dt";
            ......
        };
        ......
    };
};
```

For more FIT information, please refer to:

```
./doc/uImage.FIT/
```

### RKFW Firmware

To more directly replace miniloader without modifying the partition or packaging format of subsequent firmware, the RK platform added support for the RKFW format (i.e., independent partition firmware: trust.img and uboot.img).

**Configuration:**

```c
CONFIG_SPL_LOAD_RKFW           // Enable switch
CONFIG_RKFW_TRUST_SECTOR       // trust.img partition address, must match the partition table definition
CONFIG_RKFW_U_BOOT_SECTOR      // uboot.img partition address, must match the partition table definition
```

**Code:**

```
./include/spl_rkfw.h
./common/spl/spl_rkfw.c
```

### Storage Priority

The U-Boot DTS uses `u-boot,spl-boot-order` to specify the boot priority of storage devices.

```
/ {
	aliases {
		mmc0 = &emmc;
		mmc1 = &sdmmc;
	};

	chosen {
		u-boot,spl-boot-order = &sdmmc, &nandc, &emmc;
		stdout-path = &uart2;
	};
	......
};
```

## Compilation and Packaging

### Code Compilation

U-Boot compiles the same U-Boot source code to obtain the SPL firmware based on **different compilation paths**. When compiling SPL, the `CONFIG_SPL_BUILD` macro is automatically generated. U-Boot continues to compile SPL after compiling u-boot.bin and creates a separate output directory `./spl/`.

```c
  // Compile u-boot
  ......
  DTC     arch/arm/dts/rk3399-puma-ddr1866.dtb
  DTC     arch/arm/dts/rv1108-evb.dtb
make[2]: `arch/arm/dts/rk3328-evb.dtb' is up to date.
  SHIPPED dts/dt.dtb
  FDTGREP dts/dt-spl.dtb
  CAT     u-boot-dtb.bin
  MKIMAGE u-boot.img
  COPY    u-boot.dtb
  MKIMAGE u-boot-dtb.img
  COPY    u-boot.bin

  // Compile spl, has separate spl/ directory
  LD      spl/arch/arm/cpu/built-in.o
  CC      spl/board/rockchip/evb_rk3328/evb-rk3328.o
  LD      spl/dts/built-in.o
  CC      spl/common/init/board_init.o
  COPY    tpl/u-boot-tpl.dtb
  CC      spl/cmd/nvedit.o
  CC      spl/env/common.o
  CC      spl/env/env.o
  .....
  LD      spl/drivers/block/built-in.o

  ......
```

After compilation, the following is obtained:

```
./spl/u-boot-spl.bin
```

### Firmware Packaging

## System Modules

### GPT

SPL uses the GPT partition table.

Configuration:

```
CONFIG_SPL_LIBDISK_SUPPORT=y
CONFIG_SPL_EFI_PARTITION=y
CONFIG_PARTITION_TYPE_GUID=y
```

Driver:

```
./disk/part.c
./disk/part_efi.c
```

Interfaces:

```c
int part_get_info(struct blk_desc *dev_desc, int part, disk_partition_t *info);
int part_get_info_by_name(struct blk_desc *dev_desc,
                          const char *name, disk_partition_t *info);
```

### A/B System

SPL supports A/B system booting.

Configuration:

```
CONFIG_SPL_AB=y
```

Driver:

```
./common/spl/spl_ab.c
```

Interfaces:

```c
int spl_get_current_slot(struct blk_desc *dev_desc, char *partition, char *slot);
int spl_get_partitions_sector(struct blk_desc *dev_desc, char *partition,u32 *sectors);
```

### Boot Priority

- SPL uses the boot order defined by `u-boot,spl-boot-order`, located in rkxxxx-u-boot.dtsi:

  ```
  chosen {
	stdout-path = &uart2;
	u-boot,spl-boot-order = &sdmmc, &sfc, &nandc, &emmc;
  };
  ```

- Maskrom boot priority:

  ```
   spi nor > spi nand > emmc > sd
  ```

- Pre-loader (SPL) boot priority:

  ```
  sd > spi nor > spi nand > emmc
  ```

  Setting SD card priority to the highest makes it convenient to boot the system from an SD card.

### ATAGS

SPL and U-Boot communicate parameters through the ATAGS mechanism. The information passed includes: boot storage device, serial console, etc.

Configuration:

```
CONFIG_ROCKCHIP_PRELOADER_ATAGS=y
```

Driver:

```
./arch/arm/include/asm/arch-rockchip/rk_atags.h
./arch/arm/mach-rockchip/rk_atags.c
```

Interfaces:

```c
int atags_set_tag(u32 magic, void *tagdata);
struct tag *atags_get_tag(u32 magic);
```

### Kernel Boot

Typically, the kernel is loaded and booted by U-Boot, but SPL can also support loading the kernel. It currently supports loading boot.img with Android header version 2 and supports RK format firmware.

Boot sequence:

```
Maskrom -> ddr -> SPL -> Trust -> Kernel
```

### pinctrl

Configuration:

```
CONFIG_SPL_PINCTRL_GENERIC=y
CONFIG_SPL_PINCTRL=y
```

Driver:

```
./drivers/pinctrl/pinctrl-uclass.c
./drivers/pinctrl/pinctrl-generic.c
./drivers/pinctrl/pinctrl-rockchip.c
```

DTS configuration:

Taking sdmmc as an example:

```
&pinctrl {
	u-boot,dm-spl;
};

&pcfg_pull_none_4ma {
	u-boot,dm-spl;
};

&pcfg_pull_up_4ma {
	u-boot,dm-spl;
};

&sdmmc {
	u-boot,dm-spl;
};

&sdmmc_pin {
	u-boot,dm-spl;
};

&sdmmc_clk {
	u-boot,dm-spl;
};

&sdmmc_cmd {
	u-boot,dm-spl;
};

&sdmmc_bus4 {
	u-boot,dm-spl;
};

&sdmmc_pwren {
	u-boot,dm-spl;
};
```

**Notes:**

When SPL enables pinctrl, modify the `CONFIG_OF_SPL_REMOVE_PROPS` definition in defconfig and remove the `pinctrl-0 pinctrl-names` fields.

### Secure Boot

[TODO]

## Driver Modules

### MMC

Configuration:

```c
CONFIG_SPL_MMC_SUPPORT=y  // Enabled by default
```

Driver:

```
./common/spl/spl_mmc.c
```

Interfaces:

```c
int spl_mmc_load_image(struct spl_image_info *spl_image,
                       struct spl_boot_device *bootdev);
```

### MTD Block

SPL unifies nand, spi nand, and spi nor interfaces into the block layer.

Configuration:

```c
// MTD driver support
CONFIG_MTD=y
CONFIG_CMD_MTD_BLK=y
CONFIG_SPL_MTD_SUPPORT=y
CONFIG_MTD_BLK=y
CONFIG_MTD_DEVICE=y

// spi nand driver support
CONFIG_MTD_SPI_NAND=y
CONFIG_ROCKCHIP_SFC=y
CONFIG_SPL_SPI_FLASH_SUPPORT=y
CONFIG_SPL_SPI_SUPPORT=y

// nand driver support
CONFIG_NAND=y
CONFIG_CMD_NAND=y
CONFIG_NAND_ROCKCHIP=y
CONFIG_SPL_NAND_SUPPORT=y
CONFIG_SYS_NAND_U_BOOT_LOCATIONS=y
CONFIG_SYS_NAND_U_BOOT_OFFS=0x8000
CONFIG_SYS_NAND_U_BOOT_OFFS_REDUND=0x10000
// nand page size must be defined according to actual size; if using NAND >= 512MB, typically configure as 4096
#define CONFIG_SYS_NAND_PAGE_SIZE	2048

// spi nor driver support
CONFIG_CMD_SF=y
CONFIG_CMD_SPI=y
CONFIG_SPI_FLASH=y
CONFIG_SF_DEFAULT_MODE=0x1
CONFIG_SF_DEFAULT_SPEED=50000000
CONFIG_SPI_FLASH_GIGADEVICE=y
CONFIG_SPI_FLASH_MACRONIX=y
CONFIG_SPI_FLASH_WINBOND=y
CONFIG_SPI_FLASH_MTD=y
CONFIG_ROCKCHIP_SFC=y
CONFIG_SPL_SPI_SUPPORT=y
CONFIG_SPL_MTD_SUPPORT=y
CONFIG_SPL_SPI_FLASH_SUPPORT=y
```

Driver:

```
./common/spl/spl_mtd_blk.c
```

Interfaces:

```c
int spl_mtd_load_image(struct spl_image_info *spl_image,
                       struct spl_boot_device *bootdev);
```

### OTP

Used for storing immutable data, used in secure boot.

 Configuration:

```
CONFIG_SPL_MISC=y
CONFIG_SPL_ROCKCHIP_SECURE_OTP=y
```

Driver:

```
./drivers/misc/misc-uclass.c
./drivers/misc/rockchip-secure-otp.S
```

Interfaces:

```c
int misc_read(struct udevice *dev, int offset, void *buf, int size);
int misc_write(struct udevice *dev, int offset, void *buf, int size);
```

### Crypto

Secure-boot uses crypto for hash and rsa calculations.

Configuration:

```c
CONFIG_SPL_DM_CRYPTO=y

// crypto v1 supported platforms: rk3399/rk3368/rk3328/rk3229/rk3288/rk3128
CONFIG_SPL_ROCKCHIP_CRYPTO_V1=y

// crypto v2 supported platforms: px30/rk3326/rk1808/rk3308
CONFIG_SPL_ROCKCHIP_CRYPTO_V2=y
```

Driver:

```
./drivers/crypto/crypto-uclass.c
./drivers/crypto/rockchip/crypto_v1.c
./drivers/crypto/rockchip/crypto_v2.c
./drivers/crypto/rockchip/crypto_v2_pka.c
./drivers/crypto/rockchip/crypto_v2_util.c
```

Interfaces:

```c
u32 crypto_algo_nbits(u32 algo);
struct udevice *crypto_get_device(u32 capability);
int crypto_sha_init(struct udevice *dev, sha_context *ctx);
int crypto_sha_update(struct udevice *dev, u32 *input, u32 len);
int crypto_sha_final(struct udevice *dev, sha_context *ctx, u8 *output);
int crypto_sha_csum(struct udevice *dev, sha_context *ctx,
                    char *input, u32 input_len, u8 *output);
int crypto_rsa_verify(struct udevice *dev, rsa_key *ctx, u8 *sign, u8 *output);
```

### UART

The SPL serial port is specified through the chosen node in `rkxxxx-u-boot.dtsi`. Taking rk3308 as an example:

```
chosen {
	stdout-path = &uart2;
};

&uart2 {
	u-boot,dm-pre-reloc;
	clock-frequency = <24000000>;
	status = "okay";
};
```
