## analyse the `summary` log 

### config
`percentiles: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 1]`

### origin_data
data=[1887, 2076, 2082,2172, 2212, 2316,2317, 2484, 2802,7321]

### log 
http_request_duration_seconds{quantile="0.1"} 1.9815                
http_request_duration_seconds{quantile="0.2"} 2.0789999999999997     
http_request_duration_seconds{quantile="0.3"} 2.127.   
http_request_duration_seconds{quantile="0.4"} 2.192.   
http_request_duration_seconds{quantile="0.5"} 2.2640000000000002.   
http_request_duration_seconds{quantile="0.6"} 2.3165.   
http_request_duration_seconds{quantile="0.8"} 2.643.   
http_request_duration_seconds{quantile="0.9"} 5.0615000000000006.    
http_request_duration_seconds{quantile="1"} 7.321.   
http_request_duration_seconds_sum{} 27.668999999999997.   
http_request_duration_seconds_count{} 10 .   


*1.9815=(data[0]+data[1])/2,.. 2.0789=(data[1]+data[2])/2, ................... 7.321=data[9]*

### query. 
`avg(application_httprequests_transactions_per_endpoint{ quantile="0.9"}) by (route)`. 

### break down. 
Sort the all record data => figure the preset percentile config => query by quantile filter. 

