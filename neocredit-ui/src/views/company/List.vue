<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 text-right">
                    <br>        
                    <div class="form-group row">
                        <div class="col-md-6 text-left">
                            <div class="form-group row">
                                <img src="/static/images/parceiros.png" height="50" width="50">
                                <h3 style="line-height: 1.8 !important">Parceiros</h3>
                            </div>
                        </div>
                        <div class="col-md-6">                           
                            <button id="step11" v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'criar-parceiro'}" type="button" @click="create" class="btn btn-primary">+ Novo Parceiro</i></button>
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
                               <label>Razão Social</label>
                               <input id="step1" type="text" maxlength="255" class="form-control" v-model="filter.razaoSocial">
                           </div>
                           <div class="col-md-6 col-xs-12">
                               <label>Nome Fantasia</label>
                               <input id="step2" type="text" maxlength="255" class="form-control" v-model="filter.nomeFantasia">
                           </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-4 col-xs-12">
                                <label>CNPJ</label>
                                <masked-input id="step3"  v-model.trim="filter.cnpj" mask="11.111.111/1111-11" class="form-control"/>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <label>Telefone</label>
                                <masked-input id="step4" v-model.trim="filter.telefone" mask="(11) 11111-1111" class="form-control"/>
                            </div>
                            <div class="col-md-4 col-xs-12">
                                <label>IE</label>
                                <input id="step5" type="text" maxlength="20" class="form-control" v-model="filter.ie">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6 col-xs-12">
                                <label id="step6" >Estado</label>
                                <select2 v-model="filter.estado" :value="filter.estado"
                                    :options="states" placeholder="Selecione um estado" :select-option="true">
                                    <option value="" selected>Selecione um estado</option>
                                </select2>
                            </div>
                            <div class="col-md-3 col-xs-12">
                                <label>CEP</label>
                                <masked-input id="step7" v-model.trim="filter.cep" mask="11111-111" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-3">
                                <label id="step8">Cadastro Inicio</label>
                                <input-datepicker :autoclose="true" v-model="filter.dataCadastroInicio"></input-datepicker>
                            </div>
                            <div class="col-md-3">
                                <label id="step9">Cadastro Fim</label>
                                <input-datepicker :autoclose="true" v-model="filter.dataCadastroFim"></input-datepicker>
                            </div>
                            <div class="col-md-3">                               
                                <label id="step10">Ativo</label>
                                <select2 v-model="filter.indAtivo"
                                        :value="filter.indAtivo"
                                        :options="statusOptions"
                                        :select-option="true">
                                </select2>                                        
                            </div>                            
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group row">
                            <div class="col-md-12 text-right">
                                <button type="button" @click="mudarEstado('minhaDiv')" class="btn btn-default">Cancelar</button>
                                <button type="button" @click="exportar" class="btn btn-default"><i class="fa fa-download"></i> Exportar</button>
                                <button type="button" @click="limparFiltros" class="btn btn-default">Limpar</button>
                                <button type="button" @click="search" class="btn btn-default"><i class="fa fa-search"></i> Pesquisar</button>
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
                    <div class="card-block">
                        <table class="table table-md table-responsive">
                            <thead>
                                <tr>
                                    <th>Código ERP</th>
                                    <th>Nome</th>
                                    <th>CNPJ</th>
                                    <th>Cidade</th>
                                    <th>Estado</th>
                                    <th>Criado</th>
                                    <th>Ativo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in list.content">
                                    <td>{{ item.codigoErp }}</td>
                                    <td>{{ item.nomeFantasia }}</td>
                                    <td>{{ item.cnpj }}</td>
                                    <td>{{ item.cidade }}</td>
                                    <td>{{ item.estado }}</td>
                                    <td>{{ item.dataCadastro | formatDate('DD/MM/YYYY') }}
                                    <td v-html="$options.filters.boolSimNao(item.indAtivo)"></td>
                                    <td>
                                        <router-link v-dw-authorized="{roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'editar-parceiro'}" :to="{ name: 'edit-company', params: { id: item.id } }" class="btn btn-xs btn-secondary">
                                            <i class="fa fa-edit"></i>
                                        </router-link>
                                        <button v-dw-authorized="{roles: ['ADMIN','ADMIN-USUARIO'], permissions: 'excluir-parceiro'}" class="btn btn-xs btn-secondary" @click="remove(item.id)">
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
    </div>
</template>

