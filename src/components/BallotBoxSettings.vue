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
    <CardBallot :vote="vote" class="w-3/4 h-full overflow-y-auto"></CardBallot>
    <div v-for="voter in vote.voters" >
        {{ voter }}
    </div>
  </div>
</template>
