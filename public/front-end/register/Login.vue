<template>
    
    <div class=" fixed w-screen h-screen  bg-white top-0 left-0 flex justify-center items-center" v-show="showlogin">
        <div class=" absolute"><img src="../../images/imglogin.jpg" alt="" class="w-screen  "></div>
       
        <div class="w-[80%] h-[100%]  flex flex-row justify-center items-center gap-16 ">
            <div class=" w-[35%] h-[90%]   shadow-xs  shadow-white inset-shadow-white   rounded-[5px] text-white z-20 p-5">
                 <div class="text-center text-[16px] font-semibold underline">Create new Account</div>
                  <div class="pt-[20px]">
                        <form action="">
                            <div class="flex flex-row  pt-[20px] items-center gap-4 ">
                                <div  class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">First Name: </div>
                                    <div><input type="text" class="text-center border border-gray-500 text-[12px] p-1 w-[150px] h-[28px] rounded-[20px] border outline-none shadow "></div>
                                </div>
                                <div class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">Last Name: </div>
                                    <div><input type="text" class="border text-center border-gray-500 text-[12px] p-1 w-[150px] h-[28px] rounded-[20px]"></div>
                                </div>
                            </div>
                            <div class="flex flex-row  pt-[20px] items-center gap-4 ">
                                <div  class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">Gender: </div>
                                    <div><input type="text" class="text-center border border-gray-500 text-[12px] p-1 w-[150px] h-[28px] rounded-[20px]"></div>
                                </div>
                                <div class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">Telephone: </div>
                                    <div><input type="number" class="border text-center border-gray-500 text-[12px] p-1 w-[150px] h-[28px] rounded-[20px]"></div>
                                </div>
                                
                            </div>


                            <div class="flex flex-col  pt-[20px] items-center gap-3 ">
                                <div  class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">Gmail: </div>
                                    <div><input type="text" class="text-center border border-gray-500 text-[12px] p-1 w-[310px] h-[28px] rounded-[20px]"></div>
                                </div> 
                            </div>
                          
                          
                            <div class="flex flex-col  pt-[20px] items-center gap-3 ">
                                <div  class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">Factory Name: </div>
                                    <div><input type="text" class="text-center border border-gray-500 text-[12px] p-1 w-[310px] h-[28px] rounded-[20px]"></div>
                                </div> 
                            </div>
                            <div class="flex flex-col  pt-[20px] items-center gap-3 ">
                                <div  class="flex flex-col gap-y-1.5">
                                    <div class="text-[12px] font-semibold">Address: </div>
                                    <div><input type="text" class="text-center border border-gray-500 text-[12px] p-1 w-[310px] h-[28px] rounded-[20px]"></div>
                                </div> 
                            </div>
                           
                          
                            
                            <div class="w-[100%] flex flex-col pt-[25px] justify-center items-center gap-2.5 ">
                                <div><button class=" text-[14px] rounded-[3px] px-14 py-1 bg-green-700 font-bold" @click="hidelogin">Sign In</button></div>
                                <div><button class=" text-[14px] text-blue-600 ">Aleady have an accound?</button></div>
                            </div>

                            

                        </form>
                  </div>
            </div>


            
            <div class="w-[55%] h-[98%] z-20 flex justify-end pt-[50px] text-white">
                <div class="w-[75%] flex flex-col gap-y-14">
                   
                    <div class="text-center">Create your free account.</div>
                    <div>
                        <div class="text-center">.Sale Production</div>
                        <div class="text-center">.Maintenance Service</div>
                        <div class="text-center">.Installation Service</div>
                    </div>
                        
                </div>
               
            </div>
        </div>
      

    </div>
</template>
<script>
    export default{
        data(){
            return{
                showlogin:true
            }
        },methods:{
          
            clicklogin(){
                this.showlogin=true
            },hidelogin(){
                this.showlogin=false
            }
        }
    }
</script>
<style scoped>

</style>