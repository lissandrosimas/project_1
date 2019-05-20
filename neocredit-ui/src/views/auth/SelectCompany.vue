<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <form @submit.prevent="applyChange">
                                <div class="card-block">
                                    <h1>WebContinental</h1>
                                    <p class="text-muted">Selecione uma Empresa</p>
                                    <p v-if="empresaAtiva.nomeFantasia">
                                        Empresa ativa: <br>
                                        <strong>{{ empresaAtiva.nomeFantasia}}</strong> / {{ empresaAtiva.cnpj }}
                                    </p>
                                    <div class="form-group">
                                        <select2
                                                v-model="empresaSelected"
                                                placeholder="Pesquise pela empresa"
                                                :options="empresas">
                                        </select2>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <button type="submit" class="btn btn-primary px-4">Selecionar</button>
                                            <br>
                                            <a href="#" @click.prevent="cancel" class="btn btn-link">Cancelar</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card card-inverse py-5 d-md-down-none" style="width:44%">
                            <div class="card-block text-center">
                                <div>
                                    <br><br><br>
                                    <img src="/static/images/web-continental-logo.jpg" alt="Infoar" width="240">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Facade from '@/facade/facade'

    export default {
        data() {
            return {
                empresas: [],
                empresaSelected: null,
                empresaAtiva: {
                    nomeFantasia: false
                }
            }
        },
        methods: {
            applyChange() {
                this.$loading.show(true)
                Facade.changeUserCompanyDefault(this.empresaSelected).then(res => {
                    this.$loading.show(false)
                    this.$router.push({name: 'home'});
                })
            },
            cancel() {
                this.$router.back();
            },
            setData(companies, companyActive) {
                this.empresas = companies
                this.empresaAtiva = companyActive
            }
        },
        beforeMounted() {
            this.$loading.show(true)
        },
        mounted() {
            this.$loading.show(false)
        },
        beforeRouteEnter(to, from, next) {
            Promise.all([
                Facade.listUserCompanies(),
                Facade.getUserDefaultCompany()
            ])
                .then(
                    res => {
                        next(vm => vm.setData(_.map(res[0].data, co => {
                            return {
                                id: co.id,
                                text: co.nomeFantasia
                            }
                        }), res[1].data))
                    })
        }

    }
</script>