<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 text-right">
                    <br>        
                    <div class="form-group row">
                        <div class="col-md-6 text-left">
                            <div class="form-group row">
                                <img src="/static/images/estoque.png" height="50" width="50">
                                <h3 style="line-height: 1.8 !important">Estoque</h3>
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
                            <div class="col-md-6">
                                <label>Título</label>
                                <input id="step1" type="text" maxlength="300" class="form-control" v-model="filter.nome">
                            </div>
                            <div class="col-md-3">
                                <label>Código Produto</label>
                                <input id="step2" type="text" maxlength="50" class="form-control" v-model="filter.codigo_referencia">
                            </div>
                            <div class="col-md-3">
                                <label>Id WebContinental</label>
                                <input id="step3" type="text" maxlength="30" class="form-control" v-model="filter.codigo_integracao">
                            </div>
                        </div>
                        <hr>
                        <div class="form-group row toggle-group">
                            <div class="col-md-2">
                                <label id="step4" >Ativo</label>
                                <select2 v-model="filter.indAtivo"
                                         :value="filter.indAtivo"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step5" >Estoque</label>
                                <select2 v-model="filter.indEstoque"
                                         :value="filter.indEstoque"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step6" >Imagem</label>
                                <select2 v-model="filter.indImagem"
                                         :value="filter.indImagem"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step7" >Bloqueado</label>
                                <select2 v-model="filter.indBloqueado"
                                         :value="filter.indBloqueado"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                            <div class="col-md-2">
                                <label id="step8" >Aprovado</label>
                                <select2 v-model="filter.indAprovado"
                                         :value="filter.indAprovado"
                                         :options="statusOptions"
                                         :select-option="true">
                                </select2>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group row">
                            <div class="col-md-6 text-left">
                                <button v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'editar-estoque'}" type="button" @click="modalShow = true" :disabled="selected.length == 0" class="btn btn-primary">Alterar selecionados <i class="fa fa-angle-right"></i></button>
                            </div>
                            <div class="col-md-6 text-right">
                                <button type="button"  @click="limparFiltros" class="btn btn-default">Limpar</button>
                                <button type="button" @click="search" class="btn btn-default"><i class="fa fa-search"></i> Pesquisar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <dw-table-header :size="size" @finish="updateSize" :pagination="list"></dw-table-header>
                    </div>
                    <div class="card-block">
                        <table class="table table-md">
                            <thead>
                                <tr>
                                    <th style="vertical-align: top;">
                                        <input id="selectAll" type="checkbox" v-model="selectAll" class="magic-checkbox">
                                        <label for="selectAll"></label>
                                    </th>
                                    <th>Código</th>
                                    <th>IdWebContinental</th>
                                    <th>Título</th>
                                    <th>Preço</th>
                                    <th>Estoque Mínimo</th>
                                    <th>Estoque</th>
                                    <th>Ativo</th>
                                    <th>Estoque</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in list.content">
                                    <td>
                                        <input type="checkbox"
                                               v-model="item.selected"
                                               class="magic-checkbox"
                                               :id="'item_' + index"
                                               @change="addSelected(item.id, item.selected)">
                                        <label :for="'item_' + index"></label>
                                    </td>
                                    <td>{{ item.codigoReferencia }}</td>
                                    <td>{{ item.codigoIntegracao }}</td>
                                    <td>{{ item.nome }}</td>
                                    <td>{{ item.preco | formatBRL }}</td>
                                    <td>{{ item.estoqueMinimo }}</td>
                                    <td>{{ item.quantidadeEstoque }}</td>
                                    <td v-html="$options.filters.boolSimNao(item.indAtivo)"></td>
                                    <td>
                                        <input type="number" v-model="item.quantidadeEstoque" @change="setEstoque(item.quantidadeEstoque, item.id)">
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

        <modal-stock :show.sync="modalShow"
            :products="selected"
            @close="modalShow = false"
            @finish="refreshStock"></modal-stock>
    </div>
</template>

<script>
    import { isUndefinedOrNullOrEmpty } from '@/services/string';
    import Facade from '../../facade/facade';
    import Collections from '../../helpers/collections'
    const facade = new Facade();

    export default {
        data() {
            return {
                list: {},
                filter: {
                    indAtivo: 1,
                    indEstoque: 0,
                    indImagem: 0,
                    indBloqueado: 0,
                    indAprovado: 0
                },
                statusOptions: Collections.indOptions,
                items: [],
                size: 20,
                selected: [],
                selectAll: false,
                modalShow: false,
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
            refreshStock () {
                this.modalShow = false;
                this.selected = [];
                this.fetchData(0);
            },
            setEstoque(value, id) {
                let vm = this;

                if (isUndefinedOrNullOrEmpty(value)) {
                    return;
                }

                this.$loading.show(true);

                let produtos = [];
                produtos.push(id);
                let model = { produtos: produtos, quantidadeEstoque: value };

                let ret = facade.updateProductStock(model);
                ret.then(user => {
                    this.$notify.success('Sucesso!', 'A quantidade estoque foi atualizada.');
                    this.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },

            infoClick() {

                const stepsTour = []; 

                stepsTour.push({              
                    element: '#step1',
                    title: 'Título do Produto',
                    content: 'Consulta estoque pelo título do produto.'
                });

                stepsTour.push({              
                    element: '#step2',
                    title: 'Código do Produto',
                    content: 'Consulta estoque pelo código do produto'
                });

                stepsTour.push({             
                    element: '#step3',
                    title: 'Id WebContinental',
                    content: 'Consulta estoque pelo Id WebContinental do produto'
                });

                stepsTour.push({             
                    element: '#step4',
                    title: 'Status',
                    content: 'Consulta estoque pelo status do produto.'
                });

                stepsTour.push({              
                    element: '#step5',
                    title: 'Estoque',
                    content: 'Consulta estoque por estoque do produto.'
                });

                stepsTour.push({               
                    element: '#step6',
                    title: 'Mídia',
                    content: 'Consulta estoque por mídia do produto.' 
                });

                stepsTour.push({               
                    element: '#step7',
                    title: 'Bloqueado',
                    content: 'Consulta estoque por produto(s) bloqueado(s).'
                });

                stepsTour.push({               
                    element: '#step8',
                    title: 'Aprovado',
                    content: 'Consulta estoque por produto(s) aprovado(s).'
                });

                this.$tour.tour(stepsTour); 

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

                let params = {params: { page: page, size: vm.size }};

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
                this.fetchData(0);
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
