<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-12 text-right">
                    <br>        
                    <div class="form-group row">
                        <div class="col-md-6 text-left">
                            <div class="form-group row">
                                <img src="/static/images/logs.png" height="50" width="50">
                                <h3 style="line-height: 1.8 !important">Logs</h3>
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
                    </div>
                    <div class="card-block">
                        <div class="form-group row">
                           <div class="col-md-3 col-xs-3">                             
                                <label>Módulo</label>
                                <select2 required="" 
                                        v-model="filter.modulo"
                                        :options="moduloOptions"
                                        :select-option="true">
                                </select2>                                    
                            </div>

                            <div v-if="filter.modulo == 1" >
                                <div class="col-md-12 col-xs-3">                             
                                    <label>Tipo Movimento</label>
                                    <select2 v-if="filter.modulo == 1"  
                                            v-model="filter.tipoMovimento"
                                            :value="filter.tipoMovimento"
                                            :options="tipoMovimentoOptions"
                                            :select-option="true">
                                    </select2>  
                                </div>
                            </div>
                            <div v-else >
                            </div>

                            <div v-if="filter.modulo == 2"  >
                                <div class="col-md-12 col-xs-3">                             
                                    <label>Tipo Movimento</label>
                                    <select2 v-if="filter.modulo == 2"  
                                            v-model="filter.tipoMovimento"
                                            :value="filter.tipoMovimento"
                                            :options="tipoMovimentoProdutoOptions"
                                            :select-option="true">
                                    </select2>  
                                </div>
                            </div>
                            <div v-else >
                            </div>                            
                            <div class="col-md-3 col-xs-12">
                                <label>Usuário</label>
                                <input type="text" maxlength="255" class="form-control" v-model="filter.usuario">
                            </div>
                            <div class="col-md-3 col-xs-12">
                                <label>Descrição</label>
                                <input type="text" maxlength="255" class="form-control" v-model="filter.descricao">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-4">
                                <label>Data Inicio</label>
                                <flat-pickr
                                        v-model="filter.dataMovimentacaoInicial"
                                        :config="configFlatPickr"
                                        class="form-control"
                                        placeholder="Selecione uma data">
                                </flat-pickr>
                            </div>
                            <div class="col-md-4">
                                <label>Data Fim</label>
                                <flat-pickr
                                        v-model="filter.dataMovimentacaoFinal"
                                        :config="configFlatPickr"
                                        class="form-control"
                                        placeholder="Selecione uma data">
                                </flat-pickr>
                            </div>
                                                                           
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="form-group row">
                            <div class="col-md-6 text-left">                                
                            </div>
                            <div class="col-md-6 text-right">
                                <button type="button" @click="mudarEstado('minhaDiv')" class="btn btn-default">Cancelar</button>
                                <button type="button" @click="limparFiltros" class="btn btn-default">Limpar</button>
                                <button type="button" @click="search" class="btn btn-default"><i class="fa fa-search"></i> Pesquisar</button>
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
                                        <th>Data Movimentação</th>
                                        <th>Ação</th>
                                        <th>origem</th>
                                        <th>Operador</th>
                                        <th>Ação</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item, index) in list.content">                                            
                                        <td>{{item.dataMovimentacao}}</td>
                                        <td>{{item.acao}}</td>
                                        <td>{{item.origem}}</td>
                                        <td>{{item.usuario}}</td>    
                                        <td>
                                            <button v-if= "item.json" class="btn btn-secondary btn-xs" @click="modelJson(item.json)" > 
                                                <i class="fa fa-search"></i> 
                                            </button>
                                             <button v-if= "item.json" class="btn btn-secondary btn-xs" @click="download(item.json)" > 
                                                <i class="fa fa-download"></i> 
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
                <modal-json :show.sync="modalShow" 
                    :json="json"
                    @close="modalShow = false">
                </modal-json>                   
            </div>
        </div>
    </div>
</template>

<script>
    import Collections from '../../helpers/collections'
    import { Portuguese } from 'flatpickr/dist/l10n/pt'
    import flatPickr from 'vue-flatpickr-component'
    import Facade from '../../facade/facade';
    import 'flatpickr/dist/flatpickr.css'
    const facade = new Facade();

    export default {
        components: {
          flatPickr
        },
        data() {
            return {
                list: {},
                json: {},
                size: 20,
                modalShow: false,
                filter: {
                    modulo: 1,
                    tipoMovimento: 0
                },
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
                moduloOptions: Collections.moduloOptions,
                tipoMovimentoOptions: Collections.tipoMovimentoOptions,
                tipoMovimentoProdutoOptions: Collections.tipoMovimentoProdutoOptions

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
            download(json){

                let ret = facade.downloadJson(json);
                
            },
            modelJson(json){
                this.json =  json; 
                this.modalShow = true;
            },
            limparFiltros(){
                for (let key in this.filter) {
                    if (this.filter.hasOwnProperty(key)) {
                       this.filter[key] = null;
                    }
                }

                this.filter.modulo = 1,
                this.filter.tipoMovimento = 0
            },
            fetchData(page) {
                let vm = this;

                var clone = _.clone(this.filter);


                if (vm.filter.dataMovimentacaoInicial != null && vm.filter.dataMovimentacaoInicial != 'Invalid date' && vm.filter.dataMovimentacaoInicial != '') {
                    clone.dataMovimentacaoInicial = moment(vm.filter.dataMovimentacaoInicial).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataMovimentacaoInicial
                }

                if (vm.filter.dataMovimentacaoFinal != null && vm.filter.dataMovimentacaoFinal != 'Invalid date' && vm.filter.dataMovimentacaoFinal != '') {
                    clone.dataMovimentacaoFinal = moment(vm.filter.dataMovimentacaoFinal).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataMovimentacaoFinal
                }

                let params = {params: { page: page, size: vm.size }};

                for (let key in clone) {
                    if (clone.hasOwnProperty(key)) {
                        params['params'][key] = clone[key]
                    }
                }

                this.$loading.show(true);
                if (this.filter.modulo == 1){
                    let ret = facade.listLogs(params);
                    ret.then(response => {
                        vm.list = response.data;
                        this.$loading.show(false);
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao listar as logs.');
                        this.$loading.show(false);
                    })
                }

                if (this.filter.modulo == 2){
                    let ret = facade.listLogsProduto(params);
                    ret.then(response => {
                        vm.list = response.data;
                        this.$loading.show(false);
                    }).catch(e => {
                        this.$notify.error('Erro!', 'Ocorreu um problema ao listar as logs.');
                        this.$loading.show(false);
                    })
                }
                
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
