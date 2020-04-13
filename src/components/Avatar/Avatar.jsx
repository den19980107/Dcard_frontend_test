import React from 'react';
import male from '../../assets/male.svg';
import female from '../../assets/female.svg';
const Avatar = ({ gender, department }) => {
    if (department) {
        return (
            <div style={{ width: "20px", height: "20px", display: "flex", justifyContent: "center", borderRadius: "50%", background: "rgb(36,144,191)", color: "white" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", fontSize: "12.8px", lineHeight: "20px" }}>
                    {department[0]}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ width: "20px", height: "20px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <img src={gender === "M" ? male : female} alt="logo" />
            </div>
        );
    }
};

export default Avatar;