[TOC]

# RK Architecture

This chapter mainly introduces some important basic situations, features, etc. on the RK platform.

## Platform Files

Platform directory:

```
./arch/arm/include/asm/arch-rockchip/
./arch/arm/mach-rockchip/
./board/rockchip/
./include/configs/
```

defconfig directory:

```
./configs/
```

Core common board-level file:

```
./arch/arm/mach-rockchip/board.c
```

## Platform Configuration

**Configuration Files**

The configuration options and parameters for each platform are usually located in the following positions:

```c
// Common files for all platforms (developers usually do not need to modify)
./arch/arm/mach-rockchip/Kconfig
./include/configs/rockchip-common.h

// Platform-specific, taking RK3399 as an example
./include/configs/rk3399_common.h
./include/configs/evb_rk3399.h
./configs/rk3399_defconfig
```

**Configuration Description:**

The following provides explanations for important configurations defined in rockchip-common.h, rkxxx_common.h, and evb_rkxxx.h.

- RKIMG_DET_BOOTDEV: Storage type detection command, detects the current storage device type by scanning one by one.
- RKIMG_BOOTCOMMAND: Kernel boot command.
- ENV_MEM_LAYOUT_SETTINGS: Firmware load addresses, including ramdisk/fdt/kernel.
- PARTS_DEFAULT: Default GPT partition table, used when no valid GPT partition table is found in storage.
- ROCKCHIP_DEVICE_SETTINGS: Peripheral-related commands, mainly for specifying stdio (usually includes display module boot commands).
- BOOTENV: Boot device detection command when booting Linux via distro.
- CONFIG_SYS_MALLOC_LEN: Malloc memory pool size.
- CONFIG_SYS_TEXT_BASE: U-Boot run start address.
- CONFIG_BOOTCOMMAND: Boot command, generally defined as RKIMG_BOOTCOMMAND.
- CONFIG_PREBOOT: Pre-boot command, executed before CONFIG_BOOTCOMMAND.
- CONFIG_SYS_MMC_ENV_DEV: dev num when MMC is used as ENV storage medium, generally 0.

The following uses RK3399 as an example:

./include/configs/rockchip-common.h:

```c
......
#define RKIMG_DET_BOOTDEV \                           // Dynamically detect the current storage type
	"rkimg_bootdev=" \
	"if mmc dev 1 && rkimgtest mmc 1; then " \
		"setenv devtype mmc; setenv devnum 1; echo Boot from SDcard;" \
	"elif mmc dev 0; then " \
		"setenv devtype mmc; setenv devnum 0;" \
	"elif rknand dev 0; then " \
		"setenv devtype rknand; setenv devnum 0;" \
        "elif rksfc dev 0; then " \
                "setenv devtype rksfc; setenv devnum 0;" \
	"fi; \0"

#define RKIMG_BOOTCOMMAND \
	"boot_android ${devtype} ${devnum};" \           // Boot android format firmware
	"bootrkp;" \                                     // Boot RK format firmware
	"run distro_bootcmd;"                            // Boot linux firmware
......
```

./include/configs/rk3399_common.h:

```c
......
#ifndef CONFIG_SPL_BUILD
#define ENV_MEM_LAYOUT_SETTINGS \        // Firmware load addresses
	"scriptaddr=0x00500000\0" \
	"pxefile_addr_r=0x00600000\0" \
	"fdt_addr_r=0x01f00000\0" \
	"kernel_addr_r=0x02080000\0" \
	"ramdisk_addr_r=0x0a200000\0"

#include <config_distro_bootcmd.h>
#define CONFIG_EXTRA_ENV_SETTINGS \
	ENV_MEM_LAYOUT_SETTINGS \
	"partitions=" PARTS_DEFAULT \        // Default GPT partition table
	ROCKCHIP_DEVICE_SETTINGS \
	RKIMG_DET_BOOTDEV \
	BOOTENV                              // Boot device detection command when booting linux
#endif

#define CONFIG_PREBOOT                   // Pre-boot command executed before CONFIG_BOOTCOMMAND
......
```

./include/configs/evb_rk3399.h:

```c
......
#ifndef CONFIG_SPL_BUILD
#undef CONFIG_BOOTCOMMAND
#define CONFIG_BOOTCOMMAND RKIMG_BOOTCOMMAND // Define boot command (set to RKIMG_BOOTCOMMAND)
#endif
......
#define ROCKCHIP_DEVICE_SETTINGS \           // Enable display module
		"stdout=serial,vidconsole\0" \
		"stderr=serial,vidconsole\0"
......
```

## Boot Flow

The U-Boot boot flow on the RK platform is as follows, listing only some important steps:

