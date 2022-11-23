<template>
  <div class="home">
  </div>
  <PostDisplayer></PostDisplayer>
  <button v-on:click="IncreaseLikes">Like</button>
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
  },

methods: {
  IncreaseLikes: function() {
    this.$store.dispatch("IncreaseLikeAct")
  }
}
}
</script>
