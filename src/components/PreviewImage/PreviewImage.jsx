import React from 'react';

const PreviewImage = ({ media }) => {
    if (media && media.length !== 0 && media[0].url !== undefined) {
        return (
            <div>
                <img src={media[0].url} style={{ width: "84px", height: "84px", objectFit: "cover" }}></img>
            </div>
        );
    } else {
        return <></>
    }
};

export default PreviewImage;