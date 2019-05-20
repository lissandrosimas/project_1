const Collections = {

    tiposUsuario: [
        {id: 1, text: "Usuário Padrão"},
        {id: 2, text: "Usuário Representante"}
    ],

    indOptions: [
        {id: 0, text: 'Todos'},
        {id: 1, text: 'Ativo'},
        {id: 2, text: 'Inativo'}
    ],

    indYesorNoOptions: [
        {id: 0, text: 'Todos'},
        {id: 1, text: 'Sim'},
        {id: 2, text: 'Não'}
    ],

    moduloOptions: [
        {id: 1, text: 'Pedidos'},
        {id: 2, text: 'Produtos'}
    ],

    tipoMovimentoOptions: [
        {id: 0, text: 'Todos'},
        {id: 'alteracao', text: 'Alteração'},
        {id: 'inclusao', text: 'Inclusão'},
        {id: 'exclusao', text: 'Exclusão'},
        {id: 'status', text: 'Status'},
        {id: 'notaFiscal', text: 'Nota Fiscal'},
        {id: 'ratreamento', text: 'Rastreamento'},
    ],

    tipoMovimentoProdutoOptions: [
        {id: 0, text: 'Todos'},
        {id: 'alteracao', text: 'Alteração'},
        {id: 'inclusao', text: 'Inclusão'},
        {id: 'exclusao', text: 'Exclusão'},
        {id: 'status', text: 'Status'}
    ],

    orderStatusOptions: [
        { id: "status.aguardando_pagamento", text: 'AGUARDANDO PAGAMENTO' },
        { id: "status.aprovado", text: 'APROVADO' },
        { id: "status.nao_autorizado", text: 'NÃO AUTORIZADO' },
        { id: "status.aguardando_envio", text: 'EM SEPARAÇÃO' },
        { id: "status.faturado", text: 'FATURADO' },
        { id: "status.enviado", text: 'ENVIADO' },
        { id: "status.etregue", text: 'ENTREGUE' },
        { id: "status.cancelado", text: 'CANCELADO' },
        { id: "status.cancelado_parceiro", text: 'CANCELADO PARCEIRO' },
        { id: "status.devolvido_parcialmente", text: 'DEVOLVIDO PARCIALMENTE' },
        { id: "status.devolvido", text: 'DEVOLVIDO' }      
    ]

}

export default Collections;
