import React, { Component } from 'react';
import unsplash from './../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from "./ImageList"

class  App extends Component {
    
        state = {
             images:[]
        };
onFormSubmit = async (keyword) => {
    
    const response = await unsplash.get('/search/photos',
    {
        params:{query:keyword}
    });
    console.log(response.data.results);
    this.setState({images : response.data.results});
};
    render(){
        return <div className="ui container" style={{marginTop:"50px"}}>
            <SearchBar onSubmit={this.onFormSubmit}></SearchBar>
            
            <ImageList images={this.state.images}></ImageList>
        </div>
        }
};
export default App;