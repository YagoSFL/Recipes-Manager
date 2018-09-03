import { combineReducers } from 'redux'
import menuReducer from '../reducers/menuReducer'
import recipeReducer from '../reducers/recipeReducer'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
    menu: menuReducer,
    recipe: recipeReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer