import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardImg } from 'reactstrap';
import './MoviesList.css';
import SearchBar from '../searchBar/SearchBar'
import MovieCard from '../movieCard/MovieCard';
import AddModal from '../modal/Modal';

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: "",
            searchStars:[true,false,false,false,false],
            isOpen: false,
            editedMovieObject: {},
        }
        
    }
    
    /* handle title change */
    handleMovieTitleChange=(strTitle)=>{
        this.setState({
            searchString:strTitle
        })
    }
    /* handle stars click */
    handleStarClick=starId=>{
        let tmpSearchStars = this.state.searchStars
        // disabling the stars behind the clicked star
        if(tmpSearchStars[starId]===true){
            for(let i=starId+1;i<=4;i++){
                tmpSearchStars[i]=false
            }
            this.setState({
                searchStars:tmpSearchStars
            })
            return false
        }
        //enabling-disabling the stars ahead of the clicked star
        for(let i=0;i<=starId;i++){
            tmpSearchStars[i]=!tmpSearchStars[starId]
        }
        
        this.setState({
            searchStars:tmpSearchStars
        })
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    editedMovie = (movie) => {
        this.setState({
            editedMovieObject: movie
        })
    }
    render() {
        return (
            <div>
                <SearchBar 
                searchStars={this.state.searchStars} 
                handleStarClick={this.handleStarClick} 
                handleMovieTitleChange={this.handleMovieTitleChange}
                />
                <Row className="movie-cards-container">
                    {this.state.searchString!==""?this.props.MoviesList.filter(movieF=>movieF.title.match(RegExp(this.state.searchString,'gi'))).map(movie => movie.rating>=(this.state.searchStars.reduce((acc, cur) => acc += cur ? 1 : 0))?
                        <MovieCard key={movie.id} movieObject={movie} toggleModal={this.toggleModal} editedMovie={this.editedMovie} />:null
                        ):
                        this.props.MoviesList.map(movie => movie.rating>=(this.state.searchStars.reduce((acc, cur) => acc += cur ? 1 : 0))?
                             <MovieCard key={movie.id} movieObject={movie} toggleModal={this.toggleModal} editedMovie={this.editedMovie} />:null
                             )}
                    <Col lg="3" xs="6">
                        <Card>
                            <a href="#" onClick={this.toggleModal}><CardImg className="add-button" top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_43329.png" alt="add button" /></a>
                        </Card>
                    </Col>
                        {this.state.isOpen?<AddModal 
                        isOpen={this.state.isOpen} 
                        toggle={this.toggleModal} 
                        editedMovieObject={this.state.editedMovieObject} 
                        emptyEditedMovie={this.editedMovie} 
                        />:null}
                </Row>
            </div>
        )
    }
}
const MapStateToProps = state => (
    {
        MoviesList: state.movies,
    }
);

export default connect(MapStateToProps)(MoviesList);
