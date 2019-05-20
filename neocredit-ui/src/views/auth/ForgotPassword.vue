<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <form @submit.prevent="send">
                                <div class="card-block">
                                    <h1>NeoCredit</h1>
                                    <p class="text-muted">Informe o seu e-mail para recuperar a senha</p>
                                    <div class="input-group mb-3" :class="{ 'has-danger': $v.user.username.$error }">
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                                        <input type="text" class="form-control" placeholder="E-mail" maxlength="100"
                                               v-model="user.username" @input="$v.user.username.$touch()">
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <button type="submit" class="btn btn-primary px-4">Recuperar senha</button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <router-link :to="'login'" tag="button" class="btn btn-link px-0">Cancelar
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card card-inverse py-5 d-md-down-none" style="width:44%">
                            <div class="card-block text-center">
                                <div>br>
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
    import {required, sameAs, minLength, email} from 'vuelidate/lib/validators';
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        name: 'ForgotPassword',
        data() {
            return {
                user: {
                    username: '',
                }
            }
        },
        validations() {
            const vm = this
            return {
                user: {
                    username: {
                        required,
                        email,
                        minLength: minLength(5)
                    }
                }
            };
        },
        methods: {
            send() {
                let vm = this;
                if (this.$v.user.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                this.$loading.show(true);
                let ret = facade.recoverPassword(this.user);
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