```c
start.s
	// Assembly environment
	=> IRQ/FIQ/lowlevel/vbar/errata/cp15/gic   // ARM architecture-related lowlevel initialization
	=> _main
		=> stack                               // Prepare the stack needed for the C environment
		// [Phase 1] C environment initialization, initiates a series of function calls
		=> board_init_f: init_sequence_f[]
			initf_malloc
			arch_cpu_init                      // [SoC lowlevel initialization]
			serial_init                        // Serial port initialization
			dram_init                          // [Get ddr capacity information]
			reserve_mmu                        // Reserve memory from the end of ddr towards lower addresses
			reserve_video
			reserve_uboot
			reserve_malloc
			reserve_global_data
			reserve_fdt
			reserve_stacks
			dram_init_banksize
			sysmem_init
			setup_reloc                        // Determine the address for U-Boot's own relocation
		// Assembly environment
		=> relocate_code                       // Assembly implementation of U-Boot code relocation
		// [Phase 2] C environment initialization, initiates a series of function calls
		=> board_init_r: init_sequence_r[]
			initr_caches                       // Enable MMU and I/Dcache
			initr_malloc
			bidram_initr
			sysmem_initr
			initr_of_live                      // Initialize of_live
			initr_dm                           // Initialize dm framework
			board_init                         // [Platform initialization, core part]
				board_debug_uart_init          // Serial iomux, clk configuration
				init_kernel_dtb                // [Switch to kernel dtb]!
				clks_probe                     // Initialize system frequency
				regulators_enable_boot_on      // Initialize system power
				io_domain_init                 // io-domain initialization
				set_armclk_rate                // __weak, ARM frequency boost (implemented if platform requires)
				dvfs_init                      // Frequency and voltage adjustment for wide-temperature chips
				rk_board_init                  // __weak, implemented by each specific platform
			console_init_r
			board_late_init                    // [Platform late initialization]
				rockchip_set_ethaddr           // Set mac address
				rockchip_set_serialno          // Set serialno
				setup_boot_mode                // Parse "reboot xxx" command,
				                               // Identify button and loader flash mode, recovery
				charge_display                 // U-Boot charging
				rockchip_show_logo             // Display boot logo
				soc_clk_dump                   // Print clk tree
				rk_board_late_init             // __weak, implemented by each specific platform
			run_main_loop                      // [Enter command line mode, or execute boot command]
```

## Memory Layout

U-Boot is loaded by the previous loader to the `CONFIG_SYS_TEXT_BASE` address. During initialization, it determines the total memory capacity of the current system. On 32-bit platforms, it considers a maximum of 4GB available (but does not affect kernel capacity recognition). On 64-bit platforms, all memory is considered available. Then, through a series of reserve_xxx() interfaces, it reserves needed memory from the end of memory towards the front, and finally relocates itself to a segment of reserved space. The overall memory usage layout is as follows, taking ARM64 as an example (normal case):

| Name      | Start Addr Offset | Size                  | Usage                | Secure |
| --------- | :---------------- | :-------------------- | :------------------- | ------ |
| ATF       | 0x00000000        | 1M                    | ARM Trusted Firmware | Yes    |
| SHM       | 0x00100000        | 1M                    | SHM, Pstore          | No     |
| OP-TEE    | 0x08400000        | 2M~30M                | Refer to TEE dev manual | Yes    |
| FDT       | fdt_addr_r        | -                     | kernel dtb           | No     |
| KERNEL    | kernel_addr_r     | -                     | kernel image         | No     |
| RAMDISK   | ramdisk_addr_r    | -                     | ramdisk image        | No     |
| ......    | -                 | -                     | -                    | -      |
| FASTBOOT  | -                 | -                     | Fastboot buffer      | No     |
| ......    | -                 | -                     | -                    |        |
| SP        | -                 | -                     | stack                | No     |
| FDT       | -                 | sizeof(dtb)           | U-Boot dtb           | No     |
| GD        | -                 | sizeof(gd)            | -                    | No     |
| Board     | -                 | sizeof(bd_t)          | -                    | No     |
| MALLOC    | -                 | CONFIG_SYS_MALLOC_LEN | System heap space    | No     |
| U-Boot    | -                 | sizeof(mon)           | u-boot image         | No     |
| Video FB  | -                 | fb size               | 32M                  | No     |
| TLB Table | RAM_TOP-64K       | 32K                   | MMU page table       | No     |

> The `Start Addr Offset` column in the table above represents the address offset from the DDR base.
>
> The Fastboot address and size are determined by configuration: CONFIG_FASTBOOT_BUF_ADDR, CONFIG_FASTBOOT_BUF_SIZE.

- Video FB/U-Boot/Malloc/Board/Gd/Fdt/Sp are allocated from top to bottom according to actual requirements.
- 64-bit platform: ATF is required for ARMv8, OP-TEE is optional; 32-bit platform: only OP-TEE.
- kernel fdt/kernel/ramdisk are firmware addresses that U-Boot needs to load, defined by ```ENV_MEM_LAYOUT_SETTINGS```.
- The buffer address and size required for Fastboot are defined in defconfig.
- The space occupied by OP-TEE depends on actual requirements, maximum 30M; on RK1808/RK3308, OP-TEE is placed at a low address, not at 0x8400000.

## Storage Layout

