<template>
    <div>
        <modal :value.sync="show" @closed="close()" @cancel="close()">
            <div slot="modal-header" class="modal-header">
                <h4>Json registro de movimentação</h4>
            </div>
            <div class="form-group row">
                <div class="col-md-12 col-xs-12">
                    <textarea id="step5" required="" v-model="json" rows="20" cols="140"></textarea>
                </div>
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

        props: ['show', 'json'],
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
<style type="text/css" media="screen">
    .modal-dialog {
        max-width: 900px !important;
        margin: 30px auto;
    }
</style>
