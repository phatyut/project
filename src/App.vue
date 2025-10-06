<template>
  <div>
    <!-- <div><button @click="clickme='Home'">show</button></div>
    <div>
      <KeepAlive>
        <component :is="clickme"></component>
      </KeepAlive>
    </div> -->

    <div><router-link to="/home">home</router-link></div>
    <div><router-link to="/body">body</router-link></div>
    <hr>
    <div>
      <router-view>
        
      </router-view>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      clickme:''
    }
  }
}
</script>