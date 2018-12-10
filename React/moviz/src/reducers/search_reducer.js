import {SEARCH_RESULT, SELECTED_MOVIE} from '../actions'

export default function searchResultReducer(state=null, action){
    if(action.payload){
        switch(action.type){
            case SEARCH_RESULT:
                return action.payload.data
            case SELECTED_MOVIE:
                return null
            default:
                return state
        }
    }else{
        return state
    }
}