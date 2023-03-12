const app = Vue.createApp({
    template:`
    <h2>Başlık : {{baslik}}</h2>
    <h3>İçerik : {{icerik}}</h3>
    <p>Yorum Sayısı : {{yorumSayisi}}</p>
    `,
    data() {
        return {
            baslik:'Vue Dersi',
            icerik:'Vue.js Konuları',
            yorumSayisi:7,
        }
    }
})
app.mount('#app')