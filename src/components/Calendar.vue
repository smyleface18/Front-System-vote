<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['data'])
const attributes = ref([])

onMounted(() =>   generateAttributes())
function generateAttributes(){
    const COLORS = ['red','orange','yellow','green','teal','indigo','purple','pink','gray','blue'];
    attributes.value = props.data.map( (vote,index) => ({
            popover: {
                    visibility: 'hover',
                    isInteractive: false,
                    label: vote.title

                },
                highlight:{
                    color : COLORS[Math.floor(Math.random() * COLORS.length)]
                },
                dates:{
                    start: new Date(vote.dateInit*1),
                    end: new Date(vote.dateEnd*1)
                },
                order :index
        
    }))
}
</script>
<template>
        <div class="w-full h-full">
            <vc-calendar style="width: 100%; height: 100%;" :attributes='attributes' lang="us"/>                        
        </div>
</template>