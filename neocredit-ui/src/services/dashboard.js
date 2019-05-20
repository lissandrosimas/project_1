import BaseService from '@/services/base_service';

export default class DashboardService extends BaseService {

	pedidos(params) {
        return new Promise((resolve, reject) => {
            axios.get('/dashboard/pedidos/', params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    produtos() {
        return new Promise((resolve, reject) => {
            axios.get('/dashboard/produtos').then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    topVendas() {
        return new Promise((resolve, reject) => {
            axios.get('/dashboard/topVendas').then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }
    
    pedidosAprovados() {
        return new Promise((resolve, reject) => {
            axios.get('/dashboard/pedidosAprovados').then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    pedidosIncluidos() {
        return new Promise((resolve, reject) => {
            axios.get('/dashboard/pedidosIncluidos').then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

     pedidosLabel() {
        return new Promise((resolve, reject) => {
            axios.get('/dashboard/label').then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }
}