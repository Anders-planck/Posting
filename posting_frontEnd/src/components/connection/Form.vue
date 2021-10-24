<template>
    <div class="contentForm">
        <h1 class="title">
            POSTING
        </h1>
        <form class="form" @submit.prevent="submit">
            <div class="form-group" v-if="status=='register'">
                <input type="tel" name="numero" class="input" 
                    :class="{'error': $v.numero.$error}" v-model.trim="$v.numero.$model" placeholder="telephone number">
                <ul v-if="$v.numero.$anyError" class="errorInput">
                    <li v-if="!$v.numero.required"> Please this field is required</li>
                    <li v-if="!$v.numero.numeric">Please fill in a valid phone number</li>
                </ul>
            </div>

            <div class="form-group" v-if="status=='register'">
                <input type="text" name="name" class="input" 
                    :class="{'error': $v.name.$error}" v-model.trim="$v.name.$model" placeholder="User name">
                <ul v-if="$v.name.$anyError" class="errorInput">
                    <li v-if="!$v.name.required"> please this field is required</li>
                    <!-- <li v-if="!$v.name.alphaNum"> Please the username must contain just alphanumeric characters</li> -->
                    <li v-if="!$v.name.maxLength"> the username must contain must contain a maximum of <span>{{$v.name.$params.maxLength.max}}</span> characters</li>
                    <li v-if="!$v.name.minLength"> the username must contain must contain a least of <span>{{$v.name.$params.minLength.min}}</span> characters</li>
                </ul>
            </div>

            <div class="form-group" v-if="status=='register'">
                <input type="text" name="username" class="input" 
                    :class="{'error': $v.username.$error}" v-model.trim="$v.username.$model" placeholder="User name">
                <ul v-if="$v.username.$anyError" class="errorInput">
                    <li v-if="!$v.username.required"> please this field is required</li>
                    <!-- <li v-if="!$v.username.alphaNum"> Please the username must contain just alphanumeric characters</li> -->
                    <li v-if="!$v.username.maxLength"> the username must contain must contain a maximum of <span>{{$v.username.$params.maxLength.max}}</span> characters</li>
                    <li v-if="!$v.username.minLength"> the username must contain must contain a least of <span>{{$v.username.$params.minLength.min}}</span> characters</li>
                </ul>
            </div>

            <div class="form-group" >
                <input type="email" name="email" class="input" 
                    :class="{'error': $v.email.$error}" v-model.trim="$v.email.$model" placeholder="email">
                <ul v-if="$v.email.$anyError" class="errorInput">
                    <li v-if="!$v.email.required"> please this field is required</li>
                    <li v-if="!$v.email.email"> please Enter valid Email</li>
                </ul>
            </div>

            <!-- <div class="form-group" v-if="status=='login'">
                <input type="text" name="numb_email" class="input" 
                    :class="{'error': $v.numb_email.$error}" v-model.trim="$v.numb_email.$model"
                    placeholder="telephone number o email">
                <ul v-if="$v.numb_email.$anyError" class="errorInput">
                    <li v-if="!$v.numb_email.require"> please this field is required</li>
                </ul>
            </div> -->

            <div class="form-group">
                <input type="password" name="password" class="input" :class="{'error': $v.password.$error}"
                    v-model.trim="$v.password.$model" placeholder="password">

                <ul v-if="$v.password.$anyError" class="errorInput">
                    <li v-if="!$v.password.required"> please this field is required</li>
                    <li v-if="!$v.password.minLength"> the password must contain must contain a least of <span>{{$v.password.$params.minLength.min}}</span> characters</li>
                </ul>
            </div>
            
            <div class="form-group" v-if="status=='register' && password.length>6">
                <input type="password" name="password_confirmation" :class="{'error': $v.password_confirmation.$error}"
                    v-model.trim="$v.password_confirmation.$model" class="input" placeholder="confirm your password">
                <ul v-if="$v.password_confirmation.$anyError" class="errorInput">
                    <li v-if="!$v.password_confirmation.required"> please this field is required</li>
                    <li v-if="!$v.password_confirmation.sameAs"> password confirmation different from password</li>
                </ul>
            </div>


            <div class="form-group" v-if="status=='register'">
                <div class="inputCheck" >
                    <input type="checkbox" name="term" id="term" v-model="terms.term" class="check">
                    <label for="term"> Accept terms and condition</label>
                </div>
                 <ul v-if="terms.error" class="errorInput">
                    <li v-if="terms.error"> please Accept terms and condition</li>
                </ul>
            </div>

            <button type="submit" :class="{'invalid' : verify}" :disabled="verify" class="btn_submit"
                v-if="status=='register'">Subscribe</button>

            <button type="submit" :class="{'invalid' : verify}" :disabled="verify" class="btn_submit"
                v-if="status=='login'">Log in</button>
        </form>

        <div class="infoConnexion">
            <div v-if="status=='login'" class="changeMode">
                Do not have an account? <span @click="ChangeMode('register')">subscribe</span>
            </div>

            <div v-if="status=='register'" class="changeMode">
                Do you have an account? <span @click="ChangeMode('login')"> Log in</span>
            </div>
        </div>

        <div class="condition">
            <p v-if="status=='register'">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit enim dolores beatae,
                dolor laborum illum quidem excepturi itaque tenetur fuga maiores rem. Placeat dolor, quam
                consequatur delectus cumque voluptatum possimus debitis aperiam nam, odit atque quas! Vel
                distinctio odit ea corporis labore hic, incidunt nemo omnis, at doloremque ad.
            </p>
            <p v-if="status=='login'">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt velit enim doloras! Vel
                distinctio odit ea corporis labore hic, incidunt nemo omnis, at doloremque ad.
            </p>
        </div>

    </div>
