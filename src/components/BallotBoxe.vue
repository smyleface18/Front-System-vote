<script setup>
import CardBallot from './CardBallot.vue';
import CreateBallotBoxe from './CreateBallotBoxe.vue';
import { ref } from 'vue';

const props = defineProps(['data'])
let viewComponent
let haveVotes = props.data.vote.length != 0;
console.log(props.data.vote)
if(haveVotes){
    viewComponent = ref({
    CreateBallotBoxe : false,
    CardBallot : true
});
}
else {
    viewComponent = ref({
    CreateBallotBoxe : true,
    CardBallot : false
});
}
</script>
<template>
    <div class="flex flex-col items-center space-y-5 bg-white rounded py-2">
        <div class="flex w-3/4 justify-end space-x-5">
                <button @click="viewComponent.CreateBallotBoxe = true; viewComponent.CardBallot = false" class="bg p-2 rounded">Create Voting</button>
                <button @click="viewComponent.CardBallot = true; viewComponent.CreateBallotBoxe = false" 
                :class="{'bg-gray-200': !haveVotes , 'bg' : haveVotes}"
                class=" p-2 rounded">View Ballot Boxe</button>
        </div>
        <CreateBallotBoxe v-show="viewComponent.CreateBallotBoxe"></CreateBallotBoxe>
        <div v-show="viewComponent.CardBallot" class="w-full flex flex-col items-center overflow-y-scroll h-full">
            <CardBallot v-for="vote in data.vote" :title="vote.title" 
            class="bg-red-500 rounded mb-5"></CardBallot>
            <div v-show="!haveVotes"
            class="h-full flex w-full justify-center items-center">
                 <span class="text-xl ">You have no votes created...</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bg{
    background-image: url("../assets/bgLogin.svg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
 }
.bg:hover{
        object-fit: contain;
        background-image: url("../assets/bgButtonRedandWhite.svg");

    }
</style>