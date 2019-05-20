<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
                <form @submit.prevent="create">
                    <div class="card">
                        <div class="card-header">
                            <i class="fa fa-dropbox"></i> Produto
                            <a style="float: right; text-align: right;" href="javascript:infoClick" @click="infoClick">Ficou com dúvida ou precisa de ajuda ?</a> 
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-3 col-xs-12"
                                     :class="{ 'has-danger': $v.model.codigoReferencia.$error }">
                                    <label id="step1">Código Produto*</label>
                                    <input v-if="model.id" disabled="true" type="text" maxlength="50" class="form-control"
                                           v-model="model.codigoReferencia" @input="$v.model.codigoReferencia.$touch()">
                                    <input v-else type="text" maxlength="50" required class="form-control"
                                           v-model="model.codigoReferencia" @input="$v.model.codigoReferencia.$touch()">
                                </div>
                                <div class="col-md-3 col-xs-12">
                                    <label id="step2">ID WebContinental</label>
                                    <input v-if="model.id" disabled="true" type="text" maxlength="30" class="form-control"
                                           v-model="model.codigoIntegracao">
                                    <input v-else type="text" maxlength="30" required class="form-control"
                                           v-model="model.codigoIntegracao">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6 col-xs-12" :class="{ 'has-danger': $v.model.nome.$error }">
                                    <label>Título*</label>
                                    <input id="step3" required type="text" maxlength="300" class="form-control" v-model="model.nome"
                                           @input="$v.model.nome.$touch()">
                                </div>                                
                                <div class="col-md-6 col-xs-12">
                                    <label>Marca*</label>
                                    <input id="step4" required type="text" maxlength="50" class="form-control" v-model="model.marca">
                                </div>                                
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Descrição Comercial*</label>
                                    <dw-textarea id="step5" required v-model="model.descricaoComercial" :rows="40"
                                                 :maxlength="maxlength"></dw-textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Informações Técnicas*</label>
                                    <dw-textarea id="step6" required v-model="model.informacoesTecnicas" :rows="40"
                                                 :maxlength="maxlength"></dw-textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-3 col-xs-12">
                                    <label>Garantia*</label>
                                    <input id="step7" required type="text" maxlength="50" class="form-control" v-model="model.garantia">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                           <i class="fa fa-cube"></i> Dimensões
                        </div>
                        <div class="card-block form form-horizontal">
                            <div class="form-group row">
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.larguraEmbalado.$error }">
                                    <label id="step13">Largura produto embalado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.larguraEmbalado" class="form-control"
                                               @input="$v.model.larguraEmbalado.$touch()"/>
                                        <span class="input-group-addon">cm</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.alturaEmbalado.$error }">
                                    <label id="step14"> Altura produto embalado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.alturaEmbalado" class="form-control"
                                               @input="$v.model.alturaEmbalado.$touch()"/>
                                        <span class="input-group-addon">cm</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.profundidadeEmbalado.$error }">
                                    <label id="step15">Profundidade produto embalado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.profundidadeEmbalado" class="form-control"
                                               @input="$v.model.profundidadeEmbalado.$touch()"/>
                                        <span class="input-group-addon">cm</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.pesoEmbalado.$error }">
                                    <label id="step16">Peso produto embalado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.pesoEmbalado" class="form-control"
                                               @input="$v.model.pesoEmbalado.$touch()"/>
                                        <span class="input-group-addon">kg</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.larguraMontado.$error }">
                                    <label id="step17">Largura produto montado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.larguraMontado" class="form-control"
                                               @input="$v.model.larguraMontado.$touch()"/>
                                        <span class="input-group-addon">cm</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.alturaMontado.$error }">
                                    <label id="step18">Altura produto montado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.alturaMontado" class="form-control"
                                               @input="$v.model.alturaMontado.$touch()"/>
                                        <span class="input-group-addon">cm</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.profundidadeMontado.$error }">
                                    <label id="step19">Profundidade produto montado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required  v-model.trim="model.profundidadeMontado" class="form-control"
                                               @input="$v.model.profundidadeMontado.$touch()"/>
                                        <span class="input-group-addon">cm</span>
                                    </div>
                                </div>
                                <div class="col-md-3 col-xs-12" :class="{ 'has-danger': $v.model.pesoMontado.$error }">
                                    <label id="step20">Peso produto montado*</label>
                                    <div class="input-group">
                                        <money :prefix="''" required v-model.trim="model.pesoMontado" class="form-control"
                                               @input="$v.model.pesoMontado.$touch()"/>
                                        <span class="input-group-addon">kg</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                           <i class="fa fa-info"></i> Informações adicionais
                        </div>
                        <div class="card-block form form-horizontal">                        
                            <div class="form-group row">
                                <div class="col-md-3 col-xs-12">
                                    <label id="step21">EAN</label>
                                    <input type="text" maxlength="13" class="form-control" v-model="model.ean">
                                </div>
                                <div class="col-md-2 col-xs-12">
                                    <label id="step22">NCM</label>
                                    <input type="text" maxlength="8" class="form-control" v-model="model.ncm">
                                </div>
                                <div class="col-md-3 col-xs-12">
                                    <label id="step23">Preço*</label>
                                    <money required v-model.trim="model.preco" class="form-control"/>
                                </div>
                                <div class="col-md-2 col-xs-12"
                                     :class="{ 'has-danger': $v.model.quantidadeEstoque.$error }">
                                    <label id="step24">Quantidade Estoque*</label>
                                    <input required  type="number" v-model="model.quantidadeEstoque" class="form-control"
                                           @input="$v.model.quantidadeEstoque.$touch()"/>
                                </div>
                                <div class="col-md-2 col-xs-12"
                                     :class="{ 'has-danger': $v.model.quantidadeEstoque.$error }">
                                    <label id="step25">Estoque Mínimo*</label>
                                    <input required type="number" v-model="model.estoqueMinimo" class="form-control"
                                           @input="$v.model.estoqueMinimo.$touch()"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" v-if="model.id">
                        <div class="card-header">
                            <i class="fa fa-photo"></i> Mídia
                        </div>
                        <div class="card-block form form-horizontal" v-if="model.id == null">
                            <p>Você deve salvar este produto antes de gerenciar as imagens.</p>
                        </div>
                        <div class="card-block form form-horizontal" v-if="model.id != null">
                            <dropzone ref="myDrop"
                                      id="productFiles"
                                      :url="urlUpload"
                                      :accepted-file-types="'image/*'"
                                      :show-remove-link="false"
                                      :use-font-awesome="true"
                                      :includeStyling="true"
                                      :headers="headersDropzone"                                      
                                      :maxNumberOfFiles="50"
                                      @vdropzone-mounted="insertMediasServer"
                                      @vdropzone-success="mediaUploaded"
                                      @vdropzone-file-added="teste"

                            >
                            <input type="hidden" name="token" value = "xxx">
                            </dropzone>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-footer text-right">
                            <router-link :to="{ name: 'list-product' }" class="btn btn-link">Cancelar</router-link>
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { required, minLength, maxLength, withParams } from 'vuelidate/lib/validators';
    import Facade from '../../facade/facade';
    const facade = new Facade();
    
    export default {
        data() {		
            return {
                model: {
                    nome: '',
                    codigoReferencia: '',
                    codigoIntegracao: '',
                    descricaoComercial: '',
                    informacoesTecnicas: '',
                    indAtivo: "true",
                    indEstoque: "false",
                    indImagem: "false",
                    indBloqueado: "true",
                    indAprovado: "false",
                    larguraEmbalado: 0,
                    alturaEmbalado: 0,
                    profundidadeEmbalado: 0,
                    pesoEmbalado: 0,
                    quantidadeEstoque: 0,
                    estoqueMinimo: 0
                },
                maxlength: 8000,
                midias: []
            }
        },
        computed: {
            headersDropzone() {

                return {
                    Authorization: 'Basic ' + facade.getAuthUser().token,
                    Accept: 'application/json'
                }
            },
            urlUpload() {

                return window.axios.defaults.baseURL + 'produtos/' + this.model.id + '/midias'
            }
        },
        validations() {

            return {

                model: {
                    nome: {
                        required,
                        minLength: minLength(2),
                        maxLength: maxLength(300)
                    },
                    codigoReferencia: {
                        required,
                        minLength: minLength(1),
                        maxLength: maxLength(50)
                    },
                    descricaoComercial: {
                        required,
                        maxLength: maxLength(this.maxlength)
                    },
                    informacoesTecnicas: {
                        required,
                        maxLength: maxLength(this.maxlength)
                    },
                    marca: {
                        required,
                        minLength: minLength(1),
                        maxLength: maxLength(100)
                    },
                    garantia: {
                        required,
                        minLength: minLength(1),
                        maxLength: maxLength(50)
                    },
                    larguraEmbalado: {
                        required
                    },
                    alturaEmbalado: {
                        required
                    },
                    profundidadeEmbalado: {
                        required
                    },
                    pesoEmbalado: {
                        required
                    },

                    larguraMontado: {
                        required
                    },
                    alturaMontado: {
                        required
                    },
                    profundidadeMontado: {
                        required
                    },
                    pesoMontado: {
                        required
                    },
                    ean: {
                        minLength: minLength(13),
                        maxLength: maxLength(13)
                    },
                    ncm: {
                        minLength: minLength(8),
                        maxLength: maxLength(8)
                    },
                    preco: {
                        required
                    },
                    quantidadeEstoque: {
                        maxLength: maxLength(6)
                    },
                    estoqueMinimo: {
                        maxLength: maxLength(6)
                    }
                },
                midias: []
            };
        },
        methods: {
            showSuccess(file) {

            },
            infoClick() {

                const stepsTour = []; 

                stepsTour.push({              
                    element: '#step1',
                    title: 'Código do Produto',
                    content: 'Informe o código do Produto.'
                });

                stepsTour.push({              
                    element: '#step2',
                    title: 'ID WebContinental',
                    content: 'Informe o ID WebContinental do Produto.'
                });

                stepsTour.push({             
                    element: '#step3',
                    title: 'Título',
                    content: 'Informe o título do produto.'
                });

                stepsTour.push({             
                    element: '#step4',
                    title: 'Marca',
                    content: 'Informe a marca do produto.'
                });

                stepsTour.push({              
                    element: '#step5',
                    title: 'Descrição Comercial',
                    content: 'Informe a descriçao comercial do produto.'
                });

                stepsTour.push({               
                    element: '#step6',
                    title: 'Informações Técnicas',
                    content: 'Informe as informações técnicas do produto.' 
                });

                stepsTour.push({               
                    element: '#step7',
                    title: 'Garantia',
                    content: 'Informe o prazo de garantia do produto.'
                });

                stepsTour.push({             
                    element: '#step8',
                    title: 'Status',
                    content: 'Informe o status do produto (ativo/inativo).'
                });

                stepsTour.push({             
                    element: '#step9',
                    title: 'Estoque',
                    content: 'Informe se o produto possuí estoque.'
                });

                stepsTour.push({             
                    element: '#step10',
                    title: 'Mídia',
                    content: 'Informe se o produto possuí mídia.'
                });
                
                stepsTour.push({             
                    element: '#step11',
                    title: 'Bloqueado',
                    content: 'Informe se o produto está bloqueado.'
                });
                
                stepsTour.push({             
                    element: '#step12',
                    title: 'Aprovado',
                    content: 'Informe se o produto está aprovado.'
                });

                stepsTour.push({             
                    element: '#step13',
                    title: 'Largura produto embalado',
                    content: 'Informe a largura do produto embalado.'
                });

                stepsTour.push({             
                    element: '#step14',
                    title: 'Altura produto embalado',
                    content: 'Informe a altura do produto embalado.'
                });

                stepsTour.push({             
                    element: '#step15',
                    title: 'Profundidade do produto embalado',
                    content: 'Informe a profundidade do produto embalado.'
                });

                stepsTour.push({             
                    element: '#step16',
                    title: 'Peso produto embalado',
                    content: 'Informe o peso do produto embalado.'
                });                

                stepsTour.push({             
                    element: '#step17',
                    title: 'Largura produto montado',
                    content: 'Informe a largura do produto montado.'
                });

                stepsTour.push({             
                    element: '#step18',
                    title: 'Altura produto montado',
                    content: 'Informe a altura do produto montado.'
                });

                stepsTour.push({             
                    element: '#step19',
                    title: 'Profundidade do produto montado',
                    content: 'Informe a profundidade do produto montado.'
                });

                stepsTour.push({             
                    element: '#step20',
                    title: 'Peso produto montado',
                    content: 'Informe o peso do produto montado.'
                });             

                stepsTour.push({             
                    element: '#step21',
                    title: 'EAN',
                    content: 'Código do EAN.'
                });   

                stepsTour.push({             
                    element: '#step22',
                    title: 'NCM',
                    content: 'Código NCM.'
                });   

                stepsTour.push({             
                    element: '#step23',
                    title: 'Preço',
                    content: 'Informe o preço do Produto.'
                });   

                stepsTour.push({             
                    element: '#step24',
                    title: 'Quantidade Estoque',
                    content: 'Informe a quantidade do produto em estoque.'
                });  

                stepsTour.push({             
                    element: '#step25',
                    title: 'Estoque Mínimo',
                    content: 'Informe a quantidade de estoque mínima do produto.'
                });  
                this.$tour.tour(stepsTour); 

            },
			teste(file){

				var img = $(file.previewTemplate).find("img");
								            img[0].onload = function () {

	            	var max = this.width > this.height ? this.width : this.height;
	                var ratio = 100.0 / max;
	                var width = this.width * ratio;
	                var height = this.height * ratio;

	                img.css({
	                    width: "100%",
	                    height: "100%",
	                    top: ((100 - height) / 2) + "px",
	                    left: ((100 - width) / 2) + "px"
	                });
	            };
	            
	            var div = document.createElement('div');
	            var a = document.createElement('a');              
                var aaa = document.createElement('a');              
                
                var btn = document.createElement('button');
                btn.setAttribute("type", "button");
                btn.setAttribute("value", file.previewElement.querySelector('[data-dz-name]').innerHTML);
                btn.setAttribute("id", this.model.id);
                var lbl = document.createTextNode('Remover');
                btn.appendChild(lbl);                   
                btn.onclick = function() {
                    const facade = new Facade();
                    let ret = facade.removeProductMedia(btn.getAttribute("id"), btn.getAttribute("value"));
                    ret.then(res => {
                        $notify.success('Sucesso', 'Mídia Removida, Salvar para manter alterações.');
                    }).catch(e => {
                        $notify.error('Erro', 'Mídia não pode ser removida.');
                    });
                };
                div.appendChild(btn);
                
				a.setAttribute('href', file.url );
	            a.style.cursor = "pointer";
	            a.innerHTML = '<a title="Baixar Imagem" class="btn btn-default fa fa-download fa-1x"></a>';
	            div.appendChild(a);	    

                aaa.setAttribute('href', file.url );
                aaa.style.cursor = "pointer";
                aaa.innerHTML = '<a title="Visualizar Imagem" class="btn btn-default fa fa-search fa-1x"></a>';
                div.appendChild(aaa);     

	            file.previewTemplate.appendChild(div);
	        },
            
            
            addedFile(file) {		

            },
            create() {

                let vm = this;
                if (this.$v.model.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                this.$loading.show(true);

                if (vm.model.id) {
                    let ret = facade.updateProduct(vm.model);
                    ret.then(res => {
                        this.$router.push({name: 'list-product'});
                        this.$loading.show(false);
                    }).catch(e => {
                        e.forEach((item) => {
                            this.$notify.error(item.field, item.message);
                        });
                        this.$loading.show(false);
                    });

                } else {
                    let ret = facade.createProduct(vm.model);
                    ret.then(res => {
                        vm.model = res.data;
                        this.$loading.show(false);
                        this.$notify.success('Sucesso', 'Produto criado.');
                    }).catch(e => {
                        e.forEach((item) => {
                            this.$notify.error(item.field, item.message);
                        });
                        this.$loading.show(false);
                    });
                }
            },
            insertMediasServer() {

                const vm = this
                vm.midias.forEach(midia => {
                    vm.$refs.myDrop.manuallyAddFile({name: midia.chaveMidia, size: 0, url: midia.s3Url }, midia.s3Url, null, null, {
                        dontSubstractMaxFiles: false,
                        addToFiles: true
                    })
                })
            },
            removeMediaFile(file) {

                const name = file.previewElement.querySelector('[data-dz-name]').innerHTML;
                facade.removeProductMedia(this.$route.params.id, file)

            },
            mediaUploaded(file, response) {

                file.previewElement.querySelector("[data-dz-name]").innerHTML = response.chaveMidia;

            },
            setData(product, midias) {

                if (product) {
                    this.model = product;
                }

                if (midias) {
                    this.midias = midias;
                }
            }
        },
        beforeRouteEnter (to, from, next) {

            if (to.params.id) {
                Promise.all([
                    facade.getProduct(to.params.id),
                    Facade.getProductMedia(to.params.id)
                ]).then(res => {
                    next(vm => vm.setData(res[0].data, res[1].data));
                }).catch(e => {
                    next(vm => vm.setData());
                })
            } else {
                next(vm => vm.setData());
            }
        }
    }
</script>

<style type="text/css">
    .dz-size {
        font-size: 0px !important;   
    }
	.dz-details {
	    width: 0px !important;
	    height: 0px !important;
        font-size: 0px !important;
    }
</style>
