1. To calculate the avergate request duration during last 5 minutes 
 `rate(http_request_duration_seconds_sum[5m]/rate(http_request_duration_seconds_count[5m])`.    
 
