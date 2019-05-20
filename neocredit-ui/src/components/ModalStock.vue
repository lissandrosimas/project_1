<template>
    <div>
        <modal :value.sync="show">
            <div slot="modal-header" class="modal-header">
                <h4 class="modal-title">Alteração em massa de Estoque</h4>
            </div>
            <div slot="modal-body" class="modal-body  modal-sm">
                <div class="container-fluid">
                    <div class="row">
                        <div class="form-group">
                            <div class="col-md-12 col-xs-12" :class="{ 'has-danger': $v.quantidadeEstoque.$error }">
                                <strong>{{ this.products.length }} produto(s) selecionado(s).</strong>
                                </br></br>
                                <label>Quantidade Estoque</label>
                                <input type="number" v-model="quantidadeEstoque" class="form-control" @input="$v.quantidadeEstoque.$touch()"/>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="modal-footer" class="modal-footer">
                <button type="button" class="btn btn-default" @click="close">Fechar</button>
                <button type="button" class="btn btn-primary" @click="finish">Alterar</button>
            </div>
        </modal>
    </div>
</template>

<script>
    import axios from 'axios';
    import { required, numeric } from 'vuelidate/lib/validators';
    import {modal} from 'vue-strap'
    import Facade from '../facade/facade';
    const facade = new Facade();

    export default {
        props: ['show', 'products'],
        components: {
            modal
        },
        data() {
            return {
                quantidadeEstoque: 0
            }
        },
        validations() {
            return {
                quantidadeEstoque: {
                    numeric,
                    required
                }
            };
        },
        methods: {
            finish() {
                let vm = this;

                if (this.$v.quantidadeEstoque.$invalid) {
                    this.$notify.warning('Atenção!', 'Por verifique o campo Quantidade Estoque.');
                    return;
                }

                var model = {
                    produtos: this.products,
                    quantidadeEstoque: this.quantidadeEstoque
                };

                this.$loading.show(true);
                let ret = facade.updateProductStock(model);
                ret.then(user => {
                    this.$notify.success('Sucesso!', 'A quantidade estoque foi atualizada.');
                    this.$emit('finish');
                    this.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },
            close() {
                this.quantidadeEstoque = 0;
                this.$emit('close');
            }
        }
    }
</script>
