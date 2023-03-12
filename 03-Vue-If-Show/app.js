const app = Vue.createApp({
     /* v-if DOM YAZILMIYOR */
     /* v-show DOM YAZILIYOR display:none; */
    template:`
    <div v-if='isLogin'>Hoşgeldin {{name}}</div>
    <div v-if='!isLogin'>Giriş Yapın</div>
    <button @click="login()" v-if="!isLogin">Giriş Yap</button>
    <button @click="logout()" v-if="isLogin">Çıkış Yap</button>
    `,
    data() {
        return {
            isLogin:false,
            name:'Furkan'
        }
    },
    methods: {
        login(){
            this.isLogin = true
        },
        logout(){
            this.isLogin = false
        }
    },
})

app.mount('#app')