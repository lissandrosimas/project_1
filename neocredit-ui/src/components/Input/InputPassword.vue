<template>

    <div class="dw-ipassword">
        <div class="input-group" style="background-color: transparent;">
            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
            <input type="password"
                   class="form-control"
                   :value="value"
                   @input="updateValue($event.target.value)"
                   @key.up="updateValue($event.target.value)"
                   :placeholder="placeholder"
                   :required="required">
        </div>
        <div class="require-list" v-if="helper">

            <div v-if="lower">
                <i class="fa fa-check-square-o" v-if="hasLower"></i>
                <i class="fa fa-square-o" v-if="!hasLower"></i>
                <span :class="{ 'valid' : hasLower }">Mínimo 1 letra minúscula</span>
            </div>

            <div v-if="upper">
                <i class="fa fa-check-square-o" v-if="hasUpper"></i>
                <i class="fa fa-square-o" v-if="!hasUpper"></i>
                <span :class="{ 'valid' : hasUpper }">Mínimo 1 letra maiúscula</span>
            </div>

            <div v-if="special">
                <i class="fa fa-check-square-o" v-if="hasSpecial"></i>
                <i class="fa fa-square-o" v-if="!hasSpecial"></i>
                <span :class="{ 'valid' : hasSpecial }">Mínimo um caracter especial</span>
            </div>

            <div v-if="length">
                <i class="fa fa-check-square-o" v-if="hasLength"></i>
                <i class="fa fa-square-o" v-if="!hasLength"></i>
                <span :class="{ 'valid' : hasLength }">Tamanho mínimo: {{ length }}</span>
            </div>

        </div>
    </div>

</template>
<script>


    export default {
        props: ['value', 'length', 'lower', 'upper', 'special', 'size', 'required', 'placeholder', 'helper'],
        data() {
            return {
                hasLower: false,
                hasUpper: false,
                hasSpecial: false,
                hasLength: false
            }
        },
        computed: {
            hasError() {

            },
            message() {

            }
        },
        methods: {

            updateValue(newVal) {

                this.validate(newVal)

                this.$emit('input', newVal)

            },
            validate(password) {

                this.hasLower = this.lower && (/[a-z]/).test(password)
                this.hasUpper = this.upper && (/[A-Z]/).test(password)
                this.hasSpecial = this.special && (/[^\w\s]/).test(password)
                this.hasLength = this.length && (password !== undefined && password !== '' && password.length >= this.length)

            },
            isValid() {
                let isValid = true

                if (this.lower) {
                    isValid = isValid && this.hasLower
                }

                if (this.upper) {
                    isValid = isValid && this.hasUpper
                }

                if (this.special) {
                    isValid = isValid && this.hasSpecial
                }

                if (this.length) {
                    isValid = isValid && this.hasLength
                }

                return isValid
            }
        }
    }
</script>