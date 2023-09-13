# Subject_Backend

### Descripción:

En este proyecto, se realizo un CRUD (Crear, Leer, Actualizar, Eliminar) para el recurso "Subject" utilizando Node.js y Express.js. El recurso "Subject" representará una tabla en una base de datos con los siguientes atributos:

* id (Número Entero): Identificador único de la materia.
  
* name (Cadena de Caracteres): Nombre de la materia.

* description (Cadena de Caracteres): Descripción de la materia.

*  credits (Número Entero): Cantidad de créditos asignados a la materia.

*  professor (Cadena de Caracteres): Nombre del profesor a cargo de la materia.

### Métodos HTTP:

Se tienen los siguientes métodos HTTP para interactuar con el recurso "Subject":

GET /api/subjects: Retornará toda la base de datos

GET /api/subjects/{id}: Retornará los datos de la materia dada una ID

POST /api/subjects: Se crea la materia con los datos que ingrese

PUT /api/subjects/{id}: Podrá modificar los datos de una materia que esta en la base de datos

DELETE /api/subjects/{id}: Podrá eliminar una materia dada una ID de la base de datos
