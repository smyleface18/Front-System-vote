<script setup>
import { useRoute } from 'vue-router';
import CardBallot from './CardBallot.vue';

const props = defineProps(['data'])
const route = useRoute();
const idVote = route.query.idVote;
let vote = props.data.vote.find(vote => vote.id == idVote)
console.log(vote)
</script>

<template>
  <div class="bg-white overflow-y-scroll flex flex-col items-center space-y-5 py-5">
    <CardBallot :vote="vote" class="w-3/4"></CardBallot>
    <div>
      <div class="">
        <h6 class="text-white bg-black p-2 rounded font-semibold text-3xl py-5">Statistics & Data</h6>
      </div>
      <div v-for="voter in vote.voters" class="flex items-center">
        <img src="../assets/caballeroV2.png" alt="" class="size-14">
        <p>{{ voter.name }}</p>
      </div>

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
</style>