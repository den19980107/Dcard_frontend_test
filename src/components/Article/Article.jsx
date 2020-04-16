import React, { useState, useEffect } from 'react';
import './Article.css'
// import component 
import Reactions from '../Reactions/Reactions';
import PreviewImage from '../PreviewImage/PreviewImage';
import { Title } from '../Title/Title';
import Modal from '../Modal/Modal';
import FullArticle from '../FullArticle/FullArticle'
import Avatar from '../Avatar/Avatar'
import api from '../../api/index'

const Article = ({ article, reference }) => {
    const [isShowModal, setIsShowModal] = useState(false);

    const showModal = () => {
        setIsShowModal(true)
    }
    const hideModal = () => {
        setIsShowModal(false)
    }
    return (
        <React.Fragment>
            <div style={{ padding: "1rem 2rem" }} id={article.id} ref={reference ? reference : null} onClick={showModal}>
                <div style={{ marginBottom: "1rem" }}>
                    <Title article={article}></Title>
                </div>
                <div style={{ width: "100%", display: "flex" }}>
                    {/* 如果沒有照片的話就讓標題跟內容的寬度變成 100% */}
                    <div style={{ width: article.media.length !== 0 ? "90%" : "100%" }}>
                        <div className="title">
                            {/* title */}
                            <span >{article.title}</span>
                        </div>
                        <div className="subTitle">
                            {/* subtitle */}
                            <span >{article.excerpt}</span>
                        </div>
                        <div style={{ width: "100%" }}>
                            {/* reaction */}
                            <Reactions reactions={article.reactions} commentCount={article.commentCount}></Reactions>
                        </div>
                    </div>
                    <div style={{ width: "10%" }}>
                        {/* image */}
                        <PreviewImage media={article.media}></PreviewImage>
                    </div>
                </div>
            </div>
            <Modal
                visable={isShowModal}
                onCancel={hideModal}
                title={
                    <div style={{ display: "flex", padding: "1rem 0", marginBottom: "1rem" }}>
                        <div style={{ marginRight: "1rem", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Avatar
                                gender={article.gender}
                                department={article.department}
                                size={50}
                            ></Avatar>
                        </div>
                        <div >
                            <div>
                                {/* name */}
                                {article.forumName}
                            </div>
                            <div>
                                {/* department */}
                                {`@${article.department}`}
                            </div>
                        </div>
                    </div>
                }
            >
                <FullArticle id={article.id}></FullArticle>
            </Modal>

        </React.Fragment>
    );
};

export default Article;