/* MODELO */
// El modelo interactua con la base de datos.
// NO se encarga de validar datos, ni de resolver promesas (eso lo hace el controlador en una arquitectura MVC).

// #1 Importar la conexión a la base de datos
const knex = require('../config')

// #2 Crear funciones que me permitan interactuar con la base de datos.
// CRUD: Create, Read, Update, Delete.

// Create: Crear un nuevo registro en la base de datos. En este caso de Homes
const create = (bodyHome) => {
  return knex
    .insert(bodyHome)
    .into('homes')
    // .returning('*')
    .returning(['house_id', 'title', 'description', 'guests', 'address', 'rental_price', 'active', 'created_at', 'fk_user']) // Devuelve los campos que se insertaron
}

module.exports = {
  create
}
