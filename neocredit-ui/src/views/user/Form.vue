<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="save">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-user"></i> Usuário
                            <a style="float: right; text-align: right;" href="javascript:infoClick" @click="infoClick">Ficou com dúvida ou precisa de ajuda ?</a> 
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-6" :class="{ 'has-danger': $v.model.nome.$error }">
                                    <label>Nome*</label>
                                    <input id= "step1"
                                           type="text"
                                           maxlength="100"
                                           class="form-control"
                                           v-model="model.nome"
                                           @input="$v.model.nome.$touch()">
                                </div>
                                <div class="col-md-6" :class="{ 'has-danger': $v.model.username.$error }">
                                    <label>Username*</label>
                                    <input id= "step2"
                                           type="email"
                                           :readonly="model.id"
                                           maxlength="100"
                                           class="form-control"
                                           v-model="model.username"
                                           @input="$v.model.username.$touch()">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6" :class="{ 'has-danger': $v.model.telefone.$error }">
                                    <label>Telefone*</label>
                                    <masked-input id= "step3"
                                                  v-model.trim="model.telefone"
                                                  mask="(11) 11111-1111"
                                                  class="form-control"
                                                  @input="$v.model.telefone.$touch()">
                                    </masked-input>
                                </div>
                                <div class="col-md-6" :class="{ 'has-danger': $v.model.cargo.$error }">
                                    <label>Cargo*</label>
                                    <input id= "step4" type="text" class="form-control" maxlength="50" v-model="model.cargo"
                                           @input="$v.model.cargo.$touch()">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-3">
                                    <label>Ativo</label>
                                     <div class="styled-select">                                    
                                        <select v-model="model.indAtivo" :value="model.indAtivo">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <label>Bloqueado</label>
                                    <div class="styled-select">                                    
                                        <select v-model="model.indBloqueado" :value="model.indBloqueado">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                        </select>
                                    </div>                                    
                                </div>
                                <div class="col-md-3">
                                    <label>Temporário</label>
                                    <div class="styled-select">                                    
                                        <select v-model="model.indTemporario" :value="model.indTemporario">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                        </select>
                                    </div>                                    
                                </div>
                                <dw-authorized roles="ADMIN" v-if="model.username != ''">
                                    <div class="col-md-6">
                                        <label>Senha</label>
                                        <div class="styled-select">                                                                      
                                            <button type="button" @click="resetarSenha" class="btn btn-primary">Resetar senha do usuário</button>                                        
                                        </div>                                    
                                    </div>
                                </dw-authorized>                                                       
                            </div>
                            <div class="form-group row">
                                <dw-authorized roles="ADMIN" class="col-md-4"
                                               :class="{ 'has-danger': $v.model.perfilId.$error }">
                                    <label>Perfil*</label>
                                    <span class="help">
                                        Descrição dos perfis disponíveis
                                        <i class="fa fa-question-circle ftwo-help" data-intro-code="referenceCode" @click="infoClickPerfil" id= "step5"></i>
                                    </span>
                                    <select2 v-model="model.perfilId"
                                             :value="model.perfilId"
                                             :options="profiles"
                                             placeholder="Selecione um perfil"
                                             :select-option="true">
                                        <option value="" selected>Selecione um perfil</option>
                                    </select2>
                                </dw-authorized>
                                <dw-authorized roles="ADMIN" class="col-md-4"
                                               :class="{ 'has-danger': $v.model.tipo && $v.model.tipo.$error }">                                   
                                    <label>Tipo*</label>
                                    <span class="help">
                                        Descrição dos tipos disponíveis
                                        <i class="fa fa-question-circle ftwo-help" data-intro-code="referenceCode" @click="infoClickTipo" id= "step6"s></i>
                                    </span>
                                    <select2 v-model="model.tipo"
                                             :value="model.tipo"
                                             :options="tiposUsuario"
                                             placeholder="Selecione um tipo"
                                             :select-option="true">
                                        <option value="" selected>Selecione um tipo</option>
                                    </select2>
                                </dw-authorized>
                                <dw-authorized roles="ADMIN" class="col-md-4"
                                               :class="{ 'has-danger': $v.model.empresaId && $v.model.empresaId.$error }">
                                    <label id="step7" >Parceiro*</label>
                                        <select2 v-model="model.empresaId"
                                             :value="model.empresaId"
                                             :options="companies"
                                             placeholder="Selecione uma Empresa"
                                             :select-option="true">
                                        <option value="" selected>Selecione um parceiro</option>
                                    </select2>
                                </dw-authorized>
                            </div>
                        </div>
                    </div>

                    <transition name="fade" appear>
                        <dw-authorized class="card" roles="ADMIN" v-if="model.tipo == 2">
                            <div class="card-header">
                                <i class="fa fa-building-o"></i> Empresas do Representante
                            </div>
                            <div class="card-block">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="input-group">
                                            <select2
                                                    :ajax="true"
                                                    v-model="empresaSelected"
                                                    url-ajax="empresas/pesquisar"
                                                    :is-object="true"
                                                    key-id="id"
                                                    :key-text="['nomeFantasia', 'cnpj']"
                                                    :key-text-divider="' / '">
                                            </select2>
                                            <span class="input-group-btn">
                                                <button class="btn btn-default" type="button" @click="addCompany">Adicionar</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class="table table-bordered table-sm">
                                            <thead>
                                            <th width="70%">Nome Fantasia</th>
                                            <th width="20%">CNPJ</th>
                                            <th></th>
                                            </thead>
                                            <tbody>
                                            <tr v-for="e in model.empresas">
                                                <td style="vertical-align: middle;">{{ e.nomeFantasia }}</td>
                                                <td style="vertical-align: middle;">{{ e.cnpj }}</td>
                                                <td class="text-center">
                                                    <button class="btn btn-sm btn-danger" type="button" @click="removeCompany(e)"><i class="fa fa-trash-o"></i></button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </dw-authorized>
                    </transition>

                    <tr v-for="n in model.requested">
                        <td>{{ n }}</td>
                    </tr>
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-unlock"></i> Permissões<i id="step8"></i>
                        </div>  
                        <div class="card-block form form-horizontal">                            
                            <div class=" row">
                                <div class="col-md-12">
                                    <dw-multi-select :available="available"
                                                     :requested="requested"
                                                     v-on:update="updateModules"></dw-multi-select>
                                </div>
                            </div>
                        </div>                    
                    </div> 
                    <div class="card">
                        <div class="card-footer text-right">
                            <router-link :to="{ name: 'list-user' }" class="btn btn-link">Cancelar</router-link>
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import {formatPhone} from '@/services/string';
    import Collections from '@/helpers/collections'
    import Facade from '../../facade/facade';
    const facade = new Facade();

    import {required, minLength, maxLength, withParams, email} from 'vuelidate/lib/validators';
    const isPhone = (value) => /^(\([0-9]{2}\)\s*|[0-9]{3}\-)[0-9]{5}-[0-9]{4}$/.test(value);  //phone valid

    export default {
        data() {
            return {
                model: {
                    nome: '',
                    username: '',
                    telefone: '',
                    cargo: '',
                    indAtivo: "true",
                    indTemporario: "true",
                    indBloqueado: "false",
                    empresaId: '',
                    empresas: [],
                    perfilId: '',
                    tipo: null,
                },
                profiles: [],
                available: [],
                requested: [],
                companies: [],
                tiposUsuario: Collections.tiposUsuario,
                empresaSelected: {id: 0}
            }
        },
        computed: {
            modules() {
                if (this.requested.length == 0) return [];

                let list = [];
                this.requested.forEach((item) => {
                    list.push(item.id);
                });

                return list;
            },
            isAdmin() {
                return facade.isAdmin();
            }
        },
        validations() {
            if (this.isAdmin) {
                return {
                    model: {
                        nome: {
                            required,
                            minLength: minLength(2)
                        },
                        username: {
                            required,
                            email,
                            minLength: minLength(5)
                        },
                        telefone: {
                            required,
                            isPhone
                        },
                        cargo: {
                            required,
                            minLength: minLength(5)
                        },
                        perfilId: {
                            required
                        },
                        empresaId: {
                            required
                        },
                        tipo: {
                            required
                        }
                    }
                };
            } else {
                return {
                    model: {
                        nome: {
                            required,
                            minLength: minLength(2)
                        },
                        username: {
                            required,
                            email,
                            minLength: minLength(5)
                        },
                        telefone: {
                            required,
                            isPhone
                        },
                        cargo: {
                            required,
                            minLength: minLength(5)
                        },
                        perfilId: {},
                        tipo: {},
                        empresaId: {}
                    }
                };
            }
        },
        methods: {
            resetarSenha() {
                let vm = this;
                this.$loading.show(true);
                let ret = facade.recoverPassword(this.model);
                ret.then(user => {
                    vm.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });            
            },

            infoClickPerfil() {
                const stepsTour = []; 
                stepsTour.push({              
                    element: '#step5',
                    title: 'Perfil de Usuário',
                    content: 'Informe o perfil do usuário. O perfil do usuário definirá as ações que o usuário terá acesso. ADMIN: permissão total ao usuário e deverá ser utilizado exclusivamente por pessoas da própria Infoar. Não haverá restrições de acesso às telas do sistema. ADMIN-USUARIO: Este perfil terá acesso à gestão de preços e estoques, pedidos, produtos e definições de acessos do perfil USUARIO da sua empresa. USUARIO: Este perfil terá um acesso mais restrito que o Administrador da empresa parceira, com acessos definidos pelo usuário com perfil ADMIN-USUARIO.'
                });
                this.$tour.tour(stepsTour);
            },

            infoClickTipo() {
                const stepsTour = []; 
                stepsTour.push({               
                    element: '#step6',
                    title: 'Tipo de Usuário',
                    content: 'Usuário Padrão: Usuários das empresas parceiras da Infoar no sistema, tem acesso aos dados relativos à sua empresa. Usuário Representante: É um tipo especial de usuário, pois ele pode “representar” mais de uma empresa parceira da Infoar no acesso ao sistema.' 
                });
                this.$tour.tour(stepsTour);
            },
            infoClick() {

                const stepsTour = []; 

                stepsTour.push({              
                    element: '#step1',
                    title: 'Nome do Usuário',
                    content: 'Informe o nome do usuário que deseja cadastrar.'
                });

                stepsTour.push({              
                    element: '#step2',
                    title: 'E-mail do Usuário',
                    content: 'Informe o e-mail do usuário. A senha de primeiro acesso será enviada para este e-mail e será o login do usuário no portal.'
                });

                stepsTour.push({             
                    element: '#step3',
                    title: 'Telefone do Usuário',
                    content: 'Informe o telefone do usuário.'
                });

                stepsTour.push({             
                    element: '#step4',
                    title: 'Cargo do Usuário',
                    content: 'Informe o cargo ocupado pelo usuário.'
                });

                stepsTour.push({              
                    element: '#step5',
                    title: 'Perfil de Usuário',
                    content: 'Informe o perfil do usuário. O perfil do usuário definirá as ações que o usuário terá acesso. ADMIN: permissão total ao usuário e deverá ser utilizado exclusivamente por pessoas da própria Infoar. Não haverá restrições de acesso às telas do sistema. ADMIN-USUARIO: Este perfil terá acesso à gestão de preços e estoques, pedidos, produtos e definições de acessos do perfil USUARIO da sua empresa. USUARIO: Este perfil terá um acesso mais restrito que o Administrador da empresa parceira, com acessos definidos pelo usuário com perfil ADMIN-USUARIO.'
                });

                stepsTour.push({               
                    element: '#step6',
                    title: 'Tipo de Usuário',
                    content: 'Usuário Padrão: Usuários das empresas parceiras da Infoar no sistema, tem acesso aos dados relativos à sua empresa. Usuário Representante: É um tipo especial de usuário, pois ele pode “representar” mais de uma empresa parceira da Infoar no acesso ao sistema.' 
                });

                stepsTour.push({               
                    element: '#step7',
                    title: 'Empresa do Usuário',
                    content: 'Seleciona a empresa do usuário. Se o usuário for "usuário representante" está empresa será sua empresa padrão.'
                });

                stepsTour.push({             
                    element: '#step8',
                    title: 'Permissões do Usuário',
                    content: 'Lista de ações disponíveis para determinar ao usuário.'
                });

                this.$tour.tour(stepsTour); 

            },

            addCompany() {
                let exists = _.find(this.model.empresas, e => {
                    return e.id === this.empresaSelected.id
                })
                if (!exists) {
                    this.model.empresas.push({
                        nomeFantasia: this.empresaSelected.text.split('/')[0],
                        cnpj: this.empresaSelected.text.split('/')[1],
                        id: this.empresaSelected.id
                    })
                } else {
                    this.$notify.warning('Atenção!', 'Esta empresa já está vinculada.');
                }

                this.empresaSelected = {}

            },
            removeCompany(item) {

                this.$swal({
                    title: 'Você tem certeza?',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Remover',
                    cancelButtonText: 'Cancelar'
                }).then(() => {

                    let idx = _.findIndex(this.model.empresas, o => {
                        return o.id == item.id
                    })

                    this.model.empresas.splice(idx, 1);
                }, () => {
                })
            },
            save() {
                let vm = this;
                if (this.$v.model.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                vm.model.modulos = vm.modules;
                this.$loading.show(true);
                if (vm.model.id) {
                    let ret = facade.updateUser(vm.model);
                    ret.then(user => {
                        this.$router.push({name: 'list-user'});
                        this.$loading.show(false);
                    }).catch(e => {
                        e.forEach((item) => {
                            this.$notify.error(item.field, item.message);
                        });
                        this.$loading.show(false);
                    });
                } else {
                    let ret = facade.createUser(vm.model);
                    ret.then(user => {
                        this.$router.push({name: 'list-user'});
                        this.$loading.show(false);
                    }).catch(e => {
                        e.forEach((item) => {
                            this.$notify.error(item.field, item.message);
                        });
                        this.$loading.show(false);
                    });
                }
            },

            setData(modules, user) {
                let vm = this;
                if (user) {
                    user.telefone = formatPhone(user.telefone);
                    this.model = user;
                    this.available = modules;

                    _.pullAllWith(this.available, this.model.modulos, (arrVal, othVal) => {
                        if (arrVal.id == othVal) {
                            vm.requested.push(arrVal);
                            return true;
                        }
                        return false;
                    });
                } else {
                    this.available = modules;
                }
            },
            throwError(e) {
                this.$notify.error('Erro!', e);
            },
            updateModules(requested) {
                this.requested = requested;
            }
        },
        created () {
            let vm = this;
            this.$loading.show(true);
            Promise.all([
                facade.listProfile(),
                facade.listCompany({
                    params: {indAtivo: 1}
                })
            ]).then(res => {
                this.profiles = res[0].data;
                this.companies = _.map(res[1].data.content, (item) => ({id: item.id, text: item.nomeFantasia}));
                this.$loading.show(false);
            }).catch(e => {
                vm.$notify.error('Erro!', 'Ocorreu um problema ao buscar os perfis.');
            })

        },
        beforeRouteEnter (to, from, next) {
            let vm = this;

            let retmodules = facade.listModule();
            retmodules.then(resmodule => {
                if (to.params.id) {
                    let ret = facade.getUser(to.params.id);
                    ret.then(user => {
                        next(vm => vm.setData(resmodule.data, user.data));
                    }).catch(e => {
                        next(vm => vm.setData(resmodule.data));
                    });
                } else {
                    next(vm => vm.setData(resmodule.data));
                }
            }).catch(e => {
                next(vm => vm.throwError('Ocorreu um problema ao buscar os módulos.'));
            });
        }
    }

</script>
<style lang="css">
    .ftwo-help {
        cursor: pointer;
        color: #A7ABB1;
        vertical-align: middle;
    }
    .fa {
        display: inline-block;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    *, *:before, *:after {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .form-group .help {
        color: #A7ABB1;
        font-size: 12px;
    }

    .list-group {
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.075);
        box-shadow: 0 1px 2px rgba(0,0,0,0.075);
    }
    .list-group {
        padding-left: 0;
        margin-bottom: 20px;
    }

    .list-group-item:first-child {
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
    }

    .list-group-item {
        position: relative;
        display: block;
        padding: 10px 15px;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid #ddd;
    }

    .pull-left {
        float: left;
    }

    .pull-left {
        float: left!important;
    }

    .radio, .checkbox {
        padding-left: 0px;
    }
    .radio, .checkbox {
        margin-bottom: 0;
        margin-top: 0;
    }
    .radio, .checkbox {
        display: block;
        min-height: 20px;
        padding-left: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        vertical-align: middle;
    }


    .checkbox input[type=checkbox] {
    display: none;
    }
    .checkbox input[type=checkbox] {
        display: none;
    }
    .radio input[type="radio"], .radio-inline input[type="radio"], .checkbox input[type="checkbox"], .checkbox-inline input[type="checkbox"] {
        float: left;
        margin-left: -20px;
    }
    .table th input[type="radio"], input[type="checkbox"], .table td input[type="radio"], input[type="checkbox"] {
        margin-top: -2px;
    }
    input[type="radio"], input[type="checkbox"] {
        margin: 4px 0 0;
        margin-top: 1px \9;
        line-height: normal;
        cursor: pointer;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    input[type="radio"], input[type="checkbox"] {
        margin: 4px 0 0;
        margin-top: 1px \9;
        line-height: normal;
    }
    input[type="checkbox"], input[type="radio"] {
        padding: 0;
        box-sizing: border-box;
    }
</style>