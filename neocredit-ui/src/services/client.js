import {clearPhone, clearCpfCnpj, isUndefinedOrNullOrEmpty} from '@/services/string';
import BaseService from '@/services/base_service';

export default class ClientService extends BaseService {
    search(params) {
        return new Promise((resolve, reject) => {
            axios.get('/clientes/pesquisar', params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    list(params) {
        return new Promise((resolve, reject) => {
            axios.get('/clientes', params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            axios.get('/clientes/' + id).then(response => {
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

            axios.post('/clientes', pedido).then(response => {
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

            axios.put('/ clientes/' + pedido.id, pedido).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete('/clientes/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }
}
