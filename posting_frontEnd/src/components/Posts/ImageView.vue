<template>
<div class="image">
    <transition-group appear name="image" v-if="!showBox && state=='list'" tag="div"
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__bounceOut">
        <div class="bloc" key="1" >
            <img v-for="(image,index) in ImagePreview" :key="index" :src="image.image_url" :alt="image.name"
                :class="className" />
            <div class="flou"></div>
        </div>

        <div class="add" v-if="getLength" @click="MoreImage" key="2">
            <AddIcon size="48px"/>
        </div>
    </transition-group>

    <transition-group appear name="bloc" v-if="showBox && state=='list'" tag="div"
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeInUp">
        <div class="bloc" :class="endItem"  key="1">
            <img v-for="(image,index) in images"   :key="index" :src="image.image_url" :alt="image.name"
                :class="className" />
        </div>
        <div class="close" @click="LessImage" key="2">
            <CloseIcon size="40px"/>
        </div>
    </transition-group>

    
    <transition-group appear name="image" v-if="state=='one'" tag="div"
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__bounceOut">
        <div class="bloc"  key="1" >
            <img :src="image.image_url" alt=""
                :class="className" />
            <div class="flou"></div>
        </div>
    </transition-group>



    <!-- <transition v-if="showModal" appear name="bounce" enter-to-class="animate__animated animate__backInUp"
        enter-active-class="animate__animated animate__backInUp"
        leave-active-class="animate__animated animate__bounceOutUp">
        <div class="">
            <div class="close">
                <CloseIcon class="closeIcon" color="#fff" v-on:ToogleNavMobile="ToogleNavMobile" />
            </div> 
            hello common
        </div>
    </transition> -->
</div>
</template>

<script>
import AddIcon from "@/components/Icons/AddIcon"
import CloseIcon from "@/components/Icons/CloseIcon"
export default {
    name:'ImageView',
    components:{
        AddIcon,
        CloseIcon
    },
    props:{
        images:{
            type:Array,
            require:false
        },
        image:{
            type:Object,
            require:false
        },
        state:{
            type:String,
            require:false,
            default:'list'
        }
    },
    data(){
        return{
            with:null,
            height:null,
            className:null,
            ImagePreview:[],
            showBox:false,
            endItem:'',
        }
    },
    mounted(){
        this.getSize();
    },
    created(){
        this.getArray()
    },
    computed:{
        getLength(){
            if(this.$props.images.length>6){
                return true 
            }
            return false
        }
    },
    methods:{
        getSize(){
            if(this.ImagePreview){
                if(this.ImagePreview.length==1){
                    this.className= "image1"
                    return this.className
                }
                if(this.ImagePreview.length==2){
                    this.className= "image2"
                    return this.className
                }

                if(this.ImagePreview.length==3){
                    this.className= "image3"
                    return this.className
                }

                if(this.ImagePreview.length==4){
                    this.className= "image4"
                    return this.className
                }

                if(this.ImagePreview.length==5){
                    this.className= "image5"
                    return this.className
                }

                if(this.ImagePreview.length>=6){
                    this.className= "image6"
                    return this.className
                }
            }else{
                this.className= "image1"
                return this.className
            }

        },
        getArray(){
            if(this.$props.images){
                if( this.$props.images.length>6){
                    this.$props.images.forEach((image ,index) => {
                        if(index <6)
                            this.ImagePreview.push(image)
                    });
                    console.log(this.ImagePreview)
                }else{
                    this.ImagePreview=this.$props.images
                } 
            }else{
                this.ImagePreview=[]
            }
        },
        MoreImage(){
            this.showBox=true
            console.log(this.images.length%2) 
            if(this.images.length % 2  == 0 )
                this.className='any'
            else {
                this.className= 'any',
                this.endItem= 'endItem'
            }
        },
        LessImage(){
            this.showBox=false
            this.className=this.getSize()
        }
    }
}
</script>

<style scoped lang="scss">
*{
    margin: 0;
    padding: 0;
}

img {
    object-fit: cover;
    transform: scale(1);
    transition: all 0.2s ease-in-out;
    height: 400px;
    width: 100%;
    &:hover {
        transform: scale(1) translateY(-13px);
        
    }
}


.add,.close{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background: rgba(0, 0, 0, 0.048);
    margin: 10px auto ;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
    span{
        display: block;
    }
}


.bloc{
    display: flex;
    justify-content: space-evenly !important;
    align-items: flex-start !important;
    flex-wrap: wrap;
    position: relative;
    height: 400px;
    min-height: 400px;
    overflow-y: auto;
    img{
        z-index: 10;
        border-radius: 5px;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        &:last-child{
            grid-column-start: 1;
            grid-column-end: 5;
        }
        &:first-child{
            grid-column-start: 1;
            grid-column-end: 4;
        }
    }

    .any{

        width: 49% ;
        height: 200px !important;
        transition: all 0.2s ease-in-out !important;
        margin-bottom: 0.5rem;
        &:hover{
            transform:scale(1);
            z-index: 15;
            border-radius: 10px !important;
        }

    }

    .endItem{
        &:last-child{
            width: 100% !important;
        }
        
    }

    .image1{
        width: 100% !important;
        height: 100% !important;
    }

    .image2{
        width: 49% !important;
        height: 100% !important;
    }
    .image3{
        width: 32.33% !important;
        height: 100% !important;
    }

    .image4{
        width: 24% !important;
        height: 100% !important;
    }

    .image5{
        width: 19% !important;
        height: 100% !important;
    }

    .image6{
        width: 15.66% !important;
        height: 100% !important;
    }

    .flou{
        position:absolute;
        background: #ffde5917;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
    }
}

</style>