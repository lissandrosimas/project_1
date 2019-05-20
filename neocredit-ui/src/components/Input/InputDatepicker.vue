<template>
    <div class="input-group date" v-if="group">
        <span class="input-group-addon"><i class="ti ti-calendar"></i></span>
        <input type="text" class="form-control" :value="date" @input="updateValue($event.target.value)" v-bind:readonly="readonly" :disabled="disabled" />
    </div>
    <input v-else type="text" class="form-control" :value="date" maxlength="10" @input="updateValue($event.target.value)" v-bind:readonly="readonly" :disabled="disabled">
</template>

<script>
    import moment from 'moment';

    export default {
        props: {
            value: String,
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            group: {
                type: Boolean,
                default: false
            },
            autoclose: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                date: moment('now')
            }
        },
        watch: {
           value(newValue) {
               let vm = this;
               vm.date = moment(newValue).format('DD/MM/YYYY')
               vm.$emit('input', moment(newValue).format('YYYY-MM-DD'))
               $(this.$el).datepicker('update', vm.date);
           }
        },
        methods: {
            updateValue(value) {
                this.date = value;
            }
        },
        mounted() {
            var vm = this;

            vm.date = moment(vm.value).format('DD/MM/YYYY');

            if (!this.disabled) {
                var options = {
                    language: 'pt-BR',
                    todayHighlight: true,
                    format: 'dd/mm/yyyy'
                };

                if (this.autoclose != undefined && this.autoclose != null) {
                    options.autoclose = this.autoclose;
                }

                $(this.$el).datepicker(options).on('changeDate', (e) => {
                    vm.date = moment(e.date).format('DD/MM/YYYY')
                    vm.$emit('input', moment(e.date).format('YYYY-MM-DD'))
                }).datepicker('update', vm.date);
            }
        }
    }

</script>

<style>
    .datepicker {
        position: absolute !important;
    }
</style>
