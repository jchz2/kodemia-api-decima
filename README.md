# API express + mongoose

## index.js

Este archivo tiene la tarea de levantar nuestra aplicaión

## server.js

Este archivo guarda la definición del servidor

- Que rutas van a exitir
- Que middlewares se van a usar
- Aqui se montan los routers al servidor

## models

Alberga nuestros modelos de bases de datos

> Un modelo es la representación de una colección y consta de un nombre de colección, y un schema.

## usecases

Alberga funciones que puede ejecutar el usuario en el sistema

> Agrupadas por entidades

## routes

Alberga las rutas de nuestro servidor

> Agrupadas por entidades

## lib

Alberga codigo reutilizable a traves de todas las capas de la arquitectura

## Porceso de desarrollo

Este es el proceso que debemos seguir cuando necesitamos agregar un nuevo endpoint a nuestra API.

1. Modelos: Asegurarnos de tener el acceso a datos que necesitamos.
2. UseCase: Asegurarnos de tener las funciones necesarias para la tarea.
3. Router: Asegurarnos de tener la rutas(s) necesarias o crear la ruta/router necesaria(o).
4. Asegurarnos de que nuestro router esta montado en el server, si no, proceder a montarlo.
