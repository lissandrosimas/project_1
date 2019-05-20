<template>
    <div class="animated fadeIn">
        <h3><i class="fa fa-ticket"></i> Pedido {{ pedido.numero }}</h3>
        <br>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Dados do Cliente</div>
                        <div class="card-block">
                            <p><b>Cliente:</b> {{ pedido.cliente ? pedido.cliente.nome : ''}}</p>
                            <p><b>Email:</b> {{ pedido.cliente ? pedido.cliente.email : ''}}</p>
                            <p><b>Telefone:</b> {{ pedido.cliente ? pedido.cliente.telefonePrincipal : ''}}</p>
                            <p><b>CPF:</b> {{ pedido.cliente ? pedido.cliente.cgc : ''}}</p>
                            <p><b>Data de nascimento:</b> {{ pedido.cliente ? pedido.cliente.dataNascimento : ''}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Dados de Entrega</div>
                        <div class="card-block">
                            <p><b>Parceiro:</b> {{ pedido.empresa ? pedido.empresa.nomeFantasia : ''}}</p>
                            <p><b>Endereço:</b> {{ pedido.enderecoEntrega ? pedido.enderecoEntrega : ''}}</p>
                            <p><b>Transportadora:</b> {{ pedido.transportadora }} </p>
                            <p><b>Rastreamento:</b> {{ pedido.rastreamento }} </p>
                            <p><b> URL Rastreamento:</b> {{ pedido.urlRastreamento }} </p>
                            <p><b>Observações:</b> {{ pedido.observacoes }} </p> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Dados do Parceiro</div>
                        <div class="card-block">
                            <p><b>Responsável:</b> {{ pedido.empresa ? pedido.empresa.responsavelNome : ''}} </p>
                            <p><b>Email:</b> {{ pedido.empresa ? pedido.empresa.responsavelEmail : ''}} </p>
                            <p><b>Telefone:</b> {{ pedido.empresa ? pedido.empresa.responsavelTelefone : ''}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">Informações Adicionais</div>
                        <div class="card-block">
                            <p><b>Loja:</b> {{ pedido.loja }} </p> 
                            <p><b>Comissionamento:</b> {{ pedido.comissao }}% </p>
                            <p><b>Valor Retido:</b>R$ {{ pedido.valorRetido | formatBRL}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            Produtos
                        </div>
                        <div class="card-block">
                            <table class="table">
                                <tr>
                                    <th>Código do Produto</th>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                </tr>
                                <tr v-for="p in pedido.pedidoItems">
                                    <td>{{ p.produto ? p.produto.codigoReferencia : ''}}</td>
                                    <td>{{ p.produto ? p.produto.nome : ''}}</td>
                                    <td>R$ {{ p.valor | formatBRL}}</td>
                                    <td>{{ p.quantidade }}</td>
                                    <td>R$ {{ p.valorTotal | formatBRL}}</td>
                                </tr>
                                <tr>
                                    <td colspan="3"></td>
                                    <td><b>Total</b></td>
                                    <td>R$ {{ pedido.valorTotal | formatBRL }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            Forma de Pagamento
                        </div>
                        <div class="card-block">
                            <p><b>Valor:</b> R$ {{ pedido.valorTotal | formatBRL }}</p>
                            <p><b>Forma:</b> A Combinar</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header">
                            Notas Fiscais
                        </div>
                        <div class="card-block">
                            <div class="row">
                                <div class="col-md-12">
                                    <table v-if="pedido.notasFiscais != null && pedido.notasFiscais.length > 0" class="table">
                                        <tr>
                                            <th>Chave</th>
                                            <th>Série</th>
                                            <th>Emissão</th>
                                            <th v-if="editNotaFiscal">Excluir</th>
                                        </tr>
                                        <tr v-for="n in pedido.notasFiscais">
                                            <td>{{ n.chave }}</td>
                                            <td>{{ n.serie }}</td>
                                            <td>{{ n.dataEmissao }}</td>
                                            <td v-if="editNotaFiscal">
                                                <button type="button" class="btn btn-danger" @click="deleteNotaFiscal(n.chave)">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                    <p v-else>Nenhuma nota fiscal cadastrada.</p>
                                    <button type="button" class="btn btn-sm" title="Adicionar Nota Fiscal" @click="toggleNotaFiscal">
                                        <i class="fa fa-plus" v-if="!newNotaFiscal"></i>
                                        <i class="fa fa-minus" v-if="newNotaFiscal"></i>
                                    </button>
                                    <button v-if="pedido.notasFiscais != null && pedido.notasFiscais.length > 0" type="button" class="btn btn-sm" title="Gerenciar Notas Fiscais" @click="manageNotaFiscal">
                                        <i class="fa fa-pencil" v-if="!editNotaFiscal"></i>
                                        <i class="fa fa-times" v-if="editNotaFiscal"></i>
                                    </button>
                                </div>
                            </div>
                            <br>
                            <div class="card" v-if="newNotaFiscal">
                                <form @submit.prevent="saveNewNotaFiscal">
                                    <div class="card-block nota-fiscal-form">
                                        <h4>Nova Nota</h4>
                                        <br>
                                        <div class="row">
                                            <div class="col-md-2 text-right">
                                                <label for="notaNumero"><b>Nº</b></label>
                                            </div>
                                            <div class="col-md-10">
                                                <input type="number" id="notaNumero" class="form-control" v-model="notaFiscal.numero" required >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 text-right">
                                                <label for="notaSerie"><b>Série</b></label>
                                            </div>
                                            <div class="col-md-10">
                                                <input type="number" id="notaSerie" class="form-control" v-model="notaFiscal.serie" >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 text-right">
                                                <label for="notaChave"><b>Chave</b></label>
                                            </div>
                                            <div class="col-md-10">
                                                <input type="text" id="notaChave" class="form-control" v-model="notaFiscal.chave" >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 text-right">
                                                <label for="notaLink"><b>Link</b></label>
                                            </div>
                                            <div class="col-md-10">
                                                <input type="text" id="notaLink" class="form-control" v-model="notaFiscal.link" >
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 text-right">
                                                <label for="notaData"><b>Emissão</b></label>
                                            </div>
                                            <div class="col-md-10">
                                                <flat-pickr
                                                        v-model="notaFiscal.dataEmissao"
                                                        :config="configFlatPickr"
                                                        class="form-control"
                                                        placeholder="Selecione uma data"
                                                        required>
                                                </flat-pickr>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <button type="button" class="btn btn-default pull-left" @click="cancelNewNotaFiscal">Cancelar</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button type="submit" class="btn btn-success pull-right">Adicionar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            Histórico do Pedido
                        </div>
                        <div class="card-block">
                            <table class="table">
                                <tr>
                                    <th>Status</th>
                                    <th>Usuário</th>
                                    <th>Data Atualização</th>
                                </tr>
                                <tr v-for="p in pedido.pedidoLogs">
                                    <td> {{ p.status }}</td>
                                    <td v-if="p.nome === null" >API</td>
                                    <td v-else> {{ p.nome }}</td>
                                    <td>{{ p.data }}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-footer text-right">
                            <router-link :to="{ name: 'list-order' }" class="btn btn-link">Voltar</router-link>
                            <button type="button" class="btn btn-primary">Imprimir</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<style scoped lang="scss">
    .nota-fiscal-form {
        .row {
            padding-bottom: 10px;
        }
    }
</style>
<script>
    import { getStates, isPhoneOrNull, isCnpj, isCepOrNull, validateCNPJ} from '@/services/util'
    import { required, minLength, maxLength, withParams } from 'vuelidate/lib/validators'
    import { formatPhone, formatCnpj, formatCep} from '@/services/string'
    import { Portuguese } from 'flatpickr/dist/l10n/pt'
    import flatPickr from 'vue-flatpickr-component'
    import Facade from '../../facade/facade'
    import 'flatpickr/dist/flatpickr.css'
    const facade = new Facade()
    import axios from 'axios'

    export default {
        components: {
          flatPickr
        },
        data() {
            return {
                pedido: {},
                notaFiscal: {},
                newNotaFiscal: false,
                editNotaFiscal: false,
                configFlatPickr: {
                  wrap: false,
                  altFormat: 'd/m/Y',
                  altInput: true,
                  enableTime: false,
                  time_24hr: true,
                  dateFormat: 'd/m/Y H:i',
                  locale: Portuguese,
                  allowInput: true
                },
            }
        },
        methods: {
            toggleNotaFiscal() {
                this.newNotaFiscal = !this.newNotaFiscal
            },

            cancelNewNotaFiscal() {
                this.newNotaFiscal = false
                this.notaFiscal = {}
            },

            saveNewNotaFiscal() {
                let vm = this
                vm.$loading.show(true)
                let clone = vm.notaFiscal
                axios.post('/pedidos/' + vm.$route.params.id + '/notas-fiscais', clone)
                .then((response) => {
                    vm.$notify.success('Sucesso', 'Nota fiscal adicionada.')
                    vm.cancelNewNotaFiscal()
                })
                .catch((error) => {
                    vm.$notify.error('Erro', error.response.data.message)
                })
                .finally(() => {
                    vm.$loading.show(false)
                    vm.fetchData()
                })
            },

            deleteNotaFiscal(chave) {
                let vm = this
                vm.$loading.show(true)
                axios.delete('/pedidos/' + vm.$route.params.id + '/notas-fiscais/' + chave)
                .then((response) => {
                    vm.$notify.success('Sucesso', 'Nota fiscal excluida.')
                    vm.fetchData()
                })
                .catch((error) => {
                    vm.$notify.error('Erro', error)
                })
                .finally(() => {
                    vm.$loading.show(false)
                })
            },

            manageNotaFiscal() {
                this.editNotaFiscal = !this.editNotaFiscal
            },

            fetchData() {
                const vm = this
                this.$loading.show(true);
                let promise = facade.getOrder(vm.$route.params.id)
                promise.then(response => {
                    vm.pedido = response.data
                    this.$loading.show(false);
                }).catch(e => {
                    this.$loading.show(false);
                })
            }
        },

        mounted() {
            this.fetchData()
        }
    }
</script>
