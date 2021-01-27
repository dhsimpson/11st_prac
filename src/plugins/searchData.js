import axios from "axios"

export default {
    install (Vue) {// Vue.js의 전역 객체가 들어옴
        Vue.prototype.$search = async ({ searchText }) => {
            const { data } = await axios.get(`https://trusting-williams-8cacfb.netlify.app/.netlify/functions/search?apiKey=${process.env.API_KEY}&searchText=${searchText}`);
            return data
        }
    }
}