<script>
    import { clearPhone, clearCpfCnpj, isUndefinedOrNullOrEmpty } from '@/services/string';
    import Collections from '../../helpers/collections'
    import { getStates } from '@/services/util';
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        data() {
            return {
                list: {},
                filter: {
                    indAtivo: 0
                },
                statusOptions: Collections.indOptions,
                items: [],
                size: 20,
                states: [],
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
                this.filter.indAtivo = 0;
            },
            exportar() {
                let vm = this;

                var clone = _.clone(this.filter);
                if (!isUndefinedOrNullOrEmpty(clone.telefone)) clone.telefone = clearPhone(clone.telefone);
                if (!isUndefinedOrNullOrEmpty(clone.cnpj)) clone.cnpj = clearCpfCnpj(clone.cnpj);
                if (!isUndefinedOrNullOrEmpty(clone.cep)) clone.cep = clearCpfCnpj(clone.cep);
                

                let params = {params: {}};

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        params['params'][key] = clone[key]
                    }
                }

                this.$loading.show(true);
                facade.exportCompany(params['params']);
                this.$loading.show(false);
                
            },
            infoClick() {

                const stepsTour = [];  

                stepsTour.push({                 
                    element : '#step1',
                    title : 'Razão Social',
                    content : 'Consulta empresa por Razão Social.'
                });

                stepsTour.push({    
                    element : '#step2',
                    title : 'Nome Fantasia',
                    content : 'Consulta empresa por Nome Fantasia.'
                });

                stepsTour.push({    
                    element : '#step3',
                    title : 'Cnpj',
                    content : 'Consulta empresa pelo seu cnpj.'
                });               

                stepsTour.push({    
                    element : '#step4',
                    title : 'Telefone',
                    content : 'Consulta empresa por telefone.'
                });
                
                stepsTour.push({    
                    element : '#step5',
                    title : 'Inscrição Estadual',
                    content : 'Consulta empresa por Inscrição Estadual.'
                });

                stepsTour.push({    
                    element : '#step6',
                    title : 'Estado',
                    content : 'Consulta empresa por Estado.'
                });

                stepsTour.push({    
                    element: '#step7',
                    title : 'CEP',
                    content : 'Consulta empresa por CEP.'
                });

                stepsTour.push({    
                    element : '#step8',
                    title : 'Cadastro Inicio',
                    content : 'Consulta empresa por data de cadastro.'
                });

                stepsTour.push({    
                    element : '#step9',
                    title :'Cadastro Fim',
                    content :'Consulta empresa por data de cadastro.'
                });

                stepsTour.push({    
                    element : '#step10',
                    title : 'Status',
                    content : 'Consulta empresas por status ativo e inativo.'
                });

                stepsTour.push({    
                    element : '#step11',
                    title : 'Cadastrar novo Parceiro',
                    content : 'Cadastre um novo Parceiro.'
                });

                stepsTour.push({    
                    element : '#step12',
                    title : 'Lista de Parceiros',
                    content : 'Resultados encontrados relacionados aos filtros de parceiros informados.'
                });
                
                this.$tour.tour(stepsTour); 

            },   
            create() {
                this.$router.push({ name: 'new-company' });
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

                    let ret = facade.deleteCompany(id);
                    ret.then(response => {
                        this.$notify.success('', 'Registro removido com sucesso.');
                        this.fetchData(0);
                        this.$loading.show(false);
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao deletar a empresa.');
                        this.$loading.show(false);
                    });
                }, dismiss => {

                });
            },
            fetchData(page) {
                let vm = this;

                var clone = _.clone(this.filter);
                if (!isUndefinedOrNullOrEmpty(clone.telefone)) clone.telefone = clearPhone(clone.telefone);
                if (!isUndefinedOrNullOrEmpty(clone.cnpj)) clone.cnpj = clearCpfCnpj(clone.cnpj);
                if (!isUndefinedOrNullOrEmpty(clone.cep)) clone.cep = clearCpfCnpj(clone.cep);

                let params = {params: { page: page, size: vm.size }};

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        params['params'][key] = clone[key]
                    }
                }

                this.$loading.show(true);
                let ret = facade.listCompany(params);
                ret.then(response => {
                    vm.list = response.data;
                    this.$loading.show(false);
                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar as empresas.');
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
        created () {
            this.states = getStates();
        },
        beforeMount() {
            this.fetchData(0);
        }
    }
</script>
