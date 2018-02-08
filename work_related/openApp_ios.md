# IOS universal link
1.  apple-app-site-association<br/>
    需要放置于网站根目录和根目录的.well-known目录下<br/>
    同时通过浏览器http://www.abc.com/apple-app-site-association可以访问<br/>
    这里指的访问是可以通过浏览器输入链接会显示文件的内容，而不是下载文件，<br/>
    这个需要服务器设置header的content-type为application/json,下面是nginx配置的例子

        location ~ apple-app-site-association{
            add_header content-type "application/json"
        }
    
    apple-app-site-association的例子

        {
            "applinks": {
                "apps": [],
                "details": [
                {
                    "appID": "TeamID.com.domain.App",
                    "paths":[ "*" ]
                }
                ]
            }
        }

2. ios的设置<br/>
   Associated Domains中的domain格式为applink:www.exmaple.com
   (域名不需要加上http)

3. 测试<br/>
    在记事簿中输入网站链接，然后长按是否出现在XXXapp中打开。

4. update<br/>
    ios9.3之后只能进行跨域访问。
    在www.main.com中访问www.main.com/route不会触发universal link，
    在sub.main.com访问www.main.com/route 会触发。

5. exapmle   
 https://www.bilibili.com/apple-app-site-association