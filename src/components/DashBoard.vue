<script setup>
import IconList from './icons/IconList.vue';
import VoteIcon from './VoteIcon.vue';
import IconWinner from './icons/IconWinner.vue';
import ListVoteing from './ListVoteing.vue';
import CardProfile from './CardProfile.vue';
import IconSurvey   from './icons/IconSurvey.vue';
import IconPeoples from './icons/IconPeoples.vue';
import Calendar from './Calendar.vue';
import { computed } from 'vue';
import 'v-calendar/dist/style.css'; 


const props = defineProps(['data'])


    const Countparticipations = computed(() => { return props.data.voted != null ? props.data.voted.length : 0; });
    const Countvotings = computed(() => {return props.data.vote != null? props.data.vote.length : 0; })
    const Countvotes = computed(() => {
        let count = 0;
        if(props.data.vote != null){
            props.data.vote.forEach(votes => {
                votes.options.forEach(option => {
                    count += option.votes
                })
            });
            
        }
        return count;
    })
</script>


<template>
    <div class="">
            <h5 class="text-2xl">Welcome back <span class="font-semibold">{{ props.data.name }} </span>😁</h5>
            <div class=" mt-1 flex">
                <div class="grid grid-cols-3 grid-rows-5 gap-4 h-[500px] w-full" >
                    <div>
                        <div class="h-full rounded-lg py-3 flex  items-center justify-evenly bg-white ">
                            <VoteIcon class="p-2 size-12 bg rounded-full text-white"></VoteIcon>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >He has participated in</h5>
                                <span>
                                    <span class="font-semibold">{{ Countparticipations }} </span>
                                    <span> voting</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-start-1 row-start-2">
                        <div class="h-full rounded-lg py-3 flex  items-center justify-evenly bg-white ">
                            <IconSurvey class="p-2 size-12 bg rounded-full text-white"></IconSurvey>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >You have created</h5>
                                <span>
                                    <span class="font-semibold">{{ Countvotings }} </span>
                                    <span> votings</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-3 col-start-1 row-start-3">
                        <div class="rounded-lg h-full flex    ">
                            <Calendar :data="props.data.vote"></Calendar>
                        </div>
                    </div>
                    <div class="col-start-2 row-start-1">
                        <div class=" rounded-lg py-3 flex  items-center justify-evenly bg-white h-full">
                            <IconPeoples class="p-2 size-12 bg rounded-full text-white"></IconPeoples>
                            <div class="flex justify-center flex-col items-center ">
                                <h5 >Your votes received</h5>
                                <span>
                                    <span class="font-semibold">{{ Countvotes }} </span>
                                    <span> votes in total.</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row-span-4 col-start-2 row-start-2">
                        <div class="flex bg-white h-full rounded-lg flex-col">
                            <div class="flex space-x-5 items-center py-5 text-sm mx-auto">
                                <div class="flex items-center space-x-2">
                                    <IconList class="p-2 w-10 h-10 bg rounded-full text-white "></IconList>
                                    <h5 class="flex flex-col">name of the
                                        <span>ballot boxe</span> </h5>
                                </div>
                                    <span class="font-semibold flex items-center space-x-2">
                                        <IconWinner class="size-10 p-2 bg rounded-full text-white"></IconWinner>
                                        <span>winner</span>    
                                        
                                    </span>
                            </div>
                            <ListVoteing :votes="props.data.vote"></ListVoteing>
                        </div>
                    </div>
                    <div className="row-span-5 col-start-3 bg-white rounded-lg p-2">
                        <CardProfile :name="props.data.name" :email="props.data.email" :id="props.data.id"></CardProfile>
                    </div>
                </div>
            </div>
    </div>
</template>
<style scoped>

 .bg{
    background-image: url("../assets/bgColum.svg");
    background-size: cover;
    background-repeat: no-repeat;
 }
 .bgRed{
    background-image: url("../assets/bgButtonRed.svg");
    background-size: cover;
    background-repeat: no-repeat;
    border: solid rgba(0, 0, 0, 0.507) 1px;
 }
 .bg:hover{
    -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    
 }

</style>
