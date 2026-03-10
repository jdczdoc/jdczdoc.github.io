# 九鼎文档

## 安装

### 利用n模块，升级node版本，确保node版本 >= 20.0

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
node -v
```

### 克隆源码（最好采用ssh方式，方便远程部署）

```
git clone git@github.com:jdczdoc/jdczdoc.github.io.git
```

### 安装必要的node模块
```
cd jdczdoc.github.io
npm install
```

## 本地开发

在本地添加或修改相关Markdown文件，然后使用如下命令进行预览。
```bash
npm run start
```

确认效果后，采用`git commit`指令进行提交。
```bash
git add some-markdown-file
git commit -m "[md]add some markdown file"
git push origin main
```

## 本地构建

```
npm run build
```

此命令可将静态内容生成到 build目录中，生成的内容可通过任何静态内容托管服务来提供。

## 远程部署

Using SSH:

```
npm run deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> npm run deploy
```

