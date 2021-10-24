<template>
    <div class="PostCreation">
        <div class="menu">
            <div class="menuItem cursor-pointer" @click="position(1)" :class="{'active':step==1}">
                Create
            </div>
            <div class="menuItem cursor-pointer" @click="position(2)" :class="{'active':step==2}">
                Preview
            </div>
            <div class="menuItem cursor-pointer" @click="position(3)" :class="{'active':step==3}">
                validate
            </div>
        </div>
        <div class="content">
            <transition mode="out-in" name="form" 
                enter-active-class="animate__animated animate__fadeIn ">
                <div class="form" v-show="step == 1">
                    <Form state="create"  :post="post" />
                </div>
            </transition>
            <transition mode="out-in" name="preview" 
                enter-active-class="animate__animated animate__fadeIn ">
                <div class="form" v-show="step == 2">
                    <PostPreview :post="post" />
                </div>
            </transition>
            <transition mode="out-in" name="preview" 
                enter-active-class="animate__animated animate__fadeIn ">
                <div class="form" v-show="step == 3">
                    <PostValidate :post="post" />
                </div>
            </transition>
        </div>
        <div class="arrow">
            <div class="content mr-3">
                <button @click="back" v-if="step != 1">
                    <BackArrowIcon size="30px" />
                </button>
            </div>
            <div class="content">
                <button @click="next" v-if="step != 3">
                    <NextArrowIcon size="30px" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor"
import AddIcon from '@/components/Icons/AddIcon'
import CloseIcon from '@/components/Icons/CloseIcon'
import NextArrowIcon from '@/components/Icons/NextArrowIcon'
import BackArrowIcon from '@/components/Icons/BackArrowIcon'
import Title from '@/components/Title'
import Form from '@/components/Posts/PostCreate/Form'
import PostPreview from '@/components/Posts/PostCreate/PostPreview'
import PostValidate from '@/components/Posts/PostCreate/PostValidate'

export default {
    name: 'PostCreation',
    components: {
        Editor,
        AddIcon,
        CloseIcon,
        Title,
        Form,
        NextArrowIcon,
        BackArrowIcon,
        PostPreview,
        PostValidate
    },
    
    computed: {
        post() {
            return this.$store.getters.getPost
        },
        step() {
            return this.$store.getters.getStep
        }
    },
    created(){
        this.$store.dispatch('getPost')
    },
    methods: {
        next() {
            console.log(this.$store.getters.getPost)
            if (this.post.title.length >= 10 && this.post.description.length >= 100)
                this.$store.commit('nextStep')
            else {
                return
            }
        },
        back() {
            this.$store.commit('backStep')
        },
        position(index) {
            this.$store.commit('setStep', index);
        },
    }

}
</script>

<style lang="scss" scoped>
    :root {
        --animate-delay: 0.5s;
    }

    .PostCreation {
        border: 1px solid #d1d8e0;
        border-radius: 5px;
        margin: 0 auto;
        max-width: 700px;
        min-height: 600px;
        background: #fff;
        box-shadow: 0px 7px 27px 0px #e4e4e4ea;
        position: relative;

        .menu {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .menuItem {
                padding: 0.8rem;
                width: 33.33%;
                border: 1px solid rgba(0, 0, 0, 0.185);
                border-top: none;
                font-family: 'Varela Round', sans-serif;
                text-align: center;
                text-transform: capitalize;
            }

        }
    }

    .active {
        border-bottom: 4px solid #42b983e1 !important;
    }

    .direction {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .content {
        padding: 1rem;
    }

    .arrow {
        width: 100%;
        text-align: right;
        display: flex;
        justify-content: end;
        position: absolute;
        bottom: 0;
        right: 0;
        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            background: rgba(0, 0, 0, 0.048);
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
            }

            span {
                display: block;
            }
        }
    }
</style>