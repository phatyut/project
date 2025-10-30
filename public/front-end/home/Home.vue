<template>
  <!-- <div class=" *:bg-red-500"> -->
    <div class="relative">
        <div class="flex justify-center items-center">
          <div class=" flex justify-end w-[70%]">
            <div class=" flex justify-center imtes-center pt-10 text-3xl text-white font-bold text-shadow-2xs text-shadow-black"> Why choose <br> my  service?</div>
          </div>
        </div>
    </div>


    <div class="relative w-[100%] flex ">
        <div class="w-[50%] flex justify-center items-center"><Oneleft></Oneleft></div>
        <div class="w-[50%] flex justify-center items-center " ><Oneright></Oneright></div>
    </div>
    


    <div class="relative w-[100%] flex p-20">
        <div class="w-[40%] flex justify-center items-center border "></div>
        <div class="w-[60%] flex justify-center items-center border">
          <div class=" w-[400px] h-[400px] border border-green-600  flex justify-center items-center shadow shadow-white rounded-full animate-rotate-slow " >
              <div class=" absolute w-[60px] h-[60px] border top-[-30px] rounded-full p-1 ">
                <img src="../../images/printer.png" alt="" class=" w-[45px] h-auto ">
              </div>
              <div class=" absolute w-[60px] h-[60px] border right-[-30px] rounded-full p-1 ">
                <img src="../../images/download.png" alt="" class=" w-[45px] h-auto ">
              </div>
              <div class=" absolute w-[60px] h-[60px] border left-[-30px] rounded-full p-1 ">
                <img src="../../images/download.png" alt="" class=" w-[45px] h-auto ">
              </div>
              <div class=" absolute w-[60px] h-[60px] border bottom-[-30px] rounded-full p-1 ">
                <img src="../../images/download.png" alt="" class=" w-[45px] h-auto ">
              </div>
            <div class=" w-[200px] h-[200px] border rounded-full animate-back-slow" >
              <div class="">
                <img src="../../images/PVC.png" alt="">
              </div>
            </div>
          </div>
          
          <br>
        </div>
        
      </div>

      <input type="text" class="border border-white">



      <div class="w-screen flex justify-center items-center">
        <div class="flex justify-center items-center w-[70%] gap-4">
            <div class="w-[40%] border border-red-400"></div>
            <div class="w-[10%] h-[40px] border rounded-full"></div>
            <div class="w-[40                                                                                                                                                                                       %] border border-red-400"></div>
        </div>
      </div>
      
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