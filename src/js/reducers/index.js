import {ADD_MOVIE,DELETE_MOVIE,EDIT_MOVIE} from '../actions/actionTypes'
import {getLastMovieKey} from '../actions/index';

const moviesReducer = (state=[],action) => {
    switch(action.type){
        case ADD_MOVIE:
            return state.concat({id:getLastMovieKey(state)+1,title:action.title,release:action.release,poster:action.poster,rating:action.rating});
        case DELETE_MOVIE:
            return state.filter(el=>el.id!==action.id);
        case EDIT_MOVIE:
            return state.map(el=>el.id==action.payload.id? {...el, ...action.payload.newMovie}:el);
        default:return state;
    }

}

export default moviesReducer