<script setup lang="ts">
import InteractiveGame from '@/components/InteractiveGame.vue';
</script>

<template>
  <main>
    <p>This is a game where you guess which door contains a prize. Would you like to play?</p>
    <InteractiveGame></InteractiveGame>
    <p>Interesting choice. Before we reveal the winning door, I am going to show you one of the doors you <span class="">didn't</span> choose.</p>
    <p>There is one more step to the game. I am giving you the opportunity to change your answer. Would you like to select the other door? Think carefully!</p>
    
    <p>Believe it or not, you have a better chance to win the game if you always switch doors.</p>
    <p>Don't believe me? I didn't believe it either at first. Let's automate the game to play it hundreds of times, and see how often it's to the player's advantage to switch doors.</p>
  </main>
</template>
