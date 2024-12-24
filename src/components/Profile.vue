<script setup>
import { ref, onMounted,computed } from 'vue';
import DashBoard from './DashBoard.vue';
import BallotBoxe from './BallotBoxe.vue';

let isLoading = ref(true);
let data = ref({});
const token = localStorage.getItem('token');

const fetchData = async () => {
    try {
        const response = await fetch(`http://127.0.0.1:8080/user/${token}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        data.value = result;
        isLoading.value = false;
    } catch (error) {
        console.error('Error:', error);
    }
};

onMounted(() => {
    fetchData();
});

const routes = {
  '/': DashBoard,
  '/BallotBoxe': BallotBoxe
}


const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
    <div class="w-full flex h space-x-10 p-5">
        <div class="h-full bg  flex flex-col justify-start items-center py-10 space-y-5 text-white w-2/12 rounded-lg">
            <a href="#/" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">Dashboard</a>
            <a href="#/BallotBoxe" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">My ballot boxe</a>
            <a href="" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">My votes</a>
            <a href="" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">Option</a>
            <a href="" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">Option</a>
            <img src="../assets/Estadistica-icon.png"  class="w-3/5 pt-10 " alt="">
        </div>
        <component class="w-4/5  h-full " v-if="!isLoading" :is="currentView" :data="data"></component>
        <div v-else class="flex justify-center items-center h-full"> 
            <p>Cargando datos...</p>
        </div>

    </div>
</template>
<style scoped>
.h{
    height: calc(100vh - 64px);
}
.bg{
    background-image: url('../assets/bgColum.svg');
    background-size: cover;
    }
img:hover{
    filter: drop-shadow(0 0 0.75rem #00000070);
}
</style>
