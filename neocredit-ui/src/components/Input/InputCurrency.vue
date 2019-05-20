<template>
    <span>
        R$ <input
            type="text"
            ref="inputCur"
            :value="value"
            @input="updateValue($event.target.value)"
            class="form-control"
            :disabled="disabled">
    </span>
</template>
<script>

    import util from '../../helpers/util'

    export default {
        props: ['value', 'disabled'],
        methods: {
            updateValue(value) {
                this.$emit('input', value)
                this.$refs.inputCur.value = util.currency(value)
            },
            normalize(value) {
                return value.trim().replace(/./, '').replace(/,/, '.')
            }
        },
        mounted() {
            this.$refs.inputCur.value = util.currency(this.value)
        }
    }
</script>
