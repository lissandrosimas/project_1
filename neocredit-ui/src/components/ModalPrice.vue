<template>
    <div>
        <modal :value.sync="show" @closed="close()" @cancel="close()">
            <div slot="modal-header" class="modal-header">
                <h4 class="modal-title">Alteração em massa de Preço</h4>
            </div>
            <div slot="modal-body" class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <h4>{{ this.products.length }} produto(s) selecionado(s).</h4>
                        <div class="form-group">
                            <div class="col-md-12 col-xs-12" :class="{ 'has-danger': $v.percentual.$error }">
                                <label>Percentual</label>
                                <money :prefix="''" v-model.trim="percentual" class="form-control" @input="$v.percentual.$touch()" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-md-12 col-xs-12">
                              <div>
                                  <input type="radio" value="true" v-model="aumentar" class="magic-radio" id="aumentar">
                                  <label for="aumentar"><i class="fa fa-plus"></i> Aumentar</label>
                              </div>
                              <div>
                              <input type="radio" value="false" v-model="aumentar" class="magic-radio" id="diminuir">
                              <label for="diminuir"><i class="fa fa-minus"></i> Diminuir</label>
                              </div>
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
    import { required } from 'vuelidate/lib/validators';
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
                percentual: 0,
                aumentar: false
            }
        },
        validations() {
            return {
                percentual: {
                    required
                }
            };
        },
        methods: {
            finish() {
                let vm = this;

                if (this.$v.percentual.$invalid) {
                    this.$notify.warning('Atenção!', 'Por verifique o campo de Percentual.');
                    return;
                }

                var model = {
                    produtos: this.products,
                    percentual: this.percentual,
                    aumentar: this.aumentar
                };

                this.$loading.show(true);
                let ret = facade.updateProductPrices(model);
                ret.then(user => {
                    this.$notify.success('Sucesso!', 'Os preços foram atualizados.');
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
                this.percentual = 0;
                this.aumentar = false;
                this.$emit('close');
            }
        }
    }
</script>
