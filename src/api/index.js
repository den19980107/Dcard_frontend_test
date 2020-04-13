import axios from 'axios';

class api {
    baseUrl = "https://www.dcard.tw/_apicors/posts"
    static _instance;

    static getInstance() {
        this._instance = this._instance || new api();
        return this._instance;
    }

    async getArticles(before) {
        const query = {
            params: {
                popular: true,
                before: before ? before : null
            }
        }
        const response = await axios.get(this.baseUrl, query)
        return response
    }

    async getArticleById(postId) {
        const apiUrl = `${this.baseUrl}/${postId}`
        const response = await axios.get(apiUrl)
        return response
    }
}
export default api