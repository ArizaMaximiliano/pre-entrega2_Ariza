node src/app.js

Hice las pruebas con postman

-----
Para obtener todos los productos GET a http://localhost:8080/api/products.

Para obtener un producto por su ID GET a http://localhost:8080/api/products/{id del producto en mongodb}.

Para agregar un nuevo producto POST a http://localhost:8080/api/products
{
  "title": "Nombre",
  "description": "Descripción",
  "code": "Código del Producto",
  "price": 100.0,
  "stock": 1,
  "category": "Categoría",
  "thumbnails": ["URL"]
}

Para actualizar un producto PUT a http://localhost:8080/api/products/{id del producto en mongodb} 
{
  "title": "Actualizacion"
}

Para eliminar un productoDELETE a http://localhost:8080/api/products/{id del producto en mongodb}.

Para crear un nuevo carrito POST a http://localhost:8080/api/carts.

Para obtener los productos de un carrito GET a http://localhost:8080/api/carts/{id del carrito en mongodb}.

Para agregar un producto a un carrito POST a http://localhost:8080/api/carts/{id del carrito en mongodb}/product/{id del producto en mongodb}

----
