<template>
<div>
  <p v-html="description"></p>
</div>
</template>

<script>

export default {
    name:'Description',
    props:{
        description:{
            type:String,
            require:true
        },

    },

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap');
    p{
        overflow-wrap: break-word;
        font-size:1rem;
        padding: 0.5rem;
        // font-family: 'Hind Siliguri', sans-serif;
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
        font-style: normal;
        
    }
</style>