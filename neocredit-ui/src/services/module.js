import BaseService from '@/services/base_service';

export default class ModuleService extends BaseService {
   list() {
      return new Promise((resolve, reject) => {
         axios.get('/modulos').then(response => {
            resolve(response);
         }).catch(e => {
            reject(e);
         });
      });
   }
}
