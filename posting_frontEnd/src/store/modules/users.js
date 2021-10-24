import router from '../../router'
import {Axios,HTTP} from "@/services/axios.js"

export default {
    state: {
        logged: false,
        currentUser: null,
        users: [],
    },
    mutations: {
        Register: (state, payload) => {
            state.currentUser = payload
            localStorage.setItem('user', JSON.stringify(state.currentUser))
            router.push('login')
        },
        Login: (state, payload) => {
            localStorage.setItem('accessInfo', JSON.stringify(payload))
            state.logged=true
            router.push('/')
        },
        SET_User(state,payload){
            state.currentUser=payload
        },
        SET_Logged(state,payload){
            state.logged=payload
        }

    },
    actions: {
        RegisterUser({commit},data) {
            HTTP.post('users', data)
            .then(response => {
                commit('Register',response.data)
            })
            .catch( error => {console.log(error)})
        },

        LoginUser  ({commit},data) {
            Axios.post('auth/login', data)
            .then(response => {
                commit('Login',response.data)
            })
            .catch(error => {
                console.log(error)
            })
        },
        getUser({commit}){
            let accessInfo = localStorage.getItem('accessInfo')

            if (accessInfo != 'undefined' && accessInfo != null) {
                accessInfo = JSON.parse(accessInfo)
            
                HTTP.get('/users/' + accessInfo.user_id, {
                    headers: {
                        'Authorization': 'Bearer ' + accessInfo.token
                    }
                })
                .then(response => {
                    commit('SET_User',response.data)
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        getLogged({commit}){
            let accessInfo = localStorage.getItem('accessInfo')
            let data=false;
            if (accessInfo != 'undefined' && accessInfo != null) {
                accessInfo = JSON.parse(accessInfo)

                let d=parseInt(accessInfo.exp.split(' ')[0].split('-')[0])
                let m=parseInt(accessInfo.exp.split(' ')[0].split('-')[1])
                let y=parseInt(accessInfo.exp.split(' ')[0].split('-')[2])
                let h=parseInt( accessInfo.exp.split(' ')[1].split(':')[0])
                let mm=parseInt( accessInfo.exp.split(' ')[1].split(':')[1])
            
            
                let exp =  new Date(y, m, d, h, mm)
                let now = new Date()


                if (accessInfo.token != '' && now < exp) {
                    data=true
                }
            }
            commit('SET_Logged',data)
        }
    },

    getters: {
        getLogged: state => state.logged,
        getCurrentUser: state => state.currentUser,
        getUsers: state=> state.users,
    },
}