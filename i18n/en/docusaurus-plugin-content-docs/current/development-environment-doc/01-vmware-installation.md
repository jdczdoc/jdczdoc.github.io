---
title: VMware Installation
sidebar_label: VMware Installation
sidebar_position: 1
description: Install VMware Workstation 17.5.2 on a Windows host.
---

# VMware Installation

This guide uses VMware Workstation 17.5.2 to create an Ubuntu virtual machine on a Windows host. Other VMware Workstation 17.x releases use a similar installation flow.

## Obtain the Installer

### Virtual Machine Tools Download

The VMware installer, Ubuntu images, and related virtual-machine setup tools are available from the following file share:

- Package name: Virtual Machine Tools
- Download: [Baidu Netdisk](https://pan.baidu.com/s/1fBd--CaDgS18s0UzGsW7xw?pwd=m5g6)
- Access code: `m5g6`

These files are used to install VMware, create the Ubuntu virtual machine, and configure the basic development environment.

The internal file share may provide the VMware installer and Ubuntu images. When using another source, obtain the installer from a trusted channel and complete licensing in accordance with the software terms.

![Installer files and Ubuntu images](./images/01-netdisk-files.png)

## Installation Procedure

Run the following installer as Administrator:

```text
VMware-workstation-full-17.5.2-23775571.exe
```

Continue from the welcome page.

![VMware setup wizard](./images/02-vmware-welcome.png)

Review and accept the license agreement.

![Accepting the license agreement](./images/03-vmware-license.png)

Select the installation directory. The default is suitable when the system drive has enough free space.

![Selecting the installation directory](./images/04-vmware-install-location.png)

Choose whether to enable update checks and the customer experience program.

![VMware user-experience options](./images/05-vmware-user-experience.png)

Select the required shortcuts.

![VMware shortcut options](./images/06-vmware-shortcuts.png)

Confirm the settings and start the installation.

![Ready to install VMware](./images/07-vmware-ready-to-install.png)

Wait for the installation to finish.

![VMware installation progress](./images/08-vmware-installing.png)

Finish setup and configure the product using a valid license method.

![VMware installation completed](./images/09-vmware-finish.png)

After startup, VMware Workstation should display its main page.

![VMware Workstation main page](./images/10-vmware-home.png)
