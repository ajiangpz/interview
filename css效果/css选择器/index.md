- 后代选择器
1. X Y，选择X的后代中满足Y的元素
- 子代选择器
1. X>Y，选中X的子元素中满足Y的元素
- 兄弟选择器
1. X+Y,选中满足X选择器第一个兄弟节点，且该节点需要满足Y
2. X~Y,选中X后面的兄弟节点，且该节点满足Y条件
- 属性选择器
1. [attr],选中有该属性的元素
2. [attr=value]，选中有该属性且值为value的
- 伪类
1. X:nth-child(an+1)，选中满足X选择器且中前面有an+1个兄弟节点的元素
2. X：nth-of-type(an+1)，选中满足X选择器中前面有an+1个相同标签的兄弟节点的元素
3. X:first-child,选中满足X选择器且是父元素第一个节点的元素
4. X:first-of-type,选中满足X选择器且是父元素第一次此种类型的元素

- 伪元素
1. X:before,X::before,X:after,X::after
2. X:first-letter,X:first-line
- 链接
1. :Link,:Visit,:Focus,:Hover,:Active
