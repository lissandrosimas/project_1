import {clearPhone, clearCpfCnpj, isUndefinedOrNullOrEmpty} from '@/services/string';
import BaseService from '@/services/base_service';

export default class CompanyService extends BaseService {
 

    export(params) {
        const FileDownload = require('js-file-download');
 
        new Promise((resolve, reject) => {
          axios({
            method:'get',
            url:'/empresas/exportar',
            responseType: 'blob',
            headers: { 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
            params: params
          }).then(response => {
                FileDownload(response.data, "Parceiros.xls")
             }).catch(e => {
                reject(e);
             });      
        });
    }

    list(params) {
        return new Promise((resolve, reject) => {
            axios.get('/empresas', params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            axios.get('/empresas/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    create(model) {
        return new Promise((resolve, reject) => {
            var company = _.clone(model);
            company.telefone = clearPhone(company.telefone);
            company.responsavelTelefone = clearPhone(company.responsavelTelefone);
            company.cnpj = clearCpfCnpj(company.cnpj);
            if (!isUndefinedOrNullOrEmpty(company.cep)) company.cep = clearCpfCnpj(company.cep);

            axios.post('/empresas', company).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    update(model) {
        return new Promise((resolve, reject) => {
            var company = _.clone(model);
            company.telefone = clearPhone(company.telefone);
            company.responsavelTelefone = clearPhone(company.responsavelTelefone);
            company.cnpj = clearCpfCnpj(company.cnpj);
            if (!isUndefinedOrNullOrEmpty(company.cep)) company.cep = clearCpfCnpj(company.cep);

            axios.put('/empresas/' + company.id, company).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete('/empresas/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }
}
