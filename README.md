# 九鼎文档

## 安装

#### 利用n模块，升级node版本，确保node版本>=20.0

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
node -v
```
> 查看版本需要切换下终端，以便让新版本`node`生效。

#### 克隆源码（最好采用ssh方式，方便远程部署）

```
git clone git@github.com:jdczdoc/jdczdoc.github.io.git
```

#### 安装必要的node模块
```
cd jdczdoc.github.io
npm install
```

## 本地开发

在本地添加或修改Markdown文件，使用如下命令进行预览。
```bash
npm run start
```

确认效果后，采用`git commit`指令进行提交。
```bash
git add some-markdown-file
git commit -m "[md]add some markdown file"
git push origin main
```

## 本地构建（非必要，可直接远程部署）

```
npm run build
```

此命令可将静态内容生成到 build目录中，生成的内容可直接托管。

## 远程部署

SSH方式:

```
npm run deploy
```

HTTPS方式:

```
GIT_USER=<Your GitHub Username> npm run deploy
```

