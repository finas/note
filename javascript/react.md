# react

+ 首先redux很强大，单项数据流的思想，可以让我们很好地去将数据和UI解耦。我们要修改UI，只能通过发起一个action给reducer，然后reducer经过一系列操作，得出一些新的state,然后这个state便会让UI更新。但是有个比较蛋疼的地方就是，我们要写得太多了，我们最起码要写一个actionType, 一个actionCreator， 一个reducer，当然还得创建一个store。如果有异步操作，那还得写更多一点，这会让我开发起来的时候比较枯燥。不知道你们有没有，反正，我是有时候想到要写那么多东西，我就有点动力不足了。
+ 其次就是性能优化的问题。就react中每个组件都有一个shouldComponentUpdate的函数，不过它默认总是返回true的。就是无论如何，只要state和props发生了变化，就要发生一次render。但是有时候是不需要更新的。虽然可以引入immutable-js来创建js不可变的数据，加上在shouldComponentUpdate搞点判断。但是，额，好吧，我觉得引入也挺麻烦的，感觉有点难以在现有的项目里插入（大神别喷我~）。
+ 最后呢，mobx可以比较好解决我上面的两个问题。mobx的写法不难，看一个下午，就可以开始动手写代码了。而且对在原来代码上修改可以比较迅速。因为UI和数据已经解耦了。你只要在store与UI和store的连接部分修改即可。还有就是mobx让你不再使用setState,那你也可以规避setState的异步更新的问题。mobx会检测被观察的数据，只要数据发生改变，它就会去重新渲染UI。当然还有很多很好的地方，每个人理解不一样罢了。这里就不深究mobx。毕竟我也只是处于一个能用的阶段。

作者：Juliiii
链接：https://juejin.im/post/59e4d0ec6fb9a0451869ca19
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


### mobx

@observer is always required, otherwise the component has no means to react to observables. It must be applied first - before @inject - like this @inject("something") @observer class Component {}.

Provider is used to put things (dependencis) on react's context. The context is available to all descendant components. The things are identified by name: <Provider name={thing}>.

@inject is used to retrieve these things from context in descendants of Provider. Inject takes these things from context by name and makes them available by moving them to props with the same name.
So inject("name") will take "name" thing from the context and make it available as this.props.name
