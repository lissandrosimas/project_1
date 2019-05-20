<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="create">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-search"></i> Formulário
                        </div>
                        <div class="card-block form form-horizontal">

                            <div class="form-group row">
                                <div class="col-md-2" :class="{ 'has-danger': $v.model.data.$error }">
                                    <label class="control-label">Data</label>
                                    <input-datepicker
                                            :disabled="false"
                                            :readonly="false"
                                            :group="false"
                                            :autoclose="true"
                                            v-model="model.data"
                                            @input="$v.model.data.$touch()">
                                    </input-datepicker>
                                </div>
                                <div class="col-md-3" :class="{ 'has-danger': $v.model.telefone.$error }">
                                    <label>Telefone*</label>
                                    <masked-input
                                            v-model.trim="model.telefone"
                                            mask="(11) 11111-1111"
                                            class="form-control"
                                            @input="$v.model.telefone.$touch()">
                                    </masked-input>
                                </div>
                                <div class="col-md-3" :class="{ 'has-danger': $v.model.cpf.$error }">
                                    <label>CPF*</label>
                                    <masked-input
                                            v-model.trim="model.cpf"
                                            mask="111.111.111-11"
                                            class="form-control"
                                            @input="$v.model.cpf.$touch()">
                                    </masked-input>
                                </div>
                                <div class="col-md-4" :class="{ 'has-danger': $v.model.tipo.$error }">
                                    <label>Tipo</label>
                                    <select2 :options="types"
                                             v-model="model.tipo"
                                             placeholder="Selecione um tipo"
                                             :select-option="true"
                                             @input="$v.model.tipo.$touch()">
                                        <option value="" selected>Selecione</option>
                                    </select2>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Tags</label>
                                    <select2
                                            :multiple="true"
                                            :options="tags"
                                            v-model="model.tags"
                                            placeholder="Selecione as tags"
                                            :value="model.tags">
                                    </select2>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2" :class="{ 'has-danger': $v.model.valor.$error }">
                                    <label>Valor</label>
                                    <money v-model="model.valor"
                                           class="form-control"
                                           @input="$v.model.valor.$touch()"></money>
                                </div>

                                <div class="col-md-10" :class="{ 'has-danger': $v.model.observacao.$error }">
                                    <label>Observação</label>
                                    <dw-textarea
                                            v-model="model.observacao"
                                            :rows="6"
                                            :maxlength="maxlength"
                                            @input="$v.model.observacao.$touch()">
                                    </dw-textarea>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                    <label>Ativo</label>
                                    <input-toggle v-model="model.ativo" :value="model.ativo"></input-toggle>
                                </div>
                                <div class="col-md-3">
                                    <label>Bloqueado</label>
                                    <input-toggle v-model="model.bloqueado" :value="model.bloqueado"></input-toggle>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <vue-editor v-model="model.html"></vue-editor>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-2">
                                    <button type="button" @click="showLoading()" class="btn btn-primary">Mostrar
                                        Loading
                                    </button>
                                </div>

                                <div class="col-md-4">
                                    <div class="btn-group">
                                        <button type="button"
                                                @click="this.$notify.success('Sucesso!', 'Mensagem de sucesso!')"
                                                class="btn btn-success">Sucess
                                        </button>
                                        <button type="button"
                                                @click="this.$notify.info('Informação!', 'Mensagem informativa!')"
                                                class="btn btn-info">Info
                                        </button>
                                        <button type="button"
                                                @click="this.$notify.warning('Atenção!', 'Mensagem de atenção!')"
                                                class="btn btn-warning">Warning
                                        </button>
                                        <button type="button" @click="this.$notify.error('Erro!', 'Mensagem de erro!')"
                                                class="btn btn-danger">Error
                                        </button>
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <button type="button" @click="showAlert()" class="btn btn-primary">Alerta</button>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Dropzone</label>
                                    <dropzone id="myDropzone" url="https://httpbin.org/post"
                                              :accepted-file-types="'image/*'"
                                              :max-file-size-in-mb="1"
                                              :max-number-of-files="6"
                                              v-on:vdropzone-success="showSuccess">
                                    </dropzone>
                                    <a href="https://github.com/rowanwins/vue-dropzone" target="_blank">https://github.com/rowanwins/vue-dropzone</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer text-right">
                            <router-link :to="{ path: '/' }" class="btn btn-link">Cancelar</router-link>
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>
<script>
    import {required, minLength, maxLength, withParams} from 'vuelidate/lib/validators';
    const isPhone = (value) => /^(\([0-9]{2}\)\s*|[0-9]{3}\-)[0-9]{5}-[0-9]{4}$/.test(value);  //phone valid
    const isCpf = (value) => /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(value);
    export default {
        data() {
            return {
                model: {
                    telefone: '',
                    cpf: '',
                    ativo: true,
                    bloqueado: false,
                    data: moment().format('YYYY-MM-DD'),
                    tipo: 0,
                    valor: 0,
                    observacao: '',
                    html: '',
                    tags: ['RS', 'BR']
                },
                types: [
                    {id: 'PJ', text: 'Pessoa Jurídica'},
                    {id: 'PF', text: 'Pessoa Física'}
                ],
                tags: [{id: 'RS', text: 'Rio Grande do Sul'}, {id: 'RJ', text: 'Rio de Janeiro'}, {
                    id: 'BR',
                    text: 'Brasil'
                }, {id: 'DW', text: 'Dowhile'}],
                maxlength: 500
            }
        },
        validations() {
            return {
                model: {
                    telefone: {
                        required,
                        isPhone
                    },
                    cpf: {
                        required,
                        isCpf
                    },
                    tipo: {
                        required
                    },
                    data: {
                        required,
                        minLength: maxLength(10)
                    },
                    valor: {
                        required
                    },
                    observacao: {
                        required,
                        maxLength: maxLength(this.maxlength)
                    }
                }
            };
        },
        methods: {
            create () {
                let vm = this;
                if (this.$v.model.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                vm.$notify.success('Successo!', 'Formulário enviado!');
            },
            showLoading() {
                this.$loading.show(true);
                setTimeout(function () {
                    this.$notify.success('', 'Loading por 1 segundo!');
                    this.$loading.show(false);
                }, 1000);
            },
            showAlert() {
                this.$swal({
                    title: 'Você tem certeza?',
                    text: "Não será possível reverter esta operação",
                    showCancelButton: true,
                    confirmButtonText: 'Sim!',
                    cancelButtonText: 'Não, cancelar!'
                }).then(() => {
                    this.$notify.success('Sucesso!', 'Registro removido com sucesso.');
                }, dismiss => {
                    this.$notify.warning('Cancelado!', 'Operação cancelada com sucesso.');
                });
            },
            showSuccess() {
                this.$notify.success('Sucesso!', 'Imagem adicionada!');
            }
        },
        beforeMount() {
            //    axios.get('/perfil').then(response => {
            //        vm.profiles = response.data;
            //        this.$loading.show(false);
            //        this.fetchData(0);
            //   }).catch(e => {
            //        this.$loading.show(false);
            //        vm.$notify.error('Erro!', 'Ocorreu um problema ao buscar os perfis.');
            //   });
        }
    }

</script>
