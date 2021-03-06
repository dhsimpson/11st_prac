// parcel-bundler가 지원 안 해주던
//async - await 쓸 수 있음
import 'regenerator-runtime'; 
import Vue from 'vue';
import App from './App';

import store from './store';
import searchData from "./plugins/searchData";
import fetchData from "./plugins/fetchData";
import lazyLoad from './plugins/lazyLoad';

Vue.use(searchData);
Vue.use(fetchData);
Vue.use(lazyLoad);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})