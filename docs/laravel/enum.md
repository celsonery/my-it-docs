# Enum

## Create the ENUM Class
```shell
php artisan make:enum RoleEnum
```

## Edit the app/Enums/RoleEnum.php created file

```php
enum RoleEnum: int
{
	case ADMIN = 1;
	case CUSTOMER = 2;
}
```

## Join Enum to User

```
Add "'role_id' => RoleEnum::class" at casts() method in User Model
```

