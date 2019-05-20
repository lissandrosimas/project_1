<template>
    <navbar>
        <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
            &#9776;</button>
        <a class="navbar-brand" href="/#/">
            <img src="/static/images/neocredit-logo.png" alt="NeoCredit" height="40" width="40">
        </a>
        <ul class="nav navbar-nav d-md-down-none">
            <li class="nav-item">
                <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarMinimize">&#9776;</a>
            </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
            <dropdown style="cursor: pointer">
                <span slot="button">
                    <!--<img src="/static/images/user.jpg" class="img-avatar" :alt="user.nome">-->
                    <i class="icon-user"></i><span class="d-md-down-none">
                      {{ empresaAtiva.nomeFantasia }} - {{ user.nome }}
                    </span>
                </span>
                <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" @click="changeCompany" v-if="isUsuarioRepresentante()"><i class="icon-briefcase"></i> Trocar Empresa</a>
                    <a class="dropdown-item" @click="logout"><i class="fa fa-lock"></i> Sair</a>
                </div>
            </dropdown>
            <li class="nav-item d-md-down-none">
                <a class="nav-link navbar-toggler aside-menu-toggler" href="#" @click="asideToggle">&#9776;</a>
            </li>
        </ul>
    </navbar>
</template>
<script>
    import navbar from './Navbar'
    import {dropdown} from 'vue-strap'
    import Facade from '@/facade/facade';
    const facade = new Facade();

    export default {
        name: 'dwheader',
        components: {
            navbar,
            dropdown
        },
        data() {
            return {
                user: {},
                empresaAtiva: {}
            }
        },
        methods: {
            logout () {
                facade.logout()
                this.$router.push({name: 'Login'})
            },
            changeCompany() {
                this.$router.push({name: 'SelectCompany'})
            },
            sidebarToggle (e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-hidden')
            },
            sidebarMinimize (e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-minimized')
            },
            mobileSidebarToggle (e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-mobile-show')
            },
            asideToggle (e) {
                e.preventDefault()
                document.body.classList.toggle('aside-menu-hidden')
            },
            isUsuarioRepresentante() {
                return facade.getAuthUser().tipo == 2
            }
        },
        created() {
            this.user = facade.getAuthUser();
            Facade.getUserDefaultCompany().then(res => this.empresaAtiva = res.data)
        }
    }
</script>
