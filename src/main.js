// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Carousel, CarouselItem } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Carousel)
Vue.use(CarouselItem)

//公共配置
axios.defaults.baseURL = 'http://www.wwtliu.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})