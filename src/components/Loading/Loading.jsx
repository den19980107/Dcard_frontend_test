import React from 'react';
import loading from '../../assets/loading.svg'
const Loading = () => {
    return (
        <div style={{}}>
            <div style={{ height: "6rem", display: "flex", justifyContent: "center" }}>
                <img src={loading} style={{ height: "100%" }}></img>
            </div>
        </div>
    );
};

export default Loading;