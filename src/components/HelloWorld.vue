<template>
  <div> 
    <h1>Search Movie</h1>
    <router-link to="/movie">Movies</router-link>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
</style>
