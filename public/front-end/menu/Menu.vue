<template>
    <div class=" relative h-[30px] w-[100%] flex justify-center  items-center   ">
        <div class="w-[90%] flex  items-center justify-between  text-white  rounded-[2px]">
           
            <div class=" flex text-[12px] rounded-[2px]  *:text-white *:font-semibold
                        *:text-shadow-black  *:bg-linear-to-br *:from-[#8f3541] *:to-[#CC8490] 
                        *:px-2.5 *:py-1 gap-1.5 *:rounded-[4px] *:shadow-2xs *:shadow-white">
                <div><router-link to="/home">Home Page</router-link></div>
                <div><router-link to="/production">Sevice</router-link></div>
                <div><router-link to="">View Mode</router-link></div>
                <div><router-link to="/">Production</router-link></div>
            </div>

            <div  class="flex px-[30px] rounded-[2px] *:font-serif *:text-white  *:text-shadow-2xs *:text-shadow-black py-3 gap-5  ">
                 <div><router-link to="">Contact Us</router-link></div>
                 <div><router-link to="">User Comment</router-link></div>             
            </div>

            <div class="flex">
                <form class="max-w-md mx-auto">
                <div class="relative">
                    <input
                    type="search"
                    id="search"
                    class="block w-[250px] h-[30px]  ps-10 text-sm text-white outline-0  rounded-lg  focus:ring-white  bg-amber-950"
                    placeholder="Search..."
                    required
                    />
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                    <svg class="w-5 h-5 text-white drop-shadow drop-shadow-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.293 4.707l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A6 6 0 012 8z" clip-rule="evenodd"></path>
                    </svg>
                    </div>
                </div>
                </form>   
            </div>

        </div>
    </div>
</template>