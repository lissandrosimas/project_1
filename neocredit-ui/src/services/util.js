function isPhone(value) {
   return /^(\([0-9]{2}\)\s*|[0-9]{3}\-)[0-9]{5}-[0-9]{4}$/.test(value);
}

function isCep(value) {
   return /^[0-9]{5}-[0-9]{3}$/.test(value);
}

function validateCNPJ(cnpj) {
	cnpj = cnpj.replace(/[^\d]+/g,'');
	if(cnpj == '') return false;
	if (cnpj.length != 14)
		return false;
	// Elimina CNPJs invalidos conhecidos
	if (cnpj == "00000000000000" ||
		cnpj == "11111111111111" ||
		cnpj == "22222222222222" ||
		cnpj == "33333333333333" ||
		cnpj == "44444444444444" ||
		cnpj == "55555555555555" ||
		cnpj == "66666666666666" ||
		cnpj == "77777777777777" ||
		cnpj == "88888888888888" ||
		cnpj == "99999999999999")
		return false;

	// Valida DVs
	tamanho = cnpj.length - 2
	numeros = cnpj.substring(0,tamanho);
	digitos = cnpj.substring(tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--) {
	  soma += numeros.charAt(tamanho - i) * pos--;
	  if (pos < 2)
			pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(0))
		return false;

	tamanho = tamanho + 1;
	numeros = cnpj.substring(0,tamanho);
	soma = 0;
	pos = tamanho - 7;
	for (i = tamanho; i >= 1; i--) {
	  soma += numeros.charAt(tamanho - i) * pos--;
	  if (pos < 2)
			pos = 9;
	}
	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
	if (resultado != digitos.charAt(1))
		  return false;

	return true;
}

module.exports = {
   getStates() {
      return [
         { id: 'AC', text: 'Acre' }, { id: 'AL', text: 'Alagoas' }, { id: 'AP', text: 'Amapá' },
         { id: 'AM', text: 'Amazonas' }, { id: 'BA', text: 'Bahia' }, { id: 'CE', text: 'Ceará' },
         { id: 'DF', text: 'Distrito Federal' }, { id: 'ES', text: 'Espírito Santo' }, { id: 'GO', text: 'Goiás' },
         { id: 'MA', text: 'Maranhão' }, { id: 'MT', text: 'Mato Grosso' }, { id: 'MS', text: 'Mato Grosso do Sul' },
         { id: 'MG', text: 'Minas Gerais' }, { id: 'PA', text: 'Pará' }, { id: 'PB', text: 'Paraíba' },
         { id: 'PR', text: 'Paraná' }, { id: 'PE', text: 'Pernambuco' }, { id: 'PI', text: 'Piauí' },
         { id: 'RJ', text: 'Rio de Janeiro' }, { id: 'RN', text: 'Rio Grande do Norte' }, { id: 'RS', text: 'Rio Grande do Sul' },
         { id: 'RO', text: 'Rondônia' }, { id: 'RR', text: 'Roraima' }, { id: 'SC', text: 'Santa Catarina' },
         { id: 'SP', text: 'São Paulo' }, { id: 'SE', text: 'Sergipe' }, { id: 'TO', text: 'Tocantins' }
      ];
   },
   validateCNPJ: validateCNPJ,
   isPhone(value) { isPhone(value); },

   isPhoneOrNull(value) {
      if (value == undefined || value == null || value == '') return true;
      else return isPhone(value);
   },

   isCnpj(value) {
      return /^[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}$/.test(value);
   },

   isCpf(value) {
      return /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/.test(value);
   },

   isCep(value) {
      isCep(value);
   },

   isCepOrNull(value) {
      if (value == undefined || value == null || value == '') return true;
      else return isCep(value);
   }
}
