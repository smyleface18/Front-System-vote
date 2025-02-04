<script setup>
import CardBallot from './CardBallot.vue';
import CreateBallotBoxe from './CreateBallotBoxe.vue';
import IconKey from './icons/IconKey.vue'
import { ref, reactive } from 'vue';
import Swal from 'sweetalert2';
import { RouterLink } from 'vue-router';

const props = defineProps(['data']);
let haveVotes = props.data.vote.length !== 0;
let votes = ref([...props.data.vote].reverse());
let tokenVote = ref()
let status = ref([])
const viewComponent = reactive({
    CreateBallotBoxe: !haveVotes,
    CardBallot: haveVotes
});
async function GetToken(id){
     const Response = await fetch("http://127.0.0.1:8080/vote/generate/token/access",{
        method: 'POST',
        headers:{
            'Authorization' : 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            idVote : id
        })
    })
    if(Response.ok){
        tokenVote.value = await Response.text()
        await navigator.clipboard.writeText(tokenVote.value);
        Swal.fire({                    
                    text: "The code has been generated correctly and has already been copied.",
                    icon: "success"})
    }
    if (response.status == 403) {
            console.log("s")
            localStorage.setItem("token","")
        }
    else {
        Swal.fire({                    
                    text: "code not generated",
                    icon: "error"})
    }
}
function handleStatus(data){
    status.value.push(data)
}
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
            <CardBallot v-for="(vote, index) in votes" :key="vote.id" :vote="vote" @status="handleStatus" class="rounded mb-5  ">
                <template #footer>
                    <div class="flex w-full justify-end">
                        <IconKey   @click="GetToken(vote.id)" class="mx-5 bg p-2 rounded size-9 hover:cursor-pointer"></IconKey>
                        <RouterLink class="mx-5 bg p-2 rounded" :to="{name: 'BallotBoxSettings', query:{idVote: vote.id}}">view all information</RouterLink>
                    </div>
                </template>
            </CardBallot>
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