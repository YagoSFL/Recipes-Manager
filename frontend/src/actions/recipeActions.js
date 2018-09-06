import axios from 'axios'
import { initialize } from 'redux-form'
import { toastr } from 'react-redux-toastr'

const URL = 'http://localhost:4444/api/recipes'
const INITIAL_VALUES = { processos: [{ ingredientes: [{}], preparos: [{}] }] }

export const showData = () => {
    return (dispatch, getState) => {
        let tags = getState().recipe.filtros
        const keys = Object.keys(tags);
        const trues = key => tags[key]
        let result = keys.filter(trues).join('|')
        const search = result ? `?tags__regex=/${result}/` : ''
        axios.get(URL + search)
            .then(resp => dispatch({type: 'RECIPE_SEARCHED', payload: resp.data}))
            .then(dispatch(contentToShow('default')))
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

export const formEditRecipe = (recipe) => {
    return [initialize('newRecipe', recipe),
            contentToShow('Editar')]
}

export const initForm = () => {
    return [
        initialize('newRecipe', INITIAL_VALUES),
        contentToShow('Cadastrar')
    ]
}

export const contentToShow = (show) => { 
    return {
        type: 'CONTENT_CHANGED',
        payload: show
    }
}

export const createRecipe = (values) => {
    return submit(values, 'post', 'Receita cadastrada com sucesso!')
}

export const editRecipe = (values) => {
    return submit(values, 'put', 'Receita alterada com sucesso!')
}

export const removeRecipe = (values) => {
    return submit(values, 'delete', 'Receita removida com sucesso!')
}

const submit = (values, method, msg) => {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${URL}/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', msg)
            dispatch(contentToShow('default'))
            dispatch(showData())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    }
}

export const init = () => {
    return [
        initialize('newRecipe', INITIAL_VALUES),
        contentToShow('default'),
        showData()
    ]
}
