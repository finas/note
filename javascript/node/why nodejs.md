
# why nodejs
> node.js is is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js use an event-driven, non-blocking I/O modle that makes it lightweight and efficient. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *"I/O" refers primarily to interaction with the system's disk and network supported by [libuv](http://libuv.org/).* 

## event-loop

#### QA
1. What's the order of in node main.cc ?
2. What's different between setTimeout and nextTick ?

show the [code](https://link.jianshu.com/?t=https://github.com/nodejs/node/blob/master/src%2Fnode_main.cc)
```c++
class V8Engine {
  let _jsVM;
  
  V8Engine(){
     _jsVM = /*js 执行引擎 */;
  }
  
  void invoke(handlers){
  // 依次执行，直到 handlers 为空
    handlers.forEach(handler,fun => _jsVM.run(handler));
  }
}

class EvenLoop {
  let _jsRuntime = null;
  let _callbackHandlers = []; 【1】
  let _processTickHandlers = []; 【2】
  let _immediateHandlers = []; 【3】

  // 构造函数
  EvenLoop(jsRuntime){
   _jsRuntime = jsRuntime;
  }

  void start(){
    where(true){
      _jsRuntime.invoke(_processTickHandlers); 【4】
      _processTickHandlers.clear();

      update_time();
      run_timer(); 
      run_pool();
      run_check();

      if (process.exit){
        _jsRuntime.invoke(_processTickHandlers); 【5】
        _processTickHandlers.clear();
        break;
      }
    }
  }

  void update_time(){
      //  更新 timer 的时间
  }

  void run_timer(){ 【6】
    let handlers = getTimerHandler(); 
    _callbackHandlers.push(handlers);
    _jsRuntime.invoke(_callbackHandlers);
    _jsRuntime.invoke(_processTickHandlers);
    _callbackHandlers.clear();
    _processTickHandlers.clear();
  }

  void run_pool(){  【6】
    let handlers = getIOHandler(); 
    _callbackHandlers.push(handlers);
    _jsRuntime.invoke(_callbackHandlers);
    _jsRuntime.invoke(_processTickHandlers);
    _callbackHandlers.clear();
    _processTickHandlers.clear();
  }

  void run_check(){  【7】
    let handlers = getImmediateHandler();
    _immediateHandlers.push(handlers);
    _jsRuntime.invoke(_immediateHandlers);
    _immediateHandlers.clear();
  }
 
}

main(){
  JsRuntime jsRuntime = new V8Engine();
  EventLoop eventLoop = new EventLoop(jsRuntime);
  eventLoop.start();
}

// 主线程中执行
main();

```








## async

#### QA
1. why so many function need callback function ?
2. Are all callback functions async ?



