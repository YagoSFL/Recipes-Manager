const INITIAL_STATE = { 
    currentRecipe: {},
    lista: [], 
    visible: {},
    filtros: {
        'Favoritas': false,
        'Quentes': false,
        'Frias': false,
        'Rapidas': false,
        'Carnes': false,
        'FrutosDoMar': false,
        'Massas': false,
        'Acompanhamentos': false,
        'Sopas': false,
        'Vegetarianas': false,
        'Veganas': false,
        'LowCarb': false,
        'Sobremesas': false,
        'Bebidas': false,

    } 
}

export default (state = INITIAL_STATE, action)  => {
    switch(action.type) {
        case 'RECIPE_SELECTED':
            return {...state, currentRecipe: action.payload}
        case 'RECIPE_SEARCHED':
            return {...state, lista: action.payload}
        case 'FILTER_CHANGED':
            return {...state, filtros: action.payload}
        case 'CONTENT_CHANGED':
            return {...state, visible: action.payload} 
        default:
            return state
    }   
}