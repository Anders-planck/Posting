<template>
    <svg fill="none" :height="IconSize" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        viewBox="0 0 24 24" :width="IconSize" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
</template>

<script>
    export default {
        name: 'ShareIcon',
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