<template>

<section>
    <div class="logincontent">
        <h2>Welcome to PostIT</h2>

        <form class="loginform" id="loginform">
            <div class="logininput">
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="E-mail" required>
            </div>
            <div class="logininput">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="Password" required>
            </div>
            
            <button type="submit" formaction="#/" id="loginbutton">Sign Up!</button>
        </form>
    </div>
</section>

</template>

<script>
export default {
    name: "SignUpView",
    components: {
        
    }
}

</script>

<style>
/* Login content settings */
section{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logincontent{
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 300px;
    padding: 10px 15px;
    margin: 10px;
    background-color: aqua;
}

.loginform{
    display: flex;
    flex-direction: column;
}

.logininput {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 3px;
}

#loginbutton{
    padding: 10px 15px; 	
    margin: 3px 0px 10px 0px;			
    border: none;
    border-radius: 6px; 		
    color: #ffffff; 			
    background-color: #0463b9;
}

#loginbutton:hover {                 
	background-color: #034784;
}
</style>