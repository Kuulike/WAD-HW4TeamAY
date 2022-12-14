<template>       

  <section>         
      
    <div>
        <h1>Add Post</h1>
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" /><br/>    
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

 

    
