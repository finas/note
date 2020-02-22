1. How to get list of installed packages with installation date  
`grep " install " /var/log/dpkg.log*`   
2. npm ERR cb() never called  
`npm cache clean -f` then `npm install --no-package-lock`    
3. Trouble enabling GatewayPorts for Remote Port Forwarding over SSH  
`sshd -T | grep -E 'gatewayports|allowtcpforwarding'`
4. Debug iptables   
```bash
iptables -t raw -A PREROUTING -p tcp --destination 192.168.0.0/24 --dport 80 -j TRACE
iptables -t raw -A OUTPUT -p tcp --destination 192.168.0.0/24 --dport 80 -j TRACE

cat /var/log/kern.log | grep 'TRACE:'  
```
