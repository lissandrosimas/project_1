import {clearPhone, clearCpfCnpj, isUndefinedOrNullOrEmpty} from '@/services/string';
import BaseService from '@/services/base_service';

export default class OrderService extends BaseService {

    export(params) {        
     const FileDownload = require('js-file-download');
      new Promise((resolve, reject) => {
      axios({
        method:'get',
        url:'/pedidos/exportar',
        responseType: 'blob',
        headers: { 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
        params: params
      }).then(response => {
            FileDownload(response.data, "Pedidos.xls")
         }).catch(e => {
            reject(e);
         });      
      });
    }

    list(params) {
        return new Promise((resolve, reject) => {
            axios.get('/pedidos', params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    changeStatus(params) {
        return new Promise((resolve, reject) => {
            axios.put('/pedidos/' + params.id, params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            axios.get('/pedidos/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    create(model) {
        return new Promise((resolve, reject) => {
            var pedido = _.clone(model);
            // company.telefone = clearPhone(company.telefone);
            // company.responsavelTelefone = clearPhone(company.responsavelTelefone);
            // company.cnpj = clearCpfCnpj(company.cnpj);
            // if (!isUndefinedOrNullOrEmpty(company.cep)) company.cep = clearCpfCnpj(company.cep);

            axios.post('/pedidos', pedido).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    update(model) {
        return new Promise((resolve, reject) => {
            var pedido = _.clone(model);
            // company.telefone = clearPhone(company.telefone);
            // company.responsavelTelefone = clearPhone(company.responsavelTelefone);
            // company.cnpj = clearCpfCnpj(company.cnpj);
            // if (!isUndefinedOrNullOrEmpty(company.cep)) company.cep = clearCpfCnpj(company.cep);

            axios.put('/pedidos/' + pedido.id, pedido).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete('/pedidos/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    updateStatus(id, status) {
        return new Promise((resolve, reject) => {
            axios.put('/pedidos/' + id, { status: status }).then(response => {
               resolve(response);
            }).catch(e => {
               reject(this.getErrors(e));
            });
        });
    }
}
