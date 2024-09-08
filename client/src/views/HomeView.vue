<script setup lang="ts">
import InteractiveGame from '@/components/InteractiveGame.vue';
import AutomatedGame from '@/components/AutomatedGame.vue';

import { ref } from 'vue'

let playingInteractive = ref(false);
const playingAutomated = ref(false);

function setInteractive() {
  playingInteractive.value = true;
  playingAutomated.value = false;
}

function setAutomated() {
  playingAutomated.value = true;
  playingInteractive.value = false;
}

</script>

<template>
  <main>
    <div v-if="playingInteractive === false && playingAutomated === false" title="Introduction">
      <p class="text-center">This is a game where you guess which door contains a prize. Would you like to play?</p>
      <div class="text-center">
        <button type="button" class="btn btn-primary btn-lg m-2" @click="setInteractive()">Yes</button>
        <button type="button" class="btn btn-secondary btn-lg m-2" @click="setAutomated()">No</button>
      </div>
    </div>
    
    <InteractiveGame v-if="playingInteractive"></InteractiveGame>
    <AutomatedGame v-if="playingAutomated" :msg="'hi'"></AutomatedGame>

  </main>
</template>
