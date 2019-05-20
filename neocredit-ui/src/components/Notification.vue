<template>
    <div>
        <div class="alert-list">
            <transition-group name="alerts"
                              enter-active-class="animated fadeIn"
                              leave-active-class="animated bounceOutRight"
                              tag="div">
                <div v-for="(alert, index) in alerts" :key="index">
                    <alert :title="alert.title" :message="alert.message" :type="alert.type"
                           @close="remove(index)"></alert>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<style scoped>
    .alert-list {
        position: fixed;
        display: block;
        top: 65px;
        right: 25px;
        z-index: 9999;
    }
</style>

<script>
    import Alert from './Alert.vue'

    const ELEMENT_NAME = 'alert-list'

    export default {
        components: {
            'alert': Alert
        },
        data() {
            return {
                alerts: [],
                timeout: 5000
            }
        },
        methods: {
            success(title, message) {
                this.notify(title, message, 'success')
            },
            warning(title, message) {
                this.notify(title, message, 'warning')
            },
            error(title, message) {
                this.notify(title, message, 'error')
            },
            info(title, message) {
                this.notify(title, message, 'info')
            },
            notify(title, message, type) {
                this.alerts.push({
                    title: title,
                    message: message,
                    type: type
                })

                const index = this.alerts.length - 1;

                setTimeout(() => this.remove(index), this.timeout)
            },
            remove(idx) {
                this.alerts.splice(idx, 1);
            }
        },
        created() {
            const $el = document.createElement('div')
            $el.id = ELEMENT_NAME
            document.body.appendChild($el)
            this.$mount('#alert-list');
        }
    }

</script>
