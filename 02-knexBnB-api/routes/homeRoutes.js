/* VISTAS (RUTAS EN EL BACKEND) */
// Las vistas son las rutas que se definen en el backend para que el cliente pueda acceder a los recursos de la aplicación.
// En una arquitectura REST, las rutas se definen con un verbo HTTP y una URL.
// Se encarga de recibir las peticiones HTTP y enviarlas al CONTROLADOR adecuado.

// #1 Importar express
const express = require('express')

// #2 Mando a llamar al router de express
const router = express.Router()

// #3 Importar el controlador
const homeController = require('../controllers/homeController')

// #4 Definir las rutas de la aplicación
router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:idHome', homeController.findOneHome)
router.patch('/homes/:idHome', homeController.updateOneHome)
router.delete('/homes/:idHome', homeController.softDeleteOneHome)
router.delete('/homes/destroy/:idHome', homeController.destroyOneHome)

module.exports = router
