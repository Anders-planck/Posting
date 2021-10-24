<template>
    <h1 class="title">{{title}}</h1>
</template>

<script>

export default {
    name:'Title',
    props:{
        title:{
            type: String,
            require: true
        },
    }
}
</script>


<style scoped lang="scss">
    *{
        margin: 0;
    }
    .title{
        font-family: 'Hind Siliguri', sans-serif;
        font-weight: bold;
        font-size: 1.6rem;
    }
</style>