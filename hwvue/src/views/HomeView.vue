<template>
    <div class="home">
    </div>


    <div id="content">
    <aside class="sidebar"><div></div></aside>
    <PostDisplayer></PostDisplayer>
    <aside class="sidebar"><div></div></aside>
    </div>
</template>

<script>
// @ is an alias to /src
import PostDisplayer from "@/components/PostDisplayer.vue";

export default {
  name: 'HomeView',
  components: {
    PostDisplayer
    
  }
}

</script>

<style scoped>

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
