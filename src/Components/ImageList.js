import React, { Component } from 'react';
import './../CSS/ImageList.css';
import ImageCard from './ImageCard';
export class ImageList extends Component {
    render() {
        const images = this.props.images.map((image)=>{
            return <ImageCard key={image.id} image={image}></ImageCard>
        });
        return (
            <div className="image-list">
                {images}
            </div>
        )
    }
}

export default ImageList
