<template>
    <div class="w-[80%]  flex justify-between items-center" >
        <div><img src="../../images/ktalogo.png" alt="ktalogo" class="w-[200px]"></div>
        <div class=" border flex bg-black rounded-[30px]">
            <div class="bg-white px-2.5 rounded-[30px] font-serif text-[12px] flex justify-items-center items-center 
                        hover:bg-gray-400">    
                <router-link to="/login" class="">Log in</router-link>
            </div>
            <div class= "bg-white px-2.5 rounded-[30px] font-serif text-[12px] flex justify-items-center items-center">
                <router-link to="/signup">Signup</router-link>
            </div>
        </div>
    </div>
</template>