<script setup>
import CardBallot from './CardBallot.vue';
const props = defineProps(['voted'])

function winner(options){
    let value = options.some(option => option.votes >0)
    if(value){
        return options.reduce((prev,current) => (prev.votes > current.votes)? prev : current)
    }
    return {
        text : "has no votes"
    }
}
</script>
<template>
    <div class="bg-white w-full h-full overflow-y-auto py-2">
        <h4 class="text-4xl text-center py-5 bgText font-bold">You have participated in the following votes</h4>
        <div v-for="voted in [...props.voted].reverse()" class="py-2 flex justify-center">
            
            <CardBallot :vote="voted" class="flex flex-col items-center">
                <template #header>
                    <div class="flex  w-full px-5 font-medium">
                        <img src="../assets/caballeroV2.png" alt="" class="size-10 bg-black rounded-full">
                        <p class="text-center p-2">{{ voted.userSimple.name }}</p>
                    </div>
                </template>
                <template #footer >
                    <h5 class="text-center py-3 bgText font-semibold text-xl">Winner</h5>
                    <div class="bg-yellow-300 size-[200px] flex flex-col items-center rounded-full justify-center">
                        <img src="../assets/king.png" alt="" class="h-2/3">
                        <p class="font-medium ">{{ winner(voted.options).text }}</p>
                    </div>
                </template>
            </CardBallot>

        </div>
    </div>
</template>
<style scoped>
.bgText{
    background: #1980E6; /* Fondo de color azul */
    background: linear-gradient(to right, #158adc 10%, #02d7a9 70%); /* Degradado de azul a verde */
    -webkit-background-clip: text; /* Clip de fondo para texto en WebKit */
    -webkit-text-fill-color: transparent; /* Relleno de color transparente para WebKit */
    background-clip: text; /* Clip de fondo para texto estándar */

}
</style>