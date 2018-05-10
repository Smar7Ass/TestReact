import React, { Component } from 'react';
import axios from 'axios';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { URL } from '../../../config';

class NewsList extends Component {

    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.props.end}`)
        .then( response => {
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }

    render(){
        console.log(this.state.items)
        return(
            <div>
                123123
            </div>
        )
    }

}

export default NewsList;