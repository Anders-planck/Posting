<template>
  <div class="part">
      <InfoUserCurrent :user="user"/>
      <UsersSuggestion :users="users" :user="user"/>
  </div>
</template>

<script>
import UsersSuggestion from '@/components/Posts/suggestion/UsersSuggestion'
import InfoUserCurrent from '@/components/Posts/suggestion/InfoUserCurrent'
export default {
    name:"Suggestion",
    props:{
        users:{
            type:Array,
            require:true
        },
        user:{
            type:Object,
            require:true
        }
    },
    components: { 
        UsersSuggestion,
        InfoUserCurrent
    },

}
</script>

<style lang="scss" scope>
.part{
    width: 100%;
}
</style>