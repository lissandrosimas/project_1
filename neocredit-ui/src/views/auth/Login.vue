<template>
    <div class="app flex-row align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card-group mb-0">
                        <div class="card p-4">
                            <form @submit.prevent="login">
                                <div class="card-block">
                                    <h5>Seja bem vindo à NeoCredit</h5>
                                    <p class="text-muted">Informe suas credenciais para acessar o sistema</p>
                                    <div class="input-group mb-3" :class="{ 'has-danger': $v.user.username.$error }">
                                        <span class="input-group-addon"><i class="icon-user"></i></span>
                                        <input type="text" class="form-control" placeholder="Usuário" maxlength="100"
                                               v-model="user.username" @input="$v.user.username.$touch()">
                                    </div>
                                    <div class="input-group mb-4" :class="{ 'has-danger': $v.user.password.$error }">
                                        <span class="input-group-addon"><i class="icon-lock"></i></span>
                                        <input type="password" class="form-control" placeholder="Senha"
                                               v-model="user.password" @input="$v.user.password.$touch()">
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <button type="submit" class="btn btn-primary px-4">Entrar</button>
                                        </div>
                                        <div class="col-6 text-right">
                                            <router-link :to="'recuperar-senha'" tag="button" class="btn btn-link px-0">Esqueci minha senha</router-link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card card-inverse py-5 d-md-down-none" style="width:44%">
                            <div class="text-center">
                                <div>
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
    import {required, minLength, email} from 'vuelidate/lib/validators';
    import Facade from '../../facade/facade';
    const facade = new Facade();

    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    username: '',
                    password: ''
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
                    },
                    password: {
                        required,
                        minLength: minLength(5)
                    }
                }
            };
        },
        methods: {
            login() {
                let vm = this; 
                if (this.$v.user.$invalid) {
                    this.$notify.warning('Atenção!', 'Verifique se todos os campos estão preenchidos corretamente.');
                    return;
                }

                this.$loading.show(true);
                
                if (window.userip != undefined) {
                    var ip = window.userip.replace(".", " ");
                    var ip = ip.replace(".", " ");
                    var ip = ip.replace(".", " ");
                }
                let ret = facade.login(this.user, ip);

                ret.then(user => {
                    if (user.indTemporario) {
                        vm.$router.push({name: 'first-access'});
                    } else if (user.idEmpresa === null) {
                        vm.$router.push({name: 'SelectCompany'})
                    } else {
                        vm.$router.push({name: 'home'});
                    }

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

            var s = document.createElement("script");
                s.async = true;
                
                s.onload = function() {
                    s.onload = s.onerror = null;
                    document.body.removeChild(s);
                };
                s.onerror = function() {
                    s.onload = s.onerror = null;
                    document.body.removeChild(s);
                };

                s.src = "https://l2.io/ip.js?var=userip";
                document.body.appendChild(s);
        },
    }
</script>
