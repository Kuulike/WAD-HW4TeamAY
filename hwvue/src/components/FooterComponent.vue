<template>
    <footer class="footer"> </footer>
</template>

<script>
export default{
    name: "FooterComponent",
}
</script>

<style>
.footer {   
    position: fixed;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    padding-top: .5em;
    padding-bottom: .5em;
    background-color: aqua;
    border-radius: .5em;
}
</style>