import Vue from 'vue';
import Router from 'vue-router';

// Containers
import Full from '@/containers/Full'
import Form from '@/views/Form'

//auth
import Login from '@/views/auth/Login';
import FirstAccess from '@/views/auth/FirstAccess';
import ForgotPassword from '@/views/auth/ForgotPassword';

//Usuarios
import UserList from '@/views/user/List';
import UserForm from '@/views/user/Form';

//Clientes
import ClientList from '@/views/client/List';

//Empresas
import SelectCompany from '@/views/auth/SelectCompany';
import CompanyList from '@/views/company/List';
import CompanyForm from '@/views/company/Form';

//Pedidos
import OrderList from '@/views/order/List';
import OrderForm from '@/views/order/Form';

//Produtos
import ProductList from '@/views/product/List';
import ProductForm from '@/views/product/Form';

//Estoque
import StockList from '@/views/stock/List';

//Importação
import Import from '@/views/import/Import';

//Configuracao
import Configuration from '@/views/configuration/Configuration';

//Log
import Log from '@/views/log/Log';

//Documentacao
import Documentation from '@/views/documentation/Documentation';

//Help
//import Help from '@/views/help/Help';

import Dashboard from '@/views/Dashboard';

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Full,
            redirect: '',
            meta: {
                requiresAuth: true,
                label: 'Home'
            },
            children: [
                {
                    path: 'cadastros',
                    redirect: '/cadastros/usuarios',
                    name: 'Cadastro Usuários',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'usuarios',
                            name: 'list-user',
                            component: UserList,
                            meta: {
                                requiresAuth: true,
                                label: 'Listar Usuários'
                            }
                        },
                        {
                            path: 'usuarios/novo',
                            name: 'new-user',
                            component: UserForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Novo Usuário'
                            }
                        },
                        {
                            path: 'usuarios/:id',
                            name: 'edit-user',
                            component: UserForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Editar Usuário'
                            }
                        }
                    ]
                },
                {
                    path: 'cadastros',
                    redirect: '/cadastros/empresas',
                    name: 'Cadastro Parceiros',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'empresas',
                            name: 'list-company',
                            component: CompanyList,
                            meta: {
                                requiresAuth: true,
                                label: 'Listar Parceiros'
                            }
                        },
                        {
                            path: 'empresas/novo',
                            name: 'new-company',
                            component: CompanyForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Novo Parceiro'
                            }
                        },
                        {
                            path: 'empresas/:id',
                            name: 'edit-company',
                            component: CompanyForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Editar Parceiro'
                            }
                        }
                    ]
                },
                {
                    path: 'cadastros',
                    redirect: '/cadastros/pedidos',
                    name: 'Cadastro Pedidos',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'pedidos/:status',
                            name: 'list-order',
                            component: OrderList,
                            meta: {
                                requiresAuth: true,
                                label: 'Listar Pedidos'
                            }
                        },
                        {
                            path: 'pedidos/:id',
                            name: 'edit-order',
                            component: OrderForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Editar Pedido'
                            }
                        },
                    ]
                },
                {
                    path: 'cadastros',
                    redirect: '/cadastros/clientes',
                    name: 'Cadastro Clientes',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'clientes',
                            name: 'list-clients',
                            component: ClientList,
                            meta: {
                                requiresAuth: true,
                                label: 'Listar Clientes'
                            }
                        },
                    ]
                },
                {
                    path: 'cadastros',
                    redirect: '/cadastros/produtos',
                    name: 'Cadastro Produtos',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'produtos/:ativo/:aprovado/:codigoReferencia',
                            name: 'list-product',
                            component: ProductList,
                            meta: {
                                requiresAuth: true,
                                label: 'Listar Produtos'
                            }
                        },
                        {
                            path: 'produtos/novo',
                            name: 'new-product',
                            component: ProductForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Novo Produto'
                            }
                        },
                        {
                            path: 'produtos/:id',
                            name: 'edit-product',
                            component: ProductForm,
                            meta: {
                                requiresAuth: true,
                                label: 'Editar Produto'
                            }
                        }
                    ]
                },
                {
                    path: 'componentes',
                    redirect: '/componentes/formulario',
                    name: 'Componentes Formulário',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'formulario',
                            name: 'Formulário',
                            component: Form
                        }
                    ]
                },
                {
                    path: 'estoque',
                    redirect: '/estoque/listar',
                    name: 'Produtos',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'listar',
                            name: 'list-stock',
                            component: StockList,
                            meta: {
                                requiresAuth: true,
                                label: 'Listar Estoque'
                            }
                        }
                    ]
                },
                {
                    path: 'configuracao',
                    redirect: '/configuracao/configuracao',
                    name: 'Configuração',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'configuracao',
                            name: 'Configuration',
                            component: Configuration,
                            meta: {
                                requiresAuth: true,
                                label: 'Lista Configurações'
                            }
                        }
                    ]
                },
                {
                    path: 'log',
                    redirect: '/log/log',
                    name: 'Log',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'log',
                            name: 'Log',
                            component: Log,
                            meta: {
                                requiresAuth: true,
                                label: 'Logs'
                            }
                        }
                    ]
                },
                {
                    path: 'documentacao',
                    redirect: '/documentacao/documentacao',
                    name: 'Documentação',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'documentacao',
                            name: 'Documentation',
                            component: Documentation,
                            meta: {
                                requiresAuth: true,
                                label: 'Documentação'
                            }
                        }
                    ]
                },
                {
                    path: 'dashboard',
                    redirect: '/dashboard/dashboard',
                    name: 'Dashboard',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'dashboard',
                            name: 'Dashboard',
                            component: Dashboard,
                            meta: {
                                requiresAuth: true,
                                label: 'Dashboard'
                            }
                        }
                    ]
                },
                {
                    path: 'importacao',
                    redirect: '/importacao/produto',
                    name: 'Importação',
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },
                    children: [
                        {
                            path: 'importacao',
                            name: 'import',
                            component: Import,
                            meta: {
                                requiresAuth: true,
                                label: 'Importação'
                            }
                        }
                    ]
                }
                
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/primeiro-acesso',
            name: 'first-access',
            component: FirstAccess
        },
        {
            path: '/recuperar-senha',
            name: 'recover-password',
            component: ForgotPassword
        },
        {
            path: '/selecionar-empresa',
            name: 'SelectCompany',
            component: SelectCompany
        }
    ],

});