The storage layout of the RK Linux solution is as follows. The Android solution differs from the Linux platform only in the definitions of boot/rootfs, but is otherwise similar and can be used as reference.

![Default_storage_map](./Rockchip_Developer_Guide_UBoot_Nextdev/Default_storage_map.png)

> Image source: http://opensource.rock-chips.com/wiki_Partitions

## Kernel-DTB

Native U-Boot only supports using its own DTB. The RK platform adds support for the kernel DTB mechanism, i.e., using the kernel DTB to initialize peripherals. The main purpose is to accommodate peripheral board-level differences, such as power, clock, display, etc.

The functions of the two:

- U-Boot DTB: Responsible for initializing storage, serial port, and other devices.
- Kernel DTB: Responsible for initializing devices other than storage and serial port.

U-Boot initialization first uses the U-Boot DTB to complete storage and serial port initialization, then loads the Kernel DTB from storage and switches to this DTB to continue initializing other peripherals. The kernel DTB code is implemented in the function: `init_kernel_dtb()`.

Developers generally do not need to modify the U-Boot DTB (unless changing the serial port). The defconfig used in SDK releases for each platform already enables the kernel DTB mechanism. Therefore, for DTS modifications to peripherals, users should modify the kernel DTB.

**About U-Boot DTB:**

DTS directory:

```
./arch/arm/dts/
```

After enabling the kernel DTB mechanism: During compilation, nodes with `u-boot,dm-pre-reloc` and `u-boot,dm-spl` attributes in the U-Boot DTS are filtered out. Based on this, properties specified by `CONFIG_OF_SPL_REMOVE_PROPS` in defconfig are further removed, ultimately generating the u-boot.dtb file which is appended to the end of u-boot.bin.

After compiling U-Boot, users can check the DTB content using the `fdtdump` command:

```
fdtdump ./u-boot.dtb | less
```

> For more information, refer to the Advanced Principles chapter.

## Aliases

Some special aliases in U-Boot differ from those defined in the kernel DTS.

eMMC/SD are collectively referred to as mmc devices in U-Boot, distinguished by numbers 0 and 1; SD has higher boot priority than eMMC.

```c
mmc1: indicates sd
mmc0: indicates emmc
```

## Stacktrace

Native U-Boot does not support the call stack backtracking mechanism. The RK platform has added this feature. There are currently three ways to trigger call stack printing:

- Automatically triggered when the system crashes.
- User actively calls `dump_stack()`.
- Enabling `CONFIG_ROCKCHIP_DEBUGGER`.

For example, system abort:

```c
"Synchronous Abort" handler, esr 0x96000010

// Reason for abort, pc, lr, sp
* Reason:        Exception from a Data abort, from current exception level
* PC         =   000000000028f430
* LR         =   00000000002608d0
* SP         =   00000000f3dceb30

...

// Focus on PC and LR
Call trace:
  PC:   [< 0028f430 >]
  LR:   [< 002608d0 >]

// Function call relationship
Stack:
        [< 0028f430 >]
        [< 0028da24 >]
        [< 00211600 >]
        [< 002117b0 >]
        [< 00202910 >]
        [< 00202aa8 >]
        [< 0027698c >]
        [< 002151ec >]
        [< 00201b2c >]

// Guide users to convert the above call stack information
Copy info from "Call trace..." to a file(eg. dump.txt), and run
command in your U-Boot project: ./scripts/stacktrace.sh dump.txt
```

According to the above instructions, copy the call stack information to any txt file (e.g., dump.txt) and execute the following command:

```c
cjh@Ubuntu:~/u-boot$ ./scripts/stacktrace.sh dump.txt

// Symbol table source
SYMBOL File: ./u-boot.sym

// Key listing of PC and LR corresponding code locations
Call trace:
 PC:   [< 0028f430 >]  strncpy+0xc/0x20      ./lib/string.c:98
 LR:   [< 002608d0 >]  on_serialno+0x10/0x1c ./drivers/usb/gadget/g_dnl.c:217

// After conversion, get the real function name
Stack:
       [< 0028f430 >]  strncpy+0xc/0x20
       [< 0028da24 >]  hdelete_r+0xcc/0xf0
       [< 00211600 >]  _do_env_set.isra.0+0x70/0x1b8
       [< 002117b0 >]  env_set+0x3c/0x58
       [< 00202910 >]  rockchip_set_serialno+0x54/0x140
       [< 00202aa8 >]  board_late_init+0x5c/0xa0
       [< 0027698c >]  initcall_run_list+0x58/0x94
       [< 002151ec >]  board_init_r+0x20/0x24
       [< 00201b2c >]  relocation_return+0x4/0x0
```

**Precautions:**

- There are three conversion commands. Please refer to the instructions after the call stack printout to determine which one to use.

  ```c
  ./scripts/stacktrace.sh ./dump.txt        // Parse call stack information from U-Boot
  ./scripts/stacktrace.sh ./dump.txt tpl    // Parse call stack information from tpl
  ./scripts/stacktrace.sh ./dump.txt spl    // Parse call stack information from spl
  ```

  > When executing this command, **the firmware on the current machine must match the current code environment for it to be meaningful!** Otherwise, incorrect conversion results will be obtained.

