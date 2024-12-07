<script setup>
import iconVote from './VoteIcon.vue';
import { computed, watch } from 'vue';
import 'v-calendar/dist/style.css'; 
const props = defineProps(['data'])
 console.log(props.data)
const attributes =  [
        {
          highlight: {
            start: { fillMode: 'outline' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' },
          },
          dates: { start: new Date(1765455165105), end: new Date(2024, 11, 18) },
        },
      ]

      const participations = computed(() => { return props.data.voted != null ? props.data.voted.length : 0; });

      watch(() => props.data, (newVal) => { attributes.value[0].dates.start = new Date(newVal); }) ;
</script>


<template>
    <div class="h-full">

        <div class="h-full">
            <h5 class="text-2xl">Welcome back <span class="font-semibold">{{ props.data.name }} </span>😁</h5>
            <div class="h-full">
                    <div class="h-full w-1/3  flex flex-col justify-evenly text-lg  px-2 ">
                        <div class=" rounded-lg py-3 flex  items-center justify-evenly bg-white hoverCard">
                            <iconVote class="p-2 size-12 bg rounded-full text-white"></iconVote>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >has participated en</h5>
                                <span>{{ participations }}</span>
                            </div>
                           
                        </div>
                        <div class=" rounded-lg py-3 flex  items-center justify-evenly bg-white hoverCard">
                            <iconVote class="p-2 size-12 bg rounded-full text-white"></iconVote>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >has participated en</h5>
                                <span>{{ participations }}</span>
                            </div>
                           
                        </div>
                        <div class="rounded-lg py-3 flex  items-center justify-evenly ">
                            <vc-calendar style="width: 100%;" :attributes='attributes'/>
                        </div>

                    </div>
                    <div>

                    </div>
                    <div>

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
