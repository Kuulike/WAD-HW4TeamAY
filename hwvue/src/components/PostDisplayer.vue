<template>
    <div class ="AllPosts">
        <div id = "post-list">
            <h1>All Posts</h1>
            <section>
            <ul>
                <div class="post" v-for="post in postsList" :key="post.id">
                    <Post :post="post"></Post> 
                </div>
            </ul>
            <button id="resetbutton" v-on:click="ResetLikes">RESET</button>
            </section>
        </div>
    </div>    
</template>


<script>
import Post from "@/components/Post.vue";
export default{
    name: "PostDisplayer",
    
    data: function() {return{}},
    computed: {
        postsList() {
            return this.$store.state.postsList
        }
    },
    components: {
        Post
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

#resetbutton{
    padding: 10px 15px; 	
    margin: 3px 0px 10px 0px;			
    border: none;
    border-radius: 6px; 		
    color: #ffffff; 			
    background-color: #0463b9;
}

#resetbutton:hover {                 
	background-color: #034784;
}

</style>