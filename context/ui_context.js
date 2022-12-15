import React, { useContext, useReducer} from "react";
import ui_reducer from '../reducer/ui_reducer'
import { useRouter } from "next/router";

const initialState = {
    activeCategories: {
        id: 0,
        status: true,
        name: 'general'
    },
    status: {
        loading: false,
        error: true,
        codes: 0
    },
    query: '',
    openSidebar: false,
    tabs: {
        id: 0,
        title: 'everything'
    }
}

const UiContext = React.createContext()

export const UiProvider = ({children}) => {
    const [state, dispatch] = useReducer(ui_reducer, initialState)

    const handleCategory = (id, status, name) => {
        dispatch({type: 'SET_CATEGORY', payload: {id, status, name}})
    }

    const handleLoadingError = (loading, error, codes) => {
        codes = !codes ? 404 : codes
        dispatch({type: 'SET_LOADING_ERROR', payload: {loading, error, codes}})
    }

    const handleSearch = (query) => {
        dispatch({type: 'SET_QUERY', payload: query})
    }

    const handleTabs = (id, title) => {
        dispatch({type: 'SET_TABS', payload: {id, title}})
        // useRouter().replace(`/${item.title}`)
    }

    const handleShowSidebar = (value) => {
        dispatch({type: 'SHOW_SIDEBAR', payload: value})
    }

    return (
        <UiContext.Provider value={{
            ...state,
            handleLoadingError,
            handleCategory,
            handleSearch,
            handleShowSidebar,
            handleTabs
        }}>
            {children}
        </UiContext.Provider>
    )
}

export const useUiContext = () => {
    return useContext(UiContext)
}