<template>
    <div class="commentsNotif">
        <CommentIcon size="25px" class="icon" />
        <span v-if="size <= 1">{{size}} Comment</span>
        <span v-else>{{size}} Comments</span>
    </div>
</template>

<script>
import CommentIcon from '@/components/Icons/CommentIcon'
export default {
    name:'CommentsNotif',
    props:{
        size:Number,
    },
    components:{
        CommentIcon,
    },
    methods:{
        
    }


}
</script>

<style scoped lang="scss">
.commentsNotif{
    display: flex;
    .icon{
        margin-right:5px;
    }
}

</style>