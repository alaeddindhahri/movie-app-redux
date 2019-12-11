import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Row,Col,Card,CardImg} from 'reactstrap';
import './MoviesList.css';
import MovieCard from'../movieCard/MovieCard';
import AddModal from '../modal/Modal';

class MoviesList extends Component{
    constructor(props){
        super(props)
        this.state={
            isOpen:false
        }
    }
    toggleModal=()=>{
        this.setState({
            isOpen:!this.state.isOpen,
        })
    }
    render(){
        // console.log(this.props.)
        return (
            <div>
            <AddModal isOpen={this.state.isOpen} toggle={this.toggleModal}/>
            <Row className="movie-cards-container">
                {this.props.MoviesList.map(movie=>
                    <MovieCard key={movie.id} movieObject={movie}/>
                )}
                <Col lg="3" xs="6">
                <Card>
                    <a href="#" onClick={this.toggleModal}><CardImg className="add-button" top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_43329.png" alt="add button" /></a>
                </Card>
                </Col>
            </Row>
            </div>
        )
    }
}
const MapStateToProps=state=>(
    {
        MoviesList: state.movies,
    }
    );

// const MoviesList = connect(MapStateToProps)(ConnectedMoviesList)
export default connect(MapStateToProps)(MoviesList);
