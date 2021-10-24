import {HTTP} from '@/services/axios.js'

const newPost = function () {
  return {
    online: false,
    liked:0,
    user: {
      name: 'Planck Anders',
      image_url: 'https://images.unsplash.com/photo-1523380360198-653413ad178b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpb2xldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    title: '',
    description: '',
    images: [],
    tags:[],
  }
}


const registerPost = async function (data) {
  console.log(data)
  let accessInfo = localStorage.getItem('accessInfo')
  if (accessInfo != 'undefined' && accessInfo != null) {
    accessInfo = JSON.parse(accessInfo)
    let formData = new FormData()
    Object.entries(data.Post).forEach(
      ([key, value]) => formData.append(key, value)
    )
    await HTTP.post('posts', formData, {
        headers: {
          'Authorization': 'Bearer ' + accessInfo.token,
          'Content-Type': "multipart/form-data",
        }
      })
      .then(response => {
        if(data.tags.length>0){
          data.tags.forEach(tag =>{
            formData = new FormData()
            Object.entries(tag).forEach(
              ([key, value]) => formData.append(key, value)
            )
            HTTP.post('posts/'+response.data.id+'/tags',formData,{
              headers: {
                'Authorization': 'Bearer ' + accessInfo.token,
                'Content-Type': "multipart/form-data",
              }
            })
            .then(response => {
              console.log(response.data)
            })
            .catch(error => {
              console.log(error)
            })
          })
        }

        if(data.images.length>0){
          data.images.forEach(image =>{
            formData = new FormData()
            const req={
              image: image,
              size: image.size,
              name: image.name
            }
            Object.entries(req).forEach(
              ([key, value]) => formData.append(key, value)
            )
            HTTP.post('posts/'+response.data.id+'/images',formData,{
              headers: {
                'Authorization': 'Bearer ' + accessInfo.token,
                'Content-Type': "multipart/form-data",
              }
            })
            .then(response => {
              console.log(response.data)
            })
            .catch(error => {
              console.log(error)
            })
          })
        }
      })
      .catch(error => {
        console.log(error)
      })

    GetAllPosts()
    return
  }
}

const GetAllPosts = async function () {
  let accessInfo = localStorage.getItem('accessInfo')
  
  if (accessInfo!='undefined' && accessInfo!=null) {
    accessInfo=JSON.parse(accessInfo)
    await HTTP.get('posts',{
      headers:{
        'Authorization': 'Bearer ' + accessInfo.token,
      }
    })
    .then( response => {
      localStorage.setItem('Posts',JSON.stringify(response.data))
    })
    .catch(error => {
      console.log(error)
    })
  }

}

const allPosts = function(){
  
  GetAllPosts()
  let posts= localStorage.getItem('Posts')
  if(posts!='undefined' && posts!=null) {
    return JSON.parse(posts)
  }
  return []
}

export {
  newPost,
  allPosts,
  registerPost,
}