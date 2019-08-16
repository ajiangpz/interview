### doctype是什么
##### doctype不是html标签,而是一个用于告诉浏览器使用哪个html版本的指令
### HTML版本
##### html4.01,xhtml1,html5,前两者基于sgml，因而在在使用doctype声明时需要指定规则，后者不需要指定,前两者需要大写，后者不需要
### 规则
##### strict:不允许使用表现性，废弃元素(如font)以及frameset
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
##### transitional：允许使用表现性，废弃元素,不允许使用frameset
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
##### frameset:允许使用表现性，废弃元素以及frameset
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
### HTML5
```
<!doctype html>
