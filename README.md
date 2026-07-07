# 九鼎文档

基于 Docusaurus 构建的文档站点，推送至 `main` 分支即由 GitHub Actions 自动构建并部署到 https://doc.9tripod.com

## 环境要求

- Node.js >= 20

利用 `n` 模块升级 node 版本，确保 node 版本 >= 20.0

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
node -v
```
> 查看版本需要切换下终端，以便让新版本 `node` 生效。

## 克隆源码（建议采用 ssh 方式）

```
git clone git@github.com:jdczdoc/jdczdoc.github.io.git
cd jdczdoc.github.io
```

## 常用命令

本项目提供 `Makefile` 封装常用操作：

| 命令 | 说明 |
| --- | --- |
| `make deps` | 安装依赖 |
| `make start` | 启动本地开发服务器（热更新预览） |
| `make build` | 生产构建，输出到 `build/` |
| `make serve` | 构建并在本地预览 |
| `make clean` | 清理构建产物与缓存 |
| `make distclean` | 清理构建产物、缓存与依赖 |
| `make deploy` | 手动触发 GitHub Actions 部署 |

对应底层命令为 `npm install` / `npm start` / `npm run build` / `npm run serve`。

## 本地开发

在本地添加或修改 Markdown 文件后预览：

```
make start
```

## 部署

推送至 `main` 分支会自动触发 GitHub Actions 构建并部署：

```
git add some-markdown-file
git commit -m "[md]add some markdown file"
git push origin main
```

也可手动触发部署：

```
make deploy
```
