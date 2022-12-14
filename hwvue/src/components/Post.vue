<template>
    <div class="post">
    <div class="postinfo">
        <div class="post-date">{{post.timestamp.slice(0, 10)}}</div>
    </div>
    <div class="post-text"> {{post.body}} </div>
</div>

</template>


<script>
export default{
    props:['post'],
    
    data: function() {return{}},
    computed: {
        
    },
    
    
    methods: {
        
    }
}
</script>
