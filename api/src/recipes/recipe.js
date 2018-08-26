const restful = require('node-restful')
const mongoose = restful.mongoose


const ingrListSchema = new mongoose.Schema({
    qtd: { type: String, required: true },
    nome: { type: String, required: true }
})

const todoListSchema = new mongoose.Schema({
    descricao: { type: String, required: true }
})

const ingredientsSchema = new mongoose.Schema({
    etapa: { type: String, required: false},
    list: [ingrListSchema]
})

const todoSchema = new mongoose.Schema({
    etapa: { type: String, required: false},
    list: [todoListSchema]
})

const recipeSchema = new mongoose.Schema({
    nome: { type: String, requerid: true },
    tipo: { type: String, required: true },
    tempo: { type: Number },
    rendimento: { type: Number },
    porcao: { type: Number },
    tags: [String],
    ingredientes: [ingredientsSchema],
    procedimentos: [todoSchema]


})

module.exports = restful.model('Recipe', recipeSchema)