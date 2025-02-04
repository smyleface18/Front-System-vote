<script setup>
import IconSearch from './icons/IconSearch.vue'
import { onMounted, ref } from 'vue';

const props = defineProps(['idUser'])
let tokenVote = ref()
let vote = ref("")
let time = new Date().getTime();
let opSelect = ref([]);
onMounted(() => {
    submitForm()

})
function submitForm() {
    const form = document.querySelector("#form");
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const response = await fetch(`http://127.0.0.1:8080/vote/${props.idUser}/${tokenVote.value}/${time}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            vote.value = await response.json()
            initSelect()
        }
        if (response.status === 403) {
            localStorage.setItem("token", "")
        }
    })
}
function optionSelect(index) {
    opSelect.value.forEach((op, i) => { opSelect.value[i].select = false })

    opSelect.value[index].select = !opSelect.value[index].select;
}
function initSelect() {
    vote.value.options.forEach((option) => {
        opSelect.value.push({
            select: false,
            id: option.id
        })
    });
}
function sendVote() {
    let idOption = -1
    opSelect.value.forEach((op) => {
        if (op.select === true) { idOption = op.id }
    })
    const response = fetch(`http://127.0.0.1:8080/option/voted/${vote.value.id}/option/${idOption}/${localStorage.getItem("token")}`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("token"),
            'Content-Type': 'application/json'
        }
    })
    if (response.status === 403) {
        localStorage.setItem("token", "")
    }
}
</script>
<template>
    <div class="bg-white flex flex-col items-center overflow-y-auto ">
        <h5 class="font-medium text-3xl text-center py-5 bgText">Seek voting</h5>
        <div class="w-2/3 mx-auto mb-5">
            <form id="form" class="bg-gray-200 mx-auto h-10 rounded-3xl px-5 flex items-center">
                <input type="text" name="" v-model="tokenVote"
                    class=" focus:outline-none  bg-gray-200 outline-blue-500 w-full" required>
                <button type="submit">
                    <IconSearch class="size-9 hover:cursor-pointer"></IconSearch>
                </button>
            </form>
        </div>
        <h6 class="font-bold text-4xl text-center  p-3 bgText">{{ vote.title }}</h6>
        <div class=" w-3/4  flex flex-wrap space-x-2 justify-center items-center p-2 ">
            <div v-for="(option, index) in vote.options" :key="option.id" @click="optionSelect(index)"
                :class="{ 'bg2': opSelect[index].select }"
                class="rounded  p-5 h-[200px]  flex hover:scale-105 flex-col items-center space-y-2  transition ease-linear delay-200  hover:cursor-pointer ">
                <img src="../assets/noble.png" alt="img option" class="rounded-full bg-black h-[90%] p-1">
                <p class="flex-wrap w-full text-center">{{ option.text }}</p>
            </div>
        </div>
        <div class="w-full flex justify-center py-2">
            <button @click="sendVote()" class="text-center font-medium text-xl p-2 bg2 rounded text-white">send
                vote</button>
        </div>
    </div>
</template>
<style scoped>
.bgText {
    background: #1980E6;
    /* Fondo de color azul */
    background: linear-gradient(to right, #158adc 10%, #02d7a9 70%);
    /* Degradado de azul a verde */
    -webkit-background-clip: text;
    /* Clip de fondo para texto en WebKit */
    -webkit-text-fill-color: transparent;
    /* Relleno de color transparente para WebKit */
    background-clip: text;
    /* Clip de fondo para texto estándar */

}

.bg2 {
    background-image: url("../assets/bgColum.svg");
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
