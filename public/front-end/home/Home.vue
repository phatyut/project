<!-- 

______________note: this is home page file ______________
1

 -->
<template>
  <div class="h-auo  pt-20 ">
    <!-- scroll in homepage from Update_scroll_home.vue file -->
    <section>
        <div class=" relative w-[100%]  h-30 flex justify-center items-center   ">
                  <div class="relative w-[80%]   overflow-hidden shadow-love  shadow-white  flex gap-10 h-30 rounded-[10px]  
                               ">
                               <div class=" flex animate-scrollX">

                                 <Update_scroll_home 
                                 v-for="element in items" 
                                 :key="element" 
                                 :giveimage="element.src">
                                </Update_scroll_home>                                                  
                              </div>
                              <div class=" absolute top-[0%] left-[0%] h-30 w-70 bg-linear-to-r from-[#a74451] to-100% to-transparent "></div>
                              <div class=" absolute top-0 right-[0%] h-30 w-96 bg-linear-to-l from-[#a74451] to-transparent"></div>
                  </div>

        </div>
    </section>

      
    <!-- Hero Section -->
    <section class="flex flex-col md:flex-row items-center justify-between  text-white p-10">
      <div class="md:w-1/2 text-center md:text-left">
        <h1 class="text-5xl font-extrabold mb-4">SmartTech Solutions</h1>
        <p class="text-lg mb-6">Empowering your business with expert IT support and top-tier tech products.</p>
        <button class="px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200">
          Explore Services
        </button>
      </div>
      <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
        <img src="../../images/v380camera.png" alt="Tech Support" class="w-[80%] rounded-lg " />
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-12 px-6">
      <h2 class="text-3xl font-bold text-white text-center mb-8">What We Offer</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow text-center">
          <div class="text-blue-600 mb-4">
            <i class="fas fa-headset text-3xl"></i>
          </div>
          <h3 class="font-bold text-xl mb-2">24/7 Remote Support</h3>
          <p>Instant help via SSH, RDP, or TeamViewer for your systems and networks.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow text-center">
          <div class="text-blue-600 mb-4">
            <i class="fas fa-tools text-3xl"></i>
          </div>
          <h3 class="font-bold text-xl mb-2">Hardware Services</h3>
          <p>Repair and upgrade desktops, laptops, and networking equipment.</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow text-center">
          <div class="text-blue-600 mb-4">
            <i class="fas fa-network-wired text-3xl"></i>
          </div>
          <h3 class="font-bold text-xl mb-2">Network Setup</h3>
          <p>Install and configure secure, high-speed networks for home or office.</p>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-12 px-6 bg-white">
      <h2 class="text-3xl font-bold text-center mb-8">Top-Selling Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src="../../images/computer.png" alt="Router" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-lg">Dual-Band Wi-Fi Router</h3>
            <p class="text-sm text-gray-600">Fast and secure wireless connectivity.</p>
            <span class="text-blue-700 font-semibold block mt-2">$49.99</span>
          </div>
        </div>
        <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src="../../images/dphdmi.png" alt="SSD" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-lg">256GB SSD Drive</h3>
            <p class="text-sm text-gray-600">Boost performance and storage speed.</p>
            <span class="text-blue-700 font-semibold block mt-2">$39.99</span>
          </div>
        </div>
        <div class="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
          <img src="../../images/dphdmi.png" alt="SSD" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="font-bold text-lg">256GB SSD Drive</h3>
            <p class="text-sm text-gray-600">Boost performance and storage speed.</p>
            <span class="text-blue-700 font-semibold block mt-2">$39.99</span>
          </div>
        </div>
        <!-- Add more products here -->
      </div>
    </section>

    <!-- Contact CTA -->
      <br>
      <br>

    <section class="py-12 px-6 bg-black text-white text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Upgrade Your Tech?</h2>
      <p class="mb-6">Let our experts guide you through the best solutions for your business or home.</p>
      <button class="px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200">
        Contact Support
      </button>
    </section>
  </div>
</template>
<script>
import Update_scroll_home from './Update_scroll_home.vue';


//  _____________________bind images _____________________
import dc from "../../images/dc.png";

export default{
  components:{Update_scroll_home},
  data(){
    return {
     items:[
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
        {src:dc},
     ]
    }
  }
}
</script>



