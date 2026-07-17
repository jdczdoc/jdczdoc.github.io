---
title: Ubuntu Virtual Machine
sidebar_label: Ubuntu Virtual Machine
sidebar_position: 2
description: Obtain an Ubuntu ISO and create a VM suitable for Rockchip and Allwinner SDK builds.
---

# Ubuntu Virtual Machine

The verified build server runs **Ubuntu 20.04.5 LTS amd64**. Ubuntu 20.04.x 64-bit Desktop is therefore recommended when environment compatibility is the priority.

## Obtain the Ubuntu ISO

The internal file share may provide multiple Ubuntu ISO images.

![Ubuntu ISO images on the file share](./images/11-ubuntu-images.png)

An ISO may also be downloaded from an official or trusted mirror. Select the required release and download a file containing:

```text
desktop-amd64.iso
```

![Ubuntu mirror release index](./images/12-ubuntu-mirror-index.png)

![Selecting the Ubuntu Desktop ISO](./images/13-ubuntu-iso-download.png)

## Create the Virtual Machine

Click “Create a New Virtual Machine” and select the typical configuration.

![Selecting the typical VM configuration](./images/14-new-vm-typical.png)

Select the downloaded Ubuntu ISO.

![Selecting the Ubuntu ISO](./images/15-select-iso.png)

Enter a normal user name and password. Do not use the root account for daily builds.

![Entering Ubuntu account information](./images/16-easy-install.png)

Set the VM name and storage location. Large SDK trees should be placed on a sufficiently large SSD.

![Setting the VM name and location](./images/17-vm-name-location.png)

## Recommended Resources

The original 4 GB RAM and 40 GB disk screenshots demonstrate the UI only. They are **not sufficient for complete Android, Rockchip, or Allwinner SDK builds**.

| Resource | Minimum Recommendation | Preferred |
| --- | ---: | ---: |
| CPU | 4 cores / 8 threads | 8 cores / 16 threads or more |
| RAM | 16 GB | 32 GB or more |
| System and tools disk | 100 GB | 150 GB or more |
| SDK workspace | 300 GB | 500 GB to 1 TB |
| Storage | SATA SSD | NVMe SSD |

Allocate enough virtual disk space.

![Setting virtual disk capacity](./images/18-virtual-disk-size.png)

Open the hardware customization page.

![Customizing VM hardware](./images/19-customize-hardware.png)

Do not assign all host memory to the VM.

![Configuring VM memory](./images/20-memory-settings.png)

Use Windows Task Manager to inspect the host resources.

![Inspecting host resources](./images/21-host-task-manager.png)

The configured virtual CPU count must not exceed the host's available logical processors.

![Configuring virtual CPUs](./images/22-cpu-settings.png)

## Network Mode

Bridged mode is useful when other LAN devices must access the VM directly. NAT is usually simpler when only outbound Internet access is required.

![Configuring bridged networking](./images/23-bridged-network.png)

Confirm the VM configuration and start installation.

![VM configuration summary](./images/24-vm-summary.png)

![Ubuntu installation screen](./images/25-ubuntu-installation.png)

Log in using the normal account created during setup.

![Ubuntu login screen](./images/26-ubuntu-login.png)
