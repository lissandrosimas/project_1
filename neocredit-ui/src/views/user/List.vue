<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="search">
                    <div class="col-md-12 text-right">
                        <br>        
                        <div class="form-group row">
                            <div class="col-md-6 text-left">
                                <div class="form-group row">
                                    <img src="/static/images/usuarios.png" height="50" width="50">
                                    <h3 style="line-height: 1.8 !important">Usuários</h3>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <button v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO', 'USUARIO'], permissions: 'criar-usuario'}" id="step8" type="button" @click="create" class="btn btn-primary">+ Novo Usuário</i></button>
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
                                    <label>Nome</label>
                                    <input id="step1" type="text" maxlength="100" class="form-control" v-model="filter.nome">
                                </div>
                                <div class="col-md-6">
                                    <label>Usuário</label>
                                    <input id="step2" type="text" maxlength="50" class="form-control" v-model="filter.username">
                                </div>
                            </div>
                            <div class="form-group row" v-dw-authorized="{ roles: 'ADMIN' }">
                                <div class="col-md-6">
                                    <label id="step3">Perfil</label>
                                    <select2  v-model="filter.perfilId" :options="profiles" placeholder="Selecione um perfil" ></select2>
                                </div>                                
                                <div class="col-md-6">
                                    <label>Parceiro</label>
                                    <input id="step4" type="text" maxlength="50" class="form-control" v-model="filter.empresaNomeFantasia">
                                </div>                                
                            </div>
                            <div class="form-group row"> 
                                <div class="col-md-3">                               
                                    <label id="step5" >Ativo</label>
                                    <select2 v-model="filter.indAtivo"
                                        :value="filter.indAtivo"
                                        :options="statusOptionsAtivo"
                                        :select-option="true">
                                    </select2>                                        
                                </div>                                  
                                <div class="col-md-3">                               
                                    <label id="step6"> Bloqueado</label>
                                    <select2 v-model="filter.indBloqueado"
                                        :value="filter.indBloqueado"
                                        :options="statusOptions"
                                        :select-option="true">
                                    </select2>                                        
                                </div> 
                                <div class="col-md-3">                               
                                    <label id="step7">Temporário</label>
                                    <select2 v-model="filter.indTemporario"
                                        :value="filter.indTemporario"
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
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i> Pesquisar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="step9">
                    <div class="card-header">
                        <dw-table-header :size="size" @finish="updateSize" :pagination="list"></dw-table-header>
                    </div>
                    <div class="card-block col-md-12">
                        <table class="table table-md table-responsive">
                            <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Usuário</th>
                                <th>Perfil</th>
                                <th>Empresa</th>
                                <th>Cargo</th>
                                <th>Ativo</th>
                                <th>Ações</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in list.content">
                                <td>{{ item.id }}</td>
                                <td>{{ item.nome }}</td>
                                <td>{{ item.username }}</td>
                                <td>{{ item.perfilNomePerfil }}</td>
                                <td>{{ item.empresaNomeFantasia }}</td>
                                <td>{{ item.cargo }}</td>
                                <td v-html="$options.filters.boolSimNao(item.indAtivo)"></td>
                                <td>                           
                                    <router-link v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO', 'USUARIO'], permissions: 'editar-usuario'}" :to="{ name: 'edit-user', params: { id: item.id }}"
                                                class="btn btn-secondary btn-xs">
                                        <i class="fa fa-edit"></i>
                                    </router-link>
                                    <button v-dw-authorized="{ roles: ['ADMIN','ADMIN-USUARIO', 'USUARIO'], permissions: 'excluir-usuario'}" class="btn btn-secondary  btn-xs" @click="remove(item.id)">
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
    import Facade from '../../facade/facade';
    import Collections from '../../helpers/collections';
    const facade = new Facade();
    
    export default {
        data() {
            return {
                list: {},
                filter: {
                    indAtivo: 0,
                    indBloqueado: 0,
                    indTemporario: 0,
                    perfilId: null
                },
                statusOptions: Collections.indYesorNoOptions,
                statusOptionsAtivo: Collections.indOptions,
                items: [],
                profiles: [],
                size: 20
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
                this.filter.indAtivo= 0,
                this.filter.indBloqueado= 0,
                this.filter.indTemporario= 0
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
                facade.exportUser(params['params']);
                this.$loading.show(false);
              
            },

            infoClick() {

                const stepsTour = []; 

                stepsTour.push({            
                    element: '#step1',
                    title: 'Nome Usuário',
                    content: 'Consulta por nome ou parte do nome do usuário.'
                });

                stepsTour.push({  
                    element: '#step2',
                    title: 'E-mail Usuário',
                    content: 'Consulta por e-mail ou parte do e-mail do usuário.'
                });

                stepsTour.push({
                    element: '#step3',
                    title: 'Perfil Usuário',
                    content: 'Consulta usuário pelo perfil cadastrado.'
                });
                 
                stepsTour.push({
                    element: '#step4',
                    title: 'Parceiro Usuário',
                    content: 'Consulta usuário pelo parceiro relacionado.'
                });

                stepsTour.push({
                    element: '#step5',
                    title: 'Ativo',
                    content: 'Consulta somente usuários ativos no sistema.'
                });

                stepsTour.push({
                    element: '#step6',
                    title: 'Bloqueado',
                    content: 'Consulta somente usuários bloquedos no sistema.'
                });

                stepsTour.push({
                    element: '#step7',
                    title: 'Temporário',
                    content: 'Consulta somente usuários temporários no sistema.'
                });

                stepsTour.push({
                    element: '#step8',
                    title: 'Cadastrar novo Usuário',
                    content: 'Cadastre um novo usuário.'
                });
                
                stepsTour.push({
                    element: '#step9',
                    title: 'Lista de usuários',
                    content: 'Resultados encontrados relacionado aos filtros de usuários informados.'
                });

                this.$tour.tour(stepsTour); 

            },   

            create() {
                this.$router.push({name: 'new-user'});
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

                    let ret = facade.deleteUser(id);
                    ret.then(response => {
                        this.$notify.success('', 'Registro removido com sucesso.');
                        this.fetchData(0);
                        this.$loading.show(false);
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao deletar o usuário.');
                        this.$loading.show(false);
                    });
                }, dismiss => {

                });
            },

            fetchData(page) {
                let vm = this;

                let params = {params: {page: page, size: vm.size}};

                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                        params['params'][key] = this.filter[key]
                    }
                }

                this.$loading.show(true);
                let ret = facade.listUser(params);
                ret.then(response => {
                    vm.list = response.data;
                    this.$loading.show(false);
                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar os usuários.');
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
            let vm = this;
            this.$loading.show(true);

            let retprofiles = facade.listProfile();
            retprofiles.then(response => {
                vm.profiles = response.data;
                this.$loading.show(false);
                this.fetchData(0);
            }).catch(e => {
                this.$loading.show(false);
                vm.$notify.error('Erro!', 'Ocorreu um problema ao buscar os perfis.');
            });
        }
    }
</script>
<style type="text/css">
    .table {

        width: 100%;

        th {
            font-size: 1em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            background-color: #eceff1;

        }

        td {
            font-size: 1em;
            overflow:hidden;
        }
    }
</style>
