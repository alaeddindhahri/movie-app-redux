import React from 'react';
import './App.css';
import {Container} from 'reactstrap'
import MoviesList from './components/moviesList/MoviesList'
import {Route} from 'react-router-dom'
import MovieDescription from '../src/components/movieDescription/MovieDescription'

function App() {
  return (
    <Container fluid={true}>
        <Route exact path="/" component={MoviesList}/>
        <Route exact path="/movies/:title" component={MovieDescription}/>
    </Container>
  );
}

export default App;
