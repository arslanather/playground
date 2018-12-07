import { combineReducers } from 'redux';
import GameReducer from './game_reducer'
import SelectedGameReducer from './select_game'
const rootReducer = combineReducers({
  state: (state = {}) => state,
  game_reducer: GameReducer,
  selected_game: SelectedGameReducer
});

export default rootReducer;