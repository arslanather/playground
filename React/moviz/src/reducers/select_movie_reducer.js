import {SELECTED_MOVIE, SEARCH_RESULT} from '../actions/index'

export default function movieSelectReducer(state=null, action){
    if(action.payload){
        switch(action.type){
            case SELECTED_MOVIE:
                return action.payload.data
            case SEARCH_RESULT:
                return null    
            default:
                return state
        }
    }else{
        return state
    }
}