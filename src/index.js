import express from 'express'
import ejs from 'ejs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const PORT = 3000
// Ruta del directorio
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

// console.log(join(__dirname, 'views'))

// Uso de 'ejs'
app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'))

// Uso de archivo de enrutamiento
app.use(indexRoutes)

// Uso de archivos del directorio 'public': CSS...
app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || PORT, () => console.log(`Server listening on port ${process.env.PORT || PORT}`))

