const Tour = require('../components/Tour.vue');

Tour.install = (Vue, options) => {

    Vue.prototype.$tour = new (Vue.extend(Tour))({
        propsData: options
    });

    if (process.env.NODE_ENV === 'development') window.$tour = Vue.prototype.$tour

}

module.exports = Tour;