<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
            <ul class="nav">
                <li class="nav-item">
                    <router-link :to="'/Dashboard'" class="nav-link"><i class="icon-speedometer"></i>
                        Dashboard
                    </router-link>
                </li>
                <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/cadastros/empresas'}" disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO'], permissions: 'parceiros'}">
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-briefcase"></i>
                        Parceiros
                    </div>
                    <ul class="nav-dropdown-items">   
                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO'], permissions: 'criar-parceiro'}">                               
                            <router-link :to="'/cadastros/empresas/novo'" class="nav-link" exact><i
                                    class="icon-plus"></i>
                                Criar
                            </router-link>                            
                        </li>
                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO'], permissions: 'parceiros'}">                       
                            <router-link :to="'/cadastros/empresas'" class="nav-link" exact><i
                                    class="icon-list"></i>
                                Listar
                            </router-link>
                        </li>
                    </ul>
                </router-link>
                <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/cadastros/usuarios'}" disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'usuarios'}">
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-people"></i>
                        Usuários
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'criar-usuario'}">
                            <router-link :to="'/cadastros/usuarios/novo'" class="nav-link" exact><i
                                    class="icon-plus"></i>
                                Criar
                            </router-link>
                        </li>

                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'usuarios'}">
                            <router-link :to="'/cadastros/usuarios'" class="nav-link" exact><i
                                    class="icon-list"></i>
                                Listar
                            </router-link>
                        </li>
                    </ul>
                </router-link> 
                <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/cadastros/produtos'}" disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'produtos'}">
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-bag"></i>
                        Produtos
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'criar-produto'}">
                            <router-link :to="'/cadastros/produtos/novo'" class="nav-link" exact><i
                                    class="icon-plus"></i>
                                Criar
                            </router-link>
                        </li>

                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'produtos'}">
                            <router-link :to="{ name: 'list-product', params: { ativo: 1 , aprovado: 0, codigoReferencia: undefined }}" class="nav-link" exact><i
                                    class="icon-list"></i>
                                Listar
                            </router-link>
                        </li>

                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'estoque'}">
                            <router-link :to="'/estoque/listar'" class="nav-link" exact><i
                                    class="icon-shuffle"></i>
                                Estoque
                            </router-link>
                        </li>
                    </ul>
                </router-link>  
                <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/cadastros/pedidos'}" disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'pedidos'}">
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-tag"></i>
                        Pedidos
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'produtos'}">
                            <router-link :to="{ name:'list-order', params: { status: undefined }}" class="nav-link" exact><i
                                    class="icon-list"></i>
                                Listar
                            </router-link>
                        </li>
                    </ul>
                </router-link>
                <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/cadastros/clientes'}" disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'clientes'}">
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-user"></i>
                        Clientes
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item" v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO']}">
                            <router-link :to="'/cadastros/clientes'" class="nav-link" exact><i
                                    class="icon-list"></i>
                                Listar
                            </router-link>
                        </li>
                    </ul>
                </router-link>          
                <li class="nav-item">
                    <router-link :to="'/importacao/importacao'" class="nav-link" exact disabled
                     v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'importacoes'}"><i class="icon-bag"></i>
                        Importação
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/configuracao/configuracao'" class="nav-link" exact disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'configuracao'}"><i class="icon-settings"></i>
                        Configurações
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/log/log'" class="nav-link" exact disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'log'}"><i class="fa fa-exchange"></i>
                        Logs
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/documentacao/documentacao'" class="nav-link" exact disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'documentacao'}"><i class="fa fa-file"></i>
                        Documentação
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="'/help/help'" class="nav-link" exact disabled
                             v-dw-authorized="{ roles: ['ADMIN', 'ADMIN-USUARIO', 'USUARIO'], permissions: 'documentacao'}"><i class="fa fa-question-circle"></i>
                        Central de Ajuda
                    </router-link>
                </li>
                <router-link tag="li" class="nav-item nav-dropdown" :to="{ path: '/componentes'}" style="display: none;">
                    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="icon-settings"></i>
                        Componentes
                    </div>
                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <router-link :to="'/componentes/formulario'" class="nav-link" exact><i
                                    class="icon-note"></i>
                                Formulário
                            </router-link>
                        </li>
                    </ul>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        methods: {
            handleClick (e) {
                e.preventDefault()
                e.target.parentElement.classList.toggle('open')
            }
        }
    }
</script>

<style lang="css">
    .nav-link {
        cursor: pointer;
    }

    .sidebar {
        padding: 0;
        overflow: hidden;
        color: #fff;
        background: #1D5C88;
    }

    .sidebar .nav .nav-item .nav-link.active, .sidebar .nav .nav-item .navbar .active.dropdown-toggle, .navbar .sidebar .nav .nav-item .active.dropdown-toggle {
        background: #1D5C88;
    }

    .sidebar .nav .nav-item .nav-link:hover, .sidebar .nav .nav-item .navbar .dropdown-toggle:hover, .navbar .sidebar .nav .nav-item .dropdown-toggle:hover {
        color: #fff !important;
        background: #BEBFC1 !important;
    }
    
    .sidebar-minimized .sidebar .nav .nav-item ul {
        background: #1D5C88;
    }

    .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open {
        background: #1D5C88;
    }

    .sidebar .nav .nav-item .nav-link.active i, .sidebar .nav .nav-item .navbar .active.dropdown-toggle i, .navbar .sidebar .nav .nav-item .active.dropdown-toggle i {
        color: #b0bec5;
    }

    .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open > .nav-link i, .sidebar-minimized .sidebar .nav .navbar .nav-item.nav-dropdown.open > .dropdown-toggle i, .navbar .sidebar-minimized .sidebar .nav .nav-item.nav-dropdown.open > .dropdown-toggle i {
        color: #b0bec5;
    }
</style>
