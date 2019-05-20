<template>
        <div class="row">
            <div class="col-md-8">
                <select class="form-control" v-model="realCurrentStatus" v-if="realShow">
                    <option v-for="option in options" :value="option.id">{{ option.text }}</option>
                </select>
                <span v-else>{{ realCurrentStatus | orderStatus }}</span>
            </div>
            <div class="col-md-4">
                <button @click="toggleShowItem(true)" class="btn btn-default btn-xs" v-if="realShow">
                    <i class="fa fa-times"></i>
                </button>
                <button @click="toggleShowItem(false)" class="btn btn-default btn-xs" v-else>
                    <i class="fa fa-edit"></i>
                </button>
                <button @click="save()" class="btn btn-success btn-xs" v-if="realShow">
                    <i class="fa fa-check"></i>
                </button>
            </div>
        </div>
</template>
<script>
    import axios from 'axios'
    import Facade from '../facade/facade'
    const facade = new Facade()

    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: false
            },
            currentStatus: {
                type: String,
                required: false
            },
            show: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                realShow: this.show,
                realCurrentStatus: this.currentStatus,
                options: [
                    { id: "status.aguardando_pagamento", text: 'AGUARDANDO PAGAMENTO' },
                    { id: "status.aprovado", text: 'APROVADO' },
                    { id: "status.nao_autorizado", text: 'NÃO AUTORIZADO' },
                    { id: "status.aguardando_envio", text: 'EM SEPARAÇÃO' },
                    { id: "status.faturado", text: 'FATURADO' },
                    { id: "status.enviado", text: 'ENVIADO' },
                    { id: "status.entregue", text: 'ENTREGUE' },
                    { id: "status.cancelado", text: 'CANCELADO' },
                    { id: "status.cancelado_parceiro", text: 'CANCELADO PARCEIRO' },
                    { id: "status.devolvido_parcialmente", text: 'DEVOLVIDO PARCIALMENTE' },
                    { id: "status.devolvido", text: 'DEVOLVIDO' }                  
                ],

                realShow: false
            }
        },
        methods: {
            save() {
                let vm = this

                let status = {
                    id: vm.id,
                    status: vm.realCurrentStatus
                }

                this.$loading.show(true)
                if (vm.id) {
                    let ret = facade.changeOrderStatus(status)
                    ret.then(order => {
                        vm.realShow = false
                        vm.status = vm.realCurrentStatus
                        vm.currentStatus = vm.realCurrentStatus
                        this.$loading.show(false)
                    }).catch(e => {

                        this.$notify.error('Erro', e.response.data.message)
                        this.$loading.show(false)
                    })
                }
            },
            toggleShowItem(reset) {
                if (reset) this.realCurrentStatus = this.status
                this.realShow = !this.realShow
            },
        }
    }
</script>
<style scoped>
    .form-control {
        padding: 1px 1px;
    }
    select.form-control:not([size]):not([multiple]) {
        height: 25px;
    }
</style>
