<template>
 <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
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
              <a class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" href="#/">How it works</a>
              <a class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" href="#/">News</a>
              <a class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" href="#/">Examples</a>
              <a class="text-[#111418] text-sm font-medium leading-normal hover:scale-110" href="#/">API</a>
            </div>
            <button id="hoverButton"
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <a class="truncate" href="/Login">Login</a>
            </button>
            <button id="button2"
                class="flex min-w-[84px]  hover:text-white max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <a class="truncate" href="/SingUp" >Sign up</a>
              </button>
          </div>
        </header>
</template>
<style>
    #hoverButton:hover{
        object-fit: contain;
        background-image: url("../assets/bgButton.svg");
        
    }
    #button2:hover{
        object-fit: contain;
        background-image: url("../assets/bgButtonRedandWhite.svg");
        
    }
</style>

