const app = Vue.createApp({
    template:`
    <h2>{{title}}</h2>  
    <ul>
        <li v-for="person in persons">{{person.name}} - {{person.age}}</li>
    </ul>
    `,
    data() {
        return {
            /*   
            title:'Günler',
            days:[
                'Pazartesi',
                'Salı',
                'Çarşamba',
                'Perşembe',
                'Cuma',
                'Cumartesi',
                'Pazar'
            ] */
            title:'Kişiler',
            persons:[
            {name:"Furkan",age:20},
            {name:"Burak",age:19},
            {name:"İbrahim",age:19},
            {name:"Muhammet",age:20},
            ]
        }
    },
    methods: {

    },
})

app.mount('#app')