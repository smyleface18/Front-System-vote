<script setup>
import MenuColum from './MenuColum.vue';
const props = defineProps(['name','id'])
</script>
<template>
    <div class="h-full flex p-5 justify-around  ">
        <MenuColum class=" w-2/12 rounded-2xl"></MenuColum>
        <div class="w-4/5">
            <h5 class="text-xl">Welcome back <span class="font-semibold">{{ props.name }} </span>😁</h5>
            <div class="">
                <div class="w-56 h-72">
                    {{ props.id }}
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>


</style>