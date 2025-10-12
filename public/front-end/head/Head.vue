<template>
    <div class="w-[80%]  flex justify-between items-center" >
        <div><img src="../../images/ktalogo.png" alt="ktalogo" class="w-[200px]"></div>
        <div class="flex flex-rwo border-gray-500 border px-3.5 overflow-hidden rounded-[4px] gap-x-3.5  font-medium">
            <div class="bg-white">    
                <router-link to="/login" class="">LogIn</router-link>
            </div>
            <div>
                <router-link to="/signup">Sign Up</router-link>
            </div>
        </div>
    </div>
</template>