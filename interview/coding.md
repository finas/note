### useThrottle   

### debounce
```js
const debounce=(()=>{
    let timer  
   return (callback,timeout=100)=>{
    return (...ar)=>{
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>callback.apply(null,ar),timeout)
    }
    
}})();
```
