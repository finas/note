# tips

#### shorthand
Longhand:
```js
for(let i=0;i<10000;i++){}
for(let i=0;i<1e7;i++){}
```


#### Enforcing mandatory parameters via parameter default values
```js
function foo(mustBeProvied = new Error('Missing parameter')){}
```


#### Iterating over Array indices and elements via the for-of loop

```js
const arr = ['a','b','c']
for(const [index,elem] of arr.entries()){
    console.log(`index=${index},elem=${elem}`)
}
```

#### iterate through key-value gracefully
```js
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```


#### Array destructuring work for regex
```js
const [all, year, month, day] = 
    /^(\d{4})-(\d{1,2})-(\d{1,2})$/
    .exec('2018-01-21')
```

#### Iterating over Unicode code

```js
for (const ch of 'x\uD83D\uDE80y') {
    console.log(ch.length);
}
// Output:
// 1
// 2
// 1
[...'x\uD83D\uDE80y'].length
// 3
```

#### Unique the data in array
```js
const arr = [...new Set([1,1,2,2,-1,-1])]
```

#### Covert array-like to array
```js
const arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ECMAScript 5:
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ECMAScript 6:
const arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// TypeError: Cannot spread non-iterable value
const arr3 = [...arrayLike];
```


#### Converting an Object to a Map

```js
const obj = { foo: 'bar', baz: 42 }; 
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

#### Named parameters
```js
function bar({ namedParam1, namedParam2 }) {
    console.log({ namedParam1, namedParam2 })
}
bar({namedParam1:1,namedParam2:2})
```

#### Referring to "inner" variables in default values

```js
const QUX = 2; //remove will trigger ReferenceError
function bar(callback = () => QUX) { 
    const QUX = 3;
    callback();
}
bar(); // 2
```

#### funny destructuring

```js
// 
const {length:len} = 'abc'     // len = 3
const {toString:s} = 123       // s = Number.prototype.toString
const { prop: x } = undefined; // TypeError

//default value
// undefined triggers default values
const {x:y=-1} = {z:2} // y = -1 
const [{prop:x} = {prop:-1}] = [] //x = -1 
const [x=1] = [undefined]; // x = 1 
const [{ prop: x=123 } = {}] = [{}] //x = 123

// Array pattern only work with iterables
const [x] = {x:1} // Type Error, empty objects are not iterable 
```


#### new others
```js
const obj = {
    ['h'+'ello'](){
        return 'hello'
    }
}
obj.hello() // hello

Object.assign(obj={a:1},{a:2,b:3}) //obj = {a:2,b:3}
Object.assign(obj,{a:5}) //obj = {a:5,b:3}
//Typed Arrays for JPEG SOF0 decoder 
```

[es6](http://exploringjs.com/es6)


#### test empty object  
`Object.keys(obj).length === 0 && obj.constructor === Object`

### overwrite
```js
(function() {
    var proxied = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function() {
        console.log( arguments );
        return proxied.apply(this, [].slice.call(arguments));
    };
})();
(function(){
    var originWS = WebSocket
    WebSocket = function(url){
        if(flag){
            // ....
        }
        return new originWS(url)
    }
})
```


### retry promise
```js
function retry(pFunc,tryTime=1){
    return function(...ars){
    let time = 1
        return new Promise((r,j)=>{
            (function _retry(){
                return pFunc.apply(null,ars).catch(e=>{
                    if(time<tryTime){
                        time++
                        return _retry()  
                    }
                    j(e)
                }).then(e=>r(e))
            })()
        })
    }
}
let fetchTry = retry(fetch)
```
### axios-retry
```js
//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if(!config || !config.retry) return Promise.reject(err);
    
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;
    
    // Check if we've maxed out the total number of retries
    if(config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }
    
    // Increase the retry count
    config.__retryCount += 1;
    
    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });
    
    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

作者：Tom_Tan
链接：https://juejin.im/post/5abe0f94518825558a06bcd9
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```

### download doc file directly
```js
this.$ajax({
    method:"get",
    url:"http://localhost:8081/order/getDoc",
    responseType:'blob'
}).then((res)=>{
    //这里res.data是返回的blob对象
    var blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'}); //application/vnd.openxmlformats-officedocument.wordprocessingml.document这里表示doc类型
    var downloadElement = document.createElement('a');
    var href = window.URL.createObjectURL(blob); //创建下载的链接
    downloadElement.href = href;
    downloadElement.download = orderId+'.docx'; //下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); //点击下载
    document.body.removeChild(downloadElement); //下载完成移除元素
    window.URL.revokeObjectURL(href); //释放掉blob对象
})
```
