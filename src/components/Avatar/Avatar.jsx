import React from 'react';
import male from '../../assets/male.svg';
import female from '../../assets/female.svg';
const Avatar = ({ gender, department, size }) => {
    if (department) {
        return (
            <div style={{ width: size ? `${size}px` : "20px", height: size ? `${size}px` : "20px", display: "flex", justifyContent: "center", borderRadius: "50%", background: "rgb(36,144,191)", color: "white" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", fontSize: size ? `${size * 0.65}px` : "13px", lineHeight: size ? `${size}px` : "20px" }}>
                    {department[0].toUpperCase()}
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ width: size ? `${size}px` : "20px", height: size ? `${size}px` : "20px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <img src={gender === "M" ? male : female} alt="logo" />
            </div>
        );
    }
};

export default Avatar;