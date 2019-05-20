import BaseService from '@/services/base_service';

export default class AlertService extends BaseService {


	 update(model) {
        return new Promise((resolve, reject) => {
            axios.put('/alerta', model).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

     get() {
        return new Promise((resolve, reject) => {
            axios.get('/alerta').then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }
}