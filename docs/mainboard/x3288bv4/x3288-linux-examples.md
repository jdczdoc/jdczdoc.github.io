---
sidebar_position: 12
title: Linux 开发示例
description: X3288 Linux 底层开发、应用开发与 Ubuntu 系统说明
---

# Linux 开发示例

本页保留常用 Linux 命令和应用开发示例，删除其他产品介绍。

## linux底层开发示例

### 播放mp3

注：登录账户为root 123456

将存放有mp3文件的TF卡插到主板的任意卡槽，使用如下命令挂载TF卡：

```bash
cd  /
mkdir  sdcard
mount  /dev/mmcblk1p1  /sdcard
cd  sdcard
```

使用如下命令播放：

```bash
./mplayer  *.avi
./mplayer  *.mp3
```

连接串口后，可以通过PC键盘的0或9调节音量。也可以使用madplayer播放音乐。

### 在后台运行程序

在上一节中给出了播放音乐的示例，但是这时候mplayer已经占据了终端控制台，在音乐播放完之前，我们无法再使用终端控制台了。又比如我们开发一款产品时，就需要在启动文件系统后运行一个应用程序，如果运行了一个程序，终端控制台就被占用了，那将极大的限制我们的功能。为止，我们可以将程序放在后台运行。使用方法很简单，我们只需在执行的指令后面添加一个”&amp;”即可。如播放音乐时使用如下命令：

```bash
./mplayer  *.mp3  &
```

### 中止程序的运行

中止程序的运行有多种方式，最直接的方式就是直接按ctrl+c。如前面我们正在播放一段音频文件，我们可以按ctrl+c退出程序。但是如果程序在后台运行，那么我们按ctrl+c就不管用了。这时我们可以使用kill命令。

kill+PID

kill+文件名

### 屏幕抓图

本文档中的各个图片，都是采用gsnap这个工具进行抓图的。进入QT图形界面后，我们能在LCD上看到丰富多彩的人机交互界面。通过gsnap可以抓取到图形界面精彩的瞬间。在控制台终端输入如下命令：

gsnap test_pic.jpg /dev/fb0

这时在当前目录将会保存test_pic.jpg图像文件。详细的gsnap移植步骤在后面会有详细描述。

### 挂载TF卡

进入QT图形界面后，在命令终端会有控制台出现，这时可以通过控制台查看文件系统的内容。将TF卡插到主板的任意卡槽，串口终端会有如下提示：

这时在文件系统的/dev目录将会自动生成一个名叫mmcblk1p1的块设备文件。它就是对应的TF卡的设备文件，使用如下命令挂载TF卡到/sdcard目录：

```bash
mkdir  /sdcard
mount  /dev/mmcblk1p1  /sdcard
```

查看/scard目录下的内容，即是我们TF卡中的内容，如下图所示：

### 挂载U盘

进入QT图形界面后，在命令终端会有控制台出现，这时可以通过控制台查看文件系统的内容。插入U盘后，串口终端会有如下提示：

这时在文件系统的/dev目录将会自动生成一个名叫sda4的块设备文件。它就是对应的U盘设备文件，使用如下命令挂载U盘到/udisk目录：

```bash
mkdir  /udisk
mount  /dev/sda4  /udisk
```

查看/udisk目录下的内容，即是我们U盘中的内容，如下图所示：

### 保存系统时钟

Linux可以使用date指令更改时间日期。例如：

```bash
date  -s  201607211433  #设置为2016年7月21日14：33分
hwclock  -w  #把刚设置的时间存入RTC寄存器
hwclock  -s   #恢复linux系统时钟为RTC寄存器值，一般将该指令放在rcS中开机自动执行。
```

### 掉电保存数据到flash

由于本系统采用了ext4文件系统，因此可以很方便的保存数据，确保掉电后数据不丢失。如我们从U盘中拷备一首歌曲到/root目录：

```bash
cp /udisk/muyangqu.mp3 /
```

重启主板，我们发现在root目录仍然存在刚才拷备的这首歌曲，说明掉电后数据并没有丢失。

### 设置开机自动运行程序

