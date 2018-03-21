# react



### mobx

@observer is always required, otherwise the component has no means to react to observables. It must be applied first - before @inject - like this @inject("something") @observer class Component {}.

Provider is used to put things (dependencis) on react's context. The context is available to all descendant components. The things are identified by name: <Provider name={thing}>.

@inject is used to retrieve these things from context in descendants of Provider. Inject takes these things from context by name and makes them available by moving them to props with the same name.
So inject("name") will take "name" thing from the context and make it available as this.props.name