<script setup>
import { onMounted,ref } from 'vue';
const props = defineProps(['votes'])
let hidden = ref([]);


function winner(options){
    let value = options.some(option => option.votes >0)
    if(value){
        return options.reduce((prev,current) => (prev.votes > current.votes)? prev : current)
    }
    return {
        text : "has no votes"
    }
}


function viewVotes(){
    const ELEMENT = [...document.querySelectorAll("#Winner")];
    ELEMENT.forEach(() =>{
        hidden.value.push(true)
    })

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
                <p id="Winner" class=" px-2">{{winner(vote.options).text}}</p>
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