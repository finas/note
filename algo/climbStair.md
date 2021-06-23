## Description
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

### Example 1:

Input: n = 2. 
Output: 2. 
Explanation: There are two ways to climb to the top.  
1. 1 step + 1 step. 
2. 2 steps.   
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.  
1. 1 step + 1 step + 1 step. 
2. 1 step + 2 steps. 
3. 2 steps + 1 step. 
 

### Constraints:  

1 <= n <= 45. 

```js
function climbStair(stairs){
  if(stairs<=2){
    return stairs
  }
  let lastStair=2
  let lastLastStair=1
  for(let i=2;i<stairs-1;i++){
    const tmp =lastLastStair
    lastLastStair = lastStair
    lastStair = lastStair+tmp
  }
  return lastStair+lastLastStair
}
```


n stairs can be split into the way of (n-1)stairs + (n-2)stairs => `climbStairs(n)===climbStairs(n-1)+climbStairs(n-2)`
