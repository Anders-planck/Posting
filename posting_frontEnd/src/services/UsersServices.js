import {
  Axios,
  HTTP
} from "@/services/axios.js"


const RegisterUser = async function (data) {
  let result = null;
  try {
    await Axios.post('users', data)
      .then(response => {
        result = response.data
      })
    return result
  } catch (error) {
    console.log(error)
  }
}
const LoginUser = async function (data) {
  let result = null
  try {
    await Axios.post('auth/login', data)
      .then(response => {
        result = response.data
      })
    return result
  } catch (error) {
    console.log(error)
  }
}

const SetUser = async function (id, token) {
  await HTTP.get('/users/' + id, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data))
    })
    .catch(e => {
      console.log(e)
    })
}


const GetAccessInfo = function () {
  let accessInfo = localStorage.getItem('accessInfo')
  if (accessInfo != 'undefined' && accessInfo != null) {
    accessInfo = JSON.parse(accessInfo)
    let d=parseInt(accessInfo.exp.split(' ')[0].split('-')[0])
    let m=parseInt(accessInfo.exp.split(' ')[0].split('-')[1])
    let y=parseInt(accessInfo.exp.split(' ')[0].split('-')[2])
    let h=parseInt( accessInfo.exp.split(' ')[1].split(':')[0])
    let mm=parseInt( accessInfo.exp.split(' ')[1].split(':')[1])

    console.log(d,m,y,h,mm)

    let exp =  new Date(y, m, d, h, mm)
    let now = new Date()
    console.log(now , 'exp :',  exp)
    console.log('comprare date',now < exp)

    if (accessInfo.token != '' && now < exp) {
      SetUser(accessInfo.user_id, accessInfo.token)
      return true
    }

    if(accessInfo.token == '' || now > exp){
      alert('qua')
      reject()
      return false
    }
    
  }
  else{
    reject()
    return false
  }
}

const reject = function () {
  localStorage.removeItem('accessInfo')
  localStorage.removeItem('user')
  localStorage.removeItem('posts')
}


const GetUser = function () {
  let user = localStorage.getItem('user')
  if (user !== 'undefined' && user != null) {
    return JSON.parse(user)
  }
  return null
}



export {
  RegisterUser,
  LoginUser,
  GetUser,
  GetAccessInfo
}