# Polices

## Create Police
```shell
php artisan make:policy ProductPolice --model=Product
```

## Manager Access
- In app/Http/Polices/ProductPolice.php
```php
return $user->role_id == RoleEnum::ADMIN;
```

# On ProductController witch methods insert
```php
Gate::authorize('viewAny', Product::class);

or 

Gate::authorize('viewAny', $product);
```
