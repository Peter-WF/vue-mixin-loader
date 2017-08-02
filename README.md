## vue-mixin-loader 

> For auto-import `mixin.less`  in a vue file

- **作者：** Peter-WF

- **描述：** vue mixin.less 自动引入

### 调用方式

```webpack.base.conf.js
module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.(less|vue)$/,
        loader: 'vue-mixin-loader',
        enforce: 'pre',
        options: {
          mixinPath: path.join(commonConfig.resourcePath, "./global/css/mixin/mixin.less")
        }
      }
    ]
  }
}
```
