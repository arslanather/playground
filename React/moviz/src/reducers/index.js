import { combineReducers } from 'redux';
import searchResultsReducer from './search_reducer'
import selectedMovieReducer from './select_movie_reducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  searchResults: searchResultsReducer,
  selectedMovie: selectedMovieReducer
});

export default rootReducer;