借助启动脚本可以设置各种程序开机后自动运行，这点很类似于WINDOWS的Autobat自动批处理文件。启动脚本位于/etc/init.d/rcS中，我们可以将自己想要开机运行的程序或是开机执行的指令放在rcS里面。比如我们想制作一个简单的开机音乐，我们就完全可以在rcS中添加如下语句：

```bash
./mplayer  start.mp3  &
```

这时，开机后就会播放名叫start.mp3的音乐了。注意start.mp3需要在当前执行指令所在目录。

### 查看主板内存信息

X3288主板默认配置2GB DDR3 SDRAM，在uboot启动时，打印信息上会给出RAM大小信息：

在进入文件系统后，可以通过cat命令查询Linux系统分配到的SDRAM大小。执行如下命令：

```bash
cat  /proc/meminfo
```

## linux应用开发示例

本手册给出的所有应用程序全部在九鼎创展x3288主板上运行，这里仅给出了一些比较基础，常用的应用程序，旨在为用户打开Linux世界奇妙的大门，用户定能举一反三，编写出属于自己的更加丰富完美的程序。

声明：以下所有应用程序全部为九鼎创展科技有限公司原创作品，所有内容全经我们严格测试，建议用户按照下面步骤动手编译一遍，以增强自己的理解，不推荐直接使用我们提供好的文件。另外，敬请商业人士勿侵犯版权。

### Hello World

第一步：生成可执行文件

在x3288_lollipop目录新建app-ex目录，在app-ex目录新建hello目录，然后在hello目录下新建hello.c和makefile两个文件：

vim hello.c

这是一个最基础的应用程序，如果我们声明了交叉编译工具，可以直接敲入命令进行编译（由于主板环境缺少c库，编译时需要加上-static静态编译）：

arm-linux-gcc-4.4.3 -o hello hello.c -static

说明：由于主板文件系统缺少标准函数库，编译时加上-static选项；使用的编译器为arm-linux-gcc-4.4.3。

编译完成后，在当前目录会生成hello可执行文件，我们可以使用file命令查询执行文件是否为ARM体系文件：

第二步：将可执行文件下载到主板运行

比较常用的方式有以下四种：

- 通过串口和sz/rz工具

- 复制到存储媒介，如SD卡，U盘等

- 通过NFS挂载文件系统，这时不用将可执行文件拷备到主板了，推荐调试使用这种方式！

- 通过ftp传输

这里介绍第二种方法，以TF卡为例，其他方法请读者自行尝试。

将生成的hello文件拷备到TF卡，再将TF卡插入主板的TF卡接口，将TF卡mount到/mnt目录：

```bash
cd  /
mount  /dev/mmcblk1p1  /mnt
```

进入mnt目录，可以看到刚才拷贝的hello文件了：

运行hello：

```bash
./hello
```

打印信息如下：

表明，程序已经成功运行。

前面编译文件我们需要通过手敲命令执行，我们可以通过编写makefile来代替手敲的动作。

在hello目录下新建makefile文件：

vim makefile

直接在hello目录下敲make就可以生成hello文件。运行的效果和前面的完全相同。

### 数学函数库调用

建立程序编译路径：

```bash
mkdir  math
cd  math
```

vim math.c

编辑如下内容：

#include &lt;stdio.h&gt;

#include &lt;stdlib.h&gt;

#include &lt;math.h&gt;

int main(void)

&#123;

double a=9.0;

printf("sqrt(%f)=%f\n",a,sqrt(a));

return 0;

&#125;

编辑makefile文件，内容如下：

OBJS=math.o

LDFLAGS = -lm -static

CC = yourtoolchainpath/bin/arm-linux-gcc-4.4.3

math:$&#123;OBJS&#125;

$&#123;CC&#125; -o $@ $^ $(LDFLAGS)

clean:

rm -f math *.o

执行make，将生成的可执行文件math下载到主板上运行，如下图所示：

### 多线程编程示例

建立程序编译路径：

```bash
mkdir  thread
cd  thread
```

vim thread.c

编辑如下内容：

#include&lt;stddef.h&gt;

#include&lt;stdio.h&gt;

#include&lt;unistd.h&gt;

#include"pthread.h"

void function1(void);

void function2(void);

int func_flag=0;

pthread_mutex_t mutex;

main()

&#123;

pthread_t reader;

pthread_mutex_init(&amp;mutex,NULL);

