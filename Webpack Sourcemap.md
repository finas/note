# Webpack Sourcemap

#####一句话
开发时可以参考使用 `cheap-module-eval-source-map`。


##### 关键词
`cheap`：不生成列信息。
`eval`:每个module通过eval（）来执行，build和rebuild速度最快。
`module`:包含loader（babel）的sourcemap（简化为对应行）。
`cheap-module-eval-source-map`：<b>cheap</b>提高sourcemap生成效率,<b>module</b>包含loader的sourcemap，<b>eval-source-map</b>将sourcemap以datauri的形式内嵌，减少网络请求。

##### 效率对比
<img src="./webpack-sourcemap-rate.png" />

##### 解释
| 模式                         | 解释                                                                                                                       |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| eval                         | 没有.map，每个module会通过eval()来执行，同时每个打包文件的尾部添加 **`//# souceURL=webpack:///./src/index.js`**                                     |
| source-map                   | 生成.map，非常详细.  **`//#sourceMappingURL=app.js.map`**                                                                                                      |
| inline-source-map            | 没有.map, sourcemap已base64的形式拼接在bundle.js的最后。**`//#sourceMappingURL=data:application/json`**                                                                    |
| eval-source-map              | 没有.map,每个module会通过eval()来执行，sourcemap以base64的格式拼接在在每个打包文件的最后。**`//#sourceMappingURL=data:application/json`**                                                |
| cheap-source-map             | 生成没有列信息的.map，不包含loader的 sourcemap（譬如 babel 的 sourcemap）**`//#sourceMappingURL=app.js.map`**                                                   |
| cheap-module-source-map      | 生成没有列信息的.map，同时 loader 的 sourcemap 也被简化为只包含对应行的。 **`//#sourceMappingURL=app.js.map`**                                                  |
| cheap-module-eval-source-map | 没有.map，每个module会封装到eval()来执行，同时loader的sourcemap被简化为只 对应行的，sourcemap以base64的格式拼接在在每个打包文件的最后。**`//#sourceMappingURL=data:application/json`**   |


##### 测试

#####`eval`
```js
webpackJsonp([1],[  
function(module,exports,__webpack_require__){    
eval(
      ...      
//# sourceURL=webpack:///./src/js/index.js?'
    )
  },  
function(module,exports,__webpack_require__){    
eval(
      ...      
//# sourceURL=webpack:///./src/static/css/app.less?./~/.npminstall/css-loader/0.23.1/css-loader!./~/.npminstall/postcss-loader/1.1.1/postcss-loader!./~/.npminstall/less-loader/2.2.3/less-loader'
    )
  }
...])
```

eval 模式会把每个 module 封装到 eval 里包裹起来执行，并且会在末尾追加注释。

##### `source-map`
```js
webpackJsonp([1],[  
function(e,t,i){...},  
function(e,t,i){...},  
  ...
])//# sourceMappingURL=index.js.map
```
index.js.map ：
```js
{  
"version":3,  
"sources":[
    "webpack:///js/index.js","webpack:///./src/js/index.js",    
    "webpack:///./~/.npminstall/css-loader/0.23.1/css-loader/lib/css-base.js",
    ...
],  
"names":["webpackJsonp","module","exports"...], 
"mappings":"AAAAA,cAAc,IAER,SAASC...",  
"file":"js/index.js",  
"sourcesContent":[...],  
"sourceRoot":""
}
```
map文件里包含源文件和生成文件对应的行列。

##### `eval-source-map`
```js
webpackJsonp([1],[  
function(module,exports,__webpack_require__){    
eval(
      ...      
//# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  },  function(module,exports,__webpack_require__){    
eval(
      ...      
//# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  },
  ...
]);
```
和 eval 类似，但是把注释里的 sourceMap 都转为了 DataURL。


##### `cheap-module-eval-source-map`
```js
webpackJsonp([1],[  
function(module,exports,__webpack_require__){    
eval(
      ...      
//# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  },  
function(module,exports,__webpack_require__){    
eval(
      ...      
//# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  }
...])
```
和eval-source-map相似，但base64的信息中了少了行信息，同时包含了loader的sourcemap信息。


##### 更多
http://mp.weixin.qq.com/s/KaFWSnaIDdISxrJV9DSy7A
http://cheng.logdown.com/posts/2016/03/25/679045
http://www.cnblogs.com/hhhyaaon/p/5657469.html


