import React from 'react';
import Avatar from '../Avatar/Avatar';

const Title = ({ article }) => {
    const date = new Date(article.createdAt)
    const localDateString = date.toLocaleString('en-GB');
    const localDate = localDateString.split(", ")[0];
    const localTime = localDateString.split(", ")[1];
    let month = localDate.split("/")[1];
    if (month.startsWith("0")) month = month[month.length - 1]
    const day = localDate.split("/")[0];
    const hour = localTime.split(":")[0];
    const minute = localTime.split(":")[1];
    return (
        <div style={{ display: "flex" }}>
            {/* author */}
            <div style={{ marginRight: "1rem" }}>
                <Avatar gender={article.gender} department={article.department}></Avatar>
            </div>
            <span>{article.forumName} &#8226; {article.school ? article.school : "匿名"} &#8226; {`${month}月${day}日 ${hour}:${minute}`}</span>
        </div>
    );
};

export default Title;