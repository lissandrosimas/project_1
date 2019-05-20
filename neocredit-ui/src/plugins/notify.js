const Notify = require('../components/Notification.vue');

Notify.install = (Vue, options) => {

    Vue.prototype.$notify = new (Vue.extend(Notify))({
        propsData: options
    });

    Vue.component('alert', require('../components/Alert.vue'));

    if (process.env.NODE_ENV === 'development') window.$notify = Vue.prototype.$notify

}

module.exports = Notify;
