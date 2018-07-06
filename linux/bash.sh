#/bin/bash

# Count IP address in Nginx access logs
`sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr`  
#eg.1
`cat logfile.log | grep “IPAddress or ServiceName” | awk ‘{if ($6==200 && $8 > 0.1 )print $0}’ | awk ‘{print $0,1}’ | sort | uniq -c -> conc.txt` . 


# HTTPie
`http www.google.com search=='HTTPie logo' Referer:http://httpie.org/` 
#POST /?search=HTTPie+logo HTTP/1.1
#Accept: */*
#Accept-Encoding: gzip, deflate
#Connection: keep-alive
#Content-Length: 0
#Host: www.google.com
#Referer: http://httpie.org/
#User-Agent: HTTPie/0.9.9
`alias https='http --default-scheme=https'` . 
# alias https
#[httpie](https://httpie.org/run)

#varibale in bash
`!!` `!-1`