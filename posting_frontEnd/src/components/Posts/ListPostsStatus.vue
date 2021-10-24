<template>
    <div class="statusList">
        <transition-group v-if="status!=0" appear name="listStatus" enter-active-class="animate__animated animate__fadeIn" class="listStatus" tag="div">
            <PostStatus v-for="(s,index)  in status"  :key="index" :status="s" class="mr-3" />
        </transition-group>
    </div>
</template>

<script>
import PostStatus from "@/components/Posts/PostStatus"

export default {
    name:'ListPosts',
    props:{
        status:{
            type:Array,
            require:true
        }
    },
    components:{
        PostStatus,
    },
}
</script>

<style lang="scss" scoped>

.statuslist{
    overflow: hidden;
}

.listStatus{
    width: 100%;
    border: 1px solid #d1d8e0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: hidden;
    padding: 0.5rem;
    border-radius: 5px;
}
</style>
