<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>

export default {
  created() {
    this.verificationLogin()
  },
  updated() {
    this.verificationLogin()
  },
  methods: {
    verificationLogin() {
      if (!this.$store.getters.getLogged)
        this.$router.push('login')
    }
  }
}
</script>
