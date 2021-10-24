<template>
    <div class="header">
        <header>
            <nav>
                <div class="logo">
                    <router-link to="/" class="logo-word">POSTING</router-link>
                </div>


                <input type="text" class="search" placeholder="search" v-if="!Mobile" />

                <ul class="links" v-if="!Mobile">
                    <li v-for="link in links" :key="link.name">
                        <router-link class="link" :to="link.path">
                            <HomeIcon v-if="link.name=='posts'" />
                            <AddIcon v-if="link.name=='create post'" />
                            <LikeIcon v-if="link.name=='notifications'" />
                            <SmsArrowIcon v-if="link.name=='conversations'" />
                        </router-link>
                    </li>
                    <li v-if="isLogged">
                        <router-link class="link profile" to="/profile">
                            <img :src="user.avatar_url" :alt="user.name" v-if="user && user.avatar_url">
                            <ProfileIcon v-if="user && !user.avatar_url" />
                            <span class="name" v-if="user">{{user.username}}</span>
                        </router-link>
                    </li>
                </ul>

                <div class="menuIconH" v-if="Mobile && !MobileNavbar">
                    <transition name="fade" appear>
                        <MenuIcon class="menuIcon" size="25px" v-on:ToogleNavMobile="ToogleNavMobile" />
                    </transition>
                </div>

            </nav>



            <transition appear name="bounce" enter-to-class="animate__animated animate__backInUp"
                enter-active-class="animate__animated animate__backInUp"
                leave-active-class="animate__animated animate__bounceOutUp" v-if="Mobile && MobileNavbar">
                <div class="MobileLinks">
                    <div class="close">
                        <Title title="posting App" class="mr-8" />
                        <CloseIcon class="closeIcon" color="#000" v-on:ToogleNavMobile="ToogleNavMobile" />
                    </div>
                    <ul>
                        <li v-for="link in links" :key="link.name" @click="ToogleNavMobile">
                            <router-link class="link" :to="link.path">{{link.name}}</router-link>
                        </li>
                        <li>
                            <input type="text" class="link searchMobile" placeholder="search" />
                        </li>
                    </ul>
                </div>
            </transition>
        </header>
    </div>
</template>

<script>
import MenuIcon from "@/components/Icons/MenuIcon"
import LogoutIcon from "@/components/Icons/LogoutIcon"
import SignInIcon from "@/components/Icons/SignInIcon"
import SignUpIcon from "@/components/Icons/SignUpIcon"
import HomeIcon from "@/components/Icons/HomeIcon"
import CloseIcon from "@/components/Icons/CloseIcon"
import AddIcon from "@/components/Icons/AddIcon"
import LikeIcon from "@/components/Icons/LikeIcon"
import ProfileIcon from "@/components/Icons/ProfileIcon"
import Title from "@/components/Title"
import SmsArrowIcon from '@/components/Icons/SmsArrowIcon.vue'

export default {
    name: 'Navbar',
    components: {
        MenuIcon,
        CloseIcon,
        SignInIcon,
        SignUpIcon,
        HomeIcon,
        AddIcon,
        LikeIcon,
        SmsArrowIcon,
        LogoutIcon,
        Title,
        ProfileIcon
    },
    data() {
        return {
            Mobile: null,
            MobileNavbar: null,
            widthScreen: 1000,
            window: null,
            links: [{
                    name: 'posts',
                    path: "/",
                },

                {
                    name: "create post",
                    path: "/createPosts",
                },

                {
                    name: "notifications",
                    path: "#",
                },

                {
                    name: "conversations",
                    path: "#r",
                },
            ],
        }
    },
    created() {
        this.$store.dispatch('getLogged')
        this.$store.dispatch('getUser')
        window.addEventListener('resize', this.checkScreen)
        this.checkScreen()
    },

    mounted() {
        this.verificationLogin()
    },
    computed: {
        user() {
            return this.$store.getters.getCurrentUser
        },
        isLogged() {
            return this.$store.getters.getLogged
        }
    },
    methods: {
        ToogleNavMobile() {
            this.MobileNavbar = !this.MobileNavbar
        },
        checkScreen() {
            this.window = window.innerWidth
            if (this.window <= this.widthScreen) {
                this.Mobile = true
                this.MobileNavbar = false
                return
            } else {
                this.Mobile = false
                this.MobileNavbar = false
                return
            }
        },
        alert() {
            console.log("alert")
        },
        verificationLogin() {
            if (!this.isLogged)
                this.$router.push('/login')
        }
    }
}
</script>

