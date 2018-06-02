# Useful CSS 

 1.英文大写

`text-transform:uppercase`

 2.动态拉伸高度

*之前使用`max-height`伸展正常 收缩太快*

`overflow:hidden =>overflow-y:scroll`

3.正则class或者属性

`[class*="bg_step"]`

`[selfAttr^="open"]`



4.省略号
```css
.ellipsis{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
```



