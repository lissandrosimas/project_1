<template>
    <div>
        <modal :value.sync="show" @closed="close()" @cancel="close()">
            <div class="col-md-12 col-xs-12">
                <img src="url" height="300" width="300">          
            </div>
            <div slot="modal-footer" class="modal-footer">
                <button type="button" class="btn btn-default" @click="close">Fechar</button>
            </div>
        </modal>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    import { modal } from 'vue-strap'
    import Facade from '../facade/facade';
    const facade = new Facade();

    export default {

        props: ['show', 'url'],
        components: {
            modal
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>
