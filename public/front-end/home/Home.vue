<template>
  <!-- <div class=" *:bg-red-500"> -->
    <div class="relative">
        <div class="flex justify-center items-center">
          <div class="w-[70%] flex justify-end pt-10 text-3xl text-white font-bold text-shadow-2xs text-shadow-black"> Why choose <br> my  service?</div>
        </div>
    </div>


    <div class="relative w-[100%] flex">
        <div class="w-[50%] flex justify-center items-center"><Oneleft></Oneleft></div>
        <div class="w-50%"><Oneright></Oneright></div>
    </div>
      <!-- <div v-for="element in items" :key="element" class="w-[200px] h-[200px] border break-words">
        {{ element.number }}
        {{ element.des }}
      </div> -->
      
</template>
<script>
import Oneleft from './Oneleft.vue';
import Oneright from './Oneright.vue';

export default{
  components:{Oneleft,Oneright},
  data(){
    return{
        items:[
          {number:1,des:" adfdfadsfadfadsadASDSAdfdfdfdfdfdD"},
         
        
         
        ]
    }
  }
}
</script>