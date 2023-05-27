import React, { Component } from 'react';
import '../css/search-panel.css';



export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };


    render() {
        return (
            <input 
                className = "form-control"
                placeholder = "type to saerch"  
                value = {this.state.term} 
                onChange = {this.onSearchChange}
            />
        )
    }
}




