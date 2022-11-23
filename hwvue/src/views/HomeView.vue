<template>
  <div class="home">
  </div>


  <div id="content">
  <aside class="sidebar"><div></div></aside>
  <PostDisplayer></PostDisplayer>
  <aside class="sidebar"><div></div></aside>
  </div>
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

<style scoped>
.postinfo {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
}

.postinfo div~p{
    color: rgb(110, 33, 33);
}

.post {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgb(243, 243, 225);
    height: auto;
    border-radius: .5em;
    margin: 20px 0px 20px 1px;
    align-content: left;
    align-items: stretch;    
}

.post div, .post p{
    margin: 10px 10px 10px 10px;
}

.post-text {
    inline-size: 90%;
    overflow-wrap: break-word;
    padding: 3px 3px 3px 3px;
}



#content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}


.sidebar {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    background: rgb(212, 236, 175);
    position: flex-justify;
    top:auto;

    height: auto;
    border-radius: .5em;
    margin: 20px 10px 20px 10px;
    padding: 10px 10px 10px 10px;
}

.sidebar > div{
    height: 100%;
    min-height: 300px;
}



@media (max-width: 770px) {
    .sidebar {
        display: none;
    }

}
</style>
