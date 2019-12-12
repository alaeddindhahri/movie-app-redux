import React from 'react';
import { Button, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import store from '../../js/store/index'
import './Modal.css';
import { addMovie } from '../../js/actions/index'
import { editMovie } from '../../js/actions/index'
import { connect } from 'react-redux'


class AddModal extends React.Component {
    constructor(props) {
        super(props)
        console.log("TCL: AddModal -> constructor -> Object.entries(this.props.editedMovieObject).length", Object.entries(this.props.editedMovieObject))
        this.state = {
            title: Object.entries(this.props.editedMovieObject).length == 0 ? this.props.editedMovieObject.title : '',
            release: Object.entries(this.props.editedMovieObject).length != 0 ? this.props.editedMovieObject.release : '',
            poster: Object.entries(this.props.editedMovieObject).length != 0 ? this.props.editedMovieObject.poster : '',
            rating: Object.entries(this.props.editedMovieObject).length != 0 ? this.props.editedMovieObject.rating : '',
        }
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log("calledd handle input change")
        // // console.log(this.state)
        // console.log("title:"+this.state.title+" poster:"+this.state.poster+" release:"+this.state.release+" rating:"+this.state.rating)
    }
    handleAddMovie = () => {
        // console.log("state in modal: "+this.state)
        // this.handleSetUnchangedFields();
        const { title, release, poster, rating } = this.state
        // console.log("state in modal:TITLE= "+title)

        // console.log("before add dispatch:")
        // console.log("title:"+this.state.title+" poster:"+this.state.poster+" release:"+this.state.release+" rating:"+this.state.rating)
        // store.dispatch(addMovie(title,release,poster,rating))
        this.props.addMovie(title, release, poster, rating)
        this.setState({
            title: '',
            release: '',
            poster: '',
            rating: '',
        })
        console.log("called Add Movie")
        console.log("state after adding new movie:", this.state)
        console.log("editedMovieObject in modal after adding new movie: ", this.props.editedMovieObject)
    }
    componentDidMount() {
        if (Object.entries(this.props.editedMovieObject).length != 0) {
            this.setState({
                title: this.props.editedMovieObject.title,
                poster: this.props.editedMovieObject.poster,
                release: this.props.editedMovieObject.release,
                rating: this.props.editedMovieObject.rating

            }

            )
            console.log("TCL: AddModal -> componentDidMount -> setState", this.state)
        }
    }

    // handleUpdateMovie=(id,title,release,poster,rating)=>{
    //     console.log("title:"+this.state.title+" poster:"+this.state.poster+" release:"+this.state.release+" rating:"+this.state.rating)
    //     console.log("called handle update");
    //     store.dispatch(editMovie(id,title,release,poster,rating))
    //     console.log("done updating")
    // }

    handleUpdateMovie = () => {
        this.props.editMovie(this.props.editedMovieObject.id, this.state)
        // this.setState({
        //     title:'',
        //     release:'',
        //     poster:'',
        //     rating:'',
        // })
    }



    handleClick = () => Object.entries(this.props.editedMovieObject).length === 0 ?
        (() => {

            this.handleAddMovie();
            this.props.toggle();
            this.props.emptyEditedMovie({})
        }
        )
        : (

            () => {
                this.handleUpdateMovie();
                this.props.emptyEditedMovie({});
                this.props.toggle()
            }
        )


    render() {
        console.log("TCL: constructor -> props", this.state)
        console.log("TCL: AddModal -> render -> this.props.editedMovieObject", this.props.editedMovieObject)
        return (
            <div className="modal-container" style={{ display: this.props.isOpen ? 'block' : 'none' }}>
                <div className="modal-close-button">
                    <Button color="danger" onClick={this.props.toggle}>X</Button>
                </div>
                <div>
                    <ModalHeader>Add New Movie</ModalHeader>
                    <ModalBody>
                        <Form>
                            {/* <Input type="text"  name="poster" placeholder="poster..." onChange={e=>this.handleInputChange(e)}/>
                <Input type="text" name="title" placeholder="movie title..." onChange={e=>this.handleInputChange(e)}/>
                <Input type="text" name="release" placeholder="movie release year..." onChange={e=>this.handleInputChange(e)}/>
                <Input type="text"  name="rating" placeholder="movie rating 1-5" onChange={e=>this.handleInputChange(e)}/> */}
                            <Input type="text" value={this.state.poster}
                                name="poster"
                                onContextMenu={e => console.log("TCL: AddModal -> render -> e", e.target.value)}
                                placeholder="poster..." onChange={e => this.handleInputChange(e)} />

                            <Input type="text" value={this.state.title} name="title" placeholder="movie title..." onChange={e => this.handleInputChange(e)} />
                            <Input type="text" value={this.state.release} name="release" placeholder="movie release year..." onChange={e => this.handleInputChange(e)} />
                            <Input type="text" value={this.state.rating} name="rating" placeholder="movie rating 1-5" onChange={e => this.handleInputChange(e)} />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={()=>{this.handleAddMovie();this.props.toggle()}}>{Object.entries(this.props.editedMovieObject).length===0?'Add':'Update'}</Button>{' '}
            <Button color="secondary" onClick={()=>{this.handleEmptyLocalState();this.props.toggle()}}>Cancel</Button> */}
                        <Button color="primary" onClick={this.handleClick()}>{Object.entries(this.props.editedMovieObject).length === 0 ? 'Add' : 'Update'}</Button>{' '}
                        <Button color="secondary" onClick={Object.entries(this.props.editedMovieObject).length === 0 ? () => { this.props.toggle() } : () => { this.props.toggle(); this.props.emptyEditedMovie({}) }}>Cancel</Button>
                    </ModalFooter>
                </div>
            </div>
        );
    }
}


const mapDispatchToKhra = {
    editMovie,
    addMovie,
}

export default connect(null, mapDispatchToKhra)(AddModal);