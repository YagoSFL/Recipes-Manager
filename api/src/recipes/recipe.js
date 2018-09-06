const restful = require('node-restful')
const mongoose = restful.mongoose

const ingredSchema = new mongoose.Schema({
    qtd: { type: String, required: false },
    desc: { type: String, required: false }
})

const todoSchema = new mongoose.Schema({
    desc: { type: String, required: false }
})

const recipeSchema = new mongoose.Schema({
    nome: { type: String, requerid: true },
    tipo: { type: String, required: true },
    tempo: { type: Number },
    rendimento: { type: Number },
    porcao: { type: Number },
    tags: [String],
    processos: [{
        etapa: { type: String, required: true },
        ingredientes: [ingredSchema],
        preparos: [todoSchema]
    }]

})

module.exports = restful.model('Recipe', recipeSchema)

