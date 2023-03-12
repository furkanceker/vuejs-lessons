<template>
    <div>
        <h3>{{ titleText }}</h3>
        <h3>{{ text }}</h3>
    </div>
</template>

<script>
export default {
    props:['titleText','text'],
    data() {
        return {
            
        }
    },
}
</script>
<!-- "scoped" componenti etkiler -->
<style scoped>
    h3{
        color: orangered;
        font-size: 30px;
        font-weight: 700;
    }
</style>