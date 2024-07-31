# Transactions

Using try - catch
```php
try {
    DB:beginTransaction();

        Company::create();
        
        User::create();
        
        Product::create();
        
    DB:commit();

} catch (\Exception $exception) {
    DB:rollback();
    
    // return to view
    return redirect()
        ->back()
        ->withErros(['error' => $exception->getMessage()]);
    
    // or return to Api
    
    return response()->json(['error' => $exception->getMessage()]);
}
```

Or using closure

```php
$product = DB::transaction(function () use ($request) {
	$product_data = $request->except("skus");
	$product_data['slug'] = Str::slug($product_data['name'])

	$product = Product::create($product_data);

	$skus = $product->skus()->createMany($request->get('sku'));

	foreach ($skus as $key => $sku) {
		foreach ($request->sku[$key]['images'] as $index => $image) {
			$path = $image['url']->store('products');

			$sku->images()->create([
				'url' => $path,
				'cover' => $index == 0
			]);
		}
	}

	return $product->load('skus.images');
});

return $product;
```
