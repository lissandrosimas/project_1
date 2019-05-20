import BaseService from '@/services/base_service';

export default class StockService extends BaseService {
   import(file) {
      return new Promise((resolve, reject) => {
         axios.post('/importar/produtos/estoque', file).then(response => {
            resolve(response);
         }).catch(e => {
            reject(this.getErrors(e));
         });
      });
   }
}
