// #1 Importar express
const express = require('express')
const homeRoutes = require('./routes/homeRoutes')

const PORT = process.env.PORT || 3000

// #2 Crear la aplicación/instancia de express
const app = express()

// #3 Configurar express para que entienda JSON
app.use(express.json())

// #4 Crear las rutas de la aplicación
app.use('/api/v1', homeRoutes)

// #5 Levantar/iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} 🚀`)
})
