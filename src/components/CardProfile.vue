<script setup>
import IconEdit from './IconEdit.vue'
import { ref, onMounted } from 'vue';
 const props = defineProps(['name','email'])
 let edit = ref(false)

onMounted(() =>{
    const BUTTON_EDIT = document.querySelector("#buttonEdit");

    BUTTON_EDIT.addEventListener('click',() =>{
        edit.value = !edit.value;
    })
})

</script>
<template>
    <div class="h-full w-full bg--600 flex flex-col justify-start items-center">
        <button class="ml-[80%]">
            <IconEdit id="buttonEdit"></IconEdit>
        </button>
        <img src="../assets/caballeroV2.png" alt="foto profile" class="w-1/2 rounded-full bg-black">
        <div v-if="!edit" class="flex flex-col space-y-5 p-10 w-full">
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Name</h6>
                <p>{{ props.name }}</p>
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Email</h6>
                <p>{{ props.email }}</p>
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Password</h6>
                <p>*******</p>
            </div>
        </div>
        <form v-else action="" class="flex flex-col space-y-5 p-10 w-full">
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Name</h6>
                <input type="text" name="" id="" class="bg-red-200 rounded focus:outline-none" :placeholder="props.name">
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Email</h6>
                <input type="email" name="" id="" class="bg-red-200 rounded focus:outline-none" :placeholder="props.email">
            </div>
            <div class="flex flex-col items-start">
                <h6 class=" text-gray-500 text-xs">Your Password</h6>
                <input type="text" name="" id="" class="bg-red-200 rounded focus:outline-none" placeholder="new password">
            </div>
            <button type="submit" class=" rounded bg-red-500 text-white">Send</button>
        </form>
    </div>
</template>