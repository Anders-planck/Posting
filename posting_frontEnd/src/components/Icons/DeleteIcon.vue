<template>
<svg enable-background="new 0 0 48 48" :height="IconSize"  version="1.1" viewBox="0 0 48 48" :width="IconSize" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M41,48H7V7h34V48z M9,46h30V9H9V46z"/></g><g><path d="M35,9H13V1h22V9z M15,7h18V3H15V7z"/></g><g><path d="M16,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C17,40.553,16.553,41,16,41z"/></g><g><path d="M24,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C25,40.553,24.553,41,24,41z"/></g><g><path d="M32,41c-0.553,0-1-0.447-1-1V15c0-0.553,0.447-1,1-1s1,0.447,1,1v25C33,40.553,32.553,41,32,41z"/></g><g><rect height="2" width="48" y="7"/></g></g></g></svg>
</template>

<script>
    export default {
        name: 'DeleteIcon',
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
            deletePost(){
                this.$emit("AddPost")
            }
        },
    }
</script>