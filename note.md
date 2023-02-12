### pm2管理项目

```shell
# 安装pm2
pnpm install pm2 -g
# 启动项目
pm2 start app.js --name myapp # myapp为项目(任务)名称
# 查看项目状态
pm2 list
# 停止项目
pm2 stop myapp
# 重启项目
pm2 restart myapp
# 删除项目
pm2 delete myapp
# 查看项目日志
pm2 logs myapp
```