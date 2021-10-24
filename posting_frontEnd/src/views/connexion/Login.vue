<template>
  <Connexion status="login"/>
</template>

<script>
import Connexion from '@/components/connection/Connexion'
export default {
    name:'Login',
    components:{
        Connexion
    },
    created(){
        this.verificationLogin()
    },
    computed:{
      isLogged(){
        return this.$store.getters.getLogged
      }
    },
    mounted(){
      this.$store.dispatch('getLogged')
    },
    methods:{
      verificationLogin(){
        console.log(this.isLogged)
        if (this.isLogged)
          this.$router.push('/')
      }
    }
}
</script>

