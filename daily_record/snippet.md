## Access-Control-Max-Age

The `Access-Control-Max-Age` response header indicates how long the results of a **preflight request** (that is the information contained in the `Access-Control-Allow-Methods` and `Access-Control-Allow-Headers` headers) can be cached.

    Access-Control-Max-Age: 600

Maximum number of seconds the results can be cached.
**Firefox** caps this at **24 hours** (86400 seconds) and **Chromium** at **10 minutes** (600 seconds). Chromium also specifies a default value of 5 seconds.
A value of -1 will disable caching, requiring a **preflight** OPTIONS check for all calls.



## End-to-end Hop-by-hpy


