
## Getting Started

Este es un proyecto crado con Next, Tailwind y Contentful

Vamos a copiar el repo!!

```bash

git clone {"Link del repo"}

cd {"nombre repo"}

npm install

npm run dev

```
## Modelo del contentful

![img](https://i.ibb.co/XF6c9mF/ajajaj.png)

Copiar todos los datos del Contentful tal cual la imagen para ingresar nuestros datos de alquiler.

## Modifica el .env

Agregale tus valores de Space_id y access_token de Contentful 

Dentro del repo borraremos el "example" del .env y agregaremos nuestras keys.

Vamos a agregar una API Key en Contentful > Settings > API Keys > Add API Key

Dentro de nuestra Api copiamos Space ID y reemplazamos por la primer variable de entorno, y para la segunda elegimos el Deliver API - access token ya que el segundo no funcionará.

Y listo tienes tu app corriendo localmente solo necesitas agregar los datos dentro de la pestaña "Content"


## Como correrlo en vercel

Y bueno agregamos las variables de entorno en el deploy antes de lanzar nuestra app SIN COMILLAS, gracias uwu
