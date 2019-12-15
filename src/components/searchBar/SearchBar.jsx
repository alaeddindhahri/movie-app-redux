import React, { Component } from 'react';
import './SearchBar.css';
import {Row,Col,Form,Input,ListGroup,ListGroupItem} from 'reactstrap';

export default class SearchBar extends Component {
    state={
        searchString: "",
    }
    /* handle title change */
    handleMovieTitleChange=(e)=>{
        this.setState({
            searchString:e.target.value
        })
    }

    handlePreventDefault=(e)=>{
        e.preventDefault();
    }
    render(){
        return (
            <Row>
            <Col lg="9" className="search-box-container">
                <Form inline onSubmit={(e)=>{this.handlePreventDefault(e);this.props.handleMovieTitleChange(this.state.searchString)}}>
                    <Input type="text" name="title" className="input-box" placeholder="search for movie..." 
                    onChange={(e)=>this.handleMovieTitleChange(e)} 
                    />
                </Form>
            </Col>
            <Col lg="3" className="search-stars-container">
            {' '}
                <ListGroup horizontal className="search-star">
                    <ListGroupItem onClick={()=>this.props.handleStarClick(0)}>{this.props.searchStars[0]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.props.handleStarClick(1)}>{this.props.searchStars[1]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.props.handleStarClick(2)}>{this.props.searchStars[2]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.props.handleStarClick(3)}>{this.props.searchStars[3]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.props.handleStarClick(4)}>{this.props.searchStars[4]?'★':'☆'}</ListGroupItem>
                </ListGroup>
            </Col>
            </Row>
        )
}
}
