<script>
</script>
<template>
        <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex  max-w-[960px] flex-1">
            <div class="flex w-full">
              <div class="flex flex-row gap-6 px-4 w-full py-10 @[480px]:gap-8 @[864px]:flex-row">
                <div
                  class="w-[80%] bg-center bg-no-repeat aspect-video bg-cover rounded-xl "
                  style='background-image: url("https://cdn.usegalileo.ai/sdxl10/5eca3774-62da-4862-baac-980604155d95.png");'
                ></div>
                <div class="flex flex-row gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                  <div class="flex flex-col gap-2 text-left">
                    <h1
                      class="text-[#111418]  font-black leading-tight tracking-[-0.033em] text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                    “Your platform, their voices, a vote.”
                    </h1>
                    <h2 class="text-[#111418] text-xl text-center font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                        Simple, easy to use voting system
                    </h2>
                    <div class="flex px-4 py-3">
                        <button
                           id="hoverButton" class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#1980e6] text-white text-base font-bold leading-normal tracking-[0.015em]"
                        >
                            <span class="truncate">Get started for free</span>
                        </button>
                        </div>
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>

    <div class="flex flex-col max-w-[960px] flex-1 m-auto">
            <h2 class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 ">How it works</h2>
            <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div class="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                <div class="text-[#111418]" data-icon="Check" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#111418] text-base font-bold leading-tight">Create a vote</h2>
                  <p class="text-[#637588] text-sm font-normal leading-normal">Create a new vote, poll, or survey with our simple and intuitive interface.</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                <div class="text-[#111418]" data-icon="Check" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#111418] text-base font-bold leading-tight">Share your vote</h2>
                  <p class="text-[#637588] text-sm font-normal leading-normal">Share your vote with a link, embed it on your website, or use our API.</p>
                </div>
              </div>
              <div class="flex flex-1 gap-3 rounded-lg border border-[#dce0e5] bg-white p-4 flex-col">
                <div class="text-[#111418]" data-icon="Check" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div class="flex flex-col gap-1">
                  <h2 class="text-[#111418] text-base font-bold leading-tight">Collect responses</h2>
                  <p class="text-[#637588] text-sm font-normal leading-normal">Collect and visualize responses in real time. You can also export data as a CSV or PDF.</p>
                </div>
              </div>
            </div>
        </div>
</template>
<style>
    #hoverButton:hover{
        object-fit: contain;
        background-image: url("../assets/bgButton.svg");
    }
</style>