# 指定基础镜像
FROM lrcdocker/node14-pm2-git

# 指定维护者信息
MAINTAINER LRC

# 拷贝初始化文件到容器中
COPY ./initialize.sh /initialize.sh

# 增加可执行权限
RUN chmod +x /initialize.sh

# 暴露端口
EXPOSE 3003 1433

RUN sed -i 's/\r$//' $app/initialize.sh  && \  
        chmod +x $app/initialize.sh

# 当容器启动时部署项目
ENTRYPOINT $app/initialize.sh
