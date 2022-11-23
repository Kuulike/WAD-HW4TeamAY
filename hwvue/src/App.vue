<template>
  <header-component></header-component>
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/signup">Sign Up</router-link>
  </nav>
  -->
  <router-view/>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
    name: "SignUpView",
    components: {
        HeaderComponent,
        FooterComponent
    }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
