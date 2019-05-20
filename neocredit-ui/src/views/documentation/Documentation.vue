<template>
	<div class="animated fadeIn">
        <div class="row">
            <div class="col-md-12">
				<div id="topo" class="card">
					<div class="row">
		        		<div class="col-md-12">
		                	<div class="card-header">Sumário API</div>
		                	<ul>
		                  		<strong>Clientes</strong>
								<li><a href="#cadastroCliente">Cadastro de Clientes (POST)</a></li>
								<li><a href="#atualizacaoCliente">Atualização de Clientes (PUT)</a></li>
								<li><a href="#listaCliente">Listar Clientes (GET)</a></li>
								<strong>Parceiros</strong>
								<li><a href="#cadastroParceiro">Cadastro de Parceiros (POST)</a></li>
								<li><a href="#alteracaoParceiro">Alteração de Parceiros (PUT)</a></li>
								<li><a href="#listaParceiro">Listar Parceiros (GET)</a></li>
								<li><a href="#listaParceiroStatus">Listar Parceiros por Status (GET)</a></li>
								<strong>Pedidos</strong>
								<li><a href="#cadastroPedido">Cadastro de Pedidos (POST)</a></li>
								<li><a href="#alteraStatus">Alterar Status de um Pedido (PUT)</a></li>
								<li><a href="#listaPedido">Lista Pedido(s) (GET)</a></li>
								<li><a href="#listaPedidoFiltros">Lista Pedido(s) com filtros (GET)</a></li>
								<li><a href="#rastreamento">Adicionar rastreamento em Pedido (PUT)</a></li>
								<li><a href="#notaFiscal">Adicionar Nota Fiscal em Pedido (PUT)</a></li>
								<strong>Produtos</strong>
								<li><a href="#cadastroProdutos">Cadastro de Produto (POST)</a></li>
								<li><a href="#atualizacaoProdutos">Atualização de Produto (PUT)</a></li>
								<li><a href="#alteracaoStatusProduto">Alteração de status de Produto (PUT)</a></li>
								<li><a href="#atualizacaoProdutosPrecoPromocional">Atualização Preço Promocional de Produto (PUT)</a></li>
								<li><a href="#atualizacaoProdutosPrecoEstoque">Atualização de Preço e Estoque Produto (PUT)</a></li>
								<li><a href="#atualizacaoIdWebContinental">Atualização de IdWebContinental Produto (PUT)</a></li>
								<li><a href="#listaProdutos">Listar Produtos (GET)</a></li>
							</ul>				
						</div>
					</div>
				</div>
			    <div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="cadastroCliente" class="card-header">Cadastro de Clientes (POST)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>nome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do cliente</td>
							  </tr>
							  <tr>
							    <td>sobrenome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Sobrenome do cliente</td>
							  </tr>
							  <tr>
							    <td>genero</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Gênero - preencher com F ou M</td>
							  </tr>
							  <tr>
							    <td>dataNascimento</td>
							    <td>date</td>
							    <td>true</td>
							    <td>Data de Nascimento do cliente. Formato yyyy-mm-dd</td>
							  </tr>
							  <tr>
							    <td>cgc</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CPF ou CNPJ</td>
							  </tr>
							   <tr>
							    <td>inscricaoEstadual</td>
							    <td>integer</td>
							    <td>false</td>
							    <td>Informar apenas com o CNPJ</td>
							  </tr>
							  <tr>
							    <td>telefonePrincipal</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Telefone Principal</td>
							  </tr>
							  <tr>
							    <td>telefoneSecundario</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Telefone Secudário</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[cep]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CEP endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[municipio]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Municipio endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[estado]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Estado endereço cliente. Utilizar somente sigla</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[pais]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>País endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[logradouro]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Logradouro endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[bairro]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Bairro endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[complemento]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Complemento endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[numero]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número Endereço cliente</td>
							  </tr>
							  <tr>
							    <td>email</td>
							    <td>string</td>
							    <td>true</td>
							    <td>E-mail cliente</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de POST de cliente</strong><br /><br />
					
						POST /infoar-api/api/integracoes/cliente?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"nome": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"sobrenome": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"genero": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"dataNascimento": "yyyy-mm-dd",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"cgc": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"telefonePrincipal": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"telefoneSecundario": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"inscricaoEstadual": "integer",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"clienteEndereco": {<br />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cep": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"municipio": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"estado": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"pais": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"logradouro": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"bairro": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"complemento": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"numero": "string"<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "string"<br />
						}
					
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
			    <div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="atualizacaoCliente" class="card-header">Atualização de Clientes (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>nome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do cliente</td>
							  </tr>
							  <tr>
							    <td>sobrenome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Sobrenome do cliente</td>
							  </tr>
							  <tr>
							    <td>genero</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Gênero - preencher com F ou M</td>
							  </tr>
							  <tr>
							    <td>dataNascimento</td>
							    <td>date</td>
							    <td>true</td>
							    <td>Data de Nascimento do cliente. Formato yyyy-mm-dd</td>
							  </tr>
							  <tr>
							    <td>cgc</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CPF ou CNPJ</td>
							  </tr>
							   <tr>
							    <td>inscricaoEstadual</td>
							    <td>integer</td>
							    <td>false</td>
							    <td>Informar apenas com o CNPJ</td>
							  </tr>
							  <tr>
							    <td>telefonePrincipal</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Telefone Principal</td>
							  </tr>
							  <tr>
							    <td>telefoneSecundario</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Telefone Secudário</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[cep]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CEP endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[municipio]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Municipio endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[estado]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Estado endereço cliente. Utilizar somente sigla</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[pais]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>País endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[logradouro]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Logradouro endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[bairro]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Bairro endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[complemento]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Complemento endereço cliente</td>
							  </tr>
							  <tr>
							    <td>clienteEndereco[numero]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número Endereço cliente</td>
							  </tr>
							  <tr>
							    <td>email</td>
							    <td>string</td>
							    <td>true</td>
							    <td>E-mail cliente</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de PUT de cliente</strong><br /><br />
					
						PUT /infoar-api/api/integracoes/cliente/{cgc}?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"nome": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"sobrenome": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"genero": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"dataNascimento": "yyyy-mm-dd",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"cgc": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"telefonePrincipal": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"telefoneSecundario": "string",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"inscricaoEstadual": "integer",<br />
							&nbsp;&nbsp;&nbsp;&nbsp;"clienteEndereco": {<br />
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cep": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"municipio": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"estado": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"pais": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"logradouro": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"bairro": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"complemento": "string",<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"numero": "string"<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "string"<br />
						}
					
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="listaCliente" class="card-header">Listar Clientes (GET)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>cgc</td>
							    <td>string</td>
							    <td>false</td>
							    <td>CGC do cliente</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação GET de cliente(s)</strong><br /><br />
						GET /infoar-api/api/integracoes/cliente/{cgc}?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>

				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="cadastroParceiro" class="card-header">Cadastro de Parceiros (POST)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>razaoSocial</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Razão Social do Parceiro</td>
							  </tr>
							  <tr>
							    <td>nomeFantasia</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome Fantasia do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cnpj</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CNPJ do Parceiro</td>
							  </tr>
							  <tr>
							    <td>endereco</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Endereço do Parceiro</td>
							  </tr>
							  <tr>
							    <td>numero</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do Parceiro</td>
							  </tr>
							  <tr>
							    <td>complemento</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Complemento do Parceiro</td>
							  </tr>
							  <tr>
							    <td>bairro</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Bairro do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cidade</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Cidade do Parceiro</td>
							  </tr>
							  <tr>
							    <td>estado</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Estado do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cep</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CEP do Parceiro</td>
							  </tr>
							  <tr>
							    <td>telefone</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Telone do Parceiro</td>
							  </tr>
							  <tr>
							    <td>ie</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Inscrição Estadual do Parceiro</td>
							  </tr>
							  <tr>
							    <td>site</td>
							    <td>string</td>
							    <td>true</td>
							    <td>site do Parceiro</td>
							  </tr>
							  <tr>
							    <td>responsavelNome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do responsável</td>
							  </tr>
							  <tr>
							    <td>responsavelEmail</td>
							    <td>string</td>
							    <td>true</td>
							    <td>E-mail do responsávels</td>
							  </tr>
							  <tr>
							    <td>responsavelTelefone</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Telefone do responsável</td>
							  </tr>
							  <tr>
							    <td>codigoERP</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código ERP do Parceiro</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de POST de parceiro</strong><br /><br />
						POST /infoar-api/api/integracoes/parceiro?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />

						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"razaoSocial": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"nomeFantasia": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cnpj": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"endereco": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"numero": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"complemento": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"bairro": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cidade": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"estado": "sigla do estado",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cep": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"telefone": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"ie": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"site": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"responsavelNome": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"responsavelEmail": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"responsavelTelefone": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoERP": "string"<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="alteracaoParceiro" class="card-header">Alteração de Parceiros (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>razaoSocial</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Razão Social do Parceiro</td>
							  </tr>
							  <tr>
							    <td>nomeFantasia</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome Fantasia do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cnpj</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CNPJ do Parceiro</td>
							  </tr>
							  <tr>
							    <td>endereco</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Endereço do Parceiro</td>
							  </tr>
							  <tr>
							    <td>numero</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do Parceiro</td>
							  </tr>
							  <tr>
							    <td>complemento</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Complemento do Parceiro</td>
							  </tr>
							  <tr>
							    <td>bairro</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Bairro do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cidade</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Cidade do Parceiro</td>
							  </tr>
							  <tr>
							    <td>estado</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Estado do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cep</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CEP do Parceiro</td>
							  </tr>
							  <tr>
							    <td>telefone</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Telone do Parceiro</td>
							  </tr>
							  <tr>
							    <td>ie</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Inscrição Estadual do Parceiro</td>
							  </tr>
							  <tr>
							    <td>site</td>
							    <td>string</td>
							    <td>true</td>
							    <td>site do Parceiro</td>
							  </tr>
							  <tr>
							    <td>responsavelNome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do responsável</td>
							  </tr>
							  <tr>
							    <td>responsavelEmail</td>
							    <td>string</td>
							    <td>true</td>
							    <td>E-mail do responsávels</td>
							  </tr>
							  <tr>
							    <td>responsavelTelefone</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Telefone do responsável</td>
							  </tr>
							  <tr>
							    <td>codigoERP</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código ERP do Parceiro</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de PUT de parceiro</strong><br /><br />
						PUT /infoar-api/api/integracoes/parceiro/{cnpj}?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />

						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"razaoSocial": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"nomeFantasia": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cnpj": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"endereco": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"numero": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"complemento": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"bairro": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cidade": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"estado": "sigla do estado",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cep": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"telefone": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"ie": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"site": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"responsavelNome": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"responsavelEmail": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"responsavelTelefone": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoERP": "string"<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="listaParceiro" class="card-header">Listar Parceiros (GET)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>cnpj</td>
							    <td>string</td>
							    <td>false</td>
							    <td>CNPJ do parceiro</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação GET de parceiro(s)</strong><br /><br />
						GET /infoar-api/api/integracoes/parceiro/{cnpj}?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="listaParceiroStatus" class="card-header">Listar Parceiros por Status (GET)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>status</td>
							    <td>Boolean</td>
							    <td>true</td>
							    <td>Status de parceiro. Valores aceitos: 0 ou 1 e true ou false. </td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação GET de parceiro(s)</strong><br /><br />
						GET /infoar-api/api/integracoes/parceiro/status/{status}?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="cadastroPedido" class="card-header">Cadastro de Pedidos (POST)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>numeroPedido</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do Pedido</td>
							  </tr>
							  <tr>
							    <td>status</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Status do Pedido. Valores aceitos:
									'status.aguardando_pagamento', 'status.aprovado', 'status.nao_autorizado', 'status.aguardando_envio', 'status.faturado', 'status.enviado', 'status.entregue', 'status.cancelado', 'status.cancelado_parceiro', 'status.devolvido_parcialmente', 'status.devolvido'
							    </td>
							  </tr>
							  <tr>
							    <td>cgc</td>
							    <td>string</td>
							    <td>true</td>
							    <td>CPF/CNPJ do cliente</td>
							  </tr>
							  <tr>
							    <td>agente[email]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>E-mail do agente</td>
							  </tr>
							  <tr>
							    <td>agente[comissaodevensa]</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Comissão de venda do agente</td>
							  </tr>
							  <tr>
							    <td>agente[loja]</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Loja do agente</td>
							  </tr>
							  <tr>
							    <td>metodosdepagamento[formadepagamento]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do metodo de pagamento. Opções permitidas: 'payment.method.creditcard.hipercard', 'payment.method.creditcard.oipaggo', 'payment.method.creditcard.visa', 'payment.method.creditcard.visaelectron', 'payment.method.creditcard.mastercard', 'payment.method.creditcard.americanexpress', 'payment.method.creditcard.elo', 'payment.method.creditcard.dinners', 'payment.method.creditcard.jcb', 'payment.method.creditcard.discover', 'payment.method.creditcard.aura', 'payment.method.creditcard.bndes', 'payment.method.boleto', 'payment.method.boletoafaturar', 'payment.method.deposit', 'payment.method.forfree', 'payment.method.negotiable'</td>
							  </tr>
							  <tr>
							    <td>metodosdepagamento[parcelas]</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Número de parcelas, caso seja cartão de crédito</td>
							  </tr>
							  <tr>
							    <td>fretetotal</td>
							    <td>float</td>
							    <td>true</td>
							    <td>Valor do Frete Total</td>
							  </tr>
							  <tr>
							    <td>itens[idwebcontinental]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>IdWebContinental do produto previamente cadastrado</td>
							  </tr>
							  <tr>
							    <td>itens[codigoProduto]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código do produto previamente cadastrado</td>
							  </tr>
							  <tr>
							    <td>itens[quantidade]</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Quantidade do Produto</td>
							  </tr>
							  <tr>
							    <td>itens[valorUnitario]</td>
							    <td>float</td>
							    <td>true</td>
							    <td>Valor Unitário do produto</td>
							  </tr>
							  <tr>
							    <td>itens[freteItem]</td>
							    <td>float</td>
							    <td>true</td>
							    <td>Valor de frete do produto</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][cep]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Cep do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][endereco]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][numero]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][numero]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][complemento]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Complemento do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][bairro]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Bairro do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][uf]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Uf do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[enderecodeentrega][cidade]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Cidade do endereço de entrega</td>
							  </tr>
							  <tr>
							    <td>envio[formadeenvio][transportadora]</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código de referência do metodo de entrega. Valores aceitos: * 'correios.pac', * 'correios.sedex', * 'correios.esedex'</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação POST de pedido</strong><br /><br />
						POST /infoar-api/api/integracoes/pedido?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"numeroPedido": "string", <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"status" :"status.aguardando_pagamento", <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"cgc": "string", <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"agente": { <br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email": "string",<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"comissaodevenda": 0,<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"loja": "string" <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;},<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"metodosdepagamento": {<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"formadepagamento": "string",<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"parcelas": "string"<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;},<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"fretetotal": 0, <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"itens":[ {<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"idwebcontinental":"string",<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"codigoProduto":"string",<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantidade": 0,<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"valorUnitario": 000.00,<br />
						    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"freteItem": 0 <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;}], <br />
						    &nbsp;&nbsp;&nbsp;&nbsp;"envio": {<br />
						      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"enderecodeentrega": {<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cep": "string",<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"endereco": "string",<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"numero": "string",<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"complemento": "string",<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"bairro": "string",<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"uf": "string",<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cidade": "string"<br />
						      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}, <br />
						      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"formadeenvio": {<br />
						        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"transportadora": "string"<br />
						      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;}<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="alteraStatus" class="card-header">Alterar Status de um Pedido (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>status</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Aguardando Pagamento: status.aguardando_pagamento, Pago: status.aprovado, Não autorizado: status.nao_autorizado, Aguardando envio: status.aguardando_envio, Enviado: status.enviado, Entregue: status.entregue, Entregue parcialmente: status.entregue_parcialmente, Cancelado: status.cancelado, Faturado: status.faturado, Devolvido parcialmente: status.devolvido_parcialmente, Devolvido: status.devolvido</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de pedido</strong><br /><br />
						PUT /infoar-api/api/integracoes/pedido/{numeroPedido}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"status": "status.pago"<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="listaPedido" class="card-header">Listar Pedidos (GET)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>numeroPedido</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Número do Pedido</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação GET de pedido(s)</strong><br /><br />
						GET /infoar-api/api/integracoes/pedido/{numeroPedido}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
						<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="listaPedidoFiltros" class="card-header">Listar Pedidos com filtros (GET)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>from</td>
							    <td>date</td>
							    <td>false</td>
							    <td>Data início de filtro baseado na data de criação do pedido. e.g. 2014-01-01T13:45:59 (YYYY-mm-ddTH:i:s). Serão considerados todos os registros cadastrados desde às 00:00 do dia informado ou até o horário informado.</td>
							  </tr>
							  <tr>
							    <td>to</td>
							    <td>date</td>
							    <td>false</td>
							    <td>Data fim de filtro baseado na data de criação do pedido. e.g. 2014-01-01T13:45:59 (YYYY-mm-ddTH:i:s). Serão considerados todos os registros cadastrados até às 23:59:59 do dia informado ou até o horário informado.</td>
							  </tr>
							  <tr>
							    <td>offset</td>
							    <td>integer</td>
							    <td>false</td>
							    <td>Posição inicial dos registros retornados. Exemplo, se houver 100 registros use offset 10 para pegar a partir do décimo primeiro registro. Default: 0</td>
							  </tr>
							  <tr>
							    <td>limit</td>
							    <td>integer</td>
							    <td>false</td>
							    <td>Limite máximo de registros a retornar. Default: 10.</td>
							  </tr>
							  <tr>
							    <td>status</td>
							    <td>integer</td>
							    <td>false</td>
							    <td>Status do Pedido. Valores aceitos:
									'status.aguardando_pagamento', 'status.aprovado', 'status.nao_autorizado', 'status.aguardando_envio', 'status.faturado', 'status.enviado', 'status.entregue', 'status.cancelado', 'status.cancelado_parceiro', 'status.devolvido_parcialmente', 'status.devolvido'
								</td>
							  </tr>
							  <tr>
							    <td>parceiro</td>
							    <td>String</td>
							    <td>false</td>
							    <td>CNPJ do Parceiro</td>
							  </tr>
							  <tr>
							    <td>cgc</td>
							    <td>String</td>
							    <td>false</td>
							    <td>CPF ou CNPJ de Clientes</td>
							  </tr>

							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação GET de pedido(s) com filtro(s)</strong><br /><br />
						GET /infoar-api/api/integracoes/pedido/filtros?status=status.shipped&tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div id="rastreamento" class="card-header">Adicionar rastreamento em Pedido (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>numeroPedido</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do Pedido</td>
							  </tr>
							  <tr>
							    <td>transportadora</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Transportadora do pedido</td>
							  </tr>
							  <tr>
							    <td>rastreamento</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Rastreamento do Pedido</td>
							  </tr>
							  <tr>
							    <td>observacao</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Observação do rastreamento do Pedido</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de rastreamento pedido</strong><br /><br />
						PUT /infoar-api/api/integracoes/pedido/rastreamento?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"numeroPedido": "0",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"transportadora": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"rastreamento": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"observacao": "string"<br />
						}
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div id="notaFiscal" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Adicionar Nota Fiscal em Pedido (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>numeroPedido</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Número do Pedido</td>
							  </tr>
							  <tr>
							    <td>nf</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Número Nota Fiscal</td>
							  </tr>
							  <tr>
							    <td>chave</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Chave nota fiscal</td>
							  </tr>
							  <tr>
							    <td>url</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Url nota fiscal</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de Nota Fiscal</strong><br /><br />
						PUT /infoar-api/api/integracoes/pedido/notaFiscal?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"numeroPedido": "01",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"notaFiscal": 0 <br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"chave": "chave",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"url": "url"<br />
						}
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div id="cadastroProdutos" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Cadastro de Produtos (POST)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>codigoReferencia</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código de Referência do Produto</td>
							  </tr>
							  <tr>
							    <td>codigoIntegracao</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código de Integração do Produto. IdWebContinental.</td>
							  </tr>
							  <tr>
							    <td>nome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do Produto</td>
							  </tr>
							  <tr>
							    <td>descricaoComercial</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Descrição comercial do produto</td>
							  </tr>
							  <tr>
							    <td>informacoesTecnicas</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Informações Técnicas do Produto</td>
							  </tr>
							  <tr>
							    <td>garantia</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Garantia do Produto</td>
							  </tr>
							  <tr>
							    <td>marca</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Marca do Produto</td>
							  </tr>
							  <tr>
							    <td>larguraEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Largura total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>alturaEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Altura total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>profundidadeEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Profundidade total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>pesoEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Peso total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>larguraMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Largura total do produto montado</td>
							  </tr>
							  <tr>
							    <td>alturaMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Altura total do produto montado</td>
							  </tr>
							  <tr>
							    <td>profundidadeMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Profundidade total do produto montado</td>
							  </tr>
							  <tr>
							    <td>pesoMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Peso total do produto montado</td>
							  </tr>
							  <tr>
							    <td>ean</td>
							    <td>string</td>
							    <td>false</td>
							    <td>EAN</td>
							  </tr>
							  <tr>
							    <td>ncm</td>
							    <td>string</td>
							    <td>false</td>
							    <td>NCM</td>
							  </tr>
							  <tr>
							    <td>preco</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Preço do Produto</td>
							  </tr>
							  <tr>
							    <td>precoOriginal</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Preço original do Produto</td>
							  </tr>
							  <tr>
							    <td>quantidadeEstoque</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Quantidade em estoque do produto</td>
							  </tr>
							  <tr>
							    <td>estoqueMinimo</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Estoque mínimo do produto</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação POST de Cadastro de Produtos</strong><br /><br />
						POST /infoar-api/api/integracoes/produto?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoReferencia": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoIntegracao": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"nome": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"descricaoComercial": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"informacoesTecnicas": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"garantia": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"marca": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"larguraEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"alturaEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"profundidadeEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"pesoEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"larguraMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"alturaMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"profundidadeMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"pesoMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"ean": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"ncm": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"preco": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"precoOriginal": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"quantidadeEstoque": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"estoqueMinimo": 0<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>

				<div id="atualizacaoProdutos" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Atualização de Produtos (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>codigoReferencia</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código de Referência do Produto</td>
							  </tr>
							  <tr>
							    <td>codigoIntegracao</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Código de Integração do Produto. IdWebContinental.</td>
							  </tr>
							  <tr>
							    <td>nome</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Nome do Produto</td>
							  </tr>
							  <tr>
							    <td>descricaoComercial</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Descrição comercial do produto</td>
							  </tr>
							  <tr>
							    <td>informacoesTecnicas</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Informações Técnicas do Produto</td>
							  </tr>
							  <tr>
							    <td>garantia</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Garantia do Produto</td>
							  </tr>
							  <tr>
							    <td>marca</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Marca do Produto</td>
							  </tr>
							  <tr>					 				
							    <td>larguraEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Largura total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>alturaEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Altura total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>profundidadeEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Profundidade total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>pesoEmbalado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Peso total do produto embalado</td>
							  </tr>
							  <tr>
							    <td>larguraMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Largura total do produto montado</td>
							  </tr>
							  <tr>
							    <td>alturaMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Altura total do produto montado</td>
							  </tr>
							  <tr>
							    <td>profundidadeMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Profundidade total do produto montado</td>
							  </tr>
							  <tr>
							    <td>pesoMontado</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Peso total do produto montado</td>
							  </tr>
							  <tr>
							    <td>ean</td>
							    <td>string</td>
							    <td>false</td>
							    <td>EAN</td>
							  </tr>
							  <tr>
							    <td>ncm</td>
							    <td>string</td>
							    <td>false</td>
							    <td>NCM</td>
							  </tr>
							  <tr>
							    <td>preco</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Preço do Produto</td>
							  </tr>
							  <tr>
							    <td>precoOriginal</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Preço original do Produto</td>
							  </tr>
							  <tr>
							    <td>quantidadeEstoque</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Quantidade em estoque do produto</td>
							  </tr>
							  <tr>
							    <td>estoqueMinimo</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Estoque mínimo do produto</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de atualização de Produtos</strong><br /><br />
						PUT /infoar-api/api/integracoes/produto/{codigoReferencia}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoReferencia": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoIntegracao": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"nome": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"descricaoComercial": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"informacoesTecnicas": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"garantia": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"marca": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"larguraEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"alturaEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"profundidadeEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"pesoEmbalado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"larguraMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"alturaMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"profundidadeMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"pesoMontado": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"ean": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"ncm": "string",<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"preco": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"precoOriginal": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"quantidadeEstoque": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"estoqueMinimo": 0<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>

				<div id="alteracaoStatusProduto" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Alteração de Status de Produto (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>idwebcontinental</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Id WebContinental</td>
							  </tr>
							  <tr>
							    <td>statusdeproduto</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Status do produto. Status aceitos: aprovado ou rejeitado</td>
							  </tr>
							  <tr>
							    <td>referenciaLoja</td>
							    <td>string</td>
							    <td>true</td>
							    <td>Referência Loja Parceiro</td>
							  </tr>
							  <tr>
							    <td>motivo</td>
							    <td>string</td>
							    <td>true ( caso seja rejeitado)</td>
							    <td>Motivo de rejeição do produto</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de Alteração de Status de Produto</strong><br /><br />
						PUT /infoar-api/api/integracoes/produto/status?tokenIntegracao=tokenIntegracao<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />				  
					        &nbsp;&nbsp;&nbsp;&nbsp;"idwebcontinental": "string",<br />
					        &nbsp;&nbsp;&nbsp;&nbsp;"statusdeproduto" : "aprovado ou rejeitado",<br />
					        &nbsp;&nbsp;&nbsp;&nbsp;"referenciaLoja": "string",<br />
					        &nbsp;&nbsp;&nbsp;&nbsp;"motivo": "string"<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>



				<div id="atualizacaoProdutosPrecoPromocional" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Atualização Preço Promocional de Produto (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>preco</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Preço Promocional</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de Atualização de Preço Promocional de Produto</strong><br /><br />
						PUT /infoar-api/api/integracoes/produto/precoPromocional/{codigoReferencia}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"preco": 0<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div id="atualizacaoProdutosPrecoEstoque" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Atualização de Preço e Estoque de Produto (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>preco</td>
							    <td>double</td>
							    <td>true</td>
							    <td>Preço Promocional</td>
							  </tr>
							  <tr>
							    <td>quantidadeEstoque</td>
							    <td>integer</td>
							    <td>true</td>
							    <td>Quantidade em Estoque</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de Atualização de Preço e Estoque de Produto</strong><br /><br />
						PUT /infoar-api/api/integracoes/produto/precoEstoque/{codigoReferencia}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"preco": 0,<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"quantidadeEstoque": 0<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
				<div id="atualizacaoIdWebContinental" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Atualização de IdWebContinental de Produto (PUT)</div>
		                    <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>codigoIntegracao</td>
							    <td>string</td>
							    <td>true</td>
							    <td>IdWebContinental</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação PUT de Atualização de IdWebContinental de Produto</strong><br /><br />
						PUT /infoar-api/api/integracoes/produto/idWebContinental/{codigoReferencia}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
						Content-Type: application/json<br />
						{<br />
						  &nbsp;&nbsp;&nbsp;&nbsp;"codigoIntegracao": "string"<br />
						}<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>

				<div id="listaProdutos" class="card">
			    	<div class="row">
			        	<div class="col-md-12">
			                <div class="card-header">Listar Produtos (GET)</div>
		                   <table class="table table-striped">
							  <tr>
							    <th>Parâmetro</th>
							    <th>Tipo</th>
							    <th>Obrigatório</th>
							    <th>Descrição</th>
							  </tr>
							  <tr>
							    <td>Referência Produto</td>
							    <td>string</td>
							    <td>false</td>
							    <td>Código de Referência do Produto</td>
							  </tr>
							</table>
						</div>
					</div>
					<div class="col-md-12">
						<strong>Exemplo de solicitação GET de produto(s)</strong><br /><br />
						GET /infoar-api/api/integracoes/produto/{referenciaProduto}?tokenIntegracao=tokenIntegracao&referenciaLoja=referenciaLoja<br />
						Host: homolog-infoar.connectinc.com.br<br />
						Accept: application/json<br />
					</div>
					<br />
					<div class="col-md-12 text-right">
						<a href="#topo">Voltar ao topo</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

