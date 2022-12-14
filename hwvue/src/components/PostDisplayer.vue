

<template>
    <div class ="AllPosts">
        <div id = "post-list">

            <button @click='LogOut' class="logOutButton">Log Out</button>                   
            
            <h1>All Posts</h1>
            <section>
            <ul>
                <div class="post" v-for="post in posts" :key="post.id">
                    <Post :post="post"></Post> 
                </div>
            </ul>

            <div class = "contentChangeButtons">
                <button @click='this.$router.push("/addpost")' class="addPostButton">Add Post</button>
                <button @click='Deleteall' class="deleteAllButton">Delete All</button>
            </div> 
            </section>
        </div>
    </div>    
</template>

<script setup>
import Post from "@/components/Post.vue";
</script>

<script>

export default{
    name: "PostDisplayer",
    //props:['posts'],
    
    data: function() {
    return {
    posts:[ ]
    }
    },
    computed: {
        
    },
    components: {
        Post
    },

    mounted() {
        fetch("http://localhost:3000/api/posts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include', //  Don't forget to specify this if you need cookies
            //body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => this.posts = data)
            .catch((e) => {
                console.log(e);
                console.log("error");
            });
    },
methods: {
    /*
    Deleteall() {
        fetch("http://localhost:3000/api/posts", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include', //  Don't forget to specify this if you need cookies
            //body: JSON.stringify(data),
        })
            .then((response) => response.json())
            //.then(() => this.status = response.status = "delete successful");
            //.then((data) => this.posts = data)
            .catch((e) => {
                console.log(e);
                console.log("error");
            });
    },
*/

    Deleteall()  {
  // Simple DELETE request with fetch
        fetch('http://localhost:3000/api/posts', { method: 'DELETE',credentials: 'include',  })
        .then(() => this.status = 'Delete successful');
        window.location.reload();
    },


LogOut() {
    var data = {
        email: this.email,
        password: this.password
    };
    fetch("http://localhost:3000/auth/logout", {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
        credentials: 'include', // KOOOKID
        //body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    location.assign("/login");
    })
    .catch((e) => {
        console.log(e);
        console.log("error");
    });
    }
}
}
</script>



<style>
.postinfo {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;

}

.postinfo {
    font-size: 16px;
    color: rgb(110, 33, 33);
}

.likes-info {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
}

.likes-info {
    font-size: 16px;
    color: rgb(76, 98, 197);
}

.post {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgb(243, 243, 225);
    height: auto;
    width: 100%;
    border-radius: .5em;
    margin: 20px 0px 20px 1px;
    align-content: left;
    align-items: stretch;    
}

.post div, .post p{
    margin: 10px 10px 10px 10px;
}

.post-text {
    inline-size: 90%;
    overflow-wrap: break-word;
    padding: 3px 3px 3px 3px;
}

.post-text {
    margin-right: 150px;
    font-size: 18px;
    text-align: left;
}

.post-date {
    align-content: right;
}

.poster-logo img{
    width: 35px;
    height:35px;

}

.post-likes img{
    width: 20px;
    height:20px;
}


.post div+p{
    font-size: 16px;
    max-width: 350;
    margin: 10px 10px 10px 10px;
}


.post-date {
    align-content: right;
}

.post-picture {
    display: flex;
    align-items: left;
}

.post-picture img{
    max-width: 350px;
    margin: 0px 0px 0px 20px;
}

.post-likes img{
    width: 20px;
    height:20px;
}


.post div+p{
    font-size: 18px;
    max-width: 350;
    margin: 10px 10px 10px 10px;
}




@media (max-width: 770px) {

    .post-picture{
        align-self: center;
    }

    .post-picture img{
        margin: 0;
    }
}

.AllPosts button {
    padding: 10px 15px; 	
        margin: 3px 20px 10px 20px;			
        border: none;
        border-radius: 6px; 		
        color: #ffffff; 			
        background-color: #0463b9; 
  }

</style>