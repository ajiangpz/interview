function createFunction(){
    var result=[]
    for(var i=0;i<10;i++){
        result[i]=function(){
            console.log(this)
            console.log(i);
        }
        result[i]()
    }
    return result
}
var arr=createFunction();
arr[5]();
arr[4]();

function createFunction1(){
    var result=[]
    for(var i=0;i<10;i++){
        result[i]=(function(count){
            return function(){
                console.log(this)
                console.log(count);
            }
        })(i)
        //在立即执行函数中定义需要返回的函数，是其作用域指针指向立即执行函数的活动对象，
        //即count，由于函数传参是按值传递的，所以count保留的是每一次i的值，而不是最后的值。
        //因此返回的函数被调用时，就会在作用域中寻找count，因而可以打印每一次的i值。
        //实际上，返回的函数已经和最外面的函数没有关系了。
    }
    return result
}
var arr1=createFunction1();
arr1[3]();
arr1[8]();