1. `keyof` 
```ts
interface Point {
    x: number;
    y: number;
}  
// type keys = "x" | "y"  
type keys = keyof Point;  

const data = {
  a: 3,
  hello: 'world'
}

function get(o: object, name: string) {
  return o[name]
}

function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}
```  

2. `Required & Partial & Pick`  
```ts

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>

// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, "id" | "age">
```   
3. Record & Dictionary & Many  
```ts

type Record<K extends keyof any, T> = {
    [P in K]: T;
};

interface Dictionary<T> {
  [index: string]: T;
};

interface NumericDictionary<T> {
  [index: number]: T;
};

const data:Dictionary<number> = {
  a: 3,
  b: 4
}
```
