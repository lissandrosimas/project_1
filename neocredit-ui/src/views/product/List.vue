<template>
    <div class="animated fadeIn product-list">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 text-right">
                    <br>        
                    <div class="form-group row">
                        <div class="col-md-6 text-left">
                            <div class="form-group row">
                                <img src="/static/images/produtos.png" height="50" width="50">
                                <h3 style="line-height: 1.8 !important">Produtos</h3>
                            </div>
                        </div>
                        <div class="col-md-6">                           
                            <button id="step9" v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'criar-produto'}" type="button" @click="create" class="btn btn-primary">+ Novo Produto</button>
                            <button id="step10" type="button" @click="aprovar" class="btn btn-default"><i class="fa fa-check"></i> Aprovar </button>
                            <button id="step11" type="button" @click="reprovar" class="btn btn-default"><i class="fa fa-close"></i> Reprovar </button>
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
                            <div class="col-md-6">
                                <label>Título</label>
                                <input id="step1" type="text" maxlength="300" class="form-control" v-model="filter.nome">
                            </div>
                            <div class="col-md-3">
                                <label>Código Produto</label>
                                <input id="step2" type="text" maxlength="50" class="form-control"
                                       v-model="filter.codigoReferencia">
                            </div>
                            <div class="col-md-3">
                                <label>Id WebContinental</label>
                                <input id="step3" type="text" maxlength="30" class="form-control"
                                       v-model="filter.codigoIntegracao">
                            </div>
                        </div>
                        <div class="form-group row toggle-group">
                            <div class="col-md-2">
                                <label id="step4">Ativo</label>
                                <select2 v-model="filter.indAtivo"
                                         :value="filter.indAtivo"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step7">Bloqueado</label>
                                <select2 v-model="filter.indBloqueado"
                                         :value="filter.indBloqueado"
                                         :options="statusYesorNoOptions"
                                         :select-option="true">
                                </select2>
                            </div>

                            <div class="col-md-2">
                                <label id="step8">Aprovado</label>
                                <select2 v-model="filter.indAprovado"
                                         :value="filter.indAprovado"
                                         :options="statusYesorNoOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step5">Estoque</label>
                                <select2 v-model="filter.indEstoque"
                                         :value="filter.indEstoque"
                                         :options="statusYesorNoOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step6">Mídia</label>
                                <select2 v-model="filter.indImagem"
                                         :value="filter.indImagem"
                                         :options="statusYesorNoOptions"
                                         :select-option="true">
                                </select2>
                            </div>                            
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group row">
                            <div class="col-md-12 text-right">
                                <button type="button" @click="mudarEstado('minhaDiv')" class="btn btn-default">Cancelar</button>
                                <dropdown style="cursor: pointer">
                                    <span slot="button">
                                        <span class="d-md-down-none"><i class="fa fa-download"></i> Exportar</span>
                                    </span>
                                    <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" @click="exportar">Relatório Completo</a>
                                        <a class="dropdown-item" @click="exportarGerencial">Relatório Gerencial</a>
                                    </div>
                                </dropdown>
                                <button type="button" @click="limparFiltros" class="btn btn-default">Limpar</button>
                                <button type="button" @click="search" class="btn btn-default"><i class="fa fa-search"></i> Pesquisar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="step12">
                    <div class="card-header">
                        <dw-table-header :size="size" @finish="updateSize" :pagination="list"></dw-table-header>
                    </div>
                    <div class="card-block col-md-12">
                        <table class="table table-md table-responsive">
                            <thead>
                            <tr>
                                <th width="5%" style="vertical-align: top">
                                    <input id="selectAll"
                                           v-model="selectAll"
                                           type="checkbox"
                                           class="magic-checkbox">
                                    <label for="selectAll"></label>
                                </th>
                                <th>Código Produto</th>
                                <th>ID WebContinental</th>
                                <th>Título</th>
                                <th>Preço</th>
                                <th>Parceiro</th>                            
                                <th>Atualizado em</th>                        
                                <th>Status</th>
                                <th>Situação</th>        
                                <th style="align: center">Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(item, index) in list.content">
                                <td>
                                    <input class="magic-checkbox"
                                           type="checkbox"
                                           :id="'item_' + index"
                                           v-model="item.selected"
                                           @change="addSelected(item.id, item.selected)">
                                    <label :for="'item_' + index"></label>
                                </td>
                                <td>{{ item.codigoReferencia }}</td>
                                <td>{{ item.codigoIntegracao }}</td>
                                <td>{{ item.nome }}</td>
                                <td>{{ item.preco | formatBRL }}</td>
                                <td>{{ item.empresa}}</td>
                                <td>{{ item.dataAlteracao }}</td>
                                <td>                                    
                                    <span v-if="item.indAtivo === true" class="label label-info" style="margin-right: 1px">A</span>
                                    <span v-if="item.indAtivo === false" class="label label-default" style="margin-right: 1px">I</span>
                                </td>
                                <td>
                                    <span v-if="item.indAprovado === true" class="label label-success" style="margin-right: 1px">A</span>
                                    <span v-if="item.indReprovado === true" class="label label-important" style="margin-right: 1px">R</span>
                                    <span v-if="item.indBloqueado === true" class="label label-blocked" style="margin-right: 1px">B</span>
                                    <span v-if="item.indImagem === false" class="label label-no-image" style="margin-right: 1px">M</span>
                                </td>
                                <td align='center' nowrap="nowrap">
                                    <router-link v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'editar-produto'}" :to="{ name: 'edit-product', params: { id: item.id } }" class="btn btn-xs btn-secondary">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'excluir-produto'}" class="btn btn-secondary btn-xs" @click="remove(item.id)">
                                        <i class="fa fa-trash-o"></i>
                                    </button>
                                    <button type="button" @click="movimentacao(item.produtoLog)" class="btn btn-secondary btn-xs"><i class="fa fa-search"></i> </button>
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
            </div><!--/.col-->
        </div><!--/.row-->       

        <modal-movimentacao :show.sync="modalShow" 
             :products="listaMovimentacao"
             @close="modalShow = false"></modal-movimentacao>

        <modal-reprovar-produto :show.sync="modalShowReprovar" 
             :ids="ids"
             @close="modalShowReprovar = false"
             @finish="search"></modal-reprovar-produto>

        <div class="card-header">
            <div class="col-md-12" style="text-align: center;">
                <span>Legenda para os campos Status e Situação de produto:</span>&nbsp;
                <span class="label label-info">A</span> Ativo &nbsp;
                <span class="label label-default">I</span> Inativo &nbsp;
                <span class="label label-blocked">B</span> Bloqueado &nbsp;
                <span class="label label-success">A</span> Aprovado  &nbsp;
                <span class="label label-important">R</span> Rejeitado  &nbsp;
                <span class="label label-no-image">M</span> Sem Mídia
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
    import Facade from '../../facade/facade';
    import Collections from '../../helpers/collections'
    import {dropdown} from 'vue-strap'
    const facade = new Facade();

    export default {
        components: {
            dropdown
        },

        data() {
            return {
                listaMovimentacao: {},
                ids:null,
                list: {},
                filter: {
                    indAtivo: 1,
                    indEstoque: 0,
                    indImagem: 0,
                    indBloqueado: 0,
                    indAprovado: 0,
                    codigoReferencia: null
                },
                statusOptions: Collections.indOptions,
                statusYesorNoOptions: Collections.indYesorNoOptions,
                items: [],
                size: 20,
                selected: [],
                selectAll: false,
                modalShow: false,
                modalShowReprovar: false,
            }
        },
        watch: {
            selectAll(val) {
                let vm = this;

                if (val) {
                    vm.selected = [];
                    _.forEach(this.list.content, (item) => {
                        item.selected = val;
                        vm.selected.push(item.id);
                    });
                } else {
                    _.forEach(this.list.content, (item) => {
                        item.selected = val;
                    });
                    vm.selected = [];
                }
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
            limparFiltros(){
                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                       this.filter[key] = null;
                    }
                }
                this.filter.indAtivo= 1,
                this.filter.indEstoque= 0,
                this.filter.indImagem= 0,
                this.filter.indBloqueado= 0,
                this.filter.indAprovado= 0
            },
            movimentacao(movimentacoes) {
                
                this.listaMovimentacao = movimentacoes; 
                this.modalShow = true;

            },
            aprovar(){
                let ret = facade.aprovar(this.selected);
                    ret.then(response => {
                        this.$notify.success('', 'Produto(s) aprovado(s) com sucesso.');
                        this.fetchData(0);
                        this.$loading.show(false);
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao aprovar o(s) produto(s).');
                        this.$loading.show(false);
                    });

            },
            reprovar(){
                this.modalShowReprovar = true;
                this.ids = this.selected; 
            },
            exportar() {
                let vm = this;

                let params = {params: {}};

                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                        params['params'][key] = this.filter[key]
                    }
                }

                this.$loading.show(true);
                facade.exportProduct(params['params']);
                this.$loading.show(false);
            },

            infoClick() {

                const stepsTour = []; 

                stepsTour.push({              
                    element: '#step1',
                    title: 'Título do Produto',
                    content: 'Consulta pelo título do produto.'
                });

                stepsTour.push({              
                    element: '#step2',
                    title: 'Código do Produto',
                    content: 'Consulta pelo Código do Produto, é possível buscar mais de um código, desde que eles estejam separados por vírgula. Ex: 001,002,003'
                });

                stepsTour.push({             
                    element: '#step3',
                    title: 'Id WebContinental',
                    content: 'Consulta pelo Id WebContinental, é possível buscar mais de um Id WebContinental, desde que eles estejam separados por vírgula. Ex: 001,002,003'
                });

                stepsTour.push({             
                    element: '#step4',
                    title: 'Status',
                    content: 'Consulta pelo status do produto.'
                });

                stepsTour.push({              
                    element: '#step5',
                    title: 'Estoque',
                    content: 'Consulta por estoque de produto.'
                });

                stepsTour.push({               
                    element: '#step6',
                    title: 'Mídia',
                    content: 'Consulta por mídia de produto.' 
                });

                stepsTour.push({               
                    element: '#step7',
                    title: 'Bloqueado',
                    content: 'Consulta por produtos bloqueados.'
                });

                stepsTour.push({             
                    element: '#step8',
                    title: 'Aprovado',
                    content: 'Consulta por produtos aprovados.'
                });

                stepsTour.push({             
                    element: '#step9',
                    title: 'Cadastrar novo Produto',
                    content: 'Cadastre um novo produto.'
                });

                stepsTour.push({             
                    element: '#step10',
                    title: 'Aprovar',
                    content: 'Aprova produto(s) selecionado(s).'
                });
                
                stepsTour.push({             
                    element: '#step11',
                    title: 'Reprovar',
                    content: 'Reprova produto(s) selecionado(s).'
                });

                stepsTour.push({             
                    element: '#step12',
                    title: 'Lista de produtos',
                    content: 'Resultados encontrados relacionados aos filtros de produtos informados.'
                });

                this.$tour.tour(stepsTour); 

            },
            exportarGerencial() {
                let vm = this;

                let params = {params: {}};

                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                        params['params'][key] = this.filter[key]
                    }
                }

                this.$loading.show(true);
                facade.exportManagementProduct(params['params']);
                this.$loading.show(false);
            },
            create() {
                this.$router.push({name: 'new-product'});
            },
            remove(id) {
                this.$swal({
                    title: 'Você tem certeza?',
                    text: "Não será possível reverter esta operação",
                    showCancelButton: true,
                    confirmButtonText: 'Sim, deletar!',
                    cancelButtonText: 'Não, cancelar!'
                }).then(() => {
                    this.$loading.show(true);

                    let ret = facade.deleteProduct(id);
                    ret.then(response => {
                        this.$notify.success('', 'Registro removido com sucesso.');
                        this.fetchData(0);
                        this.$loading.show(false);
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao deletar o produto.');
                        this.$loading.show(false);
                    });
                }, dismiss => {

                });
            },
            refreshPrices () {
                this.modalShow = false;
                this.selected = [];
                this.fetchData(0);
            },
            addSelected(id, value) {
                if (value) {
                    this.selected.push(id);
                } else {
                    _.remove(this.selected, function (n) {
                        return n == id;
                    });
                }
            },
            fetchData(page) {
                let vm = this;

                let params = {params: {page: page, size: vm.size}};

                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                        if (key === 'indAtivo') {
                            if (vm.$route.params.ativo != undefined) {
                                params['params'][key] = vm.$route.params.ativo 
                            }else{
                                params['params'][key] = this.filter[key]    
                            }
                        }else{
                            params['params'][key] = this.filter[key]
                        }
                        
                        if (key === 'indAprovado') {
                            if (vm.$route.params.aprovado != undefined) {
                                params['params'][key] = vm.$route.params.aprovado 
                            }else{
                                params['params'][key] = this.filter[key]    
                            }
                        }else{
                            params['params'][key] = this.filter[key]
                        }

                        if (key === 'codigoReferencia') {
                            if (vm.$route.params.codigoReferencia != undefined) {
                                params['params'][key] = vm.$route.params.codigoReferencia 
                            }
                        }
                    }
                }

                this.$loading.show(true);
                let ret = facade.listProduct(params);
                ret.then(response => {
                    vm.list = response.data;
                    this.$loading.show(false);
                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar os produtos.');
                    this.$loading.show(false);
                })
            },
            fetchDataPesquisar(page) {
                let vm = this;

                let params = {params: {page: page, size: vm.size}};

                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                        params['params'][key] = this.filter[key]
                    }
                }

                this.$loading.show(true);
                let ret = facade.listProduct(params);
                ret.then(response => {
                    vm.list = response.data;
                    this.$loading.show(false);
                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar os produtos.');
                    this.$loading.show(false);
                })
            },
            search() {
                this.fetchDataPesquisar(0);
            },
            updateSize(value) {
                let vm = this;
                vm.size = value;
                this.fetchData(0);
            }
        },
        beforeMount() {
            this.fetchData(0);
        }
    }
</script>

<style scoped lang="scss">

    .status-group, .btn-group {
        width: max-content;
    }

    .label {
        vertical-align: middle;
    }

    .label {
        padding: 3px 9px;
        font-size: 11px;
        text-shadow: none;
        background-color: #D1DADE;
        font-family: 'Open Sans';
        font-weight: 600;
        color: #5E5E5E;
    }

    .label-info, .badge-info {
        background-color: #0b286e;
        color: #fff;

    }

    .label-success, .badge-success {
        background-color: #1db552;
        color: #fff;
    }

    .label-default {
        background-color: #999;
    }

    .label-important, .badge-important {
        background-color: #CC0000;
        color: #fff;
    }   


    .label-blocked {
        background-color: #90711B;
        color: #FFF;
    }

    .label-no-image {
        background-color: #dda458;
        color: #FFF;
    }

    .label-warning, .badge-warning {
        background-color: #fdd01c;
        color: #fff;
    }

    .label {
        display: inline;
        padding: .2em .6em .3em;
        font-size: 75%;
        font-weight: bold;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: .25em;
    }

    .tr {
        color: #263238;
    }

</style>