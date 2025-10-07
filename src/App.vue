<template>
  <div class="bg-blue-300 flex flex-col" >
      <div class="relative w-full flex justify-center items-center"><Head></Head></div>
      <div class="relative w-full flex justify-center items-center "><Menu></Menu></div>
      <div class="relative w-full flex justify-center items-center ">
        <Body></Body>
        </div>
       <div>{{ counter }}</div>
       <div><button @click="clickcounter">count</button></div>
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