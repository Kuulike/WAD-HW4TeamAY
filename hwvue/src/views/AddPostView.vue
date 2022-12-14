<template>       

  <section>       
    <div class="adding-content">  
    <h1>Add Post</h1>  
    <div class="userinput" >        
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" /><br/>     
      
                  
    </div>
    <button @click="addPost" class="addpostbutton">Add post</button>
</div>
  </section>

</template>

<script>
    export default {
        name: "AddPostView",   
        data() {
    return {
      post: {
        timestamp:"",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
      
        body: this.post.body,
      };
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        this.$router.push("/");
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

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.adding-content{
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 300px;
    padding: 10px 15px;
    margin: 10px;
    background-color: aqua;
}




.addpostbutton{
    padding: 10px 15px; 	
    margin: 3px 0px 10px 0px;			
    border: none;
    border-radius: 6px; 		
    color: #ffffff; 			
    background-color: #0463b9;
}

.addpostbutton:hover {                 
    background-color: #034784;
}
</style>


    
