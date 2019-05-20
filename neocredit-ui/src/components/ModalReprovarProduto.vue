<template>
    <div>
        <modal :value.sync="show" @closed="close()" @cancel="close()">
            <div slot="modal-header" class="modal-header">
                <h4>Motivo Reprovação de Produto(s)</h4>
            </div>
            <div class="form-group row">
                <div class="col-md-12 col-xs-12" :class="{ 'has-danger': $v.motivo.$error }">
                    <input type="text" v-model="motivo" class="form-control" @input="$v.motivo.$touch()"/>
                </div>
            </div>
            <div slot="modal-footer" class="modal-footer">
                <button type="button" class="btn btn-default" @click="confirmar">Confirmar</button>
                <button type="button" class="btn btn-default" @click="close">Fechar</button>
            </div>
        </modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import { required } from 'vuelidate/lib/validators';
    import { modal } from 'vue-strap'
    import Facade from '../facade/facade';
    const facade = new Facade();

    export default {

        props: ['show', 'ids'],
        components: {
            modal
        },
        data() {
            return {
                motivo: null
            }
        },
         validations() {
            return {
                motivo: {
                    required
                }
            };
        },
        methods: {
            close() {
                this.$emit('close');
            },

            confirmar(){
                let vm = this;

                if (this.$v.motivo.$invalid) {
                    this.$notify.warning('Atenção!', 'Você precisa inserir um motivo de reprovação.');
                    return;
                }

                this.$loading.show(true);
                let ret = facade.reprovar(this.ids, this.motivo);
                ret.then(response => {
                    this.$notify.success('', 'Produto(s) reprovado(s) com sucesso.');
                    this.$loading.show(false);
                    this.close();
                });
                
            }
        }
    }
</script>
<<style type="text/css" media="screen">
    .modal-dialog {
        max-width: 900px !important;
        margin: 30px auto;
    }
</style>
