<script setup lang="ts">
import InteractiveGame from '@/components/InteractiveGame.vue';

import { ref } from 'vue'

const playingInteractive = ref(false);


</script>

<template>
  <main>
    <div v-if="playingInteractive === false" title="Introduction">
      <p class="text-center">This is a game where you guess which door contains a prize. Would you like to play?</p>
      <div class="text-center">
        <button type="button" class="btn btn-primary btn-lg m-2" @click="playingInteractive = true">Yes</button>
        <button type="button" class="btn btn-secondary btn-lg m-2">No</button>
      </div>
    </div>

    
    
    <InteractiveGame v-if="playingInteractive"></InteractiveGame>
    </main>
</template>
