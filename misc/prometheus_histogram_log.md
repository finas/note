## histogram log. 
### config. 
`buckets: [0.1, 0.5, 1, 1.5, 2, 2.5, 3, 5, 7, 10, 30, 60, 100]`.   

### origin data
[1441, 1468, 1721,1737, 1874, 1895,2157, 2255, 2400,9630]

### log   
http_request_duration_seconds_bucket{le="0.1"} 0.   
http_request_duration_seconds_bucket{le="0.5"} 0.   
http_request_duration_seconds_bucket{le="1"} 0.   
http_request_duration_seconds_bucket{le="1.5"} 2.   
http_request_duration_seconds_bucket{le="2"} 6.   
http_request_duration_seconds_bucket{le="2.5"} 9.   
http_request_duration_seconds_bucket{le="3"} 9.   
http_request_duration_seconds_bucket{le="5"} 9.  
http_request_duration_seconds_bucket{le="7"} 9.  
http_request_duration_seconds_bucket{le="10"} 10.   
http_request_duration_seconds_bucket{le="30"} 10.  
http_request_duration_seconds_bucket{le="60"} 10.   
http_request_duration_seconds_bucket{le="100"} 10.   
http_request_duration_seconds_bucket{le="+Inf"} 10.   
http_request_duration_seconds_sum,platform=""} 26.577999999999996.    
http_request_duration_seconds_count,platform=""} 10.     

2=>[1441,1468]<1.5.     
6=>[1441, 1468, 1721,1737, 1874, 1895]<2.  

### query.  
`histogram_quantile(0.9,sum(rate(http_request_duration_seconds_bucket[1m]))`     

