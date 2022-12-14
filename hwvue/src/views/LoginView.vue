<template>

    <section>
        <div class="logincontent">
            <h2>Welcome to PostIT</h2>
    
            <div class="loginform" id="loginform">
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
                
                    <button @click="LogIn"  class="choiceButtons">Log In</button>
                    <p> or </p>
                    <button @click='this.$router.push("/signup")' class="choiceButtons">Sign Up</button>
                
                </div>
                <!--<button type="submit" formaction="#/" id="loginbutton">Login!</button>-->
            </div>
        </div>
    </section>
    
    </template>
    
    <script>
    export default {
        name: "LoginView",
        data: function() {
    return {
    email: '',
    password: '',
}
},
methods: {
LogIn() {
    var data = {
        email: this.email,
        password: this.password
    };
    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: 'include', // KOOOKID
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    location.assign("/");
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
.choiceButtons {
    padding: 10px 15px; 	
        margin: 3px 20px 10px 20px;			
        border: none;
        border-radius: 6px; 		
        color: #ffffff; 			
        background-color: #0463b9; 
  }
 .choiceButtons:hover {                 
        background-color: #034784;
    }
  .container {
    display: flex;
    justify-content: center;
  }
  </style>
