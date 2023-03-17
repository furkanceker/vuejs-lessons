<template>
    <div class="post">
        <router-link :to="{name:'Post',params: {id:post.id}}"><h3>{{ post.title }}</h3></router-link>
    </div>
</template>

<script>
export default {
    props: ['post'],
    setup(props) {
        console.log(props.post.title)
    }
}
</script>

<style>
.post {
    margin: 20px auto;
    background: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
    border-left: 4px solid #ff5500;
}
a {
    text-decoration: none;
}
h3 {
    cursor: pointer;
}
</style>