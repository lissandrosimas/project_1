<template>
    <input type="checkbox" class="bootstrap-switch" :checked="value" v-bind:readonly="readonly" :disabled="disabled">
</template>
<script>
    export default {
        props: {
        	id: Number,
        	index: Number,
        	value: [Boolean, Number],
        	disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
        	on: {
        		type: String,
        		default: 'Sim'
    		},
    		off: {
        		type: String,
        		default: 'Não'
    		},
			oncolor: {
        		type: String,
        		default: 'success'
    		},
    		offcolor: {
        		type: String,
        		default: 'danger'
    		}
        },
        watch: {
            value: function (value) {
                // update value
                $(this.$el).bootstrapSwitch('state', value);
            },
        },
        mounted() {
            var vm = this;

            var options = {
            	onText: this.on,
            	offText: this.off,
                // disabled: this.disabled,
                // readonly: this.readonly,
                onColor: this.oncolor,
                offColor: this.offcolor
            };

            if (this.value) {
                options.state = this.value;
            }

            $(this.$el).bootstrapSwitch(options).on('switchChange.bootstrapSwitch', (event, state) => {
                vm.$emit('change', state)
                vm.$emit('input', state)
            });
        }
    }
</script>
