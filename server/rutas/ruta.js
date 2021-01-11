;
const express = require('express')
let api = express.Router(),
  contador = 0,
  repetidas = 'Rutas repetidas: \n'
let rutas = [
    crudRuta = require('./routes_db')
]

api = rutas[0]

rutas.forEach((ruta, index) => {
    if (index > 0) 
        ruta.stack.forEach((accion) => {
                api.stack.push(accion)
        })
})

api.stack.forEach((ruta, index) => {
    for(let i = (index + 1); i < api.stack.length; i++) {
        if ( ruta.route.path == api.stack[i].route.path && ruta.route.stack[0].method == api.stack[i].route.stack[0].method ) {
            repetidas += `path: ${ruta.route.path} metodo: ${ruta.route.stack[0].method} \n`
        }
    }
})

if (repetidas.length > 20) throw new Error( repetidas )

module.exports = api