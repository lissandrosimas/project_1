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
                                    <img src="/static/images/clientes.png" height="50" width="50">
                                    <h3 style="line-height: 1.8 !important">Clientes</h3>
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
                            <div class="col-md-12 text-right">
                                <a href="javascript:infoClick" @click="infoClick">Ficou com dúvida ou precisa de ajuda ?</a>
                            </div>
                        </div>
                        <div class="card-block">
                            <div class="form-group row">
                                <div class="col-md-4">
                                    <label>Nome</label>
                                    <input id="step1" type="text" maxlength="125" class="form-control" v-model="filter.nome">
                                </div>
                                <div class="col-md-4">
                                    <label>CGC</label>
                                    <input id="step2" type="text" maxlength="20" class="form-control" v-model="filter.cgc">
                                </div>
                                <div class="col-md-4">
                                    <label>E-mail</label>
                                    <input id="step3" type="email" maxlength="125" class="form-control" v-model="filter.email">
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="form-group row">
                                <div class="col-md-12 text-right">
                                    <button type="button" @click="mudarEstado('minhaDiv')" class="btn btn-default">Cancelar</button>
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
                <div class="card" id="step4">
                    <div class="card-header">
                        <dw-table-header :size="size" @finish="updateSize" :pagination="list"></dw-table-header>
                    </div>
                    <div class="card-block">
                        <table class="table table-md">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>CGC</th>
                                    <th>Telefone</th>
                                    <th>Data Nascimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in list.content">
                                    <td>{{ item.nome }} {{ item.sobrenome }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.cgc }}</td>
                                    <td>{{ item.telefonePrincipal }}</td>
                                    <td>{{ item.dataNascimento }}</td>
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
    import {clearPhone, clearCpfCnpj, isUndefinedOrNullOrEmpty} from '@/services/string';
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        data() {
            return {
                list: {},
                filter: {
                    nome: null,
                    cgc: null,
                    email: null,
                },
                items: [],
                size: 20,
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
            },
            fetchData(page) {
                let vm = this;

                var clone = _.clone(this.filter);

                let params = {params: { page: page, size: vm.size }};

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        params['params'][key] = clone[key]
                    }
                }

                this.$loading.show(true);
                let ret = facade.listClient(params);
                ret.then(response => {
                    vm.list = response.data;
                    this.$loading.show(false);
                }).catch(e => {
                    this.$notify.error('Erro!', 'Ocorreu um problema ao listar os Clientes.');
                    this.$loading.show(false);
                })
            },

            infoClick() {

                const stepsTour = []; 

                stepsTour.push({              
                    element: '#step1',
                    title: 'Nome',
                    content: 'Consulta pelo nome do Cliente.'
                });

                stepsTour.push({              
                    element: '#step2',
                    title: 'CGC',
                    content: 'Consulta pelo CPF ou CNPJ do Cliente.'
                });

                stepsTour.push({             
                    element: '#step3',
                    title: 'E-mail',
                    content: 'Consulta pelo E-mail do Cliente.'
                });

                stepsTour.push({               
                    element: '#step4',
                    title: 'Lista de Clientes',
                    content: 'Resultados encontrados relacionados aos filtros de Clientes informados.' 
                });

              this.$tour.tour(stepsTour); 

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
        },
        beforeMount() {
            this.fetchData(0);
        }
    }
</script>
