<template>
    <div class="form">
        <div class="nb mb-3 p-2 bg-green-200 text-md">
            NB: All fields with the asterisk <span class="text-red-500 my-2 text-xl">*</span> are required
        </div>
        <div class="mb-3 form-group">
            <label  v-if="post.title.length==0" for="title" class="label">
                Title
                <span class="require">*</span>
            </label>
            <input
              type="text"
              placeholder="Your title here... "
              name="title"
              v-model="post.title"
              class="input" />

            <ul v-if="!validation && Messages.title.length!=0" class="errorInput">
                <li>{{Messages.title}}</li>
            </ul>
        </div>

        <div class="mb-6 form-group">
            <div class="fields">
                <label for="title" class="label">
                    Tags
                </label>
                <div class="add"  @click="AddTag">
                    <AddIcon size="20px"/>
                </div>
            </div>
            <transition-group name="listTag" enter-active-class="animate__animated animate__backInLeft animate__faster">
            <div v-for="(tag,index) in post.tags" :key="index" class="fields mt-3 form-group">
                <label :for="tag" class="label add text-gray-400">
                    <span class="text-gray-500">#</span>{{index+1}}
                </label>
                <input type="text"  placeholder=" Your tag..." v-model="post.tags[index].body" class="input inputItem " />
                <div class="add"  @click="RemoveTag(index)">
                    <CloseIcon size="15px"/>
                </div>
            </div>
            </transition-group>
        </div>

        
        <div class="mb-6 form-group">
            <label v-if="post.description.length==0" for="Description" class="label">
                description
                <span class="require">*</span>
            </label>
            
            <Editor inputName="description" :post="post" class="mt-2"/>
            <ul v-if=" !validation && Messages.description.length!=0" class="errorInput">
                <li>{{Messages.description}}</li>
            </ul>
        </div>

                    

        <div class="mb-6 form-group">
            <div class="fields">
                <label for="title" class="label">
                    Images
                </label>
                <!-- <div class="add"  @click="AddImage">
                    <AddIcon size="25px"/>
                </div> -->
            </div>

            <div class="fields mt-3 form-group">
                <input type="file" multiple   class="input inputItem" @change="fileAdd" />
            </div>
            <!-- <vue-dropzone
              :options="dropzoneOptions"
              @vdropzone-sending="sendingFiles"
              ref="myVueDropzone"
              id="dropzone"
              @vdropzone-file-added="fileAdd">
            </vue-dropzone> -->
        </div>

        <div class="mb-3 form-group checkbox">
            <label for="online" class="label check">
                Online
                <span class="require">*</span>
            </label>
            <input type="checkbox" id="online" name="online"  v-model="post.online" class="check" />
        </div>
    </div>
</template>

<script>
import Editor from "@/components/Editor"
import AddIcon from '@/components/Icons/AddIcon'
import CloseIcon from '@/components/Icons/CloseIcon'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import {HTTP} from '@/services/axios.js'

