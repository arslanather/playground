import {SELECT_GAME} from '../actions/index';

export default function selectGameReducer(state=null, action){
    switch(action.type){
        case SELECT_GAME:
            return action.payload.game
        default:
            return state
    }
}