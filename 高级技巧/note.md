## 惰性加载函数
- 惰性加载函数是什么

    懒惰地加载函数，对于函数中的条件判断只执行一次，生成另外一个函数。而这个函数就是我们需要的函数，以后这需要调用这个函数，就不需要条件判断了。

- 惰性加载函数的作用是什么  

    减少条件判断，提高性能。  

- 惰性加载函数的实现  
    - 在函数定义时实现  

        ```
        var addEvent=(function(){
            if(window.addEventListener){
                return function(el,type,fun){
                    console.log('no-ie')
                    el.addEventListener(type,fun,false)
                }
            }
            else if(window.attachEvent){
                return function(el,type,fun){
                    console.log("ie")
                    el.attachEvent("on"+type,fun,false);
                }
            }else{
                return function(el,type,fun){
                    console.log('normal')
                    el["on"+type]=fun;
                }
            }
        })()
        ```

    - 在第一次调用的时候实现
        ```
        var addEventFirstInvoke=function(el,type,fun){
            if(window.addEventListener){
                addEventFirstInvoke=function(el,type,fun){
                    el.addEventListener(type,fun,false);
                }
            }
            else if(window.attachEvent){
                addEventFirstInvoke=function(el,type,fun){
                    el.attachEvent("on"+type,fun,false);
                }
            }else{
                addEventFirstInvoke=function(el,type,fun){
                    el["on"+type]=fun;
                }
            }
            return  addEventFirstInvoke(el,type,fun);
        }
        ```