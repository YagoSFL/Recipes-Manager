const INITIAL_STATE = { 
    currentRecipe: {},
    lista: [], 
    visible: 'default',
    buttonValue: 0,
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
            return {...state, currentRecipe: action.payload, buttonValue: 1}
        case 'RECIPE_SEARCHED':
            return {...state, lista: action.payload, buttonValue: 0}
        case 'FILTER_CHANGED':
            return {...state, filtros: action.payload}
        case 'CONTENT_CHANGED':
            return {...state, visible: action.payload, filtros: INITIAL_STATE.filtros} 
        default:
            return state
    }   
}