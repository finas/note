```js
var lengthOfLongestSubstring = function(s) {
    if(s.length<=1){
        return s.length
    }
    let max=1
    for(let i=0;i<s.length-1;i++){
        for(let j=i+1;j<=s.length;j++){
            const str = s.slice(i,j)
            if(str.slice(0,-1).indexOf(str[str.length-1])<0){
                if(str.length>max){
                    max=str.length
                }
            }else{
                break
            }
        }
    }
    return max
};
```
