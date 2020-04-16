import React, { useCallback } from 'react';
import './Modal.css'
import deleteIcon from '../../assets/delete.svg';
import { useState } from 'react';
import { useEffect } from 'react';
const Modal = ({ visable, title, onCancel, children }) => {
    const [ref, setRef] = useState(null)
    const [scrollRef, setScrollRef] = useState(null)
    const modelRef = useCallback(node => {
        setRef(node)
    });

    const scrollReference = useCallback(node => {
        setScrollRef(node)
    })

    const hideModal = (e) => {
        // check is outside of modal
        if (e.target == ref) {
            // 讓 modal 滑回最上面
            scrollRef.scrollTop = 0
            onCancel()
        }
    }
    return (
        <div
            ref={modelRef}
            className="modal"
            style={{ display: visable ? "block" : "none" }}
            onClick={hideModal}>
            <div
                ref={scrollReference}
                className="container"
                style={{
                    background: "white",
                    maxHeight: "calc(100vh)",
                    overflowY: "auto",
                    padding: "0 4rem"
                }}
            >
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {title}
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <div style={{ width: "30px", height: "30px" }} onClick={onCancel}>
                                <img src={deleteIcon} alt="logo"></img>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;