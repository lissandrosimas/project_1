import BaseService from '@/services/base_service';

export default class LogService extends BaseService {
  list(params) {
      return new Promise((resolve, reject) => {
          axios.get('/movimentacaoPedido', params).then(response => {
              resolve(response);
          }).catch(e => {
              reject(e);
          });
      });
  }

  listLogsProduto(params) {
      return new Promise((resolve, reject) => {
          axios.get('/movimentacaoProduto', params).then(response => {
              resolve(response);
          }).catch(e => {
              reject(e);
          });
      });
  }

  downloadJson(json){
    const FileDownload = require('js-file-download');
 
      let headers = new Headers();

      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');

      new Promise((resolve, reject) => {
        axios({
          method:'get',
          url:'movimentacaoPedido/exportar/' + json,
          responseType: 'blob',
          headers: headers
        }).then(response => {
              FileDownload(response.data, "Log.txt")
           }).catch(e => {
              reject(e);
           });      
      });
  }
}