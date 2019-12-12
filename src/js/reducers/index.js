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
            console.log("update movie from reducer")
            // console.log(el.id)
            console.log(action.id)
            return state.map(el=>el.id==action.payload.id? {...el, ...action.payload.newMovie}:el);
            // return state.map(el=>el.id==action.id?{id:action.id,title:action.title,release:action.release,poster:action.poster,rating:action.rating}:el);
        case FILTER_MOVIES:
            return;
        default:return state;
    }

}

export default moviesReducer