import axios from 'axios';

export const SEARCH_RESULT = 'SEARCH_RESULT'
export const SELECTED_MOVIE = 'SELECTED_MOVIE' 


const API_KEY = '9ce7625'

export function fetchSearch(term){
    const SEARCH_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${term}`
    
    const request = axios.get(SEARCH_URL)

    return {
        type: SEARCH_RESULT,
        payload: request

    };
}

export function selectMovie(movie){
    const MOVIE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`

    const request = axios.get(MOVIE_URL)

    return {
        type: SELECTED_MOVIE,
        payload: request
    };
}