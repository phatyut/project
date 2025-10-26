<template>
    <div class=" shadow-xs shadow-black  rounded-[5px]  flex justify-center items-center w-[150px] flex-col p-[15px] gap-1.5" >
        <div class="w-[150px] h-[100px] overflow-hidden  flex justify-center items-center">
            <img :src=url alt="images on prop">
        </div>
        <div class=" font-medium  upercase text-[12px]">{{name }}</div>
        <div class="text-[10px] font-serif">{{desriction }}</div>
        <div class="flex flex-row justify-end items-center w-[100px]  gap-6 ">
            <div class="text-[10px]">{{ price }}$</div>
            <div class="text-[10px] font-serif "><button class="bg-green-400 text-black rounded-[2px] hover:shadow-black hover:shadow-xs hover:text-white hover:bg-green-800 px-2.5 cursor-pointer">{{ textbutton }}</button></div>
        </div>
    </div>
</template>
<script>
    export default{
        props:["name","url","desriction","price",],
        data(){
            return{
                textbutton:"Buy"
            }
        }
    }
</script>
<style scoped>
img{
    position: relative ;
    width: 90px; 
    height: auto;
 

}
</style>