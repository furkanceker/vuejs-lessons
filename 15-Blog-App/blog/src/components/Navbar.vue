<template>
  <nav class="main-nav">
    <router-link :to="{name:'Home'}">Blogs</router-link>
    <router-link :to="{name:'Add'}">Add New Blog</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
.main-nav{
    text-align: center;
    margin: 40px auto;
}
.main-nav a {
    display: inline-block;
    text-decoration: none;
    margin: 0 10px;
    color: #999;
    font-size: 18px;
    transition: .3s;
}
.main-nav a:hover{
    color: #666;
}
a.router-link-active {
    border-bottom: 2px solid #111;
    padding-bottom: 4px;
    color: #333;
}
</style>