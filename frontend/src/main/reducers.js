import { combineReducers } from 'redux'
import menuReducer from '../reducers/menuReducer'
import recipeReducer from '../reducers/recipeReducer'
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    menu: menuReducer,
    recipe: recipeReducer,
    form: formReducer
})

export default rootReducer