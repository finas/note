
```ts
type ExtractComponentProps<T> = T extends React.ComponentType<infer U>?U:T extends React.FunctionComponent<infer U>?U:T;

type valueof<T> = T[keyof T]

type Await<T> = T extends {
    then(onfulfilled?: (value: infer U) => unknown): unknown;
} ? U : T;


```
