# white-space
this tag determine how white space inside an element is handled.`\r\n` would also be a white space inside element.innerHTML .


1. write the `\r\n` directly in HTML will be escaped and work unexpected.
```html
<textarea>
    aaaa\r\nbbbb\nccc\r\nddd
</textarea>
```

<textarea>
    aaaa\r\nbbbb\nccc\r\nddd
</textarea>


2. set the html in js do work `textarea.innerHTML='    aaaa\r\nbbbb\nccc\r\nddd'`

<textarea style="white-space:pre">
    aaaa
bbbb
ccc
ddd
</textarea>


3. the same as pre


### ref

[mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space)