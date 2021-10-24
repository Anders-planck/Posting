<template>
  <Connexion status="register"/>
</template>

<script>
import Connexion from '@/components/connection/Connexion'
export default {
    name:'Register',
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
        if (this.isLogged)
          this.$router.push('/')
      }
    }
}
</script>
