import {createStore,combineReducers} from 'redux';
import moviesReducer from '../reducers/index'



const initialState={
    movies:[
        {id:1,title:'The Irishman',release:'2019',poster:'http://www.impawards.com/2019/posters/irishman.jpg',rating:5},
        {id:2,title:'The Italian Job',release:'2003',poster:'https://images-na.ssl-images-amazon.com/images/I/71II4XXVm1L._SY679_.jpg',rating:3},
        {id:3,title:'I Am Legend',release:'2007',poster:'https://images-na.ssl-images-amazon.com/images/I/51rEXKCgVOL.jpg',rating:4},
        {id:4,title:'Gemini Man',release:'2019',poster:'https://cdn.collider.com/wp-content/uploads/2019/04/gemini-man-teaser-poster.jpg',rating:1},
    ],
};


const rootReducer = combineReducers({
    movies: moviesReducer,
})

export default createStore(rootReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());