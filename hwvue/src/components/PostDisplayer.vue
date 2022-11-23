<template>
    <section>
        <div class="post" v-for="post in postsList" :key="post.id">
            <div class="postinfo">
                <div class="poster-logo">
                    <img :src="post.me" alt="Profile Picture">
                </div>
                <div class="post-date">{{post.timestamp}}</div>
            </div>
        
            <div class="post-text"> {{post.body}} </div>
            <div class="post-picture">
                <img :src="post.postPicture">
            </div>

            <div class="likes-info">    
                <div class="post-likes">
                    <button v-on:click="IncreaseLikes(post.id)"><img src="../assets/likelogo.png" alt="Like"></button> 
                </div>
                <div>{{post.likes}} likes</div>
            </div>
        </div>
        <button id="resetbutton" v-on:click="ResetLikes">RESET</button>
    </section>
    
</template>

<script>
export default{
    name: "PostDisplayer",
    data: function() {return{}},
    computed: {
        postsList() {
            return this.$store.state.postsList
        }
    },

    methods: {
        IncreaseLikes(id) {
            //console.log(id)
            this.$store.dispatch("IncreaseLikeAct", {id})
        },
    
        ResetLikes: function() {
        this.$store.dispatch("ResetLikeAct")
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
    font-size: 18px;
    color: rgb(110, 33, 33);
}

.likes-info {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: row wrap;
}

.likes-info {
    font-size: 18px;
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
    font-size: 24px;
    text-align: left;
}

.post-date {
    align-content: right;
}

.post-picture img{
    max-width: 500px;
    margin: 0px 0px 0px 0px;
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
    font-size: 18px;
    max-width: 350;
    margin: 10px 10px 10px 10px;
}


.post-date {
    align-content: right;
}

.post-picture img{
    max-width: 350;
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