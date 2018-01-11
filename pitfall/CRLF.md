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