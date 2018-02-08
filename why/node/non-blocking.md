# non-blocking

All of the I/O methods in the node.js stand library provide **asynchronous** versions,which are **non-blcking**,and accept callback functions. Some methods also have **blocking** couterparts, which have names that end with `Sync`

Note that in the synchronous version if an error is thrown it will need to be caught or the process will crash. In the asynchronous version, it is up to the author to decide whether an error should throw as shown.
```js
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```


### Concurrency and Throughput