<template>
  <div class="userSuggestion">
        <div class="title">
          <span>
            Tips for you
          </span>

          <span>
            View all
          </span>
        </div>

        <div class="listUsers">
          <div v-for="(x,index) in  users" :key="index"  class="info users">
            <div class="info1">

              <div class="foto">
                <img v-if="user.avatar_url" :src="user.avatar_url" alt="">
              </div>
              <div class="names">
                <span>{{user.name}}</span>
                <span>{{user.username}}</span>
              </div>
            </div>

            <div class="link">
              follow
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:"UsersSuggestion",
    props:{
        users:{
            type:Array,
            require:true
        },
        user:{
            type:Object,
            require:false
        }
    }

}
</script>

<style scoped lang="scss">
.foto {
    min-width: 60px;
    min-height: 60px;
    max-width: 60px;
    max-height: 60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d1d8e0;
    background: #f2f5f8c4;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .names {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    span {
      display: block;
      width: 100%;
      font-size: 13px;
      text-align: left;
      &:last-child {
        color: #35353579;
      }
    }
  }



  .info {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', cursive;
  }
  
  .users{
    height: 50px !important;

    .info1{
      justify-content: center !important;
      
      .names{
       font-size: 11px;
       span{
         &:first-child{
           font-size: 13px !important;
         }
         &:last-child{
           font-size: 11px !important;
         }

       }
       .link{
         font-size: 11px !important;
       } 
      }
      .foto{
        margin-right: 2px;
        min-width: 40px;
        min-height: 40px;
        max-width: 40px;
        max-height: 40px;
        width: 40px;
        height: 40px;
      }
    }

  }

  .info1 {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', cursive;
  }

  .link {
    font-size: 12px;
    color: #0b76f1;
    text-transform: capitalize;
  }

  ///todo: suggestion users

  .userSuggestion {
    height: 270px;
    min-width: 270px;
    max-height: 270px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #4c4d4d;
      font-family: 'Roboto', cursive;

      span {
        &:first-child {
          font-size: 13px;
          color: #35353579;
          font-weight: bold;
        }
      }
    }
  }

</style>