## ATAGS Parameter Passing

The boot flow on the RK platform:

```
BOOTROM => ddr-bin => Miniloader => TRUST => U-BOOT => KERNEL
```

Configuration information can be passed between firmware levels on the RK platform via the ATAGS mechanism.

- Scope: ddr-bin, miniloader, trust, U-Boot, excluding Kernel.
- Content passed: Serial port configuration, storage type, memory occupied by ATF and OP-TEE, ddr capacity, etc.

Code implementation:

```
./arch/arm/include/asm/arch-rockchip/rk_atags.h
./arch/arm/mach-rockchip/rk_atags.c
```

## U-Boot Firmware

U-Boot and trust on the RK platform have two firmware formats: RK format and FIT format, booted by Miniloader and SPL respectively. Currently, Rockchip's released SDK uses RV1126 as the dividing point. Platforms starting from RV1126 use the FIT format, while earlier platforms use the RK format.

- RK Format

  Rockchip's custom firmware format. U-Boot and trust are packaged as uboot.img and trust.img respectively. As follows:

  The magic of uboot.img and 32-bit trust.img image files is "LOADER"

  ```c
  00000000  4c 4f 41 44 45 52 20 20  00 00 00 00 00 00 00 00  |LOADER  ........|
  00000010  00 00 20 00 78 d0 0f 00  06 99 c2 a8 20 00 00 00  |.. .x....... ...|
  00000020  09 8a b0 e1 89 7a c2 89  0d e8 da ef 86 3e f2 24  |.....z.......>.$|
  ```

  The magic of 64-bit trust.img image files is "BL3X"

  ```c
  00000000  42 4c 33 58 00 01 00 00  23 00 00 00 f8 00 04 00  |BL3X....#.......|
  00000010  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
  ```

- FIT Format

  A highly flexible firmware format supported by U-Boot mainline. U-Boot, trust, and mcu firmware are packaged together as uboot.img.

  The magic of the uboot.img image file is "d0 0d fe ed". Use the command `fdtdump uboot.img` to view the firmware header.

  ```c
  00000000  d0 0d fe ed 00 00 06 00  00 00 00 58 00 00 04 c4  |...........X....|
  00000010  00 00 00 28 00 00 00 11  00 00 00 10 00 00 00 00  |...(............|
  ```

  > For more information about FIT, please refer to the FIT chapter.

- Backup Packaging

  To handle situations like power loss during OTA upgrades that may cause firmware corruption, uboot.img and trust.img are usually packaged with multiple backups.

  | Firmware             | Single Copy Size | Copies |
  | ------------------- | ---------------- | ------ |
  | RK uboot.img        | 1MB              | 4      |
  | RK 32-bit trust.img | 1MB              | 4      |
  | RK 64-bit trust.img | 2MB              | 2      |
  | FIT uboot.img       | 2MB              | 2      |

  > From the above table, the default size of both uboot.img and trust.img is 4MB.

  How to modify the single copy size and number of copies:

  - RK format: Append parameters to the compile command. For example: `--sz-uboot 2048 1` and `--sz-trust 4096 1` means uboot.img single copy 2M, packaged as 1 copy; trust.img single copy 4M, packaged as 1 copy.
  - FIT format: Change configuration parameters: CONFIG_SPL_FIT_IMAGE_KB and CONFIG_SPL_FIT_IMAGE_MULTIPLE. They represent the single copy size (unit: KB) and the number of copies, respectively.

## Kernel Firmware

U-Boot on the RK platform supports booting three formats of kernel firmware:

- RK Format

  The magic of the image file is "KRNL":

  ```
  00000000   4B 52 4E 4C  42 97 0F 00  1F 8B 08 00  00 00 00 00  KRNL..y.........
  00000010   00 03 A4 BC  0B 78 53 55  D6 37 BE 4F  4E D2 A4 69  .....xSU.7.ON..i
  ```

  kernel.img = kernel;

  resource.img = dtb + logo.bmp + logo_kernel.bmp;

  boot.img = ramdisk;

  recovery.img = ramdisk(for recovery);

- Android Format

  The magic of the image file is "ANDROID!":

  ```
  00000000   41 4E 44 52  4F 49 44 21  24 10 74 00  00 80 40 60  ANDROID!$.t...@`
  00000010   F9 31 CD 00  00 00 00 62  00 00 00 00  00 00 F0 60  .1.....b.......`
  ```

  boot.img = kernel + ramdisk + resource + `\<dtb\>`;

  recovery.img = kernel + ramdisk(for recovery) + resource + `\<recovery_dtbo\>` + `\<dtb\>`;

  > Note: recovery_dtbo: a new image added since Android-9.0; dtb: a new image added since Android-10.0.

