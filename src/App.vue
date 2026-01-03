



<template>
  <!-- to-[#A64451] -->
  
<div class=" bg-linear-to-br from-[#8f3541] to-[#CC8490] p-5">
      <div class="   ">
        <div><Head></Head></div>
      </div>
      <div class=" mt-10">
        <Menu></Menu>
      </div>

      <div class=" w-[100%] flex justify-center items-center">
        <div class="w-full">
            <router-view></router-view>
          </div>
        </div>
</div>
 
</template>
<script>
  import Menu from '../public/front-end/menu/Menu.vue';
  export default{
    components:{Menu},
    data(){
      return {

      }
    }
  }
</script>