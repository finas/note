1.xyz域名在微信中打开会有安全提示    
2.小米路由刷了pandorabox断电后，无法连接后台和ssh，但是ssid是有网络的，fuck，尝试nc，netsta和ssh上层路由分配给小米路由的ip，无效。  
3.xclip 无效  
The clipboard is provided by the X server. It doesn't matter whether the server is headless or not, what matters is that your local graphical session is available to programs running on the remote machine. Thanks to X's network-transparent design, this is possible.

I assume that you're connecting to the remote server with SSH from a machine running Linux. Make sure that X11 forwarding is enabled both in the client configuration and in the server configuration. In the client configuration, you need to have the line ForwardX11 yes in ~/.ssh/config to have it on by default, or pass the option -X to the ssh command just for that session. In the server configuration, you need to have the line X11Forwarding yes in /etc/ssh/sshd_config (it is present by default on Ubuntu).

To check whether X11 forwarding is enabled, look at the value of the DISPLAY environment variable: echo $DISPLAY. You should see a value like localhost:10 (applications running on the remote machine are told to connect to a display running on the same machine, but that display connection is in fact forwarded by SSH to your client-side display). Note that if DISPLAY isn't set, it's no use setting it manually: the environment variable is always set correctly if the forwarding is in place. If you need to diagnose SSH connection issues, pass the option -vvv to ssh to get a detailed trace of what's happening.

If you're connecting through some other means, you may or may not be able to achieve X11 forwarding. If your client is running Windows, PuTTY supports X11 forwarding; you'll have to run an X server on the Windows machine such as Xming.