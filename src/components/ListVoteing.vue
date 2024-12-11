<script setup>
import { onMounted,ref } from 'vue';
const props = defineProps(['votes'])
let hidden = ref([]);


function winner(options){
    return options.reduce((prev,current) => (prev.votes > current.votes)? prev : current)
}

function viewVotes(){
    const ELEMENT = [...document.querySelectorAll("#Winner")];
    const VOTES = [...document.querySelectorAll("#votes")];

    ELEMENT.forEach(element =>{
        hidden.value.push(true)
    })
    ELEMENT.forEach((element,index) => {
        element.addEventListener('mouseenter',() =>{
            hidden.value[index] = false;
        })
    });
    ELEMENT.forEach((element,index) => {
        element.addEventListener('mouseleave',() =>{
            hidden.value[index] = true;
        })
    });

    VOTES.forEach((element,index) => {
        element.addEventListener('mouseenter',() =>{
            hidden.value[index] = false;
        })
    });
    VOTES.forEach((element,index) => {
        element.addEventListener('mouseleave',() =>{
            hidden.value[index] = true;
        })
    });
}

onMounted(() => {
    viewVotes()
})

</script>
<template>
    <div class="flex w-full h-full  flex-col  overflow-y-scroll overflow-x-hidden ">
        <div v-for="(vote, index) in props.votes"
            class="flex items-center px-10 w-full py-5 text-sm mx-auto" >
            <div class="flex space-x-4 w-3/4">
                <p class="bgRed size-5 rounded-full text-center ">{{ index + 1 }}</p>
                <p class=""> {{ vote.title }}</p>
            </div>
            <div  class="flex items-center text-center ">
                <p id="Winner" class="hover:cursor-none px-2">{{winner(vote.options).text}}</p>
                <p id="votes" :class="{ 'hidden' : hidden[index]}" class="z-10 absolute bgRed rounded px-5 left-[60%] hover:cursor-none">won with {{winner(vote.options).votes}} votes</p>
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