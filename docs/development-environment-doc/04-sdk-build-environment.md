---
title: SDK 编译环境
sidebar_label: SDK 编译环境
sidebar_position: 4
description: 从可编译 Rockchip 和 Allwinner SDK 的 Ubuntu 服务器导出的环境与软件包列表。
---

# SDK 编译环境

因为在编译不同平台sdk，是有其针对编译依赖，目前平台较多，暂未单独给出sdk的依赖。具体可以去参考一些针对文档。
所以，本文将本司一台已验证能够编译 **Rockchip / Allwinner SDK** 的服务器导出。该环境用于复现服务器的软件工具组合，不代表所有 SDK 的最小依赖集合。

## 已验证服务器环境

| 项目 | 参数 |
| --- | --- |
| Ubuntu | Ubuntu 20.04.5 LTS |
| 架构 | amd64 |
| 内核 | 5.4.0-216-generic |
| Git | 2.25.1 |
| Python | 3.8.10 |
| Java | OpenJDK 1.8.0_352 |
| GCC | 9.4.0 |
| GNU Make | 4.2.1 |
| 导出软件包数量 | 143 |

## 随文附带文件

以下文件已放在当前文档目录的 `files/` 子目录中，随源码包一起交付：

```text
files/
├── build-packages.txt
├── build-packages-with-version.txt
├── install-build-packages.sh
└── system-info.txt
```

这些文件不作为网页下载链接引用，因此不依赖 `static/files`，也不会触发 Docusaurus 的 broken links 检查。

在文档源码目录中可执行：

```bash
cd docs/development-environment-doc/files
chmod +x install-build-packages.sh
./install-build-packages.sh build-packages.txt
```

## 注意事项

1. 此列表包含服务器中标记为手动安装的完整软件包，不只是 SDK 最小编译依赖。
2. 列表中包含 `ubuntu-server`、`linux-generic`、`cloud-init`、GRUB 等系统或元软件包。在桌面虚拟机中安装前应确认是否确实需要。
3. `nodejs`、`git-lfs` 等软件可能来自第三方软件源。仅复制软件包名称不保证安装到服务器中的相同版本。
4. 只有在 APT 软件源一致时，`build-packages-with-version.txt` 中的精确版本才可能完整复现。
5. Android 平台使用的 JDK 版本应以对应 SDK 的构建脚本和官方要求为准；服务器当前默认 Java 为 OpenJDK 8。

## 服务器导出的完整安装命令

### 服务器导出环境说明

导出环境：Ubuntu 20.04.5 LTS

系统架构：amd64

该软件包列表从已验证可编译 Rockchip / Allwinner SDK 的服务器导出。

### Ubuntu 20.04 软件包安装命令

```bash
sudo apt-get update && \
sudo apt-get install -y \
    android-sdk-libsparse-utils \
    apksigner \
    apt-transport-https \
    autoconf \
    automake \
    base-files \
    base-passwd \
    bash \
    bc \
    binfmt-support \
    binwalk \
    bison \
    build-essential \
    bzr \
    ca-certificates \
    ccache \
    chrpath \
    clang \
    cloud-init \
    cmake \
    coreutils \
    cpio \
    curl \
    cvs \
    dash \
    debootstrap \
    device-tree-compiler \
    diffstat \
    diffutils \
    docker.io \
    dos2unix \
    dosfstools \
    dwarves \
    e2fsck-static \
    ecj \
    efibootmgr \
    expect \
    fakeroot \
    ffmpeg \
    findutils \
    flex \
    fontconfig \
    g++ \
    gawk \
    gcc \
    gcc-aarch64-linux-gnu \
    gcc-arm-linux-gnueabihf \
    gdb \
    gdisk \
    genext2fs \
    gettext \
    git \
    git-lfs \
    gnupg \
    gperf \
    grep \
    grub-efi-amd64 \
    grub-efi-amd64-signed \
    gstreamer1.0-tools \
    gzip \
    hostname \
    hwinfo \
    imagemagick \
    init \
    keychain \
    kpartx \
    lib32ncurses-dev \
    lib32stdc++6 \
    lib32z1 \
    lib32z1-dev \
    libarchive-zip-perl \
    libc6-dev-i386 \
    libi2c-dev \
    liblz4-tool \
    libnghttp2-dev \
    libswitch-perl \
    libtool \
    libusb-dev \
    libxml-parser-perl \
    libxml2-utils \
    linux-generic \
    live-build \
    lld \
    lrzsz \
    lz4 \
    lzop \
    m4 \
    make \
    makedev \
    mawk \
    mercurial \
    mtools \
    ncurses-base \
    ncurses-bin \
    net-tools \
    nodejs \
    openssh-server \
    openssl \
    p7zip-full \
    patchelf \
    patchutils \
    pigz \
    pkg-config \
    policycoreutils-python-utils \
    python-crypto \
    python-dev-is-python2 \
    python-is-python2 \
    python-pyelftools \
    python3 \
    python3-nacl \
    python3-pip \
    python3-pyelftools \
    python3-pymacaroons \
    qbrew \
    qemu \
    qemu-user-static \
    quilt \
    ripgrep \
    ruby \
    samba \
    samba-common \
    screen \
    shim-signed \
    ssh \
    sshpass \
    subversion \
    systemtap-sdt-dev \
    sysvinit-utils \
    texinfo \
    tig \
    tree \
    ttf-mscorefonts-installer \
    u-boot-tools \
    ubuntu-minimal \
    ubuntu-server \
    ubuntu-standard \
    unrar \
    unzip \
    wget \
    x11proto-core-dev \
    xsltproc \
    xxd \
    zip
```
