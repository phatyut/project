<template>
  <div class="bg-blue-300 flex flex-col gap-y-7" >
      <div class="relative w-full flex justify-center items-center"><Head></Head></div>
      <div class="relative w-full flex justify-center items-center shadow shadow-blue-100 "><Menu></Menu></div>
      <div class="relative w-full flex justify-center items-center ">
        <Body></Body>
        </div>
      

  </div>
</template>
<script>

   

export default {
  
  data(){
    return{
      counter:0
    }
  },methods:{
    clickcounter(){
      this.counter++;
    }
  }

}
</script>