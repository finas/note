+ `await page.$$eval('div',divs=>divs.length)` This method runs `document.querySeletorAll` within the page   
+ `page.addScriptTag(options)`  add script to page  
+ `page.content()` Gets the full HTML contents of the page,including the doctype

+ `page.click(selector,{button:'left',clickCount:1,delay:0	})`



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