<template>
    <svg :heigth="IconSize" :width="IconSize" enable-background="new 0 0 32 32" id="Layer_4" version="1.1" viewBox="0 0 32 32" xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g>
            <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="0"
                x2="27" y1="16" y2="16" />
            <polyline fill="none" points="21,10 27,16    21,22  " stroke="#000000" stroke-linejoin="round"
                stroke-miterlimit="10" stroke-width="2" />
            <path
                d="M11.458,19   c1.274,4.057,5.065,7,9.542,7c5.523,0,10-4.477,10-10S26.523,6,21,6c-4.478,0-8.268,2.943-9.542,7"
                fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
        </g>
    </svg>
</template>

<script>
    export default {
        name: 'MenuIcon',
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
            ToogleNavMobile() {
                this.$emit("ToogleNavMobile")
            }
        },
    }
</script>