<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
    	      <ul class="nav nav-tabs">
    	        <li class="active"><a data-toggle="tab" href="#produtos">Produtos</a></li>
    	        <li><a data-toggle="tab" href="#precoEstoque">Preço e Estoque</a></li>
    	        <li><a data-toggle="tab" href="#preco">Preço</a></li>
    	        <li><a data-toggle="tab" href="#estoque">Estoque</a></li>
    	        <li><a data-toggle="tab" href="#pedido">Pedido</a></li>
    	      </ul>
    	      <div class="tab-content">
    	        <div id="produtos" class="tab-pane fade in active">
    	        	<form v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'importar-produto'}" @submit.prevent="saveProduto">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-upload"></i> Importar
                            </div>
                            <div class="card-block">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label>Arquivo</label>
                                        <input type="file" class="form-control" @change="setFileProduto">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <p><a href="/static/documentos/modelo_planilha_importação_produto.xlsx">Clique aqui</a> para baixar o modelo de planilha para importar.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group row">
                                    <div class="col-md-12 text-right">
                                        <button type="button" @click="saveProduto" class="btn btn-primary">Importar <i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    	        </div>
    	        <div id="precoEstoque" class="tab-pane fade">
    	        	<form v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'importar-precoEstoque'}" @submit.prevent="savePrecoEstoque">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-upload"></i> Importar
                            </div>
                            <div class="card-block">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label>Arquivo</label>
                                        <input type="file" class="form-control" @change="setFilePrecoEstoque">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <p><a href="/static/documentos/modelo_planilha_importacao_estoque_e_preco.xlsx">Clique aqui</a> para baixar o modelo de planilha para importar.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group row">
                                    <div class="col-md-12 text-right">
                                        <button type="button" @click="savePrecoEstoque" class="btn btn-primary">Importar <i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    	        </div>
    	        <div id="preco" class="tab-pane fade">
    	        	<form v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'importar-preco'}" @submit.prevent="savePreco">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-upload"></i> Importar
                            </div>
                            <div class="card-block">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label>Arquivo</label>
                                        <input type="file" class="form-control" @change="setFilePreco">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <p><a href="/static/documentos/modelo_planilha_importacao_preco.xlsx">Clique aqui</a> para baixar o modelo de planilha para importar.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group row">
                                    <div class="col-md-12 text-right">
                                        <button type="button" @click="savePreco" class="btn btn-primary">Importar <i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    	        </div>
    	        <div id="estoque" class="tab-pane fade">
    	        	<form v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'importar-estoque'}"  @submit.prevent="saveEstoque">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-upload"></i> Importar
                            </div>
                            <div class="card-block">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label>Arquivo</label>
                                        <input type="file" class="form-control" @change="setFileEstoque">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <p><a href="/static/documentos/modelo_planilha_importacao_estoque.xlsx">Clique aqui</a> para baixar o modelo de planilha para importar.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group row">
                                    <div class="col-md-12 text-right">
                                        <button type="button" @click="saveEstoque" class="btn btn-primary">Importar <i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    	        </div>
    	        <div id="pedido" class="tab-pane fade">
                    <form v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'importar-pedido'}"  @submit.prevent="saveEstoque">
                        <div class="card">
                            <div class="card-header">
                                <i class="fa fa-upload"></i> Importar
                            </div>
                            <div class="card-block">
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <label>Arquivo</label>
                                        <input type="file" class="form-control" @change="setFileEstoque">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12">
                                        <p><a href="/static/documentos/modelo_planilha_importacao_estoque.xlsx">Clique aqui</a> para baixar o modelo de planilha para importar.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="form-group row">
                                    <div class="col-md-12 text-right">
                                        <button type="button" @click="saveEstoque" class="btn btn-primary">Importar <i class="fa fa-angle-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    	        </div>
    	      </div>
    		</div>
        </div>
  	</div>
</template>

<script>
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        data() {
            return {
                file: ''
            }
        },
        methods: {
        	saveEstoque() {
                let vm = this;

                this.$loading.show(true);
                let model = this.createFormData();
                let ret = facade.importEstoque(model);
                ret.then(() => {
                    this.$notify.success('Sucesso!', 'O arquivo foi importado.');
                    this.file = null;
                    this.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },
            savePreco() {
                let vm = this;

                this.$loading.show(true);
                let model = this.createFormData();
                let ret = facade.importPreco(model);
                ret.then(() => {
                    this.$notify.success('Sucesso!', 'O arquivo foi importado.');
                    this.file = null;
                    this.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },
            saveProduto() {
                let vm = this;

                this.$loading.show(true);
                let model = this.createFormData();
                let ret = facade.importProduct(model);
                ret.then(() => {
                    this.$notify.success('Sucesso!', 'O arquivo foi importado.');
                    this.file = null;
                    this.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },
            savePrecoEstoque() {
                let vm = this;

                this.$loading.show(true);
                let model = this.createFormData();
                let ret = facade.importPrecoEstoque(model);
                ret.then(() => {
                    this.$notify.success('Sucesso!', 'O arquivo foi importado.');
                    this.file = null;
                    this.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },
            createFormData() {
                var formData = new FormData();
                formData.append('file', this.file);
                return formData;
            },
            setFilePreco(event) {
                if (event.currentTarget.files) {
                    this.file = event.currentTarget.files[0]
                }
            },
            setFileEstoque(event) {
                if (event.currentTarget.files) {
                    this.file = event.currentTarget.files[0]
                }
            },
			setFileProduto(event) {
                if (event.currentTarget.files) {
                    this.file = event.currentTarget.files[0]
                }
            },
            setFilePrecoEstoque(event) {
                if (event.currentTarget.files) {
                    this.file = event.currentTarget.files[0]
                }
            }
        }
    }
</script>


<style type="text/css" media="screen">
.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}
</style>