<script setup>
import CardBallot from './CardBallot.vue';
import CreateBallotBoxe from './CreateBallotBoxe.vue';
import { ref, reactive } from 'vue';

const props = defineProps(['data']);
let haveVotes = props.data.vote.length !== 0;
let votes = ref([...props.data.vote].reverse());

const viewComponent = reactive({
    CreateBallotBoxe: !haveVotes,
    CardBallot: haveVotes
});
</script>

<template>
    <div class="flex flex-col items-center space-y- bg-white rounded py-2 overflow-y-auto">
        <div class="flex w-3/4 justify-end space-x-5">
            <button @click="viewComponent.CreateBallotBoxe = true; viewComponent.CardBallot = false" class="bg p-2 rounded">Create Voting</button>
            <button @click="viewComponent.CardBallot = true; viewComponent.CreateBallotBoxe = false" 
                    :class="{'bg-gray-200': !haveVotes, 'bg': haveVotes}"
                    class="p-2 rounded">View Ballot Boxe</button>
        </div>
        <CreateBallotBoxe v-if="viewComponent.CreateBallotBoxe" :idUser="props.data.id" ></CreateBallotBoxe>
        
        <div v-if="viewComponent.CardBallot" class="w-full flex flex-col items-center pt-10   mt-2 ">
            <CardBallot v-for="(vote, index) in votes" :key="index" :vote="vote" class="rounded mb-5  "></CardBallot>
            <div v-show="!haveVotes" class="h-full flex w-full justify-center items-center">
                <span class="text-xl">You have no votes created...</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg{
    background-image: url("../assets/bgColum.svg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
 }
.bg:hover{
        object-fit: contain;
        background-image: url("../assets/bgButtonRedandWhite.svg");

    }
</style>