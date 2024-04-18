import express from 'express'
import cors from 'cors'
import routes from './src/routes.js'

const app = express()
const port = 3000

/* Habilita requisições de diferentes origens */
app.use(cors())

/* Permite receber dados em json */
app.use(express.json())
/* Indica como o parser do json será realizado */
app.use(express.urlencoded({extended: true}))

app.use(routes)
app.listen(port, function() {
    console.log('Servidor rodando na porta ' + port) } )
