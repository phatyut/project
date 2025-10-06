import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// ___________head________________
import Home from '../public/frond/home/Home.vue';
import Body from '../public/frond/body/Body.vue';
import { createWebHashHistory, createRouter} from 'vue-router';
// ___________body________________
// ___________routes________________
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/home",component:Home},
        {path:"/body",component:Body},
    ]
})

let app = createApp(App);
app.use(router);





app.component("Home",Home)

app.mount('#app')
