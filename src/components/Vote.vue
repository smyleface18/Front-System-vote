<script setup>
import IconSearch from './icons/IconSearch.vue'
import CardBallot from './CardBallot.vue';
import { onMounted, ref } from 'vue';

const props = defineProps(['idUser'])
let tokenVote = ref()
let vote = ref()
let time = new Date().getTime();
onMounted(() =>{
    submitForm()
})
function submitForm(){
    const form =  document.querySelector("#form");
    form.addEventListener('submit', async (e) =>{
        e.preventDefault()
        const response = await fetch(`http://127.0.0.1:8080/vote/${props.idUser}/${tokenVote.value}/${time}`,{
            method : 'GET',
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem("token"),
                'Content-Type' : 'application/json'
            }
        })
        if(response.ok){
            vote.value = await response.json()
        }
    })
}
</script>
<template>
    <div class="bg-white">
        <h5 class="font-medium text-2xl text-center py-5 bgText">Seek voting</h5>
        <div class="w-full flex flex-col items-center space-y-5">
                <div class="w-2/3" >
                    <form id="form" class="bg-gray-200 mx-auto h-10 rounded-3xl px-5 flex items-center">
                        <input type="text" name="" v-model="tokenVote" class=" focus:outline-none  bg-gray-200 outline-blue-500 w-full" required>
                        <button type="submit"><IconSearch class="size-9 hover:cursor-pointer" ></IconSearch></button>
                    </form>
                </div>
                <CardBallot :vote="vote" v-if="vote"></CardBallot>
        </div>
    </div>
</template>
<style scoped>
.bgText{
    background: #1980E6; /* Fondo de color azul */
    background: linear-gradient(to right, #158adc 10%, #02d7a9 70%); /* Degradado de azul a verde */
    -webkit-background-clip: text; /* Clip de fondo para texto en WebKit */
    -webkit-text-fill-color: transparent; /* Relleno de color transparente para WebKit */
    background-clip: text; /* Clip de fondo para texto estándar */

}
</style>
