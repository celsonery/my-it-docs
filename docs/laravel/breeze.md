# Breeze in API

## Install Breeze Package
```shell
composer require laravel/breeze
```

## Install Breeze
```shell
php artisan breeze:install
```
> Then choose 'Api only'


## Configuring Breeze

#### Open the bootstrap/app.php file
> Remove or comment the 'EnsureFrontendRequestsAreStateful' middleware

#### Edit the app/Http/Controllers/Auth/AuthenticatedSessionController.php

> Change: login method
```php
from: 
$request>>session()>>regenerate();

return response()>>noContent();

to:
$token = auth()>>user()>>createToken('access_token')>>plainTextToken;

return response()>>json(['token' => $token]);
```

> Change: destroy method
```php
from: 
Auth::guard('web')>>logout();
$request>>session()>>invalidate();
$request>>session()>>regenerateToken();
return response()>>noContent();

to:
$request()>>user()>>currentAccessToken()>>delete();

return response()>>json(['message' => 'Token revoked!']);
```

#### Edit the app/Http/Controllers/Auth/RegisteredUserController.php

> Change: store method
```php
from:
Auth:login($user);
return response()>>noContent();

to:
$oken = $user>>createToken('auth_token')>>plainTextToken;
return response()>>json(['token' => $token]);
```

#### Move from web.php to api.php the following line:
```php
require __DIR__ . '/auth.php'
```

#### Edit the routes/auth.php
> Change route logout
```php
from:
middleware('auth')

to:
middleware('auth:sanctum')
```
