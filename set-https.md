```bash
sudo add-apt-repository ppa:certbot/certbot  
sudo apt-get update 
sudo apt-get install python-certbot-nginx 


sudo nano /etc/nginx/sites-available/default  
#Find the existing server_name line and replace the underscore, _, with your domain name:  
. . .
server_name example.com www.example.com;
. . .  
sudo systemctl reload nginx   

sudo ufw status 
sudo ufw allow 'Nginx Full' 
sudo ufw delete allow 'Nginx HTTP'  

sudo certbot --nginx -d example.com -d www.example.com  


```
