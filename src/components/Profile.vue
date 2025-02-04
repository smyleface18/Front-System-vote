<script setup>
import { ref, onMounted} from 'vue';
import { RouterLink, RouterView } from 'vue-router';

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
        if (response.status === 403) {
            localStorage.setItem("token","")
        }
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

</script>

<template>
    <div class="w-full flex h space-x-10 p-5">
        <div class="h-full bg  flex flex-col justify-start items-center py-10 space-y-5 text-white w-2/12 rounded-lg">
            <RouterLink  to="/Profile" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">Dashboard</RouterLink>
            <RouterLink  to="/BallotBoxe" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">My ballot boxe</RouterLink>
            <RouterLink  to="/YourVotes" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">My votes</RouterLink>
            <RouterLink  to="/Vote" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">Participate</RouterLink>
            <RouterLink  to="" class="w-3/5 text-center py-2 hover:bg-[#0000003d] rounded-md">Option</RouterLink>
            <img src="../assets/Estadistica-icon.png"  class="w-3/5 pt-10 " alt="">
        </div>
        <RouterView class="w-4/5  h-full " v-if="!isLoading" :is="currentView" :data="data" :idUser="data.id" :voted="data.voted" ></RouterView>
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
