<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <form @submit.prevent="firstAccess">
                                <div class="card-block">
                                    <h1>NeoCredit</h1>
                                    <p class="text-muted">Informe uma nova senha de acesso</p>

                                    <dw-ipassword v-model="user.senha"
                                                  @input="$v.user.senha.$touch()"
                                                  ref="senha"
                                                  placeholder="Senha"
                                                  :lower="true"
                                                  :upper="true"
                                                  :special="true"
                                                  :length="6"
                                                  class="mb-1"
                                                  :class="{ 'has-danger': $v.user.senha.$error }"
                                                  :helper="true"
                                                  slot="input"></dw-ipassword>

                                    <dw-ipassword v-model="user.repetirSenha"
                                                  @input="$v.user.repetirSenha.$touch()"
                                                  ref="repetirSenha"
                                                  placeholder="Repetir Senha"
                                                  :lower="true"
                                                  :upper="true"
                                                  :special="true"
                                                  :length="6"
                                                  class="mb-4"
                                                  :class="{ 'has-danger': $v.user.repetirSenha.$error }"
                                                  :helper="false"
                                                  slot="input"></dw-ipassword>

                                    <div class="row">
                                        <div class="col-6">
                                            <button type="submit" class="btn btn-primary px-4">Alterar Senha</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card card-inverse py-5 d-md-down-none" style="width:44%">
                            <div class="card-block text-center">
                                <div>
                                    <br><br><br>
                                    <img src="/static/images/neocredit-logo.png" alt="NeoCredit" heigth="150" width="150">
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
    import {required, sameAs, minLength} from 'vuelidate/lib/validators';
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    senha: '',
                    repetirSenha: ''
                }
            }
        },
        validations() {
            const vm = this
            return {
                user: {
                    senha: {
                        required,
                        minLength: minLength(6),
                        isOk: (v) => {
                            return vm.$refs.senha.isValid()
                        }
                    },
                    repetirSenha: {
                        sameAsPassword: sameAs('senha')
                    }
                }
            };
        },
        methods: {
            firstAccess() {
                let vm = this;
                if (this.$v.user.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                this.$loading.show(true);
                let ret = facade.firstAccess(this.user);
                ret.then(user => {
                    vm.$router.push({name: 'Login'});
                    vm.$loading.show(false);
                }).catch(e => {
                    e.forEach((item) => {
                        this.$notify.error(item.field, item.message);
                    });
                    this.$loading.show(false);
                });
            },
        },
        created () {
            if (facade.isLoggedIn()) {
                this.$router.push({name: 'home'});
            }
        },
    }
</script>
