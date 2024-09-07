<script setup lang="ts">
import InteractiveGame from './InteractiveGame.vue';

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    <h1 class="green">{{ msg }}</h1>
    <InteractiveGame></InteractiveGame>!
  </div>
</template>

<style scoped>

</style>
