+ `await page.$$eval('div',divs=>divs.length)` This method runs `document.querySeletorAll` within the page   
+ `page.addScriptTag(options)`  add script to page  
+ `page.content()` Gets the full HTML contents of the page,including the doctype

+ `page.click(selector,{button:'left',clickCount:1,delay:0	})`


### Environement Variables
+ `HTTP_PROXY`, `HTTPS_PROXY`, `NO_PROXY` - defines HTTP proxy settings that are used to download and run Chromium.  
+ `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` - do not download bundled Chromium during installation step.
+ `PUPPETEER_DOWNLOAD_HOST` - overwrite host part of URL that is used to download Chromium

### launch config
```js
const browser = await puppeteer.launch({
    // headless: false,  // => 1: turn off headless for debug
    // args: [
    // '--proxy-server=127.0.0.1:8888', // => 2. Use fiddler proxy for debug,
    // '--proxy-server=socks5://192.168.120.251:10000',
    // '--disable-extensions-except=/path/to/extension/',
    // '--load-extension=/path/to/extension/',
    //`--ignore-certificate-errors`,
    // ]
});
```
#### 163 iframe
 ```js
 page.goto(`http://music.163.com/#/search/m/?s=${encodeURIComponent('something like this')}`)
 // record response real music url
 page.on('response',async function listener(response){
     let musicUrl = `song/enhance/player`
     if(response.request().url().indexOf(musicUrl)>=0){
         // page.removeListener('response',listener)
        let {code,data} = await response.json()
        if(200==code){
            console.log(data.map(item=>item.url))
        }     
     }
 })
 // fake a response without make a real  request
 page.on('request', (request) => {
    if (request.url() === "http://abc.com/a.js") {
        request.respond({
            status: 200,
            contentType: 'application/javascript; charset=utf-8',
            body: 'console.log(1);'
        });
    } else {
        request.continue();
    }
});
 // page.removeAllListeners()
 page.frames()[1].click('[id^=song_]') // play the first song in the list
 

 // page.frames()[1].$eval('.d-flag .d-flag',elem=>elem.src).then(data=>console.log(data))
 
 ```
 #### inject script to page
 ```js
 page.on('domcontentloaded',()=>page.addScriptTag({
    content:`
    var oldWs=WebSocket
    var WebSocket = function(src){
        if(src.indexOf('wss://web-stream.aicoin.net.cn/socket.io')>=0){
            console.info(src)
        // src=src.replace('sid','sid2')
    }
    return new oldWs(src);
    }`}))
page.goto('https://www.aicoin.net.cn/chart/F049309D')
 ```

 #### inject function to page 
 *functions installed via `page.exposeFunction`* surive navigations  
 *could use for the invoke bundler function like comminucate*
 ```js;
puppeteer.launch().then(async browser => {
  // ...
  page.on('console', msg => console.log(msg.text()));
  await page.exposeFunction('readfile', async filePath => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, text) => {
        if (err)
          reject(err);
        else
          resolve(text);
      });
    });
  });
  await page.evaluate(async () => {
    // use window.readfile to read contents of a file
    const content = await window.readfile('/etc/hosts');
    console.log(content);
  });
  await browser.close();
});
 ```

 #### proxy for page instance
 ```js
 async newPage(browser) {
    // ...
    await page.setRequestInterception(true);
    page.on('request', async interceptedRequest => {
        const resType = interceptedRequest.resourceType();
        if (['document', 'xhr'].indexOf(resType) !== -1) {
            const url = interceptedRequest.url();
            const options = {
                uri: url,
                method: interceptedRequest.method(),
                headers: interceptedRequest.headers(),
                body: interceptedRequest.postData(),
                usingProxy: true,
            };
            const response = await this.fetch(options);

            interceptedRequest.respond({
                status: response.statusCode,
                contentType: response.headers['content-type'],
                headers: response.headers,
                body: response.body,
            });
        } else {
            interceptedRequest.continue();
        }
    });
    return page;
    }

    fetch(options) {
    // let baseUrl = options.baseUrl || request.globals.baseUrl;
        let isHttps;
        if (options.uri.startsWith('https')) {
            isHttps = true;
        } else if (options.uri.startsWith('http')) {
            isHttps = false;
        }

        if (options.usingProxy || process.env.NODE_ENV === 'production') {
            options.agentClass = isHttps ? Sock5HttpsAgent : Sock5HttpAgent;
            options.agentOptions = {
                socksHost: 'localhost', // Defaults to 'localhost'.
                socksPort: 9050 // Defaults to 1080.
            }
        }

        options.resolveWithFullResponse = true;

        return request(options);
}
 ```


 #### mobile phone emulation
```js
const devices = require('puppeteer/DeviceDescriptors');
const iPhone6 = devices['iPhone 6'];
...
const page = await browser.newPage();
await page.emulate(iPhone6);
```

#### jquery-like 
```js
const cheerio = require('cheerio')
const html  = await page.content()
const $ = cheerio.load(html)
$('.title').text()
```

#### evaluateOnNewDocument  
*is invoked after the document was created but before any of its scripts were run*
```js
await page.evaluateOnNewDocument(()=>console.log('evaluted'))
await page.goto('http://www.baidu.com')
await page.reload()
```