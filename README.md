

# vue3项目搭建模板


## 功能点

- 1、less 语法支持

- 2、prefixer css兼容前缀自动补充

- 3、vw 移动端适配

- 4、eslint 代码检测

- 5、pre-commit 提交信息格式检测

- 6、ts支持

- 7、vant 组件库引入

- 8、搭建开发、测试、线上三套环境


其中1、2、4、6、8 都是vue-cli构建时直接选择对应配置即可，其余功能点自行补充

## 项目启动

> 指定mode为dev，选择.env.dev配置文件，进行开发环境配置

```
npm run serve

```

## 打包测试环境

> 指定mode为test，选择.env.test配置文件，进行测试环境配置

```
npm run build:test
```

## 打包生产环境

> 指定mode为prod，选择.env.prod配置文件，进行生产环境配置

```
npm run build:prod
```