# Swoole

## Install swoole
```shell
apt install php-pear
apt install gcc make autoconf glibc-headers gcc-c++ libstdc++-devel curl-devel
pecl install swoole
```

## Configure swoole
```shell
php -i | grep php.ini
vim ...php.ini
```

> Add swoole extension
```shell
extension=swoole.so
```
> In your project install laravel/octane
```shell
composer require laravel/octane
composer install -o --no-dev
```

## Configuring your application
```shell
php artisan octane:install
```
> And choose swoole option
> This option add OCTANE_SERVER=swoole in you .env file

## Running your application with octane in laravel
```shell
php artisan octane:start
```
> This will running the octane local server


## Create service in systemd to run octane
Please see [/linux/systemd-service.md](../linux/systemd-service.md)
