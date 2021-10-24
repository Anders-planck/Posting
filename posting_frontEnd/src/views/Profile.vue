<template>
  <div class="vue">
    <div class="info_profilo">
      <div class="image">
        <img class="img" src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="">
      </div>
      <div class="data_profile">
        <div class="part_1 part">
          <span class="name">{{user.name}}</span>
          <button class="btn">modifica profilo</button>
          <ParamsIcon/>
        </div>
        <div class="part_2 part">
          <span> <span class="number">10</span> posts</span>
          <span> <span class="number">10</span> followers</span>
          <span> <span class="number">10</span> profili seguiti</span>
        </div>
        <div class="part_3 part">
          <span class="name">{{user.username}}</span>
          <p class="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus,
            totam pariatur. Officiis totam expedita corrupti quaerat, at iste 
            ut exercitationem.
          </p>
        </div>
      </div>
    </div>

    <div class="navigation">
      <div class="item" v-for="(link ,index ) in links" :key="index" :class="colorLink(link)" @click="changeActiveLink(link)">{{link.name}}</div>
    </div>

    <div class="content_nav">
      <div class="content_nav_item" v-if="LinkActive==='posts'">Posts</div>
      <div class="content_nav_item" v-if="LinkActive==='images'">Images</div>
      <div class="content_nav_item" v-if="LinkActive==='liked'">Liked</div>
      <div class="content_nav_item" v-if="LinkActive==='salvato'">Salvato</div>
    </div>

  </div>
</template>

<script>
import ParamsIcon from "@/components/Icons/ParamsIcon"
export default {
name:'Profile',
components:{
  ParamsIcon,
},
data(){
  return{
    LinkActive:'posts',
    links:[
      {
        name:'posts',
      },
      {
        name:'images',
      },
      {
        name:'liked',
      },
      {
        name:'salvato',
      },

    ]
  }
},
created(){
  this.$store.dispatch('getUser')
  this.$store.dispatch('getLogged')
},
mounted(){
  this.verificationLogin()
},
computed:{
  user(){
    return this.$store.getters.getCurrentUser
  },
  isLogged(){
    return this.$store.getters.getLogged
  }
},
methods:{
  verificationLogin(){
    if(!this.isLogged){
      this.$router.push('/login')
    }
  },
  colorLink(link){
    if(link.name==this.LinkActive)
      return 'activeLink'
    else return ''
  },
  changeActiveLink(link){
    this.LinkActive=link.name
  }
}

}
</script>

<style lang="scss" scope>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');

.vue {
    width: 1000px;
    margin: 0 auto;
}

.content_nav{
  width: 100%;
  height: 40vh;
  .content_nav_item{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
  }

}

.navigation{
  width: 100%;
  border-top:1px solid #d1d8e0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  .item{
    padding-top: 15px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 5rem;
    cursor: pointer;
    color: #d1d8e0;
  }

  .activeLink{
    border-top:1px solid #000;
    color: #000;
  }
  &:last-child{
    margin-right: 0;
  }
}

.info_profilo {

  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .image {
    width: 230px;
    height: 230px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    .img {
      object-fit: cover;
      width: 90%;
      height: 90%;
      border-radius: 50%;
    }
  }


  .data_profile {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    width: 70%;

    .part {
      width: 70%;
      font-family: 'Montserrat', sans-serif;
      margin-top: 10px;
    }

    .part_3 {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: flex-start;

      .name {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.3rem;
        font-weight: 700;
      }

      .description {
        font-size: 1rem;
        overflow-wrap: break-word;
      }
    }

    .part_2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 4rem;

      span {
        text-transform: capitalize;
        font-weight: 500;

        .number {
          font-weight: 700;
          font-size: 1.1rem;
          margin-right: 3px;
        }
      }
    }

    .part_1 {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        font-family: 'Montserrat', sans-serif;
        font-size: 2.3rem;
      }

      .btn {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
        padding: 5px 7px;
        font-weight: 700;
        border: 1px solid #d1d8e0;
        text-transform: capitalize;
      }
    }
  }
}


</style>