export default {
    name: 'Form',
    props: {
        state: {
            type: String,
            require: true
        },
        post: {
            type: Object,
            require: true
        },
        // messages:{
        //     type:Object,
        //     require:false,
        // }
    },
    components: {
        Editor,
        AddIcon,
        CloseIcon,
        vueDropzone: vue2Dropzone
    },
    created() {
        //this.post = newPost()
    },
    computed:{
        validation(){
            if(this.post.title.length == 0){
                this.Messages.title= 'please fill in the title field'
                return false
            }else 
                this.Messages.title= ''
            if(this.post.title.length>0 && this.post.title.length <= this.minTitleSize){
                this.Messages.title ='please enter at least '+ this.minTitleSize+' characters on title field'
                return false
            }else 
                this.Messages.title= ''
            if(this.post.description.length==0 ){
                this.Messages.description= 'please fill in the Description field'
                return false
            }else 
                this.Messages.description= ''
            if(this.post.description.length >0 && this.post.description.length <= this.minDescriptionSize){
                this.Messages.description ='please enter at least '+ this.minDescriptionSize +'characters on descripton field'
                return false
            }else 
                this.Messages.description= ''
            return true 
        },
    },
    data() {
        return {
            // //post: null,
            // attachments: [],
            // dropzoneOptions: {
            //     url: 'https://localhost:3000/api/v1/images',
            //     maxFilesize: 102400000,
            //     // Authentication Headers like Access_Token of your application
            //     headers: {
            //         Authorization: `Access Token`
            //     },
            //     dictDefaultMessage: "Upload Files Here xD",
            //     includeStyling: false,
            //     thumbnailWidth: 250,
            //     thumbnailHeight: 140,
            //     uploadMultiple: true,
            //     parallelUploads: 20
            // },
            minTitleSize:10,
            minDescriptionSize:100,
            Messages:{
                title:'',
                description: '',
            }
        }
    },
    methods: {
        /* inizialize(){
            if(this.$props.state=='create' && this.$props.post==null){
                this.post=this.getEmptyPost()
            }
        },
        getEmptyPost(){
            let post= {
                online:true,
                at: '',
                title: '',
                description: '',
                images: [],
                tags:[],
            }
            return post             
        }, */
        AddTag() {
            let tag={body:''}
            this.post.tags.push(tag);
        },
        RemoveTag(index) {
            this.post.tags.splice(index, 1);
        },

        

        // AddImage(){
        //     this.post.images.push('');
        // },
        // RemoveImage(index){
        //     this.post.images.splice(index,1);
        // },
        // onFileSelected(event){
        //     this.post.images[this.post.images.length-1]=event.target.files[0]
        //     console.log(this.post.images)
        // },

        // async sendingFiles(files, xhr, formData) {
        //     console.log('sending file manully')
        //     let data={
        //         name: 'PostCreate',
        //         size: this.post.length,
        //         images:this.images
        //     }
        //     await HTTP.post('images',data)
        //     .then(response => {
        //         console.log(response.data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
        // },

        fileAdd(event) {
            for(let i=0;i<event.target.files.length;i++){
                this.post.images[i]=event.target.files[i]
            }
            //this.post.images[0]=event.target.files[0]
        },
    }

}
</script>

<style lang="scss" scoped>

.error {
    border: 1px solid #c0392b !important;
}
.nb{
    border-radius: 5px;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
}
.form-group{
    .input {
        display: block;
        outline: none;
        border: 1px solid #d1d8e0;
        border-radius: 5px;
        padding: 5px 7px;
        width: 100%;
        min-width: auto;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        background: #f1f2f6;


        &::placeholder {
            //color: #000 !important;
            //font-weight: bold;
            font-family: 'Nunito', sans-serif;
            text-transform: capitalize;
        }


    }

    &:first-child {
        margin-top: 0 !important;
    }
    ul {
    border: 1px solid #c0392b;
    border-left: 5px solid #c0392b !important;
    border-radius: 5px;
    background: #c03a2b1c;
    margin-top: 10px;
    font-style: italic;
    padding: 3px;
    width: 100%;
    text-align: left;
    color: #ff4757 !important;
    font-size: 10px;
    font-weight: bolder;

    li {
        list-style: none;
    }

    li>span {
        font-weight: bolder;
        font-size: 11px;
    }
}
}

.label {
    font-family: 'Varela Round', sans-serif;
    font-weight: 900;
    margin-bottom: 2px;
    font-size: 1rem;
    position: relative;
    text-transform: capitalize;
    display: inline-block;
}

.input {
    border: 2px solid rgba(0, 0, 0, 0.089);
    border-radius: 5px !important;
    padding: 0.5rem;
    font-family: 'Varela Round', sans-serif;
    font-size: 1rem;
    width: 100%;
    display: block;
}

.inputItem {
    width: 80% !important;
}

.require {
    font-size: 1.3rem;
    color: #eb2f06;
    position: absolute;
    top: -5px;
    right: -10px;
}

.textarea {
    font-family: 'Varela Round', sans-serif;
}


.fields {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.add,
.close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 50px;
    background: rgba(0, 0, 0, 0.048);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    span {
        display: block;
    }
}

.check {
    margin-right: 20px;
}


</style>