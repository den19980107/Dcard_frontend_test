import React from 'react';
import deleteIcon from '../../assets/delete.svg';
// import component
import { useEffect } from 'react';
import api from '../../api';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FullArticleTitle } from '../Title/Title'
const FullArticle = ({ id }) => {
    const [fullArticle, setFullArticle] = useState(null)
    useEffect(() => {
        getFullArticle()
    }, [])
    const getFullArticle = async () => {
        let result = await api.getInstance().getArticleById(id)
        setFullArticle(result.data)
    }
    const processContent = (content) => {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        content = content.replace(urlRegex, function (url) {
            if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                return `<img src = "${url}"></img>`;
            } else {
                return `<a src = "${url}"></a>`;
            }
        })

        let processedContents = []
        let lastIndex = 0;
        for (let i = 0; i < content.length; i++) {
            let result = checkIsImage(content, i)
            if (result.isImage) {
                let span = content.slice(lastIndex, i)
                processedContents.push(createSapn(span))
                const tag = content.slice(i, result.endPosition)
                const url = tag.split("\"")[1];
                processedContents.push(createImage(url))
                lastIndex = result.endPosition + 1
            } else {
                let isLinkResult = checkIsLink(content, i);
                if (isLinkResult.isLink) {
                    let span = content.slice(lastIndex, i)
                    processedContents.push(createSapn(span))
                    const tag = content.slice(i, isLinkResult.endPosition)
                    const url = tag.split("\"")[1];
                    processedContents.push(createLink(url))
                    lastIndex = isLinkResult.endPosition + 1
                }
            }
        }

        if (processedContents.length == 0) {
            processedContents.push(createSapn(content))
        }

        return processedContents
    }

    const createLink = (url) => {
        return (
            <a key={uuidv4()} href={url}>{url}</a>
        )
    }
    const createSapn = (text) => {
        return (
            <span key={uuidv4()}>{text}</span>
        )
    }
    const createImage = (url) => {
        return (
            <img style={{ maxWidth: "100%", maxHeight: "500px" }} key={uuidv4()} src={url}></img>
        )
    }
    const checkIsImage = (content, index) => {
        let isImage = true;
        let startKeyWord = "<img"
        let endKeyWord = "</img>"
        let endPosition = null
        for (let i = index; i < index + startKeyWord.length; i++) {
            if (content[i] != startKeyWord[i - index]) {
                isImage = false;
                break;
            }
        }
        if (isImage) {
            let restContent = content.slice(index, content.length - 1);
            endPosition = index + restContent.indexOf(endKeyWord) + endKeyWord.length - 1;
        }
        return {
            isImage: isImage,
            endPosition: endPosition
        }
    }

    const checkIsLink = (content, index) => {
        let isLink = true;
        let startKeyWord = "<a"
        let endKeyWord = "</a>"
        let endPosition = null
        for (let i = index; i < index + startKeyWord.length; i++) {
            if (content[i] != startKeyWord[i - index]) {
                isLink = false;
                break;
            }
        }
        if (isLink) {
            let restContent = content.slice(index, content.length - 1);
            endPosition = index + restContent.indexOf(endKeyWord) + endKeyWord.length - 1;
        }
        return {
            isLink: isLink,
            endPosition: endPosition
        }
    }


    if (fullArticle) {
        return (
            <div>
                <h2 style={{ fontWeight: "400" }}>{fullArticle.title}</h2>
                <div style={{ padding: "1rem 0" }}>
                    <FullArticleTitle article={fullArticle}></FullArticleTitle>
                </div>
                <div style={{ whiteSpace: "pre-line", fontSize: "18px", lineHeight: "1.6" }}>{processContent(fullArticle.content)}</div>
            </div>
        );
    } else {
        return (
            <div>
                loading...
            </div>
        )
    }
};

export default FullArticle;