<template>

<section>
    <div class="logincontent">
        <h2>Welcome to PostIT</h2>

        <div class="loginform" id="loginform">
            <div class="logininput">
                <label for="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="E-mail" required v-model="email">
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
                required v-model="password">
            </div>
            
            <button type="submit" @click="SignUp" id="loginbutton">Sign Up!</button>
        </div>
    </div>
</section>

</template>

<script>
export default {
    name: "SignUpView",
    components: {
        
    },

    data: function() {
        return  {
                    email: '',
                    password: '',
                }
    },
    methods: {
        SignUp() {
            var data = {
                email: this.email,
                password: this.password
            };
            // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
            fetch("http://localhost:3000/auth/signup", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: 'include', //  Don't forget to specify this if you need cookies
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            this.$router.push("/");
            //location.assign("/");
            })
            .catch((e) => {
                console.log(e);
                console.log("error");
            });
        },
    }, 
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