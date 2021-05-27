1. To detect a class is implemented a interface  
2. `[key:string]:any` for object 
3. `React.FC<any>` and `React.classComponent<any>` both are React.ElementType


```ts
type ExtractComponentProps<T> = T extends React.ComponentType<infer U>?U:T extends React.FunctionComponent<infer U>?U:T;

type valueof<T> = T[keyof T]


```
