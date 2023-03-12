const app = Vue.createApp({
    template:`
    <h2>Frameworkler</h2>
    <ul>
        <li v-for="row in frameworks" @click="select(row)" class="list" :class="{selected:row.selected}">
        {{row.name}}
        </li>
    </ul>
    <h3>Seçilen Frameworkler</h3>
    <ul>
        <li v-for="s in selectedTags">
        {{s.name}}
        </li>
    </ul>
    `,
    data() {
        return {
            frameworks:[
                {name:"Vue",selected:true},
                {name:"Angular",selected:false},
                {name:"React",selected:false},
                {name:"Svelte",selected:false}
            ]
        }
    },
    methods: {
        select(row){
            row.selected=!row.selected
        }
    },
    computed:{
        selectedTags(){
            return selecteds=this.frameworks.filter(i=>i.selected)
        }
    }
})

app.mount('#app')