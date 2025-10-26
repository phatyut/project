<template>
    <div> 
        <div class=" divide-black divide-x-2 divide-double w-[100%] h-[40px] font-serif font-bold  flex flex-row gap-4 py-2 justify-center items-center">
          
            <div class="h-[40px] hover:bg-gray-500 hover:text-white flex items-center  hover:border-b-[3px]
                         hover:border-pink-400 px-4 hover:cursor-pointer"> 
                <router-link to="/home">home</router-link>
            </div>

            <div>
                <router-link to="/production">Production</router-link>
            </div>
           
            <div>Service</div>
            <div>Maintenance</div>
            <div>...</div>
            <div>five</div>
        </div>
    </div>
</template>