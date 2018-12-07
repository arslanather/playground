import {FETCH_GAMES, SELECT_GAME} from '../actions'

export default function reduceGameSearch(state=null, action){
    switch(action.type){
        case FETCH_GAMES:
            return action.payload.data
        default:
            return state
    }
    return state
}