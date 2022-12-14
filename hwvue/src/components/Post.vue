<template>
    <div class="post">
    <div class="postinfo">
        <div class="post-date">{{post.timestamp}}</div>
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
