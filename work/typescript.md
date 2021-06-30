
```ts
type ExtractComponentProps<T> = T extends React.ComponentType<infer U>?U:T extends React.FunctionComponent<infer U>?U:T;

type valueof<T> = T[keyof T]


```
