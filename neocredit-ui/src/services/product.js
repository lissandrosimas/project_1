import BaseService from '@/services/base_service';

export default class ProductService extends BaseService {
    export(params) {
        const FileDownload = require('js-file-download');
 
        new Promise((resolve, reject) => {
          axios({
            method:'get',
            url:'/produtos/exportar',
            responseType: 'blob',
            headers: { 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
            params: params
          }).then(response => {
                FileDownload(response.data, "Produtos.xls")
             }).catch(e => {
                reject(e);
             });      
        });
    }

    exportManagement(params) {
        const FileDownload = require('js-file-download');
 
        new Promise((resolve, reject) => {
          axios({
            method:'get',
            url:'/produtos/exportarGerencial',
            responseType: 'blob',
            headers: { 'Accept': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
            params: params
          }).then(response => {
                FileDownload(response.data, "Produtos Gerencial.xls")
             }).catch(e => {
                reject(e);
             });      
        });
    }

    list(params) {
        return new Promise((resolve, reject) => {
            axios.get('/produtos', params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    aprovar(params) {
        return new Promise((resolve, reject) => {
            axios.get('/produtos/aprovar/' + params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    reprovar(ids, motivo) {
        return new Promise((resolve, reject) => {
            axios.get('/produtos/reprovar/' + ids +'/'+motivo).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    movimentacao(params) {
        return new Promise((resolve, reject) => {
            axios.get('/produtos/movimentacao/' + params).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            axios.get('/produtos/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    create(model) {
        return new Promise((resolve, reject) => {
            axios.post('/produtos', model).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    update(model) {
        return new Promise((resolve, reject) => {
            axios.put('/produtos/' + model.id, model).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            axios.delete('/produtos/' + id).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            });
        });
    }

    importProduto(file) {
        return new Promise((resolve, reject) => {
            axios.post('/importar/produto', file).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    importEstoque(file) {
        return new Promise((resolve, reject) => {
            axios.post('/importar/estoque', file).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    importPreco(file) {
        return new Promise((resolve, reject) => {
            axios.post('/importar/preco', file).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    importPrecoEstoque(file) {
        return new Promise((resolve, reject) => {
            axios.post('/importar/precoEstoque', file).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    updatePrices(model) {
        return new Promise((resolve, reject) => {
            axios.put('/produtos/precos', model).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    updateStock(model) {
        return new Promise((resolve, reject) => {
            axios.put('/produtos/estoque', model).then(response => {
                resolve(response);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    static getMedias(model) {
        return new Promise((resolve, reject) => {
            axios.get('/produtos/' + model + '/midias').then(response => {
                resolve(response)
            }).catch(e => {
                reject(this.getErrors(e));
            })
        });
    }

    removeProductMedia(model, filename) {
        return new Promise((resolve, reject) => {
            axios.delete('/produtos/' + model + '/midias/remove/' + filename).then(response => {
                resolve(response)
            }).catch(e => {
                reject(e);
            })
        })
    }
    
    static downloadProductMedia(model, filename) {
        return new Promise((resolve, reject) => {
            axios.delete('/produtos/' + model + '/midias/download/' + filename).then(response => {
                resolve(response)
            }).catch(e => {
                reject(this.getErrors(e))
            })
        })
    }
}
