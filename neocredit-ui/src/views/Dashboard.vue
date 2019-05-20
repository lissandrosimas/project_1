<template>
	<div class="animated fadeIn">
        
	</div>
</template>

<script>

    import { Portuguese } from 'flatpickr/dist/l10n/pt';
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
	import Facade from '../facade/facade';
    const facade = new Facade();

    export default {
    	components: {
          flatPickr
        },
    	data(){
    		return {
    			filter: {},
    			configFlatPickr: {
                  wrap: false,
                  altFormat: 'd/m/Y',
                  altInput: true,
                  enableTime: false,
                  time_24hr: true,
                  dateFormat: 'Ymd',
                  locale: Portuguese,
                  allowInput: true
                },
    			model: [],
    			modelTopVendas: [],
    			modelProdutos: [],
    			labelChart: [],
    			pedidosIncluidos: [],
    			pedidosAprovados: []
    		}
    	},
    	created () {
    		Promise.all([
	    		this.dashboardPedidos(),
	    		this.dashboardTopVendas(),
	    		this.dashboardProdutos(),
	    		this.dashboardLabelChart(),
	    		this.dashboardPedidosIncluidos(),
				this.dashboardPedidosAprovados()
			]);

    	},
    	methods: {
    		pedido(){
    			this.$router.push({name: 'list-order'});
    		},
    		produto(){
    			this.$router.push({name: 'list-product'});
    		},
    		topVendas(){
    			let params;
    			params = '';
    			for (let codigo in this.modelTopVendas) {
    				if (params === ''){
    					params = this.modelTopVendas[codigo][3];
	   				} else {
	   					params = params + ',' + this.modelTopVendas[codigo][3];
	   				}
    			}
    			this.$router.push({name: 'list-product', params: { ativo: 1 , aprovado : 0, codigoReferencia: params}});
    		},
    		produtosValidos(){
    			this.$router.push({ name: 'list-product', params: { ativo: 1 , aprovado : 0}})
    		},
			produtosValidosAprovados(){
    			this.$router.push({ name: 'list-product', params: { ativo: 1 , aprovado : 1}})
    		},
    		produtosValidosReprovados(){
    			this.$router.push({ name: 'list-product', params: { ativo: 1 , aprovado : 2}})
    		},
    		pedidosAguardandoPagamento(){
    			this.$router.push({name: 'list-order' , params: { status: 'status.aguardando_pagamento'}})
    		},
    		pedidosStatusAprovado(){
    			this.$router.push({name: 'list-order' , params: { status: 'status.aprovado'}})
    		},    		
    		pedidosFaturados(){
    			this.$router.push({name: 'list-order' , params: { status: 'status.faturado'}})
    		},  
    		pedidosEnviados(){
    			this.$router.push({name: 'list-order' , params: { status: 'status.enviado'}})
    		}, 
    		pedidosEntregues(){
    			this.$router.push({name: 'list-order' , params: { status: 'status.entregue'}})
    		}, 
			pedidosCancelados(){
    			this.$router.push({name: 'list-order' , params: { status: 'status.cancelado'}})
    		}, 
    		search() {

				let vm = this

                var clone = _.clone(this.filter)

                if (vm.filter.dataInicial != null && vm.filter.dataInicial != 'Invalid date' && vm.filter.dataInicial != '') {
                    clone.dataInicial = moment(vm.filter.dataInicial).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataInicial
                }


                if (vm.filter.dataFinal != null && vm.filter.dataFinal != 'Invalid date' && vm.filter.dataFinal != '') {
                    clone.dataFinal = moment(vm.filter.dataFinal).format('DD/MM/YYYY HH:mm:ss')
                } else {
                    delete clone.dataFinal
                }

    			let params = {params: {dataInicial: vm.filter.dataInicial, dataFinal: vm.filter.dataFinal}};

                Promise.all([
	                this.dashboardPedidos(params),
	    			this.dashboardTopVendas(),
	    			this.dashboardProdutos(),
	    			this.dashboardLabelChart(),
	    			this.dashboardPedidosIncluidos(),
	    			this.dashboardPedidosAprovados()
                ]);
            },
	    	dashboardPedidos(dataInicial, dataFinal){
	    		let ret = facade.dashboardPedidos(dataInicial, dataFinal);
	    		ret.then(res => {
	    			this.model = res.data;
	    		});
	    	},
	    	dashboardProdutos(){
		        let ret2 = facade.dashboardProdutos();
		        ret2.then(res2 => {
		          this.modelProdutos = res2.data;
		        });
	    	},
	    	dashboardTopVendas(){
		        let ret3 = facade.dashboardTopVendas();
		        ret3.then(res3 => {
		          this.modelTopVendas = res3.data;
		        });	    		
	    	},
	    	dashboardLabelChart(){
		        let ret4 = facade.dashboardPedidosLabel();
		        ret4.then(res4 => {
		          this.labelChart = res4.data;
		        });	 
	    	},
			dashboardPedidosIncluidos(){
		        let ret5 = facade.dashboardPedidosIncluidos();
		        ret5.then(res5 => {
		          this.pedidosIncluidos = res5.data;
		        });	 
	    	},
			dashboardPedidosAprovados(){
		        let ret6 = facade.dashboardPedidosAprovados();
		        ret6.then(res6 => {
		          this.pedidosAprovados = res6.data;
		        });	 
	    	}           
		}
	}
    
