<template>
    <div v-if="comment.user" class="PostComment" :class="classComment">
        <div  class="foto">
            <img v-if="comment.user.image_url" :src="comment.user.image_url" />
            <img v-else src="https://images.unsplash.com/photo-1541275055241-329bbdf9a191?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHZpb2xldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" />
        </div>
        
        <div v-if="comment.user.name" class="infoAuthor">
            <span class="alias">
                {{comment.user.name}}
            </span>

            <!-- <p>
                <span class="tag" v-for="tag in comment.author.tags" :key="tag">
                    <span class="hastag">#</span>{{tag}}
                </span>
            </p> -->

            <p v-if="comment.user" class="message">
                {{comment.body}}
            </p>

            <div class="infor">
                {{dateOfComment()}}
            </div>

        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    name:'PostComment',
    props:{
        comment:{
            type:Object,
            require:true
        },
        classComment:{
            type: String,
            require:false,
            default:''
        }
    },
    computed:{
        
    },
    methods:{
        dateOfComment(){
            return moment(this.comment.created_at).format('DD-MM-YY, hh:mm')
        }
    },
    


}
</script>

<style scoped lang="scss">
.isUser{
    align-items: flex-end !important;
    justify-content: end !important;
    .infoAuthor{
        background: #2ecc7060 !important;
        .message{
            color: black;
        }
    }
}
.PostComment{
    display: flex;
    align-items: flex-start;
    justify-content: start;
    margin: 1rem;

    &:focus{
        border: 2px solid rgb(131,58,180) !important;
    }
    .foto{
        min-width: 30px;
        min-height: 30px;            
        max-width: 30px;
        max-height: 30px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgb(131,58,180);
        background: linear-gradient(151deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 56%, rgba(252,176,69,1) 100%); 
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right:5px;

        img{
            min-width:30px;
            min-height: 25px;
            max-width: 25px;
            max-height: 25px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
    }
    .infor{
            border-left: 1px solid #1e272e1a;
            padding-left: 10px;
            font-size: 7px;
            font-style: italic;
            width: 100%;
            text-align: right;
    }
    .infoAuthor{

        border: 1px solid #d1d8e0;
        padding:3px;
        background: rgba(0, 0, 0, 0.075);
        border-radius: 5px;
        display: flex;
        justify-content: start;
        align-items: flex-start;
        flex-direction: column;
        max-width:100%;
        overflow-wrap: break-word;
        overflow: hidden;
        .alias{
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 900;
            font-size: 10px;
        }
        p{
            overflow-wrap: break-word;
            font-size: 8px;
            font-style: normal;
            .tag{
                font-family: 'Hind Siliguri', sans-serif;
                font-weight: 900;
                margin-right: 4px;        
            }
        }
        .hastag{
            font-family: 'Hind Siliguri', sans-serif;
            font-weight: 900;
            font-size: 11px;
        }
        .message{
            font-size: 10px !important;
            overflow-wrap: break-word !important;
            margin-left: 5px;
        }
    }
}
</style>