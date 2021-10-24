<template>
  <div class="connexion">
      <div class="block">
        <div class="img">
          <img src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"/> 
      </div>
      <div class="content">
          <div  v-if="status=='login'" class="login">
              <Form status="login" @changeMode="ChangeMode" @submit="Submit"/>
          </div>
          <div v-if="status=='register'" class="register">

              <Form status="register" @changeMode="ChangeMode" @submit="Submit"/>
          </div>
      </div>
      </div>
      
  </div>
</template>

<script>
import Form from "@/components/connection/Form"
export default {
    name:'Connexion',
    props:{
        status:{ 
            type:String,
            require:false,
            default: 'register'
        }
    },
    name:"Connexion",
    components:{
        Form
    },
    
    methods:{
        ToogleMode(){
            if(this.status=="login")
                this.$router.push('register')
            else
                this.$router.push('login')
        },
        
        ChangeMode(mode){
            this.$router.push(mode)
        },
        Submit(payload){
            if(this.status=='register'){
              this.$store.dispatch('RegisterUser',payload)
              
            }else{
                this.$store.dispatch('LoginUser',payload)
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.connexion{
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    align-items:center;
    justify-content: center;
    

    .block{
        border: 1px solid #d1d8e0;
        border-radius: 5px;
        width: 800px;
        height: 60vh;
        display: flex;
        align-items:center;
        justify-content: center;

        .img{
        width: 50%;
        height:100%;
        img{
            width: 100%;
            height:100%;
            object-fit: cover;
        }
        }
    .content{
        background: #fff;
        width: 50%;
        height:100%;  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }
    }
    
}
</style>
