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
                    <input type="text" id="password" name="password" placeholder="Password" 
                    pattern="^(?=^[A-Z])(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d)(?=.*[_]).{8,15}$"
                    title="Password must follow the following rules: 
                            Length is between 8-15 characters.   
                            Starts with an uppercase letter.       
                            Includes at least one uppercase letter.
                            Includes at least one number.  
                            Includes at least two lowercase letters.
                            Includes the '_' character."
                    required>
                </div>
                <div class="container">
                
                    <button @click="LogIn"  class="center" formaction="#/">LogIn</button>
                    <p> or </p>
                    <button @click='this.$router.push("/signup")' class="center">Signup</button>
                
                </div>
                <!--<button type="submit" formaction="#/" id="loginbutton">Login!</button>-->
            </form>
        </div>
    </section>
    
    </template>
    
    <script>
    export default {
        name: "LoginView",
        components: {
            
        }
    }
    
    </script>

 