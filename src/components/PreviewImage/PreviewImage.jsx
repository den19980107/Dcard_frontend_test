import React from 'react';
import './PreviewImage.css'
const PreviewImage = ({ media }) => {
    if (media && media.length !== 0 && media[0].url !== undefined) {
        return (
            <div>
                <img
                    src={media[0].url}
                    className="image">
                </img>
            </div>
        );
    } else {
        return <></>
    }
};

export default PreviewImage;