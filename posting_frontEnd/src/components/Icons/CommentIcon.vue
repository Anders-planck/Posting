<template>
    <svg enable-background="new 0 0 48 48" :height="IconSize" version="1.1" viewBox="0 0 48 48" :width="IconSize"
        xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Expanded">
            <g>
                <g>
                    <path
                        d="M6,45.414V36H3c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h42c1.654,0,3,1.346,3,3v26c0,1.654-1.346,3-3,3H15.414     L6,45.414z M3,6C2.448,6,2,6.448,2,7v26c0,0.552,0.448,1,1,1h5v6.586L14.586,34H45c0.552,0,1-0.448,1-1V7c0-0.552-0.448-1-1-1H3z     " />
                </g>
                <g>
                    <circle cx="16" cy="20" r="2" />
                </g>
                <g>
                    <circle cx="32" cy="20" r="2" />
                </g>
                <g>
                    <circle cx="24" cy="20" r="2" />
                </g>
            </g>
        </g>
    </svg>
</template>

<script>
    export default {
        name: 'CommentIcon',
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