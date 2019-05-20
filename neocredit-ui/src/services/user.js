import {clearPhone} from '@/services/string';
import BaseService from '@/services/base_service';


export default class UserService extends BaseService {


   export(params) {
      const FileDownload = require('js-file-download');
      new Promise((resolve, reject) => {
      axios({
        method:'get',
        url:'/usuarios/exportar',
        responseType: 'blob',
        headers: { 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
        params: params
      }).then(response => {
            FileDownload(response.data, "Usuários.xls")
         }).catch(e => {
            reject(e);
         });      
      });
   }
   list(params) {
      return new Promise((resolve, reject) => {
         axios.get('/usuarios', params).then(response => {
            resolve(response);
         }).catch(e => {
            reject(e);
         });
      });
   }
   get(id) {
      return new Promise((resolve, reject) => {
         axios.get('/usuarios/' + id).then(response => {
            resolve(response);
         }).catch(e => {
            reject(e);
         });
      });
   }
   create(model) {
      return new Promise((resolve, reject) => {
         var user = _.clone(model);
         user.telefone = clearPhone(user.telefone);

         axios.post('/usuarios', user).then(response => {
            resolve(response);
         }).catch(e => {
            reject(this.getErrors(e));
         });
      });
   }
   update(model) {
      return new Promise((resolve, reject) => {
         var user = _.clone(model);
         user.telefone = clearPhone(user.telefone);

         axios.put('/usuarios/' + user.id, user).then(response => {
            resolve(response);
         }).catch(e => {
            reject(this.getErrors(e));
         });
      });
   }
   delete(id) {
      return new Promise((resolve, reject) => {
         axios.delete('/usuarios/' + id).then(response => {
            resolve(response);
         }).catch(e => {
            reject(e);
         });
      });
   }
}
