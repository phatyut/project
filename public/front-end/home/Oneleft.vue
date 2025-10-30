<template>
    <div class="w-[40%]  grid gap-3">
        <div class=" break-all border bg-gray-700 text-white border-green-700 rounded-[3px] p-2 shadow shadow-blue-800 grid  flex-col gap-2"
             v-for="element in items" :key="element"  >
            <div class="text-black bg-white w-[15px] h-[15px] flex  justify-center items-center text-[12px] 
                        font-serif rounded-[2px] shadow shadow-green-900  ">{{ element.number }}</div>
            <div class="text-[12px] font-serif text-shadow-md text-shadow-black">{{ element.des }}</div>
        </div>

        
    </div>
</template>
<script>
export default{
    data(){
        return{
            items:[
                {number:1, des:"Maintenance free 3month for new factoty will choose my service and buy my production for soppurt full factory. And if you want to find maintanent  ok."},
                {number:2, des:"when my produntion  "},
                {number:3, des:"this is a left onejljldjljljlkjlkjlkjldjfjoijodfijioj "},
                {number:4, des:"this is a left onejljldjljljlkjlkjlkjldjfjoijodfijioj "},
               
            ]
        }
    }
}
</script>