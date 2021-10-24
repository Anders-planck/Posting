<template>
  <div>
        <VueTrix 
        inputId="textarea2" 
        placeholder="your description here ..." 
        :inputName="inputName" 
        @trix-file-accept="onFileAccept"
        v-model="post.description" 
        class="text"/>
      
  </div>
</template>

<script>
import VueTrix from 'vue-trix'

export default {
  name: 'Editor',
  components: {
    VueTrix
  },
  props: {
    inputName: {
      type: String,
      required: false,
      default: 'content'
    },
    post:{
      type:Object,
      require:true,
    },
  },
  data () {
    return {  
      
    }
  },
  methods: {
    onFileAccept(){
      alert("This app don't support Images or other file types")
      return
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text{
    font-family: 'Varela Round', sans-serif;
    font-size: 1rem !important;
}
</style>
