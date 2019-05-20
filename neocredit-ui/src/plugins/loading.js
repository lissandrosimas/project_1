const Loading = require('../components/Loading.vue');

Loading.install = (Vue, options) => {
    Vue.prototype.$loading = new (Vue.extend(Loading))({
        propsData: options
    });

    if (process.env.NODE_ENV === 'development') window.$loading = Vue.prototype.$loading
}

module.exports = Loading;
