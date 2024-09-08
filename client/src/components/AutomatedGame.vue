<script setup lang="ts">

defineProps<{
  msg: string
}>()

function runSimulation() {
    
}

</script>

<template>
    <div>
        automated game, {{ msg }}

        <input type="number" min="0" max="5000" step="1" class="form-control" inputmode="numeric">


        <button class="btn btn-primary">Run Simulation</button>

    </div>
</template>

<style scoped>

</style>
  