<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <PostDisplayer></PostDisplayer>
</template>

<script>
// @ is an alias to /src
import PostDisplayer from "@/components/PostDisplayer.vue";

export default {
  name: 'HomeView',
  components: {
    PostDisplayer,
    
  },

  data: function() {
    return {}
  }
}
</script>
