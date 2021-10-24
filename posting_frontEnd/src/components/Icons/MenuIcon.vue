<template>
    <svg @click="ToogleNavMobile"  :fill="IconColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="IconSize" :height="IconSize">
        <path fill="none" :stroke="IconColor" stroke-miterlimit="10" stroke-width="2"
            d="M2 12L22 12M2 6L22 6M2 18L22 18" />
    </svg>
</template>

<script>
    export default {
        name: 'MenuIcon',
        props:{
            size:{
                type:String,
                require:false
            },
            color:{
                type:String,
                require:false
            }
        },
        data(){
            return{
                IconSize:null,
                IconColor:null,
            }
        },
        mounted(){
            this.getSize();
            this.getColor();
        },
        methods:{
            getSize(){
                if (this.$props.size){
                    this.IconSize=this.$props.size
                    return
                }
                this.IconSize="30px"
                return
            },
            getColor(){
                if (this.$props.color){
                    this.IconColor=this.$props.color
                    return
                }
                this.IconColor="#000000"
                return
            },
            ToogleNavMobile(){
                this.$emit("ToogleNavMobile")
            }
        },
    }
</script>