<template>
    <div class="w-[40%] ">
        <div class=" break-all border border-green-700 rounded-[3px] p-2 shadow shadow-blue-800 flex flex-col gap-1.5" v-for="element in items" :key="element"  >
            <div class="text-black bg-white w-[15px] h-[15px] flex justify-center items-center text-[12px] 
                        font-serif rounded-[2px] shadow shadow-black  ">{{ element.number }}</div>
            <div class="text-[12px] font-serif">{{ element.des }}</div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            items:[
                {number:1, des:"this is a left onejljldjljljlkjlkjlkjldjfjoijodfijioj "}
            ]
        }
    }
}
</script>