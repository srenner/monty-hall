<template>
    <div id="interactive-game-intro">
        <p class="text-center fs-2">Select the door you think contains the prize.</p>
    </div>
    <div id="interactive-game-doors" class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Door #1
                </div>
                <img src="../assets/door-closed-fill.svg" class="" />
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Door #2
                </div>
                <img src="../assets/door-closed-fill.svg" class="" />
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Door #3
                </div>
                <img src="../assets/door-closed-fill.svg" class="" />
            </div>
        </div>
    </div>

    <div class="d-none">
        <p>Interesting choice. Before we reveal the winning door, I am going to show you one of the doors you <span class="">didn't</span> choose.</p>
        <p>There is one more step to the game. I am giving you the opportunity to change your answer. Would you like to select the other door? Think carefully!</p>
    
        <p>Believe it or not, you have a better chance to win the game if you always switch doors.</p>
        <p>Don't believe me? I didn't believe it either at first. Let's automate the game to play it hundreds of times, and see how often it's to the player's advantage to switch doors.</p>
    </div>
</template>

<style scoped>

</style>
  