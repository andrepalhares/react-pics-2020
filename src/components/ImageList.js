import React from 'react';

const ImageList = (props) => {
    console.log(props.images)

    const images = props.images.map((image) => {
        return (
            <img src={image.urls.regular} key={image.id} />
        );
    })

    return (
        <div>
            Image list: {props.images.length} found
            {images}
        </div>
    );
}

export default ImageList;