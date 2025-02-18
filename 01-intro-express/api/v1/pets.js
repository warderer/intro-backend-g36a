// Para definir rutas en un archivo separado, usando Express, se debe configurar un Router. Un Router es un objeto que permite definir rutas y agruparlas. Para crear un Router, se debe llamar a la función Router() de express. Luego, se pueden definir rutas en el Router, de la misma forma que se hace en una aplicación de express.

const express = require('express')

// Mando a llamar a la función Router de express
const router = express.Router()

const petList = {
    "pets": [
        {
            "id": 1,
            "name": "Firulais",
            "age": 3,
            "type": "dog"
        },
        {
            "id": 2,
            "name": "Silvestre",
            "age": 2,
            "type": "cat"
        },
        {
            "id": 3,
            "name": "Scooby Doo",
            "age": 6,
            "type": "dog"
        },
    ]
}

// Traer la lista de mascotas
router.get('/api/v1/pets', (req, res) => {
    res.json(petList)
})

module.exports = router