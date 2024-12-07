<script setup>
import { ref, onMounted } from 'vue';
import DashBoard from './DashBoard.vue';

const data = ref({});
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
    } catch (error) {
        console.error('Error:', error);
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div class="h-full w-full">
        <DashBoard :name="data.name" :id="data.id">
            <h4>hola</h4>
            <h4>{{ data.name }}</h4>
            <h4>{{ data.vote }}</h4>
        </DashBoard>
    </div>
</template>