pthread_create(&amp;reader,NULL,(void*)&amp;function1,NULL);

function2();

&#125;

void function2(void)

&#123;

while(1)

&#123;

pthread_mutex_lock(&amp;mutex);

if(func_flag==0)

&#123;

printf("excute function2.\n");

func_flag=1;

&#125;

pthread_mutex_unlock(&amp;mutex);

&#125;

&#125;

void function1(void)

&#123;

while(1)

&#123;

pthread_mutex_lock(&amp;mutex);

if(func_flag==1)

&#123;

printf("excute function1.\n");

func_flag=0;

&#125;

pthread_mutex_unlock(&amp;mutex);

&#125;

&#125;

编辑makefile文件，内容如下：

OBJS=thread.o

LDFLAGS = -lpthread -static

CC = yourtoolchainpath/bin/arm-linux-gcc-4.4.3

thread:$&#123;OBJS&#125;

$&#123;CC&#125; -o $@ $^ $(LDFLAGS)

clean:

rm -f thread *.o

执行make，将生成的可执行文件thread下载到主板上运行，如下图所示：

### 多进程编程示例

在Linux下通用调用fork函数创建新的进程。调用fork时，系统将产生一个与当前进程相同的进程。它与原有的进程具有相同的数据，连接关系和在程序同一处执行时的连续性。通常将原有的进程叫父进程，新创建的进程叫子进程。

fork调用将分两次返回，从父子进程返回。进程创建语法如下：

#include &lt;unistd.h&gt;

pid_t pid;

pid = fork();

如果pid返回0，表示说明从子进程返回，否则从父进程返回，此时返回的是进程的ID号。我们可以通过getpid()函数来获得进程的ID号。

首先建立程序编译目录：

```bash
mkdir  process
cd  process
```

vim process.c

编辑如下内容：

#include&lt;stdio.h&gt;

#include&lt;unistd.h&gt;

#include&lt;sys/types.h&gt;

main()

&#123;

pid_t pid;

pid=fork();

if (pid&lt;0)

&#123;

printf("fork is error!\n");

return 1;

&#125;

else if (pid == 0)

&#123;

while (1)

&#123;

printf("the child process is running now.pid=%d\n",getpid());

sleep(1);//linux延时函数,延时1秒

&#125;

&#125;

else

&#123;

while (1)

&#123;

printf("the perent process is running now.pid=%d\n",getpid());

sleep(1);

&#125;

&#125;

return 0;

&#125;

编辑makefile文件，内容如下：

OBJS=process.o

LDFLAGS = -lpthread -static

CC = yourtoolchainpath/bin/arm-linux-gcc-4.4.3

process:$&#123;OBJS&#125;

$&#123;CC&#125; -o $@ $^ $(LDFLAGS)

clean:

rm -f process *.o

执行make编译，将生成的可执行文件下载到主板运行，仔细观察串口监控信息：

### makefile编程示例

在上面的很多测试程序实例中，我们都编写了一些简单的makefile文件。下面我们介绍makefile的基本的语法。

makefile就好比批处理文件，里面写了一系列集合，当运行make编译时，便会按makefile提供的命令及顺序完成编译。

这里我们给出三个文件：main.c，func.c，func.h。主程序在main.c中，在main.c中程序会调用func.c中的函数，func.c中的函数又会用到func.h中定义的变量。

main.c文件内容如下：

#include "func.h"

extern int fd;

int main(int argc,char **argv)

&#123;

fd = open(DEVICE_NAME,0);//打开设备

if(fd == -1)

&#123;

printf("open device %s error \n",DEVICE_NAME);

return 0;

&#125;

else

&#123;

printf("open device %s ok! \n",DEVICE_NAME);

&#125;

while(1)

&#123;

glint_led();

&#125;

close(fd);

return 0;

&#125;

该文件会调用glint_led ()函数，这个函数在func.c中。func.c的内容如下：

#include "func.h"

void glint_led(void)

&#123;

ioctl(fd,LED_ON);

sleep(1);

ioctl(fd,LED_OFF);

sleep(1);

&#125;

这里仅仅是一个读取按键的函数，供main函数调用。该函数需要用到了一些变量，另外还需要一些头文件支持，这些都存放在func.h中，其内容如下：

#include &lt;stdio.h&gt;

