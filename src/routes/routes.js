const express = require('express')
const authMiddleware = require('../middlewares/auth').auth
const loginMiddleware = require('../middlewares/auth').login

module.exports = server => {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.post('/login', loginMiddleware)
    server.use('/api', router)

    // Rotas 
    const userService = require('../data/UserService')
    userService.register(router, '/user')

    //Rotas que precisam de autenticacao
    router.use(authMiddleware)

    const cartaoService = require('../data/CartaoCreditoService')
    cartaoService.register(router, '/cartao-credito')

    const contaBancariaService = require('../data/ContaBancariaService')
    contaBancariaService.register(router, '/conta-bancaria')

    const animalService = require('../data/AnimalService')
    animalService.register(router, '/animal')

    const ImobiliariaService = require('../data/ImobiliariaService')
    ImobiliariaService.register(router, '/imobiliaria')

}


