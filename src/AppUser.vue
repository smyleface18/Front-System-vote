<script setup>
import Exit from './components/icons/Exit.vue';
function goBack() {
  localStorage.setItem("token","");
 window.location.href = "/index.html"
  }
</script>

<template>
  <header class="h-16 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
           <div class="flex items-center gap-4 text-[#111418]">
             <div class="size-6">
               <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <g clip-path="url(#clip0_6_330)">
                   <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                     fill="currentColor"
                   ></path>
                 </g>
                 <defs>
                   <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                 </defs>
               </svg>
             </div>
             <h2 class="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">FreeVote</h2>
           </div>
           <div class="flex flex-1 justify-end gap-8">
             <div class="flex items-center gap-9">
               <RouterLink class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" to="/">How it works</RouterLink>
               <RouterLink class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" to="/">News</RouterLink>
               <RouterLink class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" to="/">Examples</RouterLink>
               <RouterLink class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" to="/DocumentationApi">API</RouterLink>
               <RouterLink class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" to="/Profile">Profile</RouterLink>
               <a class=" text-white bg-red-500 size-8 p-[1px] flex justify-center items-center rounded-full font-medium leading-normal hover:scale-110"
                @click="goBack()"><Exit class="size-3/4"></Exit></a>
             </div>
           </div>
  </header>
         <RouterView class=" bg-gray-200 h-2/4"></RouterView>
 </template>
 <style>
     #hoverButton:hover{
         object-fit: contain;
         background-image: url("assets/bgButton.svg");
         
     }
     #button2:hover{
         object-fit: contain;
         background-image: url("assets/bgButtonRedandWhite.svg");
         
     }
 </style>
 
