<template>
    <svg enable-background="new 0 0 50 50" :height="getSize" id="Layer_1" version="1.1" viewBox="0 0 50 50"
        :width="getSize" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect fill="none" height="50" width="50" />
        <path
            d="M35,8  c-4.176,0-7.851,2.136-10,5.373C22.851,10.136,19.176,8,15,8C8.373,8,3,13.373,3,20c0,14,16,21,22,26c6-5,22-12,22-26  C47,13.373,41.627,8,35,8z"
            :fill="getFill" :stroke="getColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" />
    </svg>
</template>

<script>
    export default {
        name: 'LikeIcon',
        props:{
            size:{
                type:String,
                require:false
            },
            color:{
                type:String,
                require:false
            },
            fill:{
                type:String,
                require:false
            }
        },
        data(){
            return{
                IconSize:null,
                IconColor:null,
                IconFill:null,
            }
        },
        computed:{
            getSize(){
                if (this.$props.size){
                    return this.IconSize=this.$props.size
                    
                }
                return this.IconSize="30px"
                
            },
            getColor(){
                if (this.$props.color){
                    return this.IconColor=this.$props.color
                    
                }
                return this.IconColor="#000000"
                
            },
            getFill(){
                if (this.$props.fill){
                    return this.IconFill=this.$props.fill
                    
                }
                return this.IconFill="none"
                
            },
        },
    }
</script>