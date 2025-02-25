/* CONTROLADORES */
// Los controladores tiene la lógica de negocio de la aplicación.
// Se encargar de recibir las peticiones HTTP, procesarlas y enviar una respuesta adecuada.
// También se encargan de validar los datos que se envían en la petición, manejar errores y resolver promesas.

// #1 Importar el modelo
const ModelHome = require('../models/Home')

// #2 Crear las funciones necesarias para cada ruta

// CREATE
const createHome = (req, res) => {
  ModelHome.create(req.body).then(home => {
    res.status(201).json(home)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

// READ
const findAllHomes = (req, res) => {
  ModelHome.findAll().then(homes => {
    res.status(200).json(homes)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

const findOneHome = (req, res) => {
  ModelHome.findOne(req.params.idHome).then(home => {
    res.status(200).json(home)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

// UPDATE
const updateOneHome = (req, res) => {
  ModelHome.update(req.params.idHome, req.body).then(home => {
    res.status(200).json(home)
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

// DELETE
const softDeleteOneHome = (req, res) => {
  ModelHome.softDelete(req.params.idHome).then(home => {
    res.status(204).json()
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

const destroyOneHome = (req, res) => {
  ModelHome.destroy(req.params.idHome).then(home => {
    res.status(204).json()
  }).catch(error => {
    res.status(400).json({ message: error.message })
  })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  softDeleteOneHome,
  destroyOneHome
}
