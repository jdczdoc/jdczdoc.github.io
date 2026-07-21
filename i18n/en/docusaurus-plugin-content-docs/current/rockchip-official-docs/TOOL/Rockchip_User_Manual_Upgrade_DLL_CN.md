# RKUpgrade Secondary Development Library User Manual

ID: RK-SM-YF-179

Release Version: V1.0.1

Date: 2021-05-19

Security Level: □Top-Secret   □Secret   □Internal   ■Public

**DISCLAIMER**

This document is provided "as is". Rockchip Electronics Co., Ltd. ("the Company") makes no express or implied representations or warranties regarding the accuracy, reliability, completeness, merchantability, fitness for a particular purpose, or non-infringement of any statements, information, or content in this document. This document is for reference only as a usage guide.

Due to product version upgrades or other reasons, this document may be updated or modified from time to time without any notice.

**Trademark Statement**

"Rockchip", "Rockchip", and "Rockchip" are registered trademarks of the Company and belong to the Company.

All other registered trademarks or trademarks mentioned in this document are owned by their respective owners.

**Copyright © 2021 Rockchip Electronics Co., Ltd.**

Beyond the scope of fair use, without the written permission of the Company, no individual or entity may extract, copy, or distribute any part or all of the content of this document in any form.

Rockchip Electronics Co., Ltd.

Address:     No. 18, Area A, Software Park, Tongpan Road, Fuzhou, Fujian Province

