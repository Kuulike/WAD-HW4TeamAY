<template>
    <header class="header">
        <ul class="navbar">
            <li class="navoption"><a href="#/signup"><strong>Sign Up</strong></a></li>
            <li>|</li>
            <li class="navoption"><a href="#/"><strong>Home</strong></a></li>
        </ul>
    </header>
</template>

<script>
export default{
    name: "HeaderComponent",
}
</script>

<style>
.header{
    position: sticky;
    top: 0;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background-color: aqua;
    border-radius: .5em;
}

.navbar{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    margin-left: 0.5em;
}

.navbar li{
    display: flex;
    align-items: center;
}

.navbar li, .navbar a{
    color: black;
    margin-left: 5px;
    margin-right: 5px;
    font-size: x-large;
}

.navoption:hover{
    transition: 0.6s;
    background-color: rgb(121, 255, 179);
    border-radius: .5em;
}
</style>