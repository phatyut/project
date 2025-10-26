<template>
    <div class="uppercase"> this is a kta production example</div>
    <div class="relative  rounded-[3px]  flex gap-3.5 flex-wrap">
        <prop-production 
             v-for="element in items" :key="element" ref=""
             :name="element.name" :url="element.url" :desriction="element.desriction" :price=" element.price" >
         </prop-production>
       
    </div>
   

</template>
<script>
import PropProduction from './PropProduction.vue';
import Logo from "../../images/ktalogo.png" ;
import Router from "../../images/router.png";
import Computer from "../../images/computer.png";
import Networksharer from "../../images/networksharer.png"

export default{
    components:{PropProduction},
    data(){
        return{
            items:[
                {name:"Logo",url:Logo,desriction:"this is a logo",price:12},
                {name:"Wifi",url:Router,desriction:"this is a router",price:35},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Computer" ,url:Computer, desciction:"this is a computer" ,price:135},
                {name:"Network Sharer" ,url:Networksharer, desciction:"this is a network sharer" ,price:10}
            ]

        }
    }
}
</script>