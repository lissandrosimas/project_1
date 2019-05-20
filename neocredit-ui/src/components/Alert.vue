<template>
    <div :class="{
            'alert': true,
            'alert-dismissable': true,
            'alert-success': isSuccess,
            'alert-danger': isError,
            'alert-warning': isWarning,
            'alert-info': isInfo
            }"
         ref="alert">
        <i class="ti ti-check"></i>
        &nbsp;
        <strong>{{ title }}</strong>
        {{ message }}
        <button type="button" class="close" data-dismiss="alert" @click="close" aria-hidden="true">×</button>
    </div>
</template>

<script>
    export default {
        props: ['title', 'message', 'type'],
        data() {
            return {}
        },
        computed: {
            isSuccess() {
                return this.type === 'success'
            },
            isError() {
                return this.type === 'error'
            },
            isWarning() {
                return this.type === 'warning'
            },
            isInfo() {
                return this.type === 'info'
            }
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }

</script>
