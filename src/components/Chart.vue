<script setup>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';
const props = defineProps(['data'])

onMounted(() => {
    const ctx = document.querySelector('#myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{ label: '# of Votes', data: [102, 19, 3, 5, 2, 3], borderWidth: 1 }]
        },
        options: {
            scales:
            {
                y:
                    { beginAtZero: true }
            }
        }
    });
});
</script>
<template>
    <canvas id="myChart"></canvas>
</template>