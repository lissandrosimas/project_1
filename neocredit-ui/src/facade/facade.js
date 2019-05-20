import UserService from '../services/user';
import CompanyService from '../services/company';
import OrderService from '../services/order';
import ClientService from '../services/client';
import ProductService from '../services/product';
import StockService from '../services/stock';
import ProfileService from '../services/profile';
import ModuleService from '../services/module';
import AuthService from '../services/auth';
import ConfigurationService from '../services/configuration';
import AlertService from '../services/alert';
import DashboardService from '../services/dashboard';
import LogService from '../services/log';
import HelpService from '../services/help';

export default class Facade {
    userService = new UserService();
    companyService = new CompanyService();
    orderService = new OrderService();
    clientService = new ClientService();
    productService = new ProductService();
    stockService = new StockService();
    profileService = new ProfileService();
    moduleService = new ModuleService();
    authService = new AuthService();
    configurationService = new ConfigurationService();
    alertService = new AlertService();
    dashboardService = new DashboardService();
    logService = new LogService();

    //AUTH
    login(user, ip) {
        return this.authService.login(user, ip);
    }

    firstAccess(user) {
        return this.authService.firstAccess(user);
    }

    recoverPassword(user) {
        return this.authService.recoverPassword(user);
    }

    logout() {
        this.authService.logout();
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    isAdmin() {
        return this.authService.isAdmin();
    }

    setUser(user) {
        this.authService.setUser(user);
    }

    getAuthUser() {
        return this.authService.getUser();
    }

    getUserDetail(user) {
        return this.authService.getUserDetail(user);
    }

    refreshToken() {
        return this.authService.refreshToken();
    }

    hasPermission(permission) {
        return this.authService.hasPermission(permission)
    }

    hasRole(roles) {
        return this.authService.hasRole(roles)
    }

    //USUARIO
    listUser(params) {
        return this.userService.list(params);
    }

    getUser(id) {
        return this.userService.get(id);
    }

    createUser(model) {
        return this.userService.create(model);
    }

    updateUser(model) {
        return this.userService.update(model);
    }

    deleteUser(id) {
        return this.userService.delete(id);
    }

    exportUser(params) {
        this.userService.export(params);
    }

    //EMPRESA
    listCompany(params) {
        return this.companyService.list(params);
    }

    getCompany(id) {
        return this.companyService.get(id);
    }

    createCompany(model) {
        return this.companyService.create(model);
    }

    updateCompany(model) {
        return this.companyService.update(model);
    }

    deleteCompany(id) {
        return this.companyService.delete(id);
    }
    exportCompany(params) {
        this.companyService.export(params);
    }
    //PEDIDO
    listOrder(params) {
        return this.orderService.list(params);
    }

    changeOrderStatus(params) {
        return this.orderService.changeStatus(params);
    }

    getOrder(id) {
        return this.orderService.get(id);
    }

    createOrder(model) {
        return this.orderService.create(model);
    }

    updateOrder(model) {
        return this.orderService.update(model);
    }

    deleteOrder(id) {
        return this.orderService.delete(id);
    }

    updateStatusOrder(id, status) {
        return this.orderService.updateStatus(id, status);
    }

    exportOrder(params) {
        return this.orderService.export(params);
    }

    //CLIENTE
    searchClient(params) {
        return this.clientService.search(params);
    }

    listClient(params) {
        return this.clientService.list(params);
    }

    getClient(id) {
        return this.clientService.get(id);
    }

    createClient(model) {
        return this.clientService.create(model);
    }

    updateClient(model) {
        return this.clientService.update(model);
    }

    deleteClient(id) {
        return this.clientService.delete(id);
    }

    //PRODUTO
    listProduct(params) {
        return this.productService.list(params);
    }

    getProduct(id) {
        return this.productService.get(id);
    }

    static getProductMedia(id) {
        return ProductService.getMedias(id);
    }

    removeProductMedia(id, filename) {
        return this.productService.removeProductMedia(id, filename)
    }

    static downloadProductMedia(id, filename) {
        return ProductService.downloadProductMedia(id, filename)
    }

    createProduct(model) {
        return this.productService.create(model);
    }

    updateProduct(model) {
        return this.productService.update(model);
    }

    deleteProduct(id) {
        return this.productService.delete(id);
    }

    importProduct(file) {
        return this.productService.importProduto(file);
    }

    importEstoque(file) {
        return this.productService.importEstoque(file);
    }

    importPreco(file) {
        return this.productService.importPreco(file);
    }

    importPrecoEstoque(file) {
        return this.productService.importPrecoEstoque(file);
    }

    updateProductPrices(model) {
        return this.productService.updatePrices(model);
    }

    updateProductStock(model) {
        return this.productService.updateStock(model);
    }

    exportProduct(params) {
        this.productService.export(params);
    }

    exportManagementProduct(params) {
        this.productService.exportManagement(params);
    }

    movimentacao(params) {
        return this.productService.movimentacao(params);
    }

    aprovar(params) {
        return this.productService.aprovar(params);
    }

    reprovar(ids, motivo) {
        return this.productService.reprovar(ids, motivo);
    }
    //ESTOQUE
    importStock(file) {
        return this.stockService.import(file);
    }

    //PERFIL
    listProfile() {
        return this.profileService.list();
    }

    //MÓDULO
    listModule() {
        return this.moduleService.list();
    }

    // TROCAR EMPRESA
    static listUserCompanies() {
        return AuthService.listCompanies()
    }

    static changeUserCompanyDefault(companyId) {
        return AuthService.changeUserCompanyDefault(companyId)
    }

    static getUserDefaultCompany() {
        return AuthService.getUserDefaultCompany()
    }
    //CONFIGURACAO
    updateConfiguration(model) {
        return this.configurationService.update(model);
    }

    getConfiguration(id) {
        return this.configurationService.get(id);
    }

    reseteToken() {
        return this.configurationService.reseteToken();
    }

    //ALERTA
    updateAlert(model) {
        return this.alertService.update(model);
    }

    getAlert() {
        return this.alertService.get();
    }

    //DASHBOARD
    dashboardPedidos(dataInicial, dataFinal) {
        return this.dashboardService.pedidos(dataInicial, dataFinal);
    }

    dashboardProdutos() {
        return this.dashboardService.produtos(); 
    }

    dashboardTopVendas() {
        return this.dashboardService.topVendas(); 
    }

    dashboardPedidosLabel() {
        return this.dashboardService.pedidosLabel(); 
    }

    dashboardPedidosAprovados() {
        return this.dashboardService.pedidosAprovados(); 
    }

    dashboardPedidosIncluidos() {
        return this.dashboardService.pedidosIncluidos(); 
    }

    listLogs(params) {
        return this.logService.list(params); 
    }

    listLogsProduto(params) {
        return this.logService.listLogsProduto(params); 
    }

    downloadJson(json) {
        return this.logService.downloadJson(json); 
    }

    downloadManual(manual) {
        return this.helpService.download(manual); 
    }

    uploadManual(manual) {
        return this.helpService.upload(manual); 
    }
}

