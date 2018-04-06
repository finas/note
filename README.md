# sharing
*一些读书分享，个人总结*

### 

<!-- START_PROJECT_STRUCTURE -->
<pre>
|   <a href="./board.md">board.md</a>
|   <a href="./README.md">README.md</a>
|   <a href="./term.md">term.md</a>
|   <a href="./tmp.md">tmp.md</a>
|   <a href="./tree.md">tree.md</a>
|   update.sh
|   updateReadMeLink.js
|   <a href="./vim.md">vim.md</a>
+---.vscode
|       sftp.json
+---backup
|       Shadowsocks-win-dotnet4.0-2.5.2.7z
+---crypto
|       <a href="./crypto/1.md">1.md</a>
+---css
|       <a href="./css/tricks.md">tricks.md</a>
|       <a href="./css/white-space.md">white-space.md</a>
+---daily_record
|       <a href="./daily_record/log.md">log.md</a>
|       <a href="./daily_record/QA.md">QA.md</a>
|       <a href="./daily_record/snippet.md">snippet.md</a>
|       <a href="./daily_record/verbose.md">verbose.md</a>
+---develop
|   |   <a href="./develop/CORS-base_tag.md">CORS-base_tag.md</a>
|   |   <a href="./develop/CORS.md">CORS.md</a>
|   +---chrome
|   |       <a href="./develop/chrome/remote debug.md">remote debug.md</a>
|   \---webpack
|           <a href="./develop/webpack/Webpack Sourcemap.md">Webpack Sourcemap.md</a>
+---echart
|       <a href="./echart/bar-chart.md">bar-chart.md</a>
|       <a href="./echart/line-chart.md">line-chart.md</a>
+---eng
|       <a href="./eng/eng-learning.md">eng-learning.md</a>
|       <a href="./eng/funny-tranlsate.md">funny-tranlsate.md</a>
|       <a href="./eng/introducing.md">introducing.md</a>
|       <a href="./eng/pro.md">pro.md</a>
|       <a href="./eng/shortcut.md">shortcut.md</a>
|       <a href="./eng/sign.md">sign.md</a>
|       <a href="./eng/variable-name.md">variable-name.md</a>
+---foundation
|       <a href="./foundation/cookie-cors.md">cookie-cors.md</a>
|       <a href="./foundation/CRLF.md">CRLF.md</a>
|       <a href="./foundation/encoding.md">encoding.md</a>
|       <a href="./foundation/handleRequest.md">handleRequest.md</a>
+---images
|       05.svg
|       cookie-cors-github.gif
|       cookie-cors-tmall.png
|       cookie-cors-tmall_login.png
|       encode_nc_http_zn.png
|       git-pull.jpg
|       tmall-login-redirect-url.png
|       tmall-login-redirect.png
|       tmall-login-request.png
|       tmall-login-setCookie.png
|       tmp_circleNo_array.png
|       tmp_circleNo_ing1_array.png
|       tmp_circleNo_ing2_array.png
|       tmp_circleNo_ing3_array.png
|       tmp_origin2_array.png
|       tmp_originNo_array.png
|       tmp_originNo_ing1_array.png
|       tmp_originNo_ing_array.png
|       tmp_origin_array.png
|       tmp_result_array.png
|       webpack-sourcemap-rate.png
+---javascript
|   |   <a href="./javascript/node_tips.md">node_tips.md</a>
|   |   <a href="./javascript/react.md">react.md</a>
|   |   <a href="./javascript/snippet.md">snippet.md</a>
|   |   <a href="./javascript/tips.md">tips.md</a>
|   +---browser
|   |       <a href="./javascript/browser/onError.md">onError.md</a>
|   |       <a href="./javascript/browser/polyfill.md">polyfill.md</a>
|   \---node
|           <a href="./javascript/node/url.md">url.md</a>
+---linux
|       <a href="./linux/command.md">command.md</a>
|       <a href="./linux/docker.md">docker.md</a>
|       <a href="./linux/font-cn.md">font-cn.md</a>
|       <a href="./linux/permission.md">permission.md</a>
|       <a href="./linux/snippet.md">snippet.md</a>
+---net
|       <a href="./net/wireless mode.md">wireless mode.md</a>
+---pending
|       <a href="./pending/fuck.md">fuck.md</a>
+---pitfall
|       <a href="./pitfall/addEventListenerVSonClick.md">addEventListenerVSonClick.md</a>
|       <a href="./pitfall/attribute_property.md">attribute_property.md</a>
|       <a href="./pitfall/encodeURI_encodeURIComponent.md">encodeURI_encodeURIComponent.md</a>
+---proxy
|       <a href="./proxy/readme.md">readme.md</a>
+---tips
|   |   <a href="./tips/git.md">git.md</a>
|   |   <a href="./tips/puppeteer.md">puppeteer.md</a>
|   |   <a href="./tips/sublime.md">sublime.md</a>
|   |   <a href="./tips/typescript.md">typescript.md</a>
|   |   <a href="./tips/vsc-lint.md">vsc-lint.md</a>
|   \---conf
|           .eslintrc
|           <a href="./tips/conf/editorConfig.md">editorConfig.md</a>
|           nginx.conf
|           <a href="./tips/conf/ssh-key.md">ssh-key.md</a>
+---why
|   |   <a href="./why/why nodejs.md">why nodejs.md</a>
|   |   <a href="./why/why python.md">why python.md</a>
|   \---node
|           <a href="./why/node/compare.md">compare.md</a>
|           <a href="./why/node/event-loop.md">event-loop.md</a>
|           <a href="./why/node/non-blocking.md">non-blocking.md</a>
</pre>
<!-- END_PROJECT_STRUCTURE -->



```bat
    REM update Project structure (only in window)
    1.cd sharing
    2.tree /F /A >tree.md && node updateReadMeLink.js
```