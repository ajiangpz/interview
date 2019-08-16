# 1.缓存
- 输入url后如果浏览器是否已经有这个资源，如果没有则发起请求，如果有则读取浏览器的缓存，判断缓存是否过期，如果没有，不请求服务器，否则，重新请求该资源。
- 判断缓存是否过期的方法
    1. http1.0提供了expires，表示缓存超过这个时间就过期了，是绝对日期
    2. http1.1增加了cache-control，其中有一个max-age属性表示相对用户本地的时间，例如3600s，是相对时间

# 2.浏览器解析url地址
- 获取协议，主机，端口，路径
# 3.浏览器组装一个HTTP GET请求报文
- 报文结构：
# 4.浏览器获取主机地址（即域名对应的IP地址）
- 从浏览器获取
- 从本机获取
- 从hosts文件获取
- 从路由器获取
- 从DNS查询中获取
# 5.与目标的地址，端口建立TCP链接，三次握手
# 6.TCP建立后发送HTTP请求
# 7.服务器接收请求并解析，将请求转化到服务程序
# 8.服务器检查HTTP缓存验证信息，如果验证缓存新鲜，则返回304状态码
# 9.服务程序处理请求，准备HTTP响应报文
# 10.服务器将响应报文通过TCP链接发送给浏览器
# 11.浏览器接收HTTP响应，通过四次握手关闭TCP链接
# 12.浏览器检查响应的状态码，如果资源可以缓存，缓存资源，对响应进行解码
# 13.解析HTML文档，构建DOM树，CSSOM树，执行js脚本，没有严格的先后顺序
- 构建DOM树
1.tokenizing:根据html规范将字符流解析为标记
2.lexing：词法分析将标记转化为对象并定义规则
3.DOM constructor：根据HTML标记关系将对象组成DOM树
- 解析过程中遇到图片，js文件，样式表启动下载
- 构建CSSOM树
1.tokenizing:字符流转换为标记流
2.node：根据标记创建节点
3.CSSOM：节点创建CSSOM
- 根据DOM树和CSSOM树构建渲染树
1.从DOM树的根节点开始寻找所有可见节点，（script,meta，display:none都是不可见节点）
2.对于每一个节点，找到恰当的CSSOM规则并应用
3.发布可视节点的内容和样式
- js解析
1. 浏览器创建document对象解析Html，将解析到的元素和文本添加到文档中，此时document.readystate为loading    
2. 普通的script标签，不管是外部还是行内都会停止html文档的解析，同步执行js。同步脚本通常用来定义函数和事件处理函数，可以使用document.write(),可以操作script标签前的文档内容
3. 设置了async的标签，下载脚本并继续解析文档，当js下载完后会尽快执行，此时它可以操作那些已经添加到document的元素。异步脚本禁止使用document.write()
4. 当 文档解析完成，document.ready的状态变为interactive
5. 所有的defer脚本会按照在文档中出现的顺序执行，延迟脚本能访问整个文档树，禁止使用document.write()
6. 浏览器在Document对象上出发DomContentLoaded事件
7. 此时文档解析完成，浏览器等待一些图片加载完成，并且所有异步脚本下载完成和执行，document.readystate变成complete，触发window.onload事件

