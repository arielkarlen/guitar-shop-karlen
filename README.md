# Guitar Shop

Autor: Ariel A. Karlen.
Proyecto de tienda Virtual creado en React, para curso de React de Coderhouse.
Framework Frontend: Bootstrap
Base de datos: Firebase

## Scripts

Scripts para levantar el proyecto en modo:

### `npm start`

Levbanta la APP en Modo develop
URL [http://localhost:3000](http://localhost:3000) .

### `Api`

De momento, se esta tomando singleProduct.mock.js para tomar los productos, ubicado en la carpeta src/utils

## Componentes

### `CartWidget`

Componente ded carrito de compras

### `ItemContainer`

Contenedor de productos, para mostrar segun categoria

### `ItemList`

Muestra todos los productos, segun la categoria que se le pase.

### `ItemProduct`

Muestra detalle resumido de producto

### `ItemDetail`

Detalle completo del producto

### `ItemDetailContainer`

Contenedor del Detalle completo del producto

### `Commons`

Componentes comunues de todo el proyecto, incluye

- Barra de navegacion
- Contador para agregar o eliminar productos

### `CartContext`

En este archivo se han definido todas las funciones globales, tales como:

- Seteo de productos agregados al carrito
- Cantidad total de productos en el carrito
- Montos parciales de productos
- Monto total del carrito

### `Cart`

Página de Checkout. Incluye formulario para envio de orden de compra.
