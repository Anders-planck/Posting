import {
    newPost,
    allPosts,
    registerPost,
} from '@/services/PostsServices.js'
import router from '../../router'
import {
    HTTP
} from '../../services/axios'



export default {
    state: {
        post: null,
        posts: [],
        step: 1,
    },

    mutations: {
        nextStep: state => state.step++,
        backStep: state => state.step--,
        RESET_post: state => state.post = newPost(),
        setStep: (state, payload) => state.step = payload,

        ADD_Post: (state, payload) => {
            state.posts.push(payload)
            router.push('/')
        },
        
        ADD_Comment_Post: (state, payload) => {
            for (let i=0;i<state.posts.length;i++){
                if(state.posts[i].id === payload.post_id){
                    state.posts[i].comments.push(payload.comment)
                    return
                }
            }
        },

        SET_Posts: (state, payload) => {
            state.posts = payload
        },

        SET_Post: (state) => {
            state.post = newPost()
        },
    },
    
    actions: {
        resetPost({commit}) {
            commit('RESET_post')
        },
        nextStep({commit}) {
            commit('nextStep')
        },
        backStep({commit}) {
            commit('backStep')
        },
        
        setStep({commit},data) {
            commit('setStep',data)
        },

        addPost({commit},data) {
            let accessInfo = localStorage.getItem('accessInfo')
            let post=null;
            if (accessInfo != 'undefined' && accessInfo != null) {
                accessInfo = JSON.parse(accessInfo)
                let formData = new FormData()
                Object.entries(data.Post).forEach(
                    ([key, value]) => formData.append(key, value)
                )
                HTTP.post('posts', formData, {
                        headers: {
                            'Authorization': 'Bearer ' + accessInfo.token,
                            'Content-Type': "multipart/form-data",
                        }
                    })
                    .then(response => {
                        post=response.data
                        if (data.tags.length > 0) {
                            data.tags.forEach(tag => {
                                formData = new FormData()
                                Object.entries(tag).forEach(
                                    ([key, value]) => formData.append(key, value)
                                )
                                HTTP.post('posts/' + post.id + '/tags', formData, {
                                        headers: {
                                            'Authorization': 'Bearer ' + accessInfo.token,
                                            'Content-Type': "multipart/form-data",
                                        }
                                    })
                                    .then(response => {
                                        post.tags=response.data
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            })
                        }

                        if (data.images.length > 0) {
                            data.images.forEach(image => {
                                formData = new FormData()
                                const req = {
                                    image: image,
                                    size: image.size,
                                    name: image.name
                                }
                                Object.entries(req).forEach(
                                    ([key, value]) => formData.append(key, value)
                                )
                                HTTP.post('posts/' + post.id + '/images', formData, {
                                        headers: {
                                            'Authorization': 'Bearer ' + accessInfo.token,
                                            'Content-Type': "multipart/form-data",
                                        }
                                    })
                                    .then(response => {
                                        post.images=response.data
                                    })
                                    .catch(error => {
                                        console.log(error)
                                    })
                            })
                        }
                        commit('ADD_Post',post)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },

        getPosts({
            commit
        }) {
            let accessInfo = localStorage.getItem('accessInfo')

            if (accessInfo != 'undefined' && accessInfo != null) {
                accessInfo = JSON.parse(accessInfo)
                HTTP.get('posts', {
                        headers: {
                            'Authorization': 'Bearer ' + accessInfo.token,
                        }
                    })
                    .then(response => {
                        commit('SET_Posts', response.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },

        getPost({commit}){
            commit('SET_Post')
        },
        addCommentPost({commit},data){
            let user = localStorage.getItem('accessInfo')

            if (user != 'undefined' && user != null) {
                user = JSON.parse(user)
                let formData = new FormData()
                Object.entries(data).forEach(
                    ([key, value]) => formData.append(key, value)
                )
                 HTTP.post('posts/' + data.post_id + '/comments', formData, {
                        headers: {
                            'Authorization': 'Bearer ' + user.token,
                            'Content-Type': "multipart/form-data",
                        }
                    })
                    .then(response => {
                        let result={
                            comment:  response.data,
                            post_id: data.post_id
                        }
                        commit('ADD_Comment_Post',result)
                    })
                    .catch(error => console.log(error))
            }
        }
    },

    getters: {
        getPost: state => state.post,
        getPosts: state => state.posts.sort((a, b) => b.id - a.id),
        getStep: state => state.step,
    },
}