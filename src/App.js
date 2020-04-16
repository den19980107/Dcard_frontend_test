import React, { useState, useRef, useCallback } from 'react';
import useArticles from './hooks/useArticle';
import Article from './components/Article/Article';
import Loading from './components/Loading/Loading';

function App() {
    const [before, setBefore] = useState();
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
                setBefore(node.id)
            }
        })
        if (node) observer.current.observe(node)
    });

    return (
        <div className="App">
            <div className="container" style={{ background: "white" }}>
                {articles.map((article, index) => {
                    if (articles.length === index + 1) {
                        return (
                            <div key={index}>
                                <Article reference={lastArticleElementRef} article={article}></Article>
                                <hr></hr>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index}>
                                <Article article={article}></Article>
                                <hr></hr>
                            </div>
                        )
                    }
                })}
                {loading && <Loading></Loading>}
                {error && <div>error</div>}
            </div>
        </div>
    );
}

export default App;
