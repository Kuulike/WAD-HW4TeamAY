<template>
    <section>
        <h1>Siia teeme postitused!</h1>
        <div class="post" v-for="post in postsList" :key="post.id">
            <div class="postinfo">
                <div class="poster-logo">
                    <p> {{post.timestamp}} </p>
                    <img src={{post.me}}>
                </div>
            </div>
        
            <div class="post-text"> {{post.body}} </div>
            <div class="post-picture">
                <img src={{post.postPicture}}>
            </div>
            
            <div class="post-likes">
                <img src={{post.like}}>
            </div>
        </div>
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

.postinfo div~p{
    color: rgb(110, 33, 33);
}

.post {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgb(243, 243, 225);
    height: auto;
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

#content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>