<template>
    <div v-if="render">
        <slot></slot>
    </div>
</template>
<script>
    import Facade from '@/facade/facade'
    const facade = new Facade();

    export default {
        props: {
            roles: [String, Array],
            permissions: [String, Array]
        },
        data() {
            return {
                render: true
            }
        },
        methods: {},
        mounted() {
            this.$nextTick(() => {

                if (this.roles !== undefined && this.roles !== null) {
                    this.render = facade.hasRole(this.roles)
                }

                if (this.permissions !== undefined && this.permissions !== null) {
                    this.render = this.render && facade.hasPermission(this.permissions)
                }

            })
        }

    }

</script>