<template>
    <div class="post">
        <ImageView  state="list" v-if="post.images.length>0 && state!='create'" :image="post" :images="post.images" />
        <div class="p-2">
            <div class="info">
                <PostAuthorInfo :post="post" />
            </div>

            <div class="info">
                <PostTitle v-if="post.title" :title="post.title" />
                <PostDescription :state="state" :description="post.description" />
            </div>

            <div v-if="state!='create'" class="footer">
                <PostFooter :reply="post.comments" :at="dateOfPost" :like="post.liked"
                    @toogleStateComments="toogleAreaComment" />
            </div>
        </div>
        <transition name="commentArea" appear
            enter-active-class="animate__animated animate__fadeInDown animate__bouncIn"
            leave-active-class="animate__animated animate__bounceOut">
            <div class="comments" v-if="showAreaComment">
                <div class="listPostComment">
                    
                    <PostComment  v-for="(comment,index) in post.comments" :classComment="isAuthors(comment)" :comment="comment"
                        :key="index" />
                </div>
                <form @submit.prevent="addComment" class="form">
                    <input class="textarea" type="text" v-model="comment" :placeholder="placeholder" />
                    <button class="Send">
                        <SendIcon size="15px" />
                    </button>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
import ImageView from '@/components/Posts/ImageView'
import PostDescription from  '@/components/Posts/PostDescription'
import PostTitle from '@/components/Posts/PostTitle'
import PostFooter from '@/components/Posts/PostFooter'
import PostAuthorInfo from '@/components/Posts/PostAuthorInfo'
import PostComment from '@/components/Posts/PostComment'
import SendIcon from '@/components/Icons/SendIcon'
import moment from 'moment'
import axios from "axios"
export default {
    name:'Post',
    props:{
        post:{
            type:Object,
            require:true
        },
        state:{
            type:String,
            require:false,
            default:'view'
        }
    },
    components:{
        ImageView,
        PostDescription,
        PostTitle,
        PostFooter,
        PostAuthorInfo,
        PostComment,
        SendIcon
    },
  created() {
    axios.interceptors.request.use(
      (config) => {
        this.setLoading(true);
        this.config = config;
        return config;
      },
      (error) => {
        this.setLoading(false);
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        this.setLoading(false);
        this.res = response;
        return response;
      },
      (error) => {
        this.setLoading(false);
        return Promise.reject(error);
      }
    );
  },
    data(){
        return{
            placeholder:'write your comment here :) ...',
            comment:'',
            showAreaComment:false,
            refCount: 0,
            isLoading: false,
            config: null,
            res: null,
        }
    },
    computed:{
        dateOfPost(){
            return moment(this.post.created_at).format('DD-MM-YY, hh:mm')
        },
        user(){
            return this.$store.getters.getCurrentUser
        }
        
    },
    methods:{
        toogleAreaComment(){
            this.showAreaComment=!this.showAreaComment
        },
        addComment(){
            if(this.comment==='') return 
            const data = {
                post_id: this.$props.post.id,
                body:this.comment,
            }
            this.comment=''
            this.$store.dispatch('addCommentPost',data);
        },
        isAuthors(comment){
            console.log('comment ----',comment)
            if( comment.user.id === this.user.id) return 'isUser'
            else return ''
        }
    }
}
</script>

<style scoped lang="scss">
    .post{
        margin-top: 2rem;
        padding-bottom: 0 !important;/* 
        box-shadow: 3px 8px 34px 2px rgba(44, 62, 80, 0.080); */
        border-radius:5px;
        display: flex;
        flex-direction: column;
        border: 1px solid #d1d8e0;


        .info{
            margin-top:0.5rem ;
            padding:0.1rem;
            &:first-child{
                padding: 1rem;
            }
        }

        .footer{
            height: 35px;
            padding: 2px;
        }

        .comments{
            border: 1px solid rgba(7, 7, 7, 0.116);
            border-radius: 5px;
            max-height: 300px;
            min-height: 80px;
            overflow: hidden;
            width: 100%;
            margin-top: 30px;


            .listPostComment{
                width: 100%;
                min-height: 50px;
                max-height: 270px;
                overflow-y:auto;

                
            }
            
            .form{
                display: flex;
                justify-content: start;
                height: 30px;
                align-items: center;

                .textarea{
                    padding-left: 1rem;
                    padding-top:1px;
                    padding-bottom:1px;
                    padding-right:1px;
                    width: calc(100% - 30px);
                    height: 30px;
                    min-height: 30px;
                    max-height: 30px;
                    border:1px solid rgba(0, 0, 0, 0.103);
                    font-family: 'Hind Siliguri', sans-serif;
                    outline: none;
                }
                .Send{
                    height: 30px;
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.103);

                }
            }

        }

    }
</style>