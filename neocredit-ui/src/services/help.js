import BaseService from '@/services/base_service';

export default class HelpService extends BaseService {
    download(manual) {
        const FileDownload = require('js-file-download');
 
        new Promise((resolve, reject) => {
          axios({
            method:'get',
            url:'/produtos/exportar',
            responseType: 'blob',
            headers: { 'Accept': 'application/pdf' },
            params: params
          }).then(response => {
                FileDownload(response.data, manual + ".pdf")
             }).catch(e => {
                reject(e);
             });      
        });
    }

    upload(manual) {
        const FileDownload = require('js-file-download');
 
        new Promise((resolve, reject) => {
          axios({
            method:'get',
            url:'/produtos/exportar',
            responseType: 'blob',
            headers: { 'Accept': 'application/pdf' },
            params: params
          }).then(response => {
                FileDownload(response.data, manual + ".pdf")
             }).catch(e => {
                reject(e);
             });      
        });
    }
}