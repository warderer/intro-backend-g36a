# Módulo de Introducción a Backend
Bienvenido al repositorio del curso de Introducción a Backend. Este curso está diseñado para proporcionarte una comprensión fundamental de cómo se diseñan y funcionan las bases de datos, así cómo interactuar con ellas usando SQL y PostgreSQL, para finalmente introducirte en el desarrollo de APIs RESTful usando Express JS y Knex JS.

# Contenido del Curso
## 1. Introducción a Base de Datos y SQL
Aprenderás qué es una base de datos, qué es SQL, como se conceptualiza una base de datos a través del modelo relacional, el modelo entidad-relación y la cardinalidad (1 a 1, 1 a Muchos(N), Muchos a Muchos (N a M)). Estos conceptos son la base para entender cómo se estructuran y gestionan los datos en un sistema de gestión de bases de datos relacional.

### Herramientas:
- [FlowChart Maker Online](https://app.diagrams.net/): Creación de Diagramas de manera visual.
- [DBDiagram.io](https://dbdiagram.io/): Creación de Diagramas a través de pseudo código.

## 2. Introducción a PostgreSQL
PostgreSQL es una potente base de datos relacional de código abierto que es ampliamente utilizada en la industria.
Conocerás por qué usar PostgreSQL, sus ventajas, cómo instalar la herramienta, cómo conectarte a la base de datos utilizando el sistema gestor de base de datos pgAdmin4, así como crear tablas y realizar consultas para añadir (INSERT INTO), borrar (DELETE) y actualizar (UPDATE) información en la base de datos.

### Insertar datos (INSERT INTO)
```sql
INSERT INTO nombre_tabla (columna1, columna2, columna3, ...)
VALUES (valor1, valor2, valor3, ...);

/* EJEMPLO: */
INSERT INTO senseis (nombre, edad, correo)
VALUES ('César', 35, 'cesar@correo.com');
```

### Borrar datos (DELETE)
```sql
DELETE FROM nombre_tabla
WHERE condición;

/* EJEMPLO: */
DELETE FROM senseis
WHERE id = 3;
```
> [!CAUTION]
> Es importante incluir el WHERE para eliminar un único registro en específico. Si omites el WHERE, se eliminarán todos los registros de la tabla.

### Actualizar datos (UPDATE)
```sql
UPDATE nombre_tabla
SET columna1 = valor1, columna2 = valor2, ...
WHERE condición;

/* EJEMPLO: */
UPDATE senseis
SET edad = 39, correo = 'cesar@uncorreo.com'
WHERE id = 3;
```
> [!CAUTION]
> Es importante incluir el WHERE para actualizar un único registro en específico. Si omites el WHERE, se actualizarán todos los registros de la tabla.

### Recursos
- [Descarga de PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- [Tipos de Datos en PostgreSQL](https://www.postgresql.org/docs/current/datatype.html)

## 3. Consultas SELECT
Las consultas SELECT son esenciales para extraer información específica de una base de datos, por lo que existen multiples formas de realizar estas consultas.
Aprenderás a realizar consultas SELECT en una sola tabla utilizando instrucciones como FROM, WHERE, IN, LIMIT, OFFSET, ORDER, AVERAGE, GROUP BY y COUNT.

### Recursos
- [PostgreSQL Sample Database - DVD Rental](https://www.postgresqltutorial.com/postgresql-sample-database/): Aquí se puede ver el diagrama ER de una base de datos de ejemplo de renta de peliculas en DVD. Así mismo se puede descargar la base de datos de ejemplo.
- [Cargar Base de Datos de Ejemplo en PostgreSQL](https://www.postgresqltutorial.com/load-postgresql-sample-database/): Se explica como restaurar un respaldo de base de datos (en este caso DVD Rental), tanto desde la consola como usando PGAdmin.

> [!WARNING]
> Si al cargar el respaldo, te marca un error acerca de que no encuentra el "Binary Path", tienes que establecerlo en **"Preferences -> Paths -> Binary Path"**, ir a la parte de abajo en el apartado **"PostgreSQL Binary Path"** y en donde dice la versión que tienes instalada (supongamos la 16), colocar la ruta correcta del binario, por defecto son:
>
> **Windows:** C:\Program Files\PostgreSQL\16\bin\
> **MacOS:** /Library/PostgreSQL/16/bin

## 4. Subqueries & Joins
Conocerás cómo hacer consultas a más de una tabla mediante subqueries y joins. Estas técnicas son indispensables para combinar datos de múltiples tablas y obtener resultados complejos en una base de datos relacional.

Un **Join** es una operación que permite combinar filas de dos o más tablas basándose en una condición común, generalmente a través de claves foráneas. Existen varios tipos de Joins en PostgreSQL, como el **INNER JOIN**, que devuelve solo las filas coincidentes en ambas tablas, o el **LEFT JOIN**, que devuelve todas las filas de la tabla izquierda junto con las filas coincidentes de la tabla derecha.

Por otro lado, las **Subquerys** son consultas anidadas dentro de una consulta principal. Estas pueden devolver un valor único o múltiples filas y columnas, y se utilizan para realizar operaciones más complejas, como filtrar resultados o calcular valores intermedios antes de ejecutar la consulta principal. Pueden aparecer en cláusulas como SELECT, FROM, WHERE o HAVING.

Ambas herramientas son ampliamente usadas para escribir consultas SQL avanzadas que optimicen la extracción y manipulación de datos, proporcionando flexibilidad y control sobre cómo se accede y combina la información, para lograr operaciones más precisas y combinando resultados de una o más tablas.

### Sintaxis de INNER JOIN
```sql
SELECT columnas 
FROM tabla1
INNER JOIN tabla2
ON tabla1.columna_PK = tabla2.columna_FK;

/* EJEMPLO: */
SELECT employees.name, departments.department_name 
FROM employees 
INNER JOIN departments 
ON employees.department_id = departments.id;
```

### Sintaxis de LEFT JOIN
```sql
SELECT columnas 
FROM tabla1
LEFT JOIN tabla2
ON tabla1.columna_PK = tabla2.columna_FK;

/* EJEMPLO: */
SELECT employees.name, departments.department_name 
FROM employees 
LEFT JOIN departments 
ON employees.department_id = departments.id;
```

### Sintaxis de Subquery
```sql
SELECT columnas 
FROM tabla1
WHERE columna = (SELECT valor FROM tabla2 WHERE condición);

/* EJEMPLO: */
SELECT name, salary 
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

## 5. RestFul APIs
Estudiarás la teoría general de una API REST, sus buenas prácticas, seguido de un ejemplo práctico usando Express JS. Las APIs RESTful son un estándar en la industria para la creación de servicios web que permiten la comunicación entre diferentes sistemas.

### Buenas prácticas en API REST
Para construir una buena API REST que sea fácil de entender, usar y mantener, se recomienda tomar en cuenta las siguientes buenas prácticas:

#### 5.1. Uso de los Verbos HTTP Correctos
  - **GET** para obtener recursos.
  - **POST** para crear recursos.
  - **PUT** para actualizar un recurso existente.
  - **DELETE** para eliminar un recurso.
  - **PATCH** para actualizar parcialmente un recurso.

#### 5.2. Uso Apropiado de los Códigos de Estado HTTP
Los códigos de estado indican al cliente si la solicitud fue exitosa o si hubo algún error, los más comunes:
  - **200 OK** para solicitudes exitosas.
  - **201 Created** cuando se crea un nuevo recurso.
  - **204 No Content** cuando la respuesta no tiene cuerpo (por ejemplo, tras un DELETE exitoso).
  - **400 Bad Request** para solicitudes mal formadas.
  - **401 Unauthorized** cuando no se proporcionan una credenciales de autenticación válidas.
  - **404 Not Found** cuando el recurso no existe.
  - **500 Internal Server Error** para errores del servidor.

#### 5.3. URLs Semánticas y Claras
  - **Utiliza URLs claras y que representen recursos:** Por ejemplo, /api/users para acceder a usuarios y /api/users/{id} para un usuario en específico.
  - **Evita usar verbos en los endpoints:** En su lugar, utiliza sustantivos que representen recursos: /createUser no es RESTful; /users con un verbo POST sí lo es.

#### 5.4. Versionado de la API
Versiona tu API para facilitar la compatibilidad y la evolución de la misma.
Por ejemplo: **/api/v1/**users
Esto permite lanzar nuevas versiones sin afectar las anteriores, facilitando la transición a nuevas funcionalidades y evitando interrupciones en el servicio.

#### 5.5. Paginación, Filtrado y Ordenamiento
  - Para listas grandes de recursos, es buena idea implementar paginación para reducir el peso de las respuestas. Puedes utilizar parámetros como **?page=1&limit=10**.
  - Permite también filtrar y ordenar resultados para hacer la API más flexible. Ejemplo: **?tipo='perro'&edad=4**.

## 6. Introducción a Knex JS
Explorarás las diferencias entre SQL Driver, Query Builder y ORM, además de recibir una introducción a la librería Knex JS. También aprenderás cómo conectarte a una base de datos en Express con Knex JS para realizar migraciones y poblar la base de datos. Knex JS es una herramienta flexible y potente para gestionar bases de datos en aplicaciones Node.js.

### Instalación de Knex
Para empezar a usar Knex en un proyecto, primero deberemos de instalar la dependencia de Knex así como el driver de la base de datos a usar, en este caso en particular el de PostgreSQL (pg):
```shell
npm install knex pg
```

### Inicializar el archivo de Configuración de Knex (knexfile.js)
Antes de comenzar a trabajar con Knex, es necesario crear un archivo de configuración. 
Este comando genera un archivo de configuración llamado `knexfile.js`, donde especificas los entornos (desarrollo, producción, pruebas, etc.) y los parámetros de la base de datos:
```shell
knex init
```
El archivo `knexfile.js` contiene información similar a:
```js
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'nombre_base_de_datos'
    }
  },
  // Producción y otros entornos...
};
```
> [!WARNING]
> Recuerda usar variables de entorno para proteger la información. Es mala práctica colocar directamente la información en el archivo `knexfile.js` en texto plano, ya que cuando subas tu código a GitHub (o plataformas similares), la información de acceso a la base de datos será visible por todo el mundo.
>
> Te recomiendo instalar y usar el paquete [dotenv](https://www.npmjs.com/package/dotenv)

### Manejo de Migraciones con Knex
Las migraciones te permiten versionar los cambios en la estructura de tu base de datos, facilitando el manejo de esquemas a lo largo del tiempo. Es decir, podemos usar código para crear la estructura de la base de datos y llevar un control de las modificaciones que esta sufre con el tiempo, al mismo tiempo que tenemos la capacidad de regenerar la estructura de la base de datos al correr las migraciones (muy útil cuando se comparte el código).

#### Crear una migración
Para crear una nueva migración, ejecuta:
```shell
knex migrate:make nombre_migracion
```
Esto generará un archivo de migración en la carpeta migrations con un nombre basado en el timestamp y el nombre que le diste a la migración.

#### Ejecutar las migraciones
Para aplicar todas las migraciones pendientes en la base de datos:
```shell
knex migrate:latest
```
Esto ejecutará todas las migraciones que aún no se han aplicado y ahora sí realizará los cambios indicados en la base de datos, es decir, el código que se corre sobre `exports.up` en la migración.

#### Revertir la última migración (rollback)
Para deshacer la última migración que fue aplicada:
```shell
knex migrate:rollback
```
Este comando revierte la última migración aplicada, permitiendo deshacer cambios en la base de datos. Esto ejecuta lo indicado en la migración en el apartado de `exports.down`.

#### Ver el estado de las migraciones
Si quieres ver qué migraciones ya han sido aplicadas y cuáles están pendientes:
```shell
knex migrate:status
```

## 7. API con MVC
Aprenderás la teoría general de MVC (Model-View-Controller) y cómo implementar una API con estos principios, enfocándote en la creación de un CRUD (Create, Read, Update, Delete). El patrón MVC es una metodología ampliamente adoptada para estructurar aplicaciones de manera modular y mantenible.

Datos de ejemplo para hacer el CREATE (insertar)
```json
{
  "title": "La Casa Blanca",
  "description": "Una casita muy presidencial",
  "guest": 200,
  "address": "123 Main Street",
  "rental_price": 150000,
  "fk_user": 1
}
```

### Recursos Complementarios
- [Documentación de Postgres](https://www.postgresql.org/docs/)
- [Documentación de Knex](https://knexjs.org/guide/)
- [Configuración de ESLint con Standard JS](https://www.cesarguerra.mx/configuracion-rapida-de-eslint-con-standard-js-para-proyectos-de-javascript-y-de-react-con-vite-js/)

# Autor
Este repositorio y contenidos son realizados por César Guerra. 
Puedes usarlos libremente, solo recuerda dar los créditos correspondientes =P.

www.cesarguerra.mx