</script>

<style type="text/css">
	.panel {
	    margin-bottom: 20px;
	    background-color: #fff;
	    border: 1px solid transparent;
	    border-radius: 4px;
	    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
	}
	.bg-color-green {
	    background-color: #fff;
	    color: #5cb85c;
	}
	.panel-primary {
	    border-color: #428bca;
	}
	.back-footer-green {
	    background-color: #5cb85c !important;
	    color: #fff;
	    border-top: 0px solid #fff;
	}
	.panel-footer {
	    padding: 10px 15px;
	    background-color: #f5f5f5;
	    border-top: 1px solid #ddd;
	    border-bottom-right-radius: 3px;
	    border-bottom-left-radius: 3px;
	}
	.text-center {
	    text-align: center;
	}
	.no-boder {
	    border: 1px solid #f3f3f3;
	}
	.bg-color-blue {
	    background-color: #fff;
	    color: #5bc0de;
	}
	.back-footer-blue {
	    background-color: #5bc0de;
	    color: #fff;
	    border-top: 0px solid #fff;
	}
	.bg-color-red {
	    background-color: #fff;
	    color: #CC0000;
	}
	.back-footer-red {
	    background-color: #CC0000;
	    color: #fff;
	    border-top: 0px solid #fff;
	}
	.bg-color-brown {
	    background-color: #fff;
	    color: #0b286e;
	}
	.back-footer-brown {
	    background-color: #0b286e;
	    color: #fff;
	    border-top: 0px solid #fff;
	}
	.panel-default > .panel-heading {
	    color: #333;
	    background-color: #f5f5f5;
	    border-color: #ddd;
	}
	.panel-default > .panel-heading {
	    color: #333;
	    background-color: #f5f5f5;
	    border-color: #ddd;
	}
	.panel-heading {
	    padding: 10px 15px;
	    border-bottom: 1px solid transparent;
	    border-top-left-radius: 3px;
	    border-top-right-radius: 3px;
	}
	.panel-default {
	    border-color: #ddd;
	}
	.btn-circle {
	    width: 50px;
	    height: 50px;
	    padding: 6px 0;
	    -webkit-border-radius: 25px;
	    -moz-border-radius: 25px;
	    border-radius: 25px;
	    text-align: center;
	    font-size: 12px;
	    line-height: 1.428571429;
	}
	.btn-default {
	    color: #333;
	    background-color: #fff;
	    border-color: #ccc;
	}
	.p-3 {
	    padding: 0.75rem !important;
	}
	.d-flex {
	    display: -ms-flexbox !important;
	    display: flex !important;
	}
	.stamp-md {
	    min-width: 2.5rem;
	    height: 2.5rem;
	    line-height: 2.5rem;
	}
	.stamp {
	    color: #fff;
	    background: #868e96;
	    display: inline-block;
	    min-width: 2rem;
	    height: 2rem;
	    padding: 0 .25rem;
	    line-height: 2rem;
	    text-align: center;
	    border-radius: 3px;
	    font-weight: 600;
	}
	.bg-blue {
	    background-color: #467fcf !important;
	}
	.mr-3, .mx-3 {
	    margin-right: 0.75rem !important;
	}
	.card-t {
	    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	    position: relative;
	    margin-bottom: 1.5rem;
	    width: 100%;
	}
	.bg-red {
	    background-color: #cd201f !important;
	}
	.icons-list li .desc .title {
	    padding: 10px 0 0;
	    margin: 0;
	}
	.icons-list li .value strong {
	    display: block;
	    margin-top: 7px;
	}

</style>