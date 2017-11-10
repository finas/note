# 安装中文字体

1. 下载msyf.ttf（普通）、msybd.ttf（加粗）

2. 在/usr/share/fonts下新建子目录，

    `mkdir /usr/share/fonts/winFont`

3. 复制mysy.ttf和msybd.ttf到winFont目录，

    `cp mysy.ttf msybd.ttf /usr/share/fonts/winFont`

4. 建立字体索引信息，更新字体缓存

    `mkfontscale`

    `mkfontdir`

    `fc-cache`

5. 检查已安装的字体

    ` fc-list:lang=zh ` #可能有些系统没有安装
