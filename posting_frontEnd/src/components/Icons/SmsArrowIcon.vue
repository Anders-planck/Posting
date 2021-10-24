<template>
    <svg :width="IconSize" id="Layer_1" style="enable-background:new 0 0 30.2 30.1;" version="1.1" viewBox="0 0 30.2 30.1"
        xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <path class="st0"
            d="M2.1,14.6C8.9,12,28.5,4,28.5,4l-3.9,22.6c-0.2,1.1-1.5,1.5-2.3,0.8l-6.1-5.1l-4.3,4l0.7-6.7l13-12.3l-16,10  l1,5.7l-3.3-5.3l-5-1.6C1.5,15.8,1.4,14.8,2.1,14.6z" />
    </svg>
</template>

<script>
    export default {
        name: 'ShareIcon',
        props: {
            size: {
                type: String,
                require: false
            },
            color: {
                type: String,
                require: false
            }
        },
        data() {
            return {
                IconSize: null,
                IconColor: null,
            }
        },
        mounted() {
            this.getSize();
            this.getColor();
        },
        methods: {
            getSize() {
                if (this.$props.size) {
                    this.IconSize = this.$props.size
                    return
                }
                this.IconSize = "30px"
                return
            },
            getColor() {
                if (this.$props.color) {
                    this.IconColor = this.$props.color
                    return
                }
                this.IconColor = "#000000"
                return
            },
            AddPost() {
                this.$emit("AddPost")
            }
        },
    }
</script>