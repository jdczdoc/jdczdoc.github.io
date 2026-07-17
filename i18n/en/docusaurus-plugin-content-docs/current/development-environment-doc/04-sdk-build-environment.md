---
title: SDK Build Environment
sidebar_label: SDK Build Environment
sidebar_position: 4
description: Environment and packages exported from a verified Rockchip and Allwinner SDK build server.
---

# SDK Build Environment

Because SDK build dependencies vary across platforms, and we currently support many different platforms, this document does not list the dependency requirements for each SDK separately. For platform-specific build dependencies, please refer to the corresponding platform documentation.

Instead, this document provides an environment exported from one of our servers that has been verified to successfully build Rockchip and Allwinner SDKs. It is intended to reproduce the server’s software toolchain and package set, and should not be considered the minimum dependency set for every SDK.

## Verified Server Environment

| Item | Value |
| --- | --- |
| Ubuntu | Ubuntu 20.04.5 LTS |
| Architecture | amd64 |
| Kernel | 5.4.0-216-generic |
| Git | 2.25.1 |
| Python | 3.8.10 |
| Java | OpenJDK 1.8.0_352 |
| GCC | 9.4.0 |
| GNU Make | 4.2.1 |
| Exported package count | 143 |

## Files Included with the Documentation

The following files are stored in the `files/` subdirectory of this document and are delivered with the source package:

```text
files/
├── build-packages.txt
├── build-packages-with-version.txt
├── install-build-packages.sh
└── system-info.txt
```

They are not referenced as website download links, so the documentation does not depend on `static/files` and will not trigger Docusaurus broken-link checks.

From the documentation source tree:

```bash
cd i18n/en/docusaurus-plugin-content-docs/current/development-environment-doc/files
chmod +x install-build-packages.sh
./install-build-packages.sh build-packages.txt
```

## Important Notes

1. The list contains all packages marked as manually installed on the server, not only minimum SDK build dependencies.
2. It includes system and meta packages such as `ubuntu-server`, `linux-generic`, `cloud-init`, and GRUB. Confirm whether these are required before installing them on a desktop VM.
3. Packages such as `nodejs` and `git-lfs` may depend on third-party repositories. Package names alone do not guarantee the same version.
4. Exact-version reproduction requires matching APT repositories and package availability.
5. The JDK version must follow the requirements of the specific Android SDK. The exported server currently uses OpenJDK 8.

## Full Exported Installation Command

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
