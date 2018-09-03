const Recipe = require('./recipe')
const errorHandler = require('../config/errorHandler')

Recipe.methods(['get', 'post', 'put', 'delete'])
Recipe.updateOptions({new: true, runValidators: true})
Recipe.after('post', errorHandler).after('put', errorHandler)

Recipe.route('count', (req, res, next) => {
    Recipe.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = Recipe