<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <!--<div class="container">-->
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#api">API</a></li>
            <li><a data-toggle="tab" href="#pedidos">Pedidos</a></li>
            <li><a data-toggle="tab" href="#alertas">Alertas</a></li>
          </ul>
          <div class="tab-content">
            <div id="alertas" class="tab-pane fade">
              <form @submit.prevent="saveAlert">          
                <div class="col-md-12">
                  <div class="form-group deliveredChangeRules-help">
                    <strong>Como deseja receber alerta de estoque mínimo?</strong>                  
                    <div class="controls">
                        <input type="radio" value="0" name="estoqueMinimo" v-model="alert.estoqueMinimo">
                        Uma vez ao dia
                        <br>
                        <input type="radio" value="1" name="estoqueMinimo" v-model="alert.estoqueMinimo">
                        A cada novo produto
                        <br>
                        <input type="radio" value="2" name="estoqueMinimo" v-model="alert.estoqueMinimo">
                        Não desejo receber este alerta
                    </div>
                  </div>
                </div>  
                <div class="col-md-12">
                  <div class="form-group deliveredChangeRules-help">
                    <strong>Como deseja receber alerta de criação de pedidos?</strong>                  
                    <div class="controls">
                      <input type="radio" value="0" name="criacaoPedido" v-model="alert.criacaoPedido">
                      Uma vez ao dia
                      <br>
                      <input type="radio" value="1" name="criacaoPedido" v-model="alert.criacaoPedido">
                      A cada novo pedido
                      <br>
                      <input type="radio" value="2" name="criacaoPedido" v-model="alert.criacaoPedido">
                      Não desejo receber este alerta
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Salvar</button>  
                </div>              
              </form>
            </div>
            <div id="pedidos" class="tab-pane fade">
              <form @submit.prevent="save">
                <div class="col-md-12">
                  <div class="form-group deliveredChangeRules-help">
                    <strong>Restrição de NF para alteração de status para "Entregue/Concluído":</strong>                  
                    <div class="controls">
                      <input type="radio" value="false" name="nfTransicaoEntregue" v-model="model.nfTransicaoEntregue">
                      Pedido não precisa de Nota Fiscal para transição
                      <br>
                      <input type="radio" value="true"  name="nfTransicaoEntregue" v-model="model.nfTransicaoEntregue">
                      Pedido precisa de Nota Fiscal para transição
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group orderStatusBilledInvoice-help">
                    <strong>Alteração de status ao criar NF:</strong>                 
                    <div class="controls">
                      <input type="radio" value="false" name="nfTransicaoFaturado" v-model="model.nfTransicaoFaturado">
                      Não alterar status do pedido ao informar NF e chave
                      <br>
                      <input type="radio" value="true" name="nfTransicaoFaturado" v-model="model.nfTransicaoFaturado">
                      Mudar status do pedido para "Faturado" ao informar NF e chave
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group orderStatusShippedTrackingCode-help">
                    <strong>Alteração de status ao informar código de rastreio:</strong>
                    <div class="controls">
                      <input type="radio" value="false" name="rastreioTransicaoEnviado" v-model="model.rastreioTransicaoEnviado">
                      Não alterar status do pedido ao informar código de rastreio
                      <br>
                      <input type="radio" value="true" name="rastreioTransicaoEnviado" v-model="model.rastreioTransicaoEnviado">
                      Mudar status do pedido para "Enviado" ao informar código de rastreio
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group deliveredChangeRules-help">
                    <strong>Pedido precisa de Nota Fiscal para adicionar código de rastreio:</strong>
                    <div class="controls">
                      <input type="radio" value="false" name="nfCodigoRastreio" v-model="model.nfCodigoRastreio">
                        Não precisa de Nota Fiscal para informar código de rastreio
                        <br>
                      <input type="radio" value="true" name="nfCodigoRastreio" v-model="model.nfCodigoRastreio">
                        Precisa de Nota Fiscal para informar código de rastreio
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <strong>Obrigar o preenchimento dos seguintes campos da Nota Fiscal:</strong>
                    <div class="form-group invoiceRequiredFields-help">
                      <div class="controls">
                        <input type="checkbox" checked="" disabled="" value="true">Número
                        <br>
                        <input type="hidden" value="false" name="campoChaveNf">
                        <input type="checkbox" value="true" name="campoChaveNf" v-model="model.campoChaveNf">Chave
                        <br>
                        <input type="hidden" value="false" name="campoLinkNf">
                        <input type="checkbox" value="true" name="campoLinkNf" v-model="model.campoLinkNf">Link
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group deliveredChangeRules-help">
                    <strong>Deseja receber alerta de tempo de inatividade de pedido? (pedido sem ser faturado)</strong>               
                    <div class="controls">
                      <input type="radio" value="true" name="inatividadePedido" v-model="model.inatividadePedido">
                        Sim
                        <br>
                      <input type="radio" value="false" name="inatividadePedido" v-model="model.inatividadePedido">
                        Não
                    </div>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group deliveredChangeRules-help">
                    <strong>Tempo para pedido inativo (em horas)</strong>       
                    <div class="controls">          
                      <input type="number" name="tempoInativo" v-model="model.tempoInativo">
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Salvar</button>  
                </div>
              </form>      
            </div>
            <div id="api" class="tab-pane fade in active">
              <form @submit.prevent="save">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card-block">
                      <div class="form-group row">
                        <div class="col-md-3 col-md-6">
                          <label>Link documentação API</label>
                          <input type="text" maxlength="50" class="form-control" v-model="model.linkDocumentacao"> 
                        </div>
                        <div class="col-md-3 col-md-6">
                          <label>Token Integração</label>
                          <div v-dw-authorized="{ roles: ['ADMIN']}" class="input-group">
                            <input type="text" maxlength="50" class="form-control" v-model="model.tokenIntegracao">
                            <span class="input-group-btn">
                              <button class="btn" @click="reseteToken" type="button">Resetar</button>
                            </span>
                          </div>
                          <div v-dw-authorized="{ roles: ['ADMIN-USUARIO']}" class="input-group">
                            <input disabled="true" type="text" maxlength="50" class="form-control" v-model="model.tokenIntegracao">
                          </div>
                        </div>
                      </div>
                      <div class="form-group row">
                        <div class="col-md-12">
                          <strong>Permissões token parceiro:</strong>
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="listarProdutos">
                          <input type="checkbox" value="true" name="listarProdutos" v-model="model.listarProdutos"> Listar Produtos
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="incluirProdutos">
                          <input type="checkbox" value="true" name="incluirProdutos" v-model="model.incluirProdutos"> Cadastro de Produtos
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarProdutos">
                          <input type="checkbox" value="true" name="alterarProdutos" v-model="model.alterarProdutos"> Atualização de Produto
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarStatusProduto">
                          <input type="checkbox" value="true" name="alterarStatusProduto" v-model="model.alterarStatusProduto"> Alteração de Status de Produto
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarIdwebcontinentalProduto">
                          <input type="checkbox" value="true" name="alterarIdwebcontinentalProduto" v-model="model.alterarIdwebcontinentalProduto"> Atualização de IdWebContinental Produto
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarPrecoPromocional">
                          <input type="checkbox" value="true" name="alterarPrecoPromocional" v-model="model.alterarPrecoPromocional"> Atualização de Preço Promocional de Produto
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarPrecoQuantidadeEstoque">
                          <input type="checkbox" value="true" name="alterarPrecoQuantidadeEstoque" v-model="model.alterarPrecoQuantidadeEstoque"> Altualização de Preço e Quantidade de Estoque
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="listarPedidos">
                          <input type="checkbox" value="true" name="listarPedidos" v-model="model.listarPedidos"> Listar Pedidos
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="incluirPedido">
                          <input type="checkbox" value="true" name="incluirPedido" v-model="model.incluirPedido"> Cadastro de Pedidos
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarStatusPedido">
                          <input type="checkbox" value="true" name="alterarStatusPedido" v-model="model.alterarStatusPedido"> Alterar Status de um Pedido
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="incluirRastreamento">
                          <input type="checkbox" value="true" name="incluirRastreamento" v-model="model.incluirRastreamento"> Adicionar Rastreamento em Pedido
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="incluirNotafiscal">
                          <input type="checkbox" value="true" name="incluirNotafiscal" v-model="model.incluirNotafiscal"> Adicionar Nota Fiscal
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="listarParceiro">
                          <input type="checkbox" value="true" name="listarParceiro" v-model="model.listarParceiro"> Listar Parceiros
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="listarParceiroStatus">
                          <input type="checkbox" value="true" name="listarParceiroStatus" v-model="model.listarParceiroStatus"> Listar Parceiros por Status
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="incluirParceiro">
                          <input type="checkbox" value="true" name="incluirParceiro" v-model="model.incluirParceiro"> Cadastro de Parceiros
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarParceiro">
                          <input type="checkbox" value="true" name="alterarParceiro" v-model="model.alterarParceiro"> Alteração de Parceiros
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="listarClientes">
                          <input type="checkbox" value="true" name="listarClientes" v-model="model.listarClientes"> Listar Clientes
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="incluirCliente">
                          <input type="checkbox" value="true" name="incluirCliente" v-model="model.incluirCliente"> Cadastro de Clientes
                        </div>
                        <div class="col-md-4">
                          <input type="hidden" value="false" name="alterarCliente">
                          <input type="checkbox" value="true" checked="" name="alterarCliente" v-model="model.alterarCliente"> Altualização de Clientes
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">Salvar</button>
                    </div>
                  </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!--</div> --> 
