#/bin/bash

# Count IP address in Nginx access logs
`sudo awk '{print $1}' /var/log/nginx/access.log | sort | uniq -c | sort -nr`  
#eg.1
`cat logfile.log | grep “IPAddress or ServiceName” | awk ‘{if ($6==200 && $8 > 0.1 )print $0}’ | awk ‘{print $0,1}’ | sort | uniq -c -> conc.txt` . 


