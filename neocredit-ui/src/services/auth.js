const LOGIN_URL = "/conta/meu-usuario"
const FIRST_ACCESS = "/conta/primeiro-acesso"
const RECOVER_PASSWORD = "/conta/recuperar-senha"
import BaseService from '@/services/base_service';

export default class AuthService extends BaseService {
    login(user, ip) {
        return new Promise((resolve, reject) => {
            let token = btoa(user.username + ':' + user.password);
            let auth_header = 'Basic ' + token;

            window.axios.get(LOGIN_URL + '/' + ip, {
                headers: {Authorization: auth_header, Accept: 'application/json'}
            }).then(response => {
                if (response.status === 200) {
                    let user = response.data;

                    if (!user.indBloqueado && user.indAtivo) {
                        user.token = token;
                        this.setUser(user);
                        resolve(user);
                    } else {
                        resolve(user);
                    }
                }
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }
    firstAccess(user) {
        return new Promise((resolve, reject) => {
            let userStorage = this.getUser();
            let auth_header = 'Basic ' + userStorage.token;

            window.axios.post(FIRST_ACCESS, user, {
                headers: {Authorization: auth_header, Accept: 'application/json'}
            }).then(response => {
                if (response.status === 200) {
                    userStorage.token = btoa(userStorage.username + ':' + user.password);
                    this.setUser(user);
                }

                resolve(true);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }

    logout() {
        window.localStorage.removeItem('user');
    }

    isLoggedIn() {
        let user = this.getUser();
        return user != undefined && user != null && !user.indBloqueado && !user.indTemporario && user.indAtivo && user.token;
    }

    isAdmin() {
        let user = this.getUser();
        return user.perfil == 'ADMIN';
    }

    setUser(user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
        return JSON.parse(window.localStorage.getItem('user'));
    }

    getUserDetail(user) {
        return axios.get('/api/meu-usuario', {
            headers: {
                'Authorization': 'Basic ' + user.token
            }
        });
    }

    hasPermission(permisssion) {

        let hasPermission = false;

        if (this.getUser() === undefined || this.getUser() === null) {
            return false;
        }

        const permissionList = this.getUser().permissoes;

        return _.indexOf(permissionList, permisssion) !== -1
    }

    hasRole(roles) {

        if (this.getUser() === undefined || this.getUser() === null) {
            return false;
        }

        let hasRole = false

        if (roles instanceof Array) {
            hasRole = _.indexOf(roles, this.getUser().perfil) !== -1
        } else {
            hasRole = this.getUser().perfil === roles
        }

        return hasRole

    }

    static listCompanies() {
        return window.axios.get('/conta/minhas-empresas')
    }

    static changeUserCompanyDefault(companyId) {
        return window.axios.post('/conta/alterar-empresa', {
            idEmpresa: companyId
        })
    }

    static getUserDefaultCompany() {
        return window.axios.get('/conta/empresa-ativa')
    }

    refreshToken() {
        return new Promise((resolve, reject) => {
            const user = getUser();

            window.axios.interceptors.response.use((config) => {
                return config
            }, (err) => {
                return Promise.reject()
            })
            window.axios.get(LOGIN_URL).then(response => {
                resolve(true);
            });
        });
    }

    recoverPassword(user) {
        return new Promise((resolve, reject) => {
            window.axios.post(RECOVER_PASSWORD, user, {
                headers: {Accept: 'application/json'}
            }).then(response => {
                resolve(true);
            }).catch(e => {
                reject(this.getErrors(e));
            });
        });
    }
}
