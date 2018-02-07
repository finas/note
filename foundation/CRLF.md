### explain
\r = CR (Carriage Return) // Used as a new line character in Mac OS before X   

\n = LF (Line Feed) // Used as a new line character in Unix/Mac OS X

\r\n = CR + LF // Used as a new line character in Windows                       

#### ASCII
+ \n   : 0x0A
+ \r   : 0x0D
+ \t   : 0x09


## <a href="../css/white-space.md">'\r\n' in HTML</a>
*click above link to see detail* 

## \r\n in TCP/IP

TCP/IP does not require the use of \r\n.

Various protocols based on Telnet require it, including SMTP,POP3,FTP,HTTP.
eg.

*In terminal*
```bash
nc www.baidu.com 80
GET / HTTP/1.1
Host www.baidu.com


```
*there is a \r\n after each line,one empty line \r\n to split the http header and body*

*In node*
```js
socket.connect(80,'www.baidu.com',function(){
    let HTTP_REQUEST=`GET / HTTP/1.1\r\nHost: www.baidu.com\r\n\r\n`
    toSocket.write(HTTP_REQUEST)
})
socket.on('data',data=>console.log(data))
```

## Review 
In practice, in the modern context of writing to a text file, you should always use \n (the underlying runtime will translate that if you're on a weird OS, e.g., Windows;-). The only reason to use \r is if you're writing to a character terminal (or more likely a "console window" emulating it) and want the next line you write to overwrite the last one you just wrote (sometimes used for goofy "ascii animation" effects of e.g. progress bars) -- this is getting pretty obsolete in a world of GUIs, though;-).

[stackoverflow](https://stackoverflow.com/questions/1761051/difference-between-n-and-r?noredirect=1&lq=1)