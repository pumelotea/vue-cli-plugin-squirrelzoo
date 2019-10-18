# vue-cli-plugin-squirrelzoo
squirrelzoo的H5移动端项目创建插件，适用于vue-cli3脚手架。

### 引导
1. 该预设模板会只适用于创建新项目，请勿在已有项目中添加该插件，因为该插件会删除并替换一些文件
2. 确保你的开发环境中已经安装git，该模板会自动创建git版本库，而且该模板在构建的时候会自动把版本信息插入构建结果中

### 使用preset创建项目
```
vue create --preset pumelotea/vue-cli-plugin-squirrelzoo my-h5-app
```

### 不使用preset创建项目
```
vue create my-h5-app //进入手动模式，不需要选择任何配置
vue add squirrelzoo //该插件会替换掉并注入文件
```

### 特性
1. 生产环境自动移除console
2. 构建信息（版本号，git hash等）自动编入构建结果,插入`index.html`
3. 构建后自动打包为zip
4. 预设编译命令`build-prod`,`build-test`
