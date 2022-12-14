<template>       

  <section>         
      
    <div>
      <div id="addPostText">
        <div><textarea placeholder="Insert your post text..." id="postText" cols="30" rows="10"></textarea></div>
      </div>

      <div id="addPostFile">
        <div><label for="myfile">Select a file:</label></div>
        <div><input type="file" id="myfile" name="myfile"></div>
      </div>

      <button @click='this.$router.push("/")' class="addpostbutton">Add post</button>
      
                   
    </div>
        
  </section>

</template>

<script>
    export default {
        name: "AddPostView",        
    }
</script>

 

    
