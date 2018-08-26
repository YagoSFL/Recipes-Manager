const INITIAL_STATE = { 
    tabValue: 0
 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TAB_CHANGED':
            return {...state, tabValue: action.payload}
        default:
            return state
    }
}