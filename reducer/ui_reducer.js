const uiReducer = (state, action) => {
    if(action.type === 'SET_LOADING_ERROR') {
        const {loading, error, codes} = action.payload
        return {...state, status: {loading, error, codes}}
    } if(action.type === 'SET_CATEGORY') {
        const {id, status, name} = action.payload
        return {...state, activeCategories: {id, status, name}}
    } if(action.type === 'SET_QUERY') {
        return {...state, query: action.payload}
    } if(action.type === 'SHOW_SIDEBAR') {
        return {...state, openSidebar: action.payload}
    } if(action.type === 'SET_TABS') {
        const {id, title} = action.payload
        return {...state, tabs: {id, title}}
    }
}

export default uiReducer