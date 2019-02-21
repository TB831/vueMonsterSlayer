new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() { // Method for starting game
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {    // Method for attacking

        },
        specialAttack: function() {

        },
        heal: function() {

        },
        giveUp: function() {

        },
    }
});