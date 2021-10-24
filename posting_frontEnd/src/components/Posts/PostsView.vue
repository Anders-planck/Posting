<template>
  <div class="postsView">
    <!-- <Title title="Events"/> -->
    <!--   <Description :description="description"/> -->
    <ListPosts :posts="posts"/>
  </div>
</template>

<script>
import Title  from '@/components/Title'
import Description  from '@/components/Description'
import ListPosts  from '@/components/Posts/ListPosts'
export default {
  name:'PostsView',
  components:{
    Title,
    Description,
    ListPosts,
  },
  data(){
    return{
      //description:"Estelle is a  author and speaker. She speaks and leads workshops on web development all over the world. ",
    }
  },
  computed:{
    posts(){
      return this.$store.getters.getPosts
    }
  },
  mounted(){
    this.$store.dispatch('getPosts')
  },
  created(){
    this.verificationLogin()
  },
  methods:{
    verificationLogin(){
      if (!this.$store.getters.getLogged)
        this.$router.push('login')
    }
  }
}
</script>

<style>

</style>