- Distro Format

  A common firmware packaging format for open-source Linux: packages ramdisk, dtb, and kernel into one image. This image usually exists in some filesystem format, such as ext2, ext4, fat, etc. U-Boot needs to access its content through the filesystem. For more information, refer to:

  ```
  ./doc/README.distro
  ./include/config_distro_defaults.h
  ./include/config_distro_bootcmd.h
  ```

- Boot priority: android > rk > distro.

  Boot priority definition:

  ```c
  #define RKIMG_BOOTCOMMAND \
      "boot_android ${devtype} ${devnum};" \
      "bootrkp;" \
      "run distro_bootcmd;"
  ```

## Shortcut Keys

The RK platform provides serial port key combinations to trigger events for debugging and flashing (if it doesn't trigger, try a few more times; invalid when secure-boot is enabled). **Press and hold during boot:**

- ctrl+c: Enter U-Boot command line mode.
- ctrl+d: Enter loader flash mode.
- ctrl+b: Enter maskrom flash mode.
- ctrl+f: Enter fastboot mode.
- ctrl+m: Print bidram/system information.
- ctrl+i: Enable kernel initcall_debug.
- ctrl+p: Print cmdline information.
- ctrl+s: Enter U-Boot command line after "Starting kernel...".

## MMU-Cache

The RK platform enables MMU, Dcache, and Icache by default. MMU uses 1:1 linear mapping, and Dcache uses write-back strategy. Related interfaces:

```c
// Icache interfaces:
void icache_enable (void);
void icache_disable (void);
void invalidate_icache_all(void);

// Dcache interfaces:
void dcache_disable (void);
void dcache_enable(void);
void flush_dcache_range(unsigned long start, unsigned long stop);
void flush_cache(unsigned long start, unsigned long size);
void flush_dcache_all(void);
void invalidate_dcache_range(unsigned long start, unsigned long stop);
void invalidate_dcache_all(void);
// Remap Dcache attributes for a memory region
void mmu_set_region_dcache_behaviour(phys_addr_t start, size_t size,
                                     enum dcache_option option)
```

## Kernel Decompression

- On 64-bit platforms, Image is typically burned and loaded by U-Boot to the target run address. However, RK platform U-Boot can also support decompressing 64-bit LZ4 format compressed kernels. Users must enable:

  ```
  CONFIG_LZ4=y
  ```

  The pre- and post-decompression addresses of the 64-bit LZ4 compressed kernel must be defined in the `rkxxx_common.h` file for each platform:

  ```c
  #define ENV_MEM_LAYOUT_SETTINGS \
      "scriptaddr=0x00500000\0" \
      "pxefile_addr_r=0x00600000\0" \
      "fdt_addr_r=0x01f00000\0" \
      "kernel_addr_no_bl32_r=0x00280000\0" \
      "kernel_addr_r=0x00680000\0" \        // LZ4 decompressed kernel address
      "kernel_addr_c=0x02480000\0" \        // LZ4 compressed kernel address
      "ramdisk_addr_r=0x04000000\0"
  ```

- On 32-bit platforms, zImage is typically burned and loaded by U-Boot to the `kernel_addr_r` address, then self-decompressed by the kernel. However, RK platform U-Boot can also support Image format, loaded by U-Boot to the target run address.

  Currently, the `rkxxx_common.h` file for each platform only defines `kernel_addr_r` without `kernel_addr_c`. However, users do not need to change the configuration; U-Boot will determine whether it is zImage or Image and dynamically handle these two addresses. But users must disable:

  ```
  CONFIG_SKIP_RELOCATE_UBOOT
  ```

  32-bit kernel load address definition:

  ```c
  #define ENV_MEM_LAYOUT_SETTINGS \
      "scriptaddr=0x60000000\0" \
      "pxefile_addr_r=0x60100000\0" \
      "fdt_addr_r=0x68300000\0" \
      "kernel_addr_r=0x62008000\0" \       // zImage compressed kernel address
      "ramdisk_addr_r=0x6a200000\0"
  ```

## bidram/sysmem

U-Boot can use all system memory and reserves memory needed by the system from high addresses to low addresses. After reservation, there is usually still a large amount of remaining memory. U-Boot has no mechanism to manage this space, so the RK platform introduced bidram and sysmem memory block mechanisms to manage this memory.

Thus, together with the existing malloc management mechanism of U-Boot, the RK platform manages all system memory through sysmem + bidram + malloc, preventing issues like memory conflicts.

```c
low-addr                                                                    high-addr
|-----------------------------------------------------------|-----------------|
|             no management                                 | system used     |
|-----------------------------------------------------------|-----------------|
0x0                                                                          N GB
```

- bidram: Manages memory blocks that are unavailable and need to be removed during U-Boot and kernel phases, such as space occupied by ATF and OP-TEE.
- sysmem: Manages memory blocks that are visible and available to the kernel, such as space occupied by fdt, ramdisk, kernel, fastboot.

Related code:

```
./lib/sysmem.c
./lib/bidram.c
./include/memblk.h
./arch/arm/mach-rockchip/memblk.c
```

The following is the memory management information table for bidram and sysmem, which is dumped when memory block initialization or allocation is abnormal. A brief introduction is given below.

bidram memory information table:

```c
bidram_dump_all:
    --------------------------------------------------------------------
    // <1> This shows the total ddr capacity information obtained by U-Boot from the previous loader, totaling 2GB
    memory.rgn[0].addr     = 0x00000000 - 0x80000000 (size: 0x80000000)

    memory.total           = 0x80000000 (2048 MiB. 0 KiB)
    --------------------------------------------------------------------
    // <2> This shows the reserved firmware memory information, which is not visible to the kernel
    reserved.rgn[0].name   = "ATF"
                   .addr   = 0x00000000 - 0x00100000 (size: 0x00100000)
    reserved.rgn[1].name   = "SHM"
                   .addr   = 0x00100000 - 0x00200000 (size: 0x00100000)
    reserved.rgn[2].name   = "OP-TEE"
                   .addr   = 0x08400000 - 0x0a200000 (size: 0x01e00000)

    reserved.total         = 0x02000000 (32 MiB. 0 KiB)
    --------------------------------------------------------------------
    // <3> This is the core algorithm's organization of the reservation information from <2>, e.g., merging adjacent blocks
    LMB.reserved[0].addr   = 0x00000000 - 0x00200000 (size: 0x00200000)
    LMB.reserved[1].addr   = 0x08400000 - 0x0a200000 (size: 0x01e00000)

    reserved.core.total    = 0x02000000 (32 MiB. 0 KiB)
    --------------------------------------------------------------------
```

sysmem memory information table:

```c
sysmem_dump_all:
    --------------------------------------------------------------------
    // <1> This is the total memory capacity manageable by sysmem, i.e., the available ddr capacity outside bidram<3>, visible to the kernel.
    memory.rgn[0].addr     = 0x00200000 - 0x08400000 (size: 0x08200000)
    memory.rgn[1].addr     = 0x0a200000 - 0x80000000 (size: 0x75e00000)

    memory.total           = 0x7e000000 (2016 MiB. 0 KiB)
    --------------------------------------------------------------------
    // <2> This shows the memory block information allocated by each firmware
    allocated.rgn[0].name  = "U-Boot"
                    .addr  = 0x71dd6140 - 0x80000000 (size: 0x0e229ec0)
    allocated.rgn[1].name  = "STACK"      <Overflow!> // Indicates stack overflow
                    .addr  = 0x71bd6140 - 0x71dd6140 (size: 0x00200000)
    allocated.rgn[2].name  = "FDT"
                    .addr  = 0x08300000 - 0x08316204 (size: 0x00016204)
    allocated.rgn[3].name  = "KERNEL"     <Overflow!> // Indicates memory block overflow
                    .addr  = 0x00280000 - 0x014ce204 (size: 0x0124e204)
    allocated.rgn[4].name  = "RAMDISK"
                    .addr  = 0x0a200000 - 0x0a3e6804 (size: 0x001e6804)
    // <3> malloc_r/f size
    malloc_r: 192 MiB, malloc_f: 16 KiB

    allocated.total        = 0x0f874acc (248 MiB. 466 KiB)
    --------------------------------------------------------------------
    // <4> This is the core algorithm's organization of the information from <2>, showing the occupied memory block information
    LMB.reserved[0].addr   = 0x00280000 - 0x014ce204 (size: 0x0124e204)
    LMB.reserved[1].addr   = 0x08300000 - 0x08316204 (size: 0x00016204)
    LMB.reserved[2].addr   = 0x0a200000 - 0x0a3e6804 (size: 0x001e6804)
    LMB.reserved[3].addr   = 0x71bd6140 - 0x80000000 (size: 0x0e429ec0)

    reserved.core.total    = 0x0f874acc (248 MiB. 466 KiB)
    --------------------------------------------------------------------
```

Common error prints:

```c
// Expected memory is already occupied by other firmware, memory overlap exists. This indicates unreasonable memory block usage planning in the current system.
Sysmem Error: "KERNEL" (0x00200000 - 0x02200000) alloc is overlap with existence "RAMDISK" (0x00100000 - 0x01200000)

// Expected memory cannot be allocated for some special reason (analyze sysmem and bidram information)
Sysmem Error: Failed to alloc "KERNEL" expect at 0x00200000 - 0x02200000 but at 0x00400000 - 0x0420000

// The starting address of the space managed by sysmem is 0x200000, so space starting at 0x100000 cannot be allocated.
Sysmem Error: Failed to alloc "KERNEL" at 0x00100000 - 0x02200000

// Duplicate allocation of "RAMDISK" memory block
Sysmem Error: Failed to double alloc for existence "RAMDISK"
```

## Partition Table

U-Boot on the RK platform supports two partition table formats: RK parameter format (old) and standard GPT format (new). When both partition table formats exist on the machine, the GPT partition table is used first. Whether GPT or RK parameter, the partition table file used for flashing is called parameter.txt. Users can confirm whether it is GPT through the "TYPE: GPT" attribute.

```c
FIRMWARE_VER:8.1
MACHINE_MODEL:RK3399
MACHINE_ID:007
MANUFACTURER: RK3399
MAGIC: 0x5041524B
ATAG: 0x00200800
MACHINE: 3399
CHECK_MASK: 0x80
PWR_HLD: 0,0,A,0,1
TYPE: GPT               // Currently GPT format partition table, otherwise RK parameter
CMDLINE:mtdparts=rk29xxnand:0x00002000@0x00004000(uboot),0x00002000@0x00006000(trust),0
x00002000@0x00008000(misc),0x00008000@0x0000a000(resource),0x00010000@0x00012000(kernel
),0x00010000@0x00022000(boot),0x00020000@0x00032000(recovery),0x00038000@0x00052000(bac
kup),0x00002000@0x0008a000(security),0x00100000@0x0008c000(cache),0x00500000@0x0018c000
(system),0x00008000@0x0068c000(metadata),0x00100000@0x00694000(vendor),0x00100000@0x007
96000(oem),0x00000400@0x00896000(frp),-@0x00896400(userdata:grow)
```

## HW-ID DTB

U-Boot on the RK platform can filter and load a DTB matching the hardware state from multiple DTB files based on GPIO or ADC hardware status.

> For more information, refer to the System Module chapter.

## make.sh

make.sh is not only a compilation script but also a packaging and debugging tool. It can be used for disassembly and firmware packaging.

```c
// Help command
./make.sh --help

// Firmware packaging functions
./make.sh trust              // Package trust
./make.sh loader             // Package loader
./make.sh trust <ini-file>   // Package trust with specified ini file
./make.sh loader <ini-file>  // Package loader with specified ini file
./make.sh spl                // Use tpl+spl to replace ddr and miniloader, package as loader
./make.sh spl-s              // Use spl to replace miniloader, package as loader
./make.sh itb                // Package u-boot.itb (64-bit platforms only support ATF and U-Boot packaging, not OP-TEE)
./make.sh env                // Generate fw_printenv tool

// Disassembly functions
./make.sh elf-[x] [type]     // Disassembly: use -[x] parameter, [type] optionally selects SPL or TPL disassembly
./make.sh elf                // Disassemble u-boot file, default uses -D parameter
./make.sh elf-S              // Disassemble u-boot file, use -S parameter
./make.sh elf-d              // Disassemble u-boot file, use -d parameter
./make.sh elf spl            // Disassemble tpl/u-boot-tpl file, default uses -D parameter
./make.sh elf tpl            // Disassemble spl/u-boot-tpl file, default uses -D parameter
./make.sh <addr>             // Need addr corresponding function name and code location
./make.sh map                // Open u-boot.map
./make.sh sym                // Open u-boot.sym
```

## Vendor Storage

U-Boot on the RK platform provides a Vendor storage area for users to save SN, MAC, and other information. Storage offsets are as follows (see vendor.c for details):

```c
#define EMMC_VENDOR_PART_OFFSET		(1024 * 7)
/* --- Spi Nand/SLC/MLC large capacity case define --- */
#define NAND_VENDOR_PART_OFFSET		0
/* --- Spi/Spi Nand/SLC/MLC small capacity case define --- */
#define	FLASH_VENDOR_PART_OFFSET	8
......
```

Users generally do not need to pay attention to or modify storage offsets, only the read/write interfaces:

```c
int vendor_storage_read(u16 id, void *pbuf, u16 size)
int vendor_storage_write(u16 id, void *pbuf, u16 size)
```

## AMP

U-Boot on the RK platform supports AMP (Asymmetric Multi-Processing) firmware booting.

> For more information, refer to the Driver Module chapter.

## SD/USB Drive

U-Boot on the RK platform supports firmware booting or upgrading from SD/USB drives. Among them:

- SD boot/upgrade is supported from the bootrom level.
- USB drive boot/upgrade is supported from the U-Boot level.

> For more information, refer to the System Module chapter.

## SysReset

- U-Boot reset, like kernel reset, ultimately needs to be completed in trust.
- U-Boot command line mode can support the same reboot xxx command as the kernel (depends on the definition in kernel dts).

## Interrupt

Native U-Boot code does not fully support interrupts. The RK platform has improved this function, supporting GIC-V2 and GIC-V3.

> For more information, refer to the Driver Module chapter.

## Timestamp

Kernel print information comes with timestamps by default, making it convenient for users to pay attention to time. U-Boot print information does not have timestamps by default. If users need them, they can enable the configuration `CONFIG_BOOTSTAGE_PRINTF_TIMESTAMP`. As follows:

```
[    0.324987] U-Boot 2017.09-00019-g9b55ed0-dirty (Dec 26 2019 - 14:31:44 +0800)

[    0.327215] Model: Evb-RK3288
[    0.330039] PreSerial: 2
[    0.332526] DRAM:  2 GiB
[    0.336454] Relocation Offset: 00000000, fdt: 7be22c38
[    0.346981] Using default environment

[    0.351075] dwmmc@ff0c0000: 1, dwmmc@ff0f0000: 0
[    0.394136] Bootdev(atags): mmc 0
[    0.394272] MMC0: High Speed, 52Mhz
[    0.395276] PartType: EFI
[    0.400347] Android 9.0, Build 2019.6
[    0.402070] boot mode: None
[    0.405213] Found DTB in boot part
[    0.407833] DTB: rk-kernel.dtb
[    0.418211] ANDROID: fdt overlay OK
[    0.432128] I2c0 speed: 400000Hz
[    0.435916] PMIC:  RK808
[    0.439113] vdd_arm 1100000 uV
[    0.444148] vdd_gpu 1100000 uV
......

[    1.005018] ## Booting Android Image at 0x02007800 ...
[    1.009917] Kernel load addr 0x02008000 size 8062 KiB
[    1.014981] ## Flattened Device Tree blob at 08300000
[    1.019970]    Booting using the fdt blob at 0x8300000
[    1.025185]    XIP Kernel Image ... OK
[    1.035469]   'reserved-memory' dma-unusable@fe000000: addr=fe000000 size=1000000
[    1.037448]   'reserved-memory' ramoops@00000000: addr=8000000 size=f0000
[    1.044412]    Using Device Tree in place at 08300000, end 08316ed1
[    1.064363] Adding bank: 0x00000000 - 0x08400000 (size: 0x08400000)
[    1.064976] Adding bank: 0x09200000 - 0x80000000 (size: 0x76e00000)
[    1.075259] Total: 812.613 ms

[    1.075279] Starting kernel ...
......:
```

> Note: The timestamp prints relative time, not absolute time.

## Relocation

U-Boot will relocate itself to an address at the end of memory after completing the board_f.c flow. The specific address depends on the U-Boot memory layout. RK's U-Boot defaults:

- 32-bit platform: No relocation when `CONFIG_SKIP_RELOCATE_UBOOT=y`, otherwise relocation is performed.
- 64-bit platform performs relocation.

## Total Time

U-Boot prints the total time for this phase by default after initialization:

```c
## Booting Android Image at 0x02007800 ...
Kernel load addr 0x02008000 size 8062 KiB
## Flattened Device Tree blob at 08300000
   Booting using the fdt blob at 0x8300000
   XIP Kernel Image ... OK
  'reserved-memory' dma-unusable@fe000000: addr=fe000000 size=1000000
  'reserved-memory' ramoops@00000000: addr=8000000 size=f0000
   Using Device Tree in place at 08300000, end 08316ed1
Adding bank: 0x00000000 - 0x08400000 (size: 0x08400000)
Adding bank: 0x09200000 - 0x80000000 (size: 0x76e00000)
Total: 812.613 ms    // Total time for U-Boot phase

Starting kernel ...
```

## Detailed Time

Users can enable `lib/initcall.c`'s `debug()` and `DEBUG` to get the following process timing. Function addresses can be obtained through disassembly with ./make.sh.

```c
U-Boot 2017.09-00019-g9b55ed0-dirty (Dec 26 2019 - 14:45:33 +0800)

                                         #    5212 us # 137.868 ms
initcall: 0020de1f
                                         #       1 us # 142.636 ms
initcall: 0020e015
Model: Evb-RK3288
                                         #    1646 us # 149. 48 ms
initcall: 0020dd61
PreSerial: 2
                                         #    1213 us # 155. 28 ms
initcall: 0020ddcd
DRAM:                                    #     606 us # 160.401 ms
initcall: 00203719
              // The 187 us below is the time consumed by the call to initcall: 00203719
              // The 165.355 ms below is the U-Boot boot time up to initcall: 00203719
                                         #     187 us # 165.355 ms
initcall: 0020de81
                                         #       2 us # 169.938 ms
initcall: 0020dc29
                                         #       1 us # 174.703 ms
initcall: 0020dc3d
                                         #       1 us # 179.469 ms
initcall: 0020ddad
                                         #       2 us # 184.237 ms
initcall: 0020de27
                                         #       1 us # 189.  2 ms
......
```

## fuse.programmed

The RK platform facilitates debugging of secure-boot functionality by only requiring firmware signing to enable secure-boot mode (without burning efuse/otp). Miniloader will append cmdline through U-Boot to the kernel, indicating whether the current efuse/otp has been burned:

- `"fuse.programmed=1"`: secure-boot enabled, efuse/otp has been burned.
- `"fuse.programmed=0"`: secure-boot enabled, efuse/otp has not been burned.
- No `fuse.programmed` in cmdline: secure-boot not enabled (Miniloader does not pass it), or Miniloader is too old to support passing it.

U-Boot needs to include the following commit:

```
83c9bd4 board: rockchip: pass fuse programmed state to kernel
```
