import React, { Component } from 'react';
import './SearchBar.css';
import {Row,Col,Form,Input,ListGroup,ListGroupItem} from 'reactstrap';

export default class SearchBar extends Component {
    state={
        searchString: "",
        searchStars:[true,true,false,false,false]
    }
    /* handle title change */
    handleMovieTitleChange=(e)=>{
        this.setState({
            searchString:e.target.value
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
    render(){
        return (
            <Row>
            <Col lg="9" className="search-box-container">
                <Form inline>
                    <Input type="text" name="title" className="input-box" placeholder="search for movie..." onChange={this.handleMovieTitleChange}/>
                </Form>
            </Col>
            <Col lg="3" className="search-stars-container">
            {' '}
                <ListGroup horizontal className="search-star">
                    <ListGroupItem onClick={()=>this.handleStarClick(0)}>{this.state.searchStars[0]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.handleStarClick(1)}>{this.state.searchStars[1]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.handleStarClick(2)}>{this.state.searchStars[2]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.handleStarClick(3)}>{this.state.searchStars[3]?'★':'☆'}</ListGroupItem>
                    <ListGroupItem onClick={()=>this.handleStarClick(4)}>{this.state.searchStars[4]?'★':'☆'}</ListGroupItem>
                </ListGroup>
            </Col>
            </Row>
        )
}
}
