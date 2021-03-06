import {ADD_MOVIE} from './actionTypes'
import {DELETE_MOVIE} from './actionTypes'
import {FILTER_MOVIES} from './actionTypes'
import {EDIT_MOVIE} from './actionTypes'

/***** Add movie action *****/
export const addMovie=(title,release,poster,rating)=>(
    
    {
        type: ADD_MOVIE,
        title,
        release,
        poster,
        rating
    }
)
//get id of the last added movie
export const getLastMovieKey=state=>{
    return (
        state.length===0?0:state[state.length-1].id
    )
}

/***** delete movie action *****/
export const deleteMovie=id=>(
    {
        type: DELETE_MOVIE,
        id
    }
)

/***** Edit movie action *****/
export const editMovie=(id,newMovie)=>(
    {
        type: EDIT_MOVIE,
        payload: {
            id, newMovie
        }
    }
)
