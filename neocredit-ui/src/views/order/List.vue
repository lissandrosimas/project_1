<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 text-right">
                    <br>        
                    <div class="form-group row">
                        <div class="col-md-6 text-left">
                            <div class="form-group row">
                                <img src="/static/images/pedidos.png" height="50" width="50">
                                <h3 style="line-height: 1.8 !important">Pedidos</h3>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <button type="button" @click="mudarEstado('minhaDiv')" class="btn btn-default"><i class="fa fa-search"></i> Pesquisa</button>
                        </div>
                    </div>
                </div>   

                <div class="card" id="minhaDiv" style="display: none;">
                    <div class="card-header">
                        <i class="fa fa-search"></i> Pesquisar
                        <a style="float: right; text-align: right;" href="javascript:infoClick" @click="infoClick">Ficou com dúvida ou precisa de ajuda ?</a>
                    </div>
                    <div class="card-block">
                        <div class="form-group row">
                            <div class="col-md-6 col-xs-12">
                                <label>Número do Pedido</label>
                                <input id="step1" type="number" maxlength="255" class="form-control" v-model="filter.nrPedido">
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <label id="step2" >Cliente</label>
                                <select2 v-model="filter.idCliente"
                                         :ajax="true"
                                         url-ajax="clientes/pesquisar"
                                         key-id="id"
                                         key-text="nome"
                                         :key-text-divider="' / '">
                                </select2>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-4">
                                <label id="step3">Status</label>
                                <select2 v-model="filter.status"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-4">
                                <label id="step4">Cadastro Inicio</label>
                                <flat-pickr
                                        v-model="filter.dataInicial"
                                        :config="configFlatPickr"
                                        class="form-control"
                                        placeholder="Selecione uma data">
                                </flat-pickr>
                            </div>
                            <div class="col-md-4">
                                <label id="step5">Cadastro Fim</label>
                                <flat-pickr
                                        v-model="filter.dataFinal"
                                        :config="configFlatPickr"
                                        class="form-control"
                                        placeholder="Selecione uma data">
                                </flat-pickr>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group row">
                            <div class="col-md-12 text-right">
                                <button type="button" @click="mudarEstado('minhaDiv')" class="btn btn-default">Cancelar</button>
                                <button type="button" @click="clearFilter" class="btn btn-default"> Limpar </button>
                                <button type="button" @click="exportar" class="btn btn-default"><i class="fa fa-download"></i> Exportar</button>
                                <button type="button" @click="search" class="btn btn-default"><i class="fa fa-search"></i> Pesquisar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="step6"> 
                    <div class="card-header">
                        <dw-table-header :size="size" @finish="updateSize" :pagination="list"></dw-table-header>
                    </div>
                    <div class="card-block  col-md-12" >
                        <table class="table table-md table-responsive">
                            <thead>
                            <tr>
                                <th>Pedido</th>
                                <th>Nome do Cliente</th>
                                <th>Valor total</th>
                                <th>CPF/CNPJ</th>
                                <th>Parceiro</th>
                                <th>Status</th>
                                <th>Criado em</th>
                                <th>Atualizado em</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in list.content">
                                <td :title="val"> {{ item.numero }}</td>
                                <td>{{ item.cliente.nome }}</td>
                                <td>R$ {{ item.valorTotal | formatBRL }}</td>
                                <td>{{ item.cliente.cpf }}</td>
                                <td>{{ item.empresa.nomeFantasia }}</td>
                                <td>
                                    <order-update-status
                                        :id="item.id"
                                        :current-status="item.status"
                                        :status="item.status"
                                        :show="false">
                                    </order-update-status>                                   
                                </td>
                                <td>{{ item.dataPedido }}
                                <td>{{ item.dataAlteracao }}
                                <td>
                                    <router-link :to="{ name: 'edit-order', params: { id: item.id } }"
                                                 class="btn btn-secondary btn-xs">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button class="btn btn-secondary btn-xs" @click="remove(item.id)">
                                        <i class="fa fa-trash-o"></i>
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <dw-pagination :pagination="list"
                                       @click.native="fetchData(list.number)"
                                       :offset="4">
                        </dw-pagination>
                    </div>
                </div>
            </div>
        </div>
        <modal-movimentacao :show.sync="modalShow" 
             :products="listaMovimentacao"
             @close="modalShow = false"></modal-movimentacao>
    </div>
</template>

