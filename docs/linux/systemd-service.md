# Systemd service

## Create a new service in systemd
> Create or edit the file in /etc/systemd/system/???.service 
```shell
vim /etc/systemd/system/octane.service
```

> Add this content in your file
```shell
[Unit]
Description=Laravel Octane Server
After=network.target

[Service]
Type=simple
User=
Group=
WorkingDirectory=/var/www/html
ExecStart=/usr/bin/php artisan octane:start --server=swoole --port=80 --host=0.0.0.0
Restart=always
StandardOutput=file:/var/log/octane.log
StandardError=file:/var/log/octane-error.log

[Install]
WantedBy=multi-user.target
```

> Reload systemd to add your script to systemd
```shell
systemctl daemon-reload
```

> Now you can use the systemd to run your process
```shell
systemctl <start|stop|restart|reload|status> octane.service
```

> To start this service, you need enabled it
```shell
systemctl enable octane.service
```