</template>

<script>
    import Facade from '../../facade/facade';
    const facade = new Facade();

    import {required, minLength, maxLength, withParams} from 'vuelidate/lib/validators';
    
    export default {
      data() {
        this.$loading.show(true); 
        let ret = facade.getConfiguration('1');
        ret.then(res => {
          this.model = res.data;
          this.$loading.show(false);
        });      

        let ret2 = facade.getAlert();
        ret2.then(res2 => {
          this.alert = res2.data;
          this.$loading.show(false);
        }); 

        return {
          model: {
            linkDocumentacao: '',
            tokenIntegracao: '',
            nfTransicaoEntregue: 0,
            nfTransicaoFaturado: 0
          },
          alert: {
          }
        }
      },
      validations() {
        return {
          model: {
            linkDocumentacao: {
                required
            },
            tokenIntegracao: {
                required
            }
          }
        }
      },
      methods: {
        save() {
          let vm = this;
          if (this.$v.model.$invalid) {
              this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
              return;
          }
          
          this.$loading.show(true);                 
          let ret = facade.updateConfiguration(vm.model);
          ret.then(res => {
            vm.model = res.data;
            this.$loading.show(false);
          });               
        },

        saveAlert() {
          let vm = this;
          if (this.$v.model.$invalid) {
              this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
              return;
          }
          
          this.$loading.show(true);                 
          let ret = facade.updateAlert(vm.alert);
          ret.then(res => {
            vm.model = res.data;
            this.$loading.show(false);
          });               
        },

        reseteToken() {
          let vm = this;
          this.$loading.show(true);                 
          let ret = facade.reseteToken(vm.model.tokenIntegracao);
          ret.then(res => {
            vm.model = res.data;
            this.$loading.show(false);  
          });                    
        }  
      }
    }
</script>

<style type="text/css" media="screen">
.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}
</style>
