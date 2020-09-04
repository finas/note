```ts
/** 
rawData=[{
  key1:value1,
  key2:value2,
},{
  key1:value11,
  key2:value22
}]
extraKeys=['key1','key2']
extra(rawData,extraKeys)//{key1:[value1,value11],key2:[value2,value22]}
*/
type ValueOf<T extends string[]> = T[keyof T];
type o ={[key:string]:any}
type ExtractKey<T extends o[] > =  Extract<keyof T[number],string>[]
function get<T extends o[],P extends ExtractKey<T>>(a:T,b:P):T[number][P[number]]{
  return a[0][b[1]]
}
const data = [{a:{a1:1},b:2}]
const t:ExtractKey<typeof data> = ['a']
get(data,t)
```
