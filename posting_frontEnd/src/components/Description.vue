<template>
  <p>{{description}}</p>
</template>

<script>

export default {
    name:'Description',
    props:{
        description:{
            require:true
        }
    },

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400&display=swap');
    p{
        overflow-wrap: break-word;
        line-height:1.1rem;
        font-size:0.8rem;
        font-style: italic;
        font-family: 'Hind Siliguri', sans-serif;
        font-weight: 400;
    }
</style>