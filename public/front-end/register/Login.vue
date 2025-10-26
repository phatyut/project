<template>
    
    <div class=" fixed w-screen h-screen bg-white top-0 left-0 flex justify-center items-center" v-show="showlogin">
        <div class="relative w-[500px] h-[600px]  border-t-[0.5px] border-b-[0.5px] border-gray-500 flex flex-col gap-3.5 justify-center items-center">
                <h1 class=" absolute top-[20px] ">KTA Company</h1>
            <form action="">
                <div class="relative w-full h-auto flex flex-col items-end gap-6  text-shadow-2xs">
                        <div><Label>Name: <input type="text"></Label></div>
                        <div><Label>Tel: <input type="number"></Label></div>
                        <div><Label>Gmail: <input type="gmail"></Label></div>
                        <div><Label>Company: <input type="text"></Label></div>
                        <div><Label>Province: <input type="text"></Label></div>
                        
                </div>
                <div class=" relative flex justify-end top-10">          
                        <div>
                            <router-link to="./home" class="bg-black hover:bg-green-700 pb-1 px-1  text-white text-center rounded-[2px] text-shadow-regal-blue text-shadow-lg/40 text-shadow-red-700" >
                                 exit
                            </router-link>
                        </div>
                </div>
            </form>
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
          
            // clicklogin(){
            //     this.showlogin=true
            // },hidelogin(){
            //     this.showlogin=false
            // }
        }
    }
</script>
<style scoped>
input{
    border-bottom: 1px solid black;
    outline: none;
    text-align: center;
}
</style>