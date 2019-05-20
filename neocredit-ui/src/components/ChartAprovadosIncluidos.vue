<script>

import { Line } from 'vue-chartjs'

export default {

  	extends: Line,
  	props: ['pedidosAprovados', 'pedidosIncluidos', 'labelChart'],
  	mounted () {
	    this.renderChart({
	      	labels: this.labelChart,
	      	datasets: [
	        	{
	          		label: 'Pedidos Aprovados',
	          		borderColor: "#0b286e",
		            pointBorderColor: "#0b286e",
		            pointBackgroundColor: "#0b286e",
		            pointHoverBackgroundColor: "#0b286e",
		            pointHoverBorderColor: "#0b286e",
		            pointBorderWidth: 10,
		            pointHoverRadius: 10,
		            pointHoverBorderWidth: 1,
		            pointRadius: 3,
		            fill: false,
		            borderWidth: 4,
	          		data: this.pedidosAprovados
	        	},
	        	{
	          		label: 'Pedidos Incluídos',
	          		borderColor: "#5bc0de",
		            pointBorderColor: "#5bc0de",
		            pointBackgroundColor: "#5bc0de",
		            pointHoverBackgroundColor: "#5bc0de",
		            pointHoverBorderColor: "#5bc0de",
		            pointBorderWidth: 10,
		            pointHoverRadius: 10,
		            pointHoverBorderWidth: 1,
		            pointRadius: 3,
		            fill: false,
		            borderWidth: 4,
		            data: this.pedidosIncluidos
	        	}
	      	]
	    })
  	}
}
</script>