import BaseService from '@/services/base_service';

export default class ProfileService extends BaseService {
   list() {
      return new Promise((resolve, reject) => {
         axios.get('/perfil').then(response => {
            resolve(response);
         }).catch(e => {
            reject(e);
         });
      });
   }
}
