var name="The window"
var obj={
    name:"The Object",
    getName:function(){
        return this.name
    },
    getNameFunc:function(){
        return function(){
            return this.name
        }
    },
    getNameFunc1:function(){
        var that=this
        return function(){
            return that.name
        }
    }
}
console.log(obj.getName())//The Window
console.log(obj.getNameFunc()())//The Object
console.log(obj.getNameFunc.call(this)())//The Window
console.log(obj.getNameFunc1()())//The Object