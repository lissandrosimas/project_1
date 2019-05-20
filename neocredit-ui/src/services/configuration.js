import BaseService from '@/services/base_service';

export default class ConfigurationService extends BaseService {

	update(model) {
        return new Promise((resolve, reject) => {
            axios.put('/configuracao/' + 1, model).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    reseteToken() {
        return new Promise((resolve, reject) => {
            axios.put('/configuracao').then(response => {
                resolve(response);s
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            axios.get('/configuracao/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

}