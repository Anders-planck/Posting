<template>
    <div class="FooterActions">
        <ul>
            <div class="options">
                <li class="link" @click="toogleStateLike">
                    <LikeIcon size="25px" :color="getColor" :fill="getFill" />
                </li>
                <li class="link">
                    <ShareIcon size="25px" />
                </li>
                <li class="link" @click="toogleStateComments">
                    <CommentsNotif :size="getSize" />
                </li>
            </div>
            <div class="infor">
                {{at}}
            </div>
        </ul>
    </div>
</template>

<script>
import LikeIcon from '@/components/Icons/LikeIcon'
import ShareIcon from '@/components/Icons/ShareIcon'
import CommentsNotif from '@/components/Posts/CommentsNotif'


export default {
    name:'PostFooter',
    props:{
        reply:{
            type:Array,
            require:true
        },
        at:{
            type:String,
            require:true
        },
        like:{
            type:Number,
            require:true
        }
    },
    created(){
        this.getLike()
    },
    components:{
        LikeIcon,
        ShareIcon,
        CommentsNotif
    },
    data(){
        return{
            liked:{
                state:false,
                nber:0,
            },
            showComments:false,
        }
    },
    computed:{
        getSize(){
            return this.$props.reply.length
        },
        getColor(){
            if(this.liked.state){
                return '#e74c3c'
            }
        },
        getFill(){
            if(this.liked.state){
                return  '#e74c3c'
            }
        },
        
    },
    methods:{
        toogleStateLike(){
            this.liked.state=!this.liked.state
            if(this.liked.state)
                this.liked.nber++
            else
                this.liked.nber--
        },
        getLike(){
            if(this.$props.like){
                this.liked.nber=this.$props.like
                return
            }
            this.liked.nber=0
        },
        
        toogleStateComments(){
            this.$emit('toogleStateComments')
        }

    }
}
</script>

<style lang="scss" scoped >
*{
    margin :0;
    padding: 0;
}
.FooterActions{
    border-radius: 2px;
    border-left: none;
    border-right: none;
    border-top: none;
    width: 100%;
    height: 100%;

    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        .infor{
            border-left: 1px solid #1e272e1a;
            padding-left: 10px;
            font-size: 12px;
            font-style: italic;
        }
        .options{
            width: 260px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            
            li{
                border: 1px solid #1e272e1a;
                border-top: none;
                border-bottom: none;
                border-left: none;
                display: flex;
                justify-content: start;
                align-items: center;
                height: 100%;
                padding: 5px 10px;
                cursor: pointer;
                span{
                    margin-left:10px;
                }
                &:last-child{
                    border:none;
                }

            }
        }
    }

}
</style>