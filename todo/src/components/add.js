import React, {Component} from 'react';
import '../css/add.css';

export default class  Add extends Component {

    state = {
        Label: ''
    };



    onLabelChange = (e) => {
        this.setState({
            Label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.Label)
        this.setState({
            Label: ''
        });
    };



    render() {
        return (
            <form className = "add d-flex "
                  onSubmit = {this.onSubmit}> 
                <input 
                    type = "text"
                    className = "form-control"
                    onChange = {this.onLabelChange}
                    placeholder = "What needs to be done"
                    value = {this.state.Label}
                />
                <button 
                    className = "btn btn-outline-secondary" > 
                    Add Item 
                </button>
            </form>
        );
    }
}




