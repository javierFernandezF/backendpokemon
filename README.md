# Backend Pokedex

Este es el back-end de la app Pókedex. Aquí se conectan [Pokedex Front-end](https://github.com/PilarCiganda/Pokedex.git) y [Pokedex Back-end](https://github.com/javierFernandezF/backendpokemon.git)

El proyecto está realizado en:

- [Node.js](https://nodejs.org/es/)
- [Express.js](https://expressjs.com/es/)

## Programas necesarios

Para poder utilizar el proyecto en localhost en necesario clonarlo y tener los siguientes programas:

- Nodejs v12.18.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. VS Code.
- [PostgreSQL](https://www.postgresql.org/download/) (pgAdmin o DBeaver).
- Insomnia para puebas de APIS. (Opcional).
- Git para poder gestionar las versiones.

## Cómo clonar

Comando para clonar:

```
cd nombre_carpeta
git clone [link del repositorio]

```

## Instalación

Ya clonado el proyecto es necesario instalar todas las dependencias con el comando:

```
npm install

```
## PostgreSQL

En tu IDE de preferencia, crear una base de datos *Pokemones* que contenga tres tablas:

```
CREATE TABLE public."poketabla"(
id serial primary key,
idpokemon INT,
name varchar(30),
img varchar,
type varchar(10),
type2 varchar(10),
weight int,
height int,
description varchar,
hp int,
atk int,
def int,
satk int,
sdef int,
spd int,
bckcolor varchar(10),
bckcolor2 varchar(10)
);

CREATE TABLE datamoves (
iddatamoves serial PRIMARY KEY,
idpokemondatamoves INT,
move1 VARCHAR(30),
move2 VARCHAR(30)
);

CREATE TABLE users (
id serial PRIMARY KEY,
mail VARCHAR(100),
name VARCHAR(100),
password VARCHAR (500)
);

```

Observación: Para trabajar con esta base de datos es necesario unir la tabla "poketabla" a la tabla "datamoves". La propiedad *idpokemon* de la tabla "poketabla" hace referencia a la propiedad *idpokemondatamoves* de la tabla "datamoves".

## Conexión a la base de datos

Definir en .env las variables:

- DATABASE_USER=""
- DATABASE_HOST=""
- DATABASE_PASSWORD=""
- DATABASE_DATABASE=""
- DATABASE_PORT=""

## Rutas

Esta base de datos cuenta con 4 rutas diferentes. Cada una de ellas, encargada de una función en particular. Las funciones son: 
- Obtener la lista total de pokemones: http://localhost:3000/pokemones/obtener 
- Crear pokemones: http://localhost:3000/pokemones/agregar 
- Registar usuario: http://localhost:3000/users/signin
- Ingresar como usuario: http://localhost:3000/users/login 

## Levantar backend en LocalHost

Ejecutar el comando

```
npm run dev

```


