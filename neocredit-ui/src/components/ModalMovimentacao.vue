<template>
    <div>
        <modal :value.sync="show" @closed="close()" @cancel="close()">
            <div slot="modal-header" class="modal-header">
                <h4>Movimentação</h4>
            </div>  

            <table class="table table-md table-responsive">
                <thead>
                <tr>
                    <th>Data Movimentação</th>
                    <th>Ação</th>
                    <th>Status</th>
                    <th>Operador</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item) in this.products">
                    <td>{{ item.dataMovimentacao }}</td>
                    <td>{{ item.acao }}</td>
                    <td>{{ item.descricao }}</td>
                    <td>{{ item.usuario }}</td>
                </tr>
                </tbody>
            </table>
            <div slot="modal-footer" class="modal-footer">
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
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import { Portuguese } from 'flatpickr/dist/l10n/pt';
    const facade = new Facade();

    export default {

        props: ['show', 'products'],
        components: {
            modal,
            flatPickr
        },
        data() {
            return {
                filter: {},
                configFlatPickr: {
                  wrap: false,
                  altFormat: 'd/m/Y H:i',
                  altInput: true,
                  enableTime: true,
                  time_24hr: true,
                  dateFormat: 'Y-m-d H:i',
                  locale: Portuguese,
                  allowInput: true
                }
            }
        },
        methods: {
            close() {
                this.$emit('close');
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
