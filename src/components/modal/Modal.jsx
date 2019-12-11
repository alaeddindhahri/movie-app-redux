import React from 'react';
import { Button, ModalHeader, ModalBody, ModalFooter, Form,Input } from 'reactstrap';
import store from '../../js/store/index'
import './Modal.css';
import {addMovie} from '../../js/actions/index'

class AddModal extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            release:'',
            poster:'',
            rating:'',
        }
    }
    handleInputChange=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    }
    handleAddMovie=()=>{
        // console.log("state in modal: "+this.state)
        const {title,release,poster,rating}=this.state
        // console.log("state in modal:TITLE= "+title)
        store.dispatch(addMovie(title,release,poster,rating))
        this.setState({
            title:'',
            release:'',
            poster:'',
            rating:'',
        })
        console.log("set state:"+ this.state.title)
    }
    render(){
    return (
        <div className="modal-container" style={{display:this.props.isOpen?'block':'none'}}>
        <div className="modal-close-button">
            <Button color="danger" onClick={this.props.toggle}>X</Button>
        </div>
        <div>
            <ModalHeader>Add New Movie</ModalHeader>
            <ModalBody>
            <Form>
                <Input type="text" value={this.state.poster} name="poster" placeholder="poster..." onChange={e=>this.handleInputChange(e)}/>
                <Input type="text" value={this.state.title} name="title" placeholder="movie title..." onChange={e=>this.handleInputChange(e)}/>
                <Input type="text" value={this.state.release} name="release" placeholder="movie release year..." onChange={e=>this.handleInputChange(e)}/>
                <Input type="text" value={this.state.rating} name="rating" placeholder="movie rating 1-5" onChange={e=>this.handleInputChange(e)}/>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={()=>{this.handleAddMovie();this.props.toggle()}}>Add</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
        </div>
        </div>
    );
    }
}

export default AddModal;