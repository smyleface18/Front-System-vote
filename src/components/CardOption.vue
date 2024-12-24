<script setup>
const props = defineProps(['name','url'])
</script>
<template>
    <div>
        <img src="" alt="">
        <p>{{ props.name }}</p>
    </div>
</template>