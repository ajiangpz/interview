### content
- 减少http请求
1. 为什么要减少：因为http传输是浏览器与服务器通信中耗时最长的过程，近80%时间。
2. 怎么减少
- 减少dns查询
- 避免重定向
- 使用ajax可缓存
- 非必需组件延时加载
- 未来所需组件预加载
- 减少dom数量
- 将资源放到不同的域名下，提高并行下载（同时从一个域名只能下载7个）
- 减少iframe数量
- 不要404
### server 
- 使用cdn加速
- 添加 Expires和cache-control
- 对组件使用Gzip压缩
- 配置etag
- Flush Buffer Early
- Ajax 使用get请求
- 避免使用src的img标签
### cookie
- 减小cookie的大小
- 引入资源的域名不能包含cookie
### css方面
- 将样式表放在页面顶部
> html解析的是分别构建DOM树和CSSOM树，如果把样式表放在后面，那么DOM树一般先于CSSOM树生成，而且下载CSS需要时间，这样会造成白屏的时间过长。如果将样式表放在最后，可能会出现HTML渲染出来却没有样式的情况，所以要放在前面
- 不使用css表达式
- 不使用@import
### javascript方面
- 将脚本放到页面底部
- 使用外部脚本
- 压缩js和css
- 减少dom访问
- 事件委托
### 图片
- 不要拉伸拉伸图片
```
<img src="" width="100" height="100">
```
- 优化css雪碧图
- 保证favicon.ico小并且可以缓存
### 移动方面
- 保证图片小于25k