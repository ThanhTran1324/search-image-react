import React, { Component } from 'react'

export class ImageCard extends Component {
    constructor(props) {
        super(props)
        
        this.state={
            spans:0
        };
        this.imageRef=React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
        //run function Setspans after image loaded so we can get images height
    }
    setSpans = () =>{
        console.log(this.imageRef.current.clientHeight);
        //access to DOM DATA
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans:spans});
    }
    render() {
        const {description,urls,id} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    key={id}
                    ref={this.imageRef}
                    /**pass imageRef to DOM so we can access to DOM DATA */
                    alt={description}
                    src={urls.regular}
                ></img>
            </div>
        )
    }
}

export default ImageCard
