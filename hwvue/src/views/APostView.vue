<template>    

    <section>         
        
      <div>
        <div id="PostText">
          <h1>A Post</h1>          
        </div>
  
        <div>
            <h3>Body:</h3>
            <textarea id="postBody" cols="30" rows="5" style="resize:none" ></textarea>
        </div>
          
        <button class="updatepostbutton">Update</button>
        <button class="deletepostbutton">Delete</button>
        
                     
      </div>
          
    </section>
  
  </template>
  
  <script>
      export default {
          name: "APostView",        
      }
  </script>
  