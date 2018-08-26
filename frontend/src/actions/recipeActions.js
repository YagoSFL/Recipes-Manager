import axios from 'axios'

const URL = 'http://localhost:4444/api/recipes'

export const showData = () => {
    return (dispatch, getState) => {
        let tags = getState().recipe.filtros
        const keys = Object.keys(tags);
        const trues = key => tags[key]
        let result = keys.filter(trues).join('|')
        const search = result ? `?tags__regex=/${result}/` : ''
        axios.get(URL + search)
            .then(resp => dispatch({type: 'RECIPE_SEARCHED', payload: resp.data}))
            .then(dispatch(contentToShow('Lista')))
    }


}

export const handleFilter = event => {
        
    return (dispatch, getState) => {
        let tags = getState().recipe.filtros
        let filtro = Object.assign({...tags},{[event.currentTarget.value]: event.currentTarget.checked})  
        return [dispatch({
            type: 'FILTER_CHANGED',
            payload: filtro
        }),
        dispatch(showData())]
}  
}

export const selectRecipe = (recipe) => {
    return dispatch => {
        axios.get(`${URL}/${recipe._id}`)
            .then(resp => dispatch({
                type: 'RECIPE_SELECTED',
                payload: resp.data
            }))
            .then(dispatch(contentToShow('Receita')))
    }
}

export const contentToShow = (show) => {
    let content = Object.assign({},{[show]: true})   
    return {
        type: 'CONTENT_CHANGED',
        payload: content
    }
}