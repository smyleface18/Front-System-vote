<script setup>
import iconStatus from './icons/iconStatus.vue';
import { ref } from 'vue';


const props = defineProps(['vote'])
let textActived
let dateEnd = new Date(props.vote.dateEnd * 1)
let status = new Date() < dateEnd || dateEnd.getTime() === new Date(0).getTime();
let showInformation = ref(false)
if (status) {
    textActived = 'activated'
}
else {
    textActived = 'deactivated'
}



</script>
<template>
    <div class="w-3/4 bgCard py-5">
        <div class="w-full flex justify-end items-center py-2 px-2">
            <p class="font-medium px-2 text-emerald-500" :class="{ '!text-red-500': !status }">{{ textActived }}</p>
            <iconStatus class="text-emerald-500" :class="{ '!text-red-500': !status }"></iconStatus>
        </div>
        <h5 class="font-semibold text-3xl text-center py-2">{{ props.vote.title }}

        </h5>
        <div class="flex justify-around  overflow-y-scroll flex-wrap max-h-40">
            <div v-for="option in props.vote.options" class="flex flex-col justify-center items-center px-5">
                <img src="../assets/king.png" alt="img option" class="size-24 rounded-full bg-black p-1">
                <p class="text-center py-3 font-medium ">{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bgCard {
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.75);

}
</style>
