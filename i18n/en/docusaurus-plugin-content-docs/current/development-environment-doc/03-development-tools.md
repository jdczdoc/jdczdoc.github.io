---
title: Ubuntu Development Tools
sidebar_label: Ubuntu Development Tools
sidebar_position: 3
description: Configure package mirrors, basic tools, SSH, and FileZilla transfer.
---

# Ubuntu Development Tools

## Select a Package Mirror

Ubuntu package downloads may be slow on some networks. Use “Software & Updates” to select a suitable mirror.

![Ubuntu software update prompt](./images/27-software-updater.png)

![Ubuntu application list](./images/28-ubuntu-applications.png)

Open the download-server selector from the Ubuntu Software page.

![Ubuntu software source settings](./images/29-software-sources.png)

![Opening the download-server menu](./images/30-download-server-menu.png)

Select a stable mirror under China and confirm.

![Selecting a China mirror](./images/31-choose-china-server.png)

![Selected package mirror](./images/32-mirror-selected.png)

Refresh the package index:

```bash
sudo apt-get update
```

A full system upgrade is not required just to prepare an SDK build environment. Run it only when appropriate:

```bash
sudo apt-get upgrade
```

Repair dependencies when needed:

```bash
sudo apt-get -f install
```

## Normal User and Root

Perform daily builds as a normal user and use `sudo` for administrative actions. Enabling root login is normally unnecessary.

To set a root password explicitly:

```bash
sudo passwd root
```

![Root password example](./images/33-root-password-example.png)

## Basic Utilities

Install `ifconfig`:

```bash
sudo apt-get install -y net-tools
```

Install Vim:

```bash
sudo apt-get install -y vim
```

![APT package installation example](./images/34-package-install-example.png)

## File Transfer Between Windows and Ubuntu

### Install the SSH Server

```bash
sudo apt-get install -y openssh-server
sudo systemctl enable --now ssh
sudo systemctl status ssh
```

Use the normal Ubuntu account for SFTP. Root SSH login should remain disabled:

```text
PermitRootLogin no
```

![SSH configuration example](./images/36-sshd-config.png)

Restart SSH when required:

```bash
sudo service ssh restart
```

![Restarting SSH](./images/37-restart-ssh.png)

Display the VM IPv4 address:

```bash
ip -4 addr
```

After installing `net-tools`, `ifconfig` may also be used.

![Displaying the VM IP address](./images/38-ifconfig-address.png)

### Use FileZilla

Install FileZilla Client on Windows.

![Installing FileZilla](./images/35-filezilla-installation.png)

Create an SFTP site:

| Item | Value |
| --- | --- |
| Protocol | SFTP - SSH File Transfer Protocol |
| Host | Ubuntu VM IP address |
| Port | 22 |
| Logon type | Normal |
| User | Normal Ubuntu user |
| Password | Password for that user |

![FileZilla Site Manager](./images/39-filezilla-site-manager.png)

![FileZilla SFTP settings](./images/40-filezilla-sftp-config.png)

After connecting, transfer files by dragging or double-clicking.

![FileZilla connected to Ubuntu](./images/41-filezilla-connected.png)
