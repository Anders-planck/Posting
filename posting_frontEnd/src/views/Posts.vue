<template>
  <div class="vue" :class="className.container">
    <div class="posts" :class="className.posts">
      <div class="postsStatus">
        <PostsStatusView />
      </div>
    
      <div class="postsView">
        <PostsView />
      </div>
    </div>

    <div class="suggestion" v-if="suggestion">
      <Suggestion :user="user" :users="users"/>
    </div>

  </div>
</template>

<script>
  // @ is an alias to /src
  import Actions from "@/components/Posts/Actions"
  import PostsView from "@/components/Posts/PostsView"
  import PostsStatusView from "@/components/Posts/PostsStatusView"
  import ImageView from "@/components/Posts/ImageView"
  import Suggestion from "@/components/Posts/suggestion/Suggestion"

  export default {
    name: 'Posts',
    components: {
      Actions,
      PostsView,
      PostsStatusView,
      ImageView,
      Suggestion
    },
    data() {
      return {
        widthScreen: 1000,
        suggestion: false,
        postsSingleSreen: 650,
        window: null,
        className: {
          container: '',
          posts: '',
        },
        users:[1,2,3,4,5],
      }
    },
    created() {
      window.addEventListener('resize', this.checkScreen)
      window.addEventListener('load', this.verificationLogin)
      this.checkScreen()
    },
    mounted(){
      this.verificationLogin()
      this.$store.dispatch('getLogged')
      this.$store.dispatch('getUser')
    },
    updated(){
      this.verificationLogin()
      this.checkScreen()
    },
    computed:{
      user(){
        return  this.$store.getters.getCurrentUser
      },
      isLogged(){
        return this.$store.getters.getLogged
      }
    },
    methods: {
      checkScreen() {
        this.window = window.innerWidth
    
        if (this.window <= this.widthScreen) {
          this.suggestion = false
          this.className.container = 'single'
          if (this.window <= this.postsSingleSreen)
            this.className.posts = 'postsRisize'
          else
            this.className.posts = ''
        
        } else {
          this.suggestion = true
          this.className.container = ''

        }
      },
      verificationLogin(){
        if (!this.isLogged)
          this.$router.push('/login')
      }
    }
  }
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.vue {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 30px !important;
  width: 1000px;
  margin: 0 auto;
}

.posts {
  width: 600px;

  .postsView {
    width: 100%;
  }

  .postsStatus {
    width: 100%;
    margin-bottom: 1rem;
    background: #ffffff;
  }
}

.suggestion {
  min-width: 300px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: start;
}

.single {
  display: flex;
  width: 100% !important;
  padding: 0 1rem;
  justify-content: center !important;
  align-items: center;
}

.postsRisize {
  width: 100% !important;
  margin: 0 auto;
}

</style>