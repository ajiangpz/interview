function assignHandler(){
    var element=document.getElementById("someELement");
    element.onclick=function(){
        alert(element.id)
    }
}
//匿名函数中有对assignHandler活动变量element的引用,
var x = [];
    function createSomeNodes() {
        var div;
        var i = 10000;
        var frag = document.createDocumentFragment();
        for (; i > 0; i--) {
            div = document.createElement("div");
            div.appendChild(document.createTextNode(i + " - " + new Date().toTimeString()));
            frag.appendChild(div);
        }
        document.getElementById("nodes").appendChild(frag);
    }
    function grow() {
        x.push(new Array(1000000).join('x'));
        createSomeNodes();
        setTimeout(grow, 1000);
    }
    grow()