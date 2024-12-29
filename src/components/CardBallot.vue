<script setup>
import iconStatus from './icons/iconStatus.vue';
const props = defineProps(['vote']);
let textActived;
let dateEnd = new Date(props.vote.dateEnd * 1);
let status = new Date() < dateEnd || dateEnd.getTime() === new Date(0).getTime();

const emit = defineEmits(['status'])
if (status) {
    textActived = 'activated';
    SendStatus()
} else {
    textActived = 'deactivated';
    SendStatus()
}

function SendStatus(){
    emit('status',status)
}
</script>

<template>
    <div class="w-3/4 bgCard py-5 rounded">
        <div class="w-full flex justify-end items-center px-2">
            <p class="font-medium px-2 text-emerald-500" :class="{ '!text-red-500': !status }">{{ textActived }}</p>
            <iconStatus class="text-emerald-500" :class="{ '!text-red-500': !status }"></iconStatus>
        </div>
        <h5 class="font-bold text-4xl text-center py-5 bgText">{{ props.vote.title }}</h5>
        <div class="flex justify-center flex-wrap space-x-2">
            <div v-for="option in props.vote.options" :key="option.id" class="flex flex-col justify-center items-center px-5 w-[200px]">
                <img src="../assets/king.png" alt="img option" class="size-24 rounded-full bg-black p-1">
                <p class="text-center py-3 font-medium">{{ option.text }}</p>
            </div>
        </div>
        <div class="flex justify-end">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.bg{
    background-image: url("../assets/bgButton.svg");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
 }
.bgCard {
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);

}
.bgText{
    background: #1980E6; /* Fondo de color azul */
    background: linear-gradient(to right, #158adc 10%, #02d7a9 70%); /* Degradado de azul a verde */
    -webkit-background-clip: text; /* Clip de fondo para texto en WebKit */
    -webkit-text-fill-color: transparent; /* Relleno de color transparente para WebKit */
    background-clip: text; /* Clip de fondo para texto estándar */

}

</style>
