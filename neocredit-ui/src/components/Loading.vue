<template>
    <div>
        <div class="loading" v-show="visible">
            <div class="loading-icon">
                <i class="fa fa-refresh fa-spin fa-4x fa-fw"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .loading {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 100000;
        text-align: center;
        color: #FFF;
    }

    .loading-icon {
        position:absolute;
        top:50%;
        left:50%;
    }
</style>

<script>
    const ELEMENT_NAME = 'loading'

    export default {
        data() {
            return {
                visible: false
            }
        },
        methods: {
            show(bool) {
                this.visible = bool;
            }
        },
        created() {
            const $el = document.createElement('div')
            $el.id = ELEMENT_NAME;
            document.body.appendChild($el)
            this.$mount('#loading');
        }
    }

</script>
