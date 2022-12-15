import axios from 'axios'
import React, { useReducer, useContext} from "react";
import newsReducer from "../reducer/news_reducer";
import {useUiContext} from './ui_context'
import { useRouter } from "next/router";

const initialState = {
    allNews: [],
    categoryNews: [],
    singleNews: [],
    searchNewsResult: []
}

const NewsContext = React.createContext()

export const NewsProvider = ({children}) => {
    const [state, dispatch] = useReducer(newsReducer, initialState)

    const { query, handleLoadingError, handleSearch} = useUiContext()
    const router = useRouter()
    const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1/news' : 'https://project-news-api.herokuapp.com/api/v1/news'
    
    //? GET SINGLE NEWS
    const getSingleNews = async (news) => {
        dispatch({type: 'REMOVE_SINGLE_NEWS'})
        handleLoadingError(true, false)
        handleSearch('')
        try {
            const response = await axios.post(`${baseURL}/singlenews`, {news})
            dispatch({type: 'GET_SINGLE_NEWS', payload: response.data})
            handleLoadingError(false, false, response.status)
        } catch (error) {
            handleLoadingError(false, true)
        }
    }

    //? SEARCHING FOR NEWS
    const searchNews = async() => {
        router.push(`/search/${query}`)
    }    
    return (
        <NewsContext.Provider value={{
            ...state,
            baseURL,
            getSingleNews,
            searchNews
        }}>
            {children}
        </NewsContext.Provider>
    )
}

export const useNewsContext = () => {
    return useContext(NewsContext)
}