<script>
    import { clearPhone, clearCpfCnpj, isUndefinedOrNullOrEmpty } from '@/services/string'
    import { Portuguese } from 'flatpickr/dist/l10n/pt'
    import Collections from '../../helpers/collections'
    import flatPickr from 'vue-flatpickr-component'
    import Facade from '../../facade/facade'
    import 'flatpickr/dist/flatpickr.css'
    import moment from 'moment'
    const facade = new Facade()

    export default {
        components: {
          flatPickr
        },
        data() {
            return {
                listaMovimentacao: {},
                list: {},
                filter: {
                    numPedido: null,
                    idCliente: null,
                    status: null
                },
                items: [],
                size: 20,
                statusOptions: Collections.orderStatusOptions,
                clientOptions: [],
                configFlatPickr: {
                  wrap: false,
                  altFormat: 'd/m/Y H:i',
                  altInput: true,
                  enableTime: true,
                  time_24hr: true,
                  dateFormat: 'Y-m-d H:i',
                  locale: Portuguese,
                  allowInput: true
                },
                modalShow: false
            }
        },
        methods: {
            mudarEstado(el) {
                var display = document.getElementById(el).style.display;
                if(display == "none")
                    document.getElementById(el).style.display = 'block';
                else
                    document.getElementById(el).style.display = 'none';
            },            
            movimentacao(movimentacoes) {
                
                this.listaMovimentacao = movimentacoes; 
                this.modalShow = true;

            },
            exportar() {

                let vm = this

                var clone = _.clone(this.filter)

                if (vm.filter.dataInicial != null && vm.filter.dataInicial != 'Invalid date' && vm.filter.dataInicial != '') {
                    clone.dataInicial = moment(vm.filter.dataInicial).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataInicial
                }

                if (vm.filter.dataFinal != null && vm.filter.dataFinal != 'Invalid date' && vm.filter.dataFinal != '') {
                    clone.dataFinal = moment(vm.filter.dataFinal).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataFinal
                }

                let params = {params: {}}

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        params['params'][key] = clone[key]
                    }
                }

                this.$loading.show(true)
                facade.exportOrder(params['params'])
                this.$loading.show(false)
            },

            infoClick() {

                const stepsTour = []; 

                stepsTour.push({              
                    element: '#step1',
                    title: 'Número do Pedido',
                    content: 'Consulta pedido pelo número do pedido.'
                });

                stepsTour.push({              
                    element: '#step2',
                    title: 'Cliente',
                    content: 'Consulta pedido pelo Cliente.'
                });

                stepsTour.push({             
                    element: '#step3',
                    title: 'Status',
                    content: 'Consulta pedido pelo status.'
                });

                stepsTour.push({             
                    element: '#step4',
                    title: 'Cadastro Inicio',
                    content: 'Consulta pedido a partir da Data de Início .'
                });

                stepsTour.push({              
                    element: '#step5',
                    title: 'Cadastro Fim',
                    content: 'Consulta pedido até a Data de Fim.'
                });

                stepsTour.push({               
                    element: '#step6',
                    title: 'Lista de Pedidos',
                    content: 'Resultados encontrados relacionados aos filtros de pedidos informados.' 
                });

              this.$tour.tour(stepsTour); 

            },            
            clearFilter() {
                this.filter = {
                    numPedido: null,
                    idCliente: null,
                    dataInicial: null,
                    dataFinal: null,
                    status: null
                }
            },
            create() {
                this.$router.push({name: 'new-order'})
            },
            remove(id) {
                this.$swal({
                    title: 'Você tem certeza?',
                    text: "Não será possível reverter esta operação",
                    showCancelButton: true,
                    confirmButtonText: 'Sim, deletar!',
                    cancelButtonText: 'Não, cancelar!'
                }).then(() => {
                    this.$loading.show(true)

                    let ret = facade.deleteOrder(id)
                    ret.then(response => {
                        this.$notify.success('', 'Registro removido com sucesso.')
                        this.fetchData(0)
                        this.$loading.show(false)
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao deletar o pedido.')
                        this.$loading.show(false)
                    })
                }, dismiss => {

                })
            },
            fetchDataPesquisar(page) {
                let vm = this

                var clone = _.clone(this.filter)

                if (vm.filter.dataInicial != null && vm.filter.dataInicial != 'Invalid date' && vm.filter.dataInicial != '') {
                    clone.dataInicial = moment(vm.filter.dataInicial).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataInicial
                }

                if (vm.filter.dataFinal != null && vm.filter.dataFinal != 'Invalid date' && vm.filter.dataFinal != '') {
                    clone.dataFinal = moment(vm.filter.dataFinal).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataFinal
                }

                let params = {params: {page: page, size: vm.size}}

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        params['params'][key] = clone[key]
                    }
                }

                this.$loading.show(true)
                let ret = facade.listOrder(params)
                ret.then(response => {

                    vm.list = {}
                    vm.$nextTick(() => {
                        vm.list = response.data
                        this.$loading.show(false)
                    })

                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar os pedidos.')
                    this.$loading.show(false)
                })
            },
            fetchData(page) {
                let vm = this

                var clone = _.clone(this.filter)

                if (vm.filter.dataInicial != null && vm.filter.dataInicial != 'Invalid date' && vm.filter.dataInicial != '') {
                    clone.dataInicial = moment(vm.filter.dataInicial).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataInicial
                }

                if (vm.filter.dataFinal != null && vm.filter.dataFinal != 'Invalid date' && vm.filter.dataFinal != '') {
                    clone.dataFinal = moment(vm.filter.dataFinal).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataFinal
                }

                let params = {params: {page: page, size: vm.size}}

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        if (key === 'status') {
                            if (vm.$route.params.status != undefined) {
                                params['params'][key] = vm.$route.params.status 
                            }else{
                                params['params'][key] = clone[key]    
                            }
                        }else{
                            params['params'][key] = clone[key]
                        }

                    }
                }

                this.$loading.show(true)
                let ret = facade.listOrder(params)
                ret.then(response => {

                    vm.list = {}
                    vm.$nextTick(() => {
                        vm.list = response.data
                        this.$loading.show(false)
                    })

                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar os pedidos.')
                    this.$loading.show(false)
                })
            },
            search() {
                this.fetchDataPesquisar(0)
            },
            updateSize(value) {
                let vm = this
                vm.size = value
                this.fetchData(0)
            }
        },
        beforeMount() {
            this.fetchData(0)
        }
    }
</script>
<style type="text/css">
    
  table {
    font-size: 0.935em !important;
  }

</style>