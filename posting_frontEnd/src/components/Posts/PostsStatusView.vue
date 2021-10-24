<template>
  <div class="postsView">
    <!-- <Title title="Events"/> -->
    <!--   <Description :description="description"/> -->
    <ListPostsStatus v-if="status.length !=0" :status="status"/>
  </div>
</template>

<script>
import ListPostsStatus  from '@/components/Posts/ListPostsStatus'

export default {
  name:'PostsStatusView',
  components:{

    ListPostsStatus,
  },
  
  computed:{
    
    status(){
      return this.$store.getters.getStatus
    }
  }
}
</script>

<style>
  
</style>