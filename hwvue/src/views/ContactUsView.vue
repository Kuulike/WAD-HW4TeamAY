<template>

    <section>
        <div class="ContactUsView">
            <h1>Contact us</h1>
            <h2>Team AY</h2> 
            <div class = "members">
            <h3>Members:</h3>
            <p>Tanel Tark, Priit Rooden, Janely Adams</p>  
        </div>
        <div class = "info">
            <h3>Email:</h3>          
            <p>teamay@mail.com</p>
        </div>
        </div>
    </section>
    
</template>
    
    <script>
    export default {
        name: "ContactUsView",
        components: {
            
        }
    }
    
    </script>

<style>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.ContactUsView{
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 300px;
    padding: 10px 15px;
    margin: 10px;
    background-color: aqua;
}
</style>