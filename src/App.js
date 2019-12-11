import React from 'react';
import './App.css';
import {Container} from 'reactstrap'
import SearchBar from './components/searchBar/SearchBar'
import MoviesList from './components/moviesList/MoviesList'
function App() {
  return (
    <Container fluid={true}>
        <SearchBar/>
        <MoviesList/>
    </Container>
  );
}

export default App;
