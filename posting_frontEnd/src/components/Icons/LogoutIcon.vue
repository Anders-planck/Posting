<template>
    <svg  :width="IconSize" :heigth="IconSize" data-name="Layer 2" id="ac0e4468-8c4e-4c82-ab79-d84fa5e8775a" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg"><path d="M17.54,34.75a17.25,17.25,0,0,1,0-34.5,1.25,1.25,0,0,1,0,2.5,14.75,14.75,0,0,0,0,29.5,1.25,1.25,0,0,1,0,2.5Z"/><path d="M32.927,18.75H15.25a1.25,1.25,0,0,1,0-2.5H32.927a1.25,1.25,0,0,1,0,2.5Z"/><path d="M26.536,26.438a1.25,1.25,0,0,1-.884-2.134l6.384-6.385a.6.6,0,0,0,0-.839L25.652,10.7A1.25,1.25,0,1,1,27.42,8.929L33.8,15.313a3.1,3.1,0,0,1,0,4.374L27.42,26.072A1.246,1.246,0,0,1,26.536,26.438Z"/></svg>
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