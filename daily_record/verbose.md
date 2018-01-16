1. <a href="#set-cookie"> set-cookie</a>
2. <a href="#URL">URL</a>





<a id="set-cookie"></a>
# set-cookie

### QA
1. Does `set-cookie`  at  `api.domain.com`  work on `mobile.domain.com` ?
2. How long does the **default** cookie remaining?
3. When does cookie count out in client or server?

### protocol

```html
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly

[page content]
```

### Scope of cookies

The `Domain` and `Path` directives define the *scope* the cookie:what URLS the cookies should be sent to.

`Domain` specifies allowed hosts to receive the cookie. If unspecified, it defaults to the host of the current document location, **excluding subdomains**. If `Domain` is specified, then subdomains are always included.

For example, if `Domain=mozilla.org` is set, then cookies are included on subdomains like `developer.mozilla.org`.

`Path` indicates a URL path that must exist in the requested URL in order to send the `Cookie` header. The %x2F ("/") character is considered a directory separator, and subdirectories will match as well.

For example, if Path=/docs is set, these paths will match:

+ `/docs`
+ `/docs/Web/`
+ `/docs/Web/HTTP`

### ref
<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies">https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies</a>




<a id='URL'></a>
# URL 