<template>
  <div class="home">
  </div>
  <PostDisplayer></PostDisplayer>
  <button v-on:click="ResetLikes">RESET</button>
</template>

<script>
// @ is an alias to /src
import PostDisplayer from "@/components/PostDisplayer.vue";

export default {
  name: 'HomeView',
  components: {
    PostDisplayer
    
  },

  data: function() {
    return {}
  },
  methods: {
    ResetLikes: function() {
    this.$store.dispatch("ResetLikeAct")
    }
}

}
</script>
