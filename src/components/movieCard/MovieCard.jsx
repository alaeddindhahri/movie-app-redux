import React, { Component } from 'react';
import {Row,Col,Card,CardImg,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import store from '../../js/store/index'
import {deleteMovie} from '../../js/actions/index'
import './MovieCard.css'



class MovieCard extends Component {
    handleDelete=idMovie=>{
        store.dispatch(deleteMovie(idMovie))
    }
    render() {
        // console.log(this.props.movieObject)
        return (
            <Col lg="3" xs="6" className="movie-card">
                <Card>
                    <CardImg top width="100%" src={this.props.movieObject.poster} alt="movie poster" />
                    <CardBody>
                        <CardTitle>{this.props.movieObject.title}</CardTitle>
                        <CardSubtitle>{this.props.movieObject.release}</CardSubtitle>
                            <p className="rating">      {this.props.movieObject.rating==1?'★☆☆☆☆':this.props.movieObject.rating==2?'★★☆☆☆':this.props.movieObject.rating==3?'★★★☆☆':this.props.movieObject.rating==4?'★★★★☆':'★★★★★'}
                            </p>
                        <Button>Movie Description</Button>
                        <Row className="edit-delete-buttons">
                            <Col className="edit-button">
                                <Button color="info" onClick={()=>{this.props.toggleModal();this.props.editedMovie(this.props.movieObject)}}>Edit</Button>
                            </Col>
                            <Col className="delete-button">
                                <Button color="danger" onClick={()=>this.handleDelete(this.props.movieObject.id)}>Delete</Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default MovieCard
