<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="save">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-briefcase"></i> Parceiro
                            <a style="float: right; text-align: right;" href="javascript:infoClick" @click="infoClick">Ficou com dúvida ou precisa de ajuda ?</a> 
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.razaoSocial.$error }">
                                    <label>Razão Social*</label>
                                    <input style="text-transform: uppercase" id="step1" required type="text" maxlength="255" class="form-control" v-model="model.razaoSocial" @input="$v.model.razaoSocial.$touch()">
                                </div>
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.nomeFantasia.$error }">
                                    <label>Nome Fantasia*</label>
                                    <input style="text-transform: uppercase" id="step2" required type="text" maxlength="255" class="form-control" v-model="model.nomeFantasia" @input="$v.model.nomeFantasia.$touch()">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 col-xs-12" :class="{ 'has-danger': $v.model.cnpj.$error }">
                                    <label>CNPJ*</label>
                                    <masked-input id="step3" required v-model.trim="model.cnpj" mask="11.111.111/1111-11" class="form-control" @input="$v.model.cnpj.$touch()" />
                                </div>
                                <div class="col-md-4 col-xs-12" :class="{ 'has-danger': $v.model.telefone.$error }">
                                    <label>Telefone</label>
                                    <masked-input id="step4" v-model.trim="model.telefone" mask="(11) 11111-1111" class="form-control" @input="$v.model.telefone.$touch()" />
                                </div>
                                <div class="col-md-4 col-xs-12">
                                    <label>IE</label>
                                    <input id="step5" type="text" maxlength="20" class="form-control" v-model="model.ie">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-4 col-xs-12">
                                    <label>Codigo ERP</label>
                                    <input id="step6" type="text" maxlength="100" class="form-control" v-model="model.codigoErp">
                                </div>
                                <div class="col-md-4 col-xs-12">
                                    <label>Site</label>
                                    <input id="step7" type="text" maxlength="100" class="form-control" v-model="model.site">
                                </div>
                                <div class="col-md-3 col-xs-12">
                                    <label id="step8" >Ativo</label>
                                    <div class="styled-select">                                    
                                        <select v-model="model.indAtivo" :value="model.indAtivo">
                                            <option value="true">Sim</option>
                                            <option value="false">Não</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-map-marker"></i> Endereço
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.estado.$error }">
                                    <label id="step9">Estado*</label>
                                    <select2  v-model="model.estado" :value="model.estado"
                                        :options="states" placeholder="Selecione um estado" :select-option="true">
                                        <option value="" selected>Selecione um estado</option>
                                    </select2>
                                </div>
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.cidade.$error }">
                                    <label>Cidade*</label>
                                    <input id="step10" required type="text" maxlength="100" class="form-control" v-model="model.cidade" @input="$v.model.cidade.$touch()">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.endereco.$error }">
                                    <label>Endereco*</label>
                                    <input id="step11" required type="text" maxlength="300" class="form-control" v-model="model.endereco" @input="$v.model.endereco.$touch()">
                                </div>
                                <div class="col-md-2 col-xs-12" :class="{ 'has-danger': $v.model.numero.$error }">
                                    <label>Número*</label>
                                    <input id="step12" required type="text" maxlength="30" class="form-control" v-model="model.numero" @input="$v.model.numero.$touch()">
                                </div>
                                <div class="col-md-4 col-xs-12">
                                    <label>Complemento</label>
                                    <input id="step13" type="text" maxlength="100" class="form-control" v-model="model.complemento">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.bairro.$error }">
                                    <label>Bairro*</label>
                                    <input id="step14" required type="text" maxlength="100" class="form-control" v-model="model.bairro" @input="$v.model.bairro.$touch()">
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.cep.$error }">
                                    <label>CEP</label>
                                    <masked-input id="step15" v-model.trim="model.cep" mask="11111-111" class="form-control" @input="$v.model.cep.$touch()" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-map-marker"></i> Integração
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12">
                                    <label>Token Integração</label>
                                    <input id="step16" disabled="true" type="text" maxlength="255" class="form-control" v-model="model.tokenIntegracao">
                                </div>
                                <div class="col-md-6 col-xs-12">
                                    <label>Referência da Loja</label>
                                    <input id="step17" disabled="true" type="text" maxlength="255" class="form-control" v-model="model.referenciaLoja">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-map-marker"></i> Responsável
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-4 col-xs-12">
                                    <label>Nome*</label>
                                    <input id="step18" required type="text" maxlength="255" class="form-control" v-model="model.responsavelNome">
                                </div>
                                <div class="col-md-4 col-xs-12">
                                    <label>E-mail*</label>
                                    <input id="step19" required type="text" maxlength="100" class="form-control" v-model="model.responsavelEmail">
                                </div>
                                <div class="col-md-4 col-xs-12">
                                    <label>Telefone</label>
                                    <masked-input id="step20" v-model.trim="model.responsavelTelefone" mask="(11) 11111-1111" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                       <div class="card-footer text-right">
                           <router-link :to="{ name: 'list-company' }" class="btn btn-link">Cancelar</router-link>
                           <button type="submit" class="btn btn-primary">Salvar</button>
                       </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { getStates, isPhoneOrNull, isCnpj, isCepOrNull, validateCNPJ } from '@/services/util';
    import { required, minLength, maxLength, withParams } from 'vuelidate/lib/validators';
    import { formatPhone, formatCnpj, formatCep } from '@/services/string';
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        data() {
            return {
                model: {
                    razaoSocial: '',
                    nomeFantasia: '',
                    cnpj: '',
                    telefone: '',
                    indAtivo: "true",
                    endereco: '',
                    numero: '',
                    cidade: '',
                    bairro: '',
                    estado: '',
                    cep: '',
                    responsavelNome: '',
                    responsavelEmail: ''
                },
                states: []
            }
        },
        validations() {
            return {
                model: {
                    razaoSocial: {
                        required,
                        minLength: minLength(2),
                        maxLength: maxLength(255)
                    },
                    nomeFantasia: {
                        required,
                        minLength: minLength(2),
                        maxLength: maxLength(255)
                    },
                    cnpj: {
                        required,
                        isCnpj,
                        validateCNPJ
                    },
                    telefone: {
                        isPhoneOrNull
                    },
                    endereco: {
                        required,
                        minLength: minLength(5)
                    },
                    numero: {
                        required,
                        minLength: minLength(1)
                    },
                    estado: {
                        required
                    },
                    cidade: {
                        required,
                        minLength: minLength(3)
                    },
                    bairro: {
                        required,
                        minLength: minLength(3)
                    },
                    cep: {
                        isCepOrNull
                    },
                    responsavelNome: {
                        required
                    },
                    responsavelEmail: {
                        required
                    }
                }
            };
        },
        methods: {
            infoClick() {

                const stepsTour = [];  

                stepsTour.push({              
                    element: '#step1',
                    title: 'Razão Social',
                    content: 'Razão Social que deseja cadastrar, deve conter no mínimo 2 caracteres e limite de 255 caracteres, sendo um campo requerido para cadastro.'
                });

                stepsTour.push({ 
                    element: '#step2',
                    title: 'Nome Fantasia',
                    content: 'Nome Fantasia da Empresa Parceira. Deve conter no mínimo 2 caracteres e limite de 255 caracteres, sendo um campo requerido para cadastro.'
                });

                stepsTour.push({ 
                    element: '#step3',
                    title: 'CNPJ',
                    content: 'Informe o CNPJ da empresa que está sendo cadastrada. O CNPJ deve ser válido.'
                });                 

                stepsTour.push({ 
                    element: '#step4',
                    title: 'Telefone',
                    content: 'Informe o telefone da empresa que está sendo cadastrada.'
                });               

                stepsTour.push({ 
                    element: '#step5',
                    title: 'Inscrição Estadual',
                    content: 'Informe a Inscrição Estadual da empresa que está sendo cadastrada.'
                });

                stepsTour.push({ 
                    element: '#step6',
                    title: 'Código ERP',
                    content: 'Informe o Código ERP da empresa.'
                });

                stepsTour.push({ 
                    element: '#step7',
                    title: 'Site',
                    content: 'Informe o site da empresa que está sendo cadastrada.'
                });

                stepsTour.push({ 
                    element: '#step8',
                    title: 'Ativo',
                    content: 'Informe se empresa parceira está com cadastro ativo.'
                });

                stepsTour.push({ 
                    element: '#step9',
                    title: 'Estado',
                    content: 'Selecione o Estado do endereço da empresa parceira.'
                });

                stepsTour.push({ 
                    element: '#step10',
                    title: 'Cidade',
                    content: 'Informe a cidade da empresa parceira. O campo deve conter no mínimo 3 caracteres.'
                });

                stepsTour.push({ 
                    element: '#step11',
                    title: 'Endereço',
                    content: 'Informe o endereço da empresa parceira. O campo deve conter no mínimo 5 caracteres.'
                });

                stepsTour.push({ 
                    element: '#step12',
                    title: 'Número',
                    content: 'Informe o número do endereço da empresa parceira. O campo deve conter no mínimo 1 caractere.'
                });

                stepsTour.push({ 
                    element: '#step13',
                    title: 'Complemento',
                    content: 'Informe o complemento para o endereço.'
                });
                                
                stepsTour.push({ 
                    element: '#step14',
                    title: 'Bairro',
                    content: 'Informe o bairro da empresa parceira. O campo deve conter no mínimo 3 caracteres.'
                });

                stepsTour.push({ 
                    element: '#step15',
                    title: 'CEP',
                    content: 'Informe o CEP da empresa parceira.'
                });

                stepsTour.push({ 
                    element: '#step16',
                    title: 'Token Integração',
                    content: 'Token gerado automáticamente pelo sistema.'
                });

                stepsTour.push({ 
                    element: '#step17',
                    title: 'Referência da Loja',
                    content: 'Referência gerada automáticamente pelo sistema.'
                });

                stepsTour.push({ 
                    element: '#step18',
                    title: 'Nome Responsável',
                    content: 'Nome da pessoa responsável.'
                });

                stepsTour.push({ 
                    element: '#step19',
                    title: 'E-mail Responsável',
                    content: 'E-mail da pessoa responsável. Este e-mail será utilizado para o envio de alertas e avisos.'
                });

                stepsTour.push({ 
                    element: '#step20',
                    title: 'Telefone Responsável',
                    content: 'Telefone da pessoa responsável.'
                });      
                                                
                this.$tour.tour(stepsTour); 

            },   

            save() {
                let vm = this;
                if (this.$v.model.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                this.$loading.show(true);
                if (vm.model.id) {
                    let ret = facade.updateCompany(vm.model);
                    ret.then(company => {
                        this.$router.push({name: 'list-company'});
                        this.$loading.show(false);
                    }).catch(e => {
                        e.forEach((item) => {
                            this.$notify.error(item.field, item.message);
                        });
                        this.$loading.show(false);
                    });
                } else {
                    let ret = facade.createCompany(vm.model);
                    ret.then(company => {
                        this.$router.push({name: 'list-company'});
                        this.$loading.show(false);
                    }).catch(e => {
                        e.forEach((item) => {
                            this.$notify.error(item.field, item.message);
                        });
                        this.$loading.show(false);
                    });
                }
            },

            setData(company) {
                if (company) {
                    company.telefone = formatPhone(company.telefone);
                    company.responsavelTelefone = formatPhone(company.responsavelTelefone);
                    company.cnpj = formatCnpj(company.cnpj);
                    company.cep = formatCep(company.cep);
                    this.model = company;
                }
            }
        },
        created () {
            this.states = getStates();
        },
        beforeRouteEnter (to, from, next) {
            let vm = this;

            if (to.params.id) {
                let ret = facade.getCompany(to.params.id);
                ret.then(company => {
                    next(vm => vm.setData(company.data));
                }).catch(e => {
                    next(vm => vm.setData());
                });
            } else {
                next(vm => vm.setData());
            }
        }
    }
</script>