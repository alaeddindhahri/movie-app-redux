import {ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE,FILTER_MOVIES} from '../actions/actionTypes'
import {getLastMovieKey} from '../actions/index';

const moviesReducer = (state=[],action) => {
    switch(action.type){
        case ADD_MOVIE:
            // console.log("reducer state: "+ action)
            return state.concat({id:getLastMovieKey(state)+1,title:action.title,release:action.release,poster:action.poster,rating:action.rating});
        case DELETE_MOVIE:
            return state.filter(el=>el.id!==action.id);
        case EDIT_MOVIE:
            return;
        case FILTER_MOVIES:
            return;
        default:return state;
    }

}

export default moviesReducer