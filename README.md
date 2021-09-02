# Express-Restful-Api
Express-Restful-Api

# 安装依赖包
  * **npm install**
# 启动
* **1. npm run test**

* **2.浏览器访问：localhost:3003**

# Windows环境下开发完成后，使用Docker部署至Ubuntu，项目根目录下增加以下文件：
* **1.制作Dockerfile**

  ### Dockerfile

    # FROM node:12
    # WORKDIR /usr/src/app
    # COPY package*.json ./
    # RUN npm install --registry=https://registry.npm.taobao.org
    # COPY . .
    # EXPOSE 3003 1433
    # CMD ["npm", "run", "test"]  

* **2.增加.dockerignore文件**

  ### .dockerignore文件内容

    # node_modules
    # npm-debug.log

* **3.将整个项目源文件（除node_modules）上传至Ubuntu的express-restful-api目录**

* **4.制作image镜像**

  ### 执行命令
    # cd ./express-restful-api
    # docker build -t express-restful-api .

* **5.运行容器部署**

  ### 执行命令
    # docker run -p 3003:3003 -p 1433:1433 -d express-restful-api

* **6.浏览器访问：localhost:3003**