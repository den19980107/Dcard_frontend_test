import { useEffect, useState } from 'react';
import api from '../api';
import axios from 'axios';

const useArticles = (before) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        getArticles();
    }, [before])

    const getArticles = async () => {
        try {
            let res = await api.getInstance().getArticles(before)
            const articles = res.data;
            setArticles(prevArticles => {
                return [...prevArticles, ...articles]
            })
            setLoading(false)
        } catch (e) {
            if (axios.isCancel(e)) return
            setError(true)
        }
    }
    return {
        loading,
        error,
        articles
    }
};

export default useArticles;