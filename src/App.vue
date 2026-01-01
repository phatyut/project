



<template>
  <!-- to-[#A64451] -->
  
<div class=" bg-linear-to-l from-blue-900 via-blue-700">
      <div class="   ">
        <div><Head></Head></div>
      </div>
      <div>
        <Menu></Menu>
      </div>

      <div class=" w-[100%] flex justify-center items-center">
        <div class="w-[80%]">
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