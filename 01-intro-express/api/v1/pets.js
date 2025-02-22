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
// router.get('/api/v1/pets', (req, res) => {
//     res.json(petList)
// })

/* PARAMS */
// Un param sirve para hacer una ruta dinámica. Por ejemplo, si quiero traer la información de una mascota en específico, puedo hacer una ruta que reciba el id de la mascota y que me regrese la información de esa mascota.
// Params: /api/v1/pets/:petId -> /api/v1/pets/1

router.get('/api/v1/pets/:petId', (req, res) => {
    console.log(req.params)
    // const petId = req.params.petId
    const { petId } = req.params
    const OnePet = petList.pets.find(pet => pet.id === parseInt(petId))
    if(!OnePet) {
        return res.status(404).json({message: 'Pet not found'})
    }
    res.json(OnePet)
})

/* QUERY */
// Una query es similar a un PARAM, pero en lugar de ser parte de la ruta, se envía como un parámetro en la URL (?). Sobre todo cuando ocupamos mandar más de un dato. Es común usarlas para filtrar información.
// Las Querys son abiertas, es decir, no se necesita definir en el archivo de rutas, se pueden enviar cualquier cantidad de querys. Es responsabilidad del Backend tomarlas en cuenta o no.
// Query: /api/v1/pets?age=3&type=dog

router.get('/api/v1/pets', (req, res) => {
    // El objeto que contiene la query es: req.query
    console.log(req.query)

    const { age, type } = req.query

    const filteredPets = petList.pets.filter(pet => {
        if(age && type) {
            return pet.age === parseInt(age) && pet.type === type
        }

        if(age) {
            return pet.age === parseInt(age)
        }

        if(type) {
            return pet.type === type
        }
    })

    res.json(filteredPets)
})



module.exports = router