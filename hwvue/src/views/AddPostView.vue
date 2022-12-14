<template>       

  <section>         
      
    <div>
        <h1>Add Post</h1>
        <label for="title">Title: </label>
    <input name="title" type="text" id="title" required v-model="post.title" /><br/>
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" /><br/>
        
    <label for="urllink">Url: </label>
    <input name="urllink"  type="text" id="urllink" required v-model="post.urllink"/><br/>
    
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
        title: "",
        body: "",
        urllink: "",
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        title: this.post.title,
        body: this.post.body,
        urllink: this.post.urllink,
      };
      fetch("http://localhost:3000/api/posttable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

 

    
