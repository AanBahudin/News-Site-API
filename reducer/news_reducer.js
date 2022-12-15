const newsReducer = (state, action) => {
    if(action.type === 'GET_ALL_NEWS') {
        return {...state, allNews: action.payload}
    } if(action.type === 'NEWS_CATEGORY') {
        return {...state, categoryNews: action.payload}
    } if(action.type === 'REMOVE_NEWS_CATEGORY') {
        return {...state, categoryNews: []}
    } if(action.type === 'GET_SINGLE_NEWS') {
        return {...state, singleNews: action.payload}
    } if(action.type === 'REMOVE_SINGLE_NEWS') {
        return {...state, singleNews: []}
    } if(action.type === 'SEARCH_NEWS') {
        return {...state, searchNewsResult: action.payload}
    }
}

export default newsReducer