#include &lt;stdlib.h&gt;

#include &lt;unistd.h&gt;

#include &lt;sys/ioctl.h&gt;

#define DEVICE_NAME "/dev/vib"

#define LED_ON 0x11

#define LED_OFF 0x22

int fd;

很明显，这是基于LED测试程序，人为的分成的三个文件。我们的目的不在于分离代码，而在于学习makefile的编写方法。

当不使用makefile时，我们使用如下指令编译：

arm-none-linux-gnueabi-gcc -o mkfile main.c func.c

编译完成后，将会生成可执行文件mkfile。将它下载到主板上运行，和前面的按键测试完全相同。现在我们尝试编写第一个属于自己的makefile:

mkfile:main.o func.o

arm-linux-gcc-4.4.3 -o mkfilemain.o func.o

main.o:main.c

arm-linux-gcc-4.4.3 -c main.c -o main.o

func.o:func.c func.h

arm-linux-gcc-4.4.3 -c func.c -o func.o

clean:

rm -f mkfile *.o

执行make后，编译器会依次编译main.c和func.c文件，生成main.o和func.o文件，最后将这两个.o文件打包到可执行文件mkfile中。这时将mkfile文件下载到主板运行，效果和前面的是一样的。我们可以执行make clean指令清除生成的.o文件和可执行文件。

makefile具有很强大的推理功能，我们完全可以简化上面的代码。优化后的代码如下：

OBJS=main.o func.o

CC=arm-linux-gcc-4.4.3

mkfile:$&#123;OBJS&#125;

$&#123;CC&#125; -o $@ $^

main.o:

func.o:func.h

clean:

rm -f mkfile *.o

可见，这次比上面的完整版要简化多了。前面通过变量OBJS定义了要编译的源文件，变量CC给出了交叉编译工具。$@ 表示目标文件的全称，即mkfile，$^表示所有被依赖的文件，并以空格分开，即main.o func.o。后面的clean为清除指令，执行make clean后会执行 clean后面的指令。需要注意的是，rm指令后面千万不要使用$@符号来表征我们要删除的目标文件，因为这时候$@已经不再表示mkfile了，而表示clean。同样，使用make指令编译，一样能够生成我们需要的目录文件mkfile。

上面的makefile使用了变量以及预定义变量。第一句即定义了变量OBJS，将它赋值为main.o func.o，第二句定义了变量CC，将它赋值为一个交叉编译工具定义。引用变量时，通过$&#123;*&#125;表示，这里*表示前面定义的变量。

上面使用了$@和$^两个预定义变量，GNU make主要有以下七种预定义变量：

对比以上几种编译方式，我们不然发现，其实最简的还是第一种，因为它就一句话就搞定了。那么在makefile中，我们是否也可以精简到只有一句话呢？答案是肯定的。我们继续利用makefile强大的推理功能进行简化，得到如下makefile代码：

OBJS=main.o func.o

CC=arm-linux-gcc-4.4.3

mkfile:$&#123;OBJS&#125;

$&#123;CC&#125; -o $@ $^

clean:

rm -f mkfile *.o

这次，makefile真正编译的代码，就只有上面红色部分一条指令了。和前面比较，不难发现，单独对main.c和func.c两个文件编译的指令已经去掉了。前面我们提到，makefile具有强大的推理功能，我们在生成目标文件mkfile时，makefile会推理出它需要main.c和func.c两个文件，因此它首先就会去编译这两个文件，最后再执行目标文件的生成。因此我们完全可以将它们省去。

这里只是makefile的一点基础，读者可以借助于其他书籍对makefile作更深一层的了解。

### mplayer移植

有两种移植mplayer，第一种方法就是直接下载mplayer源码包，手动配置编译环境，再通过交叉编译环境编译。该方法比较传统，我们有更方便的方法，直接在buildroot中选中mplayer，再make即可，buildroot会自动下载mplayer源码包，自动配置编译环境并编译。

在buildroot的menuconfig配置选项中，进入Target packages-&gt; Audio and video applications选项，选中mplayer，如下图所示：

保存退出，在buildroot下直接make，生成文件系统后更新到主板，mplayer就打包进文件系统了。

### madplayer移植

