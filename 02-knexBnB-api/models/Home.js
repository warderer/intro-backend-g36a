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

// Read: Leer registros de la base de datos
const findAll = () => {
  return knex
    .select('*')
    .from('homes')
    .where('active', true)
}

const findOne = (houseId) => {
  return knex
    .select('*')
    .from('homes')
    .where('house_id', houseId)
    .where('active', true)
}

const update = (houseId, bodyToUpdate) => {
  return knex
    .update(bodyToUpdate) // ¿Qué campos quiero actualizar?
    .from('homes') // ¿De qué tabla?
    .where('house_id', houseId) // ¿Cuál es el id del registro que quiero actualizar?
    .returning('*') // ¿Qué campos quiero que me devuelva?
}

// Soft delete: Este no borra un registro de la base de datos, sino que cambia el valor de active a false.
const softDelete = (houseId) => {
  return knex
    .update({ active: false })
    .from('homes')
    .where('house_id', houseId)
}

// Hard delete (destroy): Este borra un registro de la base de datos.
const destroy = (houseId) => {
  return knex
    .delete()
    .from('homes')
    .where('house_id', houseId)
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  softDelete,
  destroy
}
