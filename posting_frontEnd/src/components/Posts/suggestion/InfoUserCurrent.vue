<template>
  <div class="info">
        <div class="info1">

          <div class="foto">
            <img :src="user.avatar_url" alt="" v-if="user.avatar_url!==null">
          </div>
          <div class="names">
            <span>{{user.name}}</span>
            <span>{{user.username}}</span>
          </div>
        </div>

        <div class="link">
          change Account
        </div>
      </div>
</template>

<script>
export default {
name:"InfoUserCurrent",
props:{
  user:{
    type:Object,
    require:true
  }
}
}
</script>

<style lang="scss" scoped>
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
    margin-left: 5px !important;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', cursive;
  }
  
  
  .info1 {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Roboto', cursive;
  }

  .link {
    font-size: 12px;
    margin-bottom: 15px;
    color: #0b76f1;
    text-transform: capitalize;
    cursor: pointer;
  }

  
</style>