Website:     [www.rock-chips.com](http://www.rock-chips.com)

Customer Service Phone: +86-4007-700-590

Customer Service Fax: +86-591-83951833

Customer Service Email: [fae@rock-chips.com](mailto:fae@rock-chips.com)

---

**Preface**

**Overview**

The RKUpgrade.dll secondary development library is developed based on VS2008 and supports Ansi and Unicode encoding. It provides interfaces for reading/writing serial numbers, Bluetooth addresses, MAC addresses, etc., making it convenient for customers to customize tools.

**Supported Products**

| **Chip Name**             |
| -------------------- |
| RK3399 RK3368        |
| RK3288 RK3228 RK3229 |
| RK3188 RK3126 RK3128 |
| RK3066               |

**Intended Audience**

   Tool Development Engineers

**Revision History**

| **Date** | **Version** | **Author** | **Description** |
| -------- | -------- | ---------- | ------------ |
| V1.0.0   | Liu Yi     | 2017-11-06 | Initial draft |
| V1.0.1   | Huang Ying | 2021-05-19 | Format modification |

---

**Table of Contents**

[TOC]

---

## Secondary Development Steps

### Importing Library and Header Files

**Using VS2008 development environment, follow these steps:**
Step 1: Include the header file (#include "RKUpgradeDll.h")
Step 2: Import the library file (#pragma comment(lib,"RKUpgrade.lib"))
**Using other Windows development platforms, follow these steps:**
Step 1: Refer to RKUpgradeDll.h to declare the data types and functions to be used
Step 2: Call the system's LoadLibrary function to load RKUpgrade.dll
Step 3: Call the system's GetProcAddress function to import the required function pointers

### Initializing the RKUpgrade Library

Step 1: Initialize the INIT_DEV_INFO variable to all zeros. Set the bScan4FsUsb member and uiRockusbTimeout member according to actual conditions.
Step 2: Initialize the InitLogInfo variable, set whether to record logs and the log save location.
Step 3: Initialize the InitCallbackInfo variable to all zeros.
Step 4: Call the RK_Initialize function.
Note: Call during program initialization.

### Scanning Devices

Step 1: Call the RK_ScanDevice function to scan for devices.
Step 2: Check the nDeviceCounts parameter: 0 means no device found, 1 means 1 device found, >1 means multiple devices found (only the first device is operated by default).
Step 3: Check the bExistMsc and bExistAdb parameters. If bExistMsc is true, call RK_SwitchToRockusb to switch to rockusb before read/write operations. If bExistAdb is true, call the external tool adb.exe to execute adb reboot loader first.

### Operating the Device (Using Write Serial Number as Example)

Step 1: Call the RK_WriteSN function.

### Deinitializing the RKUpgrade.dll Library

Step 1: Call the RK_Uninitialize function.

## Operation Interfaces

### Reading and Writing Custom Data

Description: Custom data is stored in sector 3 of IDBLOCK, with 512 bytes of space.
Functions: RK_WriteCustomData and RK_ReadCustomData
Parameters:
`pCustomData`: Allocate a 512-byte buffer
`nCustomDataOffset`: Offset of custom data within the 512-byte space
`nCustomDataLen`: Length of custom data, in bytes
**Note: After successful reading, the entire sector3 data is returned. Use nCustomDataOffset to offset to the custom data.**
**The data written is nCustomDataLen bytes starting from pCustomData + nCustomDataOffset.**

### Reading and Writing Serial Number

Description: The serial number is at positions 2-61 in sector3. Positions 0-1 are the serial number length.
Functions: RK_WriteSN and RK_ReadSN
Parameters:
`pSN`: Serial number, string data
`nSNLen`: Serial number length, in bytes

### Reading and Writing MAC Address

Description: The MAC address is at positions 506-511 in sector3. Every 4 bits represents one character, representing a 12-character MAC address.
Functions: RK_WriteMAC and RK_ReadMAC
Parameters:
`pMac`: Address converted from 6 bytes
`nMacLen`: Length is 6

### Reading and Writing WiFi MAC Address

Description: The WiFi MAC address is at positions 445-450 in sector3. Every 4 bits represents one character, representing a 12-character MAC address.
Functions: RK_WriteWifi and RK_ReadWifi
Parameters:
`pWifi`: Address converted from 6 bytes
`nWifiLen`: Length is 6

### Reading and Writing Bluetooth Address

Description: The Bluetooth address is at positions 499-504 in sector3. Every 4 bits represents one character, representing a 12-character MAC address.
Functions: RK_WriteBT and RK_ReadBT
Parameters:
`pBT`: Address converted from 6 bytes
`nBTLen`: Length is 6

### Clearing Sector3 Data

Description: Clear all 512 bytes in sector3 to zero.
Function: RK_ClearAllInfo

### Reading and Writing Vendor Data

Description: There are two Vendor areas, vendor0 and vendor1, each with 504 bytes. Data in this area is not lost after firmware upgrade and is readable and writable from the device side.
Functions: RK_WriteVendorInfo and RK_ReadVendorInfo
Parameters:
`pVendorBuffer`: Buffer in units of 504 bytes
`sectorOffset`: Specify vendor number, only 0 or 1
`sectorCount`: Number of vendor sectors to read/write

## Reading and Writing Provision Data

Description: The Provision area is approximately 1-1.5M in size. Access each read/write item by ID. Each item's data cannot exceed 62K. Currently, only new chip solutions have this interface. Please confirm with the system engineer before use.
Functions: RK_WriteProvisioningData and RK_ReadProvisioningData
Parameters:
`pDataBuffer`: Access buffer for the data item
`nBufferSize`: Size of the data item buffer, in bytes
`nID`: Data item ID

### Reading and Writing KeyHash Data

Description: There is an efuse storage space inside the chip, with an area that stores the public key hash. This space can only be written once. After writing the public key hash, the chip's security mechanism is activated.
Functions: RK_WriteKeyHashToEfuse and RK_ReadKeyHashFromEfuse
Parameters:
`pKeyHash`: 32-byte memory space
`usKeyHashSize`: Length of the read keyhash
**Note: Before calling RK_WriteKeyHashToEfuse, call RK_SetFirmware to set the signed update.img firmware.**

### Reading and Writing Efuse Data

Description: There is an efuse storage space inside the chip. Apart from the occupied space, some space is open for customer use. This space can only be written once. The specific available space varies for each chip. Please confirm with the system engineer before use.
Functions: RK_WriteDataToEfuse and RK_ReadDataFromEfuse
Parameters:
`pBuffer`: Memory space, each bit occupies one byte, maximum read/write of 512 bits
`usPos`: Starting bit position for reading/writing
`usWriteSize`: Number of bits to write
`usReadSize`: Number of bits to read

### Rebooting Rockusb Device

Description: Reboot the rockusb device.
Function: RK_ResetRockusb
Parameters:
`Subcode`: 0 for normal reboot, 3 for reboot into maskrom

## Frequently Asked Questions

### Log File Shows 'ERROR: CheckUsbDevice->Usb type mismatch'

Cause: All operations except efuse-related ones need to be performed in loader state.
Note: Both maskrom and loader belong to rockusb, but operations in maskrom are limited. After scanning for Rockusb devices via RK_ScanDevice, check the pUsbtypeArray parameter of the RK_GetDeviceInfo function. A value of 1 means maskrom, a value of 2 means loader.

### Log File Shows 'ERROR: WriteSN-->SN Size is Wrong'

Cause: SN exceeds 60 bytes.

### Log File Shows 'ERROR: WriteSN-->CheckIDBData failed'

Cause: IDBLock data is corrupted and verification failed. Need to re-upgrade firmware before writing again.

### Log File Shows 'ERROR: TestDevice-->RKU_TestDeviceReady failed, Total is zero'

Cause: The device security mechanism is enabled, unable to read/write sector3. Send the signed firmware to our system engineer to generate an authorization certificate, then call the RK_OpenChannel function before all read/write operations.

### Log File Shows 'ERROR: PrepareIDB-->No Found 1st Flash CS'

Cause: The loader reports that no flash was found. Please confirm with the system engineer whether the flash model is in the supported list. Check hardware for cold solder joints on the flash.

### RK_ScanDevice Cannot Find Device

Cause:

1. First open the device manager and confirm if there is a rockusb device.
2. If a rockusb device exists, check if bScan4FsUsb was set to TRUE when initializing the library.
3. If there is an unknown device, check its hardware ID. Our rockusb device VID is 0x2207, PID is 0x3xxx, 0x2xxx, 0x1xxx.
4. If it falls within the above range, use the DriverAssistant tool to install the driver.
5. Unknown device (failed to get descriptor), please update to the latest product loader.
