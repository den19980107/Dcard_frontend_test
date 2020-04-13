import React, { useEffect, useState, useRef, useCallback } from 'react';
import api from './api';
import useArticles from './hooks/useArticle';
import Article from './components/Article/Article';

function App() {
    const [before, setBefore] = useState();
    const [lastArticleId, setLastArticleId] = useState();
    const observer = useRef();
    const {
        loading,
        error,
        articles
    } = useArticles(before);

    const lastArticleElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log("visable")
                setBefore(node.id)
            }
        })
        if (node) observer.current.observe(node)
    });

    return (
        <div className="App">
            {loading && <div>loading...</div>}
            {error && <div>error</div>}
            <div className="container" style={{ background: "white" }}>
                {articles.map((article, index) => {
                    if (articles.length === index + 1) {
                        return (
                            <div>
                                <Article reference={lastArticleElementRef} article={article}></Article>
                                <hr></hr>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <Article article={article}></Article>
                                <hr></hr>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default App;
