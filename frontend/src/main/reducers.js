import { combineReducers } from 'redux'
import menuReducer from '../reducers/menuReducer'
import recipeReducer from '../reducers/recipeReducer'


const rootReducer = combineReducers({
    menu: menuReducer,
    recipe: recipeReducer
})

export default rootReducer