---
sidebar_position: 13
title: 工具链与应用开发
description: x881 工具链与应用开发
---

# 工具链与应用开发

优先通过 Tina 软件包机制集成应用，让 SDK 统一选择交叉工具链、依赖、安装路径和固件打包。

```text
openwrt/package/helloworld/
  Makefile
  src/
    Makefile
    main.c
```

## 源码与内部 Makefile

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

## Tina 软件包 Makefile

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

Makefile 命令行使用 Tab 缩进。进入 `make menuconfig` 选择 Utilities 下的软件包，完整构建并打包后在板端运行 `helloworld`。

预置文件放入当前方案的 `busybox-init-base-files`，可执行文件的依赖库也需打包。开机脚本放入对应 `etc/init.d`，赋予可执行权限；脚本命名决定启动顺序，修改前确认当前 SDK 的 init 机制。
