<template>
  <div class="navbar">
    <nav>
        <router-link :to="{name:'home'}"><img src="@/assets/logo.png" alt=""></router-link>
        <h1><router-link :to="{name:'home'}">PlayList</router-link></h1>
        <div class="links">
            <button @click="handleClick">Logout</button>
            <router-link :to="{name:'signup'}" class="btn">Sign up</router-link>
            <router-link :to="{name:'login'}" class="btn">Login</router-link>
        </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '@/composables/useLogout'
import {useRouter} from 'vue-router';
export default {
    setup() {
        const {logout} = useLogout()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            console.log("user logged out")
            router.push({name:'login'})
        }

        return {handleClick}
    }
}
</script>

<style scoped>
.navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: #fff;
}
nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
nav h1{
    margin-left: 20px;
}
nav .links {
    margin-left: auto;
}
nav .links a, button{
    margin-left: 16px;
    font-size: 14px;
}
nav img{
    max-height: 60px;
}
</style>