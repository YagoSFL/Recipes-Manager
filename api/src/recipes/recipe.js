const restful = require('node-restful')
const mongoose = restful.mongoose

const recipeSchema = new mongoose.Schema({
    nome: { type: String, requerid: true },
    tipo: { type: String, required: true },
    tempo: { type: Number },
    rendimento: { type: Number },
    porcao: { type: Number },
    tags: [String],
    processos: [{
        etapa: { type: String, required: true},
        ingredientes: [{
            qtd: { type: String, required: false },
            nome: { type: String, required: false }
        }],
        preparos: [{
            descricao: { type: String, required: false }
        }]
    }]

})

module.exports = restful.model('Recipe', recipeSchema)