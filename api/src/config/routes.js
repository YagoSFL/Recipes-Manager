const express = require('express')

module.exports = function(server) {

    //Rotas da aplicação
    const router = express.Router()
    server.use('/api', router)

    //Rotas das receitas
    const recipeService = require('../recipes/recipeService')
    recipeService.register(router, '/recipes')

}