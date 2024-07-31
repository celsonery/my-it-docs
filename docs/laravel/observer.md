# Observer

## Create Observer
```shell
php artisan make:observer ProductObserver --model=Product
```

## Active Observer
```php
In Model:
#[ObservedBy([UserObserver::class])]

or 

In app/Http/Providers/AppServiceProvider
User::observe(UserObserver::class);
```

##
```php
implements ShouldHandleEventsAfterCommit
```
