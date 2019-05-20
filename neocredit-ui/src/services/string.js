function clearCpfCnpj(cpf) {

    if (cpf) {
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace(/\-/g, '');
        cpf = cpf.replace(/\//g, '');
    }

    return cpf;
};

function clearPhone(phone) {
    if (phone) {
        phone = phone.replace(/\(/g, '')
        phone = phone.replace(/\)/g, '')
        phone = phone.replace(/\-/g, '')
        phone = phone.replace(/\s+/g, '')
    }

    return phone
}

function formatPhone(phone) {
    if(phone) {
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else {
        return '';
    }

}

function formatCnpj(cnpj) {
    if (cnpj) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else {
        return '';
    }

}

function formatCep(cep) {
    if (cep) {
        return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    } else {
        return ''
    }

}

module.exports = {
    clearCpfCnpj: clearCpfCnpj,
    clearPhone: clearPhone,
    formatPhone: formatPhone,
    formatCnpj: formatCnpj,
    formatCep: formatCep,
    isUndefinedOrNull: function (param) {
        return param == undefined || param == null;
    },
    isUndefinedOrNullOrEmpty: function (param) {
        return param == undefined || param == null || param == '';
    }
}
