<template>
  <div class="action">
      <Title title="Actions"/>
      <Description :description="description"/>
      <div class="list">
          <ListActions/>
      </div>
  </div>
</template>

<script>
import Title  from '@/components/Title'
import Description  from '@/components/Description'
import ListActions from '@/components/Posts/ListActions'
export default {
    name:'Actions',
    components:{
        Title,
        Description,
        ListActions
    },
    data(){
        return{
            description:"She speaks and leads workshops on web development all over the world. ",
        }
    }
}
</script>

<style>
.list{
    margin-top: 1rem;
}
</style>