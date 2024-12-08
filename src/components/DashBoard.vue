<script setup>
import iconVote from './VoteIcon.vue';
import { computed } from 'vue';
import 'v-calendar/dist/style.css'; 
const props = defineProps(['data'])
 console.log(new Date(props.data.vote[0].dateInit*1))
const attributes =  [
        {
            dot:true,
            dates:new Date(),
        },
        {
          highlight: {
            start: { fillMode: 'outline' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' },
          },
          dates: { start: new Date(props.data.vote[0].dateInit*1), end: new Date(2024, 11, 18) },
        },
      ]

      const participations = computed(() => { return props.data.voted != null ? props.data.voted.length : 0; });

    
</script>


<template>
    <div class="h-full">

        <div class="h-full">
            <h5 class="text-2xl">Welcome back <span class="font-semibold">{{ props.data.name }} </span>😁</h5>
            <div class="h-full flex pt-5 pb-8 ">
                <div class="grid grid-cols-3 grid-rows-5 gap-4 h-full w-full ">
                    <div>
                        <div class="h-full rounded-lg py-3 flex  items-center justify-evenly bg-white ">
                            <iconVote class="p-2 size-12 bg rounded-full text-white"></iconVote>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >has participated en</h5>
                                <span>{{ participations }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-start-1 row-start-2">
                        <div class="h-full rounded-lg py-3 flex  items-center justify-evenly bg-white ">
                            <iconVote class="p-2 size-12 bg rounded-full text-white"></iconVote>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >has participated en</h5>
                                <span>{{ participations }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-3 col-start-1 row-start-3">
                        <div class="rounded-lg h-full flex    ">
                            <vc-calendar style="width: 100%; height: 100%;" :attributes='attributes' lang="us"/>
                        </div>
                    </div>
                    <div class="col-start-2 row-start-1">
                        <div class=" rounded-lg py-3 flex  items-center justify-evenly bg-white ">
                            <iconVote class="p-2 size-12 bg rounded-full text-white"></iconVote>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >has participated en</h5>
                                <span>{{ participations }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-4 col-start-2 row-start-2">
                        <div class="flex bg-white h-full rounded-lg flex-col">
                                <iconVote class="p-2 size-12 bg rounded-full text-white"></iconVote>
                                <h5>name of voteing  <span class="mr-4 font-semibold">- winner</span> </h5>
                            
                            <div class="flex w-full h-full justify-center flex-col  overflow-y-scroll overflow-x-hidden">
                                <div v-for="vote in props.data.vote">
                                    {{ vote.title }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-5 col-start-3 bg-white rounded-lg">3</div>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
 .bg{
    background-image: url("../assets/bgColum.svg");
    background-size: cover;
    background-repeat: no-repeat;
 }
 .bg:hover{
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    
 }
 .custom-calendar-size { width: 100%; /* Ajusta el ancho según tus necesidades */ 
    height: 500px; /* Ajusta la altura según tus necesidades */ }

</style>
