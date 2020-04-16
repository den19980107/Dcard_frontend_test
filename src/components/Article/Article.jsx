import React, { useState } from 'react';
import './Article.css'
// import component 
import Reactions from '../Reactions/Reactions';
import PreviewImage from '../PreviewImage/PreviewImage';
import { Title } from '../Title/Title';
import Modal from '../Modal/Modal';
import FullArticle from '../FullArticle/FullArticle'
import Avatar from '../Avatar/Avatar'

const Article = ({ article, reference }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isRead, setIsRead] = useState(false);
    const showModal = () => {
        setIsRead(true)
        setIsShowModal(true)
    }
    const hideModal = () => {
        setIsShowModal(false)
    }
    return (
        <React.Fragment>
            <div className="articleContainer" id={article.id} ref={reference ? reference : null} onClick={showModal}>
                <div style={{ marginBottom: "1rem" }}>
                    <Title article={article}></Title>
                </div>
                <div style={{ width: "100%", display: "flex" }}>
                    {/* 如果沒有照片的話就讓標題跟內容的寬度變成 100% */}
                    <div style={{ width: article.media.length !== 0 ? "90%" : "100%" }}>
                        <div className={isRead ? "title-read" : "title-not-read"}>
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
                    <div style={{ display: "flex", padding: "1rem 0" }}>
                        <div style={{ marginRight: "1rem", display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Avatar
                                gender={article.gender}
                                department={article.department}
                                size={50}
                            ></Avatar>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <div>
                                {/* name */}
                                {article.school ? article.school : "匿名"}
                            </div>
                            {article.department ?
                                <div>
                                    {/* department */}
                                    <span style={{ color: "rgb(51, 151, 207)" }}>{`@${article.department}`}</span>
                                </div> :
                                <></>
                            }
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