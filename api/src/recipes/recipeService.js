const Recipe = require('./recipe')

Recipe.methods(['get', 'post', 'put', 'delete'])
Recipe.updateOptions({new: true, runValidators: true})

module.exports = Recipe