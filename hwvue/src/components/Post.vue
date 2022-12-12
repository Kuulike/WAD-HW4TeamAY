<template>
    <div class="post">
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

</template>


<script>
export default{

    name: "Post",
    props:['post'],
    
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