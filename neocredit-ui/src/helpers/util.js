const moment = require('moment');

module.exports = {
    boolSimNao: function (value) {
        if (value) {
            return '<span><i class="fa fa-check" style="color: #5cb85c;"></i></span>';
        } else {
            return '<span><i class="fa fa-times" style="color: #CC0000;"></i></span>';
        }
    },

    orderStatus: function (value) {
        if (value == "status.aguardando_pagamento") {
            return 'AGUARDANDO PAGAMENTO';
        } else if (value == "status.aprovado") {
            return 'APROVADO';
        } else if (value == "status.nao_autorizado") {
            return 'NÃO AUTORIZADO';
        } else if (value == "status.aguardando_envio") {
            return 'EM SEPARAÇÃO';
        } else if (value == "status.faturado") {
            return 'FATURADO';
        } else if (value == "status.enviado") {
            return 'ENVIADO';
        } else if (value == "status.entregue") {
            return 'ENTREGUE';
        } else if (value == "status.cancelado") {
            return 'CANCELADO';
        } else if (value == "status.cancelado_parceiro") {
            return 'CANCELADO PARCEIRO';
        } else if (value == "status.devolvido_parcialmente") {
            return 'DEVOLVIDO PARCIALMENTE';
        } else if (value == "status.devolvido") {
            return 'DEVOLVIDO';
        } else {
            return '';
        }
    },

    paymentStatus: function (value) {
        if (!value) {
            return '<label class="label label-success">Ativo</label>';
        } else {
            return '<label class="label label-danger">Cancelado</label>';
        }
    },

    currency: function (value, prefix = false) {
        let v = parseFloat(value).toFixed(2) + "";

        if (v.indexOf('.') === -1) {
            v += ".00"
        }

        v = v.replace(/\D/g,'');
        v = v.replace(/(\d{1,2})$/, ',$1');
        v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        if (prefix) v = v != ''?'R$ '+v:'';

        return v
    },

    paymentMethod: function (value) {
        if (value == 'money') {
            return '<span class="fa fa-money text-success"></span> Dinheiro';
        } else if (value == 'credit_card') {
            return '<span class="fa fa-credit-card text-danger"></span> Cartão de Crédito';
        } else if (value == 'bank_slip_' || value == 'bank_slip') {
            return '<span class="fa fa-barcode text-warning"></span> Boleto';
        } else if (value == 'bank_deposit') {
            return '<span class="fa fa-bank text-info"></span> Depósito bancário';
        } else {
            return '';
        }
    },

    formatDate: function (datetime, format) {
        moment.locale('pt-br');
        if (moment) {
            if (datetime != undefined && datetime != '') {
                return moment(datetime).format(format);
            } else {
                return '';
            }
        }
        else {
            return moment();
        }
    },

    isExpired: function (date) {
        moment.locale('pt-br');
        return moment().isAfter(date);
    }
}
