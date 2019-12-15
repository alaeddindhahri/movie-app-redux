import React from 'react';
import './Modal.css';
import { addMovie } from '../../js/actions/index'
import { editMovie } from '../../js/actions/index'
import { connect } from 'react-redux'

class AddModal extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            title:Object.entries(this.props.editedMovieObject).length===0?null:this.props.editedMovieObject.title,
            release:Object.entries(this.props.editedMovieObject).length===0?null:this.props.editedMovieObject.release,
            poster:Object.entries(this.props.editedMovieObject).length===0?null:this.props.editedMovieObject.poster,
            rating:Object.entries(this.props.editedMovieObject).length===0?null:this.props.editedMovieObject.rating,
        }
        
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddMovie = () => {        
        const { title, release, poster, rating } = this.state
        this.props.addMovie(title, release, poster, parseInt(rating))
        this.setState({
            title: null,
            release: null,
            poster: null,
            rating: null,
        })
    }
    handleUpdateMovie = () => {
        this.props.editMovie(this.props.editedMovieObject.id, this.state)
        this.setState({
            title: null,
            release: null,
            poster: null,
            rating: null,
        })
    }
    render() {
        return (
            <div className="modal-container" style={{display:this.props.isOpen?'block':'none'}}>
                <h2>Movie details</h2>
                <form className="form-modal">
                    <input type="text" name="title" 
                    defaultValue={this.state.title} 
                    className="modal-input title-input" placeholder="title..." onChange={this.handleInputChange}/>
                    <input type="text" name="release" 
                    defaultValue={this.state.release} 
                    className="modal-input release-input" placeholder="release year..." onChange={this.handleInputChange}/>
                    <input type="text" name="poster" 
                    defaultValue={this.state.poster} 
                    className="modal-input poster-input" placeholder="poster link..." onChange={this.handleInputChange}/>
                    <input type="text" name="rating" 
                    defaultValue={this.state.rating} 
                    className="modal-input rating-input" placeholder="rating 1-5" onChange={this.handleInputChange}/>
                    <div className="modal-buttons">
                        <button 
                        className="btn-primary btn-add-update" 
                        type="button" 
                        onClick={Object.entries(this.props.editedMovieObject).length===0?()=>{this.handleAddMovie();this.props.toggle();this.props.emptyEditedMovie({});}
                        :
                        ()=>{this.handleUpdateMovie();this.props.toggle();this.props.emptyEditedMovie({});}}>{Object.entries(this.props.editedMovieObject).length === 0 ?'Add':'Update'}
                        </button>
                        <button className="btn-secondary btn-cancel" type="button" onClick={()=>{this.props.toggle();
            this.props.emptyEditedMovie({})}}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}


const mapDispatchToKhra = {
    editMovie,
    addMovie,
}

export default connect(null, mapDispatchToKhra)(AddModal);