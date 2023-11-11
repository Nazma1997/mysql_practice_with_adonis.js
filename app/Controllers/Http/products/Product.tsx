import Route from '@ioc:Adonis/Core/Route';

Route.group(() => {
  Route.post('create_product', 'products/ProductController/createProduct');
 
})
  
