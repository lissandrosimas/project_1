// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('./bootstrap');

import Vue from 'vue';
import App from './App';

import '@/assets/sass/style.scss';
import '../static/js/select2.min.js';
import 'magic-check/css/magic-check.css';
require('../static/js/datepicker/bootstrap-datepicker.min.js');
require('../static/js/datepicker/bootstrap-datepicker.pt-BR.js');
require('../static/js/bootstrap-switch.min.js');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:9095/neocredit-api/api/' : 'http://portal.neocredit.com.br/neocredit-api/api/';
window.moment = require('moment');

import util from './helpers/util';
import money from 'v-money';
import decimal from 'v-money';
import MaskedInput from 'vue-masked-input';
import Notify from './plugins/notify';
import VueSweetAlert from 'vue-sweetalert';
import Loading from './plugins/loading';
import Vuelidate from 'vuelidate';
import VueEditor from 'vue2-editor';
import VueStrap from 'vue-strap';
import Dropzone from 'vue2-dropzone';
import Tour from './plugins/tour';
import Tabs from 'vue-tabs-component';
import VueCharts from 'vue-chartjs';

Vue.filter('formatBRL', (value) => {
    return util.currency(value);
});

Vue.filter('boolSimNao', (value) => {
    return util.boolSimNao(value);
});

Vue.filter('orderStatus', (value) => {
    return util.orderStatus(value);
});

Vue.filter('formatDate', (value, format) => {
    return util.formatDate(value, format);
});

Vue.use(VueCharts);
Vue.use(Tabs);
Vue.use(Dropzone);
Vue.use(Notify);
Vue.use(Tour);
Vue.use(VueSweetAlert);
Vue.use(Vuelidate);
Vue.use(Loading);
Vue.use(VueEditor);
Vue.use(money, {
    precision: 2,
    decimal: ',',
    thousands: '.',
    prefix: 'R$ ',
    suffix: '',
    masked: false
});

Vue.component('dw-pagination', require('./plugins/table/DWPagination.vue'));
Vue.component('dw-table-header', require('./plugins/table/DWTableHeader.vue'));
Vue.component('dw-multi-select', require('./components/Input/DWMultiSelect.vue'));
Vue.component('select2', require('./components/Input/Select2.vue'));
Vue.component('input-datepicker', require('./components/Input/InputDatepicker.vue'));
Vue.component('input-toggle', require('./components/Input/InputToggle.vue'));
Vue.component('dw-textarea', require('./components/Input/DWTextarea.vue'));
Vue.component('alert', require('./components/Alert.vue'));
Vue.component('loading', require('./components/Loading.vue'));
Vue.component('masked-input', MaskedInput);
Vue.component('dropzone', Dropzone);
Vue.component('modal-stock', require('./components/ModalStock.vue'));
Vue.component('modal-price', require('./components/ModalPrice.vue'));
Vue.component('modal-movimentacao', require('./components/ModalMovimentacao.vue'));
Vue.component('modal-reprovar-produto', require('./components/ModalReprovarProduto.vue'));
Vue.component('modal-json', require('./components/ModalJson.vue'));
Vue.component('modal-midia', require('./components/ModalMidia.vue'));
Vue.component('order-update-status', require('./components/UpdateStatusOrder.vue'));
Vue.component('dw-authorized', require('./components/Authorized.vue'))
Vue.component('dw-ipassword', require('./components/Input/InputPassword.vue'))
Vue.component('dw-igroup', require('./components/Input/InputGroup.vue'))
Vue.component('tour', require('./components/Tour.vue'))
Vue.component('aprovados-incluidos', require('./components/ChartAprovadosIncluidos.vue'));

import DwAuthorize from './directives/Authorize'

Vue.directive('dw-authorized', DwAuthorize);


import router from '@/router';

import Facade from '@/facade/facade';
const facade = new Facade();

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (facade.isLoggedIn()) {
            if (to.name != 'home') {
                var user = facade.getAuthUser();
                var module = _.find(user.modulos, function (item) {
                    return item == to.name;
                });

                if (module != undefined) {
                } else {
                }
            }

            return next();
        } else {
            return next({name: 'Login'})
        }
    } else {
        if (facade.isLoggedIn() && to.path === '/login') {
            return next({name: 'home'});
        }
    }

    return next()
});

window.axios.interceptors.request.use(function (config) {
    const user = facade.getAuthUser();

    if (!facade.isLoggedIn()) {
        return config;
    }

    config.headers = {'Authorization': 'Basic ' + user.token, Accept: 'application/json'};

    return config;

}, function (error) {
    return Promise.reject(error);
});

window.axios.interceptors.response.use(response => {
    return response;
}, error => {
    let originalRequest = error.config

    if (error.response.status === 401
        && error.response.data.error === 'Unauthenticated.') {
        originalRequest._retry = true
        facade.logout();
        return;
    }

    if (error.response.status === 401
        && !originalRequest._retry
        && error.response.data.error !== 'invalid_credentials'
    ) {

        originalRequest._retry = true;

        return facade.refreshToken().then((newToken) => {
            originalRequest.headers['Authorization'] = 'Basic ' + newToken
            return window.axios.request(originalRequest);
        })
    }

    if (error.response.status === 404 && !originalRequest._retry) {
        originalRequest._retry = true
        window.location.href = '/'
        return
    }

    return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
});