madplayer的移植方法和mplayer的移植方法完全雷同，直接在buildroot中选中madplayer的选项，再make即可。

### 屏幕抓图工具gsnap移植

说明：以下步骤基于4.3.3的交叉编译工具，读者需修改成x3288对应的交叉编译工具，其他步骤雷同。

屏幕抓图的方法有多种，有不少爱好者自己动手写抓图小程序。这里我们使用JPEG库来处理。具体用到了jpegsrc.v6b.tar.gz和gsnap.tar.gz两个源码包。

一：安装libjpeg

解压jpeg库源码包，进入根目录：

```bash
tar 	zxf 	jpegsrc.v6b.tar.gz
cd  jpeg-6b
```

二：配置编译环境：

```bash
./configure --prefix=/usr/local/arm/4.3.3/arm-none-linux-gnueabi
```

--exec-prefix=/usr/local/arm/4.3.3/arm-none-linux-gnueabi --enable-shared --enable-static

三：修改makefile

CC = gcc 修改为 CC = arm-none-linux-gnueabi-gcc

AR = ar ac 修改为 AR = arm-none-linux-gnueabi-ar ac

AR2=ranlib修改为 AR2= arm-none-linux-gnueabi-ranlib

确保—exec-prefix已经设置为/usr/local/arm/4.3.3/arm-none-linux-gnueabi，如果没有，手动设置。

四：在/usr/local/arm/4.3.3/arm-none-linux-gnueabi下建立man/man1目录：

```bash
cd  /usr/local/arm/4.3.3/arm-none-linux-gnueabi
mkdir  -p  man/man1
```

五：编译，安装

```bash
make
make  install
```

这时，在/usr/local/arm/4.3.3/arm-none-linux-gnueabi/man/man1目录下将会生成以下文件：

cjpeg.1 djpeg.1 jpegtran.1 rdjpgcom.1 wrjpgcom.1

```bash
在/usr/local/arm/4.3.3/arm-none-linux-gnueabi/lib目录下生成以下文件：
```

libjpeg.a libjpeg.la libjpeg.so libjpeg.so.62 libjpeg.so.62.0.0

六：解压gsnap

```bash
tar  zxf  gsnap.tar.gz
cd  gsnap
```

七：修改makefile

all:

arm-none-linux-gnueabi-gcc -g gsnap.c -ljpeg -o gsnap

clean:

rm -f gsnap

八：编译，得到可执行文件gsnap

```bash
make
```

九：将jpeg库文件复制到文件系统的lib目录，注意保持文件的链接属性

```bash
cp  -a  libjpeg.s*  “文件系统路径”/lib
```

十：将可执行文件gsnap复制到文件系统的sbin目录

```bash
cp  gsnap  “文件系统路径”/sbin
```

十一：重新制作文件系统，下载到主板上，使用如下命令即可截获图形界面：

gsnap 1.jpg /dev/fb0

同样可以将图片保持为bmp,png等其他格式。

## 安装ubuntu操作系统

x3288主板支持ubuntu14.04操作系统。

### 安装ubuntu源码包

默认我们已经将ubuntu的源码包整合到android4.4源码包中了，将android4.4的源码包解压到PC机的用户根目录，即完成了源码包的安装。

### 编译uboot

ubuntu的源码包和android4.4的源码包共用同一个uboot，如果已经编译过android4.4的uboot，以下步骤可省略。

执行如下指令编译uboot：

```bash
./mk	 	-u
```

编译完成后，将会在out/release目录下生成uboot映像文件。

### 编译内核

ubuntu的源码包和android4.4的源码包共用同一个内核，如果已经编译过android4.4的内核，以下步骤可省略。

执行如下指令编译内核：

```bash
./mk		-k
```

编译完成后，将会在out/release目录下生成内核映像文件。

### 生成统一固件update_ubuntu.img

执行如下指令生成统一ubuntu固件update_ubuntu.img：

```bash
./mk	 	-us或./mk		-su
```

编译完成后，将会在out/release目录下生成ubuntu映像文件update_ubuntu.img。

### 烧录固件update_ubuntu.img

烧录ubuntu系统的方法和烧写QT，android固件的方法完全相同，请参考相关章节。

### ubuntu帐户

在x3288开发平台上，默认ubuntu操作系统的用户名如下：
