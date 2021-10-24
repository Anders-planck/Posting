<template>
    <svg viewBox="0 0 32 32" :width="IconSize" :height="IconSize" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="Layer 2" id="Layer_2">
            <path
                d="M10.1,23a1,1,0,0,0,0-1.41L5.5,17H29.05a1,1,0,0,0,0-2H5.53l4.57-4.57A1,1,0,0,0,8.68,9L2.32,15.37a.9.9,0,0,0,0,1.27L8.68,23A1,1,0,0,0,10.1,23Z" />
        </g>
    </svg>
</template>

<script>
    export default {
        name: 'BackArrowIcon',
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
            AddPost(){
                this.$emit("AddPost")
            }
        },
    }
</script>