</template>

<script>
import {
    required,
    minLength,
    numeric,
    maxLength,
    email,
    sameAs
} from 'vuelidate/lib/validators'
export default {
    name: "Form",
    props: {
        status: {
            type: String,
            require: true,
            default: "login"
        }
    },
    data() {
        return {
            submitStatus: null,
            numero: '',
            email: '',
            name: '',
            username: '',
            password: '',
            password_confirmation: '',
            terms: {
                error: false,
                term: false
            },
            // numb_email: ''
        }
    },
    validations() {
        if (this.status == 'register') {
            return {
                numero: {
                    required,
                    numeric
                },
                email: {
                    required,
                    email
                },
                username: {
                    required,
                    minLength: minLength(5),
                    maxLength: maxLength(20)
                },
                name: {
                    required,
                    minLength: minLength(5),
                    maxLength: maxLength(20)
                },
                password: {
                    required,
                    minLength: minLength(5),
                },
                password_confirmation: {
                    required,
                    sameAs: sameAs(function () {
                        return this.password
                    })
                }
            }
        } else {
            return {
                // numb_email: {
                //     required
                // },
                password: {
                    required,
                    minLength: minLength(5),
                },
                email: {
                    required,
                    email
                },
            }
        }

    },
    methods: {
        submit() {
            this.$v.$touch()
            if (this.$v.$invalid) {
                console.log(this.submitStatus = 'ERROR')
            } else {
                let formData = {}
                if (this.status == 'register') {
                    formData = {
                        name: this.$v.name.$model,
                        numero: this.$v.numero.$model,
                        email: this.$v.email.$model,
                        username: this.$v.username.$model,
                        password: this.$v.password.$model,
                        password_confirmation: this.$v.password_confirmation.$model
                    }
                } else {
                    formData = {
                        email: this.$v.email.$model,
                        password: this.$v.password.$model
                    }
                }
                // console.log(formData)

                this.$emit('submit', formData)
            }
        },

        ChangeMode(mode) {
            this.$emit('changeMode', mode)
        }
    },
    computed: {
        verify() {
            if (this.status == 'register') {
                if (this.$v.$invalid || this.terms.term == false) return true
                else return false
            } else {
                if (this.$v.$invalid) return true
                else return false
            }
        }
    },

}
</script>

<style lang="scss" scoped>
    .contentForm {
        width: 300px !important;
        min-height: 40vh !important;

        .title {
            font-size: 2.5rem;
            font-weight: bolder;
            font-family: 'Gluten', cursive;
            text-transform: uppercase;
            width: 100%;
            text-align: center;
            margin-bottom: 3rem;
        }

        .infoConnexion {
            margin-bottom: 1rem;
            width: 100%;
            text-align: right;
            color: #000;
            font-family: 'Lato', sans-serif;
            font-size: 0.7rem;

            span {
                color: #2980b9;
                text-decoration: underline;
                font-size: 1rem;
                font-weight: bolder;
                text-transform: capitalize;
                cursor: pointer;
                font-family: 'Gluten', cursive;
            }
        }

        .condition {
            width: 100%;

            p {
                overflow-wrap: break-word;
                text-align: left;
                font-family: 'Lato', sans-serif;
                font-size: 0.7rem;
                color: #95a5a6;
            }
        }

        .form {
            margin-bottom: 1.3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            

            .error {
                border: 1px solid #c0392b !important;
            }

            .form-group {
                margin-top: 1rem;
                width: 100%;

                ul {
                    border: 1px solid #c0392b;
                    border-left:5px solid #c0392b !important;
                    border-radius: 5px;
                    background:#c03a2b1c;
                    margin-top: 10px;
                    font-style: italic;
                    padding: 3px;
                    width: 100%;
                    text-align: left;
                    color: #ff4757 !important;
                    font-size: 10px;
                    font-weight: bolder;
                    
                    li{
                        list-style: none;
                    }                    
                    li>span{
                    font-weight: bolder;
                    font-size: 11px;
                    }
                }
                .inputCheck {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                outline: none;
                width: 100%;
                min-width: auto;
                font-family: 'Nunito', sans-serif;
                font-weight: bolder;

                .check {
                    margin-right: 5px;
                    width: 15px;
                    height: 15px;
                    border-radius: 5px;
                    outline: none;
                    border: 1px solid #d1d8e0;
                }


            }

                .input {
                    display: block;
                    outline: none;
                    border: 1px solid #d1d8e0;
                    border-radius: 5px;
                    padding: 5px 7px;
                    width: 100%;
                    min-width: auto;
                    font-family: 'Nunito', sans-serif;
                    font-weight: bolder;
                    background: #f1f2f6;


                    &::placeholder {
                        color: #000;
                        font-weight: bold;
                        font-family: 'Nunito', sans-serif;
                        text-transform: capitalize;
                    }

                    
                }
                &:first-child {
                    margin-top: 0 !important;
                }
            }



            .btn_submit {
                padding: 3px 5px;
                margin-top: 1rem;
                width: 100%;
                color: #fff;
                border: 1px solid #d1d8e0;
                border-radius: 5px;
                font-family: 'Lato', sans-serif;
                font-weight: bold;
                font-size: 1.2rem;
                background: #3498db;
            }

            .invalid {
                cursor: not-allowed;
                color: rgb(128, 125, 125);
                background: #c7c9cc;
            }
        }
    }
</style>