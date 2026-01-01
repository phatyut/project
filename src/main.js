import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// ___________head________________
import Head from '../public/front-end/head/Head.vue';
import Menu from '../public/front-end/menu/Menu.vue';
import Home from '../public/front-end/home/Home.vue';
import Body from '../public/front-end/body/Body.vue';
import Production from "../public/front-end/production/Production.vue"
import Login from '../public/front-end/register/Login.vue';
import Signin from '../public/front-end/register/Signin.vue';
import { createWebHashHistory, createRouter} from 'vue-router';
// ___________body________________
// ___________routes________________
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
         {path:"/",component:Home},
        {path:"/home",component:Home},
        {path:"/production",component:Production},
        {path:"/login",component:Login},
        {path:"/signup",component:Signin},
    ]
})

let app = createApp(App);
app.use(router);






app.component("Head",Head)

app.mount('#app')
