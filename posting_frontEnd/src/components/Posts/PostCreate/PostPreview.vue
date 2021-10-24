<template>
    <div class="PostPreview">
        <div class="state">
            
        </div>
            <Post :post="post" state="create" class="post"/>
    </div>
</template>

<script>
import Post from '@/components/Posts/Post'
export default {
    name:'PostPreview',
    props:{
        post:{
            type:Object,
            require:true
        }
    },
    components:{
        Post,
    }

}
</script>

<style lang="scss" scoped>
.PostPreview{
    padding: 2rem;
    .post{
        border: 1px solid #000;
    }
}

</style>