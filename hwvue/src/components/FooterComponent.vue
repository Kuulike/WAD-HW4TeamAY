<template>
    <footer class="footer"> 
        <p> TEAM AY. Tanel Tark, Priit Rooden, Janely Adams </p>
    </footer>
</template>

<script>
export default{
    name: "FooterComponent",
}
</script>

<style>
.footer {   
    position: sticky;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-height: 40px;

    background-color: aqua;
    border-radius: .5em;
}

.footer p {
    margin: 10px;
}
</style>