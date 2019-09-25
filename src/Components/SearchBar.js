import React, { Component } from 'react'

export class SearchBar extends Component {
    state={
        keyword:''
    };
    onInputChange = (event) =>{
        this.setState({keyword:event.target.value})

    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.keyword);
        
    }
    render() {
        
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text' onChange={this.onInputChange}
                        value={this.state.keyword}
                        ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
