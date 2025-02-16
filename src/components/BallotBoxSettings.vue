<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted, nextTick } from 'vue';
import CardBallot from './CardBallot.vue';
import Chart from 'chart.js/auto';


const props = defineProps(['data'])
const route = useRoute();
const idVote = route.query.idVote;
let vote = props.data.vote.find(vote => vote.id == idVote)
console.log(vote)

let canva = ref(null)


function winner(options) {
  let value = options.some(option => option.votes > 0)
  if (value) {
    return options.reduce((prev, current) => (prev.votes > current.votes) ? prev : current)
  }
  return {
    text: false
  }
}

onMounted(async () => {
  await nextTick();

  new Chart(
    canva.value,
    {
      type: 'bar',
      data: {
        labels: [...vote.options].map(Option => Option.text),
        datasets: [
          {
            label: vote.title,
            data: [...vote.options].map(Option => Option.votes)
          }
        ]
      }
    }
  );
})

</script>

<template>
  <div class="bg-white overflow-y-scroll flex flex-col items-center space-y-5 py-5 ">
    <CardBallot :vote="vote" class="w-3/4"></CardBallot>
    <div v-if="winner(vote.options).text">
      <h6 class="text-black p-2 rounded font-semibold text-4xl py-5 text-center">Statistics & Data</h6>
      <canvas ref="canva" class="w-[60vw]"></canvas>

      <div class="w-full items-center flex flex-col gap-3 py-5">
        <h6 class="font-semibold text-4xl">Winner</h6>
        <img src="../assets/king.png" alt="winner" class="w-1/3">
        <p class="font-bold text-2xl">{{ winner(vote.options).text }}</p>
      </div>

      <div class="space-y-5 pt-5">
        <h6 class="font-bold border-red-400  text-4xl text-center bgText">Participants</h6>
        <div v-for="voter in vote.voters" class="flex items-center gap-2">
          <img src="../assets/caballeroV2.png" alt="" class="size-14">
          <p>{{ voter.name }}</p>
        </div>
      </div>
    </div>
    <h6 v-else class="py-10 font-semibold text-4xl">The vote has no votes</h6>
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