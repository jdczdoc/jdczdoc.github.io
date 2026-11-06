---
sidebar_position: 13
title: Toolchain and application development
description: x881 Toolchain and application development
---

# Toolchain and application development

Prefer Tina packages so the SDK selects the cross-toolchain and manages dependencies, installation and firmware packaging.

```text
openwrt/package/helloworld/
  Makefile
  src/
    Makefile
    main.c
```

## Source and inner Makefile

```c
#include <stdio.h>
int main(void)
{
    puts("Hello World");
    return 0;
}
```

```make
all: helloworld

helloworld: main.o
	$(CC) $(LDFLAGS) main.o -o $@

main.o: main.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f main.o helloworld
```

## Tina package Makefile

```make
include $(TOPDIR)/rules.mk

PKG_NAME:=helloworld
PKG_RELEASE:=1
PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)
include $(INCLUDE_DIR)/package.mk

define Package/helloworld
  SECTION:=utils
  CATEGORY:=Utilities
  TITLE:=Hello World
endef

define Build/Prepare
	mkdir -p $(PKG_BUILD_DIR)
	$(CP) ./src/* $(PKG_BUILD_DIR)/
endef

define Package/helloworld/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/helloworld $(1)/usr/bin/
endef

$(eval $(call BuildPackage,helloworld))

```

Use tabs for Makefile recipes. Select the package under Utilities in `make menuconfig`, build/package and run `helloworld` on the board.

Place preinstalled files in the board busybox-init-base-files tree and include executable dependencies. Install executable startup scripts under its `etc/init.d`; naming controls order, subject to the SDK init mechanism.
