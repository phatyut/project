<template>
   
        <div class="h-30 w-30 flex justify-center items-center flex-shrink-0  ">
            <img :src="giveimage" alt="" class="h-30 flex-shrink-0">
        </div>
  
</template>
<script>
    export default{
        props:["giveimage"],
        name:"Update_scroll_home",


        data(){
            return {

            }
        }
    }
</script>