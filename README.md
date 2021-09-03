# Express-Restful-Api
Express-Restful-Api

# 安装依赖包
  * **npm install**
# 启动
* **1. npm run test**

* **2.浏览器访问：localhost:3003**

# 制作Docker镜像进行部署
 由于特殊原因，Windows环境下开发完成后，需要在Ubuntu下进行镜像构建。
 
## 项目根目录下增加以下两个文件：
* **1.制作Dockerfile**
    ##### Dockerfile
```
    # FROM node:12
    # WORKDIR /usr/src/app
    # COPY package*.json ./
    # RUN npm install --registry=https://registry.npm.taobao.org
    # COPY . .
    # EXPOSE 3003 1433
    # CMD ["npm", "run", "test"]  
```
* **2.增加.dockerignore文件**
    ##### .dockerignore
```
    # node_modules
    # npm-debug.log
```
* **3.将整个项目源文件（除node_modules）上传至Ubuntu的express-restful-api目录**

* **4.制作image镜像**
    ##### 执行命令
```
    # cd ./express-restful-api
    # docker build -t express-restful-api .
```
* **5.运行容器部署**
    ##### 执行命令
```
    # docker run -p 3003:3003 -p 1433:1433 -d express-restful-api
```
* **6.浏览器访问：localhost:3003**


参考链接：[把一个 Node.js web 应用程序给 Docker 化](https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/)