<style scoped lang='scss'>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none !important;
    ;
}

.profile {
    border: 1px solid #d1d8e0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.name {
    font-size: 13px;
    font-weight: bold;
}

.header {
    width: 100vw;
    height: 54px;
    top: 0;
    /* 
    box-shadow: 0px 7px 27px 0px #E4E4E4; */
    margin: 0;
    z-index: 99;
    border: 1px solid #d1d8e0;
    background: white;
}

.searchMobile {
    border: 2px solid #d1d8e0;

    &::placeholder {
        text-align: center !important;
        font-family: 'Gluten', cursive !important;
        text-transform: capitalize !important;
    }

    &:focus {
        text-align: left;
        border: 2px solid #d1d8e0 !important;
        outline: none;

        &::placeholder {
            text-align: left;
        }
    }
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    width: 1000px;
    margin: 0 auto;

    .menuIconH {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .menuIcon {
            cursor: pointer;
            width: 32px;
        }
    }


    .search {
        border: 1px solid #d1d8e0;
        margin: 0;
        padding: 1px;
        flex: 0.33;
        font-size: 12px;

        // padding: 1px 1px 0px 1.5rem;
        &::placeholder {
            text-align: center;
            font-family: 'Gluten', cursive;
            text-transform: capitalize;
            font-size: 12px;
        }

        &:focus {
            text-align: left;
            border: 1px solid #d1d8e0 !important;
            outline: none;

            &::placeholder {
                text-align: left;
            }
        }
    }

    .logo {
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;

        .logo-word {
            font-size: 2rem;
            font-weight: bolder;
            font-family: 'Gluten', cursive;
            text-transform: uppercase;

            text-align: center;
            // font-family: 'Varela Round', sans-serif;
            // font-weight: 900;
            color: #2c3e50;
            // text-decoration: none;
            // font-size: 1.5rem;
            // letter-spacing: 0.3rem;
            // text-shadow: -3px 2px 6px rgba(44, 62, 80, 0.57);
        }
    }

    .links {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;

        li {
            display: flex;
            align-items: center;
            height: 100%;
            margin-right: 1rem;

            .link {
                text-decoration: none;
                color: #2c3e50;
                text-transform: uppercase;
                font-weight: 300;
                font-family: 'Varela Round', sans-serif;

                &.router-link-exact-active {
                    color: #42b983;
                }


            }

            &:last-child {
                margin-right: 0px;
            }
        }
    }
}





header {
    width: 100%;
    height: 100%;

    .link {
        text-decoration: none;
        color: #2c3e50;
        text-transform: uppercase;
        font-weight: normal;
        cursor: pointer;
        font-family: 'Varela Round', sans-serif;

        &:hover {
            color: #42b983;
            transform: scale(0.97);
        }
    }
}

.MobileLinks {
    background: #fff;
    border: 1px solid #d1d8e0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 10px 1px;
    display: flex;
    flex-direction: column;
    border: none;
    z-index: 5;

    .close {
        flex: .1;
        position: relative;
        padding: 0 5px;
        display: flex;
        justify-content: end;
        align-items: flex-start;

    }

    ul {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style: none;
        display: grid;
        grid-template-columns: auto;
        grid-row-gap: 5px;

        li {
            height: 60px;
            width: 100%;

            //border: 1px solid #121213;
            //border-left: none;
            .link {
                display: block;
                width: 100%;
                height: 100%;
                color: #2c3e50;
                display: flex;
                justify-content: center;
                padding: 10px;
                border-top: 1px solid #d1d8e0;
                align-items: center;
                font-size: 1.2rem;
                transition: all 0.2s ease-in-out;

                &.router-link-exact-active {
                    color: #42b983;
                }
            }

            &:last-child {
                .link {
                    border-bottom: 1px solid #d1d8e0;
                }
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/*     .bounce-enter-active {
        animation: bounce-in 0.5s;
    }
    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }
    @keyframes bounce-in {
        0% {
        transform: scale(0);
        }
        50% {
        transform: scale(1.25);
        }
        100% {
        transform: scale(1);
        }
    } */

@media only screen and (max-width: 1000px) {
    .container {
        width: 100% !important;
    }

    .hearder {
        width: 100% !important;
    }

    header {
        width: 100% !important;

        nav {
            display: flex;
            width: 100% !important;
            padding: 0 1rem;
            justify-content: space-between !important;
            align-items: center;
        }
    }
}

</style>