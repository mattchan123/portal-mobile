var path = require("path")
module.exports = {
    css: {
      loaderOptions: {
        postcss: {
          plugins: [
            require('postcss-pxtorem')({ // 把px单位换算成rem单位
                    rootValue: 7.5, //通常结合 lib-flexible 设置 rem 基准值,默认用37.5,不然容易出问题
                    selectorBlackList: ['.ignore'],  //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换
                    propList: ['*']
  
            })
          ]
        }
      }
    },
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        // 为生产环境修改配置...
      } else {
        // 为开发环境修改配置...
      }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
              //这个是加上自己的路径，
              //注意：试过不能使用别名路径
              path.resolve(__dirname, "./src/assets/styles/variables.less")
             ]
         }
     }
  }