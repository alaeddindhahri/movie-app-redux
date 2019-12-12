import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, CardImg } from 'reactstrap';
import './MoviesList.css';
import MovieCard from '../movieCard/MovieCard';
import AddModal from '../modal/Modal';

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            // isEdit:false,
            editedMovieObject: {},
        }
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
        console.log("toggled Modal")

    }
    // toggleEdit=()=>{
    //     // console.log("toggled the edit state")
    //     this.setState({
    //         isEdit: !this.state.isEdit,
    //         editedMovieObject:{},
    //     })
    //     console.log("toggled isEdit on cancel from modal")
    // }

    editedMovie = (movie) => {
        this.setState({
            editedMovieObject: movie
        })
        console.log("called edited movie from MoviesList")
    }
    render() {
        console.log("rendering MoviesList component")
        console.log("editedMovieObject in MoviesList component: ", this.state.editedMovieObject)
        return (
            <div>
                <Row className="movie-cards-container">
                    {this.props.MoviesList.map(movie =>
                        <MovieCard key={movie.id} movieObject={movie} toggleModal={this.toggleModal} editedMovie={this.editedMovie} />
                        )}
                    <Col lg="3" xs="6">
                        <Card>
                            <a href="#" onClick={this.toggleModal}><CardImg className="add-button" top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_43329.png" alt="add button" /></a>
                        </Card>
                    </Col>
                        <AddModal 
                        isOpen={this.state.isOpen} 
                        toggle={this.toggleModal} 
                        editedMovieObject={this.state.editedMovieObject} 
                        emptyEditedMovie={this.editedMovie} 
                        />
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

// const MoviesList = connect(MapStateToProps)(ConnectedMoviesList)
export default connect(MapStateToProps)(MoviesList);
