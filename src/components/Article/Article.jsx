import React from 'react';
import './Article.css'
import Reactions from '../Reactions/Reactions';
import PreviewImage from '../PreviewImage/PreviewImage';
import Title from '../Title/Title';
// import component 


const Article = ({ article, reference }) => {
    return (
        <div style={{ padding: "1rem 2rem" }} id={article.id} ref={reference ? reference : null}>
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
